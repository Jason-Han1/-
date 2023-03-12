const xData = ['111', '222', '333'];
const yData = [23, 34, 56];
const barWidth = 30;
const color1 = {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    type: 'linear',
    global: false,
    colorStops: [
        {
            // 柱状图上方颜色
            offset: 0,
            color: '#be6331',
        },
        {
            // 柱状图下方颜色
            offset: 1,
            color: '#ceb149',
        },
    ],
};
const maxData = yData.map(() => 100);
const circleData = yData.map(() => ({ name: '', value: 100, symbolPosition: 'end' }));
option = {
    backgroundColor: '#0A2E5D',
    // 提示框
    tooltip: {
        // 提示
        show: true,
        trigger: 'axis',
    },
    grid: {
        top: '0%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: false,
            },
        },
    ],
    yAxis: [
        // 立体柱状图由两部分堆叠组成 ，设置serve中xAxisIndex可进行堆叠
        // 横向柱状图 xAxis中 type设置成value yAxis设置category ，serve中设置yAxisIndex可进行堆叠
        {
            type: 'category',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 18,
                },
                formatter(value) {
                    var ret = ''; // 拼接加\n返回的类目项
                    const maxLength = 4; // 每项显示文字个数
                    const valLength = value.length; // X轴类目项的文字个数
                    const rowN = Math.ceil(valLength / maxLength); // 类目项需要换行的行数
                    if (rowN > 1) {
                        for (var i = 0; i < rowN; i++) {
                            var temp = ''; // 每次截取的字符串
                            const start = i * maxLength; // 开始截取的位置
                            const end = start + maxLength; // 结束截取的位置
                            // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = value.substring(start, end) + '\n';
                            ret += temp; // 凭借最终的字符串
                        }
                        return ret;
                    } else {
                        return value;
                    }
                },
            },
            splitLine: {
                show: false,
            },
            data: xData,
        },
        {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            data: xData,
        },
    ],

    series: [
        {
            name: '内部柱子顶部',
            type: 'pictorialBar',
            tooltip: { show: false },
            symbolSize: [10, barWidth],
            symbol: 'diamond',
            symbolOffset: ['50%', '0%'],
            symbolPosition: 'end',
            z: 15,
            color: '#ceb149',
            zlevel: 2,
            data: yData,
        },

        {
            type: 'bar',
            barGap: '60%',
            barWidth,
            itemStyle: {
                color: color1,
                borderColor: color1,
                borderWidth: 1,
                borderType: 'solid',
            },
            label: {
                show: false,
            },
            zlevel: 2,
            data: yData,
        },
        {
            name: '背景柱子1',
            type: 'bar',
            tooltip: { show: false },
            yAxisIndex: 1,
            barGap: '60%',
            data: yData.map(() => 100),
            zlevel: 1,
            barWidth,
            itemStyle: {
                normal: {
                    color: 'rgba(16, 56, 70,.8)',
                },
            },
        },
        {
            name: '底部圆1',
            type: 'pictorialBar',
            tooltip: { show: false },
            symbol: 'diamond',
            symbolSize: [10, barWidth],
            symbolOffset: ['-50%', '0%'],
            z: 12,
            color: '#ceb149',
            data: maxData,
        },
        // 头
        {
            name: '顶部圆1',
            type: 'pictorialBar',
            tooltip: { show: false },
            z: 20,
            zlevel: 3,
            symbolPosition: 'end',
            symbolSize: [10, barWidth],
            symbol: 'diamond',
            symbolOffset: ['50%', '0%'],
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 5,
                    shadowOffsetY: 3,
                    shadowOffsetX: 0,
                    color: 'rgba(30, 100, 112,1)',
                },
            },
            data: circleData,
        },
    ],
};
