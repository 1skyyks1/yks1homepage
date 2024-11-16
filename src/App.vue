<template>
  <div>
    <div class="bgGrid">
      <div class="Grid">
        <div class="mask"></div>
        <div class="itemGrid-row" v-for="i in gridRows" :key="i">
          <div class="itemGrid-cols" v-for="j in gridCols" :key="j"></div>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="info">
        <div class="header">
          <img src="https://free4.yunpng.top/2024/11/16/67386bb9954ec.jpg" alt="">
        </div>

        <div class="infoText">
          <h1 style="margin: 0; font-size: 2em; font-weight: bold">Hi,</h1>
          <h1 style="margin: 0; font-size: 2em; font-weight: bold">I'm <span class="qn">yks1</span></h1>
        </div>
      </div>

      <div class="typewriter">
        <span style="font-weight: bold; margin-right: 0.5em">"</span>
        <VueTyped :strings="typingTexts" :startDelay="300" :typeSpeed="70" :backSpeed="30" :loop="true"
                  :showCursor="true">
        </VueTyped>
        <span style="font-weight: bold; margin-left: 0.5em">"</span>
      </div>

      <div class="btns">
        <a href="https://space.bilibili.com/384045469" target="_blank">
          <vs-button type="gradient" animation-type="scale" color="#1296db">
            <img src="./assets/bilibili.png" alt="">
            <template #animate >
              bili
            </template>
          </vs-button>
        </a>
        <a href="https://github.com/1skyyks1/yks1homepage" target="_blank">
          <vs-button type="gradient" animation-type="scale" color="#000">
            <img src="./assets/github-fill.png" alt="">
            <template #animate >
              github
            </template>
          </vs-button>
        </a>
        <a href="#">
          <vs-button type="gradient" animation-type="scale" color="#66cc55">
            <img src="./assets/tool.png" alt="">
            <template #animate >
              工具箱
            </template>
          </vs-button>
        </a>
      </div>

    </div>


    <div class="footer">
      <a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: none; color: inherit; cursor: auto;">鄂ICP备2024080883号-1</a> | ©2024
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return{
      gridRows: 9,
      gridCols: 5,
      typingTexts: [
        "Adversity is the first path to truth.",
        "He who has never hoped can never despair.",
      ],
    }
  }

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  max-width: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  body {
    background: var(--bgColor);
  }
  .vs-button {
    outline: none !important;
  }
}
@media screen and (max-width: 762px){
  .bgGrid{
    .Grid{
      .itemGrid-row{
        .itemGrid-cols{
          width: 60px !important;
          height: 60px !important;
        }
      }
      .mask {
        height: 110% !important;
      }
    }
  }
  .main {
    background-size: cover !important;
    background-position: -20em !important;

    .info {
      flex-direction: column;
      align-items: center;

      .infoText {
        font-size: 1em !important;
      }

      .header {
        margin: 0 0 1em 0;
      }
    }

    .typewriter {
      top: 60dvh !important;
    }
  }
}
.footer {
  position: absolute;
  bottom: 1em;
  width: 99%;
  text-align: center;
  color: var(--mainColor);
}

.bgGrid{
  .Grid {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    top: 0;
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: linear-gradient(to top right,
      var(--bgColor) 50%,
      rgb(255 255 255 / 0) 100%);
    }
    .itemGrid-row {
      .itemGrid-cols {
        width: 88px;
        height: 88px;
        border-left: 1px dashed var(--mainColor);
        border-bottom: 1px dashed var(--mainColor);
      }
    }
  }
}

.main{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: var(--mainColor);

  .info{
    display: flex;
    margin-bottom: 2em;

    .infoText {
      margin-left: 2em;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      font-size: 1.3em;

      .qn {
        position: relative;

        &::before {
          position: absolute;
          border-radius: 5px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: -1;
          content: "";
          background: #fe859994;
          height: 30%;
          width: 110%;
          display: inline-block;
        }
      }
    }

    .header {
      width: 9em;
      height: 9em;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        background: green;
        width: 1.5em;
        height: 1.5em;
        border-radius: 50%;
        border: 3px solid #ffffff;
        bottom: 0;
        right: 20px;
      }

      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        border: 3px #fff solid;
        box-shadow: 0 0 15px 6px #ffb3b3;
      }
    }
  }

  .btns {
    display: flex;

    :not(:last-child){
      margin-right: 1em;
    }

    .vs-button {
      width: 3.5em;
      height: 3.5em;
      margin: 0;
    }

    /deep/ .vs-button__content{
      padding: 0.8em;
    }

    i {
      font-size: 1.8em;
    }
  }

  .typewriter {
    display: flex;
    margin-bottom: 2em;
    height: 50px;
    text-align: center;
  }
}

</style>
