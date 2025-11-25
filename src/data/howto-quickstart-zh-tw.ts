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
      name: '**訪問驗證工具**:打開網頁瀏覽器並訪問 https://contentcredentials.org/verify 以使用官方 C2PA 驗證工具。',
      text: '',
      url: 'https://contentcredentials.org/verify'
    },
    {
      name: '**上傳媒體檔案**:將圖片、影片或文件拖放到驗證頁面,或點擊瀏覽並從裝置中選擇檔案。',
      text: ''
    },
    {
      name: '**檢視來源資訊**:檢查顯示的資訊,包括:',
      text: '- 創作者身份 - 建立日期 - 編輯歷史 - 使用的工具和軟體'
    },
    {
      name: '**驗證簽章狀態**:確認簽章顯示為「有效」並帶有綠色勾號,這表明內容自簽章後未被竄改。',
      text: ''
    }
  ]
};
