var addressData = ['广州南站东出发平台路段', '广州环城高速', '广州大道南出天大道西83米', '东风中路越秀北路口（西往东）', '南京路市良路南14米', '大广路前出口k3399 500（南往北）', '昌南东路）', '工业大道', '119省道下行9公里', '106国道出望胜北街西38米']
var lastData = [30, 25, 30, 20, 15, 18, 23, 21, 20, 10]
var thisData = [30, 0, 10, 20, 10, 30, 0, 10, 20, 20]

option = {
    backgroundColor: "rgba(7,28,52,1)",
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['上期次数', '违法前10地点', '本期次数'],
        right: "5%",
        itemWidth: 60,
        itemHeight: 30,
        textStyle: {
            color: "#9AD1FD"
        },
        itemGap: 50
    },
    grid: [{
            left: '1%',
            right: '4%',
            bottom: '5%',
            width: '0%',
            containLabel: true,
            show: false
        },
        {
            left: '5%',
            right: '4%',
            bottom: '3%',
            width: '27%',
            containLabel: true,
            show: false
        },
        {
            left: '33%',
            right: '4%',
            bottom: '3%',
            width: '33%',
            containLabel: true,
            show: false
        },
        {
            left: '67%',
            bottom: '3%',
            width: '27%',
            containLabel: true,
            show: false
        },
        {
            right: '4%',
            bottom: '5%',
            width: '0%',
            containLabel: true,
            show: false
        }
    ],
    xAxis: [{
            gridIndex: 1,
            show: false,
            inverse: true,
            type: 'value'
        },
        {
            gridIndex: 2,
            show: false,
            type: 'value'
        },
        {
            gridIndex: 3,
            show: false,
            type: 'value'
        },
        {
            gridIndex: 0,
            show: false,
            type: 'value',
        },
        {
            gridIndex: 4,
            show: false,
            type: 'value',
        }
    ],
    yAxis: [{
            gridIndex: 1,
            show: false,
            inverse: true,
            type: 'category',
            axisTick: {
                show: false
            }
        },
        {
            gridIndex: 2,
            show: false,
            inverse: true,
            type: 'category',
            axisTick: {
                show: false
            }
        },
        {
            gridIndex: 3,
            show: false,
            inverse: true,
            type: 'category',
            axisTick: {
                show: false
            }
        },
        {
            gridIndex: 0,
            show: true,
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            type: 'category',
            // data:[-30,-25, -30, -20, -15, -18, -23,-21,-20,-10]
            data: lastData.map(value => {
                return {
                    "value": value,
                    "textStyle": {
                        align: 'center',
                        color: '#fff',
                        fontSize: 20
                    }
                }
            })

        },
        {
            gridIndex: 4,
            show: true,
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            type: 'category',
            // data:[-30,-25, -30, -20, -15, -18, -23,-21,-20,-10]
            data: thisData.map(value => {
                return {
                    "value": value,
                    "textStyle": {
                        align: 'center',
                        color: '#fff',
                        fontSize: 20
                    }
                }
            })

        }
    ],
    series: [{
            name: '上期次数',
            type: 'bar',
            stack: '0',
            barWidth: '50%',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(9,147,238,0.1)'
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(192,0,255, 0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(83,14,224, 0.2)' // 100% 处的颜色
                        }]

                    },
                    opacity: 1
                }
            },
            data: [30, 25, 30, 20, 15, 18, 23, 21, 20, 10]
        },
        {
            yAxisIndex: 1,
            xAxisIndex: 1,
            name: '违法前10地点',
            type: 'bar',
            stack: '1',
            barWidth: '50%',
            label: {
                position: 'insideLeft',
                show: true,
                fontSize: 20,
                formatter: (params) => {
                    return addressData[params.dataIndex]
                }
            },
            itemStyle: {
                normal: {
                    color: "rgba(48,112,255,.8)"
                }
            },
            data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: '本期次数',
            type: 'bar',
            stack: '2',
            barWidth: '50%',
            data: [30, 0, 10, 20, 10, 30, 0, 10, 20, 20],
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(83,14,224,0.2)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(0,255,252, 0.6)' // 100% 处的颜色
                        }]

                    },
                    opacity: 1
                }
            }
        }
    ]
};