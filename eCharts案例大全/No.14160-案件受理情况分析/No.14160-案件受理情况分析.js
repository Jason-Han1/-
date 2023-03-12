options = [{
    backgroundColor:'#ffffff',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    series: [
        {
            name:'数量占比',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['42%', '45%'],
            color: ['#915872', '#3077b7', '#9a8169', '#3f8797','#5b8144','#307889'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
               
            },
            tooltip: {
               show:false,
               
               
            },
            
            data:[{value:3533, name:''},
                {value:3233, name:''},
                {value:3433, name:''},
                {value:3333, name:''},
                {value:3233, name:''},
                {value:3333, name:''},
                {value:3333, name:''},
                {value:3333, name:''},
                {value:3333, name:''},
                {value:3333, name:''},
                {value:3333, name:''},
                {value:3333, name:''},
                {value:3333, name:''},
                {value:3333, name:''}
               ]
        },
        {
            name:'数量占比',
            type:'pie',
            radius: ['45%', '85%'],
            color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b',' #f17677','#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b','#f17677'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
           /*  data: ['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','钦州市','防城港市',
        '北海市','梧州市','桂林市','柳州市','南宁市']*/
        
            data:[{value:3533, name:'崇左市'},
                {value:3233, name:'来宾市'},
                {value:3433, name:'河池市'},
                {value:3333, name:'贺州市'},
                {value:3233, name:'百色市'},
                {value:3333, name:'玉林市'},
                {value:3333, name:'贵港市'},
                {value:3333, name:'钦州市'},
                {value:3333, name:'防城港市'},
                {value:3333, name:'北海市'},
                {value:3333, name:'梧州市'},
                {value:3333, name:'桂林市'},
                {value:3333, name:'柳州市'},
                {value:3333, name:'南宁市'}
               ]
        }
    ]
},
{
    backgroundColor:'#ffffff',
    title: {
        text: 'ECharts2 vs ECharts1',
        subtext: 'Chrome下测试数据'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [
            '生产合格', '流通合格', '餐饮合格', '',
            '生产不合格', '流通不合格', '餐饮不合格'
        ]
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    // calculable : true,
    //grid: {y: 70, y2:30, x2:20},
    xAxis: [{
            type: 'category',
            data: ['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','钦州市','防城港市',
        '北海市','梧州市','桂林市','柳州市','南宁市']
        },
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','钦州市','防城港市',
        '北海市','梧州市','桂林市','柳州市','南宁市']
        }
    ],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
            name: '生产不合格',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0,104,139,1)',
                     label: {
                        show: false,
                        position: 'tooltip',
                        textStyle: {
                            color: '#ffffff'
                        }
                    }
                }
            },
            data: [40, 155, 95, 75, 0]
        },
        {
            name: '流通不合格',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(34,139,34,1)',
                    label: {
                        show: false,
                        position: 'tooltip',
                        textStyle: {
                            color: '#ffffff'
                        }
                    }
                }
            },
            data: [100, 200, 105, 100, 156,100, 200, 105, 100, 156,100, 200, 105, 100]
        },
        {
            name: '餐饮不合格',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(238,64,0,1)',
                    label: {
                        show: false,
                        position: 'tooltip',
                        textStyle: {
                            color: '#ffffff'
                        }
                    }
                    
                }
            },
            data: [906, 911, 908, 778, 0,906, 911, 908, 778, 0,906, 911, 908, 778]
        },
        {
            name: '生产合格',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(0,104,139,0.5)',
                     label: {
                        show: false,
                        position: 'tooltip',
                        textStyle: {
                            color: '#ffffff'
                        }
                    }
                }
            },
            data: [96, 224, 164, 124, 0,96, 224, 164, 124, 0,96, 224, 164, 124]
        },
        {
            name: '流通合格',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(34,139,34,0.5)',
                    label: {
                        show: false,
                        position: 'tooltip',
                        textStyle: {
                            color: '#ffffff'
                        }
                    }
                }
            },
            data: [491, 1310, 389, 955, 347,491, 1310, 389, 955, 347,491, 1310, 389, 955]
        },
        {
            name: '餐饮合格',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(238,64,0,0.5)',
                    label: {
                        show: false,
                        position: 'tooltip',
                        textStyle: {
                            color: '#ffffff'
                        }
                    }
                    
                }
            },
            data: [1231, 2100, 1654, 2131, 0,1231, 2100, 1654, 2131, 0,1231, 2100, 1654, 2131]
        }
    ]
}
]