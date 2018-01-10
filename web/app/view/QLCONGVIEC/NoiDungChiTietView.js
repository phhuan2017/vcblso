Ext.define(('vcb.view.QLCONGVIEC.NoiDungChiTietView'), { 
    extend:'Ext.form.Panel',
    xtype:'NoiDungChiTietView',
    itemId:'NoiDungChiTietView',
    id:'NoiDungChiTietView',
    bodyStyle:'background-color: white',
    cls:'background',
    border:false,
    requires:[
//        'vcb.view.QLNDView',
        'vcb.view.QLCONGVIEC.DanhSachCBNVView',
        'vcb.view.QLCONGVIEC.DanhSachPhanCongCBNVView',
        'vcb.view.QLCONGVIEC.DanhSachYKienView'
    ],
    layout:'fit',
    autoScroll:true,
    config:{
        items:[
            {
                region:'center',
                xtype:'tabpanel',
                border:false,
                items:[
                    {
                        title:'Tổng quan công việc',
                        items:[
                            {
                                xtype:'fieldset',
                                itemId:'themCongViec',
                                margin:'5 5 5 5',
                                title:'Thêm công việc',
                                items:[
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                name:'tenCV',
                                                itemId:'tenCV',
                                                flex:1,
                                                fieldLabel: 'Tên Công việc'
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                name:'congViecId',
                                                itemId:'congViecId',
                                                hidden:true,
                                                flex:1,
                                                fieldLabel: 'Công việc Id'
                                            },
                                            {
                                                xtype:'textfield',
                                                name:'cVLienQuan',
                                                margin:'5 5 5 5',
                                                itemId:'cVLienQuan',
                                                flex:1,
                                                fieldLabel: 'CVăn liên quan'
                                            },
                                            {
                                                xtype:'datefield',
                                                name:'thoiHan',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                itemId:'thoiHan',
                                                editable:false,//không cho gõ để tránh sai định dạng ngày tháng
                                                minValue:new Date(),
                                                format:'d-m-Y',
                                                fieldLabel: 'Deadline'
                        //                                        value: Ext.Date.dateFormat(new Date(), 'd-m-Y')
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textarea',
                                                name:'yeuCauCongViec',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                height:'200',
                                                itemId:'yeuCauCongViec',
                                                fieldLabel: 'Yêu cầu công việc'
                                            }, 
                                            {
                                                xtype:'textfield',
                                                name:'nguoiTao',
                                                margin:'5 5 5 5',
                                                flex:1,
        //                                        height:'200',
                                                itemId:'nguoiTao',
                                                editable:false,
                                                readOnly:true,
                                                fieldLabel: 'Người Tạo'
                                            }, 
                                            {
                                                xtype:'textfield',
                                                name:'ngayTao',
                                                margin:'5 5 5 5',
                                                flex:1,
        //                                        height:'200',
                                                itemId:'ngayTao',
                                                editable:false,
                                                readOnly:true,
                                                fieldLabel: 'Ngày Tạo'
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
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
                                            },
                                            {
                                                xtype:'textfield',
                                                name:'nguoiCapNhat',
                                                margin:'5 5 5 5',
                                                flex:1,
        //                                        height:'200',

                                                itemId:'nguoiCapNhat',
                                                editable:false,
                                                readOnly:true,
                                                fieldLabel: 'Người Cập nhật'
                                            }, 
                                            {
                                                xtype:'textfield',
                                                name:'ngayCapNhat',
                                                margin:'5 5 5 5',
                                                flex:1,
        //                                        height:'200',
                                                itemId:'ngayCapNhat',
                                                editable:false,
                                                readOnly:true,
                                                fieldLabel: 'Ngày Cập nhật'
                                            }
                                        ]
                                    },                                    
                                    {
                                        xtype:'fieldset',
                                        title:'Phân việc cho CBNV',
                                        collapsible:true,
                                        collapsed:true,
                                        margin:'5 5 5 5',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'fieldset',
                                                margin:'5 5 5 5',
                                                title:'Danh sách CBCNV',
                                                flex:1,
                                                items:[
                                                    {
                                                        xtype:'DanhSachCBNVView',
                                                        
                                                    }
                                                ]
                                            },
                                            {
                                                xtype:'container',
                                                layout:'vbox',
                                                items:[
                                                    {
                                                        xtype:'button',
                                                        margin:'30 5 5 5',
                                                        text:'=>',
                                                        
                                                    },
                                                    {
                                                        xtype:'button',
                                                        margin:'5 5 5 5',
                                                        text:'<=',
                                                        
                                                    }
                                                    
                                                ]
                                            },
                                            {
                                                xtype:'fieldset',
                                                margin:'5 5 5 5',
                                                title:'Danh sách CBNV được phân công',
                                                flex:1,
                                                items:[
                                                    {
                                                        xtype:'DanhSachPhanCongCBNVView',
                                                        itemId:'da'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'fieldset',
                                        margin:'5 5 5 5',
                                        title:'Các nội dung báo cáo',
                                        flex:1,
                                        items:[
                                            {
                                                xtype:'DanhSachYKienView',
//                                                listeners: {
//                                                    select:function ( me, record, index, eOpts ){
////                                                        this
////                                                        console.log(this.up('NoiDungChiTietView'));
//                                                    }
//                                                }

                                            }
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
                                        name:'vietBaoCao',
                                        itemId:'vietBaoCao',
                                        text: 'Viết báo cáo',
                                        icon:'./resources/img/report.png',
//                                        icon:'./resources/img/Save.png',
                                        handler:function (){
                                             var form = this.up('form');
                                             form.show_Note(1,form);
                                        }
                                    },
                                    {
                                        xtype:'button',
                                        margin:'5 5 5 5',
                                        name:'luuViec',
                                        itemId:'luuViec',
                                        text: 'Lưu việc',
                                        icon:'./resources/img/Save.png',
                                        handler:function (){
                                            var tenCV=this.up('NoiDungChiTietView').down('#tenCV').getValue();
                                            var congViecId=this.up('NoiDungChiTietView').down('#congViecId').getValue();
                                            var cVLienQuan=this.up('NoiDungChiTietView').down('#cVLienQuan').getValue();
                                            var yeuCauCongViec=this.up('NoiDungChiTietView').down('#yeuCauCongViec').getValue();
                                            var trangThaiCongViec=this.up('NoiDungChiTietView').down('#trangThaiCongViec').getValue();
                                            var User=App.Session.getNguoiID();
                                            var thoiHan = Ext.Date.dateFormat(this.up('NoiDungChiTietView').down('#thoiHan').getValue(), 'd-m-Y');//định dạnh lại ngày tháng theo d-m-Y
                                            var store=Ext.getStore('vcb.store.NguoiPhanCongStore');
                                            if(congViecId==''){//congViecId =='' tức là thêm mới
                                                if(tenCV==''){
                                                    Ext.Msg.alert("Thông báo",'Bạn chưa điền tên công việc');
                                                    }else{
                                                        if(yeuCauCongViec==''){
                                                            Ext.Msg.alert("Thông báo",'Bạn chưa điền yêu cầu công việc');
                                                        }else{
                                                            Core.themCongViecServlet(tenCV,thoiHan,cVLienQuan,yeuCauCongViec,User,trangThaiCongViec,function(options,success,response){
                                                                if (success) {//kiem tra ket noi thanh cong khong 
                                                                    response = Ext.decode(response.responseText);
                            //                                                    console.log(response);
                                                                    if(response.ResponseCode>=0){// kiểm tra user tồn tại hay chưa 
                                                                        var CongViecId=response.ResponseCode;
                                                                        //thêm mapviec cho User Tạo
                                                                        Core.themMAPViecServlet(CongViecId,User,function(options,success,response){
                                                                            if (success) {//kiem tra ket noi thanh cong khong 
                                                                                response = Ext.decode(response.responseText);
                            //                                                    console.log(response);
                                                                                if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
//                                                                                    Ext.Msg.alert("Thông báo","Lưu Thành công");
                                                                                }else{
                                                                                    Ext.Msg.alert("Thông báo"," Thêm Công việc"+response.ResponseName);
                                                                                }
                                                                            }
                                                                            else {//ket noi khong thanh cong 
                                                                                Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                                            }
                                                                        });
                                                                        if(store.data.length!=0){
                                                                            for(var i=0;i<store.data.length;i++){
                                                                                Core.themMAPViecServlet(CongViecId,store.data.items[i].data.NGUOIID,function(options,success,response){
                                                                                    if (success) {//kiem tra ket noi thanh cong khong 
                                                                                        response = Ext.decode(response.responseText);
                                    //                                                    console.log(response);
                                                                                        if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
                                                                                            Ext.Msg.alert("Thông báo","Lưu Thành công");
                                                                                        }else{
                                                                                            Ext.Msg.alert("Thông báo"," Thêm Công việc"+response.ResponseName);
                                                                                        }
                                                                                    }
                                                                                    else {//ket noi khong thanh cong 
                                                                                        Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                                                    }
                                                                                });
                                                                            }
                                                                        }
                                                                    }else{
                                                                        Ext.Msg.alert("Thông báo"," them nguoi dung"+response.ResponseName);
                                                                    }
                                                                }
                                                                else {//ket noi khong thanh cong 
                                                                    Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                                }
                                                            });
                                                        }

                                                    }
                                            }else{//công việc id !='' tức là update
                                                var storeMapViec=Ext.getStore('vcb.store.MapViecStore');
                                                if(tenCV==''){
                                                    Ext.Msg.alert("Thông báo",'Tên Công việc không được rỗng');
                                                }else{
                                                    if(yeuCauCongViec==''){
                                                        Ext.Msg.alert("Thông báo",'yêu cầu Công việc không được rỗng');
                                                    }else{
                                                        Core.CapNhatCongViecServlet(congViecId,tenCV,thoiHan,cVLienQuan,yeuCauCongViec,User,trangThaiCongViec,function(options,success,response){
                                                            if (success) {//kiem tra ket noi thanh cong khong 
                                                                response = Ext.decode(response.responseText);
                                                                if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
                                                                    for(var i=0;i<storeMapViec.data.length;i++){
                                                                        Core.capNhatMAPViecServlet(congViecId,storeMapViec.data.items[i].data.NGUOIID,0,function(options,success,response){
                                                                            if (success) {//kiem tra ket noi thanh cong khong 
                                                                                response = Ext.decode(response.responseText);
                                                                                if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
                                                                                    Ext.Msg.alert("Thông báo","cập nhật Thành công");
                                                                                    for(var i=0;i<store.data.length;i++){
                                                                                        Core.capNhatMAPViecServlet(congViecId,store.data.items[i].data.NGUOIID,1,function(options,success,response){
                                                                                            if (success) {//kiem tra ket noi thanh cong khong 
                                                                                                response = Ext.decode(response.responseText);
                                                                                                if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
                                                                                                        Ext.Msg.alert("Thông báo","cập nhật Thành công");
                                                                                                }else{
                                                                                                    Ext.Msg.alert("Thông báo"," Thêm Công việc"+response.ResponseName);
                                                                                                }
                                                                                            }
                                                                                            else {//ket noi khong thanh cong 
                                                                                                Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                                                            }
                                                                                        });
                                                                                    }
                                                                                }else{
                                                                                    Ext.Msg.alert("Thông báo"," Thêm Công việc"+response.ResponseName);
                                                                                }
                                                                            }
                                                                            else {//ket noi khong thanh cong 
                                                                                Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                                            }
                                                                        });
                                                                    }
                                                                }else{
                                                                    Ext.Msg.alert("Thông báo"," Thêm Công việc"+response.ResponseName);
                                                                }
                                                            }
                                                            else {//ket noi khong thanh cong 
                                                                Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                            }
                                                        });
                                                        //RESET LẠI NguoiStore 
//                                                            var storeNguoi=Ext.getStore('vcb.store.NguoiStore')
//                                                            storeNguoi.load();
//                                                            //reset lại NguoiPhanCongStore
//                                                            store.load({
//                                                                params:{
//                                                                    CONGVIECID:congViecId
//                                                                },
//                                                                callback: function(records, operation, success) {
//                                                                    if(records.length!=0){
//                                                                        for(var i=0;i<records.length;i++){
//                                                                            var index=storeNguoi.find('NGUOIID',records[i].data.NGUOIID)
//                                                                            storeNguoi.removeAt(index)
//                                                                        }
//                                                                    }
//                                                                 }
//                                                            });
                                                    }
                                                    
                                                }
                                            }
                                        },
                                        
                                    }
                                ]
                            },
                            
                        ]
                    }
                ]
        }]
