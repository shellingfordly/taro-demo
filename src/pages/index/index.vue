<template>
  <view
    class="home-container"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <view class="head-container">
      <view class="change" @click="onChangeTextList">换一句</view>
      <view class="preview" @click="onPreview">预览</view>
    </view>
    <movable-area class="canvas" :style="canvasStyle">
      <movable-view
        :class="[`text-container-${i}`]"
        v-for="(text, i) in textList"
        direction="all"
        :style="textStyle"
      >
        {{ text }}
      </movable-view>
    </movable-area>
    <view :class="toolsClass">
      <Tab v-model="activeKey" :list="tabList" />
      <view class="tools-content">
        <BgSelect v-if="activeKey === TabKey.Bg" @onChange="onChangeBg" />
        <Pendant
          v-else-if="activeKey === TabKey.Pendant"
          @addPendant="onAddPendant"
        />
        <TextEdit v-else @on-change="onChangeText" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { CSSProperties, computed, ref, reactive } from "vue";
import Tab from "../../components/tab/Tab.vue";
import { TabKey, tabList } from "./constans";
import BgSelect from "./components/BgSelect.vue";
import Pendant from "./components/Pendant.vue";
import { WordList } from "../../data/data";
import TextEdit from "./components/TextEdit.vue";
import { bgList } from "./components/constants";
import { getSystemInfoSync } from "@tarojs/taro";

const { windowWidth: width, windowHeight: height } = getSystemInfoSync();
const activeKey = ref(0);
const imgList = reactive(new Array(12).fill(""));
const imgUrl = ref(bgList[0]);
const canvasStyle = computed<CSSProperties>(() => ({
  width: width + "px",
  height: height + "px",
  backgroundImage: `url('${imgUrl.value}')`,
  backgroundSize: `${width}px ${height}px`,
  backgroundPosition: "0 0",
}));
const textList = ref(randomText());
const textStyle = reactive<CSSProperties>({});
const iconUrl = ref("");
const isPreview = ref(false);
const toolsClass = computed(() => {
  let classname = "";
  if (isPreview.value) {
    classname = "tools-none";
  } else classname = "";
  return ["tools-container", classname];
});

function randomText() {
  return WordList[Math.floor(Math.random() * WordList.length)];
}

function onChangeTextList() {
  textList.value = randomText();
}

function onPreview() {
  isPreview.value = !isPreview.value;
}

function onChangeBg(url: string) {
  imgUrl.value = url;
}

function onAddPendant(src: string) {
  const index = imgList.findIndex((v) => !v);
  imgList[index] = src;
  iconUrl.value = src;
}

function onChangeText({ hasShadow, textColor, shadowColor, textSize }: any) {
  if (hasShadow) {
    textStyle.textShadow = `${shadowColor} 3px 3px 8px`;
  } else {
    textStyle.textShadow = "none";
  }
  textStyle.color = textColor;
  textStyle.fontSize = textStyle.width = textSize;
}
</script>

<style lang="scss">
.home-container {
  position: relative;
  overflow: hidden;

  .head-container {
    display: flex;
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 10;

    .change,
    .preview {
      color: #fff;
      border-radius: 4px;
      line-height: 30px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      background-color: rgb(0, 0, 0, 0.4);
      cursor: pointer;
    }

    .change {
      width: 60px;
      margin-right: 10px;
    }

    .preview {
      width: 40px;
    }
  }

  .canvas {
    position: relative;

    .move-box {
      position: relative;
      width: 30px;
      height: 30px;
    }

    .text-container-0,
    .text-container-1 {
      position: relative;
      top: 100px;
      left: 50%;
      width: 40px;
      font-size: 40px;
      color: #000;
      font-weight: bold;
      text-shadow: black 3px 3px 8px;
    }

    .text-container-0 {
      margin-left: 25px;
    }

    .text-container-1 {
      margin-left: -125px;
    }
  }

  .tools-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    background-color: rgb(0, 0, 0, 0.4);
    transition: all 0.3s linear;

    .tools-content {
      height: 110px;
      padding: 0 20px;
    }
  }

  .tools-none {
    bottom: -140px;
  }
}
</style>
