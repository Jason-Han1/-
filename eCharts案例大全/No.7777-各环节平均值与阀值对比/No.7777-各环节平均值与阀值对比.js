
var _seriesName = ["专家评审，完成项目挂网招标", "完成施工图设计", "施工图及预算送审", "设备入场安装", "改造并试运行"];
var threshold = [8,1.05, 1.09, 1.02, 1.72, 1.6];
var avgTime = [8, 0.8, 2, 1.57, 1.12,2.97];
var arrow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAABPklEQVQoU42SzUoCYRSGn89hKrBFoM4kRdEiiFpYuGnTDZRgzpjUJmjXDXQFXYVt25T5RyEYNv0s2rVr1Q2EMyRSIUaO88UMBK7Uszy8D7zveY9g2NilDITO8GSWuPE0KBVDQaeyDtwjmUAhTTRj/euHg77KLidA3AFhhDTQjLq/Hg36qlZxDVexEHKGnswxZ14LmmWN7ucXS0c/OA/TdDsqi6k2L3mVhfkI2k4zsPdRXKEfshDEcMWBwKm0EfKSmHGMXa0jvBiakaRZOoXQCfZ3hMRhJ4Cd6jZ4NaToCFrVLL3fN2ZzrzhXW0hlCt1o4NwsI91N9Mx5ALUKq/TVBoIoPW9/vIz2RQImb4OMfWkSN2ujwfdCEkX1LxkGmQ7cjLyqU9wAxQp69NwU8b3H8Xq0K7sg8yANdPN58Fn+AEPQbWQwQnnNAAAAAElFTkSuQmCC';

option = {
    backgroundColor: '#051B39',
    title: {
        text: '各节点时间对比',
        left: 26,
        top: 26,
        textStyle: {
            color: '#FFFFFF',
            fontSize: 90,
            fontWeight: 50000,
            fontFamily: 'PingFang SC'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(val) {
            let color = '';
            if ((val[0].axisValue == 'E' || val[0].axisValue == 'G') && val[0].value > threshold[val[0].dataIndex]) {
                color = '#FCE149';
            } else {
                color = '#37C611';
            }
            return `${val[0].name}<br/>
										<span style="color:${color};">   ● </span>${val[0].seriesName}: ${val[0].data}s<br/>
										<span style="color:#3AB6EB;">   ● </span>${val[1].seriesName}: ${val[1].data}s`
        }
    },
    grid: [{
            // show: true,
            left: '5%',
            right: '12%',
            bottom: 70,
            top: '60px',
        },
        {
            bottom: 70,
            left: '11%', // 为了让第2个grid显示在2个柱状图中间，中间相隔百分比为100/14
            right: '5%',
            height: 0,  //  不显示第2个grid的图表，只显示label
            // show: true,
        }
    ],
    legend: {
        data: ['计划完成时间', '实际执行时间'],
        left: '30%',
        bottom: 4,
        textStyle: {
            color: "#ffffff"
        },
        itemWidth: 20,
        itemHeight: 10,
        borderRadius: 5,  // borderRadius最大为宽高最小值的一半，即为5
        itemGap: 30
    },
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            axisLine: {
                show: false,
                onZero: true
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            }
        },
        {
            type: 'value',
            gridIndex: 1,
            axisLine: {
                show: false,
                onZero: true
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        }
    ],
    xAxis: [{
            type: 'category',
            gridIndex: 0,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                align: 'center',
                lineStyle: {
                    color: "#A3",
                    fontSize: '14px'
                }
            },
            axisLabel: {
                show: true,
                color: '#fff',
            },
            data: _seriesName,
            zlevel: 2
        },
        {
            type: 'category',
            gridIndex: 1,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#A3B4E5",
                    fontSize: '14px'
                }
            },
            zlevel: 1,
            axisTick: {
                show: false,
            },
            axisLabel: {
                // inside: true,
                color: 'red',
                align: 'center',
                formatter: (val) => {
                    if (val != 'G') {  //  不显示最后一个A，
                        return '{b| }';
                        // return '{a|A}'   //  可替换为连接图片
                    }
                },
                rich: {
                    b: {
                        backgroundColor: {
                            // image: require('@/assets/images/arrow.png'),  // 可替换为本地图片
                            image: arrow,
                            width: '14px'
                        },
                        fontSize: 10
                    }
                }
            },
            data: ["A", "B", "C", "D", "E", "F", "G"]  //  必须写data数据
        }
    ],
    series: [{
            name: '计划完成时间',
            type: 'bar',
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: (val) => {
                        let curId = val.dataIndex;
                        if ((curId == 4 || curId == 6) && val.value > threshold[val.dataIndex]) {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FCE149'
                            }, {
                                offset: 1,
                                color: '#EB893A'
                            }])
                        } else {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#C0EB59'
                            }, {
                                offset: 1,
                                color: '#37C611'
                            }])
                        }
                    },
                    barBorderRadius: 12,
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 11,
                    color: '#3AC712',
                    formatter: (val) => {
                        return `${val.value}s`;
                    }
                }
            },
            data: avgTime,
            xAxisIndex: 0,
            yAxisIndex: 0
        },
        {
            name: '计划完成时间量',
            type: 'bar',
            barWidth: 30,
            barGap: '150%', // 不同系列的柱间距离  为barWidth的 1.5倍
            // barCateGoryGap: 40,  //同一系列的柱间距离，默认为类目间距的20%，可设固定值
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#49FCB0'
                    }, {
                        offset: 1,
                        color: '#3AB6EB'
                    }]),
                    barBorderRadius: 11,
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 11,
                    color: '#48FAB1',
                    formatter: (val) => {
                        return `${val.value}s`;
                    }
                }
            },
            data: threshold,
            xAxisIndex: 0,
            yAxisIndex: 0
        },
        {
            type: 'bar',
            xAxisIndex: 1, //  表示第2个grid的数据
            yAxisIndex: 1
        }
    ]
};