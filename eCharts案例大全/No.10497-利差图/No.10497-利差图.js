// 导入json数据
var uploadedDataURL = "/asset/get/s/data-1565084062534--7WUBrRFR.json";
$.getJSON(uploadedDataURL, function(geoJson) {
    // 数据
    let data = geoJson.rows
    console.log(data)
    // 设置右轴格式
    let obj = {
        name: '利差(右轴)',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
            color: 'transparent'
        },
        areaStyle: {
            origin: 'auto',
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#d3d1d1' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#d3d1d1' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }
        }
    }
    let inx = null
    let curve = null
    let lineColor = ['#EEDD78', '#9FE6B8', 'rgb(184,198,223)', 'rgb(254,187,187)', 'rgb(241,231,103) ', 'rgb(137,137,186)', 'rgb(135,224,253)', '#414141']
    // 获取特定值下标
    for (let i = 0; i < data.Dimensions.length; i++) {
        if (data.Dimensions[i].indexOf('利差') > -1) {
            inx = i - 1
            data.Dimensions[i] = '利差'
            data.Series[inx] = obj
        }
        if (data.Dimensions[i].indexOf('YY评级') === -1 && data.Dimensions[i].indexOf('product') === -1 && data.Dimensions[i].indexOf('利差') === -1 && data.Dimensions[i].indexOf('成交') === -1) {
            curve = i
        }
    }
    // 设置series
    for (let k = 0; k < curve - 1; k++) {
        data.Series[k].itemStyle = {
            'color': lineColor[k]
        }
    }
    // 搜索项线条红色突出
    data.Series[curve - 1].itemStyle = {
        'color': '#C23531'
    }
    // Dimensions多product日期项
    // 设置散点图
    if (data.Dot) {
        let scatter = {
            type: 'scatter',
            name: '成交',
            symbolSize: 10,
            itemStyle: {
                color: '#003057'
            },
            data: data.Dot
        }
        data.Series[data.Series.length - 1] = scatter
    } else {
        data.Series[data.Series.length - 1] = {
            type: 'scatter',
            name: '成交',
            symbolSize: 10,
            itemStyle: {
                color: '#ccc'
            }
        }
    }

    option = {
        title: {
            text: '利差图',
        },
        legend: {
            show: true,
            type: 'plain',
            bottom: 50,
            orient: 'horizontal',
            width: '70%'
        },
        grid: {
            bottom: 120
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    show: false,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true,
                    name: '',
                    excludeComponents: ['dataZoom', 'toolbox'],
                    pixelRatio: 2
                }
            }
        },
        dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: 100,
            bottom: 5
        }],
        xAxis: {
            type: 'category',
            scale: true,
            axisPointer: {
                show: true
            }
        },
        yAxis: [{
                type: 'value',
                name: 'YTM(%)',
                scale: true,
                position: 'left',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '利差(BP)',
                position: 'right',
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        dataset: {
            dimensions: data.Dimensions,
            source: data.Source
        },
        series: data.Series
    }
    myChart.setOption(option, true)
})