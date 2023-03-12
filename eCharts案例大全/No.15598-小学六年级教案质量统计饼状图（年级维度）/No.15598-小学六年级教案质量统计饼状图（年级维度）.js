option = {
    title : {
        text: '小学六年级教案质量统计饼状图（年级维度）',
        subtext: '年级：六年级    单位：份    学科：语文、数学\n',
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
            data: ['一年级全科','二年级全科','三年级全科','四年级全科','五年级全科','六年级全科']},
    ],
    yAxis: [
        {gridIndex: 0,name:'年级',show:false},
    ],
    series : [
        {
            name: '六年级语文',
            type: 'pie',
            //roseType:'radius',
            radius : '33%',
            center: ['25%', '30%'],
            data:[
                {value:12, name:'优秀'},
                {value:67-12-4, name:'通过'},
                {value:4, name:'建议修改'},
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
            name: '六年级数学',
            type: 'pie',
            //roseType:'radius',
            radius : '33%',
            center: ['75%', '30%'],
            data:[
                {value:2, name:'优秀'},
                {value:49-2-1, name:'通过'},
                {value:1, name:'建议修改'},
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
            center: ['15%', '81%'],
            data:[
                {value:7, name:'优秀'},
                {value:115-7, name:'通过'},
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
        {
            name: '',
            type: 'pie',
            radius : '22%',
            center: ['29.5%', '81%'],
            data:[
                {value:34, name:'优秀'},
                {value:112-34, name:'通过'},
                {value:0, name:'建议修改'},
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
            center: ['44%', '81%'],
            data:[
                {value:33, name:'优秀'},
                {value:126-33-4, name:'通过'},
                {value:4, name:'建议修改'},
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
            center: ['58.5%', '81%'],
            data:[
                {value:31, name:'优秀'},
                {value:132-31-4, name:'通过'},
                {value:4, name:'建议修改'},
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
            center: ['73.5%', '81%'],
            data:[
                {value:36, name:'优秀'},
                {value:129-36-4, name:'通过'},
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
            center: ['88%', '81%'],
            data:[
                {value:14, name:'优秀'},
                {value:114-14-5, name:'通过'},
                {value:5, name:'建议修改'},
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