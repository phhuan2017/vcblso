Ext.define(('vcb.store.khuyenMai_BaoCao_Store'),{
   extend:'Ext.data.Store',
   fields:['TEN','PHONGBANID','QUAID','TENQUA','NGAYTAO',
       'NGAYCAPNHAT','NGUOITAO','NGUOICAPNHAT','SOLUONGQUA','CIF','TENKHACHANG','SODIEMTICHLUY','SODIEMDADUNG'],
   groupField: 'NGAYCAPNHAT',
   storeId:'khuyenMai_BaoCao_Store',
    proxy: {
        type:'ajax',
        url: 'KhuyenMai_BaoCao_Qua_Servlet',
        extraParams:{
            tuNgay:'',
            denNgay:''
        },
        reader: {
                type: 'json',
                root: 'data',
                totalProperty: 'total'
        }
    },
    pageSize:25,
//    autoLoad: true
    listeners: {
        load: function(me, records) {
            console.log('haygghe ');
            console.log(records);
        }
    }
});