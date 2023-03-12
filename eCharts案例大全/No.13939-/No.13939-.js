var data1=[44,45,40,49,45,47,46,40,44,43,42,44];
var data2=[60,73,70,69,71,72,54,54,72,61,79,72,71,79,66];
var data3=[10,8,13,8,13,9,14,11,14,15,10,15];

option = {
    backgroundColor: '#ffffff',
    title:{
        left:'left'
    },
    
    grid: {
        left: '3%',
        right: '30%',
        top:75,
         bottom: '50%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis: {
        type: 'value',
        max: 25,
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: true
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },"axisLabel": {
            "interval": 0,
            rotate:40,
            textStyle: {
                fontSize: 10
            }
        },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000000',
                }
            },data: ['武鸣区','西乡塘区','兴宁区','青秀区','江南区','良庆区','邕宁区','隆安县','马山县','上林县','宾阳县','横县']

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
           data: ['区局',  '南宁市局', '柳州市局',  '桂林市局', '梧州市局', 
         '北海市局', '防城港市局', '钦州市局'
        ,'贵港市局','玉林市局','百色市局','贺州市局','河池市局','来宾市局','崇左市']
}

    ],
    series: [{
            name: '到期注销数',
            type: 'bar',
            barWidth : 8,
            
            itemStyle: {
                normal: {
                    show: true,
                    color: '#5793f3',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data:data3
        },
        {
            name: '到期注销率',
            type: 'pie',
            radius: ['10%', '14%'],
            color: ['#ff0000','#00EE76'],
            center: ['73%', '10%'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: data3[0],
                name: '到期注销数',

                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            fontSize: 12
                        }
                    }
                }
            }, {
                value: data1[0] - data3[0],
                name: '其它注销数',

                label: {
                    normal: {
                        formatter: '\到期注销率',
                        textStyle: {
                            color: '#555',
                            fontSize: 10
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#aaa'
                    },
                    emphasis: {
                        color: '#aaa'
                    }
                },
            }]
        }]
};
myChart.on('mouseover', function(params) {
    if (params.componentType === 'series' && params.seriesType === 'bar') {
        var dataIndex = params.dataIndex;
        myChart.setOption({
            series: [{
            name: '吊销注销数',
            type: 'bar',
            barWidth : 8,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#5793f3',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data:data3
        },
        {
            name: '吊销注销率',
            type: 'pie',
            radius: ['10%', '14%'],
            color: ['#ff0000','#00EE76'],
            center: ['73%', '10%'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: data3[dataIndex],
                name: '吊销注销数',

                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            fontSize: 12
                        }
                    }
                }
            }, {
                value: data1[dataIndex] - data3[dataIndex],
                name: '其它注销数',

                label: {
                    normal: {
                        formatter: '\吊销注销率',
                        textStyle: {
                            color: '#555',
                            fontSize: 10
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#aaa'
                    },
                    emphasis: {
                        color: '#aaa'
                    }
                },
            }]
        }]
        })
    }
});