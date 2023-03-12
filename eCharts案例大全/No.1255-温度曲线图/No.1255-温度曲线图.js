option = {
    backgroundColor: '#062D87',
    title: {
        text: '当前温度变化情况',
        textStyle: {
            color: '#ccc',
        },
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['涂料车间A区温、湿度', '乳胶漆车间温、湿度', '水包水3层温度', '空压机房', 'C区温、湿度'],
        textStyle: {
            color: '#fff',
        },
    },
    grid: {
        top: 'middle',
        left: '3%',
        right: '4%',
        bottom: '3%',
        height: '80%',
        containLabel: false,
    },
    toolbox: {
        show: false,//右上角的工具
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['21:15:10', '21:15:20', '21:15:30', '21:15:40', '21:15:50', '21:16:00', '21:16:10'],
            axisTick: {
                show: true, //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ebf8ac', //X轴文字颜色
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: "℃'",
            nameTextStyle: {
                color: '#ebf8ac',
            },
            axisLabel: {
                formatter: '{value}℃',
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ebf8ac',
                },
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#DDD',
                },
            },
        },
    ],
    series: [
        {
            name: '涂料车间A区温、湿度',
            type: 'line',
            min: 10,
            max: 40,
            data: [32, 34, 39, 35, 38, 36, 34],
            markPoint: {
                data: [{ name: '周最高', value: 39, xAxis: 2, yAxis: 39 }],
            },
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [
                            {
                                offset: 0,
                                color: '#AAF487', // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#47D8BE', // 100% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#47D8BE', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: 'rgba(71,216,190, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7,
                },
            },
            itemStyle: {
                normal: {
                    color: '#AAF487',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: '#AAF487',
                },
            },
            smooth: true,
            markLine: {
                data: [{ type: 'average', name: '平均值' }],
            },
        },
        {
            name: '乳胶漆车间温、湿度',
            type: 'line',
            min: 10,
            max: 40,
            data: [25, 22, 26, 28, 27, 26, 23],
            markPoint: {
                data: [{ name: '周最低', value: 22, xAxis: 1, yAxis: 22 }],
            },
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [
                            {
                                offset: 0,
                                color: '#EEEE00', // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#FFFF00', // 40% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FFFF33', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: 'rgba(249,165,137, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7,
                },
            },
            itemStyle: {
                normal: {
                    color: '#F6D06F',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: '#F6D06F',
                },
            },
            smooth: true,
            markLine: {
                data: [{ type: 'average', name: '平均值' }],
            },
        },
        {
            name: '水包水3层温度',
            type: 'line',
            min: 10,
            max: 40,
            data: [11, 33, 11, 22, 33, 22, 33],
            markPoint: {
                data: [{ name: '周最低', value: 22, xAxis: 1, yAxis: 22 }],
            },
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [
                            {
                                offset: 0,
                                color: '#DDAA00', // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#FFCC00', // 100% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FFCC22', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: 'rgba(249,165,137, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7,
                },
            },
            itemStyle: {
                normal: {
                    color: '#F6D06F',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: '#F6D06F',
                },
            },
            smooth: true,
            markLine: {
                data: [{ type: 'average', name: '平均值' }],
            },
        },
        {
            name: '空压机房',
            type: 'line',
            min: 10,
            max: 40,
            data: [9, 8, 22, 33, 39, 38, 33],
            markPoint: {
                data: [{ name: '周最低', value: 22, xAxis: 1, yAxis: 22 }],
            },
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [
                            {
                                offset: 0,
                                color: '#E63F00', // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#FF5511', // 100% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FF7744', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: 'rgba(249,165,137, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7,
                },
            },
            itemStyle: {
                normal: {
                    color: '#F6D06F',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: '#F6D06F',
                },
            },
            smooth: true,
            markLine: {
                data: [{ type: 'average', name: '平均值' }],
            },
        },
        {
            name: 'C区温、湿度',
            type: 'line',
            min: 10,
            max: 40,
            data: [10, 22, 9, 32, 11, 23, 43],
            markPoint: {
                data: [{ name: '周最低', value: 22, xAxis: 1, yAxis: 22 }],
            },
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [
                            {
                                offset: 0,
                                color: '#00DDDD', // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#00FFFF', // 100% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#33FFFF', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: 'rgba(249,165,137, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7,
                },
            },
            itemStyle: {
                normal: {
                    color: '#F6D06F',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: '#F6D06F',
                },
            },
            smooth: true,
            markLine: {
                data: [{ type: 'average', name: '平均值' }],
            },
        },
    ],
};
