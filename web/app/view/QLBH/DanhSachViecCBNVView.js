Ext.define('vcb.view.QLBH.DanhSachViecCBNVView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachViecCBNVView',
    xtype: 'DanhSachViecCBNVView',
//    title: 'Danh sách Việc Cán bộ',
    minHeight:'300',
    margin:'5 5 5 5',
    name:'DanhSachViecCBNVView',
//    height:150,
    border: false,
    autoScroll:true,
    store: Ext.getStore('vcb.store.CongViecStore'),
    config:{
        columns: [
            { text: 'ID',  dataIndex: 'CONGVIECID',flex: 1,itemId:'viecId',name:'viecId' },
            { text: 'Tên', dataIndex: 'CONGVIECTEN', flex: 1,itemId:'tenCongViec',name:'tenCongViec' },
            { text: 'Thời hạn hoàn thành', dataIndex: 'THOIHANHOANTHANH', flex: 1,itemId:'thoiHanHoanThanh',name:'thoiHanHoanThanh' },
            { text: 'Yêu cầu công việc', dataIndex: 'MOTA', flex: 1,itemId:'moTa',name:'moTa' },
            { text: 'Công văn liên quan', dataIndex: 'CONGVANLIENQUAN', flex: 1,itemId:'congVanLienQuan',name:'congVanLienQuan' },
            { text: 'Ngày Tạo', dataIndex: 'NGAYTAO', flex: 1,itemId:'ngayTao',name:'ngayTao' },
            { text: 'Ngày Cập nhật', dataIndex: 'NGAYCAPNHAT', flex: 1,itemId:'ngayCapNhat',name:'ngayCapNhat' },
            { text: 'Người Tạo', dataIndex: 'NGUOITAO', flex: 1,itemId:'nguoiTao',name:'nguoiTao' },
            { text: 'Người Cập nhật', dataIndex: 'NGUOICAPNHAT', flex: 1,itemId:'nguoiCapNhat',name:'nguoiCapNhat' },
            { text: 'Tên trạng thái', dataIndex: 'TENTRANGTHAI', flex: 1,itemId:'tenTrangThai',name:'tenTrangThai' },
            { text: 'Tiến độ', dataIndex: 'TIENDO', flex: 1,itemId:'tienDo',name:'tienDo' },
            {
                xtype:'actioncolumn',
                width:50,
                items: [
                    {
                        icon: './resources/img/edit.png',  // Use a URL in the icon config
                        tooltip: 'Thay đổi',
                        handler: function(grid, rowIndex, colIndex) {
                            var form=this.up('#DanhSachViecCBNVView');
                            var data=grid.store.data.items[rowIndex].data;
                            var storeCongViecNho = Ext.getStore('vcb.store.CongViecNhoStore');
                            storeCongViecNho.load({// tìm quyền của user
                                params:{
                                    CONGVIECID:data.CONGVIECID
                                },
                                callback: function(records, operation, success) {
                                    form.show_viecNho(data);
                                }
                            })
                        }
                    }
                ]
            }
        ],
        show_viecNho:function (data){
        var show_viecNho = Ext.create('Ext.window.Window', {
//            closable: true,
            maximizable: true,
            height: 600,
            width: 800,
            title:'Chi tiết việc nhỏ',
            modal: true,
            id: 'show_viecNho',
            itemId:'show_viecNho',
            requires:[
                'vcb.view.QLBH.DanhSachViecNhoCBNVView',
                'vcb.view.QLBH.ViecNhoChiTietView'
            ],
//            layout: 'fit',
            autoScroll:true,
            items: [
                {
                    xtype:'fieldset',
                    title:'Danh sách việc CBNV',
                    margin:'5 5 5 5',
//                    layout:'hbox',
                    items:[
                        {
                            xtype:'DanhSachViecNhoCBNVView',
                            height: 100,
                            width: 795,
                            listeners:{
                                select:function ( me, record, index, eOpts ){
                                    this.up('#show_viecNho').down('#maViecNho').setValue(record.data.STT);
                                    this.up('#show_viecNho').down('#tenViecNho').setValue(record.data.VIECNHO_TEN);
                                    this.up('#show_viecNho').down('#congViecId').setValue(record.data.CONGVIECID);
                                    this.up('#show_viecNho').down('#trangThaiCongViec').setValue(record.data.VIECNHO_TRANGTHAICONGVIEC);
                                    this.up('#show_viecNho').down('#nguoiTaoViecNho').setValue(record.data.VIECNHO_NGUOITAO);
                                    this.up('#show_viecNho').down('#nguoiCapNhatViecNho').setValue(record.data.VIECNHO_NGUOICAPNHAT);
                                    this.up('#show_viecNho').down('#ngayTaoViecNho').setValue(record.data.VIECNHO_NGAYTAO);
                                    this.up('#show_viecNho').down('#ngayCapNhatViecNho').setValue(record.data.VIECNHO_NGAYCAPNHAT);
                                    this.up('#show_viecNho').down('#tienDoViecNho').setValue(record.data.VIECNHO_TIENDO);
                                    this.up('#show_viecNho').down('#thoiHanHoanThanhViecNho').setValue(record.data.VIECNHO_THOIHANHOANTHANH);
                                    this.up('#show_viecNho').down('#yeuCauCongViec').setValue(record.data.VIECNHO_MOTA);
                                    this.up('#show_viecNho').down('#baoCao').setValue(record.data.VIECNHO_GHICHU);
                                }
                            }
                        }
                    ]
                },
                {
                    xtype:'fieldset',
                    title:'Thông tin Chi tiết Việc nhỏ',
                    margin:'5 5 5 5',
//                    layout:'hbox',
                    items:[
                        {
                            xtype:'container',
                            layout:'hbox',
                            items:[
                                {
                                    xtype:'textfield',
                                    margin:'5 5 5 5',
                                    fieldLabel:'Mã việc nhỏ',
                                    name:'maViecNho',
                                    itemId:'maViecNho',
                                    readOnly:true,
                                },
                                {
                                    xtype:'textfield',
                                    margin:'5 5 5 5',
                                    fieldLabel:'Tên việc nhỏ',
                                    name:'tenViecNho',
                                    itemId:'tenViecNho'
                                },
                                {
                                    xtype:'textfield',
                                    margin:'5 5 5 5',
                                    fieldLabel:'cong viec id',
                                    value:data.CONGVIECID,
                                    name:'congViecId',
                                    itemId:'congViecId',
                                    hidden:true
                                },
                                {
                                    xtype:'combobox',
                                    flex:1,
                                    margin:'5 5 5 5',
                                    name:'trangThaiCongViec',
                                    itemId:'trangThaiCongViec',
                                    store: Ext.getStore('vcb.store.TrangThaiCongViecStore'),
                                    editable:false,
                                    value:1,
                                    displayField: 'TEN',
                                    valueField: 'TRANGTHAICONGVIECID',
                                    fieldLabel: 'Trạng Thái CV'
                                }
                            ]
                        },
                        {
                            xtype:'container',
                            layout:'hbox',
                            items:[
                                {
                                    xtype:'combobox',
                                    margin:'5 5 5 5',
                                    name:'nguoiTaoViecNho',
                                    itemId:'nguoiTaoViecNho',
                                    emptyText:'chưa có thông tin',
                                    store: Ext.getStore('vcb.store.NguoiStore'),
                                    readOnly:true,
//                                    value:1,
                                    displayField: 'HOTEN',
                                    valueField: 'NGUOIID',
                                    fieldLabel: 'Người Tạo'
                                },
                                {
                                    xtype:'combobox',
                                    margin:'5 5 5 5',
                                    name:'nguoiCapNhatViecNho',
                                    itemId:'nguoiCapNhatViecNho',
                                    emptyText:'chưa có thông tin',
                                    store: Ext.getStore('vcb.store.NguoiStore'),
                                    readOnly:true,
//                                    value:1,
                                    displayField: 'HOTEN',
                                    valueField: 'NGUOIID',
                                    fieldLabel: 'Người Cập nhật'
                                },
                                {
                                    xtype:'textfield',
                                    margin:'5 5 5 5',
                                    fieldLabel:'Tiến độ',
                                    name:'tienDoViecNho',
                                    itemId:'tienDoViecNho'
                                }
                            ]
                        },
                        {
                            xtype:'container',
                            layout:'hbox',
                            items:[
                                {
                                    xtype:'textfield',
                                    margin:'5 5 5 5',
                                    fieldLabel:'Ngày tạo',
                                    readOnly:true,
                                    name:'ngayTaoViecNho',
                                    itemId:'ngayTaoViecNho'
                                },
                                {
                                    xtype:'textfield',
                                    margin:'5 5 5 5',
                                    readOnly:true,
                                    fieldLabel:'Ngày cập nhật',
                                    name:'ngayCapNhatViecNho',
                                    itemId:'ngayCapNhatViecNho'
                                },
                                {
                                    xtype:'datefield',
                                    margin:'5 5 5 5',
                                    fieldLabel:'Deadline',
                                    name:'thoiHanHoanThanhViecNho',
                                    itemId:'thoiHanHoanThanhViecNho',
                                    flex:1,
                                    editable:false,//không cho gõ để tránh sai định dạng ngày tháng
                                    minValue:new Date(),
                                    format:'d-m-Y'
                                }
                            ]
                        },
                        {
                            xtype:'container',
                            layout:'hbox',
                            height:'5',
                            items:[
                                {
                                    xtype:'textarea',
                                    name:'yeuCauCongViec',
                                    margin:'5 5 5 5',
                                    flex:1,
                                    height:'5',
                                    itemId:'yeuCauCongViec',
                                    fieldLabel: 'Yêu cầu công việc'
                                }, 
                            ]
                        },
                        {
                            xtype:'container',
                            layout:'hbox',
                            items:[
                                {
                                    xtype:'textarea',
                                    name:'baoCao',
                                    margin:'5 5 5 5',
                                    flex:1,
                                    height:'20',
                                    itemId:'baoCao',
                                    fieldLabel: 'Báo cáo'
                                }, 
                            ]
                        }
                    ]
                },
                {
                    xtype:'container',
                    layout:'hbox',
                    items:[
                        {
                            xtype:'container',
                            flex:1
                        },
                        {
                            xtype:'button',
                            margin:'5 5 5 5',
                            text:'Thêm mới',
                            icon:'./resources/img/Add.png',
                            handler:function (){
                                this.up('#show_viecNho').down('#maViecNho').setValue();
                                this.up('#show_viecNho').down('#tenViecNho').setValue();
                                this.up('#show_viecNho').down('#congViecId').setValue();
                                this.up('#show_viecNho').down('#trangThaiCongViec').setValue();
                                this.up('#show_viecNho').down('#nguoiTaoViecNho').setValue();
                                this.up('#show_viecNho').down('#nguoiCapNhatViecNho').setValue();
                                this.up('#show_viecNho').down('#ngayTaoViecNho').setValue();
                                this.up('#show_viecNho').down('#ngayCapNhatViecNho').setValue();
                                this.up('#show_viecNho').down('#tienDoViecNho').setValue();
                                this.up('#show_viecNho').down('#thoiHanHoanThanhViecNho').setValue();
                                this.up('#show_viecNho').down('#yeuCauCongViec').setValue();
                                this.up('#show_viecNho').down('#baoCao').setValue();
                            }
                        },
                        {
                            xtype:'button',
                            margin:'5 5 5 5',
                            text:'Lưu',
                            icon:'./resources/img/Save.png',
                            handler:function (){
                                var nguoiId= App.Session.getNguoiID();
                                var maViecNho = this.up('#show_viecNho').down('#maViecNho').getValue();
                                var tenViecNho =this.up('#show_viecNho').down('#tenViecNho').getValue();
//                                var congViecId =this.up('#show_viecNho').down('#congViecId').getValue();
                                var congViecId = data.CONGVIECID
                                var trangThaiCongViec =this.up('#show_viecNho').down('#trangThaiCongViec').getValue();
                                var nguoiTao =this.up('#show_viecNho').down('#nguoiTaoViecNho').getValue();
                                var nguoiCapNhat =this.up('#show_viecNho').down('#nguoiCapNhatViecNho').getValue();
                                var ngayTao = this.up('#show_viecNho').down('#ngayTaoViecNho').getValue();
                                var ngayCapNhat = this.up('#show_viecNho').down('#ngayCapNhatViecNho').getValue();
                                var tienDo = this.up('#show_viecNho').down('#tienDoViecNho').getValue();
                                var thoiHanHoanThanh=Ext.Date.dateFormat(this.up('#show_viecNho').down('#thoiHanHoanThanhViecNho').getValue(), 'd-m-Y')
                                var yeuCauCongViec = this.up('#show_viecNho').down('#yeuCauCongViec').getValue();
                                var baoCao = this.up('#show_viecNho').down('#baoCao').getValue();
//                                console.log(congViecId);
                                if(thoiHanHoanThanh==''){// nếu chưa có thời hạn hoàn thành yều cầu người dùng nhập
                                    Ext.Msg.alert("Thông báo","Bạn vui lòng nhập thời hạn hoàn thành");
                                }else{
//                                console.log(congViecId);
                                    if(congViecId != ''){
                                        //Lưu thông tin việc nhỏ
                                        Core.luuViecNhoServlet(nguoiId,congViecId,maViecNho,tenViecNho,trangThaiCongViec,tienDo,thoiHanHoanThanh,yeuCauCongViec,baoCao,function(options,success,response){
                                            if (success) {//kiem tra ket noi thanh cong khong 
                                                response = Ext.decode(response.responseText);
        //                                                    console.log(response);
                                                if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
                                                    Ext.Msg.alert("Thông báo","Lưu Thành công");
                                                    var storeCongViecNho = Ext.getStore('vcb.store.CongViecNhoStore');
                                                    storeCongViecNho.load({// tìm quyền của user
                                                        params:{
                                                            CONGVIECID:data.CONGVIECID
                                                        },
                                                        callback: function(records, operation, success) {
                                                        }
                                                    })
                                                }else{
                                                    Ext.Msg.alert("Thông báo"," Lưu Việc Nhỏ"+response.ResponseName);
                                                }
                                            }
                                            else {//ket noi khong thanh cong 
                                                Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                            }
                                        });
                                    }else{
                                        Ext.Msg.alert("Thông báo","Lưu không thành công")
                                    }
                                }
                            }
                        },
                        {
                            xtype:'button',
                            margin:'5 5 5 5',
                            text:'thoát',
                            handler:function (){
                                show_viecNho.close();
                            }
                        }
                    ]
                }
            ]
        }).show();
        show_viecNho.show();
    }
    }
});