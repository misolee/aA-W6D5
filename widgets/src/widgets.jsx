import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <Root/>,
    root
  );
});

function Root() {
  const tabsInfo = [
    {
      title: "donuts",
      content: "mmmm donuts"
    }, {
      title: "beer",
      content: "getting drunk tonite"
    }, {
      title: "marge",
      content: "wifeyyy"
    }
  ];
  return(
    <div>
      <Clock/>
      <Tabs tabsInfo={tabsInfo}/>
    </div>
  );
}