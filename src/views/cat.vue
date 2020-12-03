<template>
  <div>
    <Head />
    <div class="select">
      <div class="select1">
        <span class="myText">分类:</span>
        <el-radio-group v-model="radio1">
          <el-radio-button label="待领养"></el-radio-button>
          <el-radio-button label="已领养"></el-radio-button>
        </el-radio-group>
      </div>

      <div class="select1">
        <span class="myText">排序:</span>
        <el-radio-group v-model="radio2">
          <el-radio-button label="默认"></el-radio-button>
          <el-radio-button label="最新"></el-radio-button>
        </el-radio-group>
      </div>

      <div class="select1">
        <span class="myText">机构:</span>
        <el-radio-group v-model="radio3">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="机构1"></el-radio-button>
          <el-radio-button label="机构2"></el-radio-button>
        </el-radio-group>
      </div>
    </div>

    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="src"></el-image>
        <section class="demonstration">大秋 公 4岁</section>
        <section class="demonstration">品种: 秋田犬</section>
      </div>
      <div class="block">
        <el-image :src="src"> </el-image>
        <section class="demonstration">大秋 公 4岁</section>
        <section class="demonstration">品种: 秋田犬</section>
      </div>
      <div class="block">
        <el-image :src="src"></el-image>
        <section class="demonstration">大秋 公 4岁</section>
        <section class="demonstration">品种: 秋田犬</section>
      </div>
      <div class="block">
        <el-image :src="src"></el-image>
        <section class="demonstration">大秋 公 4岁</section>
        <section class="demonstration">品种: 秋田犬</section>
      </div>
    </div>

    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="src"></el-image>
        <section class="demonstration">大秋 公 4岁</section>
        <section class="demonstration">品种: 秋田犬</section>
      </div>
      <div class="block">
        <el-image :src="src"> </el-image>
        <section class="demonstration">大秋 公 4岁</section>
        <section class="demonstration">品种: 秋田犬</section>
      </div>
      <div class="block">
        <el-image :src="src"></el-image>
        <section class="demonstration">大秋 公 4岁</section>
        <section class="demonstration">品种: 秋田犬</section>
      </div>
      <div class="block">
        <el-image :src="src"></el-image>
        <section class="demonstration">大秋 公 4岁</section>
        <section class="demonstration">品种: 秋田犬</section>
      </div>
    </div>

    <el-pagination background layout="prev, pager, next" :total="50">
    </el-pagination>
    <Footer />
  </div>
</template>

<script>
import Head from "../components/Header/Head";
import Footer from "../components/Footer/Footer";
export default {
  name: "Dog",
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
};
</script>

<style lang="scss" scoped>
.select {
  padding: 10px;
}

.select1 {
  padding: 5px;
}

.select1:after {
  content: "";
  display: block;
  clear: both;
}
.el-radio-group {
  float: left;
}
.myText {
  float: left;
  padding: 15px;
}

/* 图片 */
.demo-image__placeholder {
  width: 100%;
  height: 50%;
  display: flex;
  text-align: center;
  padding: 20px 10px;
}

.block {
  display: inline-block;
  padding: 5px;
  margin: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
}

.demonstration {
  color: #8492a6;
  display: block;
  margin-top: 10px;
}
</style>
