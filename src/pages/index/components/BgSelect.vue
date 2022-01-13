<script lang="ts" setup>
import { ref } from "vue";
import { bgList } from "./constants";

const emit = defineEmits(["onChange"]);
const selectedBg = ref(0);

function onClick(src: string, index: number) {
  selectedBg.value = index;
  emit("onChange", src);
}
</script>

<template>
  <view class="bg-tool-container">
    <scroll-view class="bg-tool-content" :scroll-x="true">
      <img
        v-for="(src, i) in bgList"
        class="bg-img"
        :class="{ 'bg-img-selected': selectedBg === i }"
        :src="src"
        @click="onClick(src, i)"
        :key="src"
      />
    </scroll-view>
  </view>
</template>

<style lang="less">
.bg-tool-container {
  .bg-tool-content {
    white-space: nowrap;
    width: 100%;

    .bg-img {
      display: inline-block;
      width: 50px;
      height: 80px;
      box-sizing: border-box;
      margin-right: 10px;
      border-radius: 10px;

      &-selected {
        border: 3px solid #fff;
      }
    }
  }
}
</style>
