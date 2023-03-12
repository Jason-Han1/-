var colors=['#f36119','#ff9921','#20c8ff','#2cb7ff','#1785ef'];
var url='https://q.cnblogs.com/Images/qdigg.gif';
option = {
    title:{
        text:'eweew',
    },
    
    backgroundColor:'#ffffff',
    color:colors,
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "cross",
            "label": {
                "backgroundColor": "red"
            },
            "lineStyle": {
                "color": "#9eb2cb"
            } 
        }
    },
   
    "legend": {
        show:false,
        "top": "top",
        "left": "2%",
        "textStyle": {
            "color": "#000"
        },
        "itemHeight": 2,
        "data":  ['意向','方案','商务','即将成交','赢单']
    },
    "grid": {
        "top": 20,
        "left": "2%",
        "right": 20,
        "bottom": 30,
        "containLabel": true,
        "borderWidth": 0.5
    },

    series: [
        {
            top:0,
            type: 'funnel',
            left: '10%',
            width: '80%',
            gap: 16,
            minSize: 150,
            maxSize: 410,
            label: {
                show: true,
                position: 'inside',
                formatter: '{b}  ({c}万)'
            },
            data: [
                {value: 100, name: '意向'},
                {value: 80, name: '方案'},
                {value: 60, name: '商务'},
                {value: 40, name: '即将成交'},
                {value: 20, name: '赢单'},
              
            ]
        },
        
        {
            top:0,
            type: 'funnel',
            left: '10%',
            width: '80%',
            gap: 16,
            z:1,
            minSize: 150,
            maxSize: 150,
            label: {
                normal: {
                    color: '#000000',
                    position: 'right',
                    backgroundColor:'#f6f7fc',
                    borderColor:'#f6f7fc',
                    borderWidth :1,
                    borderRadius :4,
                    padding :[11,25],
                    width:100, 
                //   formatter:function(d){
                //         var ins='{bb|}'+d.percent+'{aa|}';
                //         // ins+='{boximg| }';
                //         return ins
                       
                //     },
                    // rich:{
                    //     aa:{
                    //         backgroundColor:{image:url},
                    //         align: 'center',

                    //     },
                    //     bb:{
                    //         align: 'center',
                    //     }
                      
                    // }

                   
                }
              
            },
            //右侧的百分比显示的地方
            labelLine: {
                show:true,
                normal: {
                    length: 200,
                    position: 'center',
                    lineStyle: {
                        width: 1,
                        color:'#e8e9f1',
                        type:'solid'
                        
                    },
                },
              
            }, 
            //主体是透明的
             itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth:0,
                    opacity: 1
                }
            },
            data: [
                {value: 100, name: '意向'},
                {value: 80, name: '方案'},
                {value: 60, name: '商务'},
                {value: 40, name: '即将成交'},
                {value: 20, name: '赢单',labelLine:{show:false},label:{show:false}},
              
            ]
        }
    ]
};
