    var dateData = ["2019-06-01", "2019-06-02", "2019-06-03", "2019-06-04", '2019-06-05', '2019-06-06', "2019-06-07"];
    var dataD = [22, 34, 44, 15, 15, 22, 16, 24, 23, 20, 8, 9];
    var chooseDate = "2019-06-04";
    var len;
    for (var i = 0; i < dateData.length; i++) {
        if (chooseDate == dateData[i]) {
            len = i;
            break;
        }
    }
    var newDataD = [];
    for (var j = 0; j < len; j++) {
        newDataD.push(dataD[j]);
    }
    for (var k = len; k < dataD.length; k++) {
        var data2 = {};
        data2.value = dataD[k];
        data2.itemStyle = {
            normal: {
                color: '#fff',
                borderType: "dashed",
                barBorderColor: 'red',
                barBorderWidth: 3,
                barBorderRadius: 0
            }
        }
        newDataD.push(data2)
        data2 = {};
    }
    var d = [11.0, 4.9, 7.0, 23.2, 25.6, 76.7, 11.6, 16.2, 32.6, 20.0, 
    {
        itemStyle: {
            normal: {
                color: '#fff',
                borderType: "dashed"
            }
        },
        value: 21,
    },
    {
        value: 22,
        itemStyle: {
            normal: {
                color: '#fff',
                borderType: "dashed"
            }
        }
    }]
    var seriesData = [{
            name: '蒸发量',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: "blue",
                    barBorderColor: 'blue',
                    barBorderWidth: 3,
                    barBorderRadius: 0,
                    borderType: "solid"
                }
            },
            data: d,
        },
        {
            name: '降水量',
            type: 'bar',
            data: newDataD
        },
        {
            name: '平均温度',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: "#000",
                    lineStyle: {
                        type: "solid",
                        width: 2
                    }
                }
            },
            data: [1100, 1202, 1303, 1405, 1300, 1020, 2030, 2340, 2300, "-", "-", "-"]
        },
        {
            name: '平均温度',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: "#000",
                    lineStyle: {
                        type: "dotted",
                        width: 2
                    }
                }
            },
            data: ["-", "-", "-", "-", "-", "-", "-", "-", 2300, 1005, 1200, 602]
        }
    ]

    option = {
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                //  type: 'cross',
                crossStyle: {
                    // color: '#999'
                }
            },
            formatter: function(params, ticket, callback) {
                console.log(params, 'params')
                var htmlStr = '';
                var valMap = {};
                for (var i = 0; i < params.length; i++) {
                    var param = params[i];
                    var xName = param.name; //x轴的名称  
                    var seriesName = param.seriesName; //图例名称  
                    var value = param.value; //y轴值  
                    var color = param.color; //图例颜色  
                    if (seriesName == "蒸发量") {
                        color = "blue";
                    } else if (seriesName == "降水量") {
                        color = "red"
                    }
                    //过滤无效值
                    if (value == '-') {
                        continue;
                    }

                    //过滤重叠值
                    if (valMap[seriesName] == value) {
                        continue;
                    }

                    if (i === 0) {
                        htmlStr += xName + '<br/>'; //x轴的名称  
                    }
                    htmlStr += '<div>';
                    //为了保证和原来的效果一样，这里自己实现了一个点的效果  
                    htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>';

                    //圆点后面显示的文本  
                    // htmlStr += seriesName + '：' + value; 
                    if (seriesName == "平均温度") {
                        var value1 = "";
                        value = value + "";
                        if (value.length > 3) {
                            value1 = value.slice(0, 2) + ":" + value.slice(-2);
                        } else {
                            value1 = "0" + value.slice(0, 1) + ":" + value.slice(-2);
                        }
                        htmlStr += seriesName + '：' + value1;
                    } else {
                        htmlStr += seriesName + '：' + value;
                    }

                    htmlStr += '</div>';
                    valMap[seriesName] = value;
                }
                return htmlStr;
            }


        },
        grid: {
            bottom: "20%",
            left: 30,
            right: 30,
            containLabel: true
        },
        legend: {
            bottom: "10%",
            data: ['蒸发量', '降水量', '平均温度']

        },
        xAxis: [{
            axisLabel: {
                //  padding: [0, 110, 0,50], // 上右下左
                //  interval :10
                // margin :1
            },
            type: 'category',
            axisLine: {
                show: true,
                // onZero :false,
                // lineStyle:{width:1}
            },
            // nameLocation :"middle",
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                // type: 'shadow'
            },
            splitLine: { //网格线
                show: false
            },
            axisTick: { //y轴刻度线
                show: false,
                alignWithLabel: true,

            },
            boundaryGap: true
        }],
        yAxis: [{
                type: 'value',
                name: '水量',
                axisLabel: {
                    formatter: '{value} ml'
                },
                splitLine: { //网格线
                    show: false
                }
            },
            {
                type: 'value',
                name: '温度',
                axisLabel: {
                    formatter: '{value} °C'
                },
                splitLine: { //网格线
                    show: false
                },
                axisTick: { //y轴刻度线
                    show: false
                }
            },

        ],
        series: seriesData,
        dataZoom: [{
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                start: 1,
                end: 100,
                bottom: "0",
            },
            {
                bottom: "10%",
                type: 'inside',
                xAxisIndex: [0],
                start: 1,
                end: 35
            }
        ],

    };