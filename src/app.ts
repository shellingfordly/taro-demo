import { createApp } from "vue";
import { Button, Toast, Tabbar, TabbarItem, Icon } from "@nutui/nutui-taro";
import "@nutui/nutui-taro/dist/style.css";
import { setSvgIcon } from "./components/svg-icon";

import "./app.less";

const App = createApp({
  onShow() {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

setSvgIcon(App);

App.use(Button)
  .use(Toast)
  .use(Icon)
  .use(Tabbar)
  .use(TabbarItem);

export default App;
