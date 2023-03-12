option = {
    backgroundColor: '#fff',
    title: {
        text: "总能耗",
        left: "",
        top: "%",
        textStyle: {
            color: "#333333",
            fontSize: "28"
        }
    },
    grid: {
        top: '10%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {

    },

    xAxis: [{
        type: 'category',
        data: ['01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10 ',
            '11 ',
            '12 ',
            '13 ',
            '14 ',
            '15 ',
            '16 ',
            '17 ',
            '18 ',
            '19 ',
            '20 ',
            '21 ',
            '22 ',
            '23 ',
            '24 '
        ],
        axisLine: {
            // show: false,
            lineStyle: {
                color: "#54BBE1",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#666666",
            }
        },
    }],
    yAxis: [{
        name: "吨标煤",
        nameTextStyle: {
            padding: [0, 0, 10, -50],
            color: '#333333',
            fontSize: 14,

        },
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#666666",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#063374",
            }
        }
    }],
    series: [{
        name: '总能耗',
        type: 'bar',
        data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66],
        // barWidth: 30, //柱子宽度
        // barGap: 10, //柱子之间间距
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#F7263A',
                    offset: 1,
                    color: '#F68A48'
                }]),
                opacity: 1,
            }
        }
    }]
};