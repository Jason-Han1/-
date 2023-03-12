var data1=[29,31,31,25,29,26,33,34,34,28,34,32,33,35,33,38];
var data2= [10,5,15,6,6,6,7,13,14,5,6,11,15,12,10,11];
var data3=[60,73,70,69,71,72,54,54,72,61,79,72,71,79,66];
option = {
    backgroundColor: '#ffffff',
    title:{
        left:'left'
    },
    legend: {
        top: 30,
        left:30,
        textStyle: {
            color: '#000000',
        },
        data: ['检查企业数','违法违规企业数','完成整改企业数']
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
        max:40,
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
            },formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 5;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr=params.substring(0,4);
                    newParamsName = tempStr+"...";// 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }
        },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000000',
                }
            },data: ['南宁市局', '武鸣区局', '横县局', '宾阳县局', '上林县局', '上林县局'
        , '隆安县局','兴宁区分局', '江南区分局', '青秀区分局', '西乡塘区分局', '邕宁区分局',
        '良庆区分局','东盟开发区',
        '南宁高新技术产业开发区','南宁经济技术开发区']


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
        ,'贵港市局','玉林市局','百色市局','贺州市局','河池市局','来宾市局','崇左市局']
}

    ],
    series: [{
            name: '检查企业数',
            type: 'bar',
            barWidth : 8,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#24b7b9',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data:data1
        },{
            name: '违法违规企业数',
            type: 'bar',
            barWidth : 8,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#EE7621',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: data2
        },
        {
            name: '违法违规率',
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
                value: data2[0],
                name: '违法违规企业数',

                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            fontSize: 12
                        }
                    }
                }
            }, {
                value: data1[0] - data2[0],
                name: '未违法违规企业数',

                label: {
                    normal: {
                        formatter: '\违法违规率',
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
            name: '检查企业数',
            type: 'bar',
            barWidth : 8,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#24b7b9',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data:data1
        },{
            name: '违法违规企业数',
            type: 'bar',
            barWidth : 8,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#EE7621',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: data2
        },
        {
            name: '违法违规率',
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
                value: data2[dataIndex],
                name: '违法违规企业数',

                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            fontSize: 12
                        }
                    }
                }
            }, {
                value: data1[dataIndex] - data2[dataIndex],
                name: '未违法违规企业数',

                label: {
                    normal: {
                        formatter: '\违法违规率',
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