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
      name: '**访问验证工具**：打开网页浏览器并访问 https://contentcredentials.org/verify 以使用官方 C2PA 验证工具。',
      text: '',
      url: 'https://contentcredentials.org/verify'
    },
    {
      name: '**上传媒体文件**：将图片、视频或文档拖放到验证页面，或点击浏览并从设备中选择文件。',
      text: ''
    },
    {
      name: '**查看来源信息**：检查显示的信息，包括：',
      text: '- 创作者身份 - 创建日期 - 编辑历史 - 使用的工具和软件'
    },
    {
      name: '**验证签名状态**：确认签名显示为"有效"并带有绿色勾号，这表明内容自签名后未被篡改。',
      text: ''
    }
  ]
};
