option = {
    backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '10%',
        right: '5%',
        left: '5%',
        bottom: '5%',
        containLabel:true
    },
    xAxis: [{
        type: 'category',
        data: ['制造业', '建筑业', '农林牧渔', '房地产', '金融业', '居民服务及其他'],
        axisLine: {
            lineStyle: {
                color: '#2F4BA8'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
        // name: '单位：万元',
        nameTextStyle:{
            align:'right'
        },
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,1)'
            }
        },
        splitLine: {
            
            lineStyle: {
                type:'dashed',
                color: 'rgba(255,255,255,0.12)'
            }
        },

    }],
    series: [{
        type: 'bar',
        data: [5000, 2600, 1300, 1300, 1250, 1500],
        barWidth: '20px',
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }],
            symbolSize: 0,
            label: {
                show: false
            },
            lineStyle: {
                type:'datted',
                color:'#3196FA'
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#437DFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#8D41FF' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 30, 30],
                // shadowColor: 'rgba(0,160,221,1)',
                // shadowBlur: 4,
            }
        },
        label: {
            normal: {
                show: true,
                fontSize:16,
                lineHeight: 20,
                width: 80,
                height: 20,
                backgroundColor: '#2F4BA8',
                borderRadius: 200,
                position: 'top',
                offset:[20,0],
                distance: 20,
                formatter: [
                    '    {d|●}',
                    ' {a|{c}}     \n',
                    '    {b|}'
                ].join(''),
                rich: {
                    d: {
                        color: '#38C474',
                    },
                    a: {
                        color: '#fff',
                        align: 'center',
                    },
                    b: {
                        width: 1,
                        height: 20,
                        borderWidth: 1,
                        borderColor: '#234e6c',
                        align: 'left'
                    },
                }
            }
        }
    }]
};