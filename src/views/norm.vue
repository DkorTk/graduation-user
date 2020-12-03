<template>
  <div>
    <Head />
    <div class="main">
      <h1 class="text">让爱回家</h1>
      <div class="myImage">
        <div class="myBlock">
          <el-image :src="src"></el-image>
        </div>
      </div>
      <div></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Head from "../components/Header/Head";
import Footer from "../components/Footer/Footer";
export default {
  name: "Norm",
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      src: require("@/assets/img/norm.jpg"),
    };
  },
};
</script>

<style>
.main {
  border: 1px solid red;
}
/*
img {
}
.text{
    position: relative;
    border: 1px solid black;
}

.picture {
    border: 1px solid pink;
    display: flex;
    justify-content: center;
    align-items: center;
} */

/* 图片 */
.myImage {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px 10px;
  border: 1px solid red;
}

.myBlock {
  display: inline-block;
  padding: 5px;
  margin: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
  width: 35%;
  border: 1px solid black;
}

.demonstration {
  color: #8492a6;
  display: block;
  margin-top: 10px;
}
</style>
