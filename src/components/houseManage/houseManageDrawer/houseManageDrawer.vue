 <!--
  @author zhuliang
  @date 2019-02-13 23:21
-->
<template>
  <div class="house-manage-drawer">
    <Drawer
      title="楼盘管理"
      v-model="showDrawer"
      width="40%"
      :mask-closable="false"
      @on-close="hiddenDrawer"
    >
      <Form :model="houseData" :rules="ruleValidate">
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="楼盘名称" label-position="top">
              <Input v-model="houseData.houseName" placeholder="请输入楼盘名称" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="区域" label-position="top">
              <Select v-model="houseData.regin" placeholder="请选择楼盘所在区域">
                <Option :value="item" v-for="(item, index) in NJregin">{{item}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Row :gutter="32">
          <Col span="12">
            <FormItem label="地址" label-position="top">
              <Input v-model="houseData.address" placeholder="请输入楼盘地址" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="楼盘类型" label-position="top">
              <Select v-model="houseData.buildingType" placeholder="请选择楼盘所在区域">
                <Option :value="item" v-for="(item, index) in houseType">{{item}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Row :gutter="32">
          <Col span="12">
            <FormItem label="楼盘面积(㎡)" label-position="top">
              <Input v-model="houseData.area" placeholder="请输入楼盘面积" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="楼盘特色(逗号分隔)" label-position="top">
              <Select v-model="houseData.characteristic" placeholder="请选择楼盘所在区域">
                <Option :value="item" v-for="(item, index) in NJregin">{{item}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Drawer>
  </div>
</template>

<script>
import './houseManageDrawer.scss';

export default {
  name: 'house-manage-drawer',
  data() {
    return {
      showDrawer: false,
      houseData: this.getHouseData(),
      NJregin: [
        "玄武区",
        "白下区",
        "秦淮区",
        "建邺区",
        "鼓楼区",
        "下关区",
        "栖霞区",
        "雨花台区",
        "浦口区",
        "江宁区",
        "六合区",
        "溧水县",
        "高淳县",
        "其他"],
      houseType: [
        '住宅',
        '洋房',
        '别墅',
        '叠墅',
        '商铺',
        '写字楼',
        '公寓',
        '综合体'],
      ruleValidate: {
        houseName: [
          { required: true, message: '楼盘名称不能为空', trigger: 'blur' }
        ],
        regin: [
          { required: true, message: '请选择楼盘区域', trigger: 'blur' }
        ],
      }
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    getHouseData() {
      return {
        houseName: null,
        regin: null,
        address: null,
        buildingType: null,
        area: null,
        characteristic: null,
      };
    },
    openDrawer() {
      this.showDrawer = true;
    },
    hiddenDrawer(e) {
      console.log(e)
      this.showDrawer = false;
    },
  },
}
</script>

<style lang=less>

</style>
