var dataAxis = ['空调', '温湿度', '配电', 'UPS', '温湿度', '烟感', '漏水', '空调', '配电', 'UPS', ];
var dataAP = [65, 104, 83, 83, 83, 78, 67, 83, 90, 76];
var yMax = 120;
var dataShadow = [];

for (var i = 0; i < dataAP.length; i++) {
    dataShadow.push(yMax);
}

option = {
    grid: {
        bottom: "30px",
        left: '30px',
        right: '5%',
        top: '5%',
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            interval: 0,
            formatter: function(value) {
                //debugger
                var ret = ""; //拼接加\n返回的类目项
                var maxLength = 2; //每项显示文字个数
                var valLength = value.length; //X轴类目项的文字个数
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                if (rowN > 1) //如果类目项的文字大于3,
                {
                    for (var i = 0; i < rowN; i++) {
                        var temp = ""; //每次截取的字符串
                        var start = i * maxLength; //开始截取的位置
                        var end = start + maxLength; //结束截取的位置
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                        temp = value.substring(start, end) + "\n";
                        ret += temp; //凭借最终的字符串
                    }
                    return ret;
                } else {
                    return value;
                }
            },
            textStyle: {
                color: '#4f9ccf'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },

        /*z: 10*/
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#4f9ccf'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#013168'],
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [{ // For shadow
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.15)'
                }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            label: {
                normal: {
                    show: true,//是否在柱状顶部显示数值
                    position: "top",
                    distance: 12,
                    formatter: function(params) {
                        return params.data.value;
                    },
                    textStyle: {
                        color: "#4f9ccf",
                        fontSize: 12
                    }
                }
            },
            itemStyle: {
                normal: {
                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00adff'
                        }, {
                            offset: 1,
                            color: '#047eff'
                        }]),

                },

            },
            data: dataAP
        }
    ]
};

//使用制定的配置项和数据显示图表



//数据动态展现

setInterval(function() { //数据动态展现
    for (var i = 0; i < dataAP.length; i++) {
        if (dataAP[i] % 2 == 0) {
            dataAP[i] -= Math.round(Math.random() * 10);
        } else {
            dataAP[i] += Math.round(Math.random() * 20);
        }

    }
    /* var optionAP = {
         grid: {
             bottom:"30px",
             left: '30px',
             right: '5%',
             top:'5%',
         },
         xAxis: {
             data: dataAxis,
             axisLabel: {
                 interval: 0,
                 formatter:function(value)
                 {
                     //debugger
                     var ret = "";//拼接加\n返回的类目项
                     var maxLength = 2;//每项显示文字个数
                     var valLength = value.length;//X轴类目项的文字个数
                     var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                     if (rowN > 1)//如果类目项的文字大于3,
                     {
                         for (var i = 0; i < rowN; i++) {
                             var temp = "";//每次截取的字符串
                             var start = i * maxLength;//开始截取的位置
                             var end = start + maxLength;//结束截取的位置
                             //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                             temp = value.substring(start, end) + "\n";
                             ret += temp; //凭借最终的字符串
                         }
                         return ret;
                     }
                     else {
                         return value;
                     }
                 },
                 textStyle: {
                     color: '#4f9ccf'
                 }
             },
             axisTick: {
                 show: false
             },
             axisLine: {
                 show: false
             },

             /!*z: 10*!/
         },
         yAxis: {
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             axisLabel: {
                 textStyle: {
                     color: '#4f9ccf'
                 }
             },
             splitLine: {
                 show: true,
                 lineStyle:{
                     color: ['#013168'],
                     width: 1,
                     type: 'solid'
                 }
             }
         },
         series: [
             { // For shadow
                 type: 'bar',
                 itemStyle: {
                     normal: {color: 'rgba(0,0,0,0.15)'}
                 },
                 barGap:'-100%',
                 barCategoryGap:'40%',
                 data: dataShadow,
                 animation: false
             },
             {
                 type: 'bar',
                 label: {
                     normal: {
                         show: true,
                         position: "top",
                         distance:12,
                         formatter: function(params) {
                             return params.data.value;
                         },
                         textStyle: {
                             color: "#4f9ccf",
                             fontSize: 12
                         }
                     }
                 },
                 itemStyle: {
                     normal: {
                         color: function(params) {
                             var colorList = ['#139dad','#80c269','#f7ac47','#67e0e3','#ffdb5c', '#e062ae','#ff9f7f','#4171fa','#106fcf','#e75d6c',];
                             return colorList[params.dataIndex]
                         }
                     },

                 },
                 data: dataAP
             }
         ]
     };*/
    
    var Max = Math.max(...dataAP); // 取数组里最大值
    var _yMax = Math.ceil(Max / 50); // 若有余数则加1

    yMax = _yMax * 50; //生成阴影的值和y轴的最大值相同

    dataShadow = []; //清空之前的数据
    for (var i = 0; i < dataAP.length; i++) {
        dataShadow.push(yMax);
    }
   // console.log(dataShadow);
    myChart.setOption({
        series: [{ // For shadow
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0.15)'
                    }
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                data: dataShadow,
                animation: false
            },
            {
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: "top",
                        distance: 12,
                        formatter: function(params) {
                            return params.data.value;
                        },
                        textStyle: {
                            color: "#4f9ccf",
                            fontSize: 12
                        }
                    }
                },
                itemStyle: {
                    normal: {
                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00adff'
                        }, {
                            offset: 1,
                            color: '#047eff'
                        }]),

                },

                },
                data: dataAP
            }
        ]
    });
}, 1000);