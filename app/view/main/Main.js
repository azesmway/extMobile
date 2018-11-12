Ext.define('extMobile.view.main.Main', {
  extend: 'Ext.tab.Panel',

  controller: 'main',

  items: [{
    title: 'Home',
    html: '<h1 class="main-banner">Hello World!</h1>',
    items: [{
      xtype: 'button',
      text: 'Go',
      handler: 'onGo'
    }]
  }, {
    title: 'Notifications'
  }, {
    title: 'Settings'
  }]
});
