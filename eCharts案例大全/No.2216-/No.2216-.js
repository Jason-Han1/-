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
        formatter: '{c}%',
        position: 'center',
        show: true,
        textStyle: {
            fontSize: '28',
            fontWeight: 'normal',
            color: '#fff'
        }
    }
};


option = {
    // backgroundColor: '#fff',
    title: [
        {
        text: "123件",
        textAlign: "center",
          left: "50%",
          top: "48%",
        textStyle: {
            color: '#000',
            fontSize: 26
        }
    },{
        text: '已结',
        left: '50%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '26',
            color: '#000',
            textAlign: 'center',
        },
    }, 
    ],
    series: [{
            type: 'pie',
            // hoverAnimation: false, //鼠标经过的特效
            radius: ['34%', '45%'],
            center: ['50%', '50%'],
            startAngle: 225,
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
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: "rgb(12, 125, 213)",
                        }
                    },
                    // label: dataStyle,
                }, {
                    value: 25,
                    itemStyle: placeHolderStyle,
                },
            ]
        },
        //外圈的边框
        // {
        //     // name: '总人数',
        //     type: 'pie',
        //     // hoverAnimation: false, //鼠标经过的特效
        //     radius: ['31%', '32%'],
        //     center: ['50%', '50%'],
        //     startAngle: 225,
        //     labelLine: {
        //         normal: {
        //             show: false
        //         }
        //     },
        //     label: {
        //         normal: {
        //             position: 'center'
        //         }
        //     },
        //     data: [{
        //             value: 75,
        //             itemStyle: {
        //                 normal: {
        //                     color: "pink",
        //                 }
        //             },
        //         }, {
        //             value: 25,
        //             itemStyle: placeHolderStyle,
        //         },

        //     ]
        // },
    ]
};