myChart.showLoading();
var uploadedDataURL = "/asset/get/s/data-1594956039560-gme3lYsqq.json";

$.getJSON(uploadedDataURL, function(data) {
    let axisData = [];
    let _95CIData = [];
    let averageData = [];
    let boxPlotData = data.reduce((res, item, index) => {
        axisData.push(item.date.slice(5));
        res.push(item.box_plot);
        _95CIData.push([index].concat(item._95CI));
        averageData.push(item.average);
        return res;
    }, [])
    let option = {
        backgroundColor: '#fff',
        grid: {
            top: 70,
            left: 33,
            right: 33,
            bottom: 24,
            containLabel: true
        },
        /* legend: {
            left: 'center',
            bottom: 24,
            itemWidth: 15,
            itemHeight: 11,
            itemGap: 20,
            borderRadius: 4,
            textStyle: {
                color: '#262C41',
                fontSize: 14
            },
            data: ['箱线', '平均值', '95CID']
        }, */
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            },
            formatter(params) {
                let tooltip = `<span>${params[0].name}</span>`;
                return params.reduce((res, item) => {
                    // res += '\n';
                    let {
                        marker,
                        seriesType,
                        seriesName,
                        value
                    } = item;
                    if (seriesType === 'boxplot') {
                       ['最小值', '25%分位', '中位数', '75%分位', '最大值'].forEach((d, i) => {
                            res += `
                                        <br/>
                                        ${marker}
                                        <span>${d}：${value[i + 1]}</span>
                                    `;
                        });
                    } else if (seriesType === 'scatter') {
                        res += `
                                    <br/>
                                    ${marker}
                                    <span>${seriesName}：${value}</span>
                                `;
                    } else if (seriesType === 'custom') {
                        res += `
                                    <br/>
                                    ${marker}
                                    <span>${seriesName}：${value[1]}~${value[2]}</span>
                                `;
                    }
                    return res;
                }, tooltip);
            }
        },
        xAxis: {
            type: 'category',
            data: axisData,
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#DCDCDC'
                }
            },
            axisLabel: {
                show: true,
                margin: 10,
                fontSize: 14,
                color: '#262C41',
                interval: 'auto'
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            inverse: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#DCDCDC'
                }
            },
            axisLabel: {
                show: true,
                margin: 10,
                fontSize: 14,
                color: '#262C41'
            }
        },
        series: [{
            name: '箱线',
            type: 'boxplot',
            itemStyle: {
                borderColor: '#01C5B2',
                borderWidth: 1,
                color: '#99E8E0'
            },
            z: 0,
            data: boxPlotData
        }, {
            name: '平均值',
            type: 'scatter',
            symbol: 'triangle',
            symbolSize: 10,
            itemStyle: {
                color: '#FFB569'
            },
            z: 2,
            data: averageData
        }, {
            name: '95CI',
            type: 'custom',
            renderItem: function(params, api) {
                // 这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
                let xValue = api.value(0);

                // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
                let highPoint = api.coord([xValue, api.value(2)]);
                let lowPoint = api.coord([xValue, api.value(1)]);
                // 这里使用 api.size(...) 获得 Y 轴上数值范围为 1 的一段所对应的像素长度。
                // let halfWidth = api.size([1, 0])[0] * 0.4;
                let halfWidth = 5;
                let style = Object.assign(api.style(), {
                    stroke: api.visual('color'),
                    strokeWidth: 4
                });
                return {
                    // 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
                    type: 'group',
                    // shape 属性描述了这个矩形的像素位置和大小。
                    // 其中特殊得用到了 echarts.graphic.clipRectByRect，意思是，
                    // 如果矩形超出了当前坐标系的包围盒，则剪裁这个矩形。
                    // 如果矩形完全被剪掉，会返回 undefined.
                    children: [{
                        type: 'line',
                        shape: {
                            x1: highPoint[0] - halfWidth,
                            y1: highPoint[1],
                            x2: highPoint[0] + halfWidth,
                            y2: highPoint[1]
                        },
                        style: style
                    }, {
                        type: 'line',
                        shape: {
                            x1: highPoint[0],
                            y1: highPoint[1],
                            x2: lowPoint[0],
                            y2: lowPoint[1]
                        },
                        style: style
                    }, {
                        type: 'line',
                        shape: {
                            x1: lowPoint[0] - halfWidth,
                            y1: lowPoint[1],
                            x2: lowPoint[0] + halfWidth,
                            y2: lowPoint[1]
                        },
                        style: style
                    }]

                };
            },
            encode: {
                x: 0,
                y: [1, 2]
            },
            z: 3,
            data: _95CIData
        }]
    };
    myChart.setOption(option, true);
    myChart.hideLoading();
});