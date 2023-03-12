    var xData = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
    ];
    var yData_all = [
        2017,
        9021,
        4483,
        7410,
        4919,
        3361,
        2704,
        1065,
        4408,
        3157,
        3102,
        4097,
    ];
    var yData_online = [
        709,
        1917,
        2455,
        2610,
        1719,
        1433,
        844,
        565,
        456,
        981,
        654,
        941
    ];
    var yData_offline = [
        327,
        1776,
        507,
        1200,
        800,
        482,
        465,
        125,
        988,
        544,
        612,
        789
    ];


    var barMaxWidth =14;
    var normalColor = "#ffffff";
    var fontSize = 12;

    var option = {
        backgroundColor:'#000',
        tooltip: {
            trigger: 'axis',
            backgroundColor:'rgba(255,255,255,0)',  // 提示框背景颜色*/
            /* formatter: "{b} <br> {c}亿元({d}%)",*/
            formatter: function(params) {
                    var res = "";
                    res = "<div style='padding:10px 0 15px 0;font-size:13px;text-align: center;width: 120%;background: url(" + basePath + "/ui/bigScreen/images/echarts_01.png) no-repeat;background-size:100% 100%;color: #56FFE4'>" +
                        "变动总数:" + params[5].value +
                        "<br><span style='color: #ffffff;font-size: 10px;'>" + params[0].seriesName + "：" + params[0].value + "</span>"+
                        "<span style='color: #ffffff;font-size: 10px;margin-left: 15px'>" + params[1].seriesName + "：" + params[1].value + "</span>"+
                         "<br><span style='color: #ffffff;font-size: 10px;'>" + params[2].seriesName + "：" + params[2].value + "</span>"+
                        "<span style='color: #ffffff;font-size: 10px;margin-left: 15px'>" + params[3].seriesName + "：" + params[3].value + "</span>"+
                        "<br><span style='color: #ffffff;font-size: 10px;'>" + params[4].seriesName + "：" + params[4].value + "</span>"
                    return res;
                }
        },

        // "tooltip": {
        //     "trigger": "axis",
        //     "axisPointer": {
        //         "type": "shadow",
        //         textStyle: {
        //             color: "#fff"
        //         }
        //
        //     },
        //     confine: true,
        //     textStyle: {
        //         fontSize: fontSize,
        //     },
        //     extraCssText: "width:120px;height:120px",
        // },



        legend: {
            type: "scroll",
            right: "10%",
            top: "15%",
            textStyle: {
                color: "#ffffff",
                fontSize: 10,
            },
            // data: datas.legendData,
        },
        grid: [{
            left: "6%",
            bottom: "8%",
            top: "25%",
            right: "6%",
            containLabel: true,
        }, ],
        xAxis: {
            type: "category",
            axisLabel: {
                show: true,
                textStyle: {
                    color: normalColor, //更改坐标轴文字颜色
                    fontSize: fontSize, //更改坐标轴文字大小
                },
            },
            axisLine: {
                lineStyle: {
                    color: normalColor, //更改坐标轴颜色
                },
            },
            data: xData,
        },
        yAxis: [{
            type: "value",
            name: "",
            nameTextStyle: {
                color: normalColor,
            },
            position: "left",
            //设置坐标轴字体颜色和宽度
            axisLine: {
                show: false,
                lineStyle: {
                    color: normalColor,
                    width: 1,
                },
            },
            //设置网格线颜色
            splitLine: {
                show: false,
                lineStyle: {
                    color: ["#3D5CBB"],
                    width: 1,
                    type: "solid",
                },
            },
        }, ],
        "series": [
            {
            "name": "正厅级(正)",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": barMaxWidth,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": '#6046D1',
                    barBorderRadius:0,
                }
            },
            "data": yData_online,
             },

            {
                "name": "副厅级(副)",
                "type": "bar",
                "stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": '#4D89FF',
                        barBorderRadius:0,
                    }
                },
                "data": yData_offline
            },


            {
                "name": "正处级(正)",
                "type": "bar",
                "stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": '#2FC8BE',
                        barBorderRadius:0,
                    }
                },
                "data": yData_offline
            },


            {
                "name": "副处级(副)",
                "type": "bar",
                "stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": '#F6D84A',
                        barBorderRadius:0,
                    }
                },
                "data": yData_offline
            },

            {
                "name": "其他",
                "type": "bar",
                "stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": '#FFFFFF',
                        barBorderRadius:0,
                    }
                },
                "data": yData_offline
            },



            {
                "name": "总数",
                "type": "line",
                symbolSize: 10,
                symbol: 'circle',
                "itemStyle": {
                    "normal": {
                        "color": '#436EFD',
                        "barBorderRadius": 0,
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(19,24,140,0.8)'
                        },
                            {
                                offset: 1,
                                color: 'rgba(89,159,241,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                lineStyle: {
                    normal: {
                        width: 2,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#39E8FF' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#39E8FF' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                "data": yData_all
            },
        ]
    }