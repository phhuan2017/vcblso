Ext.define('vcb.view.QLCONGVIEC.DanhSachCBNVView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachCBNVView',
    xtype: 'DanhSachCBNVView',
    height:150,
    border: false,
    autoScroll:true,
    store: Ext.getStore('vcb.store.NguoiStore'),
    config:{
        columns: [
            { xtype : 'checkcolumn',itemId:'chon',text: 'Chọn',  dataIndex: 'CHECK',
               listeners: {
                   checkchange:function (me, rowIndex, checked, eOpts ){
                       var record=me.up('DanhSachCBNVView').store.data.items[rowIndex].data;
                        var store2=Ext.getStore('vcb.store.NguoiPhanCongStore');
                        var kiemTra=0;
                        
                        // kiểm tra xem người đó đã được phân công chưa 
                        for(var i=0;i<store2.data.length;i++){
                            var nguoiId=store2.data.items[i].data.NGUOIID
                            if(record.NGUOIID == nguoiId){
                                kiemTra=1;
                                i=store2.data.length
                            }
                        }
                        //nếu kiemtra=1 tức là người đó đã được phân công
                        if(kiemTra==1){
                            Ext.Msg.alert("Thông báo",'người này đã được phân công');
                        }else{//nếu kiểm tra =0 tức là người đó chưa có ta thực hiện thêm
                            store2.insert(0,record);
                        }
                   }
               } 
           },
           { text: 'Tên NV', dataIndex: 'HOTEN',flex: 1   },
           { text: 'Phòng ban', dataIndex: 'PHONGBANID' }   
        ]      
    }
});