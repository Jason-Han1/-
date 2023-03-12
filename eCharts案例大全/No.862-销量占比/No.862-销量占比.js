var dataStyle = {
    normal: {
        label: {
            show: true,
            color: '#fff',
            fontSize: 18,
        },
        labelLine: {
            //smooth: 0.2,
            length: 40,
            length2: 40
        },
    }
};

var labelShow = {
    show: true,
    color: '#fff',
    fontSize: 15,
    formatter: [
        '{d| {d}% }',
        '{b| {b} }'
    ].join('\n'),
    rich: {
        d: {
            fontSize: 15,
            color: '#fff'
        },
        b: {
            fontSize: 18,
            color: '#fff'
        },
    }
};

var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0)',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
    backgroundColor: '#044061',
    title: {
        text: '销量占比',
        textStyle: {
            fontSize: 25,
            fontWeight: 'normal',
            color: '#fff',
        },
        x: 'center'
    },
    color: ['#2078d1', '#8a00ec', '#ff00f3', '#fb0065', '#ff941b'],
    tooltip: {
        show: true,
        formatter: "{b} <br/> {c} ({d}%)"
    },
    angleAxis: {
        type: 'category',
        z: 10,
        axisLine: {
            color: '#fff',
            lineStyle: {
                width: 3,
                color: '#fff',
            }
        },
    },
    radiusAxis: {
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            color: '#fff'
        },
        axisLine: {
            show: false,
            color: '#fff',
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            color: '#000',
            lineStyle: {
                type: 'dotted',
                color: 'rgba(170,170,170,.5)',
            }
        },

    },
    polar: {
        center: ['50%', '50%'],
        radius: 140,
    },
    legend: {
        bottom: '5%',
        textStyle: {
            color: '#fff',
        },
        itemGap: 12,
        data: ['一类烟', '二类烟', '三类烟', '四类烟', '五类烟']
    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [100, 105],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [{
                    value: 260,
                    name: '',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 100,
                    name: '一类烟',
                    label: labelShow,
                },
                {
                    value: 0,
                    name: '',
                    itemStyle: placeHolderStyle
                }

            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [70, 100],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [{
                    value: 190,
                    name: '',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 70,
                    name: '二类烟',
                    label: labelShow,
                },
                {
                    value: 100,
                    name: '',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [120, 125],
            itemStyle: dataStyle,

            data: [{
                    value: 130,
                    name: '',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 60,
                    name: '三类烟',
                    label: labelShow,
                },
                {
                    value: 170,
                    name: '',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'Line 4',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [110, 125],
            itemStyle: dataStyle,

            data: [{
                    value: 40,
                    name: '',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 90,
                    name: '四类烟',
                    label: labelShow,
                },
                {
                    value: 230,
                    name: '',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'Line 5',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [80, 100],
            itemStyle: dataStyle,

            data: [{
                    value: 0,
                    name: '',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 40,
                    name: '五类烟',
                    label: labelShow,
                },
                {
                    value: 320,
                    name: '',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            type: 'bar',
            data: [0],
            coordinateSystem: 'polar',
            name: '06a',
            stack: 'a'
        },

    ]
};