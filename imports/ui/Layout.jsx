import React from 'react';

// 主要布局
export const Layout = ({content}) => (
  <div className="ui container" style={{paddingTop: 50}}>
  <div>
      <h1>出行比价 <span style={{color: "grey"}}><small>(北京)</small></span></h1>
      <hr />
        <div className="positive ui button">顶</div>
        <div className="negative ui button">踩</div>
        {content}
    </div>
  </div>
);

  // 设置布局
  export const SettingLayout = ({menu, content}) => (
    <div>
      <div className="ui container" style={{paddingTop: 50}}>
        <h1>设置</h1>
        <hr />
      </div>
    </div>
  );
