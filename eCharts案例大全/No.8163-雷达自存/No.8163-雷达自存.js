
option = {
        title: {
        text: '',
        x: 'center'
    },
    color: ["rgba(0,183,238, 1)", "rgba(86,199,60, 1)"],
    tooltip: {
        show: true,
        trigger: "item"
    },
    legend: {
        y: '30px',
        itemWidth: 14,
        itemHeight: 14,
        data: ['谁会督促其他成员', ]
    },
    radar: {
        center: ["50%", "50%"],
        radius: "70%",
        startAngle: 90,
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        axisLabel: {
            show: true,
            fontSize:10,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: "#999"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: "#999"
            }
        },
        // shape: 'circle',
        name: {
            color:'BLACK',
            fontSize:20,
        },
        indicator: [{
                name: 'stu7',
                max: 3,
                aaa: 'assdfasdf',

            },
            {
                name: 'stu8',
                max: 3,
                aaa: 'assdfasdf'
            },
            {
                name: 'stu9',
                max: 3,
                aaa: 'assdfasdf'
            },
            {
                name: 'stu10',
                max: 3,
                aaa: 'assdfasdf'
            },
            {
                name: 'stu11',
                max: 3,
                aaa: 'assdfasdf'
            },

        ]
    },

    series: [{
        name: "谁会督促其他成员",
        type: "radar",
        symbol: "circle",
        symbolSize: 10,
        areaStyle: {
            normal: {
                color: "rgba(255,80,60, 0.3)"
            }
        },
        itemStyle: {
            color: '#c23531',
        },
        lineStyle: {
            normal: {
                color: "rgba(150,83,28, 1)",
                width: 2
            }
        },
        data: [
            [1, 1, 3, 1, 1]
        ]
    }, ]


};