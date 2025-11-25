/**
 * HowTo data for Schema.org HowTo structured data
 * Language: 简体中文
 *
 * Auto-generated from awesome-c2pa repository
 * Source: https://github.com/paulortiz199928/awesome-c2pa
 */

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface HowToData {
  name: string;
  description: string;
  totalTime: string;
  steps: HowToStep[];
}

export const quickStartHowTo: HowToData = {
  name: '如何验证 C2PA 内容',
  description: '学习如何使用 C2PA 工具验证数字内容的真实性和来源，仅需 5 分钟。',
  totalTime: 'PT5M',
  steps: [
    {
      name: '查看来源信息：',
      text: '- 创作者身份 - 编辑历史 - 签名状态 - 原始内容（如果可用） 立即尝试 示例图像：https://contentauthenticity.org/examples 在浏览时自动验证：',
      url: 'https://contentcredentials.org/verify'
    },
    {
      name: '安装[内容凭证扩展](https://chrome.google.com/webstore)',
      text: '- 适用于 Chrome、Edge、Brave'
    },
    {
      name: '点击图标查看来源详情',
      text: '对于开发者和高级用户： cargo install c2patool brew install c2patool c2patool photo.jpg c2patool photo.jpg --detailed c2patool photo.jpg --output manifest.json c2patool *.jpg File: photo.jpg Status: ✓ Valid C2PA signature Creator: John Doe (john@example.com) Created: 2025-11-21T10:30:00'
    }
  ]
};
