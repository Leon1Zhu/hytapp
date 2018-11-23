 <!--
  @author zhuliang
  @date 2018/11/19 5:39 PM
-->
<template>
<div class="app-table">
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
import './appTable.scss';
import appointApi from '../../../api/appointment';
import noDataCom from '../../noDataCom/noDataCom'

export default {
  name: 'app-table',
  data() {
    return {
      columns1: [
        {
          title: '姓名',
          key: 'personName',
        },
        {
          title: '联系电话',
          key: 'personTel',
          render: (h, params) => {
            return h('div', this.$decrypt(params.row.personTel));
          },
        },
        {
          title: '预约楼盘',
          render: (h, params) => {
            return h('div', params.row.hytHouse.houseName);
          },
        },
        {
          title: '预约类型',
          key: 'type',
        },
        {
          title: '来源',
          key: 'origin',
        },
        {
          title: '预约时间',
          render: (h, params) => {

            return h('div', this.moment(params.row.orderTime).format('YYYY-MM-DD'));
          },
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
    noDataCom
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
      appointApi.getAppTableData(this.index, this.pagelength, this.selectModel).then((response) => {
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
