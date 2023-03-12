/**
 * 双层圆环图
 * param1  echarts的初始化id  echarts.init(document.getElementById('xxx'))
 * param2  value值  数值型
 * param3  value值的单位
 * param4  字体及圆环大颜色
 * param5,6  最小最大值
 */
// function Double_ring(id,value,unit,initcolor,min,max){

var value = 14.7;
var unit = "%";
var initcolor = "red";
var min = 0;
var max = 100;


var color = initcolor;
// var size = $("#" + id).css('fontSize');
var size = '100%';
var background = "#00000000"; //背景
// var Myecharts = "mycharts_"+id;
// Myecharts = echarts.init(document.getElementById(id));
var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)'
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(44,59,70,0)', //未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    }
};
// if ((value - min) / (max - min) * 100 >= 70) {
//     color = 'red';
// } else {
//     color = initcolor;
// }
option = {
    title: {
        text: value + unit,
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: color,
            fontSize: parseInt(size)*0.6
        }
    },
    backgroundColor: background,
    color: [color, '#313443', '#fff'],
    tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show: false,
        itemGap: 12,
        data: ['01', '02']
    },
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: ['50%', '58%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        data: [{
                value: value - min,
                name: '01',
                itemStyle: {
                   normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                            offset: 0,
                            color: '#7777eb'
                        }, {
                            offset: 1,
                            color: '#70ffac'
                        }]),
                    },
                },
            }, {
                value: max - value,
                name: 'invisible',
                itemStyle: placeHolderStyle
            }

        ]
    }, {
        name: 'Line 2',
        type: 'pie',
        animation: false,
        clockWise: false,
        radius: ['58%', '60%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        tooltip: {
            show: false
        },
        data: [{
                value: 100,
                name: '02',
                itemStyle: {
                     normal: {
                        color: "#3c6482",
                    },
                }
        }]
    }, {
        name: 'Line 3',
        type: 'pie',
        animation: false,
        clockWise: false,
        radius: ['48%', '50%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        tooltip: {
            show: false
        },
        data: [{
                value: 100,
                name: '02',
                itemStyle: {
                     normal: {
                        color: "#3c6482",
                    },
                }
            }
        ]
    }]
};
// Myecharts.setOption(option)
// this.update_Double_ring = function(message){
//     if((message-min)/(max-min)*100>=70){
//         color='red';
//     }else{
//         color=initcolor;
//     }
//     Myecharts.setOption({
//         title: {
//             text: message+unit,
//             textStyle: {
//                 color: color
//             }
//         },
//         color: [color, '#313443', '#fff'],
//         series:[{
//             name: 'Line 1',
//             data:[{
//                 name : '01',
//                 value : message-min
//             },{
//                 name : 'invisible',
//                 value : max-message
//             }]
//         },{
//             name : 'Line 2',
//             data:[{
//                 name : '01',
//                 value : 0
//             },{
//                 name : 'invisible',
//                 value : 100
//             }]
//         }]
//     });
// }
// }