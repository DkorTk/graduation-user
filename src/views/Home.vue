<template>
  <div class="home">
    <Head />
       <!-- 宠物狗板块 -->
    <div class="dog">
      <el-row>
        <el-col
          :span="3"
          v-for="(o, index) in 1"
          :key="o+'1'"
          :offset="index > 0 ? 4 : 0"
        >
          <div class="dogText">
            <div class="textBig">宠</div>
            <div class="textBig">物</div>
            <div class="textBig">狗</div>
          </div>
        </el-col>

        <el-col
          :span="5"
          v-for="(o, index) in 1"
          :key="o+'2'"
          :offset="index > 0 ? 4 : 0"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="always"
            class="card"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <div class="bottom clearfix">
                <el-button type="text" class="button">进入详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col
          :span="5"
          v-for="(o, index) in 1"
          :key="o+'3'"
          :offset="index > 0 ? 4 : 0"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="always"
            class="card"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <div class="bottom clearfix">
                <el-button type="text" class="button">进入详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col
          :span="5"
          v-for="(o, index) in 1"
          :key="o+'4'"
          :offset="index > 0 ? 4 : 0"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="always"
            class="card"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <div class="bottom clearfix">
                <el-button type="text" class="button">进入详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col
          :span="5"
          v-for="(o, index) in 1"
          :key="o"
          :offset="index > 0 ? 4 : 0"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="always"
            class="card"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <div class="bottom clearfix">
                <el-button type="text" class="button">进入详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 宠物猫板块 -->
    <div class="cat">
      <el-row>
        <el-col
          :span="3"
          v-for="(o, index) in 1"
          :key="o+'1'"
          :offset="index > 0 ? 4 : 0"
        >
          <div class="dogText">
            <div class="textBig">宠</div>
            <div class="textBig">物</div>
            <div class="textBig">猫</div>
          </div>
        </el-col>
o
        <el-col
          :span="5"
          v-for="(o, index) in 1"
          :key="o+'2'"
          :offset="index > 0 ? 4 : 0"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="always"
            class="card"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <div class="bottom clearfix">
                <el-button type="text" class="button">进入详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col
          :span="5"
          v-for="(o, index) in 1"
          :key="o+'3'"
          :offset="index > 0 ? 4 : 0"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="always"
            class="card"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <div class="bottom clearfix">
                <el-button type="text" class="button">进入详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col
          :span="5"
          v-for="(o, index) in 1"
          :key="o+'4'"
          :offset="index > 0 ? 4 : 0"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="always"
            class="card"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <div class="bottom clearfix">
                <el-button type="text" class="button">进入详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col
          :span="5"
          v-for="(o, index) in 1"
          :key="o+'5'"
          :offset="index > 0 ? 4 : 0"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="always"
            class="card"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <div class="bottom clearfix">
                <el-button type="text" class="button">进入详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <Footer/>
   
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "../components/Header/Head";
import Footer from "../components/Footer/Footer"
export default {
  name: "Home",
  components: {
    Head,
    Footer
  },

};
</script>

<style lang="scss" scoped>
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
