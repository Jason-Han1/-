data = {
    type: ['要案数', '案件数'],
    xData: ['2018年', '2019年', '2020年', '2021年'],
    type1: [13, 17, 15, 16],
    type2: [212, 352, 316, 256],
    color:['rgba(255, 215, 54, 1)','rgba(21, 219, 203, 1)']
};
option = {
    backgroundColor: '#000',
    tooltip: {
            show: true,
            formatter: function (params) {
                console.log(params)
              let text =
                '<p  style="font-size:16px;font-weight: 400;color:rgba(255, 255, 255, 1);"><span style="display:inline-block;width:10px;height: 10px;background: ' +
                 data.color[params.seriesName=='要案数'?0:1]+ ';border-radius: 50%;margin-right: 10px;"></span>' + params
                .name + '<br>'+params.seriesName+':' + params.data + '件</p>';
                
              return text
            },
            backgroundColor: 'rgba(38, 68, 110, 0.8)',
            padding: 10,
            borderColor: 'rgba(38, 68, 110, 1)',
            textStyle: {
              color: '#fff',
            }
          },
    grid: {
        top: '28%',
        left: '10%',
        right: '9%',
        bottom: '25%',
    },
    legend: {
        align: 'left',
        left: '9%',
        itemWidth: 15,
        itemHeight: 15,
        itemStyle: {
            borderWidth: 1,
        },
        textStyle: {
            padding: [6, 6, 6, 6],
        },
        data: [
            {
                name: data.type[0],
                icon: 'rect',
                textStyle: {
                    color: '#FFFFFF',
                },
                itemStyle: {
                    borderColor: 'rgba(255, 215, 54, 1)',
                    borderWidth: 1,
                },
            },
            {
                name: data.type[1],
                icon: 'rect',
                textStyle: {
                    color: '#FFFFFF',
                },
                itemStyle: {
                    borderColor: 'rgba(21, 219, 203, 1)',
                    borderWidth: 1,
                },
            },
        ],
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 1)',
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 16,
                    color: 'rgba(255, 255, 255, 1)',
                },
            },
            axisTick: {
                show: false,
            },
            data: data.xData,
        },
    ],
    yAxis: {
        max: 500,
        splitNumber: 5,
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#8EEEFF',
                opacity: 0.2,
                type: 'dashed',
            },
        },
    },

    series: [
        {
            name: data.type[0],
            type: 'bar',
            barWidth: '25%',
            data: data.type1,
            label: {
                normal: {
                    show: true,
                    formatter: (params) => {
                        return params.value + '件';
                    },
                    textStyle: {
                        fontSize: 14,
                        fontFamily: 'zcool-gdh',
                        color: 'rgba(255, 215, 54, 1)',
                    },
                    position: 'outside',
                },
                emphasis: {
                    show: true,
                },
            },
            itemStyle: {
                borderColor: 'rgba(255, 215, 54, 1)',
                borderWidth: 1,
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: 'rgba(15, 51, 82, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 215, 54, 1)',
                        },
                    ],
                    false
                ),
            },
        },
        {
            name: data.type[1],
            type: 'bar',
            barWidth: '25%',
            data: data.type2,
            label: {
                normal: {
                    show: true,
                    formatter: (params) => {
                        return params.value + '件';
                    },
                    textStyle: {
                        fontSize: 14,
                        fontFamily: 'zcool-gdh',
                        color: 'rgba(21, 219, 203, 1)',
                    },
                    lineHeight: 30,
                    position: 'top',
                },
                emphasis: {
                    show: true,
                },
            },
            itemStyle: {
                borderColor: 'rgba(21, 219, 203, 1)',
                borderWidth: 1,
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: 'rgba(15, 51, 82, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(21, 219, 203, 1)',
                        },
                    ],
                    false
                ),
            },
        },
    ],
};
