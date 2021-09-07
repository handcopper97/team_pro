import React from 'react';
import './About.css';
import {Link} from 'react-router-dom';
class About extends React.Component{
  
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
          <h1 class="pt-5">당신의 현재 나이는?</h1>
          
          <p>입력 ex)15<br/></p>
          <textarea>

          </textarea>
        
          <Link to="/" className="nav_menu_item">
            <button
            type="button"
            class="btn btn-outline-danger mt-3"
            onclick="js:begin()"
          >
            이전
          </button>
          </Link>

          <Link to="/Result" className="nav_menu_item">
            <button
            type="button"
            class="btn btn-outline-danger mt-3"
            onclick="js:begin()"
          >
            다음
          </button>
          </Link>
                  
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

export default About;