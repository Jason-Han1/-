var areaStyle = {
    silent: false,
    itemStyle: {
        normal: {
            color: 'rgba(146, 154, 199, 0)'
        }
    },
    data: [
        [{
            name: '',
            xAxis: '2018E',
            label: {
                normal: {
                    offset: [0, 100],
                    color: "#013678",
                    fontSize: 14
                }
            }
        }, {
            xAxis: '2020E'
        }]
    ]
}
var option = {
    
        toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true,
                pixelRatio: 5
            }
        }
    },
    
    title: {
        //text: '项目需要的堆叠图',
        //subtext: 'gogoogogogo',
        x: 'center',
        align: 'right'
    },

    backgroundColor: '',
    color: ['#1c2f8a', ''],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        x:'13%',
        top: '23%',
        data: ['市场规模','YOY%'],
        textStyle:{
            fontSize:20,
            fontWeight:500
        },
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        name:'亿元',
        nameTextStyle: {fontSize:30,fontWeight:500},
        min: 0,
        max: 1400,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#f2f2f2']
            }
        },
        
        axisLabel: {        
                                show: true,
                                textStyle: {
                                    color: 'black',
                                    fontSize:'20',
                                    fontWeight:500
                                }
                            },
                            
        axisLine:{
                            lineStyle:{
                                color:'black',
                                  width:3.5,   //这里是坐标轴的宽度,可以去掉
                            }
                        },
    },
    
    {
        type: 'value',
        name:'年增长速度%',
        nameTextStyle: {fontSize: 30,fontWeight:500},
        min: 0,
        max: 12,
        splitNumber: 5,
                
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#DDD']
            }
        },
        
        axisLabel: {        
                                show: true,
                                textStyle: {
                                    color: 'black',
                                    fontSize:'20',
                                    fontWeight:500
                                }
                            },
                            
        axisLine:{
                            lineStyle:{
                                color:'black',
                                  width:3.5,   //这里是坐标轴的宽度,可以去掉
                            }
                        },
    }
    
    
    ],
    xAxis: [{
        type: 'category',
        data: ['2019', '2020E', '2021E', '2022E','2023E','2024E','2025E'],
        
        axisLabel: {        
                                show: true,
                                textStyle: {
                                    color: 'black',
                                    fontSize:'30',
                                    fontWeight:500
                                }
                            },
                            
        axisLine:{
                            lineStyle:{
                                color:'black',
                                  width:3.5,   //这里是坐标轴的宽度,可以去掉
                            }
                        },
    }],
    series: [{
            name: '市场规模',
            type: 'bar',
            stack: '总量',
            color:'#013678',
            barWidth: '90px',
            

            
            data: [712.2,783.2,845.8,905,973.8,1061.4,1146.3],
            //加阴影

        },
        {
            name: 'YOY%',
            type: 'line',
            color:'#FD6467',
            yAxisIndex: 1,
            barWidth: '100px',
            itemStyle: {
                normal: {
                    lineStyle: {
                      width:8
                    }
                }
            },

            data: [ 8,10.2,7.8,7.2,7.6,9.1,8.2],
            markArea: areaStyle
        },
        
    ],
    
};







