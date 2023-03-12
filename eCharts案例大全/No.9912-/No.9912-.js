option = { backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8","#FFDB5C",],
    tooltip: {
        show:false,
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        show:false,
        data: ['20M以下','20M-40M','50M-99M','100M-499M','500M-999M','1000M以上']
    },
    series: [
        {
            top:60,
            type: 'funnel',
            left: '-10',
            right:170,
            bottom:50,
            //gap:'auto',
            z:1,
            minSize: 100,
            maxSize: 100,
            sort: 'ascending',
            label: {
                normal: {
                    color: '#000000',
                    position: 'right',
                    padding :[0,0],
                    width:100,
                    formatter: '{c}%',
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
                    length: 150,
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
                {value: 60, name: '20M以下'},
                {value: 40, name: '20M-40M'},
                {value: 20, name: '50M-99M'},
                {value: 80, name: '100M-499M'},
                {value: 100, name: '500M-999M'},
                {value: 120, name: '1000M以上'}
              
            ]
        },
        {
            name: '预期',
            type: 'funnel',
            left: '100',
            right:200,
            sort: 'ascending',
            z:2,
            label: {
                 normal: {
                    position: 'left'
                }
                
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity:1
                }
            },
            data: [
                {value: 60, name: '20M以下'},
                {value: 40, name: '20M-40M'},
                {value: 20, name: '50M-99M'},
                {value: 80, name: '100M-499M'},
                {value: 100, name: '500M-999M'},
                {value: 120, name: '1000M以上'}
            ]
        },
        {
            name: '实际',
            type: 'funnel',
            left: '100',
            right:200,
            maxSize: '100%',
            sort: 'ascending',
            z:3,
            label: {
                show:false,
                normal: {show:false,
                    
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#777'
                    }
                },
                emphasis: {
                    show:false,
                    position:'inside',
                    formatter: ''
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.4,
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            data: [
                {value: 0, name: '20M以下'},
                {value: 0, name: '20M-40M'},
                {value: 0, name: '50M-99M'},
                {value: 0, name: '100M-499M'},
                {value: 0, name: '500M-999M'},
                {value: 120, name: '1000M以上'}
            ]
        }
    ]
};
