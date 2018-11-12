Ext.define('extMobile.store.oauth', {
  extend: 'Ext.data.Store',
  model: 'extMobile.model.oauth',

  storeId: 'storeOAuth',

  autoLoad: false,
  autoDestroy: true,

  proxy: {
    type: 'ajax',
    method: 'POST',
    url: 'http://mobile.loc/oauth',
    noCache: true,
    timeout: 620000,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    username: 'testclient',
    password: 'testpass',
    reader: {
      type: 'json'
    },
    limitParam: undefined,
    pageParam: undefined,
    startParam: undefined
  }
});
