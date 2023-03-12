let data1 = [3, 1, 7, 6, 4, 2, 1];
let item = ['人间', '四月', '芳飞', '尽头', '时光', '二月', '花海'];
let data3 = [];
for (let i in data1) {
    data3[i] = data1[i] * 1;
}
option = {
    backgroundColor: '#fff',
    animation: false,
    grid: {
        top: '10%',
        bottom: '20%', //也可设置left和right设置距离来控制图表的大小
    },
    xAxis: {
        data: item,
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#ccc',
            },
        },
        axisTick: {
            show: true, //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            fontSize: 14,
            textStyle: {
                color: '#666', //X轴文字颜色
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            gridIndex: 0,
            min: 0,
            max: 20,
            interval: 3,
            // splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#e8e8e8',
                    width: 1,
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#ccc',
                },
            },
            axisLabel: {
                show: true,
                margin: 14,
                fontSize: 14,
                textStyle: {
                    color: '#666', //X轴文字颜色
                },
            },
        },
    ],
    series: [
        {
            name: '主营业务',
            type: 'bar',
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: function (params) {
                        //展示正值的柱子，负数设为透明

                        return new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: '#38c5fd', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#ffcb48', // 100% 处的颜色
                                },
                            ],
                            false
                        );
                    },
                },
            },
            data: data1,
            z: 10,
            zlevel: 0,
        },
        {
            // 分隔
            tooltip: {
                show: false,
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#fff',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 2,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [26, 3],
            symbolPosition: 'start',
            symbolOffset: [1, '100%'],
            emphasis: {
                itemStyle: {
                    color: '#ccc',
                    shadowColor: 'gray',
                    shadowBlur: 10,
                    shadowOffsetX: 10,
                    shadowOffsetY: -4,
                },
            },
            data: data1,
            width: 20,
            z: 0,
            zlevel: 1,
        },
        {
            tooltip: {
                show: false,
            },
            name: '销售水量',
            type: 'line',
            smooth: true, //平滑曲线显示
            symbol: 'circle',
            showAllSymbol: false, //显示所有图形。
            symbolSize: 8,

            lineStyle: {
                normal: {
                    color: 'transparent',
                },
            },
            itemStyle: {
                color: '#38c5fd',
            },
            data: data3,
            z: 5,
        },
    ],
};
