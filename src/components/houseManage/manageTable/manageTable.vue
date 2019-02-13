 <!--
  @author zhuliang
  @date 2019-01-26 11:37
-->
<template>
  <div class="manage-table">
    <div class="table-content">
      <div v-if="data1.length > 0">
        <Table  class="plantform-table" stripe :columns="columns1" :data="data1" >
          <template slot-scope="{ row, index }" slot="action">
            <Tooltip content="编辑楼盘" placement="top" theme="light">
              <i class="iconfont icon-bianji1 actionIcon"></i>
            </Tooltip>
            <Tooltip content="删除楼盘" placement="top" theme="light">
              <i class="iconfont icon-shanchu actionIcon"></i>
            </Tooltip>
            <Tooltip content="查看楼盘" placement="top" theme="light">
              <i class="iconfont icon-chakan actionIcon"></i>
            </Tooltip>
          </template>
        </Table>
        <!--<Page :total="total" :page-size="pagelength"  size="small" @on-change="changePage($event)" />-->
      </div>
      <no-data-com v-else-if="data1.length < 1"></no-data-com>
    </div>
  </div>
</template>

<script>
import './manageTable.scss';
import houseApi from '../../../api/houseManage';
import noDataCom from '../../noDataCom/noDataCom'
import houseTableExpand from './tableExpand/tableExpand';

export default {
  name: 'manage-table',
  data() {
    return {
      columns1: [
        {
          type: 'expand',
          width: '50px',
          render: (h, params) => {
            return h(houseTableExpand, {
              props: {
                row: params.row
              }
            })
          }
        },
        {
          title: '楼盘名称',
          align: 'center',
          key: 'houseName',
        },
        {
          title: '楼盘类型',
          align: 'center',
          key: 'buildingType',
        },
        {
          title: '楼盘地址',
          key: 'address',
          align: 'center',
          // render: (h, params) => {
          //   return h('div', params.row.hytHouse.houseName);
          // },
        },
        {
          title: '预约电话',
          key: 'houseTel',
          align: 'center',
        },
        {
          title: '好房推荐',
          key: 'recommend',
          align: 'center',
          width: '100px',
          render: (h, params) => {
            return h('div', {
              class: {
                iconfont: true,
                'icon-gou': params.row.recommend,
                'icon-cha': !params.row.recommend,
              }
            });
          },
        },
        {
          title: '优质房源',
          key: 'highquality',
          align: 'center',
          width: '100px',
          render: (h, params) => {
            return h('div', {
              class: {
                iconfont: true,
                'icon-gou': params.row.highquality,
                'icon-cha': !params.row.highquality,
              }
            });
          },
        },
        {
          title: '猜你喜欢',
          key: 'like',
          align: 'center',
          width: '100px',
          render: (h, params) => {
            return h('div', {
              class: {
                iconfont: true,
                'icon-gou': params.row.like,
                'icon-cha': !params.row.like,
              }
            });
          },
        },
        {
          title: '专车接送',
          key: 'specialcar',
          width: '100px',
          align: 'center',
          render: (h, params) => {
            return h('div', {
              class: {
                iconfont: true,
                'icon-gou': params.row.specialcar,
                'icon-cha': !params.row.specialcar,
              }
            });
          },
        },
        {
          title: '创建时间',
          align: 'center',
          render: (h, params) => {
            return h('div', this.moment(params.row.createTime).format('YYYY-MM-DD'));
          },
        },
        {
          title: '操作',
          slot: 'action',
          align: 'center'
        }
      ],
      data1: [],
    };
  },
  components: {
    noDataCom,
    houseTableExpand,
  },
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      houseApi.getAllHouse().then((response) => {
        this.data1 = response.data;
        // console.log(111)
      })
    }
  },
}
</script>

<style lang=less>

</style>
