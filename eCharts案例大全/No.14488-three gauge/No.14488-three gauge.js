function getStyle(value) {
    if (value < 99.5) {
        return {
            splitNumber: 9, //刻度数量
            min: 95,
            max: 99.5,
            startAngle: 225,
            endAngle: -18,
            color: [
                [1, '#FF0000']
            ]
        };
    } else {
        return {
            splitNumber: 1, //刻度数量
            min: 99.5,
            max: 100,
            startAngle: -18,
            endAngle: -45,
            color: [
                [1, '#60b044']
            ]
        };
    }
}


function getRadius(){
    var tempRadius = 80;
    if (myChart.getWidth()/3<myChart.getHeight()){
        tempRadius = (myChart.getWidth()/3/(myChart.getHeight()+30))*100;
    }
    
    return tempRadius + '%';
}
var radius = getRadius();
console.log(radius);
var myRate1 = 98;
var myStyle1 = getStyle(myRate1);
var myRate2 = 99.6;
var myStyle2 = getStyle(myRate2);
var myRate3 = 100;
var myStyle3 = getStyle(myRate3);
option = {
    backgroundColor: '#fff',
    grid: {
        top:0,
    },
    series: [{
            name: 'AAAAA',
            type: 'gauge',
            center: ['20%', '50%'], // 默认全局居中
            splitNumber: 10, //刻度数量
            min: 95,
            max: 100,
            radius: radius, //图表尺寸
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#fff']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#333',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#333',
                }
            },
            axisLabel: {
                distance: 5,
                textStyle: {
                    color: "#000",
                    fontSize: "14",
                },
                formatter: function(e) {
                    switch (e + "") {
                        case "0":
                            return "0%";
                        default:
                            return e;
                    }
                }

            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: myRate1
            }]
        }, {
            name: 'BBBBB',
            type: 'gauge',
            center: ['20%', '50%'], // 默认全局居中
            splitNumber: myStyle1.splitNumber, //刻度数量
            min: myStyle1.min,
            max: myStyle1.max,
            startAngle: myStyle1.startAngle,
            endAngle: myStyle1.endAngle,
            radius: radius, //图表尺寸
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: myStyle1.color
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 1,
                length: '70%',
                width: 2
            },
            detail: {
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '33%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: "#000",
                    fontSize: 20,
                },
                formatter: '{value}%'
            },
            title: {
                offsetCenter: [0, '90%'], // x, y，单位px
                fontWeight: 'bolder',
                fontSize: 25,
                show: true
            },
            data: [{
                name: "功能合格率",
                value: myRate1
            }]
        },
        //222222222222222222222222222222222222222222222222222
        {
            name: 'AAAAA',
            type: 'gauge',
            center: ['50%', '50%'], // 默认全局居中
            splitNumber: 10, //刻度数量
            min: 95,
            max: 100,
            radius: radius, //图表尺寸
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#fff']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#333',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#333',
                }
            },
            axisLabel: {
                distance: 5,
                textStyle: {
                    color: "#000",
                    fontSize: "14",
                },
                formatter: function(e) {
                    switch (e + "") {
                        case "0":
                            return "0%";
                        default:
                            return e;
                    }
                }

            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: myRate2
            }]
        }, {
            name: 'BBBBB',
            type: 'gauge',
            center: ['50%', '50%'], // 默认全局居中
            splitNumber: myStyle2.splitNumber, //刻度数量
            min: myStyle2.min,
            max: myStyle2.max,
            startAngle: myStyle2.startAngle,
            endAngle: myStyle2.endAngle,
            radius: radius, //图表尺寸
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: myStyle2.color
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 1,
                length: '70%',
                width: 2
            },
            detail: {
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '33%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: "#000",
                    fontSize: 20,
                },
                formatter: '{value}%'
            },
            title: {
                offsetCenter: [0, '90%'], // x, y，单位px
                fontWeight: 'bolder',
                fontSize: 25,
                show: true
            },
            data: [{
                name: "外观合格率",
                value: myRate2
            }]
        },
        //3333333333333333333333333333333333333333333333333
        {
            name: 'AAAAA',
            type: 'gauge',
            center: ['80%', '50%'], // 默认全局居中
            splitNumber: 10, //刻度数量
            min: 95,
            max: 100,
            radius: radius, //图表尺寸
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#fff']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#333',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#333',
                }
            },
            axisLabel: {
                distance: 5,
                textStyle: {
                    color: "#000",
                    fontSize: "14",
                },
                formatter: function(e) {
                    switch (e + "") {
                        case "0":
                            return "0%";
                        default:
                            return e;
                    }
                }

            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: myRate3
            }]
        }, {
            name: 'BBBBB',
            type: 'gauge',
            center: ['80%', '50%'], // 默认全局居中
            splitNumber: myStyle3.splitNumber, //刻度数量
            min: myStyle3.min,
            max: myStyle3.max,
            startAngle: myStyle3.startAngle,
            endAngle: myStyle3.endAngle,
            radius: radius, //图表尺寸
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: myStyle3.color
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 1,
                length: '70%',
                width: 2
            },
            detail: {
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '33%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: "#000",
                    fontSize: 20,
                },
                formatter: '{value}%'
            },
            title: {
                offsetCenter: [0, '90%'], // x, y，单位px
                fontWeight: 'bolder',
                fontSize: 25,
                show: true
            },
            data: [{
                name: "QA检测合格率",
                value: myRate3
            }]
        }
    ]
};
