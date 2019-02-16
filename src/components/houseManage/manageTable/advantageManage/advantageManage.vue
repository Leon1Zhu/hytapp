 <!--
  @author zhuliang
  @date 2019-02-15 18:01
-->
<template>
  <div class="advantage-manage">
    <Modal
      v-model="showModel"
      title="楼盘优势管理"
      @on-ok="submitAdvantage"
      class="advantage-manage-model"
      @on-cancel="closeModel">
      <Form :model="advatageData">
        <FormItem label="标题" label-position="top">
          <Input v-model="advatageData.title" placeholder="请输入优势标题" />
        </FormItem>
        <FormItem label="内容" label-position="top">
          <Input type="textarea" v-model="advatageData.content" :rows="4" placeholder="请输入详情" />
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import './advantageManage.scss';
import houseApi from '../../../../api/houseManage';

export default {
  name: 'advantage-manage',
  data() {
    return {
      showModel: false,
      advatageData: {},
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    openModel(data) {
      this.advatageData.houseId = data.id;
      this.showModel = true;
    },
    closeModel() {
      this.showModel = false;
    },
    submitAdvantage() {
      if (!this.advatageData.title || !this.advatageData.content) {
        this.$Notice.error({
          desc: '请先将表单内容填写完整',
        });
        return;
      }
      houseApi.addNewHouseAdvantage( this.advatageData).then((response) => {
        this.advatageData = {};
        this.$Notice.success({
          desc: '添加成功',
        });
        this.$emit('addAdvantage')
      })
    },
  },
}
</script>

<style lang=less>

</style>
