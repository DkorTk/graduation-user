<template>
  <div>
    <Header />
    <div class="login">
      <div class="loginInput">
        <div class="text">
          用户登录
        </div>
        <div class="demo-input-suffix">
          <el-input
            placeholder="请输入邮箱"
            prefix-icon="el-icon-user"
            v-model="email"
          >
          </el-input>
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
        </div>
        <el-button type="primary" class="button" @click="login">登录</el-button>
        <div class="linkFather">
          <div class="link">
            <el-link type="info" @click="toSignin">注册</el-link>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header/Head";
import Footer from "../components/Footer/Footer";
import { apiLogin } from '../api/index'
export default {
  name: "login",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(this.email, this.password);
      apiLogin({email: this.email, password: this.password})
    },
    toSignin() {
       this.$router.push({ path: "signin" });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.loginInput {
  margin: 30px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
}
.text {
  margin: 25px;
}
.demo-input-suffix {
}
.demo-input-suffix:after {
  content: "";
  display: block;
  clear: both;
}

.el-input {
  display: inline-block;
  width: 80% !important;
  margin: 15px !important;
}
.el-button--primary {
  margin: 10px !important;
}
.el-button {
  width: 40%;
}

.linkFather {
  margin: 15px;
}
.linkFather::after {
  content: "";
  display: block;
  clear: both;
}
.link {
  float: right;
  color: #b5b6ba;
}
</style>
