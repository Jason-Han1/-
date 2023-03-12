option = {
     title: {
        text: '各科考试成绩平均分',
        textStyle: {
            fontSize: 25,
            fontWeight: 'normal',
            color: '#fff',
        },
        x: 'center'
    },
    backgroundColor: "#05224d",
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['语文', '数学', '英语', '物理',"化学","生物"],
        axisLabel: {
            margin: 20,
            color: '#999',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: '#d2d2d2',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        min: 0,
        max: 150,
        axisLabel: {
            formatter: '{value}',
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
        data: [103, 107,97,70,74,69],
        barWidth: '50px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF9A22' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FFD56E' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 0, 0],
            }
        },
        label: {
            show: true,
            fontSize: 18,
            fontWeight: 'bold',
            position: 'top',
            color: 'blue',
            formatter: (params)=>{//单独对第一个label使用样式
                if (params.dataIndex === 0) {
                    return '{a|'+params.value+'}'
                } 
            },
            rich: {//使用富文本编辑字体样式
                a: {
                    color: 'red'
                }
            }
        }
    }]
};