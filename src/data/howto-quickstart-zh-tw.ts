/**
 * 繁體中文 HowTo 數據 - 快速入門指南
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
  name: "如何驗證 C2PA 內容",
  description: "學習如何使用 C2PA 工具驗證數位內容的真實性和來源。本指南涵蓋三種方法：線上工具、瀏覽器擴充功能和命令列驗證。",
  totalTime: "PT5M",
  steps: [
    {
      name: "訪問內容憑證驗證工具",
      text: "打開網頁瀏覽器並訪問 https://contentcredentials.org/verify。這是 Adobe 的官方免費工具，用於驗證 C2PA 內容，無需安裝或建立帳戶。",
      url: "https://contentcredentials.org/verify"
    },
    {
      name: "上傳您的內容檔案",
      text: "將任何圖片、影片或文件拖放到驗證頁面上。支援的格式包括 JPEG、PNG、MP4、MOV、PDF 等。檔案在瀏覽器中本地分析以保護隱私。",
      url: "https://c2pa.wiki/zh-tw/getting-started/quick-start/"
    },
    {
      name: "查看來源資訊",
      text: "檢查顯示的來源資料，包括建立者身份、編輯歷史、時間戳記、使用的工具和簽章驗證狀態。綠色勾號表示內容自簽署以來未被竄改。",
      url: "https://c2pa.wiki/zh-tw/getting-started/quick-start/"
    },
    {
      name: "檢查簽章狀態",
      text: "驗證簽章顯示為'有效'。如果簽章被破壞或顯示警告，內容可能在簽署後被修改，或簽署憑證可能有問題。有效簽章確認內容的完整性。",
      url: "https://c2pa.wiki/zh-tw/getting-started/faq/"
    }
  ]
};
