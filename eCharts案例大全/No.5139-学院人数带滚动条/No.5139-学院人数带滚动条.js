var img = [{
    a: "/asset/get/s/data-1604988294348-_OfNvbRKA.png",
    b: "/asset/get/s/data-1604988292463-vstFIV5JR.png",
}, {
    a: "/asset/get/s/data-1604988314807-ZcB8g5BAq.png",
    b: "/asset/get/s/data-1604988312681-rRn_FBYbw.png",
}, {
    a: "/asset/get/s/data-1604988264324-r-hmFto8A.png",
    b: "/asset/get/s/data-1604988262230-46SDxo9bc.png",
}, {
    a: "/asset/get/s/data-1604988235437-hZvCsLghK.png",
    b: "/asset/get/s/data-1604988230924-0NsvQA98h.png",
}];

var value = 1; // >0
var getname = ['软件工程', '材料物理', '汽车工程', '应用化学', '电子信息工程', '建筑学', '高分子材料域工程 ', '石油工程', '专业1', '专业2', '专业3', '专业4', '专业5', '专业6', '专业7', '专业8'];
var getvalue = [90.13, 84.85, 82.32, 76.87, 74.31, 70.12, 68.96, 65.32, 63.14, 60.32, 55.11, 53.42, 52.86, 50.13, 49.75, 40.13];
var ydata1 = [];
var ydata2 = [];
for (var i = 0; i < getname.length; i++) {
    if (i <= 3) {
        ydata1.push({
            value: value,
            symbol: 'image://' + img[i].b
        });
        ydata2.push({
            value: getvalue[i],
            symbol: 'image://' + img[i].a
        });
    } else {
        ydata1.push({
            value: value,
            symbol: 'image://' + img[i % 4].b
        });
        ydata2.push({
            value: getvalue[i],
            symbol: 'image://' + img[i % 4].a
        });
    }
}

option = {
    backgroundColor: "#FFF",
    grid: {
        left: "50",
        top: "20",
        bottom: "20",
        right: "120",
        containLabel: true
    },
    tooltip: {
        trigger: "item",
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: [{
            type: "category",
            inverse: true,
            data: getname,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: "#3e86dd"
                }
            },
            axisLabel: {
                margin: 15,
                textStyle: {
                    color: "#888888",
                    fontSize: 15,
                }

            }
        }

    ],
    dataZoom: [{
        show: true,
        zoomLock: true, //禁止拉伸
        width: 8,
        yAxisIndex: [0],
        bottom: 30,
        top: 20,
        right: 20,
        startValue: 0,
        endValue: 4,
        handleIcon: "M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",
        handleSize: "100%",
        handleStyle: {
            color: "#DBDBDB",
        },
        backgroundColor: "transparent",
        fillerColor: "#DBDBDB",
        textStyle: {
            color: "transparent",
        },
        dataBackground: {
            lineStyle: {
                color: "transparent",
            },
            areaStyle: {
                color: "transparent",
            },
        },
        borderColor: "transparent",
    }],
    series: [

        {
            tooltip: {
                show: false
            },
            z: 4,
            type: "pictorialBar",
            symbolSize: ['18', '28'],
            barWidth: 18,
            symbolRepeat: "fixed",
            symbolMargin: 6,
            data: ydata1,
        },
        {
            z: 6,
            type: "pictorialBar",
            symbolSize: ['18', '28'],
            barWidth: 18,
            animation: true,
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbolClip: true,
            symbolPosition: "start",
            symbolOffset: [0, 0],
            data: ydata2,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#888888',
                        fontSize: 16,

                    },
                    formatter: "{c}%",
                    position: "right",
                    offset: [15, 0]

                }
            },
        },
        {
            type: "bar"
        },

    ]
};