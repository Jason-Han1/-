function randomData() {
    return Math.round(Math.random()*1000);
}

option = {
    title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: {
        type:'piecewise',
        min: 0,
        max: 2500,
        splitNumber: 5,
        left: 'left',
        top: 'bottom',
        calculable: true,
        seriesIndex:0
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: 'iphone5',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '北京',value: randomData() },
                {name: '天津',value: randomData() },
                {name: '上海',value: randomData() },
                {name: '广东',value: randomData() },
                {name: '台湾',value: randomData() },
                {name: '香港',value: randomData() },
                {name: '澳门',value: randomData() }
            ]
        },
        {
            name:"test",
            type:'pie',
            center:['30%','40%'],
            radius:[0,30],
            data:[{
                name:"12",
                value : 10,
                itemStyle:{normal:{
                    color:'blue',
                    opacity:0.5
                }
            }
            },{
                name:"24",
                value : 20,
                itemStyle:{normal:{
                    color:'blue',
                }
                    
                }
            }]
        },
        {
            name:"test",
            type:'pie',
            center:['70%','50%'],
            radius:[0,20],
            data:[{
                name:"12",
                value : 10,
                itemStyle:{normal:{
                    color:'blue',
                    opacity:0.5
                }
            }
            },{
                name:"24",
                value : 20,
                itemStyle:{normal:{
                    color:'blue',
                }
                    
                }
            }]
        }
    ]
};