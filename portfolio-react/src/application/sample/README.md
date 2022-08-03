# 개발자노트

## 프로젝트 구조의 중요성
- 실무자가 코드를 빠르게 파악하기 위함
- 데이터 처리부와 UI 처리부를 분리하여 작업하기 위함

## 프론트엔드 개발 문화
1. 프로젝트 구조 정립
  - 초기 설계 OR MVC OR Hook OR 다른 의견 등등
  - 실제 프론트엔드 업무를 진행하는 실무자의 의견을 모아 현재 제시된 구조를 디벨롭 시켜 나가야 한다.

2. 프론트엔드 네이밍 규칙
  - 폴더명 및 파일명, 변수명 등등 '통일성' 을 부여하기 위함
    - sample, Sample, etc.
    - jsx 및 CSS 파일명은 통일하여 작성한다. ex. index.jsx, index.module.css
    - page 및 component 의 내부 구조는 폴더 + 내부의 index 파일로 구성된다.

3. git commit 메시지 방식 및 브랜치 관리
  - 서버/관리자/서비스가 통합되어있는 프로젝트는 구분이 필요하다.
    - ex. [서버] [관리자] [서비스] 로 prefix 작성
  - 커밋 유형을 지정하여 커밋 메시지 작성
    - ex. NEW(신규기능), EDIT(기능수정), FIX(오류수정), REFACTOR(리팩토링), DOC(문서작성/수정), ETC(그 외)
  - 작성 예시
    - [서버] FIX : 댓글 쿼리 수정
    - [관리자] NEW : board 초기 세팅
    - [관리자] EDIT : board 앱 링크 처리 수정
    - [서비스] REFACTOR : comment 폴더 구조 개선
  - master 브랜치로만 관리 VS 개별 브랜치 생성 후, PR 진행
    - master가 짱이다!
      - 바쁘다 바빠 현대사회에 브랜치를 분리하여 개발을 진행하면, 시간이 너무 많이 빼앗긴다.
      - PR 날리고, 리뷰 받으면 딜레이가 많이 걸리니 난 못하겠다.
    - PR도 사용하자!
      - 초기 구성 세팅은 함께 리뷰하며, 프론트엔드의 '통일성'을 맞춰가자.
      - 내가 짠 코드가 매우 부끄럽지만 개선하고 싶으니.. 조금만 시간을 내어주세요!
    - 실무자가 필요성에 따라 선택하여 진행하자!


## Hook 적용한 프로젝트 구조
- Hook을 이용하여 기존 Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React 의 기능을 사용

  ## component
      - UI를 구성하는 컴포넌트 파일
      - jsx 및 css 파일을 같은 폴더에 생성
      - 폴더명은 해당 기능을 파악할 수 있도록 세팅
        - ex. SampleItem, etc.
        - 폴더 내부에 index.jsx 및 index.module.css 파일로 구성
      - 사전에 정의된 hook을 import 하여 비즈니스 로직을 적용

  ## module
  #### hooks
      - component 및 page에서 수행되는 비즈니스 로직을 작성
      - props (또는 hook에 필요한 정보)를 넘겨 받아 데이터 및 데이터 처리 함수를 리턴해주는 기능

  #### model -> context.jsx
      - hook의 요청사항을 처리하는 부
      - 즉, API 요청 처리, state 관리

  ## page
      - index.jsx 에서 import 하는 화면 단위의 파일
        - ex. List, Manage, View, etc.


## 이외의 파일 :
      - index.jsx : 메인 서비스에서 import 하여 사용하는 파일
        - index.jsx는 page의 조합으로 구성되어진다.
