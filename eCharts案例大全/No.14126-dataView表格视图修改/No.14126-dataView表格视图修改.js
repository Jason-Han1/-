option = {
    title: {
        text: 'dataView表格视图修改'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['蒸发量', '降水量']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true,
                optionToContent: function(opt) {
                    let axisData = opt.xAxis[0].data; //坐标数据
                    let series = opt.series; //折线图数据
                    let tdHeads = '<td  style="padding: 0 10px">时间</td>'; //表头
                    let tdBodys = ''; //数据
                    series.forEach(function(item) {
                        //组装表头
                        tdHeads += `<td style="padding: 0 10px">${item.name}</td>`;
                    });
                    let table = `<table border="1" width="90%" style="margin:0 auto;border-collapse:collapse;font-size:14px;text-align:center"><tbody><tr>${tdHeads} </tr>`;
                    for (let i = 0, l = axisData.length; i < l; i++) {
                        for (let j = 0; j < series.length; j++) {
                            //组装表数据
                            tdBodys += `<td>${ series[j].data[i]}</td>`;
                        }
                        table += `<tr><td style="padding: 0 10px">${axisData[i]}</td>${tdBodys}</tr>`;
                        tdBodys = '';
                    }
                    table += '</tbody></table>';
                    return table;
                }
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
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
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        },
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
                data: [{
                        name: '年最高',
                        value: 182.2,
                        xAxis: 7,
                        yAxis: 183
                    },
                    {
                        name: '年最低',
                        value: 2.3,
                        xAxis: 11,
                        yAxis: 3
                    }
                ]
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }
    ]
};