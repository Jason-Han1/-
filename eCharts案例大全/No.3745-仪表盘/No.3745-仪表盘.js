var value = 100; // 0-100之间
option = {
    title: {
        show: false,
        text: value+'%',
        x: '49%',
        y: '50%',
        z: 8,
        textAlign: 'center',
        textStyle: {
            color: ' rgb(147,169,205) ',
            fontSize: 26,
        }
    },
    series: [{
        name: "原图",
        type: "gauge",
        radius: '60%',
        center: ['50%', '70%'],
        startAngle: 200,
        endAngle: -20,
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                color: [
                    [value / 100, '#FFF4DD'],
                    [1, "transparent"]
                ],
                width: 14,
                shadowColor:'rgb(0, 90, 160, 0.52)',
                shadowBlur:10,
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
                show:true,
                width:  10,
                length: '70%',
                itemStyle: {
                    color: '#DE585D',
                }
            },
        data: [{
                value: value,
                //name: '两区面积'
            }],
        itemStyle: {
                color: '#BAF6FF',
                shadowColor: 'rgb(0, 90, 160, 0.52)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
    },{
        name: "外图",
        type: "gauge",
        radius: '64%',
        center: ['50%', '70%'],
        startAngle: -20,
        endAngle: -60,
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                color: [
                    [3 / 100, '#FFF4DD'],
                    [1, "transparent"]
                ],
                width: 50,
                shadowColor:'rgb(0, 90, 160, 0.52)',
                shadowBlur:10,
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
    }
    ]
}