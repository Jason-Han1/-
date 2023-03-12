option = {
    backgroundColor: '#FFFFFF',
    barWidth: 15,
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(251, 212, 55, 1)',
        textStyle: {
            color: 'rgba(255, 255, 255, 1)',
            fontSize: 12,
            fontWeight: 'bold',
            fontFamily: 'PingFang SC',
        },
        backgroundColor: 'rgba(251, 212, 55, 1)', //通过设置rgba调节背景颜色与透明度
        formatter: function (data) {
            return data.name + '：' + data.value; //将小数转化为百分数显示
        },
    },
    xAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: 'rgba(224, 224, 226, 1)',
                type: 'dashed',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            //  改变y轴颜色
            show: false,
        },
        axisLabel: {
            //  改变x轴字体颜色和大小
            textStyle: {
                color: 'rgba(153, 153, 153, 1)',
                fontSize: 12,
                fontWeight: 800,
            },
        },
    },
    yAxis: {
        type: 'category',
        data: ['旅游', '自然资源', '滨海北', '住建局', '宣传', '公安'],
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            //  改变y轴颜色
            lineStyle: {
                color: '#E0E0E2',
            },
        },
        axisLabel: {
            //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: 'rgba(142, 142, 142, 1)',
                fontSize: 12,
                fontWeight: 500,
            },
        },
    },
    series: [
        {
            type: 'bar',
            name: '产出',
            barWidth: 19,
            itemStyle: {
                normal: {
                    label: {
                        show: false, //开启显示
                        position: 'insideRight', //在上方显示
                        textStyle: {
                            //数值样式
                            color: '#FFFFFF',
                            fontSize: 16,
                            fontWeight: 600,
                        },
                    },
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        {
                            offset: 0,
                            color: 'rgba(48, 187, 240, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(48, 187, 240, 1)',
                        },
                    ]),
                    barBorderRadius: 4,
                },
            },
            // 移入当前的柱状图时改变颜色
            emphasis: {
                itemStyle: {
                    color: 'rgba(251, 212, 55, 1)', // 选中柱颜色
                },
            },
            data: [19, 29, 39, 81, 29, 39],
        },
    ],
};
