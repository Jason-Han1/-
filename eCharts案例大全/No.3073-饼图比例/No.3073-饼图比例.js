
var option = {
    backgroundColor:"#031259",
    color: [
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: 'rgba(10, 12, 203, 1)',
                },
                {
                    offset: 1,
                    color: 'rgba(125, 126, 255, 1)',
                },
            ],
            global: false,
        },
    ],
    title: [
        {
            text: Math.floor((112 / 224) * 100) + '%',
            left: 'center',
            top: '40%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 20,
                color: '#fff',
                textAlign: 'center',
            },
        },
    ],
    series: [
        {
            type: 'pie',
            radius: ['55%', '62%'],
            center: ['50%', '45%'],
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'left',
                },
            },
            data: [
                {
                    value: 50,
                    name: Math.floor((50 / 224) * 100) + '%',
                    // itemStyle: {
                    //   normal: {
                    //     // color: color
                    //   }
                    // },
                    label: {
                        normal: {
                            //formatter: '{c}%',
                            position: 'center',
                            // padding:[50,50],
                            show: true,
                            textStyle: {
                                fontSize: 13 * this.scale,
                                fontWeight: 'normal',
                                color: '#ffffff',
                            },
                        },
                    },
                },
                {
                    value: 224,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        {
            type: 'pie', //外圈边框
            hoverAnimation: true, //鼠标经过的特效
            radius: ['70%', '77%'],
            center: ['50%', '45%'],
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 224,
                    // itemStyle: {
                    //   normal: {
                    //     color: color
                    //   }
                    // }
                },
            ],
        },
    ],
};
