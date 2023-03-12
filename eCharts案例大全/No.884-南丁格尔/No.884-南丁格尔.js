   option = {
       backgroundColor: '#0a1235',
       tooltip: {
           trigger: 'item',
           formatter: "{a} <br/>{b} : {c}千万元"
       },
       legend: {
           x: 'center',
           y: '15%',
           data: ['义乌市1', '义乌市2', '义乌市3', '义乌市4', '义乌市5', '义乌市6', '义乌市7', '义乌市8', '义乌市'],
           icon: 'circle',
           textStyle: {
               color: '#fff',
           }
       },
       calculable: true,
       series: [{
           name: '可疑群众线索',
           type: 'pie',
           //起始角度，支持范围[0, 360]
           startAngle: 0,
           //饼图的半径，数组的第一项是内半径，第二项是外半径
           radius: [41, 153.75],
           //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
           center: ['50%', '35%'],
           //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
           // 'radius' 面积展现数据的百分比，半径展现数据的大小。
           //  'area' 所有扇区面积相同，仅通过半径展现数据大小
           roseType: 'area',
           //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
           avoidLabelOverlap: false,
           label: {
               normal: {
                   show: true,
                   formatter: '{c}千万元'
               },
               emphasis: {
                   show: true
               }
           },
           labelLine: {
               normal: {
                   show: true,
                   length2: 1,
               },
               emphasis: {
                   show: true
               }
           },
           data: [{
                   value: 600.58,
                   name: '义乌市1',
                   itemStyle: {
                       normal: {
                           color: '#f845f1'
                       }
                   }
               },
               {
                   value: 1100.58,
                   name: '义乌市2',
                   itemStyle: {
                       normal: {
                           color: '#ad46f3'
                       }
                   }
               },
               {
                   value: 1200.58,
                   name: '义乌市3',
                   itemStyle: {
                       normal: {
                           color: '#5045f6'
                       }
                   }
               },
               {
                   value: 1300.58,
                   name: '义乌市4',
                   itemStyle: {
                       normal: {
                           color: '#4777f5'
                       }
                   }
               },
               {
                   value: 1400.58,
                   name: '义乌市5',
                   itemStyle: {
                       normal: {
                           color: '#44aff0'
                       }
                   }
               },
               {
                   value: 1500.58,
                   name: '义乌市6',
                   itemStyle: {
                       normal: {
                           color: '#45dbf7'
                       }
                   }
               },
               {
                   value: 1500.58,
                   name: '义乌市7',
                   itemStyle: {
                       normal: {
                           color: '#f6d54a'
                       }
                   }
               },
               {
                   value: 1600.58,
                   name: '义乌市8',
                   itemStyle: {
                       normal: {
                           color: '#f69846'
                       }
                   }
               },
               {
                   value: 1800,
                   name: '义乌市',
                   itemStyle: {
                       normal: {
                           color: '#ff4343'
                       }
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                   itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               }
           ]
       }]
   };