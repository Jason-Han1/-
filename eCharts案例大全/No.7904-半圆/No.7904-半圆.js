// 参考作品：https://gallery.echartsjs.com/editor.html?c=xFrH5r49t_
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    },
    emphasis: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    }
};


var dataStyle = {
    normal: {
        formatter: '{c}/100',
        position: 'center',
        show: true,
        textStyle: {
            fontSize: '30',
            fontWeight: 'normal',
            color: '#34374E'
        }
    }
};


option = {
    backgroundColor: '#fff',

    series: [{
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['26%', '29%'], // 半径
            center: ['340', '445'],
            minAngle: 180,
            startAngle: -180, // 开始角度，180，则从左侧开始
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'
                        }
                    },
                }, {
                    value: 0,
                    itemStyle: placeHolderStyle,
                },

            ]
        },

        {
            type: 'pie',
            hoverAnimation: true, //鼠标经过的特效
            radius: ['25%', '30%'],
            center: ['340', '445'],
            minAngl: 180,
            startAngle: -180, // 开始角度，180，则从左侧开始
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 10,
                    itemStyle: {
                        normal: {
                            color: '#6F78CC'
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 100,
                    itemStyle: placeHolderStyle,
                },

            ]
        }
    ]
};