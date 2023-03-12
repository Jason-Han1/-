const salvProName = ['新疆自治区', '河南省', '浙江省', '湖北省'];
const salvProValue = [239, 181, 154, 144];
const salvProMax = [239, 281, 254, 244];
option = {
    backgroundColor: '#000127',
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return params[0].name + ' : 已完成' + params[0].value + ', 总任务' + params[1].value;
        },
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            data: salvProName,
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
        },
        {
            type: 'category',
            data: salvProValue,
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                },
            },
        },
    ],
    series: [
        {
            name: '指标',
            data: salvProMax,
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            itemStyle: {
                normal: {
                    color: '#d3d7da',
                    barBorderRadius: 30,
                },
            },
        },
        {
            name: '会员数',
            data: salvProValue,
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'rgb(46,200,207,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgb(57,89,255,1)',
                        },
                    ]),
                },
            },
        },
    ],
};
