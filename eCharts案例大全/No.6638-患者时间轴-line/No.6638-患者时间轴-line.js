option = {
    grid: [{
        height: 60,
    }],
    xAxis: {
        type: 'time',
        boundaryGap: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#d8d8d8',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            margin: 15,
            color: 'rgba(0,0,0,0.54)',
            fontSize: 14,
        },
        splitLine: {
            show: false,
        },
        // splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax',
        // offset: -10, 
    },
    yAxis: {
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false,
        },
        max: val=> val.max + 20,

    },

    series: [{
            type: 'line',
            symbol: 'circle',
            symbolSize: 16,
            itemStyle: {
                borderColor: '#fff',
            },
            lineStyle: {
                width: 2,
            },
            data: [
                [1584086222000, 10],
                [1584086582000, "10"]
            ]
        }, {
            type: 'line',
            symbol: 'circle',
            symbolSize: 16,
            itemStyle: {
                borderColor: '#fff',
            },
            lineStyle: {
                width: 2,
            },
            data: [
                [1584086822000, "436"],
                [1584087062000, "43"],
                [1584088382000, "200"]
            ],
            markArea: {
                show: true,
                // silent: true,
                // label: {
                //     position: [10, 10],
                //     color: '#53A58A',
                //     fontSize: 14,
                //     fontWeight: 'bold',
                // },
                itemStyle: {
                    color: 'rgba(83,165,138,.1)',
                },
                data: [
                    [{
                            coord: [1584086822000]
                        },
                        {
                            coord: [1584088382000]
                        }
                    ]
                ],
            },
        },

        {
            type: 'line',
            symbol: 'circle',
            symbolSize: 16,
            itemStyle: {
                borderColor: '#fff',
            },
            lineStyle: {
                width: 2,
            },
            data: [
                [1584088862000, "0"],
                // [1584088982000, "0"],
                // [1584089102000, "0"],
                // [1584089222000, "0"],
                // [1584089342000, "0"],
                // [1584089462000, "0"]
            ]
        }, {
            type: 'line',
            symbol: 'circle',
            symbolSize: 16,
            itemStyle: {
                borderColor: '#fff',
            },
            lineStyle: {
                width: 2,
            },
            data: [
                // [1584088862000, "0"],
                // [1584088982000, "0"],
                // [1584089102000, "0"],
                [1584089222000, "0"],
                // [1584089342000, "0"],
                [1584089462000, "0"]
            ]
        }
    ]
};