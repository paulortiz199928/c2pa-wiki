/**
 * FAQ data for Schema.org FAQPage structured data
 * Language: 简体中文
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
    question: '什么是 C2PA？',
    answer: '简短回答： C2PA 是一个开放标准，通过加密签名的元数据验证数字内容的来源和编辑历史。
详细说明： 内容来源和真实性联盟（C2PA）提供了一个技术规范，用于将防篡改的来源信息嵌入图像、视频、音频和文档中。它于 2021 年由 Adobe 的内容真实性倡议和 Microsoft/BBC 的 Project Origin 合并而成。'
  },
  {
    question: '它如何工作',
    answer: '简短回答： C2PA 将加密签名的"清单"嵌入媒体文件中，包含创建、编辑和作者身份信息。任何篡改都会破坏签名。
技术流程：
1. 创建内容 → 生成包含元数据的清单
2. 使用私钥签名清单（类似 HTTPS 证书）
3. 将清单嵌入文件
4. 编辑内容 → 之前的清单成为"成分"
5. 创建引用旧清单的新清单
6. 保留来源链
7. 任何人都可以验证签名并检测篡改'
  },
  {
    question: 'C2PA 解决什么问题？',
    answer: 'C2PA 解决：
- 错误信息：验证新闻照片/视频未被操纵
- AI 内容透明度：识别 AI 生成或 AI 修改的内容
- 深度伪造：证明真实视频的真实性
- 署名：为原创者提供版权信息
- 版权：证明所有权和许可
- 信任侵蚀：恢复对数字媒体的信心'
  },
  {
    question: 'C2PA 与水印相同吗？',
    answer: '不同。 主要区别：

C2PA 侧重于存在时的透明度，水印侧重于受攻击时的持久性。'
  },
  {
    question: 'C2PA 可以被移除吗？',
    answer: '简短回答： 可以，C2PA 可以通过删除元数据、截图或重新编码来移除。这是设计使然。
为什么可以接受：
- C2PA 在存在时证明真实性，而不是防止移除
- 缺少 C2PA 本身就有信息价值（可能被篡改）
- 目标是透明度，而不是 DRM
- 平台可以标记没有来源的内容
类比： 就像药瓶上的封条 - 容易打破，但你知道它是否被打开过。'
  },
  {
    question: 'C2PA 使用区块链吗？',
    answer: '不使用。 C2PA 使用传统 PKI（公钥基础设施）- 与 HTTPS/SSL 证书相同的技术。
要点：
- 使用 X.509 证书和数字签名
- 无加密货币、代币或交易费用
- 离线工作（验证不需要互联网）
- 比区块链更快更简单
- 可选：一些实现添加区块链时间戳作为补充'
  },
  {
    question: 'C2PA 支持哪些文件格式？',
    answer: '目前支持：
- 图像：JPEG、PNG、WebP、AVIF、HEIC/HEIF、TIFF、DNG、SVG、GIF
- 视频：MP4、MOV、AVI
- 音频：WAV、MP3、M4A
- 文档：PDF
开发中： WebM、其他格式'
  },
  {
    question: '如何验证 C2PA 内容？',
    answer: '最简单的方法：
- 访问 https://contentcredentials.org/verify
- 上传您的文件
- 查看来源信息
命令行：

浏览器： 安装内容凭证扩展（Chrome/Edge）
编程方式： 使用 C2PA SDK（Rust、JS、Python、Go）'
  },
  {
    question: '如何向我的内容添加 C2PA？',
    answer: '使用软件：
- Adobe Photoshop/Lightroom（内置）
- 相机：Nikon Z6 III（计划）、Leica M11-P、Sony Alpha 系列
- 命令行：c2patool（参见文档）
要求：
- 来自受信任 CA 的证书（DigiCert、GlobalSign 等）
- 或用于测试的自签名证书
参见： 快速入门指南 获取分步说明'
  },
  {
    question: '什么是 Nikon C2PA？',
    answer: '简短回答： Nikon 正在为其相机开发 C2PA 支持。Z6 III 计划在 2025 年接收 C2PA 固件，实现照片来源元数据的机内签名。
功能（可用时）：
- 机内签名（无需后期处理）
- 记录相机型号、序列号、设置、GPS
- 私钥存储在安全硬件中
- 从捕获时刻验证真实性
- 非常适合新闻摄影和法律证据
注意： 截至 2025 年 11 月，尽管早期宣布，Z9 和 Z8 尚不支持 C2PA。'
  }
];
