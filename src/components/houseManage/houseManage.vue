 <!--
  @author zhuliang
  @date 2019-01-26 11:30
-->
<template>
  <section id="houseManage">
    <alienUpload ref="uploadImg2" :url="imageUploadUrl"  @delete-img="deleteImg" :imageLimit="imageLimit" @upload-img-success="uploadImg"  class="sec_upload" style="margin-top: 10px;" uploadType="all" :BtnColor="systemColor" :progressColor="systemColor" :compressQuality="compressQuality" showProgress   @count-exceed-limit="countExceedLimit"></alienUpload>
    <manage-table></manage-table>
  </section>
</template>
<script>
import './houseManage.scss';
import manageTable from './manageTable/manageTable';

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
  },
  created() {},
  mounted() {},
  methods: {
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
