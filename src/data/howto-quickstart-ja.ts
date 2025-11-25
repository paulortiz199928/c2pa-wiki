/**
 * 日本語 HowTo データ - クイックスタートガイド
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
  name: "C2PAコンテンツの検証方法",
  description: "C2PAツールを使用してデジタルコンテンツの真正性と起源を検証する方法を学びます。このガイドでは、オンラインツール、ブラウザ拡張機能、コマンドライン検証の3つの方法を説明します。",
  totalTime: "PT5M",
  steps: [
    {
      name: "Content Credentials検証ツールにアクセス",
      text: "Webブラウザを開き、https://contentcredentials.org/verify にアクセスします。これはAdobeの公式無料ツールで、C2PAコンテンツを検証でき、インストールやアカウント作成は不要です。",
      url: "https://contentcredentials.org/verify"
    },
    {
      name: "コンテンツファイルをアップロード",
      text: "任意の画像、動画、文書を検証ページにドラッグアンドドロップします。サポートされている形式には、JPEG、PNG、MP4、MOV、PDFなどがあります。ファイルはプライバシー保護のためブラウザ内でローカルに分析されます。",
      url: "https://c2pa.wiki/ja/getting-started/quick-start/"
    },
    {
      name: "来歴情報を確認",
      text: "表示された来歴データを確認します。これには、作成者の身元、編集履歴、タイムスタンプ、使用されたツール、署名検証状態が含まれます。緑のチェックマークは、コンテンツが署名以降改ざんされていないことを示します。",
      url: "https://c2pa.wiki/ja/getting-started/quick-start/"
    },
    {
      name: "署名状態を確認",
      text: "署名が'有効'と表示されていることを確認します。署名が破損していたり警告が表示されている場合、コンテンツが署名後に変更されたか、署名証明書に問題がある可能性があります。有効な署名は、コンテンツの完全性を確認します。",
      url: "https://c2pa.wiki/ja/getting-started/faq/"
    }
  ]
};
