export interface ListItem {
  value: number;
  text: string;
}

export enum TabKey {
  Bg,
  Pendant,
  Text,
}

export const tabList: ListItem[] = [
  {
    value: 0,
    text: "背景",
  },
  {
    value: 1,
    text: "挂件",
  },
  {
    value: 2,
    text: "文字",
  },
];
