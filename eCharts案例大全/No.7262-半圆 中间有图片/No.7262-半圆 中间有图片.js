var giftImageUrl = "/asset/get/s/data-1592466738509-to9TDKwN5.png";

option = {
    backgroundColor: "#003366",
    title: [{
            text: '11864',
            x: '50%',
            y: '70%',
            textAlign: "center",
            textStyle: {
                fontSize: 40,
                color: '#01c8d7'
            },

        },
        {
            text: '社区数量',
            x: '50%',
            bottom: "10%",
            textAlign: "center",
            textStyle: {
                fontSize: 20,
                color: '#0f98ee'
            },


        }
    ],
    graphic: {
        elements: [{
            type: 'image',
            style: {
                image: giftImageUrl,

                width: 100,
                height: 100
            },
            left: 'center',
            top: 'center'
        }]
    },
    series: [{
            name: ' ',
            type: 'pie',
            radius: ['60%', '80%'],
            startAngle: 200,
            color: [{
                type: 'linear',
                colorStops: [{
                    offset: 0,
                    color: "#0f98ee" // 0% 处的颜色
                }, {
                    offset: 1,
                    color: "#5bc0fc" // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }, 'none'],
            hoverAnimation: false,
            legendHoverLink: false,
            z: 10,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 95
            }, {
                value: 60
            }]
        },
        {
            name: ' ',
            type: 'pie',
            radius: ['54%', '55%'],
            startAngle: 200,
            color: [{
                type: 'linear',
                colorStops: [{
                    offset: 0,
                    color: "#0f98ee" // 0% 处的颜色
                }, {
                    offset: 1,
                    color: "#5bc0fc" // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }, 'none'],
            hoverAnimation: false,
            legendHoverLink: false,
            z: 10,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 95
            }, {
                value: 60
            }]
        }

    ],

};