var colorArray = [
    {
        top: '#FFC37A',
        bottom: 'transparent',
    },
    {
        top: '#FEFF74',
        bottom: 'transparent',
    },
    {
        top: '#97FF9A',
        bottom: 'transparent',
    },
];
option = {
    tooltip: {
        show: true,
        formatter: '{b}:{c}',
    },
    grid: {
        left: '5%',
        top: '12%',
        right: '1%',
        bottom: '8%',
        containLabel: true,
    },

    xAxis: {
        type: 'value',
        show: false,
        position: 'top',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            },
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: [
        {
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,
            },
            splitLine: {
                //网格线
                show: false,
            },
            inverse: 'true', //排序
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#76D4FF',
                },
            },
            axisLabel: {
                fontSize: '24px',
            },
            data: ['集团重点', '天分重点', '三类项目'],
        },
    ],
    series: [
        {
            name: '能耗值',
            type: 'bar',
            barMaxWidth:20,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}',
                    textStyle: {
                        fontSize:24,
                        fontStyle:'italic',
                        color: 'white', //color of value
                    },
                },
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: function (params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            colorStops: [
                                {
                                    offset: 0,
                                    color: colorArray[params.dataIndex % num].bottom,
                                },
                                {
                                    offset: 1,
                                    color: colorArray[params.dataIndex % num].top,
                                },
                                {
                                    offset: 0,
                                    color: colorArray[params.dataIndex % num].bottom,
                                },
                                {
                                    offset: 1,
                                    color: colorArray[params.dataIndex % num].top,
                                },
                                {
                                    offset: 0,
                                    color: colorArray[params.dataIndex % num].bottom,
                                },
                                {
                                    offset: 1,
                                    color: colorArray[params.dataIndex % num].top,
                                },
                                {
                                    offset: 0,
                                    color: colorArray[params.dataIndex % num].bottom,
                                },
                                {
                                    offset: 1,
                                    color: colorArray[params.dataIndex % num].top,
                                },
                                {
                                    offset: 0,
                                    color: colorArray[params.dataIndex % num].bottom,
                                },
                                {
                                    offset: 1,
                                    color: colorArray[params.dataIndex % num].top,
                                },
                                {
                                    offset: 0,
                                    color: colorArray[params.dataIndex % num].bottom,
                                },
                                {
                                    offset: 1,
                                    color: colorArray[params.dataIndex % num].top,
                                },
                            ],
                            //globalCoord: false
                        };
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                },
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [60, 132, 89],
        },
    ],
};
