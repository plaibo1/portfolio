import Head from "next/head";
import { ResumeBlock, ResumeTitle, ResumeNav } from "../components/Resume";
import { EMAIL_LINK } from "../consts/consts";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Ilya Lyskov — CV</title>
        <meta name="description" content="Ilya Lyskov - web developer cv" />
        <link rel="icon" href="/fav.ico" />
      </Head>

      <ResumeNav />

      <div className="w-full min-h-screen mainGradient px-8 ">
        <div className="max-w-5xl mx-auto relative pt-[100px] pb-[20px]">
          {/* Details */}
          <div className="flex flex-col md:flex-row mb-16">
            <h2 className="text-base font-semibold text-slate-400 w-[150px] mb-5 md:mb-0">
              Инфо
            </h2>

            <div>
              <div className="text-slate-500 font-semibold">
                Ростов-на-Дону, Россия <br />
                <span>{EMAIL_LINK}</span>
              </div>
              <div className="mt-7">
                <h1 className="text-4xl font-bold text-slate-800 mb-4 flex">
                  Илья Лысков, Front-end Developer
                </h1>

                <p className="text-xl">
                  <span className="block">
                    <a
                      href="https://t.me/playbo1"
                      target="_blank"
                      className="underline"
                      rel="noreferrer"
                    >
                      Telegram
                    </a>{" "}
                    - Лучший способ, чтобы связаться со мной
                  </span>
                  <span className="block">
                    <a
                      href="https://ilya-lyskov-portfolio.vercel.app/"
                      target="_blank"
                      className="underline"
                      rel="noreferrer"
                    >
                      Portfolio
                    </a>{" "}
                    - Мои проекты
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* /Details */}

          {/* Exp */}
          <ResumeBlock title={"Опыт"}>
            <ResumeTitle>
              <a
                target="_blank"
                href="https://www.zuzex.com/ru"
                rel="noreferrer"
              >
                Zuzex
              </a>
            </ResumeTitle>

            <div className="text-base text-slate-500 mb-4">
              09.22 – н.в. (1г. 6мес.)
            </div>

            <div className="mb-10">
              <div className="mb-2">
                Принимал активное участие в более чем 5 проектах в рамках
                компании, в том числе с ключевым клиентом — крупным банком. Был
                назначен ответственным за этот проект под руководством тимлида
                нашей организации. В рамках этой роли принимал решения о выборе
                стека технологий для проекта, а также активно участвовал в
                обсуждениях с аналитиками и менеджерами по продукту, где
                обсуждались особенности и функциональные возможности проекта.
              </div>

              <div className="mb-2">Еще проекты: </div>

              <div className="mb-2">
                <span className="font-bold mb-2">Веб-радио:</span>
                <ul className="pl-7 text-sm list-disc">
                  <li>
                    Интеграция WebSocket для синхронизации информации о
                    проигрываемых треках, рекламе и новостях.
                  </li>
                  <li>Разработка чата.</li>
                  <li>Написание кастомных компонентов и хуков.</li>
                </ul>
              </div>

              <div className="mb-2">
                <span className="font-bold mb-2">
                  Реализация чата (ChatGPT для заказчика):
                </span>
                <ul className="pl-7 text-sm list-disc">
                  <li>кастомный UI kit tailwnd</li>
                  <li>WebSocket</li>
                  <li>RTK</li>
                </ul>
              </div>

              <div className="mb-2">
                <span className="font-bold mb-2">Много работал с next.js:</span>
                <ul className="pl-7 text-sm list-disc">
                  <li>Переезд с React 16 на 18</li>
                  <li>
                    Создание форм с длинными сценариями валидации вводимых
                    данных.
                  </li>
                  <li>
                    Реализация универсальных компонентов для отображения списков
                    с функциями пагинации, фильтрации, сортировки и тд.
                  </li>
                </ul>
              </div>

              <div className="mb-2">
                <span className="font-bold mb-2">
                  Так же много работал с Next.js:
                </span>
                <ul className="pl-7 text-sm list-disc">
                  <li>Выбор статегии рендера (SSR, SSG, ISR)</li>
                  <li>
                    Лендинг для мобильного приложения с функцией авторизации и
                    оплаты подписки
                  </li>
                  <li>Jamstack (custom strapi, contentful)</li>
                  <li>Web hooks</li>
                </ul>
              </div>
            </div>
          </ResumeBlock>
          {/* /Exp */}

          {/* Skills */}
          <ResumeBlock title={"Навыки"}>
            <div className="flex justify-between w-[300px] font-semibold text-slate-800">
              <ol>
                <li>HTML &amp; CSS</li>
                <li>Sass/Scss</li>
                <li>JavaScript</li>
                <li>Git</li>
              </ol>
              <ol>
                <li>React</li>
                <li>Redux</li>
                <li>Antd/Tailwind</li>
                <li>Next.js</li>
              </ol>
            </div>
          </ResumeBlock>
          {/* /Skills */}

          {/* Education */}
          <ResumeBlock title={"Образование"}>
            <ResumeTitle>
              Информационные системы и технологии, Бакалавр, Донской
              государственный технический университет, г. Ростов-на-Дону
            </ResumeTitle>

            <div className="text-base text-slate-500">09.18 – 07.22</div>
          </ResumeBlock>
          {/* /Education */}
        </div>
      </div>
    </div>
  );
}
