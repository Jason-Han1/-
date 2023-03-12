var dataArr = [{
    value: 91,
    name: '所占比例'
}];
var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#5CF9FE' // 0% 处的颜色
    },
    {
        offset: 0.17,
        color: '#468EFD' // 100% 处的颜色
    },
    {
        offset: 0.9,
        color: '#468EFD' // 100% 处的颜色
    },
    {
        offset: 1,
        color: '#5CF9FE' // 100% 处的颜色
    }
]);
var colorSet = [
    [0.9, color],
    [1, '#fff']
];
var rich = {
    white: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '500',
        padding: [-150, 0, 0, 0]
    },
    bule: {
        fontSize: 120,
        fontFamily: 'DINBold',
        color: '#fff',
        fontWeight: '700',
        padding: [-120, 0, 0, 0],
    },
    radius: {
        width: 350,
        height: 80,
        // lineHeight:80,
        borderWidth: 1,
        borderColor: '#fff',
        fontSize: 50,
        color: '#fff',
        backgroundColor: '#1B215B',
        borderRadius: 20,
        textAlign: 'center',
    },
    size: {
        height: 400,
        padding: [100, 0, 0, 0]
    }
}
option = {
    backgroundColor: '#0E1327',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },

    series: [

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
                    var num = Math.round(value);
                    return '{bule|' + num + '}{white|%}' + '{size|' + '}';
                },
                rich: rich,
                "offsetCenter": ['0%', "0%"],
            },
            data: dataArr,
            title: {
                show: true,
                color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 30,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet,
                    width: 25,
                    // shadowBlur: 15,
                    // shadowColor: '#B0C4DE',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1
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
        { //内圆
            type: 'pie',
            radius: '56%',
            center: ['50%', '50%'],
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgb(4, 8, 13)'
                            }, {
                                offset: 1,
                                color: 'rgb(68, 123, 205)'
                            }])
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false
            },
            data: [100],
        },
    ]
};