


    function format(date, fmt) {
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    //为了撑起表的线，现在值设置为0；（注意数据范围，确定它的值）
    var d = new Date();
    var todayDate = +new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1, 09, 30, 00);
    var timeData = [];
    for (var i = 0; i < 2; i++) {
        var b = {
            "time": todayDate,
            "value": 0
        }
        timeData.push(b);
        todayDate = +todayDate + 5.5 * 60 * 60 * 1000;
    }



data = [
  {
    "time": 1495503000000,
    "value": 1.750
  },
  {
    "time": 1495504800000,
    "value": 2.302
  },
  {
    "time": 1495506600000,
    "value": 3.352
  },
  {
    "time": 1495508400000,
    "value": 2.345
  },
  {
    "time": 1495509000000,
    "value": 1.111
  },
  {
    "time": 1495510000000,
    "value": 3.111
  },
  {
    "time": 1495516000000,
    "value": 2.309
  }
]
        myChart.setOption(option = {
            grid:{
                containLabel:true,
                left:'left, center, right',
                top: '10%',
                bottom: '10%'
            },

            xAxis: {
                type: 'time',
                splitNumber:4,
                axisLine: {
                    lineStyle: {
                        color: 'rgb(232,232,232)'//x轴线的颜色
                    }
                },
                nameTextStyle: {
                    color: 'rgb(102,102,102)'//x轴线名称颜色
                },

                splitLine: {

                    lineStyle: {
                        type: 'solid',
                        color: 'rgb(232,232,232)'
                    }
                },
                axisLabel: {
                    show: true,//是否显示x坐标内容
                    textStyle: {
                        color: 'rgb(102,102,102)'
                    },
                    formatter: function (value) {
                        return format(new Date(value), 'hh:mm')
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
//                name: '心率',
                min:'dataMin',
                max:'dataMax',
                type:'value',
                axisLine: {
                    lineStyle: {
                        color: 'rgb(232,232,232)'//y轴颜色
                    }
                },
                nameTextStyle: {
                    color: 'rgb(102,102,102)'
                    //y轴标题颜色
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgb(102,102,102)'
                        //y轴刻度颜色
                    }
                },
                splitNumber:2,
                splitLine: {
                    lineStyle: {
//                        type: 'solid',//x平行的线的设置
                        type: 'solid',//x平行的线的设置
                        color: '#e2e6a'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
//                        上下分割的方块的颜色
                        color: ['#ffffff', 'ffffff']
                    }
                }
            },
            series: [

                {
//                    name: '心率',
                    type: 'line',
                    hoverAnimation: false,
                    lineStyle: {
                        normal: {
                            width: 1,
                            width: 1,
                            color: "rgb( 205,174,120)"
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0//每个点的圆的透明度
                        }
                    },

                    data: data.map(function (item) {
                        return {
                            name: item.value,
                            value: [item.time, item.value]
                        }
                    }),

                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#DEAA5A' // 0% 处的颜色
//                                color: 'red' // 0% 处的颜色
                            }, {
                                offset: 1,
//                                color: '#F9F4EE' // 100% 处的颜色
                                color: '#ffffff' // 100% 处的颜色

                            }], false),
                            opacity: 0.4
                        }
                    }

                },
                {
                    name: '测试',
                    type: 'line',
                    lineStyle: {
                        normal: {
                            width: 1,
                            width: 1,
                            color: "rgba( 205,174,120,0)"//撑起图表的线完全透明
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity:0//每个点的圆的透明度
                        }
                    },

                    data: timeData.map(function (item) {
                        return {
                            name: item.value,
                            value: [item.time, item.value]
                        }
                    })
                }],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        type: 'solid',
                        color: 'rgb(205, 174, 120)'
                    }
                },
                formatter: function (p) {
                    var a = format(new Date(p[0].value[0]), 'hh:mm:ss') + "<br/><span style='display: block;height: 10px;width: 10px;border-radius: 5px;background-color: rgb(205, 174, 120);'></span>收益率 : " + p[0].name;
                    var nowtime = document.getElementById("nowtime");
                    // 页面显示的时间是现在查看的时间
                    $("#nowp").html(format(new Date(p[0].value[0]), 'hh:mm:ss')) ;
                    return a;
                },

            }
        });
  

