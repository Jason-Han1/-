option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var relVal = params[0].name + '<br/>';
            relVal += params[0].seriesName + ':' + Math.abs(params[0].value) + '件' + '<br/>';
            relVal += params[1].seriesName + ':' + Math.abs(params[1].value * 2) + '元' + '<br/>';
            return relVal; //负数取绝对值变正数
        },
    },
    legend: {
        data: ['案件数量', '处罚金额'],
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true,
            },
            dataView: {
                show: true,
                readOnly: false,
            },
            magicType: {
                show: true,
                type: ['line', 'bar'],
            },
            restore: {
                show: true,
            },
            saveAsImage: {
                show: true,
            },
        },
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false,
            },
            data: ['2020-09', '10', '11', '12', '2021-01', '02', '03'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: function (value) {
                    if (value < 0) {
                        return -value * 2;
                    } else {
                        return value;
                    }
                },
                show: false,
            },
        },
    ],
    series: [
        {
            name: '案件数量',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                    },
                },
            },
            data: [100, 100, 100, 100, 100, 100, 100],
        },
        {
            name: '处罚金额',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: function (data) {
                            if (data.value < 0) {
                                return Math.abs(data.value * 2);
                            }
                        },
                    },
                },
            },
            data: [-100, -100, -100, -100, -100, -100, -100],
        },
    ],
};
