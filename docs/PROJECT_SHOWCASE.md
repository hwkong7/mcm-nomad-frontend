<div align="center">

# ✈️ MCM NOMAD PASSPORT
### From departure to return, a connected travel experience

**HER-STORY · Frontend Project**

`Next.js` `React` `TypeScript` `Tailwind CSS` `TanStack Query` `Zustand`

[**✦ Project Showcase**](./app/showcase/page.tsx) · [**Portfolio**](https://hwkong7-portfolio.vercel.app/) · [**Demo GIF**](./docs/demo-scan.gif)

</div>

---

## ✦ At a Glance

공항 여정의 **출국 전 → 공항 내 → 귀국 후** 흐름을 하나의 웹 경험으로 연결하는 프로젝트입니다.

<p align="center">
  <img src="./docs/demo-scan.gif" width="360" alt="탑승권 스캔과 여정 복구 시연" />
</p>

> 위 이미지는 저장소에 기존부터 포함된 실제 동작 GIF입니다. 

## 🎬 프로젝트 시연 영상

[![MCM Nomad Passport 시연 영상](https://img.youtube.com/vi/BJ0BpAu07PA/hqdefault.jpg)](https://youtu.be/BJ0BpAu07PA)

> 이미지를 클릭하면 YouTube에서 전체 시연 영상을 볼 수 있습니다.

**🎬 Full demo:** [YouTube 시연 영상 보기](https://youtu.be/BJ0BpAu07PA)
**🌐 Showcase:** 배포 후 `https://<your-domain>/showcase` 주소로 교체

## ✦ My Contributions

| Area | Implementation |
|---|---|
| Authentication | 로그인, 회원가입, 비밀번호 찾기 화면 |
| Shared UX | `WakingScreen`, `ErrorState` 공통 컴포넌트 |
| Resilience | `useClearStaleJourney` 훅으로 무효 여정 상태 복구 |
| Accessibility | 아이콘 버튼과 하단 네비게이션에 `aria-label` 적용 |
| Testing | 인증 오류 문구 및 여정 복구 로직 테스트 |

> 4인 팀 프로젝트. 위 내용은 기존 저장소 README의 기여 내역을 기준으로 정리했습니다.

## ✦ Architecture

`app/` 라우팅 → `features/` 도메인 UI → `hooks/` 서버 상태 → `api/` API 통신  
공통 UI는 `components/`, 전역 상태는 `store/`, 라우트 상수는 `constants/routes.ts`에서 관리합니다.

## ✦ Run Locally

```bash
npm install
# .env.local에 NEXT_PUBLIC_API_BASE_URL 설정
npm run dev
```

자세한 프로젝트 실행·테스트 정보는 기존 개발 문서를 참고하세요.

## ✦ Technical Highlights

- **오류 경험 설계:** 네트워크 오류와 서버 오류를 구분해 사용자에게 적절한 안내 제공
- **상태 복구:** 서버에서 삭제된 여정 ID가 로컬에 남아도 초기 스캔 화면으로 안전하게 복귀
- **재사용성:** 공통 로딩·오류 UI를 여러 화면에서 활용

---

<div align="center">
<sub>Designed to make complex journeys feel effortless.</sub>
</div>
