 


let value = 60.33;
option = {
backgroundColor:"#061740",
title: {
        text: `${value}%`,
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#fff',
            fontSize:40
        }
    },
    series: [  {
            type: 'pie',
            radius: ['58%', '45%'],
            silent: true,
            clockwise: true,
            startAngle: 90,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    position: "center",

                }
            },
            data: [{
                    value: value,
                    name: "",
                    itemStyle: {
                        normal: {
                            color:"#ACD735",
                        }
                    }
                },
                {
                    value: 100-value,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#173164"
                        }
                    }
                }
            ]
        },
        
        {
            name: "",
            type: "gauge",
            radius: "58%",
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 40,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 60,
                lineStyle: {
                    width: 5,
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
        
    ]
};


