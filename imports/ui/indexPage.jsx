import React from 'react';
import ReactDom from 'react-dom';

export default class indexPage extends React.Component {
  btnClicked(){
    const inputDist = this.refs.distInput.value
    FlowRouter.go(`/p/${inputDist}?speed=40&city=beijing`) //注意 es6 的 template string 不是用的普通的单括号
  }
  render(){
    return (
      <div>
          <input type="number" placeholder="预测到目的地里程" ref="distInput" />
          <button className="ui orange right labeled icon button" onClick={()=>this.btnClicked()}>
            比较
            <i className="car icon"></i>
          </button>

          <div class="positive ui button">顶</div>
          <div class="negative ui button">踩</div>
      </div>
    )
  }
}
