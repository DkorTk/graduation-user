<template>
  <div>
    <Header />
    <div class="login">
      <div class="loginInput">
        <div class="text">
          用户登录
        </div>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
          <div class="demo-input-suffix">
            <el-input
              placeholder="请输入邮箱"
              prefix-icon="el-icon-user"
              v-model="loginForm.email"
            >
            </el-input>
            <el-input
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </div>
        </el-form>
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
// import { apiLogin } from "../api/index";


export default {
  name: "login",
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },


  methods: {
    login() {
      console.log(this.loginForm.email, this.loginForm.password);
      // apiLogin({ email: this.loginForm.email, password: this.loginForm.password });
      // console.log(this.$qs.stringify(this.loginForm));
      // console.log(JSON.stringify(this.loginForm));

      //传递信息
      this.$store
        .dispatch("apiLogin", JSON.stringify(this.loginForm))
        .then(() => {
          this.$router.push({ path: "/" });
          this.$message.success("登录成功!");
        })
        .catch(() => {
          this.$message.error("登录失败");
        });
      // 清空表单
      let input = document.querySelectorAll(".demo-input-suffix input");
      input[0].value = "";
      input[1].value = "";
    },
    toSignin() {
      this.$router.push({ path: "signin" });
    },
  },
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
