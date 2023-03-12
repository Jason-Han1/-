option = {
    grid: {
        bottom: 150,
        top: 100
    },
    dataZoom: [
        {
            type: 'slider',
            height: 8,
            show: true,
            showDataShadow: false,
            backgroundColor: '#f3f5f7',
          
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            handleSize: '200%',
            borderWidth: 0,
            borderColor: '#fff',
            start: 10,
            top: 420,
            fillerColor: {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 1,
                y2: 0,
                colorStops: [
                    {
                        offset: 0,
                        color: '#64d0f7' // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#2987f6' // 100% 处的颜色
                    }
                ],
                globalCoord: false // 缺省为 false
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        show: false,
        snap: true,
        triggerOn: 'mousemove',
        backgroundColor: '#fff',
        textStyle: {
            color: '#56595e'
        },
        formatter: function(param) {
            let domString = '';
            for (let i in params) {
                domString += `  <div class="value">
                                    <div class="fake-icon" style="background: ${
                                        params[i].color
                                    }"></div>
                                    <div class="value-Wrap">
                                        <div class="value-num">
                                            ${params[i].value}
                                        </div>
                                        <div class="value-label">
                                        ${params[i].seriesName}
                                        </div>
                                    </div>
                            </div>`;
            }
            return `<div class="custom-tooltip">
                        <div class="fake-Triangle">

                        </div>
                    <div class="cata">${params[0].name}</div>
                    <div class="value-wrap">
                      ${domString}
                    </div>
                </div>`;
        },
        // position:function (point:any, params:any, dom:any, rect:any, size:any) {
        //     console.log(params)
        // },
        axisPointer: {
            show: true,
            type: 'cross',
            snap: true,
            crossStyle: {
                color: '#999',
                width: 0
            },
            label: {
                show: false
            }
        },
        extraCssText: 'box-shadow: 0 0 18px 0 #E2E8F1;'
    },
    color: ['#25f4c0', '#17c5fe', '#5A86FF', '#E467FC'],
    legend: {
        right: '5%',
        top: 40,
        data: ['蒸发量', '降水量', '平均温度', '湿度', '干燥度']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#BEC7CE'
            },
            axisLine: {
                lineStyle: {
                    color: '#eef2f6',
                    shadowColor: '#fefefe',
                    shadowBlur: 3
                }
            },
            data: [
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月'
            ],
            axisPointer: {
                show: true,
                z: 0,
                type: 'shadow',
                shadowStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#fff' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#E5F0FF' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    }
                },
                label: {
                    show: true,
                    backgroundColor: '#fff',
                    color: '#495056',
                    borderWidth: 0,
                    shadowBlur: 0
                },
                lineStyle: {
                    width: 0,
                    opacity: 0
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: true,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml',
                color: '#a8abae'
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eef2f6',
                    shadowColor: '#fefefe',
                    shadowBlur: 3
                }
            }
        }
    ],
    animation: true,
    series: [
        {
            name: '蒸发量',
            type: 'line',
            //barWidth:12,
            symbol: 'circle',
            itemStyle: {
                color: '#ffc53e'
            },
            lineStyle: {
                color: '#ffc53e',
                shadowColor: '#fdf4de',
                shadowBlur: '5',
                shadowOffsetX: '0',
                shadowOffsetY: '8'
            },
            silent: true,
            showSymbol: false,
            stack: '总量',
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#fef7e8' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#fff' // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                }
            },
            data: [
                2.0,
                4.9,
                7.0,
                23.2,
                25.6,
                76.7,
                135.6,
                162.2,
                32.6,
                20.0,
                6.4,
                3.3
            ]
        },
        {
            name: '降水量',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            showSymbol: false,
            silent: true,
            lineStyle: {
                color: '#25f4c0',
                shadowColor: '#d2fbf4',
                shadowBlur: '5',
                shadowOffsetX: '0',
                shadowOffsetY: '8'
            },
            areaStyle: {
                color: '#e4fefd'
            },
            data: [
                2.6,
                5.9,
                9.0,
                26.4,
                28.7,
                70.7,
                175.6,
                182.2,
                48.7,
                18.8,
                6.0,
                2.3
            ]
        },
        {
            name: '平均温度',
            type: 'line',
            stack: '总量',
            showSymbol: false,
            symbol: 'circle',
            silent: true,
            lineStyle: {
                color: '#17c5fe',
                shadowColor: ' #95e4ff',
                shadowBlur: '5',
                shadowOffsetX: '0',
                shadowOffsetY: '8'
            },
            areaStyle: {
                color: '#d2f4ff'
            },
            data: [
                2.0,
                2.2,
                3.3,
                4.5,
                6.3,
                10.2,
                20.3,
                23.4,
                23.0,
                16.5,
                12.0,
                6.2
            ]
        },
        {
            name: '湿度',
            type: 'line',
            stack: '总量',
            showSymbol: false,
            symbol: 'circle',
            silent: true,
            lineStyle: {
                color: '#5A86FF',
                shadowColor: '#cfe2fe',
                shadowBlur: '5',
                shadowOffsetX: '0',
                shadowOffsetY: '8'
            },
            areaStyle: {
                color: '#97C9FA'
            },
            data: [
                2.0,
                2.2,
                3.3,
                4.5,
                6.3,
                10.2,
                20.3,
                23.4,
                23.0,
                16.5,
                12.0,
                6.2
            ]
        },
        {
            name: '干燥度',
            type: 'line',
            stack: '总量',
            showSymbol: false,
            symbol: 'circle',
            silent: true,
            lineStyle: {
                color: '#E467FC',
                shadowColor: '#f6dcfd',
                shadowBlur: '5',
                shadowOffsetX: '0',
                shadowOffsetY: '8'
            },
            areaStyle: {
                color: '#fdf5ff'
            },
            data: [
                2.0,
                2.2,
                3.3,
                4.5,
                6.3,
                10.2,
                20.3,
                23.4,
                23.0,
                16.5,
                12.0,
                6.2
            ]
        }
    ]
};