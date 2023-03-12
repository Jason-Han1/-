option = {
    backgroundColor: '#1a2026',

    grid: {
        top: '18%',
        left: '15%',
        right: '5%',
        bottom: '25%',
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#b8cff0',
                },
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#b8cff0',
                    padding: 16,
                    fontSize: 18,
                },
                formatter: function (data) {
                    return data;
                },
            },
            splitLine: false,
            axisTick: {
                show: false,
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
    ],
    yAxis: [
        {
            nameTextStyle: {
                color: '#b8cff0',
                fontSize: 16,
                padding: 10,
            },
            min: 0,
            max: 25,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#192a44',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#b8cff0',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 18,
                    color: '#b8cff0',
                    padding: 16,
                },
                formatter: function (value) {
                    if (value === 0) {
                        return value;
                    }
                    return value;
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            type: 'line',
            showSymbol: false,
            smooth: true,
            lineStyle: {
                normal: {
                    width: 5,
                    color: 'rgba(25,163,223,1)', // 线条颜色
                },
                borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
                color: 'rgba(25,163,223,1)',
                borderColor: '#646ace',
                borderWidth: 0,
            },
            markLine: {
                symbol: 'none',
                data: [
                    {
                        name: '目标值',
                        yAxis: 21.4,
                        lineStyle: { width: 1.656, color: '#efea42',opacity:0.5 },
                        label: { show: false },
                    },
                ],
            },
            markPoint: {
                silent: true,
                label: { fontSize: 33.12 },
                data: [
                    {
                        yAxis: 22,
                        x: '85%',
                        symbolSize: 0.1,
                        label: {
                            textStyle: { color: '#efea42' },
                            fontSize:20,
                            position: 'right',
                            formatter: '目标值：21.4',
                        },
                    },
                ],
            },
            areaStyle: {
                //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(25,163,223,.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(25,163,223, 0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                    shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
            },
            data: ['18', '19', '20', '21', '21', '22', '23', '23', '23'],
        },
    ],
};
