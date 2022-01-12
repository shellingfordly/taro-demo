<template>
  <view class="home-container">
    <div class="card-container" ref="el" :style="style"></div>
    <view class="tools-container">
      <Tab v-model="activeKey" :list="tabList" />
      <view class="tools-content">
        <BgSelect v-if="activeKey === TabKey.Bg" @onChange="onChangeBg" />
        <Pendant v-else-if="activeKey === TabKey.Pendant" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { nextTick, createSelectorQuery } from "@tarojs/taro";
import html2canvas from "html2canvas";

export default defineComponent({
  onReady() {
    nextTick(() => {
      createSelectorQuery()
        .selectAll(".card-container")
        .boundingClientRect()
        .exec((domList) => {
          html2canvas(domList[0], {
            backgroundColor: null, //避免图片有白色边框
          }).then((canvas) => {
            let dataURL = canvas.toDataURL("image/png");
            console.log(dataURL);
          });
        });
    });
  },
});
</script>

<script setup lang="ts">
import { CSSProperties, reactive, ref } from "vue";
import Tab from "../../components/tab/Tab.vue";
import { TabKey, tabList } from "./constans";
import BgSelect from "./components/BgSelect.vue";
import Pendant from "./components/Pendant.vue";

const el = ref(null);
const activeKey = ref(0);
const style = reactive<CSSProperties>({
  width: "100vw",
  height: "100vh",
  // backgroundImage: `url(${require("/src/assets/bg_0.png")})`,
  backgroundSize: "cover",
});

onMounted(() => {
  console.log("============", el.value);
});

function onChangeBg(url: string) {
  style.backgroundImage = `url(${url})`;
}
</script>

<style lang="scss">
.home-container {
  position: relative;
  width: 100vw;
  height: 100vh;

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
