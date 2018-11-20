 <!--
  @author zhuliang
  @date 2018/11/19 8:19 PM
-->
<template>
<div class="tel-cord">
  <Select v-model="selectModel" style="width: 180px"  @on-change="selectType($event)">
    <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
  </Select>
  <div class="table-content"></div>
  <div v-if="data1.length > 0">
    <Table  class="plantform-table" stripe :columns="columns1" :data="data1"></Table>
    <Page :total="total" :page-size="pagelength"  size="small" @on-change="changePage($event)" />
  </div>
  <no-data-com v-else-if="data1.length < 1"></no-data-com>
</div>
</template>

<script>
import './telCord.scss';
import '../appointment/appTable/appTable.scss';
import appointApi from '../../api/appointment';
import telCordApi from '../../api/telCord';
import noDataCom from '../noDataCom/noDataCom'

export default {
  name: 'tel-cord',
  data() {
    return {
      columns1: [
        {
          title: '咨询楼盘',
          render: (h, params) => {
            return h('div', params.row.hytHouse.houseName);
          },
        },
        {
          title: '咨询电话',
          key: 'telNumber',
        },
        {
          title: '咨询时间',
          render: (h, params) => {
            return h('div', this.moment(params.row.temTime).format('YYYY-MM-DD'));
          },
        },
        {
          title: '来源',
          key: 'telOrigin',
        },
      ],
      data1: [],
      selectModel: 'All',
      options: [
        {
          value: 'All',
          label: '全部楼盘',
        }
      ],
      index: 0,
      pagelength: 10,
      total: 0,
    };
  },
  components: {
    noDataCom,
  },
  created() {
    this.initTableData();
  },
  mounted() {},
  methods: {
    initTableData() {
      appointApi.getAllHouse().then((response) => {
        response.data.forEach((item) => {
          const houseItem = {
            value: item.id,
            label: item.houseName,
          }
          this.options.push(houseItem);
        })
        this.getTableData();
      }).catch(() => {
        this.$Notic.error({
          desc: '楼盘信息获取出错',
        });
      })
    },
    getTableData() {
      telCordApi.getPresonTel(this.index, this.pagelength, this.selectModel).then((response) => {
        this.data1 = response.data.content;
        this.total = response.data.totalPages;
      })
    },
    selectType(value) {
      this.index = 0;
      this.total = 0;
      this.data1 = [];
      this.getTableData();
    },
    changePage(index) {
      this.index = index - 1;
      this.getTableData();
    },
  },
};
</script>
