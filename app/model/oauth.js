Ext.define('extMobile.model.oauth', {
  extend: 'Ext.data.Model',

  fields: [
    {name: 'access_token', type: 'string'},
    {name: 'expires_in', type: 'int'},
    {name: 'token_type', type: 'string'},
    {name: 'scope', type: 'string'},
    {name: 'refresh_token', type: 'string'},
    {name: 'username', type: 'string'},
    {name: 'password', type: 'string'},
    {name: 'grant_type', type: 'string'}
  ]
});
