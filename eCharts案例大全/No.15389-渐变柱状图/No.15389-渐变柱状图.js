app.title = '坐标轴刻度与标签对齐';

option = {
    backgroundColor: '#192469',
    color: ['#ffffff'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#17367c'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        icon: 'rect',
        itemWidth: 8,
        itemHeight: 5,
        itemGap: 13,
        data: ['移动', '电信', '联通'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#57617B'
        }
    },
    xAxis: [{
        type: 'category',
        data: ['OPPO', 'Vivo', 'Xiaomi', 'Huawei', 'Honor', 'Samsung', 'Meizu', 'Gionee', 'Eebbk', 'Lenovo'],
        axisLine: {
            lineStyle: {
                color: '#99dcff',
                
            }
        },
         axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12
            }
        },
    }],
    yAxis: [{
        type: 'value',
        name: '单位（万）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#99dcff'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                color: '#17367c'
            }
        },
         splitNumber: 7,
         max: 60000000
    }],
    series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '42px',
            data: [45437125, 26829253, 14868485, 13892419, 8630643, 4820595, 4223906, 1824265, 1192023,1133297]
        },

    ],
    label: {
        normal: {
            show: true,
            position: 'top',
            formatter: '{c}',
            color:'#08ecf2'
        }
    },
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(8, 236,242, 1)'
            }, {
                offset: 1,
                color: 'rgba(6, 172,237,1)'
            }]),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            barBorderRadius: [21, 21,0, 0],
            shadowBlur: 10
        }
    }
};