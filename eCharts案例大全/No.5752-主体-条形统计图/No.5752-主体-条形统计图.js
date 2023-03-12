var data = [1000, 600, 500, 300];
var option = {
    title: {
        text: '',
        subtext: '主题数据库',
        top: '-12px',
        textStyle: {
            fontWeight: 'normal', //标题颜色
            color: '#00d6fd'
        },
        subtextStyle: {
            color: '#00d6fd'
        },
        x: "center"
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    animation: true,

    legend: {
        show: false,
        x: '40%',
        y: '5',
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#1bb4f6'
        }
    },
    grid: {
        left: '2%',
        right: '5%',
        top: '20%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {

        type: 'category',
        axisLabel: {
            color: "#1bb4f6"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#1bb4f6'
            }
        },
        axisTick: {
            show: false,
            alignWithLabel: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#195384'
            }
        },
        data: ["原辅料", "供应", "检验检测", "从业人员"]
    },
    yAxis: {
        name: "",
        type: 'value',
        nameGap: 1,
        nameTextStyle: {
            color: "#1bb4f6",
            padding: [0, 0, 0, 15]
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#1bb4f6"
                //color:'#27b4c2'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0b244c'
            }
        },
        splitNumber: 2

    },
    series: [{
            name: "",
            type: 'pictorialBar',
            symbolSize: [15, 4],
            symbolOffset: [0, -1],
            symbolPosition: 'end',
            z: 12,
            itemStyle: {
                color: "#00d98b"
            },
            data: data
        },

        {
            name: '',
            type: 'pictorialBar',

            symbolSize: [15, 4],
            symbolOffset: [0, 1],
            z: 12,
            itemStyle: {
                color: "#00d98b"
            },
            data: data
        },

        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: "#00d98b",
                    opacity: .5
                }
            },
            barWidth: "30",
            data: data
        }
    ]
};