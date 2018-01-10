Ext.define(('vcb.controller.Function'), {
    extend: 'Ext.util.Observable',
    alternateClassName: 'App.controller.Function',
    singleton: true,
    config:{
        tam:null
    },
    CtrlC: function(key){
        if(key==66){
            App.controller.Function.setTam(66);
        }
        if(App.controller.Function.getTam()==66){
            if(key==16){
                App.controller.Function.setTam(0);
                return 1;
            }
        }else return 0;
        
    }
});


