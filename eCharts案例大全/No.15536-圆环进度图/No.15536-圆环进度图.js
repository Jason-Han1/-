var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
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
    title: {
        text: '75%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: "#98A0C4",
            fontSize: 80
        }
    },
    backgroundColor: '#333645',
    color: ['#FF358F', '#313443', '#313443'],
    tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show: false,
        itemGap: 12,
        data: ['01', '02']
    },
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [195, 200],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [{
                    value: 75,
                    name: '01'
                }, {
                    value: 25,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
        }, {
            name: 'Line 2',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: [150, 192],
            itemStyle: dataStyle,
            hoverAnimation: false,
            tooltip: {
                show: false
            },
            data: [{
                    value: 100,
                    name: '02',
                    itemStyle: {
                        emphasis: {
                            color: '#313443'
                        }
                    }
                }, {
                    value: 0,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
        },


    ]
};