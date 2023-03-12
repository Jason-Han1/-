var val1 = 40
var val11 = 100 - val1

var val2 = 20
var val22 = 100 - val2

var val3 = 60
var val33 = 100 - val3

var color= ['#45E6B0', '#09A6F9','#FFD76C'];
var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        borderWidth: 5
    }
}
var placeHolderStyle = {
    normal: {
        color: '#154060',
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        borderWidth: 5
    }
    // emphasis: {
    //     color: '#154060'
    // }
}
option = {
    series: [{
            name: 'Line 1',
            type: 'pie',
            radius: ['80%', '82%'],
            itemStyle: dataStyle,
            silent: true,
            hoverAnimation: false,
            label:{
                borderRadius:'10',
            },
            data: [{
                    value: val1,
                    name: '3级',
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color:color[0]
                            }, {
                                offset: 1,
                                color: color[0]
                            }]),
                            borderWidth: 13,
                        }
                    }
                },
                {
                    value: val11,
                    name: '',
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            radius: ['60%', '62%'],
            itemStyle: dataStyle,
            silent: true,
            hoverAnimation: false,
            data: [{
                    value: val2,
                    name: '2级',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: color[1]
                            }, {
                                offset: 1,
                                color: color[1]
                            }])
                        }
                    }
                },
                {
                    value: val22,
                    name: '',
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            radius: ['40%', '42%'],
            itemStyle: dataStyle,
            silent: true,
            hoverAnimation: false,
            data: [{
                    value: val3,
                    name: '1级',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: color[2]
                            }, {
                                offset: 1,
                                color: color[2]
                            }])
                        }
                    }
                },
                {
                    value: val33,
                    name: '',
                    itemStyle: placeHolderStyle
                },
            ]
        },
    ]
};