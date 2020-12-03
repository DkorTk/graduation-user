<template>
  <div>
    <Head />
    <div class="main">
      <h1 class="normText">让爱回家</h1>
      <div class="myImage">
        <div class="myBlock">
          <el-image :src="src"></el-image>
        </div>
      </div>
      <div class="myAdoption">
        <h3>领养规定</h3>
        <h4 class="myTitle">一、申请条件</h4>
        <div class="requirement">
          <p>
            1、申请人必须是年满18周岁的成年人，并且具有完全行为能力。未满18周岁者需由家长（监护人）同意并签字。
          </p>
          <p>
            2、领养人一定要真心喜欢狗狗并且有一定的经济实力，最基本的要求是狗狗要有一个温暖的居住所，一日三餐的温饱要保证。
          </p>
          <p>
            3、与家人共同居住的申请人，需在征得其他家庭成员同意的情况下领养狗狗。租住他人房屋的申请人，需得到屋主的许可，出具屋主书面许可饲养宠物的信件。
          </p>
          <p>
            4、住校的学生请不要申请，一般学校不允许寝室饲养宠物，而且你并不能保障它们的生活。
          </p>
          <p>
            5、频繁更换工作地点的人们请慎重考虑，因为你异地搬迁的情况可能会造成它们再次流浪,除非你能做到不离不弃。
          </p>
          <p>6、新婚夫妻慎重申请，避免将来以怀孕为名抛弃动物。</p>
          <p>7、有多年养宠物经验者优先。</p>
          <p>8、家中有爱动物的老人优先。</p>
        </div>
        <h4 class="myTitle">二、领养准则</h4>

        <div class="norm">
          <p>1、保证领养动物的正常生活，爱护狗狗，不能虐待宠物。</p>
          <p>2、保证无论环境如何变化，要对狗狗不离不弃。</p>
          <p>
            3、在狗狗十几年的生涯当中，不得将狗转送甚至出售，如的确发生不可抗因素的变故，不能再继续养它，请通知原救助人，退回原救助处
          </p>
          <p>
            4、为了主人和狗狗之间能够更好的相处，申请人需亲自选定领养的狗狗，不得请其他人代劳。
          </p>
          <p>
            5、科学喂养，尽量给狗狗吃专用粮（狗粮及罐头），不要给狗狗不利于其健康的食物
          </p>

          <p>
            6、在狗狗生病的情况下，请到医院医治，保证领养狗狗的健康是你对它的责任。
          </p>

          <p>7、请为领养回去的狗狗做绝育手术。</p>
          <p>8、每年定期免疫，请带领养回去的狗狗到动物医院进行免疫。</p>
          <p>9、领养后定期向中国小动物保护协会提供反馈信息。</p>
          <p>10、接受中国小动物保护协会的回访并积极配合。</p>
          <p>
            11、如遇领养环境发生变化须与中国小动物保护协会联系并确认是否适合继续领养。
          </p>
          <p>
            12、严格遵守有关法律法规和社会公德，合法、合理地饲养宠物，并为您领养的狗狗办理相关证件。
          </p>
          <p>
            13、狗狗与人类不同。狗狗的行为通常无法预测。因此当狗狗同儿童相处时，需有成人在场。
            在领养前，根据自身条件和偏好选择合适的狗狗进行领养。
          </p>

          <p>
            14、领养时允许拍摄领养人和狗的照片，如出现失访、虐待等情况，将在官网予以公布，情节严重者将追究其相关法律责任。
          </p>
        </div>
      </div>
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

<style lang="scss">
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
  justify-content: center;
  text-align: center;
  padding: 20px 10px;
  margin: 20px;
}

.myBlock {
  display: inline-block;
  padding: 5px;
  margin: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
  width: 35%;
}

.demonstration {
  color: #8492a6;
  display: block;
  margin-top: 10px;
}

// 文章
.main {
  margin: 15px;
  box-shadow: 6px 0 5px -5px rgba(180,160,120,.6), -6px 0 5px -5px rgba(180,160,120,.6);
}
.myAdoption {
  margin: 20px;
  padding: 5px;
  h3 {
    padding: 15px;
  }
  .myTitle {
    margin: 15px;
  }
}
.requirement {
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
  p {
    width: 100%;
    display: flex;
    margin: 8px;
  }
}

.norm {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
  p {
    width: 100%;
    display: flex;
    margin: 8px;
  }
}
</style>
