option = {
    backgroundColor: '#000',
    grid: {
        top: '100',
        right: '40',
        left: '60',
        bottom: '40' //图表尺寸大小
    },
    legend: {
        // 修改legend的高度宽度
        itemHeight: 8,
        itemWidth: 8,
        data: [{
                name: '报名',
                icon: 'rect' // ledend的icon
            },
            {
                name: '上课',
                // icon: 'rect'
            }
        ],
        textStyle: {
            color: '#B4B4B4'
        },
        top: '7%',
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['7点', '8点', '9点', '10点', '11点', '12点', '13点', '14点'],
        axisLabel: {
            margin: 10,
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        axisLabel: {
            formatter: '{value}',
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
            }
        }
    }],
    series: [{
        type: 'bar',
        name:"报名",
        data: [40, 80, 50, 36, 30, 35, 40, 60],
        barWidth: '16px',
        itemStyle: {
            normal: {
                color: "#6d0809",
                barBorderRadius: [30, 30, 0, 0] //圆角大小
            },
        },
    }, {
        data: [40, 60, 40, 36, 30, 35, 40, 60],
        type: 'line',
        smooth: true,
        name: '上课',
        symbol: 'none',
        lineStyle: {
            color: '#cc8512',
            width: 3,
            shadowColor: 'rgba(255, 255,255, 0.3)', //设置折线阴影
            shadowBlur: 15,
            shadowOffsetY: 20,
        }
    }]
};