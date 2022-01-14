<script lang="ts" setup>
import { pendantList } from "./constants";

defineEmits(["addPendant"]);

const mid = pendantList.length / 2;
const pendant = [pendantList.slice(0, mid), pendantList.slice(mid)];
</script>

<template>
  <view class="pendant-container">
    <scroll-view class="pendant-scroll" :scroll-x="true">
      <view class="icon-box" v-for="(list, i) in pendant" :key="i">
        <text :class="['iconfont', name]" v-for="name in list" :key="name" />
      </view>
    </scroll-view>
  </view>
</template>

<style lang="less">
@import "../../../styles/fonts/iconfont.css";

.pendant-container {
  .pendant-scroll {
    white-space: nowrap;
    width: 100%;

    .icon-box {
      display: flex;
      margin-bottom: 10px;
      font-size: 40px;

      .iconfont {
        font-size: 35px;
        color: #efefef;
      }

      .pendant-icon {
        width: 35px;
        height: 30px;
        margin-right: 10px;
      }

      .pendant-icon:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
