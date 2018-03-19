import React, { Component } from 'react';
import Slider from 'react-slick'
import logo from './logo.svg';
import "./index.css";



class UiPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.state.comment = 'Hello';
    this.handleClick = this.handleClick.bind(this);
    this.toggleVid = this.toggleVid.bind(this);
  }


 handleClick() {
      if(this.state.comment === 'Hello'){
        this.setState({comment: 'goodbye'})
      }else{
        this.setState({comment: 'Hello'})}
  }

componentDidMount() {

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }




toggleVid(name) {
    var x = document.getElementById(name);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



  componentWillUnmount() {
      alert('unmount')
    clearInterval(this.timerID);
  }

 tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <div><h1 onClick={()=>this.handleClick()}>
     {this.state.comment} {this.state.date.toLocaleTimeString()}
     </h1>
     <button onClick={()=>this.toggleVid('one')}>one</button>
     <button onClick={()=>this.toggleVid('two')}>two</button>
     <button onClick={()=>this.toggleVid('three')}>three</button>
     <button onClick={()=>this.toggleVid('four')}>four</button>
    <button onClick={()=>this.toggleVid('five')}>five</button>
    <button onClick={()=>this.toggleVid('six')}>six</button>
     </div>;
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
      <UiPanel name="steve" age="24"/>
        <iframe id="one" src="https://clips.twitch.tv/embed?clip=TangentialVivaciousDelicataGivePLZ&autoplay=false&tt_medium=clips_embed&autoplay=false" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>
        <iframe id="two" src="https://clips.twitch.tv/embed?clip=TangentialVivaciousDelicataGivePLZ&autoplay=false&tt_medium=clips_embed&autoplay=false" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>
         <iframe id="three" src="https://clips.twitch.tv/embed?clip=TangentialVivaciousDelicataGivePLZ&autoplay=false&tt_medium=clips_embed&autoplay=false" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>
          <iframe id="four" src="https://clips.twitch.tv/embed?clip=TangentialVivaciousDelicataGivePLZ&autoplay=false&tt_medium=clips_embed&autoplay=false" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>
           <iframe id="five" src="https://clips.twitch.tv/embed?clip=TangentialVivaciousDelicataGivePLZ&autoplay=false&tt_medium=clips_embed&autoplay=false" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>
           <iframe id="six" src="https://clips.twitch.tv/embed?clip=TangentialVivaciousDelicataGivePLZ&autoplay=false&tt_medium=clips_embed&autoplay=false" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>




      </div>
    );
  }
}

export default App;
