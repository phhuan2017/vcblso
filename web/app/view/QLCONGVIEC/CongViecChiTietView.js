Ext.define('vcb.view.QLCONGVIEC.CongViecChiTietView',{
    extend: 'Ext.form.Panel',
    itemId: 'CongViecChiTietView',
    xtype: 'CongViecChiTietView',
    border: false,
    autoScroll:true,
    store: Ext.getStore('vcb.store.CongViecStore'),
    requires:[
        'vcb.view.QLCONGVIEC.DanhSachCBNVView',
    ],
    config:{
        items:[
            {
                xtype:'fieldset',
                margin:'5 5 5 5',
                itemId:'themCongViec',
                title:'Việc chính',
//                layout:'hbox',
                items:[
                    {
                        xtype:'container',
                        layout:'hbox',
                        items:[
                            {
                                xtype:'container',
                                layout:'vbox',
                                items:[
                                    {
                                        xtype:'textfield',
                                        name:'tenCV',
                                        margin:'5 5 5 5',
                                        itemId:'tenCV',
                                        flex:1,
                                        fieldLabel: 'Tên Công việc'
                                    },
                                    {
                                        xtype:'datefield',
                                        name:'thoiHan',
                                        margin:'5 5 5 5',
                                        itemId:'thoiHan',
                                        editable:false,//không cho gõ để tránh sai định dạng ngày tháng
                                        minValue:new Date(),
                                        format:'d-m-Y',
                                        flex:1,
                                        fieldLabel: 'Deadline',
                //                                        value: Ext.Date.dateFormat(new Date(), 'd-m-Y')
                                    },
                                    {
                                        xtype:'textfield',
                                        name:'cVLienQuan',
                                        flex:1,
                                        margin:'5 5 5 5',
                                        itemId:'cVLienQuan',
                                        fieldLabel: 'CVăn liên quan'
                                    },
//                                    {
//                                        xtype:'textfield',
//                                        name:'nguoiTao',
//                                        flex:1,
//                                        margin:'5 5 5 5',
//                                        itemId:'nguoiTao',
//                                        fieldLabel: 'Người khởi tạo'
//                                    },
//                                    {
//                                        xtype:'datefield',
//                                        name:'ngayTao',
//                                        flex:1,
//                                        margin:'5 5 5 5',
//                                        itemId:'ngayTao',
//                                        fieldLabel: 'Ngày khỏi tạo'
//                                    },
//                                    {
//                                        xtype:'textfield',
//                                        name:'nguoiCapNhat',
//                                        flex:1,
//                                        margin:'5 5 5 5',
//                                        itemId:'nguoiCapNhat',
//                                        fieldLabel: 'Người cập nhật'
//                                    },
//                                    {
//                                        xtype:'datefield',
//                                        name:'ngayCapNhat',
//                                        flex:1,
//                                        margin:'5 5 5 5',
//                                        itemId:'ngayCapNhat',
//                                        fieldLabel: 'ngày cập nhật'
//                                    }
                                ]
                            },
                            {
                                xtype:'container',
                                itemId:'ha',
                                layout:'hbox',
                                flex:1,
                                items:[
                                    {
                                        xtype:'container',
                                        layout:'vbox',
//                                        flex:1,
                                        items:[
                                            {
                                                xtype:'textarea',
                                                name:'yeuCauCongViec',
                                                margin:'5 5 5 5',
                                                flex:1,
                //                                layout:'fit',
                                                resizable :true,
                                                itemId:'yeuCauCongViec',
                                                fieldLabel: 'Yêu cầu công việc'
                                            }, 
//                                            {
//                                                xtype:'textarea',
//                                                name:'yeuCauCongViec',
//                                                margin:'5 5 5 5',
//                                                flex:1,
//                //                                layout:'fit',
//                                                resizable :true,
//                                                itemId:'yeuCauCongViec',
//                                                fieldLabel: ''
//                                            }, 
                                        ]
                                    },
                                    
                                    {
                                        xtype:'fieldset',
                                        margin:'5 5 5 5',
                                        itemId:'themCongViec',
                                        title:'Danh sách các nhân viên tham gia',
                                        flex:1,
                                        items:[
                                            {
                                                xtype:'DanhSachCBNVView',
                                                
                                            }
                                        ]
                                    },
                                    
                                    
        //                            {
        //                                xtype:'grid',
        //                                minHight:'30',
        //                                columns: [
        ////                                    { xtype : 'checkcolumn',itemId:'chon',text: 'Chọn',  dataIndex: 'name', flex: 1,
        ////                                       listeners: {
        ////                                           checkchange:function (me, rowIndex, checked, eOpts ){
        ////                                               var hoten=me.up('NoiDungView').store.data.items[rowIndex].data.HOTEN;
        ////                                               var nguoiId=me.up('NoiDungView').store.data.items[rowIndex].data.NGUOIID;
        ////                                               var idCu=me.up('NoiDungView').down('#nhungNguoiThucHienId').getValue();
        ////                                               var tamp=null;
        ////                                               var tamp1=true;
        ////                                               var tamp2=null;
        ////                                               if(checked==true){
        ////                                                   tamp=idCu.split(',',100);// tách thành mảng 
        ////                                                   for(var i=0;i<100;i++){//tìm xem có người nào đã có chưa nếu có thì ko add nữa
        ////                                                       if(parseInt(tamp[i])==nguoiId){
        ////                                                           tamp1=false;// nếu có gán tamp1 = false
        ////                                                       }
        ////                                                   }
        ////                                                   if(tamp1==true){//nếu tamp1 =true thì mới thêm ID mới
        ////                                                       me.up('NoiDungView').down('#nhungNguoiThucHienId').setValue(idCu  + nguoiId + ',');
        ////                                                   }
        ////                                               }else{// nếu bỏ tích checked
        ////                                                   tamp=idCu.split(',',100);// tách thành mảng 
        ////                                                   tamp2=idCu.split(',',100);
        ////                                                   for(var i=0;i<100;i++){
        ////
        ////                                                       if(parseInt(tamp[i])==nguoiId){// Nếu giống nhau bỏ chọn
        ////                                                           me.up('NoiDungView').down('#nhungNguoiThucHienId').setValue(idCu.replace(tamp2[i]+',',''));
        ////                                                       }
        ////                                                   }
        ////                                               }
        ////                                           }
        ////                                       } 
        ////                                   },
        //                                   { text: 'Tên NV', dataIndex: 'HOTEN'  },
        //                                   { text: 'Phòng ban', dataIndex: 'PHONGBANID' }   
        //                                ], 
        //                            }
                                ]
                            }
                        ]
                    },
                    
                    {
                        xtype:'textfield',
                        hidden:true,
                        name:'nhungNguoiThucHienId',
                        itemId:'nhungNguoiThucHienId',
                        fieldLabel: 'Những người thực hiện ID'
                    }
                ]
            }
        ]
    }
});