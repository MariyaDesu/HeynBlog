import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "LINK",
  description: "Heyn's BLOGS",

  head: [
    // 下载字体
    [
      "link",
      {
        href: "https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        rel: "stylesheet",
      },
    ],

    // ["link", { rel: "stylesheet", href: "/styles/myFont.css" }],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,


  


  
});
