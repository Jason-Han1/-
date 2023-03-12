let value = 15;
let xwidth = 700;
let topHeight = 300;
const data = 0,
    maxdata = 30;
const radius = ["88%", "94%"];
const splitColor = "#54d6ae";
const innerColor = ["#52d7ae", "rgba(254,134,64,1)"];
const fontColor = "#ff4e09";
option = {
    backgroundColor: '#060e2b',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
            name: 'PUE',
            type: 'gauge',
            radius: "80%",
            min: 0,
            max: 30,
            center: ["50%", "75%"],
            startAngle: 180,
            endAngle: 0,
            splitNumber: -1,
            detail: {
                formatter: ''
            },
            data: [{
                value: 10.5,
                name: ' '
            }],
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false,
                // length:20,
            },
            markPoint: {
                data: [{
                    name: '某个屏幕坐标',
                    x: 180,
                    y: 600,
                    symbolRotate: 90
                }],
                itemStyle: {
                    color: 'red'
                }
            },
            axisLine: { // 坐标轴线
                lineStyle: {
                    width: 14,
                    shadowBlur: 0,
                    color: [
                        [0, '#18FD79'],
                        [0.3, '#18FD79'],
                        [0.5, '#FDF018'],
                        [1, '#FD1859'],
                    ]
                }
            },
        },

        {
            type: 'gauge',
            center: ["50%", "75%"],
            radius: '85%', // 1行3个
            splitNumber: 5 || 100,
            min: 0,
            max: 30,
            startAngle: 180, //刻度起始
            endAngle: 0, //刻度结束
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [1, '#18FD79']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#65D2E7',
                    width: 1
                },
                length: -2,
                splitNumber: 10
            },
            splitLine: {
                show: true,
                length: -14,
                lineStyle: {
                    color: '#65D2E7',
                }
            },
            axisLabel: {
                distance: -20,
                textStyle: {
                    color: '#65D2E7',
                    fontSize: '14',
                    fontWeight: 'bold'
                }
            },
            pointer: {
                show: 0
            },
            detail: {
                show: 0
            }
        },
        {
            "type": "pie",
            radius: ['70%', '75%'],
             center: ["50%", "75%"],
            "hoverAnimation": false,
            startAngle: 180,
            "data": [{
                    "name": "",
                    "value": 4,
                    "label": {
                        show: false
                    },
                    "labelLine": {
                        show: false
                    },
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },{//画中间的图标
            "name": "",
            "value": 0,
            "label": {
                position:'inside',
                backgroundColor: fontColor,
                borderRadius: 12,
                padding: 12,
                borderWidth:2,
                borderColor:"#fff"
                
            }
        },{
            "name": "",
            value: 30,
            "label": {
                show:false
            },
            "labelLine":{
                 show:false
            }
            ,
            itemStyle:{
                color: 'rgba(255,255,255,0)'
            }
        }
               
            ]
        }

    ]
};
myChart.setOption(option, true);