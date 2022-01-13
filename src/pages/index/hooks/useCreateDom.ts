type CommonObj = { [key: string]: any };

export interface ConfigModel extends CommonObj {
  type: keyof HTMLElementTagNameMap;
  style?: CommonObj;
}

export function createDom(config: ConfigModel) {
  const dom = document.createElement(config.type);
  if (config.style) {
    Reflect.ownKeys(config.style).forEach((key: string) => {
      dom.style[key] = config?.style?.[key];
    });
    Reflect.deleteProperty(config, "style");
  }
  Reflect.deleteProperty(config, "type");
  Reflect.ownKeys(config).forEach((key: string) => {
    dom.setAttribute(key, config[key]);
  });
  const view = document.createElement("movable-view");
  view.setAttribute("direction", "all");
  view.className = "move-box" + config.className;
  view.style.position = "relative";
  view.style.top = "100px";
  view.style.left = "100px";
  view.appendChild(dom);
  return view;
}
