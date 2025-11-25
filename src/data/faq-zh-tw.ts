/**
 * FAQ data for Schema.org FAQPage structured data
 * Language: 繁體中文
 *
 * Auto-generated from awesome-c2pa repository
 * Source: https://github.com/paulortiz199928/awesome-c2pa
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: '什麼是 C2PA?',
    answer: '簡短回答:C2PA 是一項開放標準,透過加密簽署的中繼資料來驗證數位內容的來源和編輯歷史。
詳細說明:內容來源與真實性聯盟(C2PA)提供了一項技術規範,用於在圖片、影片、音訊和文件中嵌入防竄改的來源資訊。它於 2021 年由 Adobe 的內容真實性倡議與 Microsoft/BBC 的 Project Origin 合併而成。'
  },
  {
    question: '它如何運作',
    answer: '簡短回答:C2PA 在媒體檔案中嵌入經過加密簽署的「manifest」,其中包含有關建立、編輯和作者的資訊。任何竄改都會破壞簽章。
技術流程:
1. 建立內容 → 產生包含中繼資料的 manifest
2. 使用私密金鑰簽署 manifest(如 HTTPS 憑證)
3. 將 manifest 嵌入檔案中
4. 編輯內容 → 先前的 manifest 成為「ingredient」(成分)
5. 建立引用舊 manifest 的新 manifest
6. 保留來源鏈
7. 任何人都可以驗證簽章並偵測竄改'
  },
  {
    question: 'C2PA 解決了哪些問題?',
    answer: 'C2PA 解決:
- 錯誤資訊:驗證新聞照片/影片是否未被操縱
- AI 內容透明度:識別 AI 生成或 AI 修改的內容
- 深度偽造:證明真實影片的真實性
- 署名:將功勞歸於原創作者
- 版權:證明所有權和授權
- 信任侵蝕:恢復對數位媒體的信心'
  },
  {
    question: 'C2PA 與浮水印相同嗎?',
    answer: '不同。主要差異:

C2PA 專注於存在時的透明度,浮水印專注於遭受攻擊時的持久性。'
  },
  {
    question: 'C2PA 可以被移除嗎?',
    answer: '簡短回答:可以,C2PA 可透過剝離中繼資料、螢幕截圖或重新編碼來移除。這是設計使然。
為什麼可以接受:
- C2PA 在存在時證明真實性,而非防止移除
- 缺少 C2PA 本身就是資訊(可能遭到竄改)
- 目標是透明度,而非 DRM
- 平台可以標記沒有來源的內容
類比:就像藥瓶上的封條 - 容易破壞,但你知道它是否被打開過。'
  },
  {
    question: 'C2PA 使用區塊鏈嗎?',
    answer: '不使用。C2PA 使用傳統 PKI(公開金鑰基礎建設) - 與 HTTPS/SSL 憑證相同的技術。
重點:
- 使用 X.509 憑證和數位簽章
- 沒有加密貨幣、代幣或交易費用
- 離線運作(驗證無需網際網路)
- 比區塊鏈更快、更簡單
- 選用:某些實作會新增區塊鏈時間戳記作為補充'
  },
  {
    question: 'C2PA 支援哪些檔案格式?',
    answer: '目前支援:
- 圖片:JPEG、PNG、WebP、AVIF、HEIC/HEIF、TIFF、DNG、SVG、GIF
- 影片:MP4、MOV、AVI
- 音訊:WAV、MP3、M4A
- 文件:PDF
開發中:WebM、其他格式'
  },
  {
    question: '如何驗證 C2PA 內容?',
    answer: '最簡單的方法:
- 造訪 https://contentcredentials.org/verify
- 上傳您的檔案
- 檢視來源資訊
命令列:

瀏覽器:安裝 Content Credentials 擴充功能(Chrome/Edge)
以程式方式:使用 C2PA SDK(Rust、JS、Python、Go)'
  },
  {
    question: '如何將 C2PA 加入我的內容?',
    answer: '使用軟體:
- Adobe Photoshop/Lightroom(內建)
- 相機:Nikon Z9/Z8、Leica M11-P、Sony Alpha 系列
- 命令列:c2patool(參閱文件)
要求:
- 來自受信任 CA 的憑證(DigiCert、GlobalSign 等)
- 或用於測試的自簽憑證
請參閱:快速入門指南以取得逐步說明'
  },
  {
    question: '什麼是 Nikon C2PA?',
    answer: '簡短回答:Nikon 正在為其相機開發 C2PA 支援。Z6 III 計劃在 2025 年接收 C2PA 韌體,實現機內簽署照片並包含來源中繼資料。
功能(可用時):
- 機內簽署(無需後製處理)
- 記錄相機型號、序號、設定、GPS
- 私密金鑰儲存在安全硬體中
- 從拍攝時刻開始驗證真實性
- 適合新聞攝影和法律證據
注意:截至 2025 年 11 月,儘管早前曾宣布,Z9 和 Z8 尚未支援 C2PA。'
  }
];
