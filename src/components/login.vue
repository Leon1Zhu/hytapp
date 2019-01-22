 <!--
  @author zhuliang
  @date 2018/10/8 下午6:20
-->
<template>
  <section id="login">
    <div class="logo-name-content">
      <i class="manage-logo"></i>
      <span class="manage-name">云锋新房</span>
    </div>
    <div class="login-content">
      <div class="left-content">
      </div>
      <div class="right-content">
        <h1>用户登录</h1>
        <Form ref="formValidate" :model="formValidate" >
          <FormItem  prop="name" style="margin-bottom: 30px;">
            <Input  prefix="ios-person-outline"  v-model="formValidate.name" placeholder="请输入用户名">
            </Input>
          </FormItem>

          <FormItem  prop="password">
            <Input   prefix="ios-lock-outline" v-model="formValidate.password" type="password" placeholder="请输入密码">
            </Input>
          </FormItem>
        </Form>
        <div class="login-operation">
          <Checkbox label="记住我" class="remember-me" v-model="remberme">
            <span>记住我</span>
          </Checkbox>
          <!--<div class="reset-password">-->
            <!--重置密码-->
          <!--</div>-->
        </div>
        <Button class="login-btn" type="primary" @click="login()" :loading="loading">登录</Button>
      </div>
    </div>
  </section>
</template>

<script>
import './login.scss';
import loginApi from '../api/login';

let timer;
export default {
  name: 'login',
  data() {
    return {
      formValidate: {
        name: '',
        password: '',
      },
      remberme: false,
      loading: false,
    };
  },
  components: {},
  created() {},
  mounted() {
    document.onkeydown = (e) => {
      if (e.keyCode === 13) {
        this.login();
      }
    };
  },
  methods: {
    login() {
      if (!(this.formValidate.name && this.formValidate.password)) {
        this.$Notice.error({
          desc: '用户名或密码不能为空',
        });
        return;
      }
      this.loading = true;
      loginApi.login(this.formValidate.name, this.formValidate.password).then((response) => {
        // this.$store.dispatch('setUserInfoAction', { data: response.data.data, remeberme: this.remberme});
        if (response.data) {
          this.$store.commit('loginCommit', { data: response.data, remeberme: this.remberme})
          this.$router.push({path: '/'});
        } else {
          this.$Notice.error({
            desc: '用户或密码错误',
          });
        }
        this.loading = false;
      }).catch(() => {
        this.loading = false;
      });
    },
  },
};
</script>
