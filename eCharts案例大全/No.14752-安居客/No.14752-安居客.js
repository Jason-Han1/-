var data1=[
        [68, 132, 101, 134, 90, 230, 134, 90, 230],
        [68, 32, 11, 34, 30, 130, 234, 50, 130],
        [68, 62, 61, 24, 40, 130, 84, 70, 40],
        [68, 62, 41, 74, 77, 37,94,20, 120]
        
    ]
var data2=[
        [68, 132, 101, 134, 90, 230, 134, 90, 230],
        [68, 32, 11, 34, 30, 130, 234, 50, 130],
        [68, 62, 61, 24, 40, 130, 84, 70, 40],
        [68, 62, 41, 74, 77, 37,94,20, 120]
        
    ]

option = {
    backgroundColor:"#111",
    title: [{
        text: '安居客',
        x: 'center',
        textStyle: {
            color: '#fff'
        }
    }, {
        top: '25%',
        x: 'center',
        textStyle: {
            color: '#fff'
        },
        text: '搜房',
    }
    , {
        top: '50%',
        x: 'center',
        textStyle: {
            color: '#fff'
        },
        text: '58',
    }
    , {
        top: '75%',
        x: 'center',
        textStyle: {
            color: '#fff'
        },
        text: '新浪',
    }],
    tooltip: {
        trigger: 'axis'
    },
    color: ["#22cfb1", "#fb1c01", "#ffc900", "#f46b57"],
    legend: {
        show:false,
        data:['邮件营销','联盟广告','视频广告','直接访问']
    },
    grid: [{
        top: '5%',
        bottom: '80%'
    }, {
        top: '30%',
        bottom: '55%'
    }, {
        top: '55%',
        bottom: '30%'
    }, {
        top: '80%',
        bottom: '5%'
    }],
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#fff"
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                type:'dashed'
            }
        },
        axisLabel:{
            textStyle:{
                color:'#FFF',
            }
        },
        data: ['9.1','9.2','9.3','9.4','9.5','9.6','9.7','9.8','9.9']
    },{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#fff"
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                type:'dashed'
            }
        },
        axisLabel:{
            textStyle:{
                color:'#FFF',
            }
        },
        data: ['9.1','9.2','9.3','9.4','9.5','9.6','9.7','9.8','9.9'],
        gridIndex: 1
    }
    ,{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#fff"
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                type:'dashed'
            }
        },
        axisLabel:{
            textStyle:{
                color:'#FFF',
            }
        },
        data: ['9.1','9.2','9.3','9.4','9.5','9.6','9.7','9.8','9.9'],
        gridIndex: 2
    }
    ,{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#fff"
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                type:'dashed'
            }
        },
        axisLabel:{
            textStyle:{
                color:'#FFF',
            }
        },
        data: ['9.1','9.2','9.3','9.4','9.5','9.6','9.7','9.8','9.9'],
        gridIndex: 3
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#fff"
            }
        },
        },{
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#fff"
                }
            },
            gridIndex: 1
        },{
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#fff"
                }
            },
            gridIndex: 2
        },{
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#fff"
                }
            },
            gridIndex: 3
        }],
    series: [
        {
                name: '邮件营销',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                data:data1[0]
            },
            {
                name: '联盟广告',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                data:data1[1]
            },
            {
                name: '视频广告',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                data:data1[3]
            },
            {
                name: '直接访问',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                data:data1[4]
            },
            {
                name: '邮件营销',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                data:data1[0],
                 xAxisIndex: 1,
                yAxisIndex: 1
        },
        {
                name: '联盟广告',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                 data:data1[1],
                 xAxisIndex: 1,
                yAxisIndex: 1
            }, {
                name: '视频广告',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                 data:data1[2],
                 xAxisIndex: 1,
                yAxisIndex: 1
            }, {
                name: '直接访问',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                 data:data1[3],
                 xAxisIndex: 1,
                yAxisIndex: 1
        },
        {
                name: '邮件营销',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                data:data1[0],
                 xAxisIndex: 2,
                yAxisIndex: 2
            }, {
                name: '联盟广告',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                 data:data1[1],
                 xAxisIndex: 2,
                yAxisIndex: 2
            }, {
                name: '视频广告',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                 data:data1[2],
                 xAxisIndex: 2,
                yAxisIndex: 2
            }, {
                name: '直接访问',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                 data:data1[3],
                 xAxisIndex: 2,
                yAxisIndex: 2
            }
            ,{
                name: '邮件营销',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                data:data1[0],
                 xAxisIndex: 3,
                yAxisIndex: 3
            }, {
                name: '联盟广告',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                 data:data1[1],
                 xAxisIndex: 3,
                yAxisIndex: 3
            }, {
                name: '视频广告',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                 data:data1[2],
                 xAxisIndex: 3,
                yAxisIndex: 3
            }, {
                name: '直接访问',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                 data:data1[3],
                 xAxisIndex: 3,
                yAxisIndex: 3
            }
            ]
};