var colors = ['#f00', '#00f', '#ff0', '#0ff', '#f0f'];
option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        show: false, //不显示x轴相关信息
    },
    yAxis: [
        {
            show: true,
            type: 'category',
            data: ['html5', 'css', 'js', 'vue', 'node'],
            axisTick: { show: false }, //不显示刻度线
            axisLabel: {
                color: '#000',
            },
            axisLine: {
                show: false,
            },
            // inverse: true,
        },
        {
            show: true,
            type: 'category',
            data: [70, 33, 60, 78, 69],
            axisTick: { show: false }, //不显示刻度线
            axisLabel: {
                color: '#000',
                formatter: '{value}%'
            },
            axisLine: {
                show: false,
            },
            // inverse: true,
        },
    ],
    series: [
        {
            name: '条',
            z: 1,
            yAxisIndex: 0,
            type: 'bar',
            data: [70, 33, 60, 78, 69],
            // 修改第一条柱子的圆角
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: function (params) {
                        //params 传递过来的柱子对象
                        // dataIndex 是当前柱子的索引
                        var num = colors.length;
                        return colors[params.dataIndex % num];
                    },
                },
                // color 可以修改柱子的颜色
                // color:"orange"
            },
            // 柱子之间的间距
            barCategoryGap: 5,
            // 柱子之间的宽度
            barWidth: 20,
            // 显示柱子内的文字
            label: {
                show: false,
                position: 'inside',
                formatter: '{c}%',
                // {c} 会自动解析为data中的数据
            },
        },
        {
            name: '框',
            z: 0,
            yAxisIndex: 1,
            type: 'bar',
            data: [100, 100, 100, 100, 100],
            // 柱子之间的间距
            barCategoryGap: 5,
            // 柱子之间的宽度
            barWidth: 20,
            itemStyle: {
                color: '#DBE4EB', //填充色
                borderColor: '#F1F4F7',
                borderWidth: 1,
                barBorderRadius: 15,
            },
        },
    ],
};
