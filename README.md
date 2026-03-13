# Choice

취향 기반으로 입문자에게 어울리는 술을 추천해주는 Next.js 웹 애플리케이션입니다.  
홈에서 술을 둘러보고, 추천 테스트를 진행한 뒤, 결과를 확인하고 즐겨찾기에 저장할 수 있습니다.

## 주요 기능

- 홈 화면에서 오늘의 추천 술과 입문자 추천 목록 확인
- 추천 테스트를 통한 취향 기반 술 추천
- 술 목록 및 상세 페이지 탐색
- 관심 있는 술 즐겨찾기 저장
- 정적 데이터 기반 빠른 프로토타이핑

## 기술 스택

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `shadcn/ui`
- `Zustand`

## 시작하기

### 요구 사항

- `Node.js 20+`
- `npm`

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속합니다.

### 프로덕션 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm run start
```

### 정적 검사

```bash
npm run lint
```

## 라우트

- `/` : 홈
- `/drinks` : 술 목록
- `/drinks/[id]` : 술 상세
- `/favorites` : 즐겨찾기
- `/recommend` : 추천 테스트
- `/recommend/result` : 추천 결과

## 프로젝트 구조

```text
src
├── app             # App Router 라우트
├── components      # 공통 컴포넌트 및 UI 컴포넌트
├── data            # 술 데이터, 질문 데이터
├── features        # 화면 단위 기능 모음
├── lib             # 추천 로직, 유틸 함수
├── stores          # Zustand 상태 저장소
└── types           # 공통 타입 정의
```

## 데이터와 상태 관리

- 추천 대상 술 데이터는 `src/data/drinks.ts`에 정의되어 있습니다.
- 추천 질문 데이터는 `src/data/questions.ts`에 정의되어 있습니다.
- 추천 테스트 답변 상태는 `src/stores/recommendation-store.ts`에서 관리합니다.
- 즐겨찾기 상태는 `src/stores/favorite-store.ts`에서 관리합니다.
- 현재는 별도의 API나 데이터베이스 없이 정적 데이터로 동작합니다.

## 환경 변수

현재 필수 환경 변수는 없습니다.

추후 외부 API, 이미지 CDN, 분석 도구를 연동할 경우 `.env.local` 파일을 추가해 관리하는 것을 권장합니다.

## 현재 상태

- `npm run lint` 확인 완료
- `npm run build` 확인 완료

## 알려진 제한 사항

- 자동화 테스트 코드가 아직 없습니다.
- 일부 술 데이터는 이미지 경로를 포함하고 있지만 실제 이미지 파일은 아직 추가되지 않았습니다.
- 추천 로직은 현재 정적 규칙 기반이며, 사용자 피드백이나 실시간 데이터는 반영하지 않습니다.

## 개선 아이디어

- 실제 상품 이미지 및 상세 메타데이터 추가
- 테스트 코드 도입
- 로컬 스토리지 기반 즐겨찾기 영속화
- 필터/정렬 기능 확장
- 백엔드 또는 CMS 연동
