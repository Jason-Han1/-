 

let value = 1;
option = {
backgroundColor:"#0D121F",

    series: [
        {
          
            type: 'pie',
            radius: ['58%', '45%'],
            silent: true,
            clockwise: true,
            startAngle: 90,
            clockwise:false,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    position: "center",

                }
            },
            data: [{
                    value: value,
                    itemStyle: {
                        normal: {
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#4FADFD' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#28E8FA' // 100% 处的颜色
                                }]
                            },
                        }
                    }
                },
                {
                    value: 1-value,
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#0D121F"
                        }
                    }
                }
            ]
        },
        
        {
       
            type: "gauge",
            radius: "58%",
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -140,
            splitNumber: 2,
             clockwise:false,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 60,
                lineStyle: {
                    width: 7,
                    color: "#0D121F"
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
        },
        
    ]
};


