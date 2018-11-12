Ext.define('extMobile.Application', {
  extend: 'Ext.app.Application',

  // mainView: 'extMobile.view.main.Main',

  defaultToken: 'home',
  loginToken: 'login',

  controller: 'app',

  models: [
    'extMobile.model.oauth'
  ],

  stores: [
    'extMobile.store.oauth'
  ],

  launch: function () {
    var store = Ext.create('extMobile.store.oauth');
    store.baseParams = {
      grant_type: 'password'
    };

    store.load({
      success: function(response) {
debugger;
      }
    });
  }

});
