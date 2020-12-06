<template>
  <div>
    <Header />
    <div class="login">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickName">
          <el-input v-model.number="ruleForm.nickName"></el-input>
        </el-form-item>

        <el-button type="primary" @click="submitForm('ruleForm')"
          >注册</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <div class="linkFather">
          <div class="link">
            注册即代表你已阅读同意 <el-link type="info" @click="toNorm">《领养准则》</el-link>
          </div>
        </div>
      </el-form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header/Head";
import Footer from "../components/Footer/Footer";
import { apiSignin } from "../api/index";
export default {
  name: "signin",

  components: {
    Header,
    Footer,
  },

  data() {
    var checkNickName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("昵称不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      state: "",
      ruleForm: {
        email: "",
        pass: "",
        checkPass: "",
        nickName: "",
      },
      rules: {
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
        nickName: [
          { required: true, validator: checkNickName, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //提交按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.signin();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    //重置按钮
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    //验证是否注册成功
    signin() {
      console.log(
        this.ruleForm.email,
        this.ruleForm.checkPass,
        this.ruleForm.pass,
        this.ruleForm.nickName
      );
      apiSignin({
        email: this.ruleForm.email,
        password: this.ruleForm.pass,
        nickname: this.ruleForm.nickName,
      }).then((result) => {
        if (result.data.state === 1) {
          this.$message.success("注册成功");
          this.resetForm("ruleForm");
          this.$router.push({ path: "login" });
        } else {
          this.$message.error("注册失败");
          this.resetForm("ruleForm");
        }
      });
    },

    // 领养准则跳转
    toNorm() {
      this.$router.push({ path: "norm" });
    }
  },
};
</script>

<style lang="scss" scoped>
// 新增样式(相比signin.vue)

.el-form-item {
  margin-bottom: 5px;
}

.demo-ruleForm {
  margin: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
  padding: 15px;
}

.siginButton {
  border: 1px solid red;
}
//signin
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.text {
  margin: 25px;
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
