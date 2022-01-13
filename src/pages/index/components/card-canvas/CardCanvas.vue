<script lang="ts" setup>
import { onMounted } from "vue";
import { createCanvasContext } from "@tarojs/taro";
const ctx = createCanvasContext("cardCanvas");
console.log(ctx);

// Draw points
ctx.beginPath();
ctx.arc(20, 20, 2, 0, 2 * Math.PI);
ctx.setFillStyle("red");
ctx.fill();
ctx.beginPath();
ctx.arc(200, 20, 2, 0, 2 * Math.PI);
ctx.setFillStyle("lightgreen");
ctx.fill();
ctx.beginPath();
ctx.arc(20, 100, 2, 0, 2 * Math.PI);
ctx.setFillStyle("blue");
ctx.fill();
ctx.setFillStyle("black");
ctx.setFontSize(12);
onMounted(() => {
  // Draw guides
  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.lineTo(20, 100);
  ctx.lineTo(200, 20);
  ctx.setStrokeStyle("#AAAAAA");
  ctx.stroke();
});

function aaa() {
  // Draw quadratic curve
  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.quadraticCurveTo(20, 100, 200, 20);
  ctx.setStrokeStyle("black");
  ctx.stroke();
  ctx.draw();
}
</script>

<template>
  <button @click="aaa">aaa</button>
  <canvas canvas-id="cardCanvas" width="100%" height="600px"></canvas>
</template>

<style scoped lang="less"></style>
