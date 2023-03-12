var dataArr = [60];
var backgroundColor = '#0E1327';
var center_1 = ['50%', '50%'];
var radius_1 = '80%';
var color_offset_0 = '#19fdab';
var color_offset_1 = '#d0ff19';
var color_offset_2 = '#ff4026';
var line_width = '20';
var anchor_color = '#0e1327';
var anchor_size = 10;
var pointer_length = '90%';
var pointer_width = 16;
var pointer_offsetCenter = [0, '5%'];
var pointer_color_offset_0 = '#FEAD54';
var pointer_color_offset_1 = '#0e1327';
var detail_color = 'red';
option = {
    backgroundColor: backgroundColor,
    title: {
        show: true,
        text: '测试',
        left: 'center',
        bottom: 0,
        textStyle: {
            color: '#00FCFF',
            fontFamily: 'Microsoft YaHei',
            fontSize: 18,
        },
    },
    series: [
        {
            data: dataArr,
            name: '最外层',
            type: 'gauge',
            roundCap: true,
            radius: radius_1,
            center: center_1,
            splitNumber: 0, //刻度数量
            startAngle: 225,
            endAngle: -45,
            z: 4,
            zlevel: 0,
            axisLine: {
                show: true,
                roundCap: true,
                lineStyle: {
                    // 轴线样式
                    width: line_width, // 宽度
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: color_offset_0,
                                },
                                {
                                    offset: 0.5,
                                    color: color_offset_1,
                                },
                                {
                                    offset: 1,
                                    color: color_offset_2,
                                },
                            ]),
                        ],
                    ],
                },
            },
            //分隔线样式
            splitLine: {
                show: true,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: true,
            },
            anchor: {
                show: true,
                size: anchor_size,
                showAbove: true,
                itemStyle: {
                    color: anchor_color,
                },
            },
            pointer: {
                icon:
                    'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                show: true,
                length: pointer_length,
                width: pointer_width,
                offsetCenter: pointer_offsetCenter,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: pointer_color_offset_0,
                        },
                        {
                            offset: 1,
                            color: pointer_color_offset_1,
                        },
                    ]),
                },
            },
            detail: {
                color: detail_color,
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontFamily: 'D-DIN',
                fontSize: 40,
                offsetCenter: [0, '50%'],
            },
        },
        {
            name: '第二层刻度',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '75%',
            // distance : 100,
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: false,
            }, //仪表盘轴线
            axisLabel: {
                show: false,
                color: '#FFFFFF',
                distance: 20,
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 5,
                lineStyle: {
                    color: '#f40', //用颜色渐变函数不起作用
                    width: 1,
                },
                distance: 20,
                length: 15,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
        {
            name: '内部细刻度',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '55%',
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#224570',
                                },
                                {
                                    offset: 1,
                                    color: '#224570',
                                },
                            ]),
                        ],
                    ],
                },
            }, //仪表盘轴线
            axisTick: {
                show: false,
            },
            //刻度线文字
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
    ],
};

// setInterval(function () {
// option.series[0].data[0].value = 65;
myChart.setOption(option, true);
// }, 2000);
