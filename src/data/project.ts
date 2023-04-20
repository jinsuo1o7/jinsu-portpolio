export type Project = {
  title: string;
  description: string;
  link: string;
  skills: { title: string; description: string }[];
  repository: string;
};
const highlight = "text-red-500 font-bold";
export const projects: Project[] = [
  {
    title: "Focus Frame",
    link: "https://focus-frame.vercel.app/",
    description: `새롭게 출시한 Next.js 13을 학습하고 활용하여 이미지 업로드 SNS 사이트를 구현하였습니다. <br/>
    Next.js의 강점인 <span class="${highlight}">SEO 최적화, 간편한 라우팅 </span>기능과 서버 클라이언트 컴포넌트의 장점을 활용하여<br/>
    <span class="${highlight}">SSG, SSR, CSR</span> 렌더링 방식을 학습하고 활용해 보았습니다.`,
    skills: [
      {
        title: "NextJs",
        description:
          "NextJs 13을 활용하여 SEO 최적화, 상황에 따른 서버&클라이언트 컴포넌트의 장점을 활용하여 초기 로딩속도 향상",
      },
      {
        title: "SWR",
        description:
          "stale에서 데이터를 반환하고, fetch요청을 통해 재검증을 한 뒤, 최신화된 데이터를 가져오는 전략을 통해 빠르고 재사용 가능한 데이터 fetch, 캐시를 통한 성능 향상",
      },
      {
        title: "Vercel",
        description:
          "내장된 CI/CD를 활용하여 편리하고 강력한 어플리케이션 배포",
      },
      {
        title: "OAuth",
        description: "next-auth를 활용한 oauth 로그인 구현",
      },
      {
        title: "Sanity",
        description:
          "Headless CMS 콘텐츠를 저장하고 관리하는 클라우드 저장소를 활용하여 스키마 정의, 데이터 생성, 수정 관리",
      },
      {
        title: "Tailwind",
        description:
          "사전에 정의된 클래스를 사용하여 일관된 디자인 시스템 구축, 반응형 디자인 구현",
      },
    ],
    repository: "https://github.com/jinsuo1o7/focus-frame",
  },
  {
    title: "Blog",
    link: "https://blog-project-xi-taupe.vercel.app/",
    description: `Next.js 13을 활용한 개인 블로그 프로젝트<br/>
    마크다운으로 저장된 블로그 포스트 글을 react-markdown 라이브러리를 활용하여 정적 html로 변환한 뒤, <br/>
    <span class="${highlight}">서버 컴포넌트의 SSG</span>를 활용함으로써 초기에 정적 페이지를 제작하고 로딩 속도를 단축했습니다.
    `,
    skills: [
      {
        title: "NextJs",
        description:
          "NextJs 13을 활용하여 SEO 최적화, 상황에 따른 서버&클라이언트 컴포넌트의 장점을 활용하여 초기 로딩속도 향상",
      },
      {
        title: "Node mailer",
        description: "node mailer 라이브러리를 활용한 메일 발송 기능 구현",
      },
      {
        title: "Vercel",
        description:
          "내장된 CI/CD를 활용하여 편리하고 강력한 어플리케이션 배포",
      },
      {
        title: "React-markdown",
        description:
          "마크다운 파일을 정적 html로 변환하여 SSG 렌더링을 수행할 수 있도록 함",
      },
      {
        title: "Tailwind",
        description:
          "사전에 정의된 클래스를 사용하여 일관된 디자인 시스템 구축",
      },
    ],
    repository: "https://github.com/jinsuo1o7/blog-project",
  },
  {
    title: "Youtube Clone",
    link: "https://visionary-kitten-c5e8f1.netlify.app/",
    description: `React 라이브러리를 학습하고 <span class="${highlight}">SPA의 강점</span>을 활용한 <span class="${highlight}">Youtube API</span>를 이용한 유튜브 클론코딩 프로젝트<br/>
      SPA의 장점인 빠른 페이지 로딩 속도와 React Router를 통한 페이지 이동, React Query를 활용한 데이터 호출 및 관리를 수행하였습니다.`,
    skills: [
      {
        title: "React",
        description:
          "컴포넌트 단위로 재사용이 가능하고 유지 보수가 용이한 React 라이브러리를 활용하여 사용자 인터페이스를 구현",
      },
      {
        title: "React Router",
        description:
          "URL경로에 따른 React컴포넌트 렌더링 수행하는 라이브러를 사용하여 동적 URL, 리다이렉트 기능 활용",
      },
      {
        title: "React Query",
        description:
          "서버로부터 데이터를 가져오는 API 요청을 캐싱하고, 미리 가져와서 사용 가능한 데이터를 유지하며, 오래된 데이터를 자동으로 지우는 등의 다양한 기능을 활용",
      },
      {
        title: "Netlify",
        description:
          "웹 사이트 빌드 및 배포 프로세스 자동화 CI/CD 기능을 활용하여 편리한 배포",
      },
      {
        title: "Google Youtube API",
        description:
          "YouTube API key를 사용하여 Youtube 동영상 검색, 채널, 동영상, 설명 데이터를 활용",
      },
      {
        title: "Postman",
        description: "REST API 테스트 도구를 활용하여 Youtube API 테스트",
      },
    ],
    repository: "https://github.com/jinsuo1o7/youtube-clone-front",
  },
];
