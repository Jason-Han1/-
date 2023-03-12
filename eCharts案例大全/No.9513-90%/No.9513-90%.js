var percent = 90;

function getData() {
    return [{
        value: percent,
        itemStyle: {
            normal: {
                opacity:1,
                color: { // 完成的圆环的颜色
                        // 
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#FEDBD8' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'red' // 100% 处的颜色
                        }],
                        // globalCoord: false // 缺省为 false
                    },
            }
        }
    }, {
        value: 100 - percent,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}

option = {
    backgroundColor: '#fff',
    title: {
        text: (percent * 1) + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#430818',
            fontWeight: 'bolder',
            fontSize: 64,
        }
    },
    series: [
        {//最外层的底圆
            type: 'pie',
            radius: ['39%', '49%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },

            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#ffe9e4',
                        shadowBlur: 10,
                        opacity:0.8,
                        shadowColor: '#ffe8e4'
                    }
                }
            }],

            animation: false
        },
        {
            // 底圆中间白色阴影部分
            type: 'pie',
            radius: ['42%', '45%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },

            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#fff',
                        shadowBlur: 20,
                        opacity:0.1,
                        shadowColor: '#fff'
                    }
                }
            }],

            animation: false
        },
        {
            // 加载数据部分的圆 这个是重点
            name: 'main',
            type: 'pie',
            radius: ['42%', '47%'],
            hoverAnimation:false,
            label: {
                normal: {
                    show: false,
                    
                }
            },
            data: getData(),

            animationEasingUpdate: 'cubicInOut',
            animationDurationUpdate: 1000
        }
    ]
};

// setInterval(function() {

//     if (percent == 100) {
//         percent = 100;
//     } else {
//         ++percent;
//     }
//     myChart.setOption({
//         title: {
//             text: percent + '%'
//         },
//         series: [{
//             name: 'main',
//             data: getData()
//         }]
//     })

// }, 1000);