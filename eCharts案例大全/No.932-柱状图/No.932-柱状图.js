option = {
    backgroundColor:'#000',
    legend: {
        data: ['节点个数', '企业个数'],
        top: '8%',
        right: '10',
        textStyle: {
            color: '#fff',
            fontSize: 12,
        },
    },
    grid: {
        left: 70,
        top: 70,
        bottom: 10,
    },
    barWidth: 15,
    xAxis: {
        type: 'value',
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            //  改变x轴颜色
            show: false,
        },
        axisLabel: {
            //  改变x轴字体颜色和大小
            show: false,
        },
    },
    yAxis: [
        {
            type: 'category',
            data: ['武汉', '襄阳', '荆州', '宜昌'],
            inverse: true,
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                //  改变y轴颜色
                show: false,
            },
            axisLabel: {
                //  改变y轴字体颜色和大小
                //formatter: '{value} m³ ', //  给y轴添加单位
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },
            },
        },
        {
            type: 'category',
            inverse: true,
            data: ['武汉', '襄阳', '荆州', '宜昌'],
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
    ],
    series: [
        {
            type: 'bar',
            name: '节点个数',
            stack: '节点个数',
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'right', //在上方显示
                        textStyle: {
                            //数值样式
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 600,
                        },
                        formatter: function (params) {
                            return params.value + '个';
                        },
                    },
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        {
                            offset: 0,
                            color: '#039ade',
                        },
                        {
                            color: '#163398',
                            offset: 1,
                        },
                    ]),
                    borderWidth: 2,
                },
            },
            data: [2821, 1821, 821, 621],
        },
        {
            type: 'bar',
            name: '企业个数',
            // yAxisIndex: 1,
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'right', //在上方显示
                        textStyle: {
                            //数值样式
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 600,
                        },
                        formatter: function (params) {
                            let num = 0;
                            num = [8, 6, 4, 2][params.dataIndex];
                            return num + '家';
                        },
                    },
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        {
                            offset: 0,
                            color: '#2e60db',
                        },
                        {
                            offset: 1,
                            color: '#163398',
                        },
                    ]),
                    borderWidth: 2,
                },
            },
            data: [2821, 1821, 821, 621],
        },
    ],
};
