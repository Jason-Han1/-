var eachartPiedata =[
        {
          totalAmount: 20,
          Amount: 10,
        },
        {
          totalAmount: 60,
          Amount: 50,
        },
        {
          totalAmount: 40,
          Amount: 30,
        },
        {
          totalAmount: 30,
          Amount: 20,
        },
      ]
option = {
    grid: {
        containLabel: true,
        // 显示数据的图表位于当前canvas的坐标轴
        top: 100,
        bottom: 10,
        left: 10,
        right: 10,
    },
    tooltip: {
        trigger: 'item',
        confine: true,
        // <span style="color: #333;font-size: .14rem; font-weight: 600;">'+params.name+
        formatter: function (params) {
            return (
                '<div style="color: #333;"><span style="color: #333;font-size: .14rem; font-weight: 600;">' +
                params.name +
                '</span><br/><span style="color: #333;margin-right:.2rem">总计划:</span><span style="color: #5396b9;float: right;">' +
                params.data.totalAmount +
                '(亿元)</span>' +
                '</span><br/><span style="color: #333;margin-right:.2rem">已完成:</span><span style="color: #5396b9;float: right;">' +
                params.data.Amount +
                '(亿元)</span>' +
                '</span><br/><span style="color: #333;margin-right:.2rem">未完成:</span><span style="color: #5396b9;float: right;">' +
                params.data.hangInTheAir +
                '(亿元)</span>' +
                '</span><br/><span style="color: #333;margin-right:.2rem">完成率:</span><span style="color: #5396b9;float: right;">' +
                params.data.completionRate +
                '</span></div>'
            );
        },
    },
    xAxis: {
        type: 'category',
        data: ['计量支付及合同金额', '总投资', '年总投资计划', '年计划建安投资'],
        axisTick: {
            show: false, // 不显示坐标轴刻度线
        },
        axisLine: {
            lineStyle: {
                width: 2,
            },
        },
        axisLabel: {
            show: true,
            interval: 0,
            formatter: function (value) {
                if (value.indexOf('计量支付') != -1) {
                    return value.substring(0, 4) + '\n' + value.slice(4);
                } else if (value.indexOf('年计划') != -1) {
                    return value.substring(0, 3) + '\n' + value.slice(3);
                } else {
                    return value;
                }
            },
            textStyle: {
                color: 'rgba(255,255,255,0.75)', // X轴文字颜色
                padding: [0, 0, 0, 0],
                fontSize: 12,
            },
        },
    },
    yAxis: {
        type: 'value',
        name: '(亿元)',
        // nameGap: 15 ,
        nameTextStyle: {
            color: 'rgba(255,255,255,0.40)',
            padding: [0, 0, 0, -25], // 四个数字分别为上右下左与原位置距离
        },
        splitLine: {
            // show: false // 不显示网格线
            lineStyle: {
                type: 'dashed',
                color: '#344a53',
            },
        },
        axisLabel: {
            color: 'rgba(252, 252, 252, 0.2)',
        },
    },
    series: [
        {
            stack: 'number',
            data: [
                {
                    name: '计量支付及合同金额',
                    value: eachartPiedata[0].Amount,
                    totalAmount: eachartPiedata[0].totalAmount,
                    Amount: eachartPiedata[0].Amount,
                    hangInTheAir: eachartPiedata[0].totalAmount - eachartPiedata[0].Amount,
                    completionRate:
                        eachartPiedata[0].Amount - 0 > 0
                            ? ((eachartPiedata[0].Amount / eachartPiedata[0].totalAmount) * 100).toFixed(2) + '%'
                            : '0%',
                },
                {
                    name: '总投资',
                    value: eachartPiedata[1].Amount,
                    totalAmount: eachartPiedata[1].totalAmount,
                    Amount: eachartPiedata[1].Amount,
                    hangInTheAir: eachartPiedata[1].totalAmount - eachartPiedata[1].Amount,
                    completionRate:
                        eachartPiedata[1].Amount - 0 > 0
                            ? ((eachartPiedata[1].Amount / eachartPiedata[1].totalAmount) * 100).toFixed(2) + '%'
                            : '0%',
                },
                {
                    name: '监理合年总投资计划',
                    value: eachartPiedata[2].Amount,
                    totalAmount: eachartPiedata[2].totalAmount,
                    Amount: eachartPiedata[2].Amount,
                    hangInTheAir: eachartPiedata[2].totalAmount - eachartPiedata[2].Amount,
                    completionRate:
                        eachartPiedata[2].Amount - 0 > 0
                            ? ((eachartPiedata[2].Amount / eachartPiedata[2].totalAmount) * 100).toFixed(2) + '%'
                            : '0%',
                },
                {
                    name: '采购年计划建安投资合同',
                    value: eachartPiedata[3].Amount,
                    totalAmount: eachartPiedata[3].totalAmount,
                    Amount: eachartPiedata[3].Amount,
                    hangInTheAir: eachartPiedata[3].totalAmount - eachartPiedata[3].Amount,
                    completionRate:
                        eachartPiedata[3].Amount - 0 > 0
                            ? ((eachartPiedata[3].Amount / eachartPiedata[3].totalAmount) * 100).toFixed(2) + '%'
                            : '0%',
                },
            ],
            itemStyle: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                    var colorList = [
                        ['#43D5A0', '#0A373E'],
                        ['#1B85BE', '#022A40'],
                        ['#CE6262', '#2E293D'],
                        ['#CEBE61', '#273100'],
                    ];
                    var index = params.dataIndex;
                    if (params.dataIndex >= colorList.length) {
                        index = params.dataIndex - colorList.length;
                    }
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: colorList[index][0],
                        },
                        {
                            offset: 1,
                            color: colorList[index][1],
                        },
                    ]);
                },
            },
            type: 'bar',
            barWidth: 16,
        },
        {
            stack: '计量支付及合同金额',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#117390',
                },
            },
            barWidth: 16,
            symbolRepeat: true,
            symbolSize: [15, 2],
            symbolMargin: 2,
            z: -10,
            data: [
                {
                    name: '计量支付及合同金额',
                    value: eachartPiedata[0].totalAmount,
                    totalAmount: eachartPiedata[0].totalAmount,
                    Amount: eachartPiedata[0].Amount,
                    hangInTheAir: eachartPiedata[0].totalAmount - eachartPiedata[0].Amount,
                    completionRate:
                        eachartPiedata[0].Amount - 0 > 0
                            ? ((eachartPiedata[0].Amount / eachartPiedata[0].totalAmount) * 100).toFixed(2) + '%'
                            : '0%',
                },
                {
                    name: '总投资',
                    value: eachartPiedata[1].totalAmount,
                    totalAmount: eachartPiedata[1].totalAmount,
                    Amount: eachartPiedata[1].Amount,
                    hangInTheAir: eachartPiedata[1].totalAmount - eachartPiedata[1].Amount,
                    completionRate:
                        eachartPiedata[1].Amount - 0 > 0
                            ? ((eachartPiedata[1].Amount / eachartPiedata[1].totalAmount) * 100).toFixed(2) + '%'
                            : '0%',
                },
                {
                    name: '监理合年总投资计划',
                    value: eachartPiedata[2].totalAmount,
                    totalAmount: eachartPiedata[2].totalAmount,
                    Amount: eachartPiedata[2].Amount,
                    hangInTheAir: eachartPiedata[2].totalAmount - eachartPiedata[2].Amount,
                    completionRate:
                        eachartPiedata[2].Amount - 0 > 0
                            ? ((eachartPiedata[2].Amount / eachartPiedata[2].totalAmount) * 100).toFixed(2) + '%'
                            : '0%',
                },
                {
                    name: '采购年计划建安投资合同',
                    value: eachartPiedata[3].totalAmount,
                    totalAmount: eachartPiedata[3].totalAmount,
                    Amount: eachartPiedata[3].Amount,
                    hangInTheAir: eachartPiedata[3].totalAmount - eachartPiedata[3].Amount,
                    completionRate:
                        eachartPiedata[3].Amount - 0 > 0
                            ? ((eachartPiedata[3].Amount / eachartPiedata[3].totalAmount) * 100).toFixed(2) + '%'
                            : '0%',
                },
            ],
        },
    ],
};
