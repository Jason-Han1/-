option = {
    backgroundColor: "#f8f4ed",
    title:{
        text:'四色嵌入百分比堆积面积图',
        left:'40%',
         textStyle: {
            color: "#f00",
            fontSize: 20
        }
    },
    legend: {
        data: ['项目1', '项目2', '项目3', '项目4'],
        icon:'square',
        bottom:'0%',
        textStyle: {
            color: "#000",
            fontSize: 16
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: { //  改变x轴颜色
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变x轴字体颜色和大小
            textStyle: {
                color: "#000",
                fontSize: 16
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#fff'],
                width: 1,
                type: 'solid'
            }
        },
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',
        axisLine: { //  改变y轴颜色
            show: false,
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            formatter: '{value}%', //  给y轴添加单位
            textStyle: {
                color: "#000",
                fontSize: 16
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#fff'],
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [
        {
        type: 'line',
        smooth: false,
        symbol: 'square',
        symbolSize: 0,
        markPoint: {
            symbol: "circle"
        },
        data: [100,100,100,100,100,100,100],
        name: '项目4',
        itemStyle: {
            
            normal: {
                color: "#d05056",
                borderColor: "#d05056",
                borderWidth: 0
            }
        },
        lineStyle: {
            
            normal: {
                width: 0,
                color: "#DB335A",
                shadowColor: "#DB335A",
                shadowBlur: 0
            }
        },
        areaStyle: {
            color: '#D54148'
        }
    },
        
    {
        type: 'line',
        smooth: false,
        symbol: 'square',
        symbolSize: 0,
        markPoint: {
            symbol: "circle"
        },
        data: [80, 82, 75, 73, 88, 93, 80],
        name: '项目3',
        itemStyle: {
            normal: {
                color: "#9C7E0A",
                borderColor: "#F4C907",
                borderWidth: 0
            }
        },
        lineStyle: {
            normal: {
                width: 0,
                color: "#F4C907",
                shadowColor: "#F4C907",
                shadowBlur: 0
            }
        },
        areaStyle: {
            color: '#f2eae5'
        }
    }, 
    
     {
        type: 'line',
        smooth: false,
        symbol: 'square',
        symbolSize: 0,
        markPoint: {
            symbol: "circle"
        },
        data: [50, 62, 50, 55, 59, 57,60],
        name: '项目2',
        itemStyle: {
            normal: {
                color: "#0C7E5C",
                borderColor: "#17D8A1",
                borderWidth: 0
            }
        },
        lineStyle: {
            normal: {
                width: 0,
                color: "#17D8A1",
                shadowColor: "#17D8A1",
                shadowBlur: 0
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0.5,
                    color: '#fce2a9' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#fce2a9' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    },
    
    {
        type: 'line',
        smooth: false,
        symbol: 'circle',
        symbolSize: 0,
        markPoint: {
            symbol: "circle"
        },
        name: '项目1',
        data: [30, 40, 35, 30, 25, 20, 50],
        itemStyle: {
            normal: {
                color: "#294E8F",
                borderColor: "#3D7EEB",
                borderWidth: 0
            }
        },
        lineStyle: {
            normal: {
                width: 0,
                color: "#327BFA",
                shadowColor: "#327BFA",
                shadowBlur: 0
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0.5,
                    color: 'rgba(61,126,235,0.5)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(61,126,235,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    },
    
    
    
    ]
};