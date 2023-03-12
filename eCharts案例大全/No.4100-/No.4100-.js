var legend = ['Courier App', 'Customer App', 'Customer Scheduling Order', 'Official Website', 'PC Client', 'VIP Customer Portal'];
option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['25/01', '26/01', '27/01', '28/01', '29/01', '30/01', '31/01'],
        axisTick: { // 去除坐标轴上的刻度线
            show: false
        },
        splitLine: { // 控制网格线是否显示
            lineStyle: { //  改变样式
                width: '0.2',
                color: '#507b7d' // 修改网格线颜色    
            }
        },
        axisLine: { // y轴的颜色和宽度
            show: false,
            lineStyle: {
                color: 'rgba(0,0,0,0.4)', // y坐标轴的轴线颜色
            }
        },
        axisLabel: { // x轴的字体样式
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
            textStyle: {
                fontSize: 10, // x轴字体大小
            }
        }
    },
    yAxis: {
        type: 'value',
        axisTick: { // 去除坐标轴上的刻度线
            show: false
        },
        splitLine: { // 控制网格线是否显示
            lineStyle: { //  改变样式
                width: '0.2',
                color: '#507b7d' // 修改网格线颜色    
            }
        },
        axisLine: { // y轴的颜色和宽度
            show: false,
            lineStyle: {
                color: 'rgba(0,0,0,0.4)', // y坐标轴的轴线颜色
            }
        },
        axisLabel: { // x轴的字体样式
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
            textStyle: {
                fontSize: 10, // x轴字体大小
            }
        }
    },
    tooltip: {
        trigger: 'axis',
        // backgroundColor: 'none',
        // padding: 6,
        // position: function(pt) {
        //     return [pt[0], 130];
        // },
        axisPointer: {
          lineStyle: {
            type: "dashed",
            color: "#cccccc"
          }
        },
        formatter: function(param) {
            var resultTooltip = "";
            resultTooltip =
                // "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                "<div style='text-align:center;'>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>"
            for (var i = 0; i < param.length; i++) {

                if (i > 0) {
                    resultTooltip += "<div style='padding-top:2px;'>"
                }

                resultTooltip +=
                    param[i].marker +
                    param[i].value + "</span><span style = 'float:right;'>" + "k" + "</span>"

            }
            // resultTooltip +=
            //     "</div>" +
            //     "</div>";
            return resultTooltip
        },
        // formatter: function(pt) {
        //     var resultTooltip=pt[0].name + '<br/>';
        //     for (var i = 0; i < pt.length; i++) {
        //       resultTooltip+= pt[i].marker + (pt[i].value)+"K"+ '<br/>';
        //     }
        //     resultTooltip+='<br/>';
        //   return resultTooltip;
        // },
        borderColor: "rgba(245, 245, 245, 0.8)",
    },
    grid: {
        height: 'auto',
        x: '15%',
        y: '35%',
        x2: '5%',
        y2: '15%',
    },
    legend: {
        selectedMode: false,
        right: "0%",
        data: legend,
        icon: "circle"
    },
    series: [{
        "name": "Courier App",
        "data": ["10.00", "35.00", "40", "100", "10.00", "15.00", "110.00"],
        "type": "line",
        "itemStyle": {
            "color": "rgba(116,41,201,1)",
            
            // 'normal': {
            //         color: '#6d9269',   
            //         'barBorderRadius':50,//拐点圆的颜色
            //         lineStyle: {
            //             "color": "rgba(116,41,201,1)",
            //             'barBorderRadius':50,//折线线条颜色
            //         }
            //     }

        },
        "lineStyle": {
            "width": 3.5,
            'barBorderRadius':150,
        },
        smooth:0.15,
        showSymbol: false,
        "areaStyle": {
            "color": {
                "type": "line",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgba(116,41,201,0.2)"
                }, {
                    "offset": 0,
                    "color": "rgba(116,41,201,0.1)"
                }],
                "global": false
            }
        }
    }, {
        "name": "Customer App",
        "data": ["10.00", "0.00", "20.00", "0.00", "30.00", "0.00", "0.00"],
        "type": "line",
        "itemStyle": {
            "color": "rgba(255,108,62,1)"
        },
        "lineStyle": {
            "width": 3
        },
        smooth:true,
        symbol: 'emptyCircle',
        showSymbol: false,
        "areaStyle": {
            "color": {
                "type": "line",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgba(255,108,62,0.05)"
                }, {
                    "offset": 0,
                    "color": "rgba(255,108,62,0.01)"
                }],
                "global": false
            }
        }
    }, {
        "name": "Customer Scheduling Order",
        "data": ["0.10", "0.00", "0.00", "0.00", "0.00", "0.00", "0.00"],
        "type": "line",
        "itemStyle": {
            "color": "rgba(253,189,76,1)"
        },
        "lineStyle": {
            "width": 3
        },
        smooth:true,
        symbol: 'emptyCircle',
        showSymbol: false,
        "areaStyle": {
            "color": {
                "type": "line",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgba(253,189,76,0.05"
                }, {
                    "offset": 0,
                    "color": "rgba(253,189,76,0.01"
                }],
                "global": false
            }
        }
    }, {
        "name": "Official Website",
        "data": ["0.00", "0.00", "0.00", "0.00", "0.00", "0.00", "0.00"],
        "type": "line",
        "itemStyle": {
            "color": "rgba(63,194,151,1)"
        },
        "lineStyle": {
            "width": 3
        },
        smooth:true,
        symbol: 'emptyCircle',
        showSymbol: false,
        "areaStyle": {
            "color": {
                "type": "line",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgba(63,194,151,0.05)"
                }, {
                    "offset": 0,
                    "color": "rgba(63,194,151,0.01)"
                }],
                "global": false
            }
        }
    }, {
        "name": "PC Client",
        "data": ["11.00", "23.00", "150.00", "130.00", "34.00", "56.00", "0.00"],
        "type": "line",
        "itemStyle": {
            "color": "rgba(74,128,244,1)"
        },
        "lineStyle": {
            "width": 3
        },
        smooth:true,
        symbol: 'emptyCircle',
        showSymbol: false,
        "areaStyle": {
            "color": {
                "type": "line",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgba(74,128,244,0.05)"
                }, {
                    "offset": 0,
                    "color": "rgba(74,128,244,0.01)"
                }],
                "global": false
            }
        }
    }, {
        "name": "VIP Customer Portal",
        "data": ["10.00", "25", "0.01", "34", "25", "44", "0.00"],
        "type": "line",
        "itemStyle": {
            "color": "rgba(255,108,207,1)"
        },
        "lineStyle": {
            "width": 3
        },
        smooth:true,
        symbol: 'emptyCircle',
        showSymbol: false,
        "areaStyle": {
            "color": {
                "type": "line",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgba(255,108,207,0.05)"
                }, {
                    "offset": 0,
                    "color": "rgba(255,108,207,0.01)"
                }],
                "global": false
            }
        }
    }]
};