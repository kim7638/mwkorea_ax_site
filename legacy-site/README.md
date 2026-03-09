# 모바일웍스코리아 홈페이지

해당 프로젝트는 **[React](https://reactjs.org/)** 기반의 라이브러리인 **[GatsbyJS](https://www.gatsbyjs.com/)** 로 작업 된 프로젝트입니다.  
**[NodeJS](https://nodejs.org/ko/)** 설치 및 이용이 필수이며, package 관리는 **[yarn](https://classic.yarnpkg.com/en/)** 을 이용중입니다.  
소스 스타일은 **[VSCode](https://code.visualstudio.com/)** 에디터에 **[prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** 플러그인을 이용중입니다.



## 환경

- NodeJS **v18**
- yarn
- VSCode
- prettier
- SCSS



## 운영 서버

[http://www.mwkorea.co.kr/](http://www.mwkorea.co.kr/)



## 개발 서버

[http://mwkorea.ipdisk.co.kr:8000/mwk-home/](http://mwkorea.ipdisk.co.kr:8000/mwk-home/)



## 배포

깃헙 [Action 탭](https://github.com/mwkorea-frontend/mwk-homepage/actions)에서 현황 확인 가능합니다.

- **[운영]**  
***master*** 브랜치에 새로운 내용이 *push* 가 되면,  
*GIT Action* 을 이용해 자동으로 운영 서버까지 빌드 및 배포를 진행합니다.  
별도로 빌드 및 FTP 접속, 전송을 하지 않아도 됩니다.  
***!! master 브랜치 관리에 유의 해주세요.***  
관련 소스 : /.github/workflows/deploy.yml

- **[개발]**  
***dev*** 브랜치에 새로운 내용이 *push* 가 되면,  
*GIT Action* 을 이용해 자동으로 개발 서버까지 빌드 및 배포를 진행합니다.  
별도로 빌드 및 FTP 접속, 전송을 하지 않아도 됩니다.  
관련 소스 : /.github/workflows/dev-deploy.yml



## 네이밍 및 인코딩

- 인코딩 : utf-8
- CSS 네이밍 : BEM
- JS 네이밍 : Camel



## 명령어

예 :

    > yarn start

- **develop :** 로컬 개발 서버 실행
- **start :** develop 과 동일
- **build :** 실제 서버에서 사용하는 소스 파일 생성
- **serve :** build 된 파일로 로컬 서버 실행
- **clean :** build 파일 삭제
