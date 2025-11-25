/**
 * HowTo data for Schema.org HowTo structured data
 * Language: 한국어
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
  name: 'C2PA 콘텐츠 확인 방법',
  description: '단 5분 만에 C2PA 도구를 사용하여 디지털 콘텐츠의 진위성과 출처를 확인하는 방법을 배웁니다.',
  totalTime: 'PT5M',
  steps: [
    {
      name: 'Visit Content Credentials Verify',
      text: 'Open your web browser and navigate to https://contentcredentials.org/verify to access the official C2PA verification tool.',
      url: 'https://contentcredentials.org/verify'
    },
    {
      name: 'Upload your media file',
      text: 'Drag and drop your image, video, or document onto the verification page, or click to browse and select the file from your device.'
    },
    {
      name: 'Review provenance information',
      text: 'Examine the displayed information including creator identity, creation date, editing history, and signature validation status.'
    },
    {
      name: 'Verify signature status',
      text: 'Check that the signature shows as Valid with a green checkmark, confirming the content has not been tampered with since signing.'
    }
  ]
};
