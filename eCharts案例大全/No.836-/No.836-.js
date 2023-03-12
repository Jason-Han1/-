option = {
    backgroundColor:'#232d36',
    tooltip: {
        formatter: "{a} <br/>值 : {c}"
    },
    title:{
        text: '处置情况',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 60,
            fontWeight: '100',
        }
    },
    grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    series: [{
        name: "",
        type: "gauge",
        center: ['50%', '65%'],
        radius: '100%',
        min: 0, //最小刻度
        max: 100, //最大刻度
        startAngle: 180,
        endAngle: 0,
        axisLine: {
            lineStyle: {
                color: [
                    [0.63, '#FBF76B'],
                    [1, '#70C27E'],
                ],
                width: 50
            }
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            length: 50,
            lineStyle: {
                width: 10,
                color: '#2C3638'
            }
        },
        splitNumber: 5,
        detail: {
            show: false,
        },
        animationDuration: 4000,
    },
     {
            name: '',
            type: 'pie',
            startAngle:180 ,
            radius: ['70%', '72%'],
            center: ['50%', '65%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: 5,
                name: '',
                itemStyle: {
                    normal: {
                        color: ' #02B1FF',
                        opacity: 0.1
                    }
                }
            },
            {
                value: 5,
                name: '',
                itemStyle: {
                    normal: {
                        color: ' #fff',
                        opacity: 0
                    }
                }
            }
            ]
        },
    ]
}