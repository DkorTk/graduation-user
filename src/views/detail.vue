<template>
  <div>
    <Head />
    <div>
      <div>
        <!-- 图片 -->
        <div></div>

        <!-- 描述 -->
        <div></div>
      </div>
      <!-- 按钮 -->
      <div></div>
    </div>

    <div class="main">
      <h1 class="normText">宠物详情</h1>
      <div class="myImage">
        <div class="myBlock">
          <el-image :src="src"></el-image>
        </div>
        <div class="content">
          <div class="fragment">
            <h3><span>昵称:</span></h3>
            <h3><span>大毛</span></h3>
          </div>
          <div class="fragment">
            <h3><span>品种:</span></h3>
            <h3><span>阿拉斯加</span></h3>
          </div>
          <div class="fragment">
            <h3><span>性别:</span></h3>
            <h3><span>公</span></h3>
          </div>
          <div class="fragment">
            <h3><span>年龄:</span></h3>
            <h3><span>3岁</span></h3>
          </div>
          <div class="fragment">
            <h3><span>体重:</span></h3>
            <h3><span>20kg</span></h3>
          </div>
          <div class="fragment">
            <h3><span>发布时间:</span></h3>
            <h3><span>2020-12-05</span></h3>
          </div>
          <div class="fragment">
            <h3><span>疫苗情况:</span></h3>
            <h3><span>已接种</span></h3>
            
          </div>
          <div class="fragment">
            <h3><span>驱虫情况:</span></h3>
            <h3><span>已驱虫</span></h3>
            
            
          </div>
          <div class="fragment">
            <h3><span>绝育情况:</span></h3>
            <h3> <span>已绝育</span></h3>
            
           
          </div>
          <div class="fragment">
            <h3><span>所属机构:</span></h3>
            <h3><span>机构1</span></h3>
            
          </div>
        </div>
      </div>

        <div class="apply">
            <el-button type="primary">申请领养</el-button>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Head from "../components/Header/Head";
import Footer from "../components/Footer/Footer";
export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      src: require("@/assets/detail-Image/1.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
}
.normText {
  padding: 15px;
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
  height: 50%;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  padding: 20px 10px;
  margin: 20px 20px 0px 20px;
  box-shadow: 6px 0 5px -5px rgba(180,160,120,.6), -6px 0 5px -5px rgba(180,160,120,.6);
}

.myBlock {
  display: inline-block;
  padding: 5px;
  margin: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
  width: 35%;
}

.content {
  width: 100%;
  margin: 8px;
  display: flex;
  flex-wrap: wrap;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
  .fragment {
    width: 100%;
    margin: 2px;
    padding: 2px;
    display: flex;
    justify-content: flex-start;

    span {
        margin: 20px;
        
    }
  }
  h3 {
    display: inline;
  }
}
</style>
