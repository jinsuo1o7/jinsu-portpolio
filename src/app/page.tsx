import AboutMe from "@/components/AboutMe";
import WorkExperience from "@/components/WorkExperience";
import ProjectList from "@/components/ProjectList";
import MainBanner from "@/components/MainBanner";

export default function Home() {
  return (
    <>
      <MainBanner />
      <section>
        <article className="w-full max-w-screen-lg mx-auto h-full">
          <AboutMe />
          <WorkExperience />
          <ProjectList />
        </article>
      </section>
    </>
  );
}
