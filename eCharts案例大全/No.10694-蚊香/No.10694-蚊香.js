var dataStyle = {
    normal: {
        color: { // 完成的圆环的颜色
            colorStops: [{
                offset: 0,
                color: '#00cefc' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#367bec' // 100% 处的颜色
            }, ]
        },
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 15,
        shadowColor: 'rgba(0, 0, 0, 1)',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0.1)',

        // label: {show:false},
        // labelLine: {show:false},
        shadowBlur: 1,
        shadowColor: 'rgba(33, 33, 33, 1)',
        borderWidth: 1,
        borderColor: '#000',
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0.1)',

        // label: {show:false},
        // labelLine: {show:false},
        shadowBlur: 1,
        shadowColor: 'rgba(33, 33, 33, 1)',
        borderWidth: 1,
        borderColor: '#000',
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
    backgroundColor: '#212121',
    // color: ["#37b70c", "#fae521", "#f29c00", "#dd3f36", "#b3013f", "#a00398", '#E87C25', '#C6E579',],
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        itemGap: 12,
        textStyle: {
            color: "#fff",
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    },

    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [180, 200],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [{
                    value: 180,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 3000000,
                    name: 'A'
                }

            ],

        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [160, 180],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [{
                    value: 180,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 300,
                    name: 'B'
                }
            ]
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [140, 160],
            itemStyle: dataStyle,

            data: [{
                    value: 180,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 300,
                    name: 'C'
                }
            ]
        },
        {
            name: 'Line 4',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [120, 140],
            itemStyle: dataStyle,

            data: [{
                    value: 180,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 300,
                    name: 'D'
                }
            ]
        },
        {
            name: 'Line 5',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [100, 120],
            itemStyle: dataStyle,

            data: [{
                    value: 180,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 300,
                    name: 'E'
                }
            ]
        },
        {
            name: 'Line 6',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [80, 100],
            itemStyle: dataStyle,

            data: [{
                    value: 180,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 300,
                    name: 'G'
                }
            ]
        },
        {
            name: 'Line 6',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [60, 80],
            itemStyle: dataStyle,

            data: [{
                    value: 180,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 300,
                    name: 'H'
                }
            ]
        },
        {
            name: 'Line 6',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [40, 60],
            itemStyle: dataStyle,

            data: [{
                    value: 180,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 300,
                    name: 'I'
                }
            ]
        },
        {
            name: 'Line 6',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [20, 40],
            itemStyle: dataStyle,

            data: [{
                    value: 180,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                },
                {
                    value: 300,
                    name: 'J'
                }
            ]
        },

    ]
};