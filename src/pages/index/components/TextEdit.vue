<script lang="ts" setup></script>

<template>
  <view class="textedit-container">
    <scroll-view class="textedit-scroll" :scroll-x="true">
      <view class="setting-box">
        <view class="title">文字颜色</view>
        <view class="colors">
          <view></view>
          <view></view>
          <view></view>
          <view></view>
          <view></view>
          <view></view>
          <view></view>
        </view>
      </view>
      <view class="setting-box">
        <view class="title">文字阴影</view>
        <view class="">有/无</view>
      </view>
      <view class="setting-box">
        <view class="title">阴影颜色</view>
        <view class="colors">
          <view></view>
          <view></view>
          <view></view>
          <view></view>
          <view></view>
          <view></view>
          <view></view>
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
    font-size: 12px;

    .setting-box {
      display: flex;
      margin-bottom: 10px;

      .title {
        margin-right: 10px;
      }

      .colors {
        display: flex;

        view {
          margin-right: 8px;
          width: 20px;
          height: 20px;
          border-radius: 4px;
          background-color: #888;
        }
      }
    }
  }
}
</style>
