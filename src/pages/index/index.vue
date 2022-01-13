<template>
  <view class="home-container">
    <movable-area class="canvas" :style="canvasStyle">
      <movable-view
        :class="[`text-container-${i}`]"
        v-for="(text, i) in textList"
        direction="all"
      >
        {{ text }}
      </movable-view>
    </movable-area>
    <view class="tools-container">
      <Tab v-model="activeKey" :list="tabList" />
      <view class="tools-content">
        <BgSelect v-if="activeKey === TabKey.Bg" @onChange="onChangeBg" />
        <Pendant
          v-else-if="activeKey === TabKey.Pendant"
          @addPendant="onAddPendant"
        />
        <TextEdit v-else />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { CSSProperties, computed, ref, onMounted, reactive } from "vue";
import Tab from "../../components/tab/Tab.vue";
import { TabKey, tabList } from "./constans";
import BgSelect from "./components/BgSelect.vue";
import Pendant from "./components/Pendant.vue";
// import { WordList } from "../../data/data";
import TextEdit from "./components/TextEdit.vue";

const activeKey = ref(2);
const imgList = reactive(new Array(12).fill(""));
const imgUrl = ref(require("/src/assets/bg_0.png"));
const canvasStyle = computed<CSSProperties>(() => ({
  // backgroundImage: `url('${imgUrl.value}')`,
  backgroundSize: "cover",
}));
const textList = ref([randomText(), randomText()]);

function randomText() {
  // return WordList[Math.floor(Math.random() * WordList.length)];
  return "";
}

function onChangeBg(url: string) {
  imgUrl.value = url;
}

function onAddPendant(src: string) {
  const index = imgList.findIndex((v) => !v);
  imgList[index] = src;
}

onMounted(() => {});
</script>

<style lang="scss">
.home-container {
  position: relative;

  .canvas {
    position: relative;
    width: 100vw;
    height: 100vh;

    .move-box {
      position: relative;
      width: 30px;
      height: 30px;
    }

    .text-container-0,
    .text-container-1 {
      position: relative;
      left: 50%;
      width: 40px;
      height: 200px;
      color: #000;
      font-size: 40px;
      font-weight: bold;
      text-shadow: black 4px 4px 8px;
    }

    .text-container-0 {
      top: 110px;
      margin-left: 25px;
    }

    .text-container-1 {
      top: 190px;
      margin-left: -125px;
    }
  }

  .tools-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    color: #fff;
    background-color: rgb(0, 0, 0, 0.4);

    .tools-content {
      height: 90px;
      padding: 10px 20px 0;
    }
  }
}
</style>
