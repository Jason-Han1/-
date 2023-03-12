
var data ={
        level: 1,
        name: "经济责任审计",
        children: [
          {
            level: 2,
            name: "人间",
          },
          {
            level: 2,
            name: "日落",
            children: [
              {
                level: 3,
                name: "萌新",
                children: [
                  {
                    level: 4,
                    name: "哈哈",
                    value: 3938,
                    children: [
                      {
                        level: 5,
                        name: "哈哈镜",
                        value: 3938,
                        children: [
                          {
                            level: 6,
                            name: "哈啊",
                            value: 3938,
                          },
                         
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                level: 3,
                name: "如花",
                children: [
                  {
                    level: 4,
                    name: "思梦",
                    value: 3812,
                    children: [
                      {
                        level: 5,
                        name: "想法",

                        children: [
                          {
                            level: 6,
                            name: "哈哈镜",
                          },
                         
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                level: 3,
                name: "谁是",
                children: [
                  {
                    name: "谁费",
                    value: 6714,
                    children: [
                      {
                        level: 5,
                        name: "谁人",

                        children: [
                          {
                            level: 6,
                            name: "航海",
                          },
                         
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                level: 3,
                name: "昨日",
                children: [
                  {
                    level: 4,
                    name: "情况",
                    value: 743,
                    children: [
                      {
                        level: 5,
                        name: "发布会",
                        children: [
                          {
                            level: 6,
                            name: "电饭锅",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                level: 3,
                name: "热噶尔个",
                children: [
                  {
                    level: 4,
                    name: "是大概是",
                    value: 743,
                    children: [
                      {
                        level: 5,
                        name: "十多个第三个",
                        children: [
                          {
                            level: 6,
                            name: "大范甘迪",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            level: 2,
            name: "都发给对方",
          },
          {
            level: 2,
            name: "大哥大哥",
          },
          
        ],
       
      }
    ;
option = {
     tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        series: [
          {
            type: "tree",
            zlevel: 0,
            data: [data],
            top: "2%",
            left: "2%",
            bottom: "0%",
            right: "20%",
            symbolSize: 12,
            itemStyle: {
              borderColor: "#797979",
              borderWidth: 1,
            },
            label: {
              position: "right",
              verticalAlign: "middle",
              fontSize: 12,
              lineHeight: 24,
              offset: [-5, 0],
              formatter: function (params) {
                if (params.data.level === 1) {
                  return "{a|" + params.name + "}";
                } else if (params.data.level === 2) {
                  return "{b|" + params.name + "}";
                } else if (params.data.level === 3) {
                  return "{c|" + params.name + "}";
                } else if (params.data.level === 4) {
                  return "{d|" + params.name + "}";
                } else if (params.data.level === 5) {
                  return "{e|" + params.name + "}";
                } else {
                  return "{f|" + params.name + "}";
                }
              },
              rich: {
                a: {
                  width: 120,
                  padding: [10, 30, 10, 30],
                  textAlign: "right",
                  textAlign: "center",
                  borderRadius: 3,
                  zIndex: -1,
                  color: "#fff",
                  borderColor: "##01665a",
                  borderWidth: 1,
                  backgroundColor: "#00796a",
                },
                b: {
                  align: "right",
                  width: 120,
                  padding: [8, 20, 8, 20],
                  borderRadius: 3,
                  color: "#666",
                  backgroundColor: "#ececec",
                  borderWidth: 1,
                  borderColor: "#ccc",
                },
                c: {
                  width:120,
                  padding: [8, 16, 8, 16],
                  borderRadius: 3,
                  color: "#666",
                  backgroundColor: "#e7e8f9",
                  borderWidth: 1,
                  borderColor: "#cbccf0",
                },
                d: {
                  width: 120,
                  padding: [8, 16, 8, 16],
                  borderRadius: 3,
                  color: "#666",
                  backgroundColor: "#d0edfa",
                  borderWidth: 1,
                  borderColor: "#5ab9ff",
                },
                e: {
                  width: 120,
                  padding: [8, 16, 8, 16],
                  borderRadius: 3,
                  color: "#666",
                  backgroundColor: "#e1fffa",
                  borderWidth: 1,
                  borderColor: "#8ed7ca",
                },
                f: {
                  width: 120,
                  padding: [8, 16, 8, 16],
                  borderRadius: 3,
                  color: "#666",
                  backgroundColor: "#e1f0fe",
                  borderWidth: 1,
                  borderColor: "#bcd9f3",
                },
              },
            },
            lineStyle: {
              color: "#ccc",
              curveness: 1,
            },
            edgeShape: "curve",
            initialTreeDepth: 66,
            leaves: {
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "0",
              },
            },
            emphasis: {
              focus: "descendant",
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
};
