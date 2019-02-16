 <!--
  @author zhuliang
  @date 2019-02-15 23:38
-->
<template>
  <div class="hyt-type-model">
    <Modal
      v-model="showModel"
      title="楼盘户型管理"
      @on-ok="submitType"
      class="type-manage-model"
      @on-cancel="closeModel">
      <span>户型图片</span>
      <alienUpload ref="uploadImg2" :url="imageUploadUrl" @image-list-change="addImg"  @delete-img="deleteImg" :imageLimit="imageLimit" @upload-img-success="uploadImg"  class="sec_upload" style="margin-top: 10px;" uploadType="all" :BtnColor="systemColor" :progressColor="systemColor" :compressQuality="compressQuality" showProgress   @count-exceed-limit="countExceedLimit"></alienUpload>
      <Form :model="typeData">
        <FormItem label="户型名称" label-position="top">
          <Input v-model="typeData.typeName" placeholder="请输入户型姓名" />
        </FormItem>
        <FormItem label="价格(元/㎡)" label-position="top">
          <Input v-model="typeData.typePrice" placeholder="请输入户型价格" />
        </FormItem>
        <FormItem label="户型面积(㎡)" label-position="top">
          <Input v-model="typeData.typeMeasure" placeholder="请输入户型面积" />
        </FormItem>

        <FormItem label="户型优点(逗号分隔)" label-position="top">
          <Input v-model="typeData.typeLabel" placeholder="请输入户型优点，多个使用逗号分隔" />
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import './hytTypeModel.scss';
import houseManageApi from '../../../../api/houseManage';

export default {
  name: 'type-manage-model',
  data() {
    return {
      imageUploadUrl: 'http://njyfdc.com:8888/api/upload',
      systemColor: '#06b9a5',
      compressQuality:.6,
      imageLimit: 1,
      showModel: false,
      typeData: this.getTypeData(),
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    getTypeData() {
      return {
        typeImg: null,
        typeLabel: null,
        typeName: null,
        typeMeasure: null,
        typePrice: null,
      }
    },
    openModel(data) {
      if (data.hytHouseId) {

      } else {
        this.typeData.houseId = data.id;
      }
      this.showModel = true;
    },
    closeModel() {
      this.showModel = false;
    },
    submitType() {
      if (!this.typeData) {
        this.$Notice.error({
          desc: '请先将表单内容填写完整',
        });
        return;
      }
      houseManageApi.addHouseType(this.typeData).then((response) => {
        this.typeData = this.getTypeData();
        this.$Notice.success({
          desc: '户型添加成功',
        });
        this.$emit('addAdvantage')
      })
    },
    addImg(e) {
    },
    uploadImg(file,response){
      this.typeData.typeImg = `/${file.name}`;
      console.log(file)
    },
    deleteImg(file) {
      this.typeData.typeImg = null;
    },
    countExceedLimit(e) {
      if (e === 'more') {
        this.$Notice.error({
          desc: '户型图目前只支持一张',
        });
      }
    },
  },
}
</script>

<style lang=less>

</style>
