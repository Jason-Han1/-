let chartData = [
    {
        name: '新浦化学（泰兴）有限公司',
        value: 9310,
    },
    {
        name: '泰兴锦华石化有限公司',
        value: 3921,
    },
    {
        name: '泰兴金江化学工业有限公司',
        value: 3780,
    },
    {
        name: '江苏三木物流有限公司',
        value: 3421,
    },
    {
        name: '泰兴梅兰新材料有限公司',
        value: 1941,
    }
];
// 名称
let nameArray = [];
// 放大一定倍数的总数量
let totalArray = [];
let realNumArray = [];
// 最大值
let maxTotal = 1000;

chartData.forEach((ele) => {
    if (ele.value > maxTotal) {
        maxTotal = ele.value;
    }
    realNumArray.push(ele.value);
    nameArray.push(ele.name);
});
if (maxTotal < 10) {
    maxTotal = 10;
} else if (maxTotal < 1000) {
    // 需要用0占2位
    let mult = Math.pow(10, 2);
    // 向上取整
    maxTotal = Math.ceil(maxTotal / mult) * mult;
} else {
    // 取500的倍数
    maxTotal = Math.ceil(maxTotal / 1000) * 1000;
}
chartData.forEach((ele) => {
    totalArray.push(maxTotal);
});

option = {
    backgroundColor:"#313131",
    grid: {
        top: '10',
        bottom: 0,
        height: '100%',
        left: 40,
        right: 40,
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            show: true,
            inverse: true,
            axisLabel: {
                show: false,
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: nameArray,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                },
                align: 'right',
                padding: [0, 8, 0, 0],
                verticalAlign: 'bottom',
                lineHeight: 36,
                formatter: function (value, index) {
                    return `{a|${value}}`;
                },
                rich: {
                    a: {
                        color: '#00BAFF',
                        fontSize: '14',
                        fontFamily: 'PingFangSC-Regular',
                        padding: [0, 0, 7, 0],
                    },
                },
            },
            data: realNumArray,
        },
    ],
    series: [
        {
            name: '',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'rgba(3,14,55,0.6)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(26,160,255,1)',
                        },
                    ]),
                },
            },
            barWidth: 10,
            data: chartData,
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    position: [0, '-23px'],
                    textStyle: {
                        fontSize: '12',
                        fontFamily: 'SourceHanSansCN-Regular',
                        color: 'rgba(255,255,255,.7)',
                    },
                    formatter: function (value) {
                        return `{a|${value.name}}`;
                    },
                    rich: {
                        a: {
                            fontSize: '14',
                            fontFamily: 'SourceHanSansCN-Regular',
                            color: 'rgba(255,255,255,.7)',
                            padding: [0, 0, 4, 0],
                        },
                    },
                },
            },
        },
        // 背景条形图
        {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: totalArray,
            itemStyle: {
                normal: {
                    color: '#000A2E',
                    barBorderColor: '#1A4889', // 边框色
                    barBorderWidth: 1, // 边框宽度
                },
            },
        },
    ],
};
