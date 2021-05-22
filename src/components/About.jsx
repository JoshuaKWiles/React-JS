import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Calculator</h1>
            <br/>
            <input type="text" id="boxOne"> 
                
            </input>
            <p>+</p>
            <input type="text" id="boxOne"> 
                
            </input>
            <p>=</p> 
            <table border="5" width="180">
                <tr>
                    <td>
                        <p id="outputBox">
                        12
                        </p>
                    </td>
                </tr>
            </table>
            <button onclick="myFunction()">Add!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
