var categoryData = ['01-20', '02-30', '04-05', '08-04', '09-10', '10-09'],
    option = {
        grid: [
            {
                top: '10%',
                bottom: '40%',
                right: '11%',
            },
            {
                top: '65%',
                bottom: '0',
            },
        ],
        tooltip: {
            confine: true, //将 tooltip 框限制在图表的区域内
            trigger: 'axis',
            padding: 10,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            },
            axisPointer: {
                //作别奥轴指示器，坐标轴触发有效
                type: 'line', // 默认为直线，可选为：'line' | 'shadow'
                lineStyle: {
                    type: 'dotted',
                    width: 1,
                    color: '#888',
                    opacity: 0.3,
                },
            },
            backgroundColor: 'rgba(0, 0, 0, 0.4);', //背景色
            borderWidth: '0', //边框宽度设置1
            formatter: function (params) {
                let legend1 = ['港资持仓比例', '收盘价', '港资净流入'];
                let legend = [
                    { name: '港资持仓比例', tofixed: 1, unit: '%', billion: '1', color: '#2864C8', color2: '#2864C8' },
                    { name: '收盘价', tofixed: 2, unit: '', billion: '1', color: '#FF784B', color2: '#FF784B' },
                    {
                        name: '港资净流入',
                        tofixed: 2,
                        unit: '亿',
                        billion: '100000000',
                        color1: '#00B45A',
                        color2: '#F0000A',
                    },
                ];
                let html = '';
                for (let m = 0; m < legend.length; m++) {
                    if (m == 0) html = `<p>${params[0].name}</p >`;
                    for (let n = 0; n < params.length; n++) {
                        if (params[n].seriesName == legend[m].name) {
                            if (params[n].value > 0) {
                                html += `<p class="tooltip" style='line-height: 12px;margin-top: 10px;color: #fff'>
                                              <i style='float:left;margin-top: 6px;width: 6px;height: 6px;border-radius: 3px;margin-right: 4px;background:${
                                                  legend[m].color2
                                              }'></i>
                                                ${params[n].seriesName} : ${(
                                    params[n].value / legend[m].billion
                                ).toFixed(legend[m].tofixed)}${legend[m].unit}
                                                </p >`;
                                break;
                            } else {
                                html += `<p style='line-height: 12px;margin-top: 10px;color: #fff'>
                                              <i style='float:left;margin-top: 6px;width: 6px;height: 6px;border-radius: 3px;margin-right: 4px;background:${
                                                  legend[m].color1
                                              }'></i>
                                                ${params[n].seriesName} : ${(
                                    params[n].value / legend[m].billion
                                ).toFixed(legend[m].tofixed)}${legend[m].unit}
                                                </p >`;
                                break;
                            }
                        }
                    }
                }
                // console.log(params)
                return html;
            }, //提示框处理
            // formatter: function (params) {
            //     let html = "<div>" + "<p>" + params[0].name + "</p>";
            //     if (params.length > 0) {
            //         if (params[1].value > 0) {
            //             html += "<p style='line-height: 12px;margin-top: 10px;color: #fff'><i style='float:left;margin-top: 3px;width: 6px;height: 6px;border-radius: 3px;background:#2864C8;margin-right: 4px'></i>" + params[1].seriesName + "："+ (params[1].value).toFixed(1) + "%</p>" +
            //                 "<p style='line-height: 12px;margin-top: 10px;color: #fff'><i style='float:left;margin-top: 3px;width: 6px;height: 6px;border-radius: 3px;background:#FF784B;margin-right: 4px'></i>" + params[2].seriesName + "：" + (params[2].value) + "</p>"+
            //                 "<p style='line-height: 12px;margin-top: 10px;color: #fff'><i style='float:left;margin-top: 3px;width: 6px;height: 6px;border-radius: 3px;background:#F0000A;margin-right: 4px'></i>" + params[0].seriesName + "：" + ((params[0].value)/100000000).toFixed(2) + "亿</p>" +
            //                 "</div>"
            //         }
            //         else {
            //             html += "<p style='line-height: 12px;margin-top: 10px;color: #fff'><i style='float:left;margin-top: 3px;width: 6px;height: 6px;border-radius: 3px;background:#2864C8;margin-right: 4px'></i>" + params[1].seriesName + "：" + (params[1].value).toFixed(1) + "%</p>" +
            //                 "<p style='line-height: 12px;margin-top: 10px;color: #fff'><i style='float:left;margin-top: 3px;width: 6px;height: 6px;border-radius: 3px;background:#FF784B;margin-right: 4px'></i>" + params[2].seriesName + "：" + (params[2].value) + "</p>"+
            //                 "<p style='line-height: 12px;margin-top: 10px;color: #fff'><i style='float:left;margin-top: 3px;width: 6px;height: 6px;border-radius: 3px;background:#00B45A;margin-right: 4px'></i>" + params[0].seriesName + "：" + ((params[0].value)/100000000).toFixed(2) + "亿</p>" +
            //                 "</div>"
            //         }
            //     }
            //     return html;
            // }
        },
        axisPointer: {
            //链接
            link: { xAxisIndex: 'all' }, //多图表，一起触发提示框
        },
        xAxis: [
            {
                type: 'category',
                data: categoryData,
                boundaryGap: false,
                axisTick: false, //刻度
                axisLine: {
                    //x轴线
                    onZero: true,
                    lineStyle: {
                        color: '#F2F2F2',
                    },
                },
                axisLabel: {
                    fontSize: 10,
                    color: '#30303d',
                    showMaxLabel: true,
                    // interval: (index, value) => {
                    //     if (index == 0 || (index == xLen - 1)) {
                    //         return true
                    //     }
                    //     if (xLen % 2 > 0) {
                    //         if (index == Math.floor(xLen / 2)) {
                    //             return true
                    //         }
                    //     } else {
                    //         if (index == (Math.floor(xLen / 2) - 1)) {
                    //             return true
                    //         }
                    //     }
                    // },
                    // width: 30 * rem,
                    // margin: 12,
                    // formatter: function (value, index) {
                    //     if (index == 0) {
                    //         return '{a|' + value + '}'
                    //     } else if (index == xLen - 1) {
                    //         return '{b|' + value + '}'
                    //     } else {
                    //         return '{c|' + value + '}'
                    //     }
                    // },
                    // rich: {
                    //     a: {
                    //         align: 'left',
                    //         padding: [0, 0, 0, 12],
                    //         fontSize: 10 * rem,
                    //         color: '#30303D',
                    //     },
                    //     b: {
                    //         align: 'right',
                    //         padding: [0, 15, 0, 0],
                    //         fontSize: 10 * rem,
                    //         color: '#30303D',
                    //     },
                    //     c: {
                    //         align: 'center',
                    //         fontSize: 10 * rem,
                    //         color: '#30303D',
                    //     }
                    // },
                    splitLine: false,
                    splitNumber: 2,
                },
                axisPointer: {
                    //坐标轴指示器，坐标轴触发有效，
                    type: 'line', //默认为line，line直线，cross十字准星，shadow阴影
                    crossStyle: {
                        color: '#fff',
                    },
                },
            },
            {
                gridIndex: 1, //对应坐标系索引，默认为0
                type: 'category', //[value|category|time|log] [数值轴|default,同级加data对象指定数据（x轴一般用这个）|时间|对数]
                boundaryGap: false,
                axisTick: false,
                data: categoryData, //在类目轴（type: 'category'）中有效。
                //如果没有设置 type，但是设置了 axis.data，则认为 type 是 'category'。
                axisLabel: {
                    fontSize: 10,
                    color: '#30303d',
                    showMaxLabel: true,
                    splitLine: false,
                    splitNumber: 1,
                },
                // axisPointer: {
                //     type: 'shadow'
                // },
                axisLine: {
                    //x轴线
                    onZero: true,
                    lineStyle: {
                        color: '#F2F2F2',
                    },
                },
            },
        ],
        yAxis: [
            {
                gridIndex: 0,
                type: 'value', //[value|category|time|log] [default,数值轴||时间|对数]
                name: '持股比例',
                nameTextStyle: {
                    //调整name位置
                    padding: [0, 0, 0, -20],
                },
                interval: 30,
                min: 'dataMin',
                max: 'dataMax',
                splitNumber: 1,
                axisLine: false,
                axisTick: false, //刻度
                axisLabel: {
                    formatter(params) {
                        return params.toFixed(1) + '%'; //标签格式器
                    },
                    textStyle: {
                        fontSize: 10,
                        color: '#30303d',
                    },
                },
            },
            {
                gridIndex: 0,
                type: 'value',
                name: '收盘价',
                nameTextStyle: {
                    //调整name位置
                    padding: [0, -40, 0, 0],
                },
                //   interval: 10,
                splitLine: {
                    lineStyle: {
                        type: 'dotted',
                        width: 0.5,
                        color: '#F2F2F2',
                        // opacity: 0.5
                    },
                },
                splitNumber: 1,
                axisLine: false,
                min: 'dataMin',
                max: 'dataMax',
                axisLabel: {
                    formatter(params) {
                        return params.toFixed(2);
                    },
                    textStyle: {
                        fontSize: 10,
                        color: '#000',
                    },
                },
                // axisLabel: {
                //     formatter: '{value} '
                // }
            },
            {
                gridIndex: 1,
                type: 'value',
                name: '',
                splitLine: { show: false },
                axisLabel: 'false',
                axisLine: false,
                axisTick: false, //刻度
                // axisLabel: {
                //     formatter: '{value}'
                // }
            },
        ],
        series: [
            //series数组，一个对象即为一个绘图区
            {
                name: '港资持仓比例',
                symbol: 'emptyCircle', //取消掉折线上面的小圆点
                type: 'line',
                showSymbol: false, //不显示连接点
                symbolSize: 0.1,
                smooth: true, //平滑曲线  0~1为平滑度
                connectNulls: true,
                lineStyle: {
                    width: 1.5,
                },
                color: '#2864C8',
                // data: adjustedholdratio
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            },
            {
                name: '收盘价',
                symbol: 'emptyCircle', //取消掉折线上面的小圆点
                yAxisIndex: 1, //第二个Y轴
                type: 'line',
                lineStyle: {
                    width: 1.5,
                },
                showSymbol: false,
                symbolSize: 0.1,
                chartBox: 0.1,
                smooth: true,
                connectNulls: true,
                gridIndex: 0,
                color: '#FF784B',
                // data:closeprice
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
            },
            {
                name: '港资净流入',
                type: 'bar',
                barWidth: '5',
                gridIndex: 1,
                xAxisIndex: 1,
                yAxisIndex: 2,
                itemStyle: {
                    color: function (params) {
                        return params.value >= 0 ? '#F0000A' : '#00B45A';
                    },
                },
                //  data: this.holdings.map(item => item.netinflow)
                data: [2.0, -2.2, 3.3, -4.5, 6.3, -10.2, 20.3, -23.4, 23.0, -16.5, 12.0, -6.2],
            },
        ],
    };
