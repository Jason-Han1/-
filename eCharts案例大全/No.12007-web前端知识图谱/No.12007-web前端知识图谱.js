var knowledageData= {
        "name": "前端知识",
        "children": [{
            "name": "理论知识",
            "children": [{
                "name": "硬知识",
                "children": [{
                    "name": "http标准",
                    "children": [{
                        "name": "http请求过程",
                      },
                      {
                        "name": "http状态码",
                      },
                      {
                        "name": "http头部信息",
                      },
                      {
                        "name": "http状态管理",
                      },
                      {
                        "name": "get post方法",
                      },
                      {
                        "name": "https",
                      },
                    ]
                  },
                  {
                    "name": "W3C标准",
                    "children": [{
                        "name": "html/html5",
                        "children": [{
                            "name": "html",
                          },
                          {
                            "name": "语义化",
                          },
                          {
                            "name": "Dom",
                          },
                          {
                            "name": "2D/3D",
                          },
                          {
                            "name": "本地存储",
                          },
                        ]
                      },
                      {
                        "name": "css/css3",
                        "children": [{
                            "name": "层叠规则",
                          },
                          {
                            "name": "选择器",
                          },
                          {
                            "name": "排版",
                          },
                          {
                            "name": "绘制",
                          },
                          {
                            "name": "动画",
                          },
                        ]
                      },
                      {
                        "name": "javascript",
                        "children": [{
                            "name": "Dom",
                          },
                          {
                            "name": "Bom",
                          },
                          {
                            "name": "排版",
                          },
                          {
                            "name": "事件",
                          },
                          {
                            "name": "Ajax",
                          },
                        ]
                      },
                      {
                        "name": "json",
                      },
                      {
                        "name": "XML",
                      },
                      {
                        "name": "websocket",
                      },
                    ]
                  },
                  {
                    "name": "ECMAsript",
                    "children": [{
                        "name": "语法",
                      },
                      {
                        "name": "宿主对象",
                      },
                      {
                        "name": "上下文环境",
                      },
                      {
                        "name": "作用域、闭包",
                      },
                      {
                        "name": "正则表达式",
                      },
                      {
                        "name": "严格模式",
                      },
                    ]
                  }
                ]
              },
              {
                "name": "软知识",
                "children": [{
                    "name": "设计模式",
                    "children": [{
                        "name": "5大设计原则",
                      },
                      {
                        "name": "23种设计模式",
                      },
                    ]
                  },
                  { "name": "算法" },
                  { "name": "数据结构" },
                  { "name": "......" },
                ]
              }
            ]
          },
          {
            "name": "类库/框架",
            "children": [{
                "name": "浏览器",
                "children": [{
                    "name": "jQuery",
                  },
                  {
                    "name": "angular",
                  },
                  {
                    "name": "vue",
                  },
                  {
                    "name": "react",
                  },
                  {
                    "name": "Bootstrap",
                  },
                ]
              },
              { "name": "node.js" },
            ]
          },
          {
            "name": "编码开发",
            "children": [{
                "name": "开发工具",
                "children": [{
                    "name": "编辑器",
                  },
                  {
                    "name": "前端工程化工具",
                    "children": [{
                        "name": "grunt",
                      },
                      {
                        "name": "gulp",
                      },
                      {
                        "name": "rollup",
                      },
                      {
                        "name": "webpack",
                      },
                      {
                        "name": "......",
                      },
                    ]
                  },
                ]

              },
              {
                "name": "模块定义",
                "children": [{
                    "name": "AMD",
                  },
                  {
                    "name": "CMD",
                  },
                  {
                    "name": "common.js",
                  },
                ]
              },
              {
                "name": "版本管理",
                "children": [{
                    "name": "svn",
                  },
                  {
                    "name": "git",
                  },
                ]
              },
              {
                "name": "调试",
              },
              {
                "name": "测试",
              },
            ]
          },
          {
            "name": "运行环境",
            "children": [{
                "name": "浏览器",
                "children": [{
                    "name": "浏览器兼容性",
                  },
                  {
                    "name": "响应式布局",
                  },
                  {
                    "name": "web安全",
                  },
                  {
                    "name": "性能优化",
                  },
                ]
              },
              { "name": "Node", "value": 1027 },
            ]
          },
        ]
      }

let option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },

        toolbox: {
          show: true,
          right: '20%',
          feature: {
            saveAsImage: {}
          }
        },

        series: [{
          type: 'tree',
          data: [knowledageData],

          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',

          symbolSize: 7,

          label: {
            normal: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 14
            }
          },

          leaves: {
            label: {
              normal: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            }
          },

          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }]
      };
      
      myChart.setOption(option)