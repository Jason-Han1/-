option = {
        color: ['#f5d268', '#99ADED'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
            data: ['租赁价指数','租赁量指数']
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            boundaryGap: true,
            data: [20170701, 20170801, 20170901, 20171001, 20171101, 20171201, 20180101, 20180201, 20180301, 20180401, 20180501],
            axisLabel: {
                rotate: 50, //旋转角度
            }
        },
        yAxis: [
            {
                type: 'value',
                name: '租赁量指数',
                axisLabel: {
                    textStyle: {
                        color: '#888'
                    },
                    formatter: '{value} '
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#eee',
                        type: 'dashed'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
            },
            {
                type: 'value',
                name: '租赁价指数',
                axisLabel: {
                    textStyle: {
                        color: '#888'
                    },
                    formatter: '{value} '
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#eee',
                        type: 'dashed'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
            }
        ],
        series: [
            {
                name: '租赁价指数',
                type: 'line',
                yAxisIndex: 1,
                data: ["102.26", "114.06", "110.38", "105.58", "108.65", "111.70", "120.78", "123.54", "118.31", "115.92", "123.22"]
            },
            {
                name: '租赁量指数',
                type: 'bar',
                data: ["863.00", "1166.00", "1054.00", "897.00", "912.00", "795.00", "744.00", "546.00", "1489.00", "2525.00", "1931.00"]
            }
        ]
    };