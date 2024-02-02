import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文章",
    icon: "iconfont icon-align",
    prefix: "/framework/",
    children: [
      { text: "1", link: "1.md" },
      { text: "2", link: "2.md" },
    ],
  },

]);
