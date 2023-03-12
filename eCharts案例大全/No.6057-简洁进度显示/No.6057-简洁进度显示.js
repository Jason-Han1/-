var value = 20; // 0-100之间
option = {
    title: {
        show: true,
        text: value+'%',
        x: '49%',
        y: '55%',
        z: 8,
        textAlign: 'center',
        textStyle: {
            color: ' rgb(147,169,205) ',
            fontSize: 26,
        }
    },
    series: [{
        name: "",
        type: "gauge",
        radius: '60%',
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                color: [
                    [value / 100, 'rgb(147,169,205)'],
                    [1, "#ddd"]
                ],
                width: 14
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
        detail: {
            show: false
        },
        pointer: {
            show: false,
        },
    }]
}