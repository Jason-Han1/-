var plantCap = [{
    name: 'PM10',
    value: '20'
}, {
    name: 'PM2.5',
    value: '15'
}, {
    name: '噪音',
    value: '11'
}, {
    name: '风力',
    value: '69'
}, {
    name: '温度',
    value: '39'
}, {
    name: '湿度',
    value: '47'
}, {
    name: '臭氧',
    value: '57'
}];
var myColor = ['#33FFCC', '#33CCFF',  'cyan','#34da62','#d0a00e', '#d0570e', '#eb3600'];
var datalist = [{
    offset: ['50%', '40%'],
    opacity: .95,
    color: '#f467ce'
}, {
    offset: [65, 50],
    opacity: .88,
    color: '#7aabe2'
}, {
    offset: [20, 43],
    opacity: .84,
    color: '#ff7123'
}, {
    offset: [83, 30],
    opacity: .8,
    color: '#ffc400'
}, {
    offset: [36, 20],
    opacity: .75,
    color: '#5e333f'
}, {
    offset: [64, 10],
    opacity: .7,
    color: '#6b3442'
}, {
    offset: [75, 75],
    opacity: .68,
    color: '#8a3647'
}, {
    offset: [88, 62],
    opacity: .6,
    color: '#68333f'
}];
var datas = [];
for (var i = 0; i < plantCap.length; i++) {
    var item = plantCap[i];
    var itemToStyle = datalist[i];
    datas.push({
        name: item.name, 
        value: item.value,
        symbolSize: item.value,
        symbolOffset:[(item.value)/25,itemToStyle.offset[1]],
        label: {
            show:true,
            normal: {
                textStyle: {
                    fontSize: 12
                }
            }
        },
        itemStyle: {
            normal: {
                color: myColor[i],
                opacity: itemToStyle.opacity
            }
        },
    })
}
option = {
    tooltip: {
        trigger: 'item',
        formatter:function(params){
            return params.name +':'+ params.value
        }
    },
    grid: {
        show: true,
        top: 10,
        bottom: 10
    },
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        show: true,
        nameLocation: 'middle',
        nameGap: 5
    }],
    yAxis: [{
        gridIndex: 0,
        show: true,
        nameLocation: 'middle',
        nameGap: 30
    }],
    series: [
    //     {
    //     type: 'scatter',
    //     symbol: 'circle',
    //     symbolSize: 100,
    //     label: {
    //         normal: {
    //             show: false,
    //             formatter: '{b}',
    //             color: '#fff',
    //             textStyle: {
    //                 fontSize: '20'
    //             }
    //         },
    //     },
    //     itemStyle: {
    //         normal: {
    //             color: '#00acea'
    //         }
    //     },
    //     data: datas
    // },
    // {
    //         name: '党组织',
    //         geoIndex: 0,
    //         type: 'effectScatter',
    //         legendHoverLink: true,
    //         coordinateSystem: 'polar',
    //         zlevel: 2,
    //         rippleEffect: {
    //             brushType: 'stroke'
    //         },
    //         symbolSize:12,
    //         showEffectOn: 'render',
    //         itemStyle: {
    //             normal: {
    //                 color: '#46bee9'
    //             }
    //         },
    //         data: datas
    //     }
    
    {
                name: 'light',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                // effectType: 'ripple',
                data: datas,
                symbolSize: 100,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: myColor
                    }
                }
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'cartesian2d',
                data: datas,
                symbolSize: 100,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                // itemStyle: {
                //     normal: {
                //         color: '#25f4a6',
                //         shadowBlur: 10,
                //         shadowColor: '#05C3F9'
                //     }
                // },
                zlevel: 1
            }
    ]
};