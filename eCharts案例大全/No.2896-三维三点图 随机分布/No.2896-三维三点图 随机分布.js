var data = [
    [12, 23, 43],
    [43, 545, 65],
    [92, 23, 33],
];
option = {
    tooltip: {},
    xAxis3D: {
        name: 'x',
        type: 'value',
        //                min: 'dataMin',//获取数据中的最值
        //                max: 'dataMax'
    },
    yAxis3D: {
        name: 'y',
        type: 'value',
        //                min: 'dataMin',
        //                max: 'dataMax'
    },
    zAxis3D: {
        name: 'z',
        type: 'value',
        //                min: 'dataMin',
        //                max: 'dataMax'
    },
    grid3D: {
        // show: false,
        axisLine: {
            lineStyle: {
                color: '#000', //轴线颜色
            },
        },
        axisPointer: {
            lineStyle: {
                color: '#f00', //坐标轴指示线
            },
            show: false, //不坐标轴指示线
        },
        viewControl: {
            //                     autoRotate: true,//旋转展示
            //                     projection: 'orthographic'
            beta: 10,
        },
        boxWidth: 200,
        boxHeight: 100,
        boxDepth: 100,
        top: -100,
    },

    series: [
        {
            type: 'scatter3D',
            dimensions: [
                'a',
                'b',
                'c', //显示框信息
            ],
            data: data,
            symbolSize: 60, //点的大小
            // symbol: 'triangle',
            emphasis: {
                itemStyle: {
                    color: '#ccc', //高亮
                },
            },
            itemStyle: {
                color: {
                    type: 'radial',         // 径向渐变
                    x: 0.5,       // 圆心坐标（中心）
                    y: 0.5,
                    r: 1,           // 半径长度
                    colorStops: [
                        {
                            offset: 0.5,
                            color: '#d1b3ff'        // offset：坐标为0处的颜色
                        }, {
                            offset: 1,
                            color: '#b9ffde'        // offset：坐标为1处的颜色
                        },
                    ],
                },
                borderWidth: 0,
                // borderColor: 'rgba(255,255,255,0.8)', //边框样式
            },
        },
    ],
    backgroundColor: '#fff',
};
