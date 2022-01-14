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

const textSizeList = [
  {
    size: "20px",
    value: "S",
  },
  {
    size: "30px",
    value: "M",
  },
  {
    size: "40px",
    value: "L",
  },
  {
    size: "50px",
    value: "XL",
  },
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
const textSize = ref(textSizeList[0].size);
const shadowColor = ref(colos[0]);

function onChange() {
  emit("onChange", {
    hasShadow: checked.value,
    textColor: textColor.value,
    shadowColor: shadowColor.value,
    textSize: textSize.value,
  });
}

function onChangeSize(size: string) {
  textSize.value = size;
  onChange();
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
    <scroll-view class="textedit-scroll" :scroll-x="true">
      <view class="scroll-box">
        <view class="setting-box">
          <view class="title">文字大小</view>
          <view class="size-box">
            <view
              v-for="item in textSizeList"
              :key="item.value"
              @click="onChangeSize(item.size)"
            >
              {{ item.value }}
            </view>
          </view>
        </view>
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
      </view>
      <view class="scroll-box">
        <view class="setting-box">
          <view class="title">文字阴影</view>
          <view class="shadow-box">
            <view @click="onChangeShadow">
              <text
                :class="['iconfont', checkedIcon]"
                width="20px"
                height="20px"
              />
            </view>
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
      </view>
    </scroll-view>
  </view>
</template>

<style lang="less">
.textedit-container {
  .textedit-scroll {
    white-space: nowrap;
    width: 100%;

    .scroll-box {
      display: flex;
      align-items: center;

      .setting-box {
        display: flex;
        align-items: center;
        padding: 3px 0;
        height: 26px;

        .title {
          margin-right: 10px;
          line-height: 20px;
          font-size: 16px;
        }

        .size-box {
          display: flex;
          align-items: center;
          margin-right: 20px;

          view {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            font-size: 12px;
            text-align: center;
            line-height: 20px;
          }
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

        .shadow-box {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
