option = {
    backgroundColor: '#0254a5',
    color: ['#23cbe5'],
    grid: {
        left: '6%',
        bottom: '10%',
        top: '70',
        width: '89%'
    },
    xAxis: {
        type: 'category',
        data: ['学前教育', '小学', '初中', '中职', '普通高中', '高等教育', '特殊教育'],
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                fontSize: 32,
                color: '#fff'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                fontSize: 32,
                color: '#fff'
            }
        }
    },
    series: [

        {
            name: '',
            type: 'scatter',
            data: [
                ["学前教育", 67],
                ['小学', 271],
                ['初中', 59],
                ['中职', 70],
                ['普通高中', 102],
                ['高等教育', 10],
                ['特殊教育', 2]
            ],
            symbolSize: function(data) {
                return Math.sqrt(data[1]) / 0.15;
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fff'
                    }, {
                        offset: 0.7,
                        color: '#81fffa'
                    }, {
                        offset: 1,
                        color: '#11fff6'
                    }], false),
                    borderColor: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#fff'
                    }, {
                        offset: 0.7,
                        color: '#81fffa'
                    }, {
                        offset: 1,
                        color: '#11fff6'
                    }], false),
                    shadowColor: 'rgba255,255,255, 0.5)',
                    shadowBlur: 100
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function(params) {
                        return params.value[1]
                    },
                    color:'#fff',
                    fontSize:22
                }

            }
        }


    ]
};