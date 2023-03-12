option = {
    title : {
        text: '二十四语文教案质量统计饼状图（学科维度）',
        subtext: '年级：七年级-九年级     单位：份    学科：语文\n',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} {b} :{d}%",
         textStyle: {
                    fontSize:14
                }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['优秀','通过','建议修改']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    grid: [
        {x: '7.5%',y: '65%', width: '88%', height: '30%'},
    ],
    xAxis: [
        {gridIndex: 0,
        type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['七年级语文','八年级语文','九年级语文','中考复习语文']},
    ],
    yAxis: [
        {gridIndex: 0,name:'年级',show:false
        },
    ],
    series : [
        {
            name: '全校语文教案',
            type: 'pie',
            //roseType:'radius',
            radius : '45%',
            center: ['50%', '33%'],
            data:[
                {value:21, name:'优秀'},
                {value:28-21-4, name:'通过'},
                {value:4, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
            label: {
            normal: {
                position: 'outside',
                formatter: '{a} :{b} {c}份',
                 textStyle: {
                    color: '',
                    fontSize: 14
                }
            }
        },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '',
            type: 'pie',
            //roseType:'radius',
            radius : '22%',
            center: ['18%', '80.2%'],
            data:[
                {value:0, name:'优秀'},
                {value:0, name:'通过'},
                {value:0, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
            label: {
            normal: {
                position: 'inner',
                formatter: '{c}份',
                 textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                }
            }
        },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '',
            type: 'pie',
            radius : '22%',
            center: ['40%', '81%'],
            data:[
                {value:14, name:'优秀'},
                {value:21-14-4, name:'通过'},
                {value:4, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'}*/
            ],
            label: {
            normal: {
                position: 'inner',
                formatter: '{c}份',
                 offset: [,100],
                 textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                }
            }
        },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '',
            type: 'pie',
            //roseType:'radius',
            radius : '22%',
            center: ['62%', '81%'],
            data:[
                {value:0, name:'优秀'},
                {value:0, name:'通过'},
                {value:0, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
            label: {
            normal: {
                position: 'inner',
                formatter: '{c}份',
                 textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                }
            }
        },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '',
            type: 'pie',
            //roseType:'radius',
            radius : '22%',
            center: ['84%', '81%'],
            data:[
                {value:7, name:'优秀'},
                {value:0, name:'通过'},
                {value:0, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
            label: {
            normal: {
                position: 'outside',
                formatter: '{c}份',
                 textStyle: {
                    color: '',
                    fontSize: 14
                }
            }
        },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
    ]
}; 