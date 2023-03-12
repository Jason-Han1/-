var data = [{
            ny: "1月",
            bl: 50,
        },
        {
            ny: "2月",
            bl: 40,
        },
        {
            ny: "3月",
            bl: 20,
        },
        {
            ny: "4月",
            bl: 10,
        },
        {
            ny: "5月",
            bl: 0,
        },
        {
            ny: "6月",
            bl: 11,
        },
        {
            ny: "7月",
            bl: 100,
        },
        {
            ny: "8月",
            bl: 33,
        }
    ];
var xData = [],
    yData = [];
var seriesdata_bj=[];

data.map(function(a, b) {
    xData.push(a.ny);
    if (a.bl === 0) {
        yData.push({name:a.ny,value:a.bl});
    } else {
       yData.push({name:a.ny,value:a.bl});
    }
    seriesdata_bj.push(100);
});

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        // formatter: function(prams) {
        //     if (prams[0].data === min) {
        //         return "合格率：0%"
        //     } else {
        //         return "合格率：" + prams[0].data + "%"
        //     }
        // }
    },
    dataZoom: [ //给x轴设置滚动条
        {
            // start: 0, //默认为0
            // end: 100 - 1500 / 31, //默认为100
             startValue:0,
             endValue:11,
            type: 'slider',
            show: true,
            orient:"horizontal",
            xAxisIndex: [0],
            handleSize: 0, //滑动条的 左右2个滑动条的大小
            height: 12, //组件高度
            left: 50, //左边的距离
            right: 40, //右边的距离
            bottom: 0, //右边的距离
            handleColor: '#99ADC7', //h滑动图标的颜色
            handleStyle: {
                borderColor: "#99ADC7",
                borderWidth: "0",
                shadowBlur: 0,
                background: "#FFF",
                shadowColor: "#ddd",
            },
            fillerColor: '#99ADC7',//选中范围的填充颜色
            borderColor: "#DBDBDB",//边框颜色
            backgroundColor: '#FFF', //两边未选中的滑动条区域的颜色
            showDataShadow: false, //是否显示数据阴影 默认auto
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
            handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
            filterMode: 'filter',
        },
        
    ],
    legend: {
        data: ['使用率', '总比'],
        show: false
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '7%',
        height: '85%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            show: true,
             color: 'black',
             rotate:60
        }
    }],
    yAxis: [{
            type: 'value',
            name:"",
            nameTextStyle:{
              color:"rgb(170,170,170)"  
            },
            max:100,
            min:0,
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            axisLabel: {
                color: 'black',
                formatter: '{value}%'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: 0,
            max: 100,
            splitNumber: 12,
            splitLine: {
                show: false
            },
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
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
    ],
    series: [{
            name: '使用率',
            type: 'bar',
            barWidth: '30px',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#0286ff'
                            }
                        ]
                    )
                }
            },
            data: yData,
            zlevel: 11

        },
        {
            name: '总比',
            type: 'bar',
            barWidth: '30px',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-100%',
            data:seriesdata_bj, 
            itemStyle: {
                normal: {
                    color: '#C8C8C8',
                     barBorderRadius: 30,
                }
            },
            zlevel: 9
        },
      
    ]
};

