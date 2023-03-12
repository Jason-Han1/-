var option = {
    backgroundColor: 'black', // 背景颜色
    angleAxis: {
        type: 'category',
        data: ['货车', '旅游客运', '物流车', '数字对讲机', '班车客运', '小渔船', '施工船', '校车', '渣土'],
        z: 10,
        axisLabel: {
            color: 'white',
            fontSize: 15,
        },
    },
    polar: {
        center: ['50%', '50%'],
        radius: [50, 200],// 内外圆半径
    },
    radiusAxis: {
        axisLine: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(13,91,104)',
                width: 2,
            },
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            type: 'bar',
            data: [9, 8, 7, 6, 5, 4, 3, 2, 1],
            barWidth: 5, // 柱体宽度
            coordinateSystem: 'polar',
            showBackground: true,
            backgroundStyle: {
                color: '#333', // 背景柱子颜色
                borderWidth: 60,
            },
            name: '监管对象',
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ffffff',
                    color: 'rgb(9,191,251)', // 一般  颜色
                    shadowBlur：8
                },
              
            },
              emphasis: {
                    itemStyle: {
                        color: 'rgba(235, 26, 26, 1)',// 高亮颜色
                        shadowBlur: 10 ,//阴影
                        shadowColor: 'green',
                    },
                },
        },
    ],
};
