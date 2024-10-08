# LoL-DEX

🏃 [사용해보기]

## 🖥️ 프로젝트 소개

Next.js 환경에서 typescript를 사용해서 롤api로 사전만들기

## 소개

| 김태흔  
| :--------:
| @taeheun01

## 🕰️ 개발 기간

2024.09.12 ~ 2024.09.22

## 📂 폴더 구조

📦src
┣ 📂app
┃ ┣ 📂api
┃ ┃ ┗ 📂rotation
┃ ┃ ┃ ┗ 📜route.ts
┃ ┣ 📂champion
┃ ┃ ┣ 📂[id]
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂fonts
┃ ┃ ┣ 📜GeistMonoVF.woff
┃ ┃ ┗ 📜GeistVF.woff
┃ ┣ 📂item
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂rotation
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂types
┃ ┃ ┣ 📜Champion.ts
┃ ┃ ┣ 📜ChampionRotation.ts
┃ ┃ ┗ 📜Item.ts
┃ ┣ 📂utils
┃ ┃ ┗ 📜serverApi.ts
┃ ┣ 📜favicon.ico
┃ ┣ 📜globals.css
┃ ┣ 📜layout.tsx
┃ ┗ 📜page.tsx
┣ 📂components
┃ ┗ 📂ui
┃ ┃ ┣ 📜button.tsx
┃ ┃ ┗ 📜carousel.tsx
┣ 📂lib
┃ ┗ 📜utils.ts

## 🧩 주요 기능

### 레이아웃

#### 로고, 홈,챔피언목록,로테이션 정보,아이템 목록 클릭시 각각의 경로로 이동

![image](https://github.com/user-attachments/assets/32778683-f478-4fad-b045-02bc6362b87a)

### 메인페이지

#### 주요 페이지인 챔피언 목록, 로테이션 정보, 아이템 목록으로 이동가능

![image](https://github.com/user-attachments/assets/8362a6ba-7212-40ed-8632-d135dbd96216)

### 챔피언 목록

#### 리그 오브 레전드의 모든 챔피언이 보여지고 있고 챔피언 이미지 클릭시 디테일 페이지로 이동

![image](https://github.com/user-attachments/assets/add817bb-5b36-4bfa-bafa-e33e62913e77)

### 챔피언 디테일

#### 디테일 설명

##### 클릭해서 들어온 챔피언의 정보들을 담고 있다.

![image](https://github.com/user-attachments/assets/61c05d4b-2d75-4540-a5c3-a46684eab066)

#### 스킨

##### 클릭해서 들어온 챔피언의 스킨정보들을 담고 있다.

![image](https://github.com/user-attachments/assets/8a828900-c50f-4282-a92b-709381eea0d1)

### 로테이션 정보

#### 무료 주간 로테이션

##### 주간 로테이션 챔피언을 보여준다.

![image](https://github.com/user-attachments/assets/16186b0d-1354-4066-80c3-77350b5e5d6f)

##### 신규 플레이어용 무료 챔피언

###### 신규 플레이어용 무료 챔피언을 보여준다.

![image](https://github.com/user-attachments/assets/2fcc0e74-8b09-464d-9c76-b1ccb682dfb0)

### 아이템 목록

#### 리그 오브 레전드의 모든 아이템을 보여줌

![image](https://github.com/user-attachments/assets/e8ab9750-5c25-425a-afee-b6aad8ea09d6)

## 🚨 트러블 슈팅

### 1. tailwindcss 적용이 되지않음

#### \* 문제점

#### 프로잭트를 시작하고 api를 통해서 정보를 불러와 페이지에 적용을 해주고

#### 정렬을 하고싶어서 tailwindcss를 사용했는데 아무리 적용이 안되었고

#### 콘솔을 확인해보니 html요소에는 적용이 되었는데 tailwindcss 에 제대로 적용이 안되고있었다.

#### \* 해결방법

#### 아무리 찾아보고 생각을 해봐도 테일윈드가 적용이 안되는 것이면

#### 테일윈드 설정에 문제가 있을것 같아 삭제후 다시 설치 또는 설정을 변경을 해보았고

#### 마지막으로 새프로잭트를 만들어서 차이점을 찾다가 layout.tsx 에 global.css 가 import 되어있지 않았다.

# 📝Technologies & Tools

![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![css](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![vscode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
