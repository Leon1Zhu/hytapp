<template>
  <div class="manage-page" v-show="successPWD">
    <div>
      <div style="padding: 10px;">预约名单:</div>
      <div style="position: absolute;right:10px;top: 3px;">
        <el-select v-model="value" placeholder="请选择" @change="selectChangeFun">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%;margin-top: 5px;">
      <el-table-column
        prop="userName"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="userPhone"
        label="电话"
      >
      </el-table-column>
      <el-table-column
        prop="subscribeTime"
        label="预约日期">
      </el-table-column>
    </el-table>

    <div class="block" style="width: 100%;margin: 0 auto;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10,20,30,40]"
        :page-size="pagelength"
        layout="sizes, prev, pager, next"
        :total="totalCount"
      >
      </el-pagination>
    </div>

    <div id="main" style="height:500px;margin-top: 10%"></div>
  </div>
</template>

<script>
  import './ManagePage.scss'

  export default {
    data() {
      return {
        nowpage: 1,
        pagelength: 10,
        totalCount: 0,
        tableData: [],
        options: PROOPTION,
        proName: 'wdm',
        successPWD: false,
        value: '南京万达茂'
      }
    },
    components: {},
    created() {
      var vm = this;
      vm.setCharts();
      vm.getTableInfo();
    },
    methods: {
      selectChangeFun(v1, v2) {
        this.proName = v1
        this.getTableInfo();
        this.setCharts();
      },
      handleSizeChange(val) {
        this.pagelength = val;
        this.getTableInfo();
      },
      handleCurrentChange(val) {
        this.nowpage = val
        this.getTableInfo();
      },
      getTableInfo() {
        let that = this;
        api.getSubscribeTable(this.nowpage - 1, this.pagelength, this.proName).then(response => {
          this.totalCount = response.data.totalElements
          let data = response.data.content;
          for (let i = 0; i < data.length; i++) {
            data[i].subscribeTime = new Date(data[i].subscribeTime).Format("yyyy-MM-dd hh:mm:ss")
          }
          that.tableData = data
        }).catch(response => {
          alert("表格数据获取出错！")
        })
      },
      setCharts() {
        api.getSubscribeChart(this.proName).then((response) => {
          console.log(response)
          var responsedata = response.data;
          var data = [];
          var dataName = [];
          var seriesData = [];
          console.log(responsedata)
          responsedata.forEach((item) => {
            data.push(new Date(item.subscribe_time).Format("yyyy-MM-dd"))
            seriesData.push(item.usercount)
            dataName.push(new Date(item.subscribe_time).Format("yyyy-MM-dd") + "预约人数")
          })

          // 基于准备好的dom，初始化echarts图表
          var myChart = echarts.init(document.getElementById('main'));

          var option = {
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['7天内预约人数']
            },
            toolbox: {
              show: true,
              feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: data
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '预约人数',
                type: 'line',
                stack: '总量',
                data: seriesData,
              }
            ]
          };

          // 为echarts对象加载数据
          myChart.setOption(option);

        }).catch((response) => {
          alert("预约信息获取出错")
        })
      }
    }
  }
</script>
