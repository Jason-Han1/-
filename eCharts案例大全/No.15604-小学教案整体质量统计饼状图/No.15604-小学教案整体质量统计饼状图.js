option = {
    title : {
        text: '小学教案整体质量统计饼状图',
        subtext: '年级：一年级-六年级     单位：份    学科：语文、数学\n',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} {b} :{d}%",
         textStyle: {
                    fontWeight: 'bold',
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
            data: ['全校语文',' ','全校数学']},
    ],
    yAxis: [
        {gridIndex: 0,name:'学科',show:false},
    ],
    series : [
        {
            name: '所有学科',
            type: 'pie',
            //roseType:'radius',
            radius : '45%',
            center: ['50%', '33%'],
            data:[
                {value:155, name:'优秀'},
                {value:558, name:'通过'},
                {value:17, name:'建议修改'},
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
            name: '全校语文',
            type: 'pie',
            //roseType:'radius',
            radius : '22%',
            center: ['22%', '81%'],
            data:[
                {value:127, name:'优秀'},
                {value:296, name:'通过'},
                {value:6, name:'建议修改'},
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
        /*{
            name: '全校数学',
            type: 'pie',
            radius : '22%',
            center: ['51%', '81%'],
            data:[
                {value:335, name:'优秀'},
                {value:335, name:'通过'},
                {value:335, name:'建议修改'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'}
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
        },*/
        {
            name: '全校数学',
            type: 'pie',
            //roseType:'radius',
            radius : '22%',
            center: ['80%', '81%'],
            data:[
                {value:28, name:'优秀'},
                {value:262, name:'通过'},
                {value:11, name:'建议修改'},
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