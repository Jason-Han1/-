var option = {
        backgroundColor:'#fff',
        title: {
            show: false
        },
        series: [{
            type: "gauge",
            min: 0,
            max: 100,
            radius: "50%",
            center: ["50%", "50%"],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 5,
                    shadowBlur: 5,
                    color: [
                  [0.33,'#e54261'],
                  [0.66,' #4876e5'],
                  [1,'#27e4ae']
                    ]
                }
            },
            axisTick: {
                show: true,
                length:20,
                lineStyle:{
                    width: 2,
                    color:'auto'
                }
                
            },
            axisLabel: {
                show: true,
                textStyle: {
                  fontSize: 12,
                  color: "#27e4ae"
                }
            },
            splitLine: {
                show: true,
                length:30,//调刻度高度
                lineStyle:{
                    width: 2,
                    color:'auto'
                }
            },
           pointer: {
                show: true,
                width: "5",
                length: '70%'
            },
            detail: {
                formatter: '{value}%',
                offsetCenter: ['0', '50%'],
                textStyle: {
                    fontSize: 24,
                    color: "#27e4ae"
                }
            },
            itemStyle:{
                 color: "#27e4ae",
                 borderColor:"#27e4ae",
                 borderWidth: 5
            },
            data: [{value: 75}]
        },
                {//指针外环
                "type": 'pie',
                "hoverAnimation": false,
                "legendHoverLink": false,
                "radius": ['5%', '8%'],
                "z": 10,
                "label": {
                    "normal": {
                        "show": false
                    }
                },
                "labelLine": {
                    "normal": {
                        "show": false
                    }
                },
                "data": [{
                    "value": 100,
                    itemStyle: {
                        normal: {
                            color: "#67b3ef"
                        }
                    }
                }]
            },
            {//指针内环
                "type": 'pie',
                "hoverAnimation": false,
                "legendHoverLink": false,
                "radius": ['0%', '5%'],
                "z": 10,
                "label": {
                    "normal": {
                        "show": false
                    }
                },
                "labelLine": {
                    "normal": {
                        "show": false
                    }
                },
                "data": [{
                    "value": 100,
                    itemStyle: {
                        normal: {
                            color: "#12214c"
                        }
                    }
                }]
            }]
    };