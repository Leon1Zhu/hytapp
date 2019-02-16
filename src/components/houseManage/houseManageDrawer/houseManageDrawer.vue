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
      class="house-manage-drawer"
    >
      <span class="imgs-title">楼盘图片</span>
      <alienUpload ref="uploadImg2" :url="imageUploadUrl"  @delete-img="deleteImg"  @upload-img-success="uploadImg"  class="sec_upload" style="margin-top: 10px;" uploadType="all" :BtnColor="systemColor" :progressColor="systemColor" :compressQuality="compressQuality" showProgress ></alienUpload>
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
              <Input v-model="houseData.area" placeholder="请输入楼盘面积"  />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="楼盘价格(元/㎡)" label-position="top">
              <Input v-model="houseData.price" placeholder="请输入楼盘价格"/>
            </FormItem>
          </Col>
        </Row>

        <Row :gutter="32">
          <Col span="12">
            <FormItem label="联系电话" label-position="top">
              <Input v-model="houseData.houseTel" placeholder="请输入楼盘联系电话" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="装修类型" label-position="top">
              <Select v-model="houseData.renovation" placeholder="请选择楼盘装修类型">
                <Option :value="item" v-for="(item, index) in renovations" :key="index">{{item}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Row :gutter="32">
          <Col span="12">
            <FormItem label="楼盘特色(逗号分隔)" label-position="top">
              <Input v-model="houseData.characteristic" placeholder="请输入楼盘特色(逗号分隔)" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="楼盘销售状态" label-position="top">
              <Select v-model="houseData.salesStatus" placeholder="请选择楼盘销售状态">
                <Option :value="item" v-for="(item, index) in saleStatu" :key="index">{{item}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Row :gutter="32">
          <Col span="24">
            <FormItem label="楼盘特性设置" class="house-special-form-item" label-position="top">
              <CheckboxGroup v-model="houseData.special">
                <Checkbox label="recommend">
                  <span>好房推荐</span>
                </Checkbox>
                <Checkbox label="highquality">
                  <span>优质房源</span>
                </Checkbox>
                <Checkbox label="like">
                  <span>猜你喜欢</span>
                </Checkbox>
                <Checkbox label="specialcar">
                  <span>专车接送</span>
                </Checkbox>
              </CheckboxGroup>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <Button type="primary" long :loading="loading" @click="saveHouseData">保存</Button>
    </Drawer>
  </div>
</template>

<script>
import './houseManageDrawer.scss';
import houseManageApi from '../../../api/houseManage';

export default {
  name: 'house-manage-drawer',
  data() {
    return {
      loading: false,
      imageUploadUrl: 'http://njyfdc.com:8888/api/upload',
      systemColor: '#06b9a5',
      compressQuality:.6,
      uploadFileList: [],
      showDrawer: false,
      houseData: this.getHouseData(),
      renovations: ['精装', '中装', '简装', '毛坯'],
      saleStatu: ['在售', '停售',],
      NJregin: ["玄武区", "白下区", "秦淮区", "建邺区", "鼓楼区", "下关区", "栖霞区", "雨花台区", "浦口区", "江宁区", "六合区", "溧水县", "高淳县", "其他"],
      houseType: ['住宅', '洋房', '别墅', '叠墅', '商铺', '写字楼', '公寓', '综合体'],
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
        price: null,
        houseTel: null,
        special: [],
        salesStatus: null,
        imgs: [],
        renovation: null,
      };
    },
    openDrawer() {
      this.showDrawer = true;
    },
    hiddenDrawer(e) {
      this.showDrawer = false;
    },
    uploadImg(file,response){
      this.houseData.imgs.push({
        imgsUrl: `/${file.name}`,
      });
    },
    deleteImg(file) {
      for(let i = 0; i < this.houseData.imgs.length; i++) {
        if(this.houseData.imgs[i].imgsUrl.indexOf(file[0].file.name) > -1) {
          this.houseData.imgs.splice(i, 1);
          break;
        }
      }
    },
    saveHouseData() {
      this.loading = true;
      if ( this.houseData.imgs.length < 1 && !this.houseData.id) {
        this.$Notice.error({
          desc: '楼盘至少有一张展示图片',
        });
        return ;
      }
      houseManageApi.addNewHouse(this.houseData).then((response) => {
        let imgLen = 0;
        this.houseData.imgs.forEach((item) => {
          houseManageApi.addImgs(item, response.data.id).then((response) => {
            imgLen ++;
            if (imgLen === this.houseData.imgs.length) {
              this.showDrawer = false;
              this.$emit('closeDrawer');
              this.loading = false;
              this.clearDate();
            }
          })
        })
      }).catch(() => {
        this.loading = false;
      });
    },
    clearDate() {
      this.houseData = this.getHouseData();
    },
  },
}
</script>

<style lang=less>

</style>
