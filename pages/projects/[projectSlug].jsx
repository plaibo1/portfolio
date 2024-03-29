import React from "react";
import * as contentful from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";
import {
  PrimaryButton,
  ProjectLinkButton,
} from "../../components/Buttons/Buttons";

import { BsDoorOpen } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "portfolio",
  });

  const paths = res.items.map((item) => {
    return {
      params: { projectSlug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "portfolio",
    "fields.slug": params.projectSlug,
  });

  return {
    props: {
      project: items[0],
    },
  };
}

const Slug = ({ project }) => {
  const {
    description,
    projectImg,
    title,
    github,
    techs,
    projectUrl,
    aboutSmall,
    videos,
  } = project.fields;

  return (
    <div>
      <Head>
        <title>{title} | Projects Ilya Lyskov</title>
        <meta
          name="description"
          content="Web-dev junior react developer portfolio"
        />
        <link rel="icon" href="/fav.ico" />
      </Head>

      <header
        className="w-full relative overflow-hidden 
        lg:h-screen lg:flex lg:items-center lg:justify-center
        xl:h-auto"
      >
        <div
          className="container py-[100px] sm:py-[120px] lg:py-[200px] px-4 
        max-w-7xl mx-auto relative 
        flex flex-col lg:flex-row items-center"
        >
          {/* cubes bg */}
          <div className="cubesBg">
            <div className="cubesBg__innerGradient"></div>
            <div className="cubesBg__innerCubes"></div>
          </div>

          <div className="cubesBg right">
            <div className="cubesBg__innerGradient"></div>
            <div className="cubesBg__innerCubes"></div>
          </div>

          {/* text content */}
          <div className="mb-12 md:text-center lg:text-left lg:mb-0 lg:w-[35%] xl:w-[45%]">
            <h1
              className="border-baseColor border-4 rounded-2xl 
              text-baseColor font-mono font-bold inline-flex px-6"
            >
              {title}
            </h1>

            <h2 className="text-5xl lg:text-6xl font-black mb-6 mt-5">
              {aboutSmall}
            </h2>

            <div className="mb-6 md:mb-10 md:flex md:flex-col md:items-center lg:block">
              <span className="font-semibold mb-3 text-base flex">
                Used technologies:
              </span>
              <ol className="flex flex-wrap relative lg:w-[90%]">
                {techs.map((tech) => {
                  return (
                    <li
                      key={tech}
                      className="py-1 px-4 border-2 rounded-full mr-1 mb-2 text-sm bg-white"
                    >
                      {tech}
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="flex items-center">
              <ProjectLinkButton linkTo={projectUrl} />

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-7 w-9 h-9 bg-slate-800 text-white rounded-xl flex justify-center items-center text-xl"
                >
                  <FiGithub />
                </a>
              )}
            </div>
          </div>

          {/* video content */}
          <div className="relative ml-auto lg:w-[59%] xl:w-[65%]">
            <div className="w-full relative lineBg rounded-xl border-4 border-slate-700">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="translate-x-3 translate-y-3 rounded-xl border-4 border-slate-700"
              >
                {videos.map((video) => {
                  return (
                    <source
                      key={video.sys.id}
                      src={`https:${video.fields.file.url}`}
                      type={video.fields.file.contentType}
                    />
                  );
                })}

                <img
                  src={`https:${projectImg.fields.file.url}`}
                  alt="img"
                  className="w-full"
                />
              </video>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-[50px] pb-[100px] md:pb-[50px] px-4 max-w-7xl mx-auto relative ">
        <span className="text-4xl sm:text-5xl font-bold mb-7 block">
          About project:
        </span>

        <div className="prose-base md:prose-xl lg:prose-2xl prose-h3:font-sans proseCustom font-mono mb-12">
          {documentToReactComponents(description)}
        </div>

        <div
          className="w-[90%] md:w-[400px] fixed bottom-10 left-1/2 -translate-x-[50%] 
          md:relative md:translate-x-0 md:left-0 md:bottom-auto"
        >
          <PrimaryButton
            linkTo={"/"}
            text={"Back to projects"}
            icon={<BsDoorOpen />}
          />
        </div>
      </div>
    </div>
  );
};

export default Slug;
