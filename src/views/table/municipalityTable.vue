<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        align="center"
        label="municipalityCode"
        width="80"
      >
        <template slot-scope="{row}">
          <span>{{ row.municipalityCode }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="180px"
        align="center"
        label="municipalityName"
      >
        <template slot-scope="{row}">
          <span>{{ row.municipalityName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        label="prefectureCode"
        width="180px"
      >
        <template slot-scope="{row}">
          <span>{{ row.prefectureCode }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="180px"
        align="center"
        label="parentDesignatedCityCode"
      >
        <template slot-scope="{row}">
          <span>{{ row.parentDesignatedCityCode }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="180px"
        align="center"
        label="countyId"
      >
        <template slot-scope="{row}">
          <span>{{ row.countyId }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getMunicipalities } from '@/api/municipality'
import { IMunicipalityData } from '@/api/types'

@Component({
  name: 'InlineEditTable'
})
export default class extends Vue {
  private list: IMunicipalityData[] = []
  private listLoading = true
  private listQuery = {
    offset: 0,
    limit: 10
  }

  created() {
    this.getList()
  }

  private async getList() {
    this.listLoading = true
    const { data } = await getMunicipalities(this.listQuery)
    const items = data.results
    this.list = items.map((v: any) => {
      this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
      v.originalCode = v.municipalityCode // will be used when user click the cancel botton
      return v
    })
    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false
    }, 0.5 * 1000)
  }

  private cancelEdit(row: any) {
    row.title = row.originalCode
    row.edit = false
    this.$message({
      message: 'The title has been restored to the original value',
      type: 'warning'
    })
  }

  private confirmEdit(row: any) {
    row.edit = false
    row.originalCode = row.municipalityCode
    this.$message({
      message: 'The title has been edited',
      type: 'success'
    })
  }
}
</script>

<style lang="scss" scoped>
.edit-input {
  padding-right: 100px;
}

.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
