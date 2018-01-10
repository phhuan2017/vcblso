Ext.define('vcb.view.QLQUYEN.DanhSachNutView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachNutView',
    xtype: 'DanhSachNutView',
    title: 'Danh sách các nút',
    minHeight:'300',
    margin:'5 5 5 5',
    name:'danhSachNut',
//    height:150,
    border: false,
    autoScroll:true,
    store: Ext.getStore('vcb.store.NutStore'),
    config:{
        columns: [
            { xtype : 'checkcolumn',itemId:'chon',text: 'Chọn',  dataIndex: 'CHECK',
                listeners: {
                    checkchange:function (me, rowIndex, checked, eOpts ){
                        var record=me.up('DanhSachNutView').store.data.items[rowIndex].data;
                        var nutId_tam=record.NUTID
//                         var store2=Ext.getStore('vcb.store.NutStore');
//                         store2.removeAt(rowIndex)
                         var store=Ext.getStore('vcb.store.MapQuyenStore');
                         var tam=0;// biến tạm để kiểm tra
                         for(var i=0;i<store.data.length;i++){// tìm kiếm xem có nút nào giống không
                            var nutid=store.data.items[i].data.NUTID
//                            console.log(nutid);
                            if(nutid==nutId_tam){
                                tam=1;
                                i=store.data.length
                            }
                        }
                         if(tam==0){//nếu không có nút nào giống thì thêm
                             store.insert(0,record);
                         }else{//nếu có nút giống thì thông báo
                             Ext.Msg.alert("Thông báo",'Nút trên đã được phân');
                         }
                    }
                } 
            },
            { text: 'ID',  dataIndex: 'NUTID',itemId:'nutId',name:'nutId' },
            { text: 'Tên Nút', dataIndex: 'NUTNAME', flex: 1,itemId:'nutName',name:'nutName' }
        ],
    }
});
