import type { Metadata } from "next";
import Link from "next/link";
import styles from "./showcase.module.css";

export const metadata: Metadata = {
  title: "MCM Nomad Passport | Project Showcase",
  description: "MCM Nomad Passport frontend project case study.",
};

const contributions = [
  {
    number: "01",
    title: "Authentication",
    desc: "로그인, 회원가입, 비밀번호 찾기 화면을 구현하고 사용자 인증 흐름을 연결했습니다.",
  },
  {
    number: "02",
    title: "Shared UI",
    desc: "공통 로딩 및 에러 컴포넌트를 설계해 여러 화면에서 일관된 경험을 제공했습니다.",
  },
  {
    number: "03",
    title: "State Recovery",
    desc: "서버에서 무효화된 여정 ID를 정리하고 사용자가 스캔 화면에서 다시 시작할 수 있도록 처리했습니다.",
  },
  {
    number: "04",
    title: "Accessibility & Tests",
    desc: "아이콘 UI의 접근성을 보완하고 오류 및 상태 복구 동작을 테스트했습니다.",
  },
];
const stack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
  "TanStack Query",
  "Zustand",
  "Vitest",
];

export default function ShowcasePage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/showcase" className={styles.logo}>
          MCM <span>✦</span> NOMAD
        </Link>
        <div>
          <a href="#about">ABOUT</a>
          <a href="#contribution">MY ROLE</a>
          <a href="#demo">DEMO</a>
        </div>
      </nav>
      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          HER-STORY / FRONTEND CASE STUDY / 2026
        </div>
        <h1>
          Travel beyond
          <br />
          <em>the ordinary.</em>
        </h1>
        <p>
          여행의 시작부터 귀국 후까지.
          <br />
          공항 여정을 하나의 자연스러운 경험으로 연결하는 웹 서비스.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#demo">
            Explore project ↗
          </a>
          <a
            className={styles.secondary}
            href="https://github.com/hwkong7/mcm-nomad-frontend"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub ↗
          </a>
        </div>
        <div className={styles.heroBottom}>
          <span>01 — PROJECT OVERVIEW</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>
      <section id="about" className={styles.section}>
        <div className={styles.sectionLabel}>01 / OVERVIEW</div>
        <div className={styles.twoCol}>
          <h2>
            A seamless journey,
            <br />
            <i>thoughtfully built.</i>
          </h2>
          <div>
            <p>
              출국 전 준비, 공항 내 서비스, 귀국 후 경험을 아우르는 여정 중심 웹
              애플리케이션입니다.
            </p>
            <p>
              5인 팀 프로젝트에서 인증 화면, 공통 UX 컴포넌트, 오류 대응과 상태
              복구를 중심으로 프론트엔드 개발에 참여했습니다.
            </p>
          </div>
        </div>
        <div className={styles.pills}>
          {stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </section>
      <section
        id="contribution"
        className={`${styles.section} ${styles.tinted}`}
      >
        <div className={styles.sectionLabel}>02 / MY CONTRIBUTIONS</div>
        <h2>
          What I <i>built.</i>
        </h2>
        <div className={styles.cards}>
          {contributions.map((c) => (
            <article key={c.number} className={styles.card}>
              <span>{c.number} /</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="demo" className={styles.section}>
        <div className={styles.sectionLabel}>03 / PRODUCT WALKTHROUGH</div>
        <div className={styles.twoCol}>
          <h2>
            See it <i>in action.</i>
          </h2>
          <p>
            저장소에 포함된 실제 여정 등록 및 복구 GIF입니다. 전체 시연 영상은
            공개 링크가 준비되면 이 영역에 추가할 수 있습니다.
          </p>
        </div>
        <div className={styles.demo}>
          <iframe
            src="https://www.youtube.com/embed/BJ0BpAu07PA"
            title="MCM Nomad Passport 시연 영상"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              width: "100%",
              maxWidth: "900px",
              aspectRatio: "16 / 9",
              border: 0,
              borderRadius: "12px",
            }}
          />
        </div>
        <div className={styles.demoFoot}>
          <span>BOARDING PASS SCAN / STATE RECOVERY</span>
          <a
            href="https://github.com/hwkong7/mcm-nomad-frontend"
            target="_blank"
            rel="noreferrer"
          >
            Explore source ↗
          </a>
        </div>
      </section>
      <section className={`${styles.section} ${styles.closing}`}>
        <div className={styles.sectionLabel}>04 / LET'S CONNECT</div>
        <h2>
          Details make
          <br />
          <i>the difference.</i>
        </h2>
        <p>
          사용자의 흐름과 예외 상황까지 고려하는 프론트엔드 개발을 지향합니다.
        </p>
        <a
          className={styles.primary}
          href="https://hwkong7-portfolio.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          View my portfolio ↗
        </a>
      </section>
      <footer className={styles.footer}>
        <span>MCM NOMAD PASSPORT · PROJECT SHOWCASE</span>
        <span>FRONTEND BY HYE WON</span>
      </footer>
    </main>
  );
}
