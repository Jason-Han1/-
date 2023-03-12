var labelData = ['党小组、村（居）民组会议', '粮油副食群众通过电话或口头等方式', '群众通过微信、QQ等方式退出', '党员议事日', '意见箱', '包组干部收集到群众的需求', '落实上级党委政府工作安排', '其它'];
var valueData = [52, 32, 12, 53, 65,36,69,29];
var option = {
    backgroundColor: '#013B6F',
    xAxis: {
        show: false,
    },
    tooltip: {
        show: true,
    },
    yAxis: [
        {
            splitLine: 'none',
            axisLine: 'none',
            axisLabel: {
                verticalAlign: 'bottom',
                align: 'left',
                padding: [0, 0, 15, 10],//文字与柱状图的距离
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: '16',
                },
            },
            data: labelData,
        },
        {
            axisLine: 'none',
            data: valueData,
            axisLabel: {
                show: true,
                verticalAlign: 'bottom',
                align: 'right',
                padding: [0, 10, 15, 0],//数据与图形的距离
                textStyle: {
                    color: '#fff',
                    fontSize: '16',
                }
            },
        },
    ],
    series: [
        {
            type: 'bar',
            showBackground: true,
            data: valueData,
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'rgba(41, 204, 255, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(10, 116, 255, 1)',
                        },
                    ]),
                },
            },
        },
    ],
};
