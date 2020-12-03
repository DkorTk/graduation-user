<template>
  <div>
    <Header />
    <div class="conMain">
      <div class="conTitle">
        <h2>联系我们</h2>
      </div>

      <div class="conContainer">
        <div class="css-typing">
          <p>
            您好，欢迎您访问宠物求助网，如果您有什么疑问。
          </p>
          <p>
            欢迎点击下发按钮联系我们，谢谢！
          </p>
        </div>
      </div>
    </div>
    <div class="conWay">
      <el-popover
        placement="bottom"
        title="电话"
        width="200"
        trigger="click"
        content="18312787187"
      >
        <el-button slot="reference" class="conButton1">电话</el-button>
      </el-popover>
      <el-popover
        placement="bottom"
        width="200"
        trigger="click"
        content=""
      >
        <div class="demo-image">
          <div class="conBlock">
            <el-image style="width: 100px; height: 100px" :src="url"></el-image>
          </div>
        </div>
        <el-button slot="reference" class="conButton2">微信</el-button>
      </el-popover>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header/Head";
import Footer from "../components/Footer/Footer";

export default {
  name: "Connection",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      url:
        require("@/assets/img/weixin.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.conMain {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.conContainer {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
  margin-bottom: 15px;
}
.conTitle {
  letter-spacing: 20px;
  margin: 20px;
  width: 100%;
}

// 打字效果
.css-typing {
  box-shadow: 6px 0 5px -5px rgba(180, 160, 120, 0.6),
    -6px 0 5px -5px rgba(180, 160, 120, 0.6);
  width: 100%;
}
.css-typing p {
  border-right: 0.15em solid orange;
  font-family: "Courier";
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  padding: 10px;
}
.css-typing p:nth-child(1) {
  width: 100%;
  animation: type 4s steps(40, end);
  animation-fill-mode: forwards;
}

.css-typing p:nth-child(2) {
  width: 100%;
  opacity: 0;
  animation: type2 4s steps(40, end);
  animation-delay: 4s;
  animation-fill-mode: forwards;
}

@keyframes type {
  0% {
    width: 0;
  }
  99.9% {
    border-right: 0.15em solid orange;
  }
  100% {
    border: none;
  }
}

@-webkit-keyframes type {
  0% {
    width: 0;
  }
  99.9% {
    border-right: 0.15em solid orange;
  }
  100% {
    border: none;
  }
}

@keyframes type2 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: 0.15em solid orange;
  }
  100% {
    opacity: 1;
    border: none;
  }
}

@-webkit-keyframes type2 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: 0.15em solid orange;
  }
  100% {
    opacity: 1;
    border: none;
  }
}

@keyframes type3 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes type3 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
@-webkit-keyframes blink {
  50% {
    border-color: tranparent;
  }
}

// 按钮弹出
.conWay {
  margin: 10px 31%;
}
.conWay::after {
  content: "";
  display: block;
  clear: both;
}
.conButton1 {
  display: block;
  width: 26%;
  float: left;
}
.conButton2 {
  display: block;
  width: 26%;
  float: right;
}
.conBlock {
    display: flex;
    justify-content: center;
}

</style>
