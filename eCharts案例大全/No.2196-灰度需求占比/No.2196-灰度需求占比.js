var title = '2021-8';
option = {
    title: {
        text: title,
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    legend: {
        top: 30,
        data: ['业务需求', '系统优化', '系统问题','灰度需求占比'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            data: ['哈尔滨分院', '济南分院', '天源迪科', '亚信'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            axisLabel: {
                formatter: '{value} 个',
            },
        },
        {
            type: 'value',
            name: '灰度需求占比',
            min: 0,
            axisLabel: {
                formatter: '{value} %',
            },
        },
    ],
    series: [
        {
            name: '业务需求',
            type: 'bar',
            stack: '版本规模',
            label: {
                show: true,
                normal: {
                    show: true,
                    fontSize: 14,
                    formatter: function (params) {
                        if (params.value > 0) {
                            return params.value;
                        } else {
                            return '';
                        }
                    },
                },
            },
            emphasis: {
                focus: 'series',
            },
            data: [120, 132, 101, 134],
        },
        {
            name: '系统优化',
            type: 'bar',
            stack: '版本规模',
            label: {
                show: true,
                normal: {
                    show: true,
                    fontSize: 14,
                    formatter: function (params) {
                        if (params.value > 0) {
                            return params.value;
                        } else {
                            return '';
                        }
                    },
                },
            },
            emphasis: {
                focus: 'series',
            },
            data: [220, 182, 191, 234],
        },
        {
            name: '系统问题',
            type: 'bar',
            stack: '版本规模',
            label: {
                show: true,
                normal: {
                    show: true,
                    fontSize: 14,
                    formatter: function (params) {
                        if (params.value > 0) {
                            return params.value;
                        } else {
                            return '';
                        }
                    },
                },
            },
            emphasis: {
                focus: 'series',
            },
            data: [150, 232, 201, 154],
        },
        {
            name: '灰度需求占比',
            type: 'line',
            animation: false,
            yAxisIndex: 1,
            data: [20, 10, 50, 30],
            label: {
                show: true,
                position: 'insideRight',
                normal: {
                    show: true,
                    formatter: function (params) {
                        if (params.value > 0) {
                            return params.value + '%';
                        } else {
                            return '';
                        }
                    },
                },
            },
        },
    ],
};
