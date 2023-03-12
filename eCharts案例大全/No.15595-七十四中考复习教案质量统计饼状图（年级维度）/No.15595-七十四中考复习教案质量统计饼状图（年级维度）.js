option = {
    title : {
        text: '七十四中考复习教案质量统计饼状图（年级维度）',
        subtext: '年级：中考复习    单位：份    学科：语文、英语\n',
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
            data: ['七年级全科','八年级全科','九年级全科','中考复习全科']},
    ],
    yAxis: [
        {gridIndex: 0,name:'年级',show:false},
    ],
    series : [
        {
            name: '中考复习语文',
            type: 'pie',
            //roseType:'radius',
            radius : '30%',
            center: ['25%', '30%'],
            data:[
                {value:7, name:'优秀'},
                {value:16-7-7, name:'通过'},
                {value:7, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
            label: {
            normal: {
                position: 'outside',
                formatter: '{a}\n{b}\n{c}份',
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
        /* {
            name: '一年级语文',
            type: 'pie',
            roseType:'radius',
            radius : '33%',
            center: ['50%', '30%'],
            data:[
                {value:335, name:'优秀'},
                {value:335, name:'通过'},
                {value:335, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}
            ],
            label: {
            normal: {
                position: 'inner',
                formatter: '{a}\n{b}\n{c}份',
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
        },*/
         {
            name: '中考复习英语',
            type: 'pie',
            //roseType:'radius',
            radius : '30%',
            center: ['75%', '30%'],
            data:[
                {value:0, name:'优秀'},
                {value:5, name:'通过'},
                {value:0, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
            label: {
            normal: {
                position: 'outside',
                formatter: '{a}\n{b}\n{c}份',
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
            center: ['18%', '81%'],
            data:[
                {value:5, name:'优秀'},
                {value:32-5-14, name:'通过'},
                {value:14, name:'建议修改'},
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
                {value:23, name:'优秀'},
                {value:46-23, name:'通过'},
                {value:13, name:'建议修改'},
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
                {value:21-7-7, name:'通过'},
                {value:7, name:'建议修改'},
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

    ]
};