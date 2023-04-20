import React from "react";

export default function MainBanner() {
  return (
    <section className="flex items-center justify-center w-full h-screen">
      <article className="text-center">
        <h1 className="text-5xl font-extrabold mb-2">Jinsu PortFolio</h1>
        <h2 className="text-4xl font-bold">
          <span className="text-blue-500">사용자 중심</span>의 개발자
          최진수입니다.
        </h2>
        <p className="text-2xl font-semibold mt-4">
          사용자가 필요로 하는
          <span className="text-blue-500">기능과 경험</span>을 최우선으로
          고려합니다.
        </p>
      </article>
    </section>
  );
}
