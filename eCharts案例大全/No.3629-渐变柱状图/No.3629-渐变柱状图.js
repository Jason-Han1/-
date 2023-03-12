option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        top: '3%',
        left: '3%',
        right: '3%',
        bottom: '2%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: ['幼儿园', '小学生', '初中生', '高中生', '大学生', '硕士', '博士', '博士后', '教授'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [100, 280, 300, 250, 350, 320, 360, 210, 360, 110],
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                normal: {
                    //这里是重点
                    color: function (params) {
                        //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                        var colorList = [
                            '#E82612',
                            '#E82612',
                            '#E82612',
                            '#E82612',
                            '#E82612',
                            '#E82612',
                            '#E82612',
                            '#E82612',
                            '#E82612',
                            '#E82612',
                        ];
                        var colorList1 = [
                            '#FF905F',
                            '#FF905F',
                            '#FF905F',
                            '#FF905F',
                            '#FF905F',
                            '#FF905F',
                            '#FF905F',
                            '#FF905F',
                            '#FF905F',
                            '#FF905F',
                        ];
                        //如果需要使用渐变色, 则应使用echarts内置的渐变色生成器echarts.graphic.LinearGradient
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: colorList[params.dataIndex] },
                            { offset: 1, color: colorList1[params.dataIndex] },
                        ]);
                    },
                },
            },
        },
    ],
};
