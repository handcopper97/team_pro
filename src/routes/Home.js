import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';

class Home extends React.Component{
  
  render(){
      return <div>
      <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title></title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="css/default.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/qna.css" />
    <link rel="stylesheet" href="css/animation.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container">
      <section id="main" class="mx-auto mt-5 pb-5 pt-5 px-3">
        <h1 class="pt-5">logo</h1>
        <div class="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
          <img src="img/test.jpg" alt="mainpage" class="img-fluid" />
        </div>
        <p>
          수명 테스트<br />
          내 수명은 얼마나 남았을까?<br />
          아래 버튼을 눌러 시작해보세요
        </p>
        <Link to="/About" className="nav_menu_item">
          <button
          type="button"
          class="btn btn-outline-danger mt-3"
          onclick="js:begin()"
        >
          테스트 시작
        </button>
        </Link>
                
        <br />

        <p class="mt-5">공유하기</p>
      </section>

      <section id="qna">
        <p>test!</p>
      </section>

      <section id="result"></section>

      <script src="js/start.js" charset="utf-8"></script>
    </div>
  </body>
    </div>
      }
}

export default Home;