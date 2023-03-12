var maxData = 400;
var myData = ['大栅栏', '天安门', '故宫', '景山', '北海公园', '后海', '什刹海', '西单', '玉渊潭', '中央电视塔', '东单', '王府井', '南锣鼓巷', '工体', '潘家园', '琉璃厂'];
var databeast = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153]
let color = "#00c7dc";
let splitLine = "#11263e";
let fontSize = 30;
option = {
    backgroundColor: "#030115",
    tooltip: {
        show: true,
        textStyle:{
            fontSize
        }
    },
    grid: {
        bottom: '5%'
    },
    xAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            margin: 8,
            textStyle: {
                color: '#fff',
                fontSize,
            },

        },
        data: myData,
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        //y轴分割线
        axisTick: {
            show: false,
        },
        position: 'center',
        //y轴标签
        axisLabel: {
            show: true,
            color: color,
            fontSize: fontSize
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: splitLine,
                width: 1,
                type: 'solid',
            },
        },
    },
    series: [{

            type: 'bar',
            barWidth: '50%',
            barGap: '-100%',
            data: databeast,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(45,218,244,.8)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(23,74,141,.8)'
                            }
                        ]
                    ),
                    barBorderRadius: [30, 30, 0, 0]
                },
            },
            // backgroundStyle: {
            //     shadowColor: 'rgba(0, 0, 0, 1)',
            //     shadowBlur: 50
            // },
            zlevel: 9
        },
        {
            // full data
            type: 'pictorialBar',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'rgba(12,41,107,.9)'
                }
            },
            label: {
                normal: {
                    show: false,
                    formatter: function(params) {
                        return (params.value);
                    },
                    position: "top",
                    // offset: [80, -80],
                    textStyle: {
                        color: 'rgba(2,191,138,1)',
                        fontSize: 0
                    }
                }
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '60%',
            symbol: 'rect',
            symbolSize: [50, 8],
            symbolBoundingData: 400,
            data: databeast,
            z: 1,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        },



    ],
};