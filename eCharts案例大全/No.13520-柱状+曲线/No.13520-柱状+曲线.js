option = {
legend: {
        itemHeight: 20,
        textStyle: {
            "fontSize": 15
        },
        data: [
            '数量', '完成率'

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
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['韶关',
            '珠海',
            '汕头',
            '佛山',
            '江门',
            '湛江',
            '茂名',
            '肇庆',
            '惠州',
            '梅州',
            '汕尾',
            '河源',
            '阳江',
            '清远',
            '东莞',
            '中山',
            '潮州',
            '揭阳',
            '云浮'
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
                 "fontSize": 28 //单位大小
            }
        },
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        //name: '数量',
        axisLabel: {textStyle: {
                               
                                fontSize: 26
                            },
            formatter: '{value} '
        },

        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: true
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#563374",
            }
        }
    }, {
        type: 'value',
        scale: true,
        minInterval: 1,
      //  name: '完成率',
        splitLine: {
            show: false,
            lineStyle: {
                color: "#563374",
            }
        },
        // 右坐标颜色
        axisLine: {
            show: true,
            lineStyle: {
                color: "#EE7600",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {textStyle: {
                               
                                fontSize: 26
                            },
            formatter: '{value} %'
        }
    }],
    series: [

        {
            name: '数量',
            type: 'bar',
            data: [62, 70, 80, 88, 83, 68, 77, 80, 72, 80, 68, 77, 80, 72, 80, 68, 77, 80, 80],
            //barWidth: 50, //柱子宽度
            //barGap: 1, //柱子之间间距
            //symbol: 'circle',     //设定为实心点
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#87CEFA'
                    }, {
                        offset: 1,
                        color: '#00B2EE'
                    }]),
                    opacity: 1,
                }
            }
        }, {
            name: '完成率',
            type: 'line',
            symbolSize: 10, //折点大小 
            //smooth:true,  //让曲线变平滑的 
            data: [36, 66, 65, 69, 70, 77, 79, 70, 67, 69, 66, 65, 79, 70, 77, 69, 60, 87, 89],
            itemStyle: {
                normal: {
                       lineStyle: {
                            width:4,
                            shadowBlur: 12,
                            shadowOffsetY: 6
                        },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                     
                        color: '#EE7600'
                        
                    }]),
                    opacity: 1,
                }
            },
            label: {
                show: true,
                textStyle: {
                               
                                fontSize: 22
                            },
                position: 'top',
                formatter: '{c} %'
            },
            yAxisIndex: 1,
        }
    ]//http://gallery.echartsjs.com/editor.html?c=xS1-Ufl1k7#code-panel
};