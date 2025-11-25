/**
 * FAQ data for Schema.org FAQPage structured data
 * Language: 한국어
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
    question: 'C2PA란 무엇인가요?',
    answer: '간단한 답변: C2PA는 암호화 서명된 메타데이터를 통해 디지털 콘텐츠의 출처와 편집 기록을 검증하기 위한 개방형 표준입니다.
세부 사항: Coalition for Content Provenance and Authenticity(C2PA)는 이미지, 비디오, 오디오 및 문서에 변조 방지 출처 정보를 포함하기 위한 기술 규격을 제공합니다. 2021년 Adobe의 Content Authenticity Initiative와 Microsoft/BBC의 Project Origin이 합병하여 형성되었습니다.'
  },
  {
    question: '작동 방식',
    answer: '간단한 답변: C2PA는 생성, 편집 및 저작권에 대한 정보가 포함된 암호화 서명된 "매니페스트(manifest)"를 미디어 파일에 포함합니다. 변조가 발생하면 서명이 깨집니다.
기술적 흐름:
1. 콘텐츠 생성 → 메타데이터와 함께 매니페스트 생성
2. 개인 키로 매니페스트 서명(HTTPS 인증서와 같음)
3. 파일에 매니페스트 포함
4. 콘텐츠 편집 → 이전 매니페스트가 "재료(ingredient)"가 됨
5. 이전 매니페스트를 참조하는 새 매니페스트 생성
6. 출처 체인 보존
7. 누구나 서명을 검증하고 변조를 탐지할 수 있음'
  },
  {
    question: 'C2PA는 어떤 문제를 해결하나요?',
    answer: 'C2PA가 해결하는 문제:
- 잘못된 정보: 뉴스 사진/비디오가 조작되지 않았는지 검증
- AI 콘텐츠 투명성: AI 생성 또는 AI 수정 콘텐츠 식별
- 딥페이크: 실제 영상의 진위성 증명
- 귀속: 원본 크리에이터에게 크레딧 제공
- 저작권: 소유권 및 라이선스 증명
- 신뢰 침식: 디지털 미디어에 대한 신뢰 회복'
  },
  {
    question: 'C2PA는 워터마킹과 동일한가요?',
    answer: '아니요. 주요 차이점:

C2PA는 존재할 때의 투명성에 중점을 두고, 워터마크는 공격받을 때의 지속성에 중점을 둡니다.'
  },
  {
    question: 'C2PA를 제거할 수 있나요?',
    answer: '간단한 답변: 예, C2PA는 메타데이터를 제거하거나, 스크린샷을 찍거나, 재인코딩하여 제거할 수 있습니다. 이것은 설계상 그렇습니다.
왜 허용 가능한가:
- C2PA는 제거를 방지하는 것이 아니라 존재할 때 진위성을 증명합니다
- C2PA의 부재 자체가 정보를 제공합니다(변조 가능성)
- 목표는 DRM이 아닌 투명성입니다
- 플랫폼은 출처가 없는 콘텐츠에 플래그를 지정할 수 있습니다
비유: 약병의 봉인과 같습니다 - 깨기는 쉽지만 열렸는지 알 수 있습니다.'
  },
  {
    question: 'C2PA는 블록체인을 사용하나요?',
    answer: '아니요. C2PA는 HTTPS/SSL 인증서와 동일한 기술인 전통적인 PKI(Public Key Infrastructure)를 사용합니다.
주요 사항:
- X.509 인증서 및 디지털 서명 사용
- 암호화폐, 토큰 또는 거래 수수료 없음
- 오프라인 작동(검증에 인터넷 필요 없음)
- 블록체인보다 훨씬 빠르고 간단함
- 선택 사항: 일부 구현은 보완으로 블록체인 타임스탬프를 추가합니다'
  },
  {
    question: 'C2PA는 어떤 파일 형식을 지원하나요?',
    answer: '현재 지원:
- 이미지: JPEG, PNG, WebP, AVIF, HEIC/HEIF, TIFF, DNG, SVG, GIF
- 비디오: MP4, MOV, AVI
- 오디오: WAV, MP3, M4A
- 문서: PDF
개발 중: WebM, 추가 형식'
  },
  {
    question: 'C2PA 콘텐츠를 어떻게 검증하나요?',
    answer: '가장 쉬운 방법:
- https://contentcredentials.org/verify 방문
- 파일 업로드
- 출처 정보 보기
명령줄:

브라우저: Content Credentials 확장 프로그램 설치(Chrome/Edge)
프로그래밍 방식: C2PA SDK 사용(Rust, JS, Python, Go)'
  },
  {
    question: '콘텐츠에 C2PA를 어떻게 추가하나요?',
    answer: '소프트웨어 사용:
- Adobe Photoshop/Lightroom(내장)
- 카메라: Nikon Z9/Z8, Leica M11-P, Sony Alpha 시리즈
- 명령줄: c2patool(문서 참조)
요구 사항:
- 신뢰할 수 있는 CA의 인증서(DigiCert, GlobalSign 등)
- 또는 테스트용 자체 서명 인증서
참조: 단계별 지침은 빠른 시작 가이드를 확인하세요'
  },
  {
    question: 'Nikon C2PA란 무엇인가요?',
    answer: '간단한 답변: Nikon은 카메라용 C2PA 지원을 개발하고 있습니다. Z6 III는 2025년에 C2PA 펌웨어를 받을 예정이며, 카메라 내에서 출처 메타데이터로 사진에 서명할 수 있습니다.
기능(사용 가능 시):
- 카메라 내 서명(후처리 불필요)
- 카메라 모델, 일련번호, 설정, GPS 기록
- 보안 하드웨어에 저장된 개인 키
- 촬영 순간부터 진위성 검증
- 사진 저널리즘 및 법적 증거에 이상적
참고: 2025년 11월 현재, Z9 및 Z8는 이전 발표에도 불구하고 아직 C2PA를 지원하지 않습니다.'
  }
];
