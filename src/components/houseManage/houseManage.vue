 <!--
  @author zhuliang
  @date 2019-01-26 11:30
-->
<template>
  <section id="houseManage">
    <!--<alienUpload ref="uploadImg2" :url="imageUploadUrl"  @delete-img="deleteImg" :imageLimit="imageLimit" @upload-img-success="uploadImg"  class="sec_upload" style="margin-top: 10px;" uploadType="all" :BtnColor="systemColor" :progressColor="systemColor" :compressQuality="compressQuality" showProgress   @count-exceed-limit="countExceedLimit"></alienUpload>-->
    <div class="action-menu">
      <Button style="font-size: 14px;" class="add-new-house" type="primary" @click="openDrawer"><i class="iconfont icon-jia"></i>新增楼盘</Button>
    </div>
    <manage-table></manage-table>
    <house-manage-drawer ref="houseManageDrawer"></house-manage-drawer>
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
      imageUploadUrl: 'http://njyfdc.com:8888/api/upload',
      systemColor: '#06b9a5',
      compressQuality:.6,
      uploadFileList: [],
      imageLimit: 1,
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
    uploadImg(file,response){
      console.log(file)
    },
    deleteImg(file) {

    },
    countExceedLimit(e) {
      console.log(e)
    },
  },
}
</script>
