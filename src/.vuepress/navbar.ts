import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // {
  //   text: "文章",
  //   icon: "iconfont icon-align",
  //   prefix: "/VUE/",
  //   children: [
  //     { text: "1", link: "1.md" },
  //     { text: "2", link: "2.md" },
  //   ],
  // },
  {
    text: "Javascript",
    icon: "iconfont icon-align",
    link: 'Javascript/'
  },
  {
    text: "Vue",
    icon: "iconfont icon-align",
    link: 'Vue/'
  },
  {
    text: "Node",
    icon: "iconfont icon-align",
    link: 'Node/'
  },

]);
