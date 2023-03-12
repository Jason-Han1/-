let rate = 56;
option = {
    backgroundColor: "#061740",
    series: [{
            name: "内部进度条",
            type: "gauge",
            radius: '40%',
            startAngle: 180,
            endAngle: -179.99,
            splitNumber: rate,
            axisLine: {
                lineStyle: {
                    color: [
                        [rate / 100, '#468EFD'],
                        [1, "rgba(0,0,0,0)"]
                    ],
                    width: 8
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false
            },
            title: { //标题
                show: false,
            },
            data: [{
                name: "title",
                value: rate,
            }],
            pointer: {
                show: false
            },
        },
        {
            name: "刻度",
            type: "gauge",
            radius: '50%',
            max: 100,
            startAngle: 180,
            endAngle: 180 - (rate * 3.6),
            splitNumber: rate,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: true,
                splitNumber: 1,
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false
            },
            title: { //标题
                show: false,
            },
            data: [100],
            pointer: {
                show: false
            },
        }
    ]
}