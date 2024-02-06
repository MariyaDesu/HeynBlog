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
    text: "Html",
    icon: "iconfont icon-align",
    link: 'Html/'
  },
  {
    text: "CSS",
    icon: "iconfont icon-align",
    link: 'Css/'
  },
  {
    text: "Javascript",
    icon: "iconfont icon-align",
    link: 'Javascript/'
  },
  {
    text: "TypeScript",
    icon: "iconfont icon-align",
    link: 'TypeScript/'
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
