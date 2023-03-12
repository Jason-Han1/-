option = {
    backgroundColor: '#011c3a',
    title: {
        //text: '检查企业信息分析'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            //magicType: {show: true, type: ['stack', 'tiled']},
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        textStyle: {
            color: 'white',
        },
        data: ['局部', '区域']
    },

    grid: {
        left: '1%',
        right: '1%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#0177d4'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        },
        data: ["311202工作面", "3-1回风大巷", "311307工作面"],

    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        },
        name: "（MPa）",
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#0177d4'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0177d4'
            }
        },
         max: 0.6,
         min: 0,
    }],
    series: [{
        name: '局部',
        type: 'bar',
        barWidth: '15%',
        itemStyle: {
            normal: {
                color: '#01949B'
            },
        },
        markLine: {
            data: [{ yAxis: 0.36, name: '最大值' }
   ]
        },

        data: [0.21, 0.24, 0.24]
    }, {
        name: '区域',
        barWidth: '15%',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#31CE65'
            },
        },

        data: [0.2, 0.2, 0.25]
    }]
}