option = {
    color: ['#5AB1EF'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['无问题项目', '有问题项目'],
            axisTick: {
                show: false,
                alignWithLabel: false
            },
            axisLine: {
                show: false
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: function (value) {
                    return value + " 个";
                }
            },
            axisLine: {
                show: false
            },
        }
    ],
    series: [
        {
            name: '个数',
            type: 'bar',
            barWidth: '20%',
            data: [715, 12,]
        }
    ]
};
