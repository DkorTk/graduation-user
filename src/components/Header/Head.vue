<template>
  <div>
    <!-- 导航栏 -->
    <el-menu
      :default-active="this.$router.history.current.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/"><i class="el-icon-s-home"></i>首页</el-menu-item>
      <el-menu-item index="/dog"
        ><i class="iconfont">&#xe669;</i> &nbsp;&nbsp;&nbsp;宠物狗</el-menu-item
      >
      <el-menu-item index="/cat"
        ><i class="iconfont">&#xe65e;</i>&nbsp;&nbsp;&nbsp;宠物猫</el-menu-item
      >
      <el-menu-item index="/norm">
        <i class="el-icon-tickets"></i>领养准则</el-menu-item
      >
      <el-menu-item index="/notice"
        ><i class="el-icon-s-order"></i>系统公告</el-menu-item
      >
      <el-menu-item index="/connection">
        <i class="el-icon-s-comment"></i>联系我们</el-menu-item
      >
      <el-menu-item index="/signin" class="signUp" v-if="token == null"
        ><i class="iconfont">&#xe6d6;</i>&nbsp;&nbsp;&nbsp;注册</el-menu-item
      >
      <el-menu-item index="/login" class="login" v-if="token == null">
        <i class="el-icon-user"></i>登录
      </el-menu-item>
      <el-menu-item class="signUp" @click="logout" v-if="token != null"
        ><i class="el-icon-delete"></i>注销</el-menu-item
      >
      <el-menu-item index="/" class="login" v-if="token != null">
        <i class="el-icon-user"></i>个人中心
      </el-menu-item>
    </el-menu>
    <div class="swiper">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(item, index) in carouselList" :key="index">
          <img :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 轮播图 -->
    <!-- <div class="swiper-content">
      <swiper ref="mySwiper" :options="swiperOption" class="show-swiper">
        <template v-for="(item, index) in list">
          <swiper-slide :key="index">
            <div class="swiper-item">
              <img :src="item" alt="" />
            </div>
          </swiper-slide>
        </template>
      </swiper>
    </div> -->
  </div>
</template>

<script>
// import "swiper/dist/css/swiper.css";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      carouselList: [
        require("../../assets/img/1.jpg"),
        require("../../assets/img/2.jpg"),
        require("../../assets/img/3.jpg"),
        require("../../assets/img/4.jpg"),
        require("../../assets/img/5.jpg"),
      ],
    };
  },
  computed: {
    ...mapGetters(["token"]),
  },

  methods: {
    logout() {
      console.log("触发logout函数");

      this.$store
        .dispatch("logout")
        .then(() => {
          window.location.reload();
        })
        .then(() => {
          this.$message.success("注销成功");
        })
        .catch(() => {
          this.$message.error("注销失败");
          window.location.reload();
        });
    },
  },
  // components: {
  //   swiper,
  //   swiperSlide,
  // },
  // data() {
  //   return {
  //     // 导航栏
  //     activeIndex2: "1",
  //     // 轮播图
  //     list: [
  //       require("../../assets/img/1.jpg"),
  //       require("../../assets/img/2.jpg"),
  //       require("../../assets/img/3.jpg"),
  //       require("../../assets/img/4.jpg"),
  //       require("../../assets/img/5.jpg"),
  //     ],
  //     swiperOption: {
  //       // 设置slider容器能够同时显示的slides数量，默认为1， 'auto'则自动根据slides的宽度来设定数量
  //       slidesPerView: "auto",
  //       /*
  //        * 开启这个参数来计算每个slide的progress(进度、进程)
  //        * 对于slide的progress属性，活动的那个为0，其他的依次减1
  //        */
  //       watchSlidesProgress: true,
  //       // 默认active slide居左，设置为true后居中
  //       centeredSlides: true,
  //       // 当你创建一个Swiper实例时是否立即初始化，这里我们手动初始化
  //       init: false,
  //       longSwipesRatio: 0.1,
  //       touchReleaseOnEdges: true,
  //       observer: true, // 修改swiper自己或子元素时，自动初始化swiper
  //       observeParents: true, // 修改swiper的父元素时，自动初始化swiper
  //       on: {
  //         progress: function() {
  //           for (let i = 0; i < this.slides.length; i++) {
  //             const slide = this.slides.eq(i); // 指定匹配元素集缩减值
  //             const slideProgress = this.slides[i].progress; // 当前元素集的progress值
  //             let modify = 0; // 偏移权重
  //             if (parseInt(Math.abs(slideProgress)) > 0) {
  //               modify = Math.abs(slideProgress) * 0.2; // 不一定要0.2，可自行调整
  //             }
  //             const translate = slideProgress * modify * 500 + "px"; // 500是swiper-slide的宽度
  //             const scale = 1 - Math.abs(slideProgress) / 5; // 缩放权重值，随着progress由中向两边依次递减，可自行调整
  //             const zIndex = 99 - Math.abs(Math.round(10 * slideProgress));
  //             slide.transform(`translateX(${translate}) scale(${scale})`);
  //             slide.css("zIndex", zIndex);
  //             slide.css("opacity", 1); // 是否可见
  //             if (parseInt(Math.abs(slideProgress)) > 1) {
  //               // 设置了只有选中的元素以及他两遍的显示，其他隐藏
  //               slide.css("opacity", 0);
  //             }
  //           }
  //         },
  //         slideChange: function() {},
  //       },
  //     },
  //   };
  // },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper;
  //   },
  // },
  // mounted() {
  //   this.initSwiper();
  // },
  // methods: {
  //   initSwiper() {
  //     this.$nextTick(async () => {
  //       await this.swiper.init(); // 现在才初始化
  //       await this.swiper.slideTo(this.activeItemIndex);
  //     });
  //   },
  //   handleSelect(key, keyPath) {
  //     console.log(key, keyPath);
  //     console.log(this.$router.history.current.path)
  //   },
  // },
};
</script>

<style lang="scss" scoped>
// 导航栏
.signUp {
  float: right !important;
}
.login {
  float: right !important;
}

// 轮播图
.swiper {
  padding: 20px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

// icon

@font-face {
  font-family: "iconfont"; /* project id 2255426 */
  src: url("//at.alicdn.com/t/font_2255426_tmkc7fo499.eot");
  src: url("//at.alicdn.com/t/font_2255426_tmkc7fo499.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2255426_tmkc7fo499.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2255426_tmkc7fo499.woff") format("woff"),
    url("//at.alicdn.com/t/font_2255426_tmkc7fo499.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2255426_tmkc7fo499.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
// .swiper-container {
//   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
// }

// .swiper-content {
//   width: 100%;
//   height: 100%;
//   position: relative;
//   overflow: hidden;
//   margin: 0 auto;
//   padding: 30px 0 20px 0;
//   .show-swiper {
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;

//     .swiper-slide {
//       width: 500px;
//       // 表示所有属性都有动作效果，过度时间为0.4s，以慢速开始和结束的过渡效果
//       transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

//       .swiper-item {
//         width: 100%;
//         height: 100%;
//         // background: rgb(140, 172, 134);
//         box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
//         border-radius: 6px;
//         color: orangered;
//         font-size: 24px;
//         line-height: 1.5;
//         img {
//           margin: 0 auto;
//         }
//       }
//     }
//   }
// }
</style>
