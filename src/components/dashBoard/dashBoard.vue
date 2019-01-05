 <!--
  @author zhuliang
  @date 2018/11/19 12:48 PM
-->
<template>
<div class="hyt-dashBoard">
  <div class="dashboard-top-content">
    <node-card :data="allSubscribe">
      <div  class="card-content">
        <div class="node-card-detail">手机预约<span>{{mobileCount}}</span>人</div>
        <div class="node-card-detail">PC预约<span>{{PCCount}}</span>人</div>
      </div>
    </node-card>
    <node-card :data="weekSubscribe">
      <div  class="card-content">
        <div class="node-card-detail">暂无详细数据</div>
      </div>
    </node-card>
  </div>
  <div id="main" style="min-height:200px;width: 100%;"></div>
</div>
</template>

<script>
import './dashBoard.scss';
import dashBoardApi from '../../api/dashBoard';
import nodeCard from '../nodeCard/nodeCard';
let timer;


export default {
  name: 'dash-board',
  data() {
    return {
      myChart: null,
      allSubscribe: {
        type: '总预约人数',
        sum: 0,
      },
      weekSubscribe: {
        type: '本周预约人数',
        sum: 0,
      },
      mobileCount: 0,
      PCCount: 0,
    };
  },
  components: {
    nodeCard,
  },
  created() {
    this.initData();
  },
  mounted() {
    this.$nextTick(() => {
      this.setCharts();
    });
    window.onresize = () => {
      clearTimeout(timer);
      setTimeout(() => {
        this.myChart.resize();
      },1000)
    }
  },
  methods: {
    initData() {
      dashBoardApi.getDashBoardInfo().then((response) => {
        response.data.allSubscribe.forEach((item) => {
          if (item.origin === 'MOBILE') {
            this.mobileCount ++;
          } else {
            this.PCCount++;
          }
        })
        this.allSubscribe.sum = response.data.allSubscribe.length;
        this.weekSubscribe.sum = response.data.weekSubscribe.length;
      })
    },
    setCharts() {
      dashBoardApi.getChartsData().then((response) => {
        console.log(response)
        var responsedata = response.data;
        var data = [];
        var dataName = [];
        var seriesData = [];
        console.log(responsedata)
        responsedata.forEach((item) => {
          data.push(this.moment(item.order_time).format("YYYY-MM-DD"))
          seriesData.push(item.usercount)
          dataName.push(this.moment(item.order_time).format("YYYY-MM-DD") + "预约人数")
        })

        // 基于准备好的dom，初始化echarts图表
        this.myChart = echarts.init(document.getElementById('main'));

        const option = {
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
        this.myChart.setOption(option);

      }).catch((response) => {
        alert("预约信息获取出错")
      })
    }
  },
};
</script>
