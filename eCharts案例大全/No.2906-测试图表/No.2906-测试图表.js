const xDate = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
const zsData = [
    {
        value: 1000,
        type: '1',
    },
    {
        value: 3000,
    },
    {
        value: 2500,
        type: '1',
    },
    {
        value: 4000,
        type: '1',
    },
    {
        value: 5000,
        type: '2',
    },
    {
        value: 3000,
        type: '2',
    },
    {
        value: 2500,
    },
];
option = {
    legend: {
        data: ['买点', '卖点'],
        bottom: 20,
    },
    title: {
        text: '成交可视图（BTC/USDT)',
        textStyle: {
            color: '#1D2035 ',
            fontSize: 16,
        },
    },
    xAxis: [
        // xAxis（直角坐标系 X 轴）、yAxis（直角坐标系 Y 轴）
        {
            type: 'category',
            boundaryGap: false,
            data: [],
        },
    ],
    yAxis: [
        {
            position: 'right',
            type: 'value',
        },
    ],
    series: [
        {
            name: '成交可视图（BTC/USDT)',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [],
            smooth: true, //是否用曲线显示
            symbol: 'none',
            lineStyle: {
                color: '#FFA002', //线条颜色
            },
            areaStyle: {
                normal: {
                    // 填充色渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#FFA002' },
                        { offset: 1, color: '#FFF' },
                    ]),
                },
            },
        },
    ],
};

for (var k = 0; k < zsData.length; k++) {
    //主要实现改变特定点样式代码
    let obj = {};
    if (zsData[k].type == '1') {
        //判断是买点
        obj = {
            value: zsData[k].value,
            symbolSize: 10, //拐点大小
            symbol: 'circle', //拐点样式
            itemStyle: {
                normal: {
                    color: '#35B65A', //拐点颜色
                    borderColor: '#eee',
                    borderWidth: 2,
                },
            },
        };
        option.series[0].data.push(obj);
    } else if (zsData[k].type == '2') {
        (obj = {
            value: zsData[k].value,
            symbolSize: 10, //拐点大小
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: '#FF494A ', //拐点颜色
                    borderColor: '#eee',
                    borderWidth: 2,
                },
            },
        }),
            option.series[0].data.push(obj);
    } else {
        option.series[0].data.push(zsData[k].value);
    }
}
