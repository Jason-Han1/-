var data = {
    area: ['教学编制', '科研编制', '教辅编制', '管理编制', '工勤编制'],

    legend: ['编制总数', '占编数', '缺编数', '超编数'],

    data1: [54, 62, 78, 79, 81],

    data2: [57, 55, 61, 58, 56],

    data3: [22, 21, 24, 21, 22],

    data4: [5, 6, 8, 7, 6, 10],
};

option = {
    backgroundColor: '#FFFFFF',

    tooltip: {
        trigger: 'axis',

        axisPointer: {
            type: 'shadow',

            textStyle: {
                color: '#fff',
            },
        },
    },

    grid: {
        borderWidth: 0,

        //top: 110,

        left: '8%',

        right: '4%',

        bottom: '18%',

        textStyle: {
            color: '#fff',
        },
    },

    legend: {
        right: '10%',

        top: '8%',

        textStyle: {
            color: '#90979c',
        },

        itemGap: 20,

        icon: 'circle',

        //data: data.legend,

        data: [
            {
                name: '编制总数',

                type: 'scroll',

                icon: 'circle',
            },

            {
                name: '占编数',

                type: 'scroll',
            },

            {
                name: '缺编数',

                type: 'scroll',
            },

            {
                name: '超编数',

                type: 'scroll',
            },
        ],
    },

    calculable: true,

    xAxis: [
        {
            type: 'category',

            axisLine: {
                lineStyle: {
                    color: '#90979c',
                },
            },

            splitLine: {
                show: false,
            },

            axisTick: {
                show: false,
            },

            splitArea: {
                show: false,
            },

            axisLabel: {
                interval: 0,
            },

            data: data.area,
        },
    ],

    yAxis: [
        {
            name: '单位：个',

            type: 'value',

            splitLine: {
                show: false,
            },

            axisLine: {
                show: false,
            },

            axisTick: {
                show: false,
            },

            axisLabel: {
                interval: 0,
            },

            splitArea: {
                show: false,
            },
        },
    ],

    series: [
        {
            name: '编制总数',

            type: 'line',

            symbolSize: 10,

            // symbol: 'circle',

            lineStyle: {
                normal: {
                    width: 4,

                    color: {
                        x: 0,

                        y: 0,

                        x2: 1,

                        y2: 0,

                        colorStops: [
                            {
                                offset: 0,

                                color: '#FD5066', // 0% 处的颜色
                            },

                            {
                                offset: 1,

                                color: '#FD5066', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },

            itemStyle: {
                normal: {
                    color: '#FD5066',

                    borderColor: {
                        x: 0,

                        y: 0,

                        x2: 1,

                        y2: 0,

                        colorStops: [
                            {
                                offset: 0,

                                color: '#FD5066', // 0% 处的颜色
                            },

                            {
                                offset: 1,

                                color: '#FD5066', // 100% 处的颜色
                            },
                        ],
                    },

                    borderWidth: 10,
                },
            },

            data: data.data1,
        },

        {
            type: 'bar',

            name: '占编数',

            stack: '总量',

            //barGap: '-70%',

            barMaxWidth: 18,

            barGap: '10%',

            itemStyle: {
                normal: {
                    // color: '#1890FF',

                    color: {
                        x: 0,

                        y: 0,

                        x2: 0,

                        y2: 1,

                        colorStops: [
                            {
                                offset: 0,

                                color: '#63B4FF',
                            },

                            {
                                offset: 1,

                                color: '#1890FF',
                            },
                        ],
                    },
                },
            },

            data: data.data2,
        },

        {
            type: 'bar',

            name: '缺编数',

            stack: '总量',

            barMaxWidth: 20,

            // barGap: '-100%',

            itemStyle: {
                normal: {
                    // color: '#FEAD5A',

                    barBorderRadius: 0,

                    color: {
                        x: 0,

                        y: 0,

                        x2: 0,

                        y2: 1,

                        colorStops: [
                            {
                                offset: 0,

                                color: '#FFD18C',
                            },

                            {
                                offset: 1,

                                color: '#FEAD5A',
                            },
                        ],
                    },
                },
            },

            data: data.data3,
        },

        {
            type: 'bar',

            name: '超编数',

            barGap: '-85%',

            barMaxWidth: 15,

            itemStyle: {
                normal: {
                    //color: '#7E83EE',

                    barBorderRadius: 0,

                    color: {
                        x: 0,

                        y: 0,

                        x2: 0,

                        y2: 1,

                        colorStops: [
                            {
                                offset: 0,

                                color: '#899BF9',
                            },

                            {
                                offset: 1,

                                color: '#7A7AE9',
                            },
                        ],
                    },
                },
            },

            data: data.data3,
        },
    ],
};

return option;
