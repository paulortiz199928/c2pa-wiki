/**
 * 简体中文 HowTo 数据 - 快速入门指南
 */

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface HowToData {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
}

export const quickStartHowTo: HowToData = {
  name: "如何验证 C2PA 内容",
  description: "学习如何使用 C2PA 工具验证数字内容的真实性和来源。本指南涵盖三种方法：在线工具、浏览器扩展和命令行验证。",
  totalTime: "PT5M",
  steps: [
    {
      name: "访问内容凭证验证工具",
      text: "打开网页浏览器并访问 https://contentcredentials.org/verify。这是 Adobe 的官方免费工具，用于验证 C2PA 内容，无需安装或创建账户。",
      url: "https://contentcredentials.org/verify"
    },
    {
      name: "上传您的内容文件",
      text: "将任何图像、视频或文档拖放到验证页面上。支持的格式包括 JPEG、PNG、MP4、MOV、PDF 等。文件在浏览器中本地分析以保护隐私。",
      url: "https://c2pa.wiki/zh-cn/getting-started/quick-start/"
    },
    {
      name: "查看来源信息",
      text: "检查显示的来源数据，包括创建者身份、编辑历史、时间戳、使用的工具和签名验证状态。绿色勾号表示内容自签名以来未被篡改。",
      url: "https://c2pa.wiki/zh-cn/getting-started/quick-start/"
    },
    {
      name: "检查签名状态",
      text: "验证签名显示为'有效'。如果签名被破坏或显示警告，内容可能在签名后被修改，或签名证书可能有问题。有效签名确认内容的完整性。",
      url: "https://c2pa.wiki/zh-cn/getting-started/faq/"
    }
  ]
};
