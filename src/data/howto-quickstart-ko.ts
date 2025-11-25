/**
 * 한국어 HowTo 데이터 - 빠른 시작 가이드
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
  name: "C2PA 콘텐츠 검증 방법",
  description: "C2PA 도구를 사용하여 디지털 콘텐츠의 진위성과 출처를 검증하는 방법을 배웁니다. 이 가이드는 온라인 도구, 브라우저 확장 프로그램 및 명령줄 검증의 세 가지 방법을 다룹니다.",
  totalTime: "PT5M",
  steps: [
    {
      name: "Content Credentials 검증 도구 접속",
      text: "웹 브라우저를 열고 https://contentcredentials.org/verify 를 방문합니다. 이것은 C2PA 콘텐츠를 검증하기 위한 Adobe의 공식 무료 도구로, 설치나 계정 생성이 필요하지 않습니다.",
      url: "https://contentcredentials.org/verify"
    },
    {
      name: "콘텐츠 파일 업로드",
      text: "검증 페이지에 이미지, 비디오 또는 문서를 드래그 앤 드롭합니다. 지원되는 형식에는 JPEG, PNG, MP4, MOV, PDF 등이 포함됩니다. 파일은 개인 정보 보호를 위해 브라우저 내에서 로컬로 분석됩니다.",
      url: "https://c2pa.wiki/ko/getting-started/quick-start/"
    },
    {
      name: "출처 정보 확인",
      text: "표시된 출처 데이터를 확인합니다. 여기에는 제작자 신원, 편집 기록, 타임스탬프, 사용된 도구 및 서명 검증 상태가 포함됩니다. 녹색 체크 표시는 콘텐츠가 서명 이후 변조되지 않았음을 나타냅니다.",
      url: "https://c2pa.wiki/ko/getting-started/quick-start/"
    },
    {
      name: "서명 상태 확인",
      text: "서명이 '유효'로 표시되는지 확인합니다. 서명이 손상되었거나 경고가 표시되면 콘텐츠가 서명 후 수정되었거나 서명 인증서에 문제가 있을 수 있습니다. 유효한 서명은 콘텐츠의 무결성을 확인합니다.",
      url: "https://c2pa.wiki/ko/getting-started/faq/"
    }
  ]
};
