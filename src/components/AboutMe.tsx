import React from "react";
import { h1TitleStyle } from "@/styles/styles";

export default function AboutMe() {
  return (
    <article className="w-full max-w-screen-lg mx-auto h-full">
      <h1 className={h1TitleStyle}>About Me</h1>
      <div className="w-full font-bold text-lg">
        <p className="break-keep">
          React와 Next.js를 활용하여 다양한 웹사이트를 개발한 경험이 있으며, UI
          디자인 경험과 함께 웹사이트 개발 경험을 가진 프론트엔드 개발자입니다.
          최신 기술과 트렌드를 주시하며 지속적인 발전에 노력하고 있습니다.
          협업과 코드 리뷰 경험을 바탕으로, 효율적인 업무 수행이 가능합니다.
          또한, SEO와 웹 접근성을 중요하게 여겨 사용자 경험을 향상시키는 코드를
          작성하려고 늘 노력합니다.
        </p>
      </div>
    </article>
  );
}
