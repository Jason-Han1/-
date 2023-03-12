yName = [
    '学前教育',
    '初等教育',
    '语文教育',
    '英语教育',
    '音乐教育',
    '美术教育',
    '体育教育',
    '数学教育',
    '汉语',
    '环境艺术设计',
    '建筑经济管理',
    '会计与审计',
    '涉外旅游',
    '老年服务与管理',
    '护理',
    '康复治疗技术',
    '计算机教育',
    '科学教育',
]
data = [
    [13, 23, 34, 45, 15, 13, 23, 34, 45, 15, 13, 23, 34, 45, 15, 34, 45, 15],
    [68, 69, 65, 70, 74, 68, 69, 65, 70, 74, 68, 69, 65, 70, 74, 68, 69, 65]
]

option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',

        },
        textStyle: {
            // color: 'rgba(0, 186, 255, 1)'
        },
        formatter: function(params) {
            console.log(params)
            return params[0].name + '<br/>' + params[0].seriesName + ' : ' + params[0].value + '%<br/>' + params[1].seriesName + ' : ' + params[1].value + '%<br/>'
        }

    },
    // backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: 'rgba(111, 132, 189, 1)'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: yName
    }, ],
    series: [{
            name: '学位授予',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 30, 30, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(101, 105, 255, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 192, 240, 1)'
                    }]),
                },
            },
            barWidth: 20,
            data: data[0]
        },
        {
            name: '总人数',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: data[1],
            itemStyle: {
                normal: {
                    color: '#15497B',

                    opacity: 0.3,
                    barBorderRadius: [0, 30, 30, 0],
                }
            },
        },
    ]
};