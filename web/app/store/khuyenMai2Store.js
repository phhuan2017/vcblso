Ext.define(('vcb.store.khuyenMai2Store'),{
   extend:'Ext.data.Store',
   fields:['NGAYTAO','NGAYCAPNHAT','NGUOITAO','NGUOICAPNHAT','CIF','ID','TENKHACHANG','DIACHI',
       'SOCMT', 'NGAYCAP','NOICAP','SODIENTHOAI','SODIEMTICHLUY','SODIEMDADUNG'],
   storeId:'khuyenMai2Store',
    proxy: {
        type:'ajax',
        url: 'timKhachHangKhuyenMaiServlet',
        extraParams:{
            cif:'',
            ten:''
        },
        reader: {
                type: 'json',
                root: 'data',
                totalProperty: 'total'
        }
    },
    pageSize:30,
    autoLoad: true
//    listeners: {
//        load: function(me, records) {
//            console.log('huy động  ');
//            console.log(records);
//        }
//    }
});