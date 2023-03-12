let res = [
    [
        "科目一",
        "知识一",
        "-0.04"
    ],
    [
        "科目一",
        "知识二",
        "-0.04"
    ],
    [
        "科目一",
        "知识三",
        "-0.26"
    ],
    [
        "科目一",
        "知识四",
        "0.29"
    ],
    [
        "科目一",
        "知识五",
        "0.46"
    ],
    [
        "科目二",
        "知识一",
        "-0.32"
    ],
    [
        "科目二",
        "知识二",
        "-0.37"
    ],
    [
        "科目二",
        "知识三",
        "-0.55"
    ],
    [
        "科目二",
        "知识四",
        "0.82"
    ],
    [
        "科目二",
        "知识五",
        "0.6"
    ],
    [
        "科目三",
        "知识一",
        "0.89"
    ],
    [
        "科目三",
        "知识二",
        "0.9"
    ],
    [
        "科目三",
        "知识三",
        "0.75"
    ],
    [
        "科目三",
        "知识四",
        "-0.66"
    ],
    [
        "科目三",
        "知识五",
        "-0.23"
    ],
    [
        "科目四",
        "知识一",
        "-0.06"
    ],
    [
        "科目四",
        "知识二",
        "-0.11"
    ],
    [
        "科目四",
        "知识三",
        "-0.38"
    ],
    [
        "科目四",
        "知识四",
        "0.58"
    ],
    [
        "科目四",
        "知识五",
        "0.46"
    ],
    [
        "科目五",
        "知识一",
        "0.01"
    ],
    [
        "科目五",
        "知识二",
        "0.08"
    ],
    [
        "科目五",
        "知识三",
        "0.08"
    ],
    [
        "科目五",
        "知识四",
        "-0.29"
    ],
    [
        "科目五",
        "知识五",
        "0.11"
    ]
]

option = {
    backgroundColor: '#211b6a',
    xAxis: {
        position: 'top',
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#fff',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 16,
                color: 'rgba(255,255,255,.8)',
            }
        },
    },
    yAxis: {
        type: 'category',
        inverse: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 16,
                color: 'rgba(255,255,255,.8)',
            }
        },
    },
    visualMap: {
        type: 'continuous',
        max: 1,
        min: -1,
        inRange: {
            color: ['#FEFFD8', '#DCF0B4', '#A6DEB8', '#209AC2', '#1C5EAA', '#1B2D8E']
        },
        show: false,
        top: 60,
        right: 100,
        textStyle: {
            color: '#FFF' //图例文字颜色，大小等配置
        },
        // align: "right",
        // precision: 2,
        // itemHeight: 1020,
        // itemWidth: 30,
        // text: ['High', 'Low'],//两端的文本
        // realtime: false,
        // calculable: true,
    },
    series: [{
        type: 'scatter',
        symbolSize: function(data) {
            return Math.sqrt(Math.abs(data[2]) ) * 100;
        },
        data: res,
        label: {
            color: '#fff',
            textStyle: {
                fontSize: 10, //字体大小

            },
            formatter: '{@[2]}',
            show: true
        }
    }]

};