//        bbar: [
//        {
//            text: 'next',
//            handler: function (btn) {
//                var tabs = btn.up('tabpanel'),
//                    activeTab = tabs.getActiveTab(),
//                    nextTab = activeTab.next('panel');
//                
//                if (nextTab) {
//                    alert('next');
//                    tabs.setActiveTab(nextTab);
//                }
//            }
//        },
//        {
//            text: 'prev',
//            handler: function (btn) {
//                var tabs = btn.up('tabpanel'),
//                    activeTab = tabs.getActiveTab(),
//                    prevTab = activeTab.prev('panel');
//                
//                if (prevTab) {
//                    alert('prev');
//                    tabs.setActiveTab(prevTab);
//                }
//            }
//        }
//    ]
//        dockedItems: [
//            {
//                dock: 'bottom',
//                xtype:'container',
//                layout:'hbox',
//                bodyStyle: 'background-color: transparent',
//                items:[
//                    {
//                        xtype:'button',
//                        text:'Tiếp tục ',
//                        cls: 'search_all',
//                        action:'addproduct',
//                        itemId:'theNext',
//                        handler:function (){
//                            
//                        }
//                    }
//                ]
//            }
//        ]
    },
    hayghe:function(data){
        var me =this;
//       console.log(this.up('NoiDungChiTietView'));
       if(data==0){//data = 0 thì đang là thêm mới
            this.down('#tenCV').setValue('');
            this.down('#congViecId').setValue('');
            this.down('#thoiHan').setValue('');
            this.down('#cVLienQuan').setValue('');
            this.down('#yeuCauCongViec').setValue('');
            this.down('#trangThaiCongViec').setValue(1);
            this.down('#ngayTao').setValue('');
            this.down('#ngayCapNhat').setValue('');
            this.down('#nguoiCapNhat').setValue('');
            this.down('#nguoiTao').setValue('');
            var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
                storeNguoi.load({})
            var storeNguoiPhanCong=Ext.getStore('vcb.store.NguoiPhanCongStore');
                storeNguoiPhanCong.load({//tìm tên người cập nhật
                    params:{
                    }
                })
       }else{// cập nhật
           this.down('#congViecId').setValue(data.CONGVIECID);
           this.down('#tenCV').setValue(data.CONGVIECTEN);
           this.down('#thoiHan').setValue(data.THOIHANHOANTHANH);
           this.down('#cVLienQuan').setValue(data.CONGVANLIENQUAN);
           this.down('#yeuCauCongViec').setValue(data.MOTA);
           this.down('#trangThaiCongViec').setValue(data.TRANGTHAICONGVIEC);
           this.down('#ngayTao').setValue(data.NGAYTAO);
           this.down('#ngayCapNhat').setValue(data.NGAYCAPNHAT);
           this.down('#nguoiCapNhat').setValue(data.NGUOICAPNHAT);
           this.down('#nguoiTao').setValue(data.NGUOITAO);
           if(data.NGUOICAPNHAT=='')
            {
                me.down('#nguoiCapNhat').setValue('');
            }else{
                var storeNguoi2=Ext.getStore('vcb.store.Nguoi_TimKiemStore');
                storeNguoi2.load({//tìm tên người cập nhật
                    params:{
                        USERID:data.NGUOICAPNHAT
                    },
                    callback: function(records, operation, success) {
//                            console.log(records);
                       if(records.length>0){
                            me.down('#nguoiCapNhat').setValue(records[0].data.HOTEN);
                        }
                    }
                })
            }
            if(data.NGUOITAO=='')
            {
                me.down('#nguoiTao').setValue('');
            }else{
                var storeNguoi2=Ext.getStore('vcb.store.Nguoi_TimKiemStore');
                storeNguoi2.load({//tìm tên người cập nhật
                    params:{
                        USERID:data.NGUOITAO
                    },
                    callback: function(records, operation, success) {
                       if(records.length>0){
                            me.down('#nguoiTao').setValue(records[0].data.HOTEN);
                        }
                    }
                })
            }
            var storeMapViec=Ext.getStore('vcb.store.MapViecStore');
                storeMapViec.load({//tìm tên người cập nhật
                    params:{
                        CONGVIECID:data.CONGVIECID
                    },
                    callback: function(records, operation, success) {
//                       console.log(records);
                    }
                })
            //load storeNguoi
            var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
                storeNguoi.load({})
            var storeNguoiPhanCong=Ext.getStore('vcb.store.NguoiPhanCongStore');
                storeNguoiPhanCong.load({//tìm tên người cập nhật
                    params:{
                        CONGVIECID:data.CONGVIECID
                    },
                    callback: function(records, operation, success) {
//                        storeNguoi.load({})
//                       if(records.length!=0){
//                           for(var i=0;i<records.length;i++){
//                               var index=storeNguoi.find('NGUOIID',records[i].data.NGUOIID)
////                               console.log(index);
//                               storeNguoi.removeAt(index)
//                           }
//                       }
                    }
                })
             var storeYKien=Ext.getStore('vcb.store.YKienViecStore');
                storeYKien.load({//tìm tên người cập nhật
                    params:{
                        CONGVIECID:data.CONGVIECID
                    },
                    callback: function(records, operation, success) {
//                       if(records.length!=0){
//                           for(var i=0;i<records.length;i++){
//                               var index=storeNguoi.find('NGUOIID',records[i].data.NGUOIID)
//                               storeNguoi.removeAt(index)
//                           }
//                       }
                    }
                })
       }
    },
    show_Note:function (a,data){
        var show_Note = Ext.create('Ext.window.Window', {
//            closable: true,
            maximizable: true,
            height: 200,
            width: 400,
            title:'Nội dung báo cáo',
            modal: true,
            id: 'show_Note',
            itemId:'show_Note',
//            layout: 'fit',
//            autoScroll:true,
            items: [
                {
                    xtype:'textfield',
                    margin:'5 5 5 5',
                    width      : 350,
                    height: 100,
                    fieldLabel:'Nội dung',
                    hidden:true,
                    flex:1,
                    itemId:'yKienId',
                    name:'yKienId'
                },
                {
                    xtype:'textarea',
                    margin:'5 5 5 5',
                    width      : 350,
                    height: 100,
                    fieldLabel:'Nội dung',
                    flex:1,
                    itemId:'noiDung',
                    name:'noiDung'
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
                            text:'lưu',
                            icon:'./resources/img/Save.png',
                            handler:function (){
                                var noiDung=this.up('#show_Note').down('#noiDung').getValue()
                                var congViecId=data.getValues().congViecId;
                                var nguoiId=App.Session.getNguoiID();
                                var yKienId=this.up('#show_Note').down('#yKienId').getValue()
                                Core.themYKienServlet(congViecId,nguoiId,noiDung,function(options,success,response){
                                    if (success) {//kiem tra ket noi thanh cong khong 
                                        response = Ext.decode(response.responseText);
                    //                    console.log(response.data[0]);
                                        if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
                                            Ext.Msg.alert("Thông báo","Lưu thành công");
                                            var storeYKien=Ext.getStore('vcb.store.YKienViecStore');
                                            storeYKien.load({//tìm tên người cập nhật
                                                params:{
                                                    CONGVIECID:congViecId
                                                }
                                            })
                                            show_Note.close();
                                        }else{
                                            Ext.Msg.alert("Thông báo",response.ResponseName);
                                            show_Note.close();
                                        }
                                    }
                                    else {//ket noi khong thanh cong 
                                        Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                        show_Note.close();
                                    }
                                });

                            }
                        },
                        {
                            xtype:'button',
                            margin:'5 5 5 5',
                            text:'thoát',
                            handler:function (){
                                show_Note.close();
                            }
                        }
                    ]
                }
            ],
            hayghe:function (a){
                var me=this;
                if(a=1){// thêm mới
                    consol.log('vao đấy: ');
                }else{//cập nhật
                    
                }           
            }   
        }
        );
        show_Note.show();
    }
});




