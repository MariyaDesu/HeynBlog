import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Javascript",
      icon: "iconfont icon-align",
      prefix: "Javascript/",
      link: "Javascript/",
      children: "structure",
    },
    {
      text: "Vue",
      icon: "iconfont icon-align",
      prefix: "Vue/",
      link: "Vue/",
      children: "structure",
    },
    {
      text: "Node",
      icon: "iconfont icon-align",
      prefix: "Node/",
      link: "Node/",
      children: "structure",
    },
  ],
});