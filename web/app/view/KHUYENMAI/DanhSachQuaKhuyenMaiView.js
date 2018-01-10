Ext.define('vcb.view.KHUYENMAI.DanhSachQuaKhuyenMaiView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachQuaKhuyenMaiView',
    xtype: 'DanhSachQuaKhuyenMaiView',
    border: false,
    height:180,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.QuaKhuyenMaiStore'),
    stripeRows: true,
    title: 'Danh Sách Quà Tặng',
    layout:'fit',
    requires:[
        'Ext.ux.Exporter',
//        'Ext.ux.Exporter.Button'
    ],
    config:{
        columns: [
            {
                xtype:'actioncolumn',
                flex: 0.2 ,
//                width:50,
                items: [
                    {
                        icon: './resources/img/Add.png',  // Use a URL in the icon config
                        tooltip: 'Thêm',
                        handler: function(grid, rowIndex, colIndex) {
                             var record=this.up('DanhSachQuaKhuyenMaiView').store.data.items[rowIndex].data;
                            var cif=this.up('DanhSachQuaKhuyenMaiView').up('#KhuyenMaiChiTietView').down('#cif').getValue();
                            var duLieuQuaKhuyenMaiDaChon={QUAID:1,TENQUA: 'Vzi',SODIEM:'',NGAYTAO:'',NGAYCAPNHAT:'',NGUOITAO:'',NGUOICAPNHAT:'',SOLUONGQUA:'', CIF:''}        
                            var QuaId = record.QUAID;
                            var TENQUA = record.TENQUA;
                            var kt=0;
                            var soLuongQua=1;
                            var soDiemConLai=this.up('DanhSachQuaKhuyenMaiView').up('#KhuyenMaiChiTietView').down('#diemConLai').getValue();
                            if(record.SODIEM >soDiemConLai){
                                Ext.Msg.alert("Thông báo","Số điểm còn lại không đủ");
                            }else{
                                var QuaKhuyenMaiDaNhanStore=Ext.getStore('vcb.store.QuaKhuyenMaiDaNhanStore');
                                //tìm kiếm xem quà cho người này đã tồn tại chưa
                                for(var i=0;i<QuaKhuyenMaiDaNhanStore.data.length;i++){
                                    var QUAID2=QuaKhuyenMaiDaNhanStore.data.items[i].data.QUAID
                                    var cif2=QuaKhuyenMaiDaNhanStore.data.items[i].data.CIF
                                    if(QUAID2 == QuaId && cif == cif2){
                                        var soLuongQua=QuaKhuyenMaiDaNhanStore.data.items[i].data.SOLUONGQUA + 1;
                                        QuaKhuyenMaiDaNhanStore.removeAt(i)
                                    }
                                }
                                var duLieuQuaKhuyenMaiDaChon={QUAID:record.QUAID,TENQUA: record.TENQUA,SODIEM:record.SODIEM,NGAYTAO:'',NGAYCAPNHAT:'',NGUOITAO:'',NGUOICAPNHAT:'',SOLUONGQUA:soLuongQua, CIF:cif} 
    //                            if(){
    //                                
    //                            }
                                QuaKhuyenMaiDaNhanStore.insert(0,duLieuQuaKhuyenMaiDaChon);
    //                          // lấy tổng số điểm 
                                var tongDiemDaDung=0;
                                for(var i=0;i<QuaKhuyenMaiDaNhanStore.data.length;i++){
                                    tongDiemDaDung=tongDiemDaDung + (QuaKhuyenMaiDaNhanStore.data.items[i].data.SOLUONGQUA * QuaKhuyenMaiDaNhanStore.data.items[i].data.SODIEM)
                                }
                                // gán số điểm đã dùng 
                                 this.up('DanhSachQuaKhuyenMaiView').up('#KhuyenMaiChiTietView').down('#diemDaDung').setValue(tongDiemDaDung);
    //                            console.log(tongDiemDaDung);
                            }
                            
                        }
                    }
                ]
            },
            {
                text: 'Tên quà', 
                dataIndex: 'TENQUA',
                flex: 1 
            },
            {
                text: 'Số Điểm', 
                dataIndex: 'SODIEM',
                flex:0.5 
            }
        ]
    }
});