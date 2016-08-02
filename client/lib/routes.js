import React from 'react';
import {mount} from 'react-mounter';

import {Layout, SettingLayout} from '../../imports/ui/Layout.jsx';
import indexPage from '../../imports/ui/indexPage.jsx';


FlowRouter.route("/", {
  action() {
    mount(Layout, {
      content: () => (<indexPage />)
    });
        console.log(indexPage);
  }
});
