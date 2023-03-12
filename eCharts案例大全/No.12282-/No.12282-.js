option = {
    backgroundColor: '#00265f',
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        axisLabel: {
            color: 'rgba(255,255,255,.85)'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.45)",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,.45)",
            }
        }
    }],
    yAxis: [{
        type: 'category',
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
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.45)",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: 'rgba(255,255,255,.85)'
        },
    }],
    series: [{
        type: 'bar',
        data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66],
        //barWidth: 50, //柱子宽度
        //barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#0092e7'
                }, {
                    offset: 1,
                    color: '#01cde6'
                }]),
                opacity: 1,
            }
        },
        label: {
            show: true,
            position: "right",
            color: "#fff",
            fontSize: 20
        }
    }]
};