var dataArr = [{
    value: 25,
    name: '火灾事件'
}];
var color = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        offset: 0,
        color:  'rgba(135,21,21,1)' // 0% 处的颜色
    },
    {
        offset: 1,
        color: 'rgba(255,103,103,1)' // 100% 处的颜色
    }
]);
var color1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        offset: 0,
        color:  'rgba(255,103,103, 0)' // 0% 处的颜色
    },
    {
        offset: 1,
        color: 'rgba(255,103,103,1)' // 100% 处的颜色
    }
]);
var color2 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [
    {
        offset: 1,
        color: 'rgba(255,103,103,1)' // 100% 处的颜色
    },
    {
        offset: 0,
        color:  'rgba(0, 0, 0, 0)' // 0% 处的颜色
    }
    
]);
var colorSet = [
    [0.25, color],
    [1, 'rgba(0, 97, 226, 0.1)']
];
var colorSet1 = [
    [1, color1],
];
var rich = {
    white: {
        fontSize: 40,
        color: '#fff',
        fontWeight: '500',
        fontFamily: 'DINBold',
        padding: [360, 0, 0, 0]
    },
    bule: {
        fontSize: 60,
        fontFamily: 'DINBold',
        color: 'rgba(255,103,103,1)',
        padding: [260, 0, 20, 0],
    },
    radius: {
        fontSize: 100,
        color: 'rgba(255,103,103,1)',
        textAlign: 'center',
        padding: [100, 0, 100, 0],
    }
}
option = {
    backgroundColor: '#0E1327',
    series: [
        {
            type: 'gauge',
            name: '内层辅助',
            radius: '58%',
            startAngle: '225',
            endAngle: '-45',
            pointer: {
                show: false
            },
            detail: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet1,
                    width: 3
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'gauge',
            radius: '70%',
            startAngle: '225',
            endAngle: '-45',
            pointer: {
                show: false
            },
            detail: {
                formatter: function(value) {
                    const data = dataArr[0]
                    return '{radius|'+data.value+'}\n{bule|' + 
                    data.value + '%}\n{white|'+data.name+'}';
                },
                rich: rich,
                "offsetCenter": ['0%', "10%"],
            },
            data: dataArr,
            title: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet,
                    width: 48,
                    // shadowBlur: 5,
                    // shadowColor: '#fff',
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            },
        },
    ]
};