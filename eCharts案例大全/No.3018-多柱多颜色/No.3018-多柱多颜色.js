option = {
    grid: {
        left: '10%',
        right: '10%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'item',
    },
    xAxis: {
        data: ['苹果', '小米', '华为'],
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#E5E5E5',
            },
        },
        axisLabel: {
            color: '#989898',
        },
    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E5E5E5',
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#E5E5E5',
            },
        },
        axisLabel: {
            color: '#CCCCCC',
        },
    },
    series: [
        {
            name: '手机品牌',
            type: 'bar',
            data: [19, 15, 40],
            //设置柱子的宽度
            barWidth: 80,
            //配置样式
            itemStyle: {
                //通常情况下：
                normal: {
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params) {
                        var colorList = ['#FFAEBF', '#93D9D9', '#87C7F3'];
                        return colorList[params.dataIndex];
                    },
                },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};
