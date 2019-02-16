 <!--
  @author zhuliang
  @date 2019-01-26 11:30
-->
<template>
  <section id="houseManage">
    <div class="action-menu">
      <Button style="font-size: 14px;" class="add-new-house" type="primary" @click="addNewHouse"><i class="iconfont icon-jia"></i>新增楼盘</Button>
    </div>
    <manage-table ref="houseManageTable" @refreshData="closeDrawer" @editHouse="editHouse"></manage-table>
    <house-manage-drawer ref="houseManageDrawer" @closeDrawer="closeDrawer"></house-manage-drawer>
  </section>
</template>
<script>
import './houseManage.scss';
import manageTable from './manageTable/manageTable';
import houseManageDrawer from './houseManageDrawer/houseManageDrawer';

export default {
  name: 'house-manage',
  data() {
    return {
    };
  },
  components: {
    manageTable,
    houseManageDrawer,
  },
  created() {},
  mounted() {},
  methods: {
    openDrawer () {
      this.$refs.houseManageDrawer.openDrawer();
    },
    closeDrawer() {
      this.$refs.houseManageTable.init();
    },
    addNewHouse() {
      this.$refs.houseManageDrawer.clearDate();
      this.openDrawer();
    },
    editHouse(row) {
      const rowTemp = JSON.parse(JSON.stringify(row));
      const special = [];
      ['highquality', 'like', 'recommend', 'specialcar'].forEach((item) => {
        if (rowTemp[item]) special.push(item);
      })
      rowTemp.imgs = [];
      rowTemp.special = special;
      rowTemp.price = rowTemp.price && rowTemp.price.replace('元/㎡', '');
      rowTemp.area = rowTemp.area && rowTemp.area.replace('㎡','');
      this.$refs.houseManageDrawer.houseData = rowTemp;
      this.openDrawer();
    }
  },
}
</script>
