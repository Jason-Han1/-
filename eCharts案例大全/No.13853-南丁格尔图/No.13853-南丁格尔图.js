   option = {
       //backgroundColor: '#0a1235',
       tooltip: {
            trigger: 'item',
            backgroundColor:'rgba(255,255,255,0.8)',
            extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
            textStyle:{
            color:'#666',
        },
           formatter: "{a} <br/>{b} : {c}%"
       },
       calculable: true,
       series: [{
           name: '销售额',
           type: 'pie',
           //起始角度，支持范围[0, 360]
           startAngle: 180,
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
                   formatter: '{b}'
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
                   value: 6.71,
                   name: '商品一',
                   itemStyle: {
                       normal: {
                           color: '#229aff'
                       }
                   }
               },
               {
                   value: 2.80,
                   name: '商品二',
                   itemStyle: {
                       normal: {
                           color: '#fdb94e'
                       }
                   }
               },
               {
                   value: 2.76,
                   name: '商品三',
                   itemStyle: {
                       normal: {
                           color: '#30d6a9'
                       }
                   }
               },
               {
                   value:2.16,
                   name: '商品四',
                   itemStyle: {
                       normal: {
                           color: '#F87B5F'
                       }
                   }
               },
               {
                   value: 1.53,
                   name: '商品五',
                   itemStyle: {
                       normal: {
                           color: '#28a0dc'
                       }
                   }
               },
               {
                   value: 1.25,
                   name: '商品六',
                   itemStyle: {
                       normal: {
                           color: '#f08c64'
                       }
                   }
               },
               {
                   value: 1.23,
                   name: '商品七',
                   itemStyle: {
                       normal: {
                           color: '#50c8c8'
                       }
                   }
               },
               {
                   value: 1.11,
                   name: '商品八',
                   itemStyle: {
                       normal: {
                           color: '#f08c8c'
                       }
                   }
               },
               {
                   value: 0.95,
                   name: '商品九',
                   itemStyle: {
                       normal: {
                           color: '#3c8cdc'
                       }
                   }
               },
            {
                   value: 0.87,
                   name: '商品十',
                   itemStyle: {
                       normal: {
                           color: '#ffc850'
                       }
                   }
               },
               {
                   value: 0,
                   name: "",
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