        var MyCubeRect = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0,
            width: 12, //柱宽
            zWidth: 6, //阴影折角宽
            zHeight: 3, //阴影折角高
        },
        buildPath: function (ctx, shape) {
            const api = shape.api;
            const xAxisPoint = api.coord([shape.xValue, 0]);
            const p0 = [shape.x - shape.width / 2, shape.y];
            const p1 = [shape.x - shape.width / 2, shape.y];
            const p4 = [shape.x + shape.width - shape.width / 2, shape.y];
            const p2 = [xAxisPoint[0] - shape.width / 2, xAxisPoint[1]];
            const p3 = [xAxisPoint[0] + shape.width - shape.width / 2, xAxisPoint[1]];

            ctx.moveTo(p0[0], p0[1]); //0
            ctx.lineTo(p1[0], p1[1]); //1
            ctx.lineTo(p2[0], p2[1]); //2
            ctx.lineTo(p3[0], p3[1]); //3
            ctx.lineTo(p4[0], p4[1]); //4
            ctx.lineTo(p0[0], p0[1]); //0
            ctx.closePath();
        }
    });
    //单体阴影柱状图
    var MyCubeShadow = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0,
            width: 12,
            zWidth: 6,
            zHeight: 3,
        },
        buildPath: function (ctx, shape) {
            const api = shape.api;
            const xAxisPoint = api.coord([shape.xValue, 0]);
            const p0 = [shape.x - shape.width / 2, shape.y];
            const p1 = [shape.x - shape.width / 2, shape.y];
            const p4 = [shape.x + shape.width - shape.width / 2, shape.y];
            const p6 = [shape.x + shape.width + shape.zWidth - shape.width / 2, shape.y - shape.zHeight];
            const p7 = [shape.x + shape.zWidth - shape.width / 2, shape.y - shape.zHeight];
            const p3 = [xAxisPoint[0] + shape.width - shape.width / 2, xAxisPoint[1]];
            const p5 = [xAxisPoint[0] + shape.width + shape.zWidth - shape.width / 2, xAxisPoint[1] - shape.zHeight];

            ctx.moveTo(p4[0], p4[1]); //4
            ctx.lineTo(p3[0], p3[1]); //3
            ctx.lineTo(p5[0], p5[1]); //5
            ctx.lineTo(p6[0], p6[1]); //6
            ctx.lineTo(p4[0], p4[1]); //4

            ctx.moveTo(p4[0], p4[1]); //4
            ctx.lineTo(p6[0], p6[1]); //6
            ctx.lineTo(p7[0], p7[1]); //7
            ctx.lineTo(p1[0], p1[1]); //1
            ctx.lineTo(p4[0], p4[1]); //4
            ctx.closePath();
        }
    });
    echarts.graphic.registerShape('MyCubeRect', MyCubeRect);
    echarts.graphic.registerShape('MyCubeShadow', MyCubeShadow);
    option = {
            tooltip: {
                trigger: 'item',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var color = params.color; //图例颜色
                    var htmlStr = '<div>';
                    htmlStr += params.name + '<br/>'; //x轴的名称
                    htmlStr += '<span ></span>';
                    htmlStr += params.seriesName + '：' + params.value + ' %<br/>';
                    htmlStr += '<span ></span>';
                    if (params.name == "自开工累计") {
                        htmlStr += '金额(万元)：' + data_str[1] + '<br/>';
                    }
                    if (params.name == "本年") {
                        htmlStr += '金额(万元)：' + data_str[3] + '<br/>';
                    }
                    if (params.name == "本月") {
                        htmlStr += '金额(万元)：' + data_str[5] + '<br/>';
                    }
                    if (params.name == "设计") {
                        htmlStr += '金额(万元)：' + E_value + '<br/>';
                    }
                    if (params.name == "采购") {
                        htmlStr += '金额(万元)：' + P_value + '<br/>';
                    }
                    if (params.name == "施工") {
                        htmlStr += '金额(万元)：' + C_value + '<br/>';
                    }
                    htmlStr += '</div>';
                    return htmlStr;
                }
            },
            grid: {
                borderWidth: 0,
                x: 50,
                x2: 10,
                y: 5,
                y2: 50
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                axisLabel: {
                    rotate: 27  
                },
                data: ['监造委托', '制造问题整改', '到货验收', '桩基检测', '混凝土强度评定', '焊接一次', '质量控制点报验', '现场质量问题整改', '工程质量验收'],
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 105,
                axisLabel: {
                    formatter: '{value} %'
                }
            }],
            series: [{
                name: '完成率',
                barWidth: '33%',
                type: 'custom',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = ['#EE6911', '#EE6666', '#AECC33', '#EEEE66', '#EE6666', '#2BD5B3', '#33CCCC', '#CC33CC', '#C7F709'];
                            return colorList[params.dataIndex]
                        }
                    },
                },
                renderItem: function (params, api) {
                    var colorList = ['#EE6911', '#EE6666', '#AECC33', '#EEEE66', '#EE6666', '#2BD5B3', '#33CCCC', '#CC33CC', '#C7F709'];
                    var colorList1 = ['#EE6911', '#EE6666', '#AECC33', '#EEEE66', '#EE6666', '#2BD5B3', '#33CCCC', '#CC33CC', '#C7F709'];
                    let location = api.coord([api.value(0), api.value(1)]);
                    return {
                        type: 'group',
                        children: [{
                            type: 'MyCubeRect',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1]
                            },
                            style: {
                                fill: colorList[params.dataIndex]
                            }
                        }, {
                            type: 'MyCubeShadow',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1]
                            },
                            style: {
                                fill: colorList1[params.dataIndex]
                            }
                        }]
                    };
                },
                data: [36.92, 89.74, 98.45, 98.61, 99.86, 98.13, 98.78, 99.14, 14.34]
            }]
        }; 
        