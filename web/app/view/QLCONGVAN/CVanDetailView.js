Ext.define('vcb.view.QLCONGVAN.CVanDetailView', {
    extend:'Ext.tab.Panel',
    border:false,
    width:'100%',
//    padding:10,
    xtype:'CVanDetailView',
    itemId:'CVanDetailView',
    bodyStyle:'background-color: white',
//    layout:'fit',
//    autoScroll: true,
    requires:[
        'vcb.view.QLCONGVAN.CVanListView'
//        'vcb.view.QLCONGVAN.CVanDetailView'
    ],
    config:{
        items:[
            {
                title:'Công văn',
                items:[
                    {
                        xtype:'fieldset',
                        margin:'5 5 5 5',
//                        padding:10,
                        title:'Danh sách công văn',
                        items:[
                            {
                                xtype:'CVanListView'
                            }
                        ]
                    },
                    {
                        xtype:'fieldset',
                        margin:'5 5 5 5',
//                        padding:10,
                        title:'Thông tin chi tiết công văn',
                        items:[
                            {
                                xtype:'container',
                                layout:'hbox',
                                items:[
                                    {
                                        xtype:'textfield',
                                        name:'soCVan',
                                        itemId:'soCVan',
                                        anchor:'100%',
                                        margin:'5 5 0 5',
                                        flex:1.1,
                                        labelWidth:125,
                                        fieldLabel:'Số công văn'
                                    },
                                    {
                                        xtype:'combobox',
                                        displayField: 'name',
                                        margin:'5 5 5 5',
                                        fieldLabel:'loại công văn',
                                        flex:0.9,
//                                        labelWidth:125,
                                        editable:false,
                                        valueField: 'id',
                                        value:0,
                                        store : {
                                            fields: ['id', 'name'],
                                            data:
                                                [
                                                    {"id":0, "name":"Chọn loại công văn"},
                                                    {"id":2, "name":"CV Chuyên môn"},
                                                    {"id":3, "name":"CV Đảng"},
                                                    {"id":4, "name":"CV Đoàn"}
                                                ]
                                        }
                                    },
                                    {
                                        xtype:'textfield',
                                        name:'soThuTu',
                                        itemId:'soThuTu',
                                        anchor:'100%',
                                        flex:1,
                                        margin:'5 5 0 5',
                                        labelWidth:125,
                                        fieldLabel:'Số thứ tự'
                                    }
                                ]
                            },
                            {
                                xtype:'container',
                                layout:'hbox',
                                items:[
                                    {
                                        xtype:'textareafield',
                                        name:'nDCVan',
                                        itemId:'nDCVan',
                                        labelWidth:125,
                                        flex:2,
                                        fieldLabel:'Nội dung công văn',
                                        anchor:'100%',
                                        margin:'5 5 0 5'
                                     },
                                     {
                                         xtype:'container',
                                         flex:1,
                                         layout:'vbox',
                                         anchor:'100%',
                                         items:[
                                             {
                                                xtype:'datefield',
                                                name:'ngayCVanDen',
                                                itemId:'ngayCVanDen',
                                                labelWidth:125,
                                                flex:1,
                                                fieldLabel:'Ngày công văn đến',
                                                editable:false,
                                                anchor:'100%',
                                                margin:'5 5 0 5'
                                             },
                                             {
                                                xtype:'datefield',
                                                name:'ngayTrenCVan',
                                                itemId:'ngayTrenCVan',
                                                labelWidth:125,
                                                flex:1,
                                                editable:false,
                                                fieldLabel:'Ngày trên công văn',
                                                anchor:'100%',
                                                margin:'5 5 0 5'
                                             }
                                         ]   
                                     }
                                ]
                            },
                            {
                                xtype: 'filefield',
                                name: 'duongDan',
                                fieldLabel: 'Đường dẫn',
                                labelWidth: 125,
                                anchor:'100%',
                                margin:'5 5 0 5',
                                msgTarget: 'side',
                                allowBlank: false,
                                anchor: '100%',
                                buttonText: 'Chọn file',
                                listeners:{
                                    change: function (  me, value, eOpts) {
                                        //kiem tra ten file có tiếng việt không.==========================
                                        var mangchu = new Array('à','á','ạ','ả','ã','â','ầ','ấ','ậ','ẩ','ẫ','ă','ằ','ắ','ặ','ẳ','ẵ'
                                                ,'À','Á','Ạ','Ả','Ã','Â','Ầ','Ấ','Ậ','Ẩ','Ẫ','Ă','Ằ','Ắ','Ặ','Ẳ','Ẵ'
                                                ,'è','é','ẹ','ẻ','ẽ','ê','ề','ế','ệ','ể','ễ','È','É','Ẹ','Ẻ','Ẽ','Ê','Ề','Ế','Ệ','Ể','Ễ'
                                                ,'ì','í','ị','ỉ','ĩ','Ì','Í','Ị','Ỉ','Ĩ'
                                                ,'ò','ó','ọ','ỏ','õ','ô','ồ','ố','ộ','ổ','ỗ','ơ','ờ','ớ','ợ','ở','ỡ'
                                                ,'Ò','Ó','Ọ','Ỏ','Õ','Ô','Ồ','Ố','Ộ','Ổ','Ỗ','Ơ','Ờ','Ớ','Ợ','Ở','Ỡ'
                                                ,'ù','ú','ụ','ủ','ũ','ư','ừ','ứ','ự','ử','ữ','Ù','Ú','Ụ','Ủ','Ũ','Ư','Ừ','Ứ','Ự','Ử','Ữ'
                                                ,'ỳ','ý','ỵ','ỷ','ỹ','Ỳ','Ý','Ỵ','Ỷ','Ỹ','đ','Đ','-');
                                        var i=mangchu.length-1;
                                        var kt=-1;
                                        for(i;i>=0;i--){
                                            if(value.search(mangchu[i])!=-1){
                                                kt=value.search(mangchu[i])//gán vi tri ky tu không hợp lệ
                                                i=-1;// kết thúc vòng lặp 
                                            }
                                        }
                                        if(kt!=-1){//không hợp lệ
                                                Ext.Msg.alert("Thông báo","Tên có ký tự không hợp lê: -->"+value.substr(kt-5,10));
                                        }else{//hợp lệ
                                            if(value.search('.pdf')== -1){
                                                me.setValue('');
                                                Ext.Msg.alert("Thông báo","Không hỗ trợ file có định dạng này");
                                            }else{
                                                me.up('#CVanDetailView').down('#nDCVan').setValue(value.substring(12, value.search('.pdf')))
                                            }
                                        }
                                       //===================================================================================================
                                       //Lấy số công văn
//                                       console.log(value.search('vv'));
                                       if(value.search('vv') != -1){// tìm thấy vv
                                           me.up('#CVanDetailView').down('#soCVan').setValue(value.substring(12, value.search('vv')))
                                       }
                                    }  
                                }
                            },
//                            {
//                               xtype:'textareafield',
//                               name:'nDCVan',
//                               itemId:'nDCVan',
//                               labelWidth:125,
//                               fieldLabel:'Nơi gửi',
//                               anchor:'100%',
//                               margin:'5 5 0 5'
//                            },
//                            {
//                               xtype: 'fieldcontainer',
//                               fieldLabel: 'Chuyển các phòng',
//                               labelWidth:125,
//                               margin:'5 5 0 5',
//                               defaultType: 'checkboxfield',
//                               items: [
//                                   {
//                                       boxLabel  : 'Ban giám đốc',
//                                       name      : 'topping',
//                                       inputValue: '1',
//                                       id        : 'checkbox1'
//                                   }, 
//                                   {
//                                       boxLabel  : 'Phòng Khách hàng',
//                                       name      : 'topping',
//                                       inputValue: '2',
//                                       checked   : true,
//                                       id        : 'checkbox2'
//                                   }, 
//                                   {
//                                       boxLabel  : 'Phòng KTTTDV',
//                                       name      : 'topping',
//                                       inputValue: '3',
//                                       id        : 'checkbox3'
//                                   },
//                                   {
//                                       boxLabel  : 'Phòng HCNSNQ',
//                                       name      : 'topping',
//                                       inputValue: '4',
//                                       id        : 'checkbox4'
//                                   }
//                               ]
//                            }
                        ]
                    },
                    {             
                        xtype: 'button',
                        text: 'OK',
                        margin:'5 5 0 0',
                        cls:'search',
                        handler:function(){
//                            if(App.Session.isGS1==1){
//                                this.up('ProductSearchView').down('#companyGtin').setValue(this.up('ProductSearchView').down('#company_prefix').getValue());
//                            }else this.up('ProductSearchView').down('#companyGtin').setValue(App.Session.getCompany_prefix_select_login());
//                            var form = this.up('form');
//                            form.Search(form.getValues());
                        }
                     }
            
                ]
            },
            
//            {
//                xtype:'tabpanel',
//                items:[
//                    {
//                        xtype:'fieldset',
//                        title:'Danh sách công văn',
//                        items:[
//                            {
//                                xtype:'CVanListView'
//                            }
//                        ]
//                    }
//                ]
//            },
            
//            {
//                xtype:'textfield',
//                name:'dsc',
//                itemId:'dsc',
//                fieldLabel:'Mô tả',
//                labelWidth:125,
//                anchor:'100%',
//                margin:'5 5 0 5'
//            },
//            {
//                xtype:'textfield',
//                name:'sku',
//                itemId:'sku',
//                fieldLabel:'SKU',
//                labelWidth:125,
//                anchor:'100%',
//                margin:'5 5 0 5'
//            },
//            {
//                xtype:'combobox',
//                name:'status',
//                itemId:'status',
//                fieldLabel:'Trạng thái',
//                labelWidth:125,
//                anchor:'100%',
//                margin:'5 5 0 5',
//                store:[
//                    ['-1','Tất cả'],
//                    ['1','Hiệu lực'],
//                    ['0','Vô hiệu lực']
//                ],
//                emptyText :'Tất cả/Hiệu lực/Vô hiệu lực'
//            },
//            {
//                xtype:'textfield',
//                name:'companyGtin',
//                labelWidth:125,
//                itemId:'companyGtin',
//                hidden:true
//            },
            
            {             
               xtype: 'button',
               text: 'OK',
               margin:'15 5 0 0',
               cls:'search',
               handler:function(){
                   if(App.Session.isGS1==1){
                       this.up('ProductSearchView').down('#companyGtin').setValue(this.up('ProductSearchView').down('#company_prefix').getValue());
                   }else this.up('ProductSearchView').down('#companyGtin').setValue(App.Session.getCompany_prefix_select_login());
                   var form = this.up('form');
                   form.Search(form.getValues());
               }
            }
            
          ]             
    },
})


