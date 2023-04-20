import React from "react";
import { h1TitleStyle } from "@/styles/styles";
import ReactHtmlParser from "react-html-parser";

const links = [
  { title: "아시아 3D에셋 플렛폼 Merror", link: "https://me-rror.com/" },
  {
    title: "Merror 관련 기사",
    link: "https://www.newswire.co.kr/newsRead.php?no=957813",
  },
];

const highlight = "text-red-500 font-bold";
const results = [
  {
    title: "버그 식별 및 개선을 통한 사용자 경험 향상",
    descriptions: [
      `제품 필터 오작동 버그를 해결하기 위해, 컴포넌트 간 <span class='${highlight}'>상태 공유</span> 서비스를 구현하여, 상태 관리의 일관성을 유지하여 버그 해결`,
      `제품 카드와 모달에서의 좋아요와 장바구니 기능 <span class='${highlight}'>동기화 </span>오류를 식별하고, 해결하여 웹 애플리케이션의 사용자 경험을 향상`,
      `입력 태그의 글자수를 제한하는 기능을 구현하여 데이터베이스 <span class='${highlight}'>오버플로우 버그</span> 해결하여 사용자 경험 향상과 안정성 강화`,
    ],
  },
  {
    title: "코드 리펙토링 비동기 코드 성능 향상",
    descriptions: [
      `기존에 여러 비동기 코드를 각각 await로 처리하였지만, Promise.all을 활용하여 병렬로 처리하여 <span class='${highlight}'>40%성능 향상</span>`,
    ],
  },
  {
    title: "SSL인증서 유효기간 알림 어플리케이션 개발",
    descriptions: [
      "자사에서 운영하는 도메인의 SSL 인증서 유효기간을 조회하고, 유효 기간을 메일로 알려주는 어플리케이션 개발",
    ],
  },
  {
    title: "문서 작업",
    descriptions: [
      "Use Case 다이어그램 작성",
      "E2E Test case 작성",
      "FAQ, 이용약관 markdown 변환",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="py-40">
      <h1 className={h1TitleStyle}>Work Experience</h1>
      <div className="border-2 border-black rounded-lg p-6">
        <h2 className="text-4xl font-extrabold mb-1">
          <a
            className="border-b-2 border-black hover:text-blue-500 hover:border-blue-500"
            href="https://vrillar.com/"
            target="_blank"
          >
            VrillAr
          </a>
        </h2>
        <p className="text-2xl font-bold">Front end / 인턴</p>
        <p className="text-neutral-500">기간 : 2022.07 ~ 2022.12</p>
        <h2 className="text-2xl font-bold mt-4 mb-2">업무 성과</h2>
        <ul>
          {results.map((result) => (
            <li key={result.title} className="mb-4">
              <span className="font-bold text-lg border-b-2 border-blue-500">
                {result.title}
              </span>
              {result.descriptions.map((des, index) => (
                <p key={index}>- {ReactHtmlParser(des)}</p>
              ))}
            </li>
          ))}
        </ul>
        <h3 className="text-2xl font-bold my-4">관련 링크</h3>
        <ul>
          {links.map(({ title, link }) => (
            <li className="mb-4" key={link}>
              <a
                className="bg-blue-400 rounded-md py-2 px-4 text-white font-semibold"
                href={link}
                target="_blank"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
