// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

option = {
    backgroundColor: '#FFFFFF',
    title: [{
        text: '40%',
        left: '24%',
        top: '65%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#3596f7',
            fontSize: 15,
            textAlign: 'center',
        }
    }, {
        text: '生产计划完成率'+'20',
        left: '24%',
        top: '62%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#000000',
            fontSize: 16,
            textAlign: 'center',
        }
    },
    {
        text: '88%',
        left: '50%',
        top: '80%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#3596f7',
            fontSize: 15,
            textAlign: 'center',
        }
    }],
    series: [{
        type: 'liquidFill',
        // data: [0.6, 0.5, 0.4, 0.3],
        data: [0.5],
        direction: 'right', //波浪方向或者静止
        radius: '30%',
        // 水球颜色
        color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            "offset": 0,
            "color": '#3596f7'
        }, {
            "offset": 1,
            "color": '#3596f7'
        }])],

        center: ['25%', '45%'], //水球位置
         //outline  外边
        outline: {
            // show: false
            borderDistance: 2, //内环padding值
            itemStyle: {
                borderWidth: 2, //圆边线宽度
                borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#3596f7'
                    }, {
                        offset: 1,
                        color: '#3596f7'
                    }],
                    globalCoord: false
                },
            },
        },
        label: {
            normal: {
                formatter: '50%', //重置百分比字体为空
                // textStyle: {
                color: 'red',
                insideColor: 'yellow',
                fontSize: 10
                
                // }
            }
        },
        // 内图 背景色 边
        backgroundStyle: {
            color: '#FFFFFF',
            // borderWidth: 5,
            // borderColor: 'red',
        }
    }, ]
};