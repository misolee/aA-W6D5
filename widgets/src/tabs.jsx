import React from  'react';

class Tabs extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      index: 0
    };
  }
  
  render(){
    return (
      <div class="tab">
        <ul class="tab-title">
          {this.props.tabsInfo.map((tab) => (<h1 >{tab.title}</h1>))}
        </ul>
        <article class="tab-content">
          {this.props.tabsInfo[this.state.index].content}
        </article>
      </div>
    );
  }
  
  tabclick() {
    
  }
  
}

// <h1 onclick={this.setState({index: (this.props.tabsInfo indexOf (tab.title))})}></h1>






export default Tabs;