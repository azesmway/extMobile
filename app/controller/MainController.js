Ext.define('extMobile.controller.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main',

  onGo: function () {
    Ext.Msg.alert('Go', 'From main view controller');
  }
});
