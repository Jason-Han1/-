//当天空气质量情况
option = {
    title: [{
        text: '0',
        bottom: '10%',
        left: 'center',
    },{
        text: '本次答对题目数',
        bottom: '5%',
        left: 'center',
    }],
    angleAxis: {
        show: false,
        max: 100 * 360 / 180, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 180, //极坐标初始角度
        splitLine: {
            show: false
        }
    },
    barMaxWidth: 14, //圆环宽度
    radiusAxis: {
        show: false,
        type: 'category',
    },
    //圆环位置和大小
    polar: {
        center: ['50%', '95%']
    },
    series: [{
            type: 'bar',
            data: [{ //上层圆环，显示数据
                value: 75,
            }],
            barGap: '100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角从 v4.5.0 开始支持
            z: 2 //圆环层级，同zindex
        },
        { //下层圆环，显示最大值
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    color: '#cecece'
                }
            }],
            barGap: '-90%',
            barWidth: 10,
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1
        },
    ]
}