<script lang="ts" setup>
import { computed, ref } from "vue";
import { btnUrl } from "./constants";

const emit = defineEmits(["onChange"]);

const colos = [
  "#000",
  "#fff",
  "#c73e3c",
  "#ebb22d",
  "#51ed9f",
  "#435ce8",
  "#6f43e8",
];

const checked = ref(true);
const checkedIcon = computed(() => {
  if (checked.value) {
    return btnUrl.right;
  } else {
    return btnUrl.no;
  }
});
const textColor = ref(colos[0]);
const shadowColor = ref(colos[0]);

function onChange() {
  emit("onChange", {
    hasShadow: checked.value,
    textColor: textColor.value,
    shadowColor: shadowColor.value,
  });
}

function onChangeShadow() {
  checked.value = !checked.value;
  onChange();
}

function changeTextColor(color: string) {
  textColor.value = color;
  onChange();
}

function changeShadowColor(color: string) {
  shadowColor.value = color;
  onChange();
}
</script>

<template>
  <view class="textedit-container">
    <scroll-view class="textedit-scroll" :scroll-y="true">
      <view class="setting-box">
        <view class="title">文字颜色</view>
        <view class="colors">
          <view
            v-for="color in colos"
            :class="{ selected: textColor === color }"
            :key="color"
            :style="{ backgroundColor: color }"
            @click="changeTextColor(color)"
          />
        </view>
      </view>
      <view class="setting-box">
        <view class="title">文字阴影</view>
        <view @click="onChangeShadow">
          <span :class="['iconfont', checkedIcon]" width="20px" height="20px" />
        </view>
      </view>
      <view class="setting-box">
        <view class="title">阴影颜色</view>
        <view class="colors">
          <view
            :class="{ selected: shadowColor === color }"
            v-for="color in colos"
            :key="color"
            :style="{ backgroundColor: color }"
            @click="changeShadowColor(color)"
          />
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style lang="less">
.textedit-container {
  .textedit-scroll {
    white-space: nowrap;
    width: 100%;

    .setting-box {
      display: flex;
      padding: 3px 0;
      height: 26px;

      .title {
        margin-right: 10px;
        line-height: 20px;
        font-size: 16px;
      }

      .colors {
        display: flex;

        view {
          box-sizing: border-box;
          margin-right: 8px;
          width: 20px;
          height: 20px;
          border-radius: 4px;
          background-color: #888;

          &.selected {
            border: 4px solid #ffe100;
          }
        }
      }
    }
  }
}
</style>
