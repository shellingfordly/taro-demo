<template>
  <view class="home-container">
    <!-- <CardCanvas /> -->
    <canvas
      canvas-id="myCanvas"
      :width="`${screenWidth}px`"
      :height="`${screenHeight}px`"
    />

    <view class="tools-container">
      <button @click="download">download</button>
      <Tab v-model="activeKey" :list="tabList" />
      <view class="tools-content">
        <BgSelect v-if="activeKey === TabKey.Bg" @onChange="onChangeCanvasBg" />
        <Pendant
          v-else-if="activeKey === TabKey.Pendant"
          @addPendant="addPendant"
        />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Tab from "../../components/tab/Tab.vue";
import { TabKey, tabList } from "./constans";
import BgSelect from "./components/BgSelect.vue";
import Pendant from "./components/Pendant.vue";
import { createCanvasContext, getSystemInfoSync } from "@tarojs/taro";
import { downloadCanvasImage } from "./hooks/useDownload";

const { screenWidth, screenHeight } = getSystemInfoSync();
const activeKey = ref(0);
const imgUrl = ref(require("/src/assets/bg_0.png"));

const canvas = createCanvasContext("myCanvas");
canvas.drawImage(imgUrl.value, 0, 0, screenWidth, screenHeight);
canvas.save();
canvas.rect(100, 100, 30, 30);
canvas.clip();
canvas.drawImage(require("/src/assets/icons/pendant_12.svg"), 100, 100, 30, 30); //根据微信getUserInfo接口获取到用户头像
canvas.restore();
canvas.draw();

function onChangeCanvasBg(url: string) {
  canvas.save();
  canvas.drawImage(url, 0, 0, screenWidth, screenHeight);
  canvas.restore();
  canvas.draw();
}

function addPendant(svg: string) {
  canvas.save();
  canvas.rect(0, 0, 30, 30);
  canvas.clip();
  canvas.drawImage(svg, 0, 0, 30, 30); //根据微信getUserInfo接口获取到用户头像
  canvas.restore();
  canvas.draw();
}

function download() {
  downloadCanvasImage("myCanvas", screenWidth, screenHeight);
}

onMounted(() => {});
</script>

<style lang="scss">
.home-container {
  position: relative;

  .tools-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;

    .tools-content {
      height: 110px;
      padding: 10px 20px 0;
    }
  }
}
</style>
