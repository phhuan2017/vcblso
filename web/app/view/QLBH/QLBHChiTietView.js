Ext.define('vcb.view.QLBH.QLBHChiTietView',{
    extend: 'Ext.form.Panel',
    itemId: 'QLBHChiTietView',
    xtype: 'QLBHChiTietView',
    border: false,
    autoScroll:true,
    store: Ext.getStore('vcb.store.CongViecStore'),
    requires:[
        'vcb.view.QLBH.DanhSachViecCBNVView',
        'vcb.view.QLBH.DanhSachViecNhoCBNVView'
    ],
    config:{
        items:[
            {
                xtype:'fieldset',
                margin:'5 5 5 5',
                itemId:'danhSachViet',
                title:'Danh sách việc CBNV',
                flex:1,
                items:[
                    {
                        xtype:'DanhSachViecCBNVView',
                        listeners:{
                            select:function ( me, record, index, eOpts ){
                                var storeCongViecNho = Ext.getStore('vcb.store.CongViecNhoStore');
                                storeCongViecNho.load({// tìm quyền của user
                                    params:{
                                        CONGVIECID:record.data.CONGVIECID
                                    },
                                    callback: function(records, operation, success) {
                                    }
                                })
                            }
                        }
                    }
                ]
            },
            {
                xtype:'fieldset',
                margin:'5 5 5 5',
                itemId:'danhSachViecNho',
                title:'Danh sách việc nhỏ',
                flex:1,
                items:[
                    {
                        xtype:'DanhSachViecNhoCBNVView',
                        listeners:{
                            select:function ( me, record, index, eOpts ){
                                    
                                var form=this.up('#QLBHChiTietView').down('#DanhSachViecCBNVView');
                                form.show_viecNho(record.data);
                                Ext.getCmp('show_viecNho').down('#maViecNho').setValue(record.data.STT);
                                Ext.getCmp('show_viecNho').down('#tenViecNho').setValue(record.data.VIECNHO_TEN);
                                Ext.getCmp('show_viecNho').down('#congViecId').setValue(record.data.CONGVIECID);
                                Ext.getCmp('show_viecNho').down('#trangThaiCongViec').setValue(record.data.VIECNHO_TRANGTHAICONGVIEC);
                                Ext.getCmp('show_viecNho').down('#nguoiTaoViecNho').setValue(record.data.VIECNHO_NGUOITAO);
                                Ext.getCmp('show_viecNho').down('#nguoiCapNhatViecNho').setValue(record.data.VIECNHO_NGUOICAPNHAT);
                                Ext.getCmp('show_viecNho').down('#ngayTaoViecNho').setValue(record.data.VIECNHO_NGAYTAO);
                                Ext.getCmp('show_viecNho').down('#ngayCapNhatViecNho').setValue(record.data.VIECNHO_NGAYCAPNHAT);
                                Ext.getCmp('show_viecNho').down('#tienDoViecNho').setValue(record.data.VIECNHO_TIENDO);
                                Ext.getCmp('show_viecNho').down('#thoiHanHoanThanhViecNho').setValue(record.data.VIECNHO_THOIHANHOANTHANH);
                                Ext.getCmp('show_viecNho').down('#yeuCauCongViec').setValue(record.data.VIECNHO_MOTA);
                                Ext.getCmp('show_viecNho').down('#baoCao').setValue(record.data.VIECNHO_GHICHU);
                            }
                        }
                    }
                ]
            }
        ]
    },
    hayghe: function (data){
        var nguoiId=data.data.NGUOIID;
        var storeCongViec = Ext.getStore('vcb.store.CongViecStore');
        storeCongViec.load({// tìm quyền của user
            params:{
                NGUOIID:nguoiId
            },
            callback: function(records, operation, success) {
            }
        })
    }
});