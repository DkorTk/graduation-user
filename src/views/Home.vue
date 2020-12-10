<template>
  <div class="home">
    <Head />
    <!-- 宠物狗板块 -->
    <div class="dog">
      <div class="demo-image__placeholder">
        <div class="homeText">
          <p>宠</p>
          <p>物</p>
          <p>狗</p>
        </div>
        <div class="block">
          <el-image :src="src"></el-image>
          <el-button type="primary" icon="el-icon-view" @click="toDetail">详情</el-button>
        </div>
        <div class="block">
          <el-image :src="src"> </el-image>
          <el-button type="primary" icon="el-icon-view">详情</el-button>
        </div>
        <div class="block">
          <el-image :src="src"></el-image>
          <el-button type="primary" icon="el-icon-view">详情</el-button>
        </div>
        <div class="block">
          <el-image :src="src"></el-image>
          <el-button type="primary" icon="el-icon-view">详情</el-button>
        </div>
      </div>
    </div>

    <!-- 宠物猫板块 -->
    <!-- 宠物狗板块 -->
    <div class="dog">
      <div class="demo-image__placeholder">
        <div class="homeText">
          <p>宠</p>
          <p>物</p>
          <p>猫</p>
        </div>
        <div class="block">
          <el-image :src="src"></el-image>
          <el-button type="primary" icon="el-icon-view">详情</el-button>
        </div>
        <div class="block">
          <el-image :src="src"> </el-image>
          <el-button type="primary" icon="el-icon-view">详情</el-button>
        </div>
        <div class="block">
          <el-image :src="src"></el-image>
          <el-button type="primary" icon="el-icon-view">详情</el-button>
        </div>
        <div class="block">
          <el-image :src="src"></el-image>
          <el-button type="primary" icon="el-icon-view">详情</el-button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "../components/Header/Head";
import Footer from "../components/Footer/Footer";
export default {
  name: "Home",
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      radio1: "",
      radio2: "上海",
      radio3: "上海",
      radio4: "上海",
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
  methods: {
    toDetail() {
      this.$router.push({ path: "detail" });
    },
  },
};
</script>

<style lang="scss" scoped>
// 图片
.demo-image__placeholder {
  width: 100%;
  height: 50%;
  display: flex;
  text-align: center;
  padding: 20px 10px;
}

.block {
  display: inline-block;
  padding: 15px;
  margin: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
}

.demonstration {
  color: #8492a6;
  display: block;
  margin-top: 10px;
}

.dog {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
}

.homeText {
  display: inline-block;

  padding: 10px;
  p{
    padding: 10px;
    margin: 15px 5px 10px;
  }
}

.el-button {
  font-size: 5px;
  padding: 6px 20px;
  margin-top: 10px;
}
// 宠物狗猫
.el-row {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
}

.dog,
.cat {
  margin: 20px;
}
.dogText {
  margin: 0 auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.textBig {
  margin: 10px;
}

.el-col-3 {
  padding: 35px;
}
.el-col-5 {
  margin: 4px;
  padding: 15px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 50%;
  height: 100%;
  display: block;
  margin: 0 auto;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
