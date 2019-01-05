<!--
 @Author: liang.zhu
 @Date: 2018/9/17 下午8:31
-->
<template>
  <div  class="node-card skymanage-card-content">
    <div class="top-content">
      <span class="node-card-name">{{data.type}}</span>
    </div>
    <div class="bottom-content">
      <div class="node-card-left-content">
        <span class="node-card-count">{{data.sum}}</span>
        <span class="node-card-unit">个</span>
      </div>
      <Divider type="vertical" />
      <div class="node-card-right-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import './nodeCard.scss';

export default {
  name: 'node-card',
  props: ['data'],
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

