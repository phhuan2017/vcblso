Ext.define(('vcb.store.LoginStore'), {
    extend: 'Ext.data.TreeStore',
    requires: [
        ('vcb.model.LoginModel')
    ],
    model: ('vcb.model.LoginModel'),
    storeId:'LoginStore',
    autoLoad:true,
    proxy: {
            type: 'ajax',
            method: 'GET',
            url:'CayGPServlet',
            extraParams:{
                CategoryID:-1
            },
            reader: {
                 type: 'json',
                 root: 'data'
                }
         },
     folderSort: true 
});