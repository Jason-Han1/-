
    var  color3= [
                'transparent',
                '#00DDE7',
                'transparent',
                'transparent',
                '#00DDE7',
                'transparent',
                'transparent',
                '#00DDE7',
                'transparent',
            ]
    var   color4=[
                'transparent',
                '#FF391A',
                'transparent',
                'transparent',
                '#FF391A',
                'transparent',
                'transparent',
                '#FF391A',
                'transparent',
            ]
    var    dataArr=[{
                value: 30,
                name: '已处理工单比率'
            }]
    var  changeStateLiset= [7, 8, 7, 7, 8, 7, 7, 8, 7, 7, 8, 7]
    var color = new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                    offset: 0,
                    color: '#03E4ED' // 0% 处的颜色
                },
                {
                    offset: 0.3,
                    color: '#03E4ED' // 100% 处的颜色
                },
                {
                    offset: 0.31,
                    color: '#03E4ED' // 100% 处的颜色
                },
                {
                    offset: 1,
                    color: '#03E4ED' // 100% 处的颜色
                }
            ]);
    var color2 = new echarts.graphic.LinearGradient(1, 1, 0, 0, [
                {
                    offset: 0,
                    color: '#FF381A' // 0% 处的颜色
                },
                {
                    offset: 0.3,
                    color: '#FF3A19' // 100% 处的颜色
                },
                {
                    offset: 0.6,
                    color: '#FF531C' // 100% 处的颜色
                },
                {
                    offset: 1,
                    color: '#FF7E1C' // 100% 处的颜色
                }
            ]);
    var colorSet = dataArr[0].value <= 30 ? [
                [dataArr[0].value / 100, color2],
                [1, '#007986']
            ] : [
                    [dataArr[0].value / 100, color],
                    [1, '#007986']
                ];
            var rich = {  //中心比率数据配置
                white: {
                    fontSize: 50,
                    color: '#fff',
                    fontWeight: '550',
                    padding: [-6, 0, 0, 0]
                },
                bule: {
                    fontSize: 100,
                    fontFamily: 'DINBold',
                    color: '#fff',
                    fontWeight: '550',
                    padding: [-4, 0, 0, 0],
                },
                radius: {
                    height: 80,
                    lineHeight: 80,
                    borderWidth: 1,
                    borderColor: '#0092F2',
                    fontSize: 50,
                    color: '#fff',
                    backgroundColor: '#1B215B',
                    borderRadius: 20,
                    textAlign: 'center',
                },
                size: {
                    padding: [100, 0, 0, 0]
                }
            }
option = {
    tooltip: {
        show: false,
    },
    series: [
        {
            //最外层旋转
            color: dataArr[0].value <= 30 ? color4 : color3,
            type: 'pie',
            radius: ['72%', '75%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            z: 1,
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#00DDE7',
                },
            },
            label: {
                show: false,
            },
            data: changeStateLiset,
            labelLine: {
                show: false,
            },
        },
        {
            //内圆
            type: 'pie',
            radius: '75%',
            center: ['50%', '50%'],
            z: 0,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(
                        0.5,
                        0.5,
                        1,
                        [
                            {
                                offset: 0,
                                // color:'#f88',
                                color: 'rgba(17,24,43,0)',
                            },
                            {
                                offset: 0.5,
                                color: '#005262',
                                // color: 'rgba(28,42,91,.6)'
                            },
                            {
                                offset: 1,
                                color: '#f88',
                                // color:'rgba(17,24,43,0)'
                            },
                        ],
                        false
                    ),
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false,
            },
            data: [100],
        },
        {
            //外层辅助
            type: 'gauge',
            name: '外层辅助',
            radius: '75%',
            center: ['50%', '50%'],
            startAngle: '225',
            endAngle: '-45',
            min: 0,
            max: 100,
            splitNumber: 4,
            // splitNumber: '100',
            pointer: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 1,
                },
            ],
            // data: [{value: 1, name: 90}],
            title: {
                show: true,
                offsetCenter: [0, 30],
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 20,
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#009DA8']],
                    width: 2,
                    opacity: 1,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: -30,
                lineStyle: {
                    color: '#051932',
                    width: 0,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: true,
                formatter: function (value) {
                    return value + '%';
                },
                color: '#00E5E1',
                fontSize: 50,
                fontWeight: 550,
                distance: 15, //文字离表盘的距离
            },
        },
        {
            // 内容 数据指示
            type: 'gauge',
            radius: '54%',
            startAngle: '225',
            endAngle: '-45',
            pointer: {
                show: false,
            },
            detail: {
                formatter: function (value) {
                    // var num = Math.round(value);
                    return '{bule|' + value + '}{white|%}' + '{size|' + '}';
                },
                rich: rich,
                offsetCenter: ['0%', '0%'],
            },
            data: dataArr,
            title: {
                show: false,
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 20,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet,
                    width: 50,
                    shadowBlur: 15,
                    shadowColor: '#00B3BC',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false,
            },
        },
        {
            //刻度外圈
            name: '灰色内圈', //刻度背景
            type: 'gauge',
            z: 2,
            radius: '41%',
            startAngle: '225',
            endAngle: '-45',
            //center: ["50%", "75%"], //整体的位置设置
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [[1, '#009DA8']],
                    width: 2,
                    opacity: 1, //刻度背景宽度
                },
            },
            splitLine: {
                show: false,
            },
            // data: [{
            //     show: false,
            //     value: '80'
            // }], //作用不清楚
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            detail: {
                show: 0,
            },
        },
        {
            //白色圈刻度
            name: '白色圈刻度',
            type: 'gauge',
            radius: '45%',
            startAngle: 225, //刻度起始
            endAngle: -45, //刻度结束
            z: 2,
            axisTick: {
                show: false,
            },
            splitLine: {
                length: 20, //刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: '#009DA8',
                }, //刻度节点线
            },
            axisLabel: {
                color: 'rgba(255,255,255,0)',
                fontSize: 66,
            }, //刻度节点文字颜色
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    opacity: 0,
                },
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 0,
                    name: '',
                },
            ],
        },
        {
            //内圆
            type: 'pie',
            radius: '38%',
            center: ['50%', '50%'],
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(
                        0.5,
                        0.5,
                        0.8,
                        [
                            {
                                offset: 0,
                                color: '#18C4CD',
                            },
                            {
                                offset: 0.5,
                                color: '#00848F',
                            },
                            {
                                offset: 1,
                                color: '#006B75',
                            },
                        ],
                        false
                    ),
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false,
            },
            data: [100],
        },
    ],

};
