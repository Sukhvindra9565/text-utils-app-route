import React from "react";

function About(props) {

    // const [myStyle,setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white')
    //     {
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //             border:'2px solid white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'2px solid black'

    //         })
    //         setBtnText("Enable Light Mode");

    //     }
    // }
    let myStyle = {
      color:props.mode === 'dark'?'white':'#042743',
      backgroundColor : props.mode === 'dark'? 'rgb(36 74 104)':'white'
    }
  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className="container">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze you text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and effectively. Be it word count, character count or typing speed.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils us a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document,essays etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      {/* <button onClick={toggleStyle} className="btn btn-primary my-2">{btntext}</button> */}
      </div>
    </div>
  );
}

export default About;
