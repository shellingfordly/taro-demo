import { canvasToTempFilePath, saveImageToPhotosAlbum } from "@tarojs/taro";

export function downloadCanvasImage(
  canvasId: string,
  width: number,
  height: number
) {
  canvasToTempFilePath({
    x: 0,
    y: 0,
    width,
    height,
    canvasId,
    success: function(res) {
      saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success: (res) => {
          console.log("success", res);
        },
        fail: (err) => {
          console.log("err", err);
        },
      });
    },
  });
}
