var data = [{
            month: "临时用电",
            value: 30,
        },

        {
            month: "登高作业",
            value: 15,
        },

        {
            month: "抽堵盲板",
            value: 12,
        },

        {
            month: "破土作业",
            value: 18,
        },

        {
            month: "破土作业",
            value: 13,
        },



    ];
var xData = [],
    yData = [];
var min = 50; 
data.map(function(a, b) {
    xData.push(a.month);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
option = {
    backgroundColor:"#111c4e",
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(prams) {
            if (prams[0].data === min) {
                return "活动分析：0%"
            } else {
                return "活动分析：" + prams[0].data 
            }
        }
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
             show: false
        },
        axisLine: {
             show: false,
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            show: true,
             color: 'rgb(170,170,170)',
             fontSize:16
        }
    }],
    yAxis: [{
            type: 'value',
            // name:"单位:户",
            nameTextStyle:{
              color:"rgb(170,170,170)"  
            },
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            // min: min,
            // max: 100,
            axisLine: {
                show: false,
                
            },
            axisLabel: {
                color: 'rgb(170,170,170)',
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
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
        }
    ],
    series: [
         {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#69F95A ',
                        },
                        {
                            offset: 1,
                            color: '#6DF95A',
                        },
                    ]),
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 6,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [40, 13],
            symbolPosition: 'start',
            symbolOffset: [0, -1],
            data:yData,
            width: 25,
            z: 0,
            zlevel: 8,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [100, 100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },
      
    ]
};

