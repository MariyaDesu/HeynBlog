import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "iconfont icon-align",
      prefix: "framework/",
      link: "framework/",
      children: "structure",
    },
  ],
});
