let arr = ['拆迁任务','管线拆迁','绿化迁改','交通疏导']
option = {
    title:{
        text:'已完成任务类型和数量统计',
        left:'center',
        textStyle:{
            fontSize:12
        }
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            console.log(params)
            return params[0].name + '：' + params[0].data
        }
    },
    legend: {
        data: ['总数', '已处理', '未处理'],
        x: 'left',
        y: 'bottom',
        left: 45,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 30,
        textStyle: {
            color: '#a7a7a7',
            fontSize: 12
        },
        icon: 'circle'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: arr,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#a7a7a7',
                type: 'dashed'
            }
        },
        axisLabel: {
            formatter: '{value}',
            color: '#a7a7a7',
            fontSize: 12
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#a7a7a7'
            }
        },
        axisLabel: {
            formatter: '{value}',
            color: '#a7a7a7',
            fontSize: 12
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#a7a7a7',
                type: 'dashed'
            }
        },
        max: 12
    },
    series: [{
        name: '',
        type: 'bar',
        barWidth: '10',
        data: [5, 6, 8, 3],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0.3,
                    color: 'rgba(84,232,215,1)'
                }, {
                    offset: 1,
                    color: 'rgba(30,208,188,1)'
                }], false),
                barBorderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0.3,
                    color: 'rgba(132,222,255,1)'
                }, {
                    offset: 1,
                    color: 'rgba(76,208,255,1)'
                }], false),
                barBorderRadius: [5, 5, 0, 0]
            }
        }
    }]
};