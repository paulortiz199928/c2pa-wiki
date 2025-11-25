/**
 * FAQ data for Schema.org FAQPage structured data
 * Language: 日本語
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
    question: 'C2PAとは何ですか？',
    answer: '簡潔な回答: C2PAは、暗号署名付きメタデータを通じてデジタルコンテンツの起源と編集履歴を検証するためのオープン標準です。
詳細: Coalition for Content Provenance and Authenticity（C2PA）は、改ざん明白な来歴情報を画像、動画、音声、文書に埋め込むための技術仕様を提供します。2021年にAdobeのContent Authenticity InitiativeとMicrosoft/BBCのProject Originが統合して設立されました。'
  },
  {
    question: 'どのように機能しますか？',
    answer: '簡潔な回答: C2PAは、作成、編集、著作権に関する情報を含む暗号署名付きの「manifest（マニフェスト）」をメディアファイルに埋め込みます。改ざんがあると署名が破損します。
技術的なフロー:
1. コンテンツ作成 → メタデータを含むマニフェスト生成
2. 秘密鍵でマニフェストに署名（HTTPS証明書と同様）
3. マニフェストをファイルに埋め込み
4. コンテンツ編集 → 以前のマニフェストが「ingredient（材料）」になる
5. 古いマニフェストを参照する新しいマニフェストを作成
6. 来歴のチェーンが保存される
7. 誰でも署名を検証し、改ざんを検出できる'
  },
  {
    question: 'C2PAはどのような問題を解決しますか？',
    answer: 'C2PAが対処する課題:
- 誤情報: ニュースの写真/動画が操作されていないことを検証
- AIコンテンツの透明性: AI生成またはAI修正されたコンテンツを識別
- ディープフェイク: 本物の映像の真正性を証明
- 帰属: オリジナルのクリエイターにクレジットを与える
- 著作権: 所有権とライセンスを証明
- 信頼の侵食: デジタルメディアへの信頼を回復'
  },
  {
    question: 'C2PAは電子透かしと同じですか？',
    answer: 'いいえ。 主な違い:

C2PAは存在する場合の透明性に焦点を当て、電子透かしは攻撃を受けた場合の持続性に焦点を当てます。'
  },
  {
    question: 'C2PAは削除できますか？',
    answer: '簡潔な回答: はい、C2PAはメタデータの削除、スクリーンショットの撮影、または再エンコードによって削除できます。これは設計上のものです。
なぜ受け入れられるのか:
- C2PAは削除を防ぐのではなく、存在する場合に真正性を証明する
- C2PAの不在自体が情報を提供する（改ざんの可能性）
- 目標はDRMではなく透明性
- プラットフォームは来歴のないコンテンツにフラグを立てることができる
例え: 薬瓶のシールのようなもの - 簡単に破れますが、開封されたかどうかがわかります。'
  },
  {
    question: 'C2PAはブロックチェーンを使用しますか？',
    answer: 'いいえ。 C2PAは従来のPKI（公開鍵基盤）を使用します - HTTPS/SSL証明書と同じ技術です。
重要なポイント:
- X.509証明書とデジタル署名を使用
- 暗号通貨、トークン、取引手数料なし
- オフラインで動作（検証にインターネット不要）
- ブロックチェーンよりはるかに高速でシンプル
- オプション: 一部の実装では補完としてブロックチェーンタイムスタンプを追加'
  },
  {
    question: 'C2PAはどのファイル形式をサポートしていますか？',
    answer: '現在サポートされている形式:
- 画像: JPEG、PNG、WebP、AVIF、HEIC/HEIF、TIFF、DNG、SVG、GIF
- 動画: MP4、MOV、AVI
- 音声: WAV、MP3、M4A
- 文書: PDF
開発中: WebM、追加形式'
  },
  {
    question: 'C2PAコンテンツを検証するにはどうすればよいですか？',
    answer: '最も簡単な方法:
- https://contentcredentials.org/verify にアクセス
- ファイルをアップロード
- 来歴情報を表示
コマンドライン:

ブラウザ: Content Credentials拡張機能をインストール（Chrome/Edge）
プログラムから: C2PA SDKを使用（Rust、JS、Python、Go）'
  },
  {
    question: 'コンテンツにC2PAを追加するにはどうすればよいですか？',
    answer: 'ソフトウェアを使用:
- Adobe Photoshop/Lightroom（組み込み）
- カメラ: Nikon Z9/Z8、Leica M11-P、Sonyアルファシリーズ
- コマンドライン: c2patool（ドキュメント参照）
要件:
- 信頼されたCAからの証明書（DigiCert、GlobalSignなど）
- またはテスト用の自己署名証明書
参照: ステップバイステップの手順についてはクイックスタートガイドをご覧ください'
  },
  {
    question: 'Nikon C2PAとは何ですか？',
    answer: '簡潔な回答: NikonはカメラのC2PAサポートを開発中です。Z6 IIIは2025年にC2PAファームウェアを受け取る予定で、カメラ内での写真への来歴メタデータ付き署名が可能になります。
機能（利用可能になったとき）:
- カメラ内署名（後処理不要）
- カメラモデル、シリアル番号、設定、GPSを記録
- セキュアハードウェアに保存された秘密鍵
- 撮影の瞬間から真正性を検証
- フォトジャーナリズムと法的証拠に最適
注意: 2025年11月現在、Z9およびZ8は以前の発表にもかかわらずまだC2PAをサポートしていません。'
  }
];
