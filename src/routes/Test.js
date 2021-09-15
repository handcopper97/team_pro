import React from 'react';
import './Test.css';
import {Helmet} from "react-helmet";
import * as tf from '@tensorflow/tfjs';

class Test extends React.Component{
  
    render(){
     
        return <div>
        <head>
    <title>Team Reaper</title>

    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js"></script>
      
</head>

<body>
<Helmet>
<script>
  
</script>

</Helmet>
    <p id = "result">결과 값은 =</p>
</body>
      </div>
        }
  }

export default Test;