let colorList=["#0ECBFF","#F46C24","#46D042","#21E1E5"];
option = {
backgroundColor:"#061740",
color: colorList,
    series: [ {
            name: '',
            type: 'pie',
            radius: ['58%', '45%'],
            silent: true,
            clockwise: false,
            startAngle: 90,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    position: "center",

                }
            },
            data: [1,2,3,4]
        },
        {
            name: "",
            type: "gauge",
            radius: "65%",
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 13,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 65,
                lineStyle: {
                    width: 20,
                    color: "#061740"
                }
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        },
        {
            name: '',
            type: 'pie',
            radius: ['70%', '85%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    color:"#173164"
                }
            },
            z:1,
            data: [1]
        },
        {
            name: "",
            type: "gauge",
            radius: "89.5%",
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 360,
            splitNumber:12,
            z:3,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length:30,
                lineStyle: {
                    width: 10,
                    color: "#0ECBFF"
                }
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [1]
        },
        {
            name: "",
            type: "gauge",
            radius: "89.5%",
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 360,
            splitNumber:60,
            z:2,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 18,
                lineStyle: {
                    width: 5,
                    color: "#00639C"
                }
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [1]
        },
    ]
};
myChart.setOption(option, true)