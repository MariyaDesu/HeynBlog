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
    text: "FrontEnd",
    icon: "iconfont icon-javascript",
    link: 'FrontEnd/'
  },
  {
    text: "BackEnd",
    icon: "iconfont icon-java",
    link: 'BackEnd/'
  },
]);
