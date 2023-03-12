option = {
    backgroundColor:'#000E1B',
    title:{
        show: false,
        text:'本市危货种类占比',
        textStyle:{
          color:'#FFFFFF'  
        },
        left:'300px',
        top: '300'
        
    },
    tooltip: {
        show: false,
        formatter: "{b} <br> {c}%"

    },
    legend: {
        icon: "circle", 
        bottom: '43%',
        left:'10%',
        itemWidth: 7,
        itemHeight: 7,
        itemGap: 40,
        textStyle:{
            color:'#89A7AF',
        },
        data:[{
                name :'油车'
             },
             {
                name :'危化品'
             },
             {
                name :'其他'
             }
            ]
    },
    xAxis: [{
        type :'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    yAxis: [{
        //type: 'category',
        data: [''],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
            }
        }

    }],
    series: [
        {
            name:'油车',
            type:'bar',
            barWidth:16,
            stack: '危货种类占比',
            label: {
                normal: {
                    borderWidth: 10,
                    distance: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    borderRadius: 1,
                    borderColor: '#E8A61F',
                    backgroundColor: '#E8A61F',
                    show: true,
                    position: 'top',
                    formatter: '{c}%',
                    color: '#000'
                }
            },
            itemStyle: {
                color: '#E8A61F'
            },
            data:[{
                value:53.1,
                itemStyle: {
                normal: {
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#E8A61F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#E8A61F' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
            }]
        },
        {
            name:'油车三角形',
            type:'line',
            barWidth:0,
            markPoint: {
                symbol:'triangle',
                symbolRotate:'180',
                itemStyle:{
                  color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#E8A61F' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#E8A61F' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }  
                },
                symbolSize:[6,5],// 容器大小
                symbolOffset:[0,-15],//位置偏移
                data:[{
                    coord: [53.11/2]
                }],
                label: {
                    normal: {
                        show: false
                    },
                    offset: [0, 0],
                }
            }
        },
        {
            name:'危化品',
            type:'bar',
            barWidth:16,
            stack: '危货种类占比',
            itemStyle: {
                color: '#E67C26'
            },
            label: {
                normal: {
                    borderWidth: 10,
                    distance: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    borderRadius: 1,
                    borderColor: '#E67C26',
                    backgroundColor: '#E67C26',
                    show: true,
                    position: 'top',
                    formatter: '{c}%',
                    color: '#000'
                }
            },
            data:[{
                value:23,
                itemStyle: {
                normal: {
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#E67C26' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#E67C26' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
            }]
        },
        {
            name:'危化品三角形',
            type:'line',
            barWidth:0,
            markPoint: {
                symbol:'triangle',
                symbolRotate:'180',
                itemStyle:{
                  color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#E67C26' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#E67C26' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }  
                },
                symbolSize:[6,5],// 容器大小
                symbolOffset:[0,-15],//位置偏移
                data:[{
                    coord: [53.11 + 23/2]
                }],
                label: {
                    normal: {
                        show: false
                    },
                    offset: [0, 0],
                }
            }
        },
        {
            name:'其他',
            type:'bar',
            barWidth:16,
            stack: '危货种类占比',
            itemStyle: {
                color: '#0CD8A7'
            },
            label: {
                normal: {
                    borderWidth: 10,
                    distance: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    borderRadius: 1,
                    borderColor: '#0CD8A7',
                    backgroundColor: '#0CD8A7',
                    show: true,
                    position: 'top',
                    formatter: '{c}%',
                    color: '#000'
                }
            },
            data:[{
                value:1,
                itemStyle: {
                normal: {
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#0CD8A7' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0CD8A7' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
            }]
        },
        {
            name:'其他三角形',
            type:'line',
            barWidth:0,
            markPoint: {
                symbol:'triangle',
                symbolRotate:'180',
                itemStyle:{
                  color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#0CD8A7' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#0CD8A7' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }  
                },
                symbolSize:[6,5],// 容器大小
                symbolOffset:[0,-15],//位置偏移
                data:[{
                    coord: [53.11 + 23 + 1/2]
                }],
                label: {
                    normal: {
                        show: false
                    },
                    offset: [0, 0],
                }
            }
        }
    ]
};