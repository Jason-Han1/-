
    var option = {
        backgroundColor: '#043065',
        tooltip: {
            trigger: 'axis',
            textStyle: {
                align: 'left',
                color: '#5cc1ff',
                // color: '#fff',
                fontSize: '16'
            },
            backgroundColor: 'rgba(15, 52, 135, 0.5)',
            borderWidth: '1',
            borderColor: '#5cc1ff',
            extraCssText: 'box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);',
            formatter: function(params) {
                return params[0].name + "<br />" + "<span>苹果批发价格涨跌幅: </span>" + "<span>" + params[0].value + "%</span>";
            }
        },
        label: {
            normal: {
                textStyle: {
                    color: "#cccccc"
                }
            },
            emphasis: {
                textStyle: {
                    color: "#cccccc"
                }
            }
        },
        grid: {//设置图表靠边位置
            left: '10%',
            right: '10%',
            bottom: '10%',
            top: '50',
            containLabel: true
        },
        yAxis: {
            type: 'category',
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#8ac7ff'
                }
            },
            axisTick: {
                show: false,
                interval: 0,
                alignWithLabel: true
            },
            axisLabel: {
                interval: 0,
                rotate: '0',
                textStyle: {
                    fontSize: 10,
                    color: '#cee8ff'
                }
            },
            data: ['功能点10', '功能点9', "功能点8", '功能点7', "功能点6",'功能点5', '功能点4', "功能点3", '功能点2', "功能点1"],
            splitLine: {
                show: false//, "机构6", "机构7", "机构8", "机构9", "机构10"
            }
        },
        xAxis: {
            type: 'value',
            name: '',
            splitLine: {
                show: false,
                lineStyle: {
                    color: ['rgba(138, 199, 255, .2)']
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#01c2db'
                }
            }
        },
        series: [{
            name: '数量',
            type: 'bar',
            stack: '总量',
            barWidth: 10,
            label: {
                normal: {
                    show: true,
                    color:'#fff',
                    position: 'right',
                    formatter: "{c}"
                }
            },
            itemStyle: {
                normal: {
                    barBorderWidth: '0',
                    barBorderRadius: [10, 10, 10, 10],
                    barBorderColor: 'rgb(0,255,132)',
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(0,255,132, .4)'// rgba(255,255,132, .4)，rgba(0,0,255, .4)
                    }, {
                        offset: 1,
                        color: 'rgb(0,255,132)' //#0000F，F#ffbd19
                    }])
                },
                emphasis: {
                    barBorderWidth: '1',
                    barBorderColor: 'rgb(0,255,132)'
                    // color: 'rgba(26,177,98,.8)'
                }
            },
            // 顺序 从下向上 传入
            data: [370,   450, 550, 700,790,1250, 1278,1600,   1820,2335]//,1250, 1278,1600,   1820,2335
        }]
    };
    // rank1.setOption(rankOption1);
    // rank2.setOption(rankOption2);
    // // echarts 图表初始化完成，无关后台数据交互
    // function rankInit(upData, DownData) {
    //     rank1.setOption({
    //         yAxis: {
    //             data: ['宁夏', '四川', "内蒙古", '新疆', "江苏", "山西", "陜西", "河南", "河北", "山东"],
    //         },
    //         series: [{
    //             // 顺序 从下向上 传入
    //             data: upData
    //         }]
    //     });
    //     rank2.setOption({
    //         yAxis: {
    //             data: ['西藏', '黑龙江', "河北", '陜西', "山东", "武汉", "天津", "内蒙", "河南", "云南"],
    //         },
    //         series: [{
    //             // 顺序 从下向上 传入
    //             data: DownData
    //         }]
    //     });
    // }

    // // 页面初始化
    // rankInit(fakeData(10, 100), fakeData(10, 100));