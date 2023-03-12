var x_data = ["1号", "2号", "3号", "4号", "5号", "6号", "7号", "8号", "9号", "10号",
        "11号", "12号", "13号", "14号", "15号", "16号", "17号", "18号", "19号", "20号",
        "21号", "22号", "23号", "24号", "25号", "26号", "27号", "28号", "29号", "30号",
        "31号"
    ],
    pm25_data = [123, 110, 131, 112, 119, 111, 141, 131, 142, 121,
        122, 119, 120, 111, 113, 113, 120, 121, 123, 122, 110,
        122, 119, 120, 111, 113, 113, 120, 121, 123, 122, 110,
        121
    ],
    pm10_data = [188, 220, 219, 302, 199, 201, 209, 234, 312, 290,
        313, 235, 303, 220, 219, 234, 232, 270, 293, 230,
        313, 220, 209, 234, 312, 290, 313, 230, 313, 220,
        236
    ]

option = {
    legend: {
        data: ['PM2.5', "PM10"],
        orient: "vertical",
        right: "5%",
        textStyle: {
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(67,100,247,0.08)',
            },
        },
        backgroundColor: "rgba(67,100,247,0.85)",
        textStyle: {
            color: '#FFFFFF',
        },
        padding: 12,
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        data: x_data
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
    },
    color: ["rgba(242,166,149,1)", "rgba(137,195,248,1)"],
    series: [{
        name: "PM2.5",
        data: pm25_data,
        type: 'line',
        smooth: true
    }, {
        name: "PM10",
        data: pm10_data,
        type: 'line',
        smooth: true
    }]
};