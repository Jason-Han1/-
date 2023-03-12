// 颜色值 电工 水泥工 逆时针
var colorList = ['#00CAFF', '#1a57b2', '#0DA7B9', '#005CFF'];
var colorListSub = ['#177E98', 'rgba(26,87,178,.5)', '#125A62', '#122E62'];
var smallCircle = ['#177E98', '#15458c', '#125A62', '#122E62'];
var data = [
    { value: 41, name: '电工' },
    { value: 23, name: '水泥工' },
    { value: 11, name: '搬运工' },
    { value: 9, name: '质量检测' },
];
var rich = {
    a: {
        color: '#fff',
        backgroundColor: colorList[0],
        padding: [2, 20],
        lineHeight: 20,
        fontSize: 16,
        height: 30,
        borderRadius: 15,
    },
    b: {
        color: '#fff',
        backgroundColor: colorList[1],
        padding: [2, 20],
        lineHeight: 30,
        fontSize: 16,
        height: 30,
        borderRadius: 15,
    },
    c: {
        color: '#fff',
        backgroundColor: colorList[2],
        padding: [2, 20],
        lineHeight: 30,
        fontSize: 16,
        height: 30,
        borderRadius: 15,
    },
    d: {
        color: '#ffffff',
        backgroundColor: colorList[3],
        padding: [2, 20],
        lineHeight: 30,
        fontSize: 14,
        height: 30,
        borderRadius: 15,
    },
    pera: {
        color: '#ffffff',
        backgroundColor: colorListSub[0],
        padding: [2, 15],
        lineHeight: 20,
        fontSize: 14,
        height: 20,
        borderRadius: 15,
    },
    perb: {
        color: '#ffffff',
        backgroundColor: colorListSub[1],
        lineHeight: 20,
        fontSize: 14,
        height: 20,
        padding: [2, 15],
        borderRadius: 15,
    },
    perc: {
        color: '#ffffff',
        backgroundColor: colorListSub[2],
        lineHeight: 20,
        fontSize: 14,
        height: 20,
        padding: [2, 15],
        borderRadius: 15,
    },
    perd: {
        color: '#fff',
        backgroundColor: colorListSub[3],
        lineHeight: 20,
        fontSize: 14,
        height: 20,
        padding: [2, 15],
        borderRadius: 15,
    },
};
option = {
    backgroundColor: '#030d22',
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}个',
    },
    legend: {
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
        x: 'center',
        bottom: '30',
        itemGap: 25,
        show:false,
        data: ['电工', '水泥工', '搬运工', '质量检测'],
    },
    series: [
        {
            type: 'pie',
            radius: ['10%', '55%'],
            roseType: 'radius',
            clockwise: false,
            z: 10,
            itemStyle: {
                normal: {
                    color: function (params) {
                        // build a color map as your need.
                        return colorList[params.dataIndex];
                    },
                    shadowBlur: 30,
                    shadowColor: 'rgba(255, 255, 255, 0.4)',
                },
            },
            label: {
                normal: {
                    formatter: function (params) {
                        // return '{b|'+params.name+'}\n'+params.value+'度({per|'+params.percent+'%})  '
                        var str = '';
                        switch (params.name) {
                            case '电工':
                                str = '{a|' + params.name + '}\n\n{pera|' + params.value + '个 }';
                                break;
                            case '水泥工':
                                str = '{b|' + params.name + '}\n\n{perb|' + params.value + '个 }';
                                break;
                            case '搬运工':
                                str = '{c|' + params.name + '}\n\n{perc|' + params.value + '个}';
                                break;
                            case '质量检测':
                                str = '{d|' + params.name + '}\n\n{perd|' + params.value + '个 }';
                                break;
                        }
                        return str;
                    },
                    rich: rich,
                },
            },
            labelLine: {
                normal: {
                    length: 50,
                    length2: 50,
                    lineStyle: {
                        width: 2,
                    },
                },
            },
            data: data
        },
        // 边框的设置
        {
            radius: ['10%', '14%'],
            type: 'pie',
            clockwise: false,
            z: 11,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                },
            },
            animation: true,
            tooltip: {
                show: true,
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        // build a color map as your need.
                        var colorList = smallCircle;
                        return colorList[params.dataIndex];
                    },
                },
            },
            data: data
        },
        // 中心的圆圈
        {
            radius: ['60%', '60.3%'],
            type: 'pie',
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: 'rgba(255, 255, 255, 0.5)',
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 100,
                    name: '工种数量统计',
                    itemStyle: {
                        normal: {
                            color: '#6CB5FF',
                            shadowBlur: 30,
                            shadowColor: 'rgba(255, 255, 255, 0.5)',
                        },
                    },
                },
            ],
            animation: true,
        },
    ],
};
