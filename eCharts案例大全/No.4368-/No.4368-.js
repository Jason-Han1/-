// Generate data
let data = {
    //封闭温度
    block_temp_list: ["13.6", "13.3", "13.0", "12.7", "12.5", "12.1", "11.9", "11.6", "11.4", "11.1", "11.0", "10.7"], 
    // 时间
    date_list: ["2019-12-11 17:08:00", "2019-12-11 18:08:00", "2019-12-11 19:08:00", "2019-12-11 20:08:00"],
    //外部湿度
    out_hum_list: ["55.0", "55.0", "55.0", "54.0", "55.0", "55.0", "55.0", "55.0", "54.0", "54.0", "54.0", "55.0"], 
};

// option
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(67,140,226,0.5)',
        axisPointer: {
            type: 'cross',
            label: {
                show: true,
                backgroundColor: '#7B7DDC'
            },

            crossStyle: {
                color: '#fff'
            },
            lineStyle:{
                color:'#fff'
            }

        }
    },
    legend: {
        data: ['木材温度', '外部温度', '封闭温度', '封闭湿度', '木材含水率', '外部湿度'],
        textStyle: {
            color: '#666',
            fontSize: 10
        },
        top: '7%',
    },
    grid: {
        x: '10%',
        y: '10%',
    },
    xAxis: {
        data: data.date_list,
        boundaryGap:false,
        axisLine: {
            lineStyle: {
                color: '#666'
            }
        },
        axisLabel: {
            fontSize: 14
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: [{
            name: '油压',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#666',
                }
            },

            axisLabel: {
                formatter: '{value} ',
                fontSize: 14
            },
            axisTick:{
                show:false
            }
        },
        {
            name: '位移',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#666',
                }
            },
             axisTick:{
                show:false
            },
            axisLabel: {
                formatter: '{value} ',
                fontSize: 14
            }
        }
    ],

    series: [ 
        {
            name: '外部湿度',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            lineStyle: {
                width: 3
            },
            boundaryGap: false,
            symbol: 'emptyCircle',
            symbolSize: 10,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(254,178,62,1)'
                },
            },
            areaStyle: { //区域填充样式
               normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(254,178,62,0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(254,178,62,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(254,178,62,0.2)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: data.out_hum_list
        },
        {
            name: '封闭温度',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            lineStyle: {
                width: 3
            },
            boundaryGap: false,
            symbol: 'emptyCircle',
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: 'rgba(0,126,252,1)'
                },
            },
            areaStyle: { //区域填充样式
                 normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,126,252,0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,126,252,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(0,126,252,0.2)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: data.block_temp_list
        },
       
    ]
};