/**
 * 繁體中文 FAQ 數據 (精簡版)
 *
 * 包含 5 個最重要的問題，針對繁體中文搜索優化
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: "什麼是 C2PA？",
    answer: "C2PA（內容來源與真實性聯盟）是一項開放標準，透過加密簽署的中繼資料來驗證數位內容的來源和編輯歷史。它由 Adobe 的內容真實性倡議與 Microsoft/BBC 的 Project Origin 於 2021 年合併成立。C2PA 為圖片、影片、音訊和文件嵌入防竄改的來源資訊提供技術規範。"
  },
  {
    question: "它如何運作？",
    answer: "C2PA 在媒體檔案中嵌入經過加密簽署的'manifest'，其中包含有關建立、編輯和作者的資訊。任何竄改都會破壞簽章。技術流程：1) 建立內容 → 產生包含中繼資料的 manifest；2) 使用私密金鑰簽署 manifest（如 HTTPS 憑證）；3) 將 manifest 嵌入檔案中；4) 編輯內容 → 先前的 manifest 成為'ingredient'(成分)；5) 建立引用舊 manifest 的新 manifest；6) 保留來源鏈；7) 任何人都可以驗證簽章並偵測竄改。"
  },
  {
    question: "C2PA 可以被移除嗎？",
    answer: "是的，C2PA 可以透過刪除中繼資料、截圖或重新編碼來移除。這是設計使然。C2PA 在存在時證明真實性，而不是防止移除。缺少 C2PA 本身就是資訊（可能的竄改）。目標是透明度，而不是 DRM。平台可以標記沒有來源的內容。"
  },
  {
    question: "C2PA 使用區塊鏈嗎？",
    answer: "不。C2PA 使用傳統的 PKI（公開金鑰基礎設施）- 與 HTTPS/SSL 憑證相同的技術。關鍵點：使用 X.509 憑證和數位簽章；沒有加密貨幣、代幣或交易費用；離線工作（驗證不需要網際網路）；比區塊鏈快得多且簡單；可選：一些實作添加區塊鏈時間戳記作為補充。"
  },
  {
    question: "C2PA 的費用是多少？",
    answer: "規範：免費開放（無授權費）。實施成本：開源 SDK 免費；CA 憑證約 200-500 美元/年（S/MIME 憑證 200-300 美元/年，文件簽署憑證 300-500 美元/年）；金鑰儲存的 HSM 500-5000+ 美元（可選）；開發時間因情況而異。免費工具：c2patool、SDK、網頁驗證 - 全部免費。"
  }
];
