# BRANDING.md — 로고·앱 이름 교체 가이드

이 템플릿의 브랜드는 전부 **플레이스홀더**입니다. 실제 프로젝트를 시작할 때
아래 체크리스트 순서대로 교체하면 됩니다. 디자인 토큰(`design/tokens.json`,
`theme.css`)은 그대로 유지됩니다.

## 1. 체크리스트

| #   | 할 일                             | 파일                                                                                                       |
| --- | --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 1   | 앱 표시 이름·버전 변경            | `src/lib/brand.ts` (`APP_NAME`, `APP_VERSION`)                                                             |
| 2   | 로고 컴포넌트 교체                | `src/components/brand/AppMark.tsx`                                                                         |
| 3   | 로고 이미지 교체                  | `design/brand/vanilla-art.png` (투명 배경 정사각 PNG)                                                      |
| 4   | 파비콘 교체                       | `public/favicon.png`                                                                                       |
| 5   | 데스크탑·모바일 아이콘 재생성     | `pnpm tauri icon design/brand/app-icon.png` (ico/icns/png/Android/iOS 한 번에 생성)                        |
| 6   | 제품명·식별자 변경                | `src-tauri/tauri.conf.json` (`productName`, `identifier`, 창 `title`)                                      |
| 7   | 패키지명 변경                     | `package.json` (`name`)                                                                                    |
| 8   | HTML 타이틀 변경                  | `index.html` (`<title>`)                                                                                   |
| 9   | 저장소 키 접두사 변경(선택)       | `wt_` → 프로젝트 접두사 (`src/lib/i18n/types.ts`, `ThemeContext.tsx`, `WorkspaceContext.tsx`, `client.ts`) |
| 10  | 프로젝트 데이터 폴더명 변경(선택) | `.app-data` (`src-tauri/src/commands/fs_commands.rs`, `client.ts`, `vite.config.ts`)                       |
| 11  | 브랜드 색 변경(선택)              | `design/tokens.json`의 `brand` → `node design/build-theme.mjs`                                             |

## 2. 로고 규격(플레이스홀더 기준)

- `vanilla-art.png`: 512×512, 투명 배경의 바닐라 난초 + 꼬투리 그림. 앱 내 로고(`<AppMark />`)로
  원본 색 그대로 표시되며 테마 색을 따르지 않습니다.
- `app-icon.png`: 1024×1024, 바닐라 크림 타일 + 그림. `pnpm tauri icon`의 입력입니다.
- `app-icon-dark.png` / `app-icon-light.png`: 그래파이트·흰 타일 변형입니다.
- `app-banner.svg`(1280×320), `app-pattern.svg`(512×512, 이음매 없이 타일링): 손그림 보태니컬
  일러스트(적갈색 잉크 선 + 살짝 어긋난 평면 색) 배너·패턴입니다.
- 최소 크기는 16px입니다.

## 3. 사용 규칙

- 브랜드 색(`--brand`)은 **로고에만** 씁니다. 상태·경고 표시에는
  시맨틱 토큰(`success`/`warning`/`destructive`/`info`)을 씁니다.
- 로고에 그라디언트·그림자·광택을 넣지 않습니다.
