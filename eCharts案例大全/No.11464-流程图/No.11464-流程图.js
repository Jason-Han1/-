
var criml=document.body.clientWidth;
option = {
    grid: [
        {x: 40, y: 20, width: "92%", height: '90%'   ,
        tooltip:{
             trigger: 'item',
             formatter:function(val){
              return  val.seriesName;
             }
           }, 
        }
    ],
    egend: {
        data:['培养管理','质量监控','教学运行','基础信息']
    },
    tooltip:
    {
       trigger: 'axis',
    },
    xAxis: [
        {gridIndex: 0, type:"value",show:false}
    ],
    yAxis: [
        {gridIndex: 0,type:"category",data:[""]
            ,axisTick: {show: false},
            axisLine: {show: false},
        },
        { show: false,  type: 'value' }
    ],
    axisPointer: {
            label: {
                backgroundColor: '#777'
            }
        },
    series: [
        {
            name: '培养管理',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
             label: {
                normal: {
                    show: false,
                }
            },
            barWidth: '30%',
            barGap: 0,
            data: [1000],
            itemStyle: {
                color: '#85C5ED'
            },
            label:{
                show: true,
                color: '#000000',
                position: [6, 45],
                formatter: "{a}"
            },
            zlevel: 1
        },
        {
            name: '质量监控',
            type: 'bar',
            stack: '质量监控',
            label: {
                normal: {
                    show: false,
                }
            },
            barWidth: '70%',
            barGap: 0,
            data: [250],
            itemStyle: {
                color: 'RGB(222,215,238)'
            },
            label:{
                show: true,
                color: '#000000',
                position: [6, 5],
                formatter: "{a}"
            },
            zlevel: 1
        },
        {
            name: '教学运行',
            type: 'bar',
             xAxisIndex: 0,
            yAxisIndex: 0,
            stack: '质量监控',
            label: {
                normal: {
                    show: false,
                }
            },
            barWidth: '70%',
            barGap: 0,
            data: [750],
            itemStyle: {
                color: '#E0EEE0'
            },
            label:{
                show: true,
                color: '#000000',
                position: [6, 5],
                formatter: "{a}"
            },
            zlevel: 1
        },
        {
            name: '基础信息',
            type: 'bar',
             xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                normal: {
                    show: false,
                }
            },
            barWidth: '20%',
            barGap: 0,
            data: [1000],
            itemStyle: {
                color: '#EEDC82'
            },
            label:{
                show: true,
                color: '#000000',
                position: [6, 5],
                formatter: "{a}"
            },
            zlevel: 1
        },
        {
            type: 'graph',
            coordinateSystem: 'cartesian2d', // 使用二维的直角坐标系
            legendHoverLink: false,
            hoverAnimation: true,
            nodeScaleRatio: false,
            //建头
            symbol: 'rect', // 节点显示形状
            symbolSize: [55, 45], // 节点大小
            edgeSymbol: ['none', 'arrow'], // 线两边的标记
            symbolOffset: [0, 0],
            edgeSymbolSize: [0, 8], // 标记大小
            edgeLabel: {
                show: false,
                normal: {
                    show: true,
                    position: 'middle',
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: "{c}"
                }
            },
            focusNodeAdjacency: true, // 鼠标移到节点上突出显示节点以及节点的边和邻接节点
            roam: false, // 关闭鼠标缩放
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: '#333'
                        }
                    },
                    nodeStyle : {
                        brushType : 'both',
                        borderColor : 'rgba(255,215,0,0.4)',
                        borderWidth : 1
                    }
                }
            },
            lineStyle: {
                normal: {
                    width: 1,
                    shadowColor: 'none',
                    color:'#000000',
                },
            },
            yAxisIndex: 1,
            zlevel: 10,
            data: [
          {
                    name: "设置专业",
                    draggable: false,
                    value:[140,243],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                },{
                    name: "设置班级",
                    draggable: false,
                    fixed: true,
                    value: [400,243],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                  },{
                    name: "学生管理",
                    draggable: false,
                    fixed: true,
                    value: [620,243],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                },{
                    name: "学籍管理",
                    draggable: false,
                    fixed: true,
                    value: [860,243],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                },{
                    name: "设置课程",
                    draggable: false,
                    fixed: true,
                    value: [140,215],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                },{
                    name: "培养方案",
                    draggable: false,
                    fixed: true,
                    value: [400,215],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                },{
                    name: "毕业学位",
                    draggable: false,
                    fixed: true,
                    value: [620,215],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                },{
                    name: "成绩管理",
                    draggable: false,
                    fixed: true,
                    value: [860,215],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                },{
                    name: "培养方案变更分析",
                    draggable: false,
                    fixed: true,
                    value: [140,186],
                    itemStyle: {
                        color: '#FFA500'
                    },
                    label: {
                      normal: {
                        show: true,
                        formatter: function(params){
                          return '培养方案\n变更分析';
                        }
                      }
                    },
                },{
                    name: "课时统计",
                    draggable: false,
                    fixed: true,
                    value: [140,157],
                    itemStyle: {
                        color: '#FFA500'
                    }
                },{
                    name: "教学检查",
                    draggable: false,
                    fixed: true,
                    value: [140,128],
                    itemStyle: {
                        color: '#FFA500'
                    }
                },{
                    name: "教学评价",
                    draggable: false,
                    fixed: true,
                    value: [140,99],
                    itemStyle: {
                        color: '#FFA500'
                    }
                },{
                    name: "督导听课",
                    draggable: false,
                    fixed: true,
                    value: [140,70],
                    itemStyle: {
                        color: '#FFA500'
                    }
                },{
                    name: "试卷分析",
                    draggable: false,
                    fixed: true,
                    value: [140,41],
                    itemStyle: {
                        color: '#FFA500'
                    }
                },{
                    name: "开课计划",
                    draggable: false,
                    fixed: true,
                    value: [400,186],
                    itemStyle: {
                        color: '#90EE90'
                    }
                },{
                    name: "教学任务",
                    draggable: false,
                    fixed: true,
                    value: [400,157],
                    itemStyle: {
                        color: '#90EE90'
                    }
                },{
                    name: "课表安排",
                    draggable: false,
                    fixed: true,
                    value: [400,128],
                    itemStyle: {
                        color: '#90EE90'
                    }
                },{
                    name: "网上选课",
                    draggable: false,
                    fixed: true,
                    value: [400,99],
                    itemStyle: {
                        color: '#90EE90'
                    }
                },{
                    name: "教学考勤",
                    draggable: false,
                    fixed: true,
                    value: [320,70],
                    itemStyle: {
                        color: '#90EE90'
                    }
                },{
                    name: "考试安排",
                    draggable: false,
                    fixed: true,
                    value: [400,41],
                    itemStyle: {
                        color: '#90EE90'
                    }
                },{
                    name: "顶岗实习",
                    draggable: false,
                    fixed: true,
                    value: [860,186],
                    itemStyle: {
                        color: '#90EE90'
                    }
                },{
                    name: "论文设计",
                    draggable: false,
                    fixed: true,
                    value: [860,157],
                    itemStyle: {
                        color: '#90EE90'
                    }
                },{
                    name: "实验实训",
                    draggable: false,
                    fixed: true,
                    value: [860,128],
                    itemStyle: {
                        color: '#90EE90'
                    }
                },{
                    name: "学校",
                    draggable: false,
                    fixed: true,
                    value: [140,3],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                },{
                    name: "校区",
                    draggable: false,
                    fixed: true,
                    value: [320,3],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                },{
                    name: "部门",
                    draggable: false,
                    fixed: true,
                    value: [500,3],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                },{
                    name: "教师",
                    draggable: false,
                    fixed: true,
                    value: [680,3],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                },{
                    name: "教学场地",
                    draggable: false,
                    fixed: true,
                    value: [860,3],
                    itemStyle: {
                        color: 'RGB(237,237,237)'
                    }
                },
                ],

            links: [
              {
                source: '设置专业',
                value: '',
                target: '设置班级'
              },
              {
                source: '设置班级',
                value: '',
                target: '学生管理'
              },
              {
                source: '学生管理',
                value: '',
                target: '学籍管理'
              },
              {
                source: '设置课程',
                value: '',
                target: '培养方案'
              },
              {
                source: '培养方案',
                value: '',
                target: '毕业学位'
              },
              {
                source: '学籍管理',
                value: '',
                target: '成绩管理'
              },
              {
                source: '成绩管理',
                value: '',
                target: '毕业学位'
              },
              {
                source: '培养方案',
                value: '',
                target: '开课计划'
              },
              {
                source: '开课计划',
                value: '',
                target: '培养方案变更分析'
              },
              {
                source: '开课计划',
                value: '历史成绩',
                target: '成绩管理'
              },
              {
                source: '开课计划',
                value: '',
                target: '顶岗实习'
              },
              {
                source: '开课计划',
                value: '',
                target: '论文设计'
              },
              {
                source: '开课计划',
                value: '',
                target: '教学任务'
              },
              {
                source: '教学任务',
                value: '',
                target: '课时统计'
              },
              {
                source: '教学任务',
                value: '',
                target: '课表安排'
              },
              {
                source: '课表安排',
                value: '',
                target: '教学检查'
              },
              {
                source: '课表安排',
                value: '',
                target: '网上选课'
              },
              {
                source: '课表安排',
                value: '',
                target: '实验实训'
              },
              {
                source: '网上选课',
                value: '',
                target: '教学评价'
              },
              {
                source: '网上选课',
                value: '',
                target: '教学考勤'
              },
              {
                source: '教学考勤',
                value: '',
                target: '督导听课'
              },
              {
                source: '网上选课',
                value: '',
                target: '考试安排'
              },
              {
                source: '考试安排',
                value: '',
                target: '试卷分析'
              },
              {
                source: '顶岗实习',
                value: '',
                target: '成绩管理'
              },
              {
                source: '论文设计',
                value: '',
                target: '成绩管理'
              },
              {
                source: '实验实训',
                value: '',
                target: '成绩管理'
              },
              {
                source: '网上选课',
                value: '当前成绩',
                target: '成绩管理'
              },
              {
                source: '考试安排',
                value: '当前成绩',
                target: '成绩管理'
              },
              {
                source: '学期选课结果',
                value: '',
                target: '学生成绩'
              }
            ],
        }
    ]
}