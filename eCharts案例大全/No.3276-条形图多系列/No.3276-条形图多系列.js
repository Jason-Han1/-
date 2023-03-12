option = {
    backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['接入率', '在线率', '完好率'],
        align: 'right',
        right: 10,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 35
    },
dataZoom:[{
      type:'inside',
      start: 50,
      end: 100,
      orient: 'vertical',
  }],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
       splitLine: {
           show:false,
            lineStyle: {
                color: "#063374",
            }
        },
    }],
    yAxis: [{
        type: 'category',
        axisLabel: {
            show:true,
            //formatter: '{value} %'
        },
        axisTick: {
            show: true,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            show:true,
            lineStyle: {
                color: "#063374",
            }
        },
        data: ['喀什市',
            '疏附县',
            '疏勒县',
            '英吉沙县',
            '泽普县',
            '岳普湖县',
            '巴楚县',
            '伽师县',
            '叶城县',
            '莎车县 ',
        ],
    }],
    series: [{
        name: '接入率',
        type: 'bar',
        data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66],
        barWidth: 10, //柱子宽度
        barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#008cff'
                }, {
                    offset: 1,
                    color: '#005193'
                }]),
                opacity: 1,
            }
        }
    }, {
        name: '在线率',
        type: 'bar',
        data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46],
        barWidth: 10,
        barGap: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#00da9c'
                }, {
                    offset: 1,
                    color: '#007a55'
                }]),
                opacity: 1,
            }
        }
    }, {
        name: '完好率',
        type: 'bar',
        data: [70, 48, 73, 68, 53, 47, 50, 72, 96, 86],
        barWidth: 10,
        barGap: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#c4e300'
                }, {
                    offset: 1,
                    color: '#728400'
                }]),
                opacity: 1,
            }
        }
    }]
};