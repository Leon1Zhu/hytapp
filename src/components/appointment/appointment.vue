 <!--
  @author zhuliang
  @date 2018/11/19 5:28 PM
-->
<template>
<div id="appointment">
  <app-table></app-table>
</div>
</template>

<script>
import './appointment.scss';
import appTable from './appTable/appTable';

export default {
  name: 'appointment',
  data() {
    return {};
  },
  components: {
    appTable,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
