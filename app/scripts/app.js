
/** @jsx React.DOM */

var Img = React.createClass({
  displayName: 'Img',

  render: function() {
    return (
      React.DOM.img({src: "https://imagecomics.com/images/made/uploads/releases/AstronautsInTrouble_06-1_266_400_s_c1.png"})
    );
  }
});

React.renderComponent(
  Img(null),
  document.getElementById('app')
);


var ss = "Test";

var HelloWorld = React.createClass({
  displayName: 'HelloWorld',
 

  getInitialState: function() {
  iss : false;
  isText = Boolean(true);
    return {message: {ss}};
  },


  goodbye: function(event) {
    this.setState({message: isText? 'Goodbye World.' : "Hello World"});
	isText = !isText;
  },


  render: function() {
    return (
      React.DOM.h1({onClick:this.goodbye},
          this.state.message)
    );
  }
});

React.renderComponent(
  HelloWorld(null),
  document.getElementById('app2')
);


var Btn = React.createClass({
  displayName: 'Btn',
  
  toggleLiked: function() {
	ss : "ddf";
    this.setState({
      liked: !this.state.liked
    });
  },
  
  getInitialState: function() {
    return {
      liked: false
    }
  },
  
  setText: function(){
	console.info('Message');
  },

  render: function() {
   var buttonClass = this.state.liked ? ' active' : '';
    return (
      React.DOM.button({onClick:this.toggleLiked}, caption='Btn', className={buttonClass})
    );
  }
});

React.renderComponent(
  Btn(null),
  document.getElementById('')
);


module.export = Btn2;
