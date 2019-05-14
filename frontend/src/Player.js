import React from 'react';

class Player extends React.Component {
    constructor(props) {
         super(props);

         this.state = {
             'first': 'First tip on me using id.',
             'second': 'Second tip on me using class.',
             'third': 'I am the 3rd div. 3rd tip on me using xpath.'
         }

    }

    componentDidMount() {
        console.log(document.getElementById("id_1"))

        fetch('/GLS_PROJECT/home')
        .then(response =>  response.json())
        .then(resData => {
            //document.getElementById("id_1").innerHTML = 'I have changed in player'
            //document.getElementsByClassName("myClass2").innerHTML = 'I have changed in player'
            console.log(resData);
            const first = resData.steps[0].content;
            const second = resData.steps[1].content;
            const third = resData.steps[2].content;
            this.setState({'first': first,
                'second': second,
                'third': third})
            })

    }

    Change_value = () => {


    }

    render() {
        return (
            <div>
            <title>GLS Fullstack Exercise</title>
                <h1>GLS Fullstack Exercise</h1>
	            <div style={{padding: "10px 20px", border: "1px solid green", marginbottom: "50px"}}
	            class="myClass1" id="id_1">{this.state.first}</div>

	            <div style={{padding: "50px", border: "1px solid red", display: "inline-block", position: "absolute", right: "0px"}}
	             class="myClass2">{this.state.second}</div>

	             <div style={{padding: "50px", border: "1px solid blue", display: "inline-block", position: "absolute", left: "0px", bottom: "0px"}}
	             class="myClass3">{this.state.third}</div>
            {this.Change_value}
            </div>

        )

    }

}

export default Player;