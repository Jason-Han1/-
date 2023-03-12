var data= [{
                "name": "温度设备",
                "value": 95,
                
            }, {
                "name": "流速设备",
                "value": 12,
                
            }, {
                "name": "流向设备",
                "value": 12,
                
            }, {
                "name": "流向设备",
                "value": 12,
                
            }]
var count=0

option = {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    title:{
        x: 'center',
        y: '40%',
        text:'告警总数',
        subtext:'107',
        itemGap:6,
        textStyle:{
            color:'#fff',
            fontSize:'10',
        },
        subtextStyle: {
            color: '#fffa6f',// 副标题文字颜色
            fontSize:'20',
            fontWeight:'800'
        }
    },
    
    legend: {
        bottom: "5",
        center:'0',
        textStyle: {
            color: '#fff',
            fontSize: 10,
        },
        itemWidth:15,  //图例标记的图形宽度
        itemHeight:5, //图例标记的图形高度
        itemGap:10,
        data: data,
    },
    series: [
        // 主要展示层的
        {
            radius: ['54%', '60%'],
            center: ['50%', '50%'],
            selectedMode: 'single',
            selectedOffset: 5,
            type: 'pie',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 10
                    },
                    formatter: "{b} : {c}"
                },
                emphasis: {
                    show: true
                },
                
                
            },
            labelLine: {
                normal: {
                    show: true,
                    length:15,
                    length2:18
                },
                emphasis: {
                    show: true
                },
            },
            animation: false,
            data: data
        },
        {
            radius: ['55%', '70%'],
            center: ['50%', '50%'],
            type: 'pie',
            color: ['#3c13a8', '#4d59e6'],
            selectedMode: 'single',
            selectedOffset: 5,
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                    formatter: "{b} : {c} /{d}%"
                },
                emphasis: {
                    show: false
                },
                
                
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                },
                lineStyle:{
                        colorStops: [{
                        offset: 0, color: '#fff' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#fff' // 100% 处的颜色
                    }],
                }
            },
            animation: false,
            data: [{
                "name": "未处理",
                "value": 90,
                itemStyle: {
                    normal: {
                        color: 'rgba(32,219,253,.06)'
                    }
                }
            }, {
                "name": "已处理",
                "value": 10,
                itemStyle: {
                    normal: {
                        color: 'rgba(255,250,111,.06)'
                    }
                }
            }]
        },
        
        // 边框的设置
        
        // 中心的圆圈
        {
            radius: ['38%', '44%'],
            center: ['50%', '50%'],
            type: 'pie',
            selectedMode: 'single',
            selectedOffset: 5,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                "name": "未处理",
                "value": 90,
                itemStyle: {
                    normal: {
                        color: 'rgba(32,219,253,0.3)'
                    }
                }
            }, {
                "name": "已处理",
                "value": 10,
                itemStyle: {
                    normal: {
                        color: 'rgba(255,250,111,0.3)'
                    }
                }
            }],
            animation: false
        },
    ]
};
function eConsole() {
    // var r = count % data.length;
    // option.series[0].data[r].selected = false;
    // option.series[1].data[r].selected = false;
    // option.series[2].data[r].selected = false;
    // count++;
    // var s = count % data.length;
    // option.series[0].data[s].selected = true;
    // option.series[1].data[s].selected = true;
    // option.series[2].data[s].selected = true;
    
    myChart.setOption(option, true);
}
myChart.on("click", eConsole);