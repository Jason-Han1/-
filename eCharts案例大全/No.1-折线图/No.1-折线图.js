var databar = [40,40,40,40,40,40,40,40,40,40,40,40]
let xLabel = ['1','2', '3', '4', '5', '6', '7', '8','9','10','11','12']
option={
    backgroundColor:'rgb(17,51,35)',
    grid: {
        width:410,
        height:220,
        top: '10%',
        left: '20%',
        right: '0%',
        bottom: '0%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        align: "left",
        right: '10%',
        top:'10%',
        type:'plain',
        textStyle:{
            color:'#ffffff',
            fontSize:16
        },
        icon:'rect',
        itemGap:25,
        itemWidth: 20,
        itemHeight: 8,

        data: [
            {
                name: '2021'
            },
            {
                name: '2020'
            },
             {
                name: '2019'
            },
            {
                name: '2018'
            }
        ]
    },
    grid: {
        top: '15%',
        left: '20%',
        right: '10%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap:false ,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: false,
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                 color: 'rgb(98,127,115)',
                padding: 16,
                fontSize: 14
            },
            formatter: function(data) {
                return data
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgb(37,71,55)',
            },
        },
        axisTick: {
            show: false,
        },
        data: xLabel
    }],
    yAxis:[{
        name: "MW",
        triggerEvent: true,
        nameTextStyle: {
            color: "rgb(98,127,115)",
            fontSize: 12,
            padding: [0,0,0,-50]
        },
        min:0,
        max:40,
        interval:10,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#192a44'
            },
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "rgb(77,83,141)",
                width:4
            }

        },
        axisLabel: {
            show: true,
            textStyle: {
                color: 'rgb(98,127,115)',
                verticalAlign: 'top',  //看这里
                align:'left',//看这里
                //调整文字上右下左
                padding: [0,0,0,-30],//看这里
                    },
        },
        axisTick: {
            show: false,
        },
       
    }],
    series: [
        {
            name: '柱图',
            type: 'bar',
            barWidth: '60%',
            data: databar,
            itemStyle: {
            normal: {
                color: 'rgba(35,69,55,.5)'
                
            }
            },
            tooltip: {
                show: false,
            },
            legend:{
                show:false,
            }
        },
        {
        name: '2021',
        type: 'line',
        smooth: false,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,188,10, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255,188,10, 0.3)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(255,188,10)',
                borderColor: 'rgba(255,188,10,0.27)',
                borderWidth: 12

            }
        },
        data: [16, 20, 18, 17, 22, 22, 23, 28, 32, 25, 22, 20]
    }, 
    {
        name: '2020',
        type: 'line',
        smooth: false,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1,231,230, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1,231,230, 0.3)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(1,231,230)',
                borderColor: 'rgba(1,231,230,0.2)',
                borderWidth: 12

            }
        },
        data: [22, 25, 18, 14, 16, 15, 18, 16, 17, 18, 16, 15]
    }, 
    {
        name: '2019',
        type: 'line',
        smooth: false,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(252,122,42, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(252,122,42, 0.3)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(252,122,42)',
                borderColor: 'rgba(252,122,42,0.2)',
                borderWidth: 12
            }
        },
        data: [18, 22, 16, 13, 15, 14, 17, 15, 16, 17, 15, 14]
    },
    {
        name: '2018',
        type: 'line',
        smooth: false,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(114,136,127, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(114,136,127, 0.3)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(114,136,127)',
                borderColor: 'rgba(2114,136,127,0.2)',
                borderWidth: 12
            }
        },
        data: [15, 18, 15, 12, 14, 13, 16, 14, 15, 16, 14, 13]
    },
    
    ],
}
