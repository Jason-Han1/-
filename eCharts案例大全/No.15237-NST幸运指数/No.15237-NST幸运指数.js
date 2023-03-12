var gauge_value = 65; //能力值取代码置于值于此处

option = {
    backgroundColor: '',
    title: {
        show: true,
        x: "center",
        y: "62%",
        text: '更新时间：2017-11-14', //幸运值取代码置于值于此处
        //subtext: '幸运指数',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bolder',
            fontStyle: 'normal',
            color: "#6eba44"
        }
    },
    tooltip: {
        show: true,
        formatter: "{a}{b}：{c}",
        backgroundColor: '#6eba44',
        borderColor: '#6eba44',
        borderWidth: '1px',
        textStyle: {
            color: 'white'
        }
    },
    series: [{
        name: '能力',
        type: 'gauge',
        // startAngle: 180,
        // endAngle: 0,
        splitNumber: 10, //刻度数量
        min: 0,
        max: 100,
        radius: '65%', //图表尺寸
        axisLine: {
            show: true,
            lineStyle: {
                width: 4,
                shadowBlur: 0,
                color: [
                    [0.2, '#6eba44'],
                    [0.8, '#6eba44'],
                    [1, '#6eba44']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: "#6eba44",
                width: 1
            },
            length: 10,
            splitNumber: 2
        },
        splitLine: {
            show: true,
            length: 20,
            lineStyle: {
                color: '#6eba44'
            }
        },
        axisLabel: {
            distance: 0,
            textStyle: {
                color: "#6eba44",
                fontSize: "24",
            },
            formatter: function(e) {
                return e;
            }
        },
        pointer: {
            show: true,
        },
        detail: { //指针评价
            show: true,
            offsetCenter: [0, 40],
            textStyle: {
                fontSize: 50,
                color: "#6eba44"
            },

        },
        title: {
            textStyle: {
                fontSize: 30,
                fontWeight: 'bolder',
                fontStyle: 'normal',
                color: "#6eba44"
            },
            offsetCenter: [0, 15]
        },
        data: [{
            name: "",
            value: Math.floor(gauge_value)
        }]
    }]
};