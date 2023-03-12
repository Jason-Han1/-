var obj = {
    "seriesData": [{
        "name": "最大值",
        "value": [12, -22, 32, 21]
    }, {
        "name": "最小值",
        "value": [-1, 2, -3, 1]
    }, {
        "name": "出力最大环比",
        "value": [12, -12, 23, 34]
    }],
    "xAxisData": ["2016", "2017", "2018", "2019"]
}



//legend角标
var optionLegendData = [];
var optionSeriesData = [];
for (var i = 0; i < obj.seriesData.length; i++) {
    switch (obj.seriesData[i].name) {
        case '最大值':
            optionLegendData.push("最大值");
            optionSeriesData.push({
                name: '最大值',
                type: 'line',
                //smooth:true,
                itemStyle: {
                    normal: {
                        color: '#14E5A4'
                    }
                },
                data: obj.seriesData[i].value,
                showSymbol: false,
            });
            break;
        case '最小值':
            optionLegendData.push('最小值');
            optionSeriesData.push({
                name: '最小值',
                type: 'line',
                //smooth:true,
                itemStyle: {
                    normal: {
                        color: '#0197D9'
                    }
                },
                data: obj.seriesData[i].value,
                showSymbol: false,
            })
            break;
        case '出力最大环比':
            optionLegendData.push('出力最大环比');
            optionSeriesData.push({
                name: '出力最大环比',
                type: 'bar',
                yAxisIndex: 1,
                barMaxWidth: '40px',
                itemStyle: {
                    normal: {
                        color: '#EEA028'
                    }
                },

                data: obj.seriesData[i].value,
                markLine: {
                    data: [{
                        yAxis: 0,
                    }, ]
                }

            })
            break;


    }
}



option = {

    tooltip: {
        trigger: 'axis',

    },
    legend: {
        data: optionLegendData,
        textStyle: {
            color: '#BEC0C3',
            fontSize: 16,
            fontFamily: '微软雅黑'
        },
        top: '5%',
        icon: 'rect'
    },
    grid: {
        left: 'center',
        bottom: '5%',
        width: '90%',
        height: "75%",
        containLabel: true
    },
    xAxis: {
        type: 'category',
        //                        boundaryGap : false,
        data: obj.xAxisData,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#BEC0C3',
                width: 1, //这里是为了突出显示加上的
            }
        },

        axisLabel: {
            textStyle: {
                color: '#BEC0C3',
                fontSize: 16
            },
            interval: 'auto'
        }
    },
    yAxis: [{
            type: 'value',
            name: '单位：万千瓦',
            nameTextStyle: {

                fontSize: 16
            },
            scale: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#BEC0C3',
                    width: 1, //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#BEC0C3',
                    fontSize: 16
                }
            },

            splitLine: {
                lineStyle: {
                    color: "#313E4B"
                }
            }
        },
        {
            type: 'value',
            name: '单位：%',
            nameTextStyle: {

                fontSize: 16
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#BEC0C3',
                    width: 1, //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#BEC0C3',
                    fontSize: 16
                }
            },
            splitLine: {
                show: false
            }
        },

    ],
    series: optionSeriesData,

};