
let before = [
    "119.0000",
    "114.0000",
    "126.0000",
    "98.0000",
    "75.0000",
    "93.0000",
    "125.0000",
    "103.0000",
    "91.0000",
    "98.0000",
    "90.0000",
    "108.0000",
    "91.0000",
    "122.0000",
    "110.0000",
    "103.0000",
    "148.0000",
    "81.0000",
    "83.0000",
    "113.0000",
    "86.0000",
    "120.0000",
    "81.0000",
    "102.0000",
    "86.0000",
    "80.0000",
    "107.0000",
    "87.0000",
    "93.0000",
    "91.0000"
]
let after = [
    "130.0000",
    "148.0000",
    "156.0000",
    "126.0000",
    "110.0000",
    "120.0000",
    "151.0000",
    "135.0000",
    "111.0000",
    "112.0000",
    "140.0000",
    "143.0000",
    "120.0000",
    "143.0000",
    "138.0000",
    "129.0000",
    "173.0000",
    "122.0000",
    "100.0000",
    "158.0000",
    "117.0000",
    "140.0000",
    "107.0000",
    "130.0000",
    "129.0000",
    "109.0000",
    "139.0000",
    "108.0000",
    "125.0000",
    "129.0000"
]


option = {
    backgroundColor: '#020933',
    title: {
        text: '数据对比图',
        textStyle: {
            align: 'top',
            color: '#fff',
            fontSize: 20,
        },
        top: '5%',
        left: 'center',
    },
    legend: {
        data: ['学员一', '学员二'],
        textStyle: {
            color: '#fff',
            align: 'right',
        },
        x: 'right'
    },
    dataZoom: [{
        type: 'slider',
        show: true,
        height: 20,
        left: '10%',
        right: '10%',
        bottom: '2%',
        start: 0,
        end: 30,
        textStyle: {
            color: '#d4ffff',
            fontSize: 11,
        },
    }, {
        type: 'inside'
    }],
    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#7A7A7A',
                width: 2
            }
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#EDEDED'
        },
        splitLine: {

        },
        axisTick: {
            show: false,
        },
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "32", "33"],
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 4,
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#7A7A7A',
                width: 2
            }
        },
        axisLabel: {
            textStyle: {
                color: '#F1F1F1',
                fontSize: 16

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: '学员一',
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 12,
            lineStyle: {
                normal: {
                    color: "#7A7A7A",
                },
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    },
                    color: "#fff",
                    borderColor: "#fff"
                },

            },
            tooltip: {
                show: false
            },
            data: before
        },
        {
            name: '学员二',
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 12,
            lineStyle: {
                normal: {
                    color: "#7A7A7A",
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#7A7A7A',
                }
            },
            itemStyle: {

                normal: {
                    label: {
                        show: true
                    },
                    color: "#7A7A7A",
                    borderColor: "#fff",
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
            },
            tooltip: {
                show: false
            },
            data: after,
        },
    ]

};