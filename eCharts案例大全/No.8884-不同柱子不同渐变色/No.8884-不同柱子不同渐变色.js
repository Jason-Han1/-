var colorArr = [
    {
        top: '#FF9A22',//黄色
        bottom: '#FFD56E'
    },
    {
        top: '#2750FF',//蓝色
        bottom: '#6AB4FF'
    }
];
option = {
    backgroundColor: '#fff',
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['2016', '2017', '2018', '2019', '2020'],
        axisLabel: {
            margin: 20,
            color: '#999',
            textStyle: {
                fontSize: 18
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
        min: 0,
        max: 100,
        axisLabel: {
            formatter: '{value}%',
            color: '#999',
            textStyle: {
                fontSize: 18
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
        data: [40, 90, 10, 20, 56],
        barWidth: '50px',
        itemStyle: {
            normal: {
                color: function(params) {
                    let num = colorArr.length;
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                        offset: 0,
                        color: colorArr[params.dataIndex % num].top // 0% 处的颜色
                    },{//可根据具体情况决定哪根柱子显示哪种颜色
                        offset: 1,
                        color: colorArr[params.dataIndex % num].bottom // 100% 处的颜色
                    }],false)
                },
                barBorderRadius: [30, 30, 0, 0],
            }
        },
        label: {
            normal: {
                show: true,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333',
                position: 'top',
            }
        }
    }]
};