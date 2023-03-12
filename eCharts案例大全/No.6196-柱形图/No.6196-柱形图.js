const img = "/asset/get/s/data-1599036857057-CXTCW0JiG.png";

option = {
    backgroundColor: '#040c28',
    color: ['#081542'],
    tooltip: {
        trigger: 'item'

    },
    grid: {
        left: '3%', //整个曲线居左的距离
        right: '4%', //整个曲线居右左的距离
        bottom: '10%', //整个曲线居下左的距离
        height: '70%', //整个曲线的高
        containLabel: true
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                color: '#707070'
            },

            axisLabel: {
                textStyle: {
                    fontSize: 14,
                    color: '#597faa'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#00FF00'
                }
            },
            data: ['2016.8', '2017.8', '2018.8', '2019.8', '2020.8'],
        },

    ],
    yAxis: [{
        type: 'value',
        name: '',
        nameTextStyle: {
            fontSize: 14, //文字大小
            color: '#ebf8ac' //文字颜色
        },
        axisLine: {
            // 坐标轴轴线相关设置
            show: false
        },
        axisTick: {
            // 坐标轴刻度
            show: false
        },
        axisLabel: {
            show: true,
            // formatter: "{value} %", //左侧单位添加后缀
            textStyle: {

                color: '#597faa' //Y轴的数据字体颜色
            },
        },
        splitLine: {
            show: true, //网格线显示
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,.2)'
            }
        },

    }, ],
    series: [

        {
            name: '',
            type: 'bar',
            barWidth: '50', //柱状图宽度
            data: [12, 32, 12, 32, 32],
            barCategoryGap: "60%",
            symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(12, 24, 67, 0.1)"
                        },
                        {
                            offset: 0.5,
                            color: "rgba(12, 24, 67, 0.5)"
                        },
                        {
                            offset: 1,
                            color: "#051342"
                        }
                    ])
                }
            },
            label: {
                normal: {
                    show: true,
                    position: ['50%', '0%'],
                    textStyle: {
                        color: "#fff",
                        fontSize: 16,
                        align: 'center'
                    },
                    formatter: (val) => {
                        return [
                            val.data,
                            '{img|}'
                        ].join('\n')
                    },

                    rich: {
                        img: {
                            backgroundColor: {
                                image: img
                            },
                            height: 40
                        }
                    }

                }
            },
        }
    ]
};