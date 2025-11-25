/**
 * HowTo data for Schema.org HowTo structured data
 * Language: 繁體中文
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
  name: '如何驗證 C2PA 內容',
  description: '學習如何使用 C2PA 工具驗證數位內容的真實性和來源，僅需 5 分鐘。',
  totalTime: 'PT5M',
  steps: [
    {
      name: '檢視來源資訊:',
      text: '- 創作者身份 - 編輯歷史 - 簽章狀態 - 原始內容(如果可用) 立即嘗試範例圖片:https://contentauthenticity.org/examples 瀏覽時自動驗證:',
      url: 'https://contentcredentials.org/verify'
    },
    {
      name: '安裝 [Content Credentials Extension](https://chrome.google.com/webstore)',
      text: '- 適用於 Chrome、Edge、Brave'
    },
    {
      name: '點選圖示以檢視來源詳情',
      text: '適用於開發者和進階使用者: cargo install c2patool brew install c2patool c2patool photo.jpg c2patool photo.jpg --detailed c2patool photo.jpg --output manifest.json c2patool *.jpg File: photo.jpg Status: ✓ Valid C2PA signature Creator: John Doe (john@example.com) Created: 2025-11-21T10:30:00'
    }
  ]
};
