<script lang="ts" setup>
import { ListItem } from "src/pages/index/constans";
import { ref } from "vue";

defineProps<{
  list: ListItem[];
  modelValue: number;
}>();

const emit = defineEmits(["onChange", "update:modelValue"]);

const selected = ref(0);

function onClick(val: number) {
  selected.value = val;
  emit("update:modelValue", val);
  emit("onChange", val);
}
</script>

<template>
  <view class="tabs-container">
    <text
      class="tab-plane"
      :class="{ 'tab-selected': selected === item.value }"
      v-for="item in list"
      :key="item.value"
      @tap="onClick(item.value)"
    >
      {{ item.text }}
    </text>
  </view>
</template>

<style lang="less">
.tabs-container {
  padding: 10px;

  .tab-plane {
    margin: 0 10px;
    cursor: pointer;
    font-size: 16px;

    &.tab-selected {
      color: rgb(182, 9, 13);
    }
  }
}
</style>
