option = {
    color: '#ffc400',
    //backgroundColor: '#00199',//整个绘图背景色
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },

    xAxis: [{
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: { //让x轴左边的数显示为正数
            show: false,
            formatter: function(v) {
                return v > 0 ? v : -v;
            }
        }
    }],

    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            color: "#000"
        },
        data: ['女', '男']
    }],
    series: [{
            name: '男',
            type: 'bar',
            barWidth: "40px",
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    color: '#000',
                    position: 'bottom'
                }
            },
            data: [450, '']
        },
        {
            name: '女',
            type: 'bar',
            barWidth: "40px",
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'bottom',
                    color: '#000',
                    formatter: function(params) {
                        return -params.value
                    }
                }
            },
            data: ['', -210]
        }
    ]
};