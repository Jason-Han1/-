
options = [{
    title:{
        text:'食品经营项目类型大类',
        textStyle:{
             fontSize: '18'
        }
    },
    grid: {
        left: '3%',
        right: '44%',
        bottom:'1%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    legend: {
        data:['实有许可证书数','新增环比','注销环比'],
        align: 'left',
        left: 10,
        top:30
    },
    xAxis: [
        {
            type: 'category',
            nameTextStyle:{
                fontSize:12,
                width:20,
                height:60
            },
            axisTick: {
                alignWithLabel: true
            },
            data: ['预包装食品销售','散装食品销售','特殊食品销售','其他类食品销售']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color:'#016797',
                }
            },
            
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1ea49f',
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'实有许可证书数',
            stack: '总量',
            barWidth : 30,
            color: '#3d9ba6',
            type:'bar',
             data:[602,578,679,345]
        },
        {
            name:'新增环比',
            type:'line',
            color: '#e15f49',
            yAxisIndex: 1,
            data:[10,13,8,5]
        },
        
        {
            name:'注销环比',
            type:'line',
            color: '#e6e303',
            yAxisIndex: 1,
            data:[5,3,4,2]
        }
    ]
},
{
    title:{
        text:'预包装食品销售',
        textStyle:{
             fontSize: '18'
        }
    },
    
    grid: {
        left: '3%',
        right: '44%',
        bottom:'1%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    legend: {
        data:['实有许可证书数','新增环比','注销环比'],
        align: 'left',
        left: 10,
        top:30
    },
    xAxis: [
        {
            type: 'category',
            
            axisTick: {
                alignWithLabel: true
            },
            data: ['含冷藏冷冻食品','不含冷藏冷冻食品']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color:'#016797',
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1ea49f',
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'实有许可证书数',
            stack: '总量',
            barWidth : 30,
            color: '#6ab1b0',
            type:'bar',
            data:[602,578]
        },
        {
            name:'新增环比',
            type:'line',
            yAxisIndex: 1,
            color: '#e15f49',
            data:[10,13]
        },
        
        {
            name:'注销环比',
            type:'line',
            color: '#e6e303',
            yAxisIndex: 1,
            data:[5,3]
        }
    ]
},
{
    title:{
        text:'散装食品销售',
        textStyle:{
             fontSize: '18'
        }
    },
    grid: {
        left: '3%',
        right: '44%',
        bottom:'1%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    legend: {
        data:['实有许可证书数','新增环比','注销环比'],
        align: 'left',
        left: 10,
        top:30
    },
    xAxis: [
        {
            type: 'category',
            
            axisTick: {
                alignWithLabel: true
            },
             data: ['含冷藏冷冻食品','不含冷藏冷冻食品']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                   color:'#016797',
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1ea49f',
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'实有许可证书数',
            stack: '总量',
            barWidth : 30,
            color: '#6ab1b0',
            type:'bar',
            data:[702,578]
        },
        {
            name:'新增环比',
            type:'line',
            color: '#e15f49',
            yAxisIndex: 1,
            data:[10,13]
        },
        
        {
            name:'注销环比',
            type:'line',
            color: '#e6e303',
            yAxisIndex: 1,
            data:[5,3]
        }
    ]
},
{
    title:{
        text:'特殊食品销售',
        textStyle:{
             fontSize: '18'
        }
    },
    grid: {
        left: '3%',
        right: '35%',
        bottom:'1%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    legend: {
        data:['实有许可证书数','新增环比','注销环比'],
        align: 'left',
        left: 10,
        top:30
    },
    xAxis: [
        {
            type: 'category',
            nameLocation:'start',
            axisTick: {
                alignWithLabel: true
            },
            data: ['保健食品','特殊医学用途食品','婴幼儿配方乳粉','其他婴幼儿配方食品']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color:'#016797',
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1ea49f',
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'实有许可证书数',
            stack: '总量',
            barWidth : 30,
            color: '#6ab1b0',
            type:'bar',
            data:[602,578,345,567]
        },
        {
            name:'新增环比',
            type:'line',
            color: '#e15f49',
            yAxisIndex: 1,
            data:[10,13,5,8]
        },
        
        {
            name:'注销环比',
            type:'line',
            color: '#e6e303',
            yAxisIndex: 1,
            data:[5,3,2,6]
        }
    ]
}];
