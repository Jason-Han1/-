
option ={
        grid: {
            borderWidth: 1,
            borderColor: "#ccc",
            x: 163,
            y: 20,
            x2: 80,
            y2: 80
        },
        tooltip: {
            trigger: "axis"
        },
        toolbox: {
            show: false,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar"]
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        yAxis: [
          {
            show:false,
            type: "value",
            boundaryGap: [0, 0.01],
            splitArea: {
                areaStyle: {
                    type: "default"
                },
                show: true
            },
            axisTick: {
                show: false
              },
              axisLine: {
                show: true,
                lineStyle: {
                    color: "rgb(79, 88, 104)",
                    width: 1
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 24
                },
                margin: 10,
            },
            splitLine: {
                show: false
            },
            splitNumber: 11,
             splitArea : {show : false}
        }],
        xAxis: [{

            type: "category",
            data: ["疑难事件01", "疑难事件02", "疑难事件03", "疑难事件04", "疑难事件05", "疑难事件06", "疑难事件07", "疑难事件08", "疑难事件09", "疑难事件010"],
            axisTick: {
                show: false
            },
            
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgb(79, 88, 104)",
                    width: 1
                }
            },
            splitArea: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 24
                },
                                   interval: 0, //标签设置为全部显示
    formatter: function (params) {
        //粘贴以下function内未注释的代码
        var newParamsName = ""; // 最终拼接成的字符串
        var paramsNameNumber = params.length; // 实际标签的个数
        var provideNumber = 3; // 每行能显示的字的个数
        var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整

        // 条件等同于rowNumber>1
        if (paramsNameNumber > provideNumber) {

            for (var p = 0; p < rowNumber; p++) {
                var tempStr = ""; // 表示每一次截取的字符串
                var start = p * provideNumber; // 开始截取的位置
                var end = start + provideNumber; // 结束截取的位置
                // 此处特殊处理最后一行的索引值
                if (p == rowNumber - 1) {
                    // 最后一次不换行
                    tempStr = params.substring(start, paramsNameNumber);
                } else {
                    // 每一次拼接字符串并换行
                    tempStr = params.substring(start, end) + "\n";
                }
                newParamsName += tempStr; // 最终拼成的字符串
            }

        } else {
            // 将旧标签的值赋给新标签
            newParamsName = params;
        }
        //将最终的字符串返回
        return newParamsName
    },
                margin: 35,
            },
            splitLine:{
                show:false     
             },
              splitArea : {show : false},
        }],
        series: [{
            
            name: "",
            type: "bar",
            data: [50,100,150,200, 250, 300, 350, 400,450,500],
            barWidth : 40,
            itemStyle: {
                normal: {
                                  label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: '#fff',
                  fontSize: 36
                }
              },
                  color: function (params){
                    var colorList = [
                      ['rgb(255,198,99)','rgb(236,185,94)'],
                      ['rgb(255,231,99)','rgb(236,218,94)'],
                      ['rgb(249,255,81)','rgb(230,236,76)'],
                      ['rgb(220,255,81)','rgb(201,236,76)'],
                      ['rgb(148,255,95)','rgb(129,236,90)'],
                      ['rgb(95,255,136)','rgb(76,236,131)'],
                      ['rgb(80,255,178)','rgb(61,236,173)'],
                      ['rgb(80,255,249)','rgb(61,236,244)'],
                      ['rgb(0,204,255)','rgb(0,185,250)'],
                      ['rgb(0,186,255)','rgb(0,167,250)'],
    
    
                  ];
                  var index = params.dataIndex;
                  if (params.dataIndex >= colorList.length) {
                    index = params.dataIndex - colorList.length;
                }
                return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                  [{
                          offset: 0,
                          color: colorList[index][0]
                      },
                      {
                          offset: 1,
                          color: colorList[index][1]
                      }
                  ]);
                },
                    borderWidth: 1,
                    barBorderRadius: [0, 2, 2, 0]
                },
                 emphasis: {
                                barBorderRadius:[0, 2, 2, 0]
                            },
    
            },
        }]
        };
    