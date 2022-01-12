<script lang="ts" setup>
import { pendantList } from "./constants";

const mid = pendantList.length / 2;
const pendant = [pendantList.slice(0, mid), pendantList.slice(mid)];
</script>

<template>
  <view class="pendant-container">
    <scroll-view class="pendant-scroll" :scroll-x="true">
      <view class="icon-box" v-for="(list, i) in pendant" :key="i">
        <img class="pendant-icon" :src="svg" v-for="svg in list" :key="svg" />
      </view>
    </scroll-view>
  </view>
</template>

<style lang="less">
.pendant-container {
  .pendant-scroll {
    white-space: nowrap;
    width: 100%;

    .icon-box {
      margin-bottom: 10px;

      .pendant-icon {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }

      .pendant-icon:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
