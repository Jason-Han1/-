mockGraphData = [
  {
    id: 0,
    name: "解析法",
    category: "未掌握 需重点关注",
    value: 5,
  },
  {
    id: 1,
    name: "诱导公式",
    value: 21,
    category: "未掌握 需重点关注",
  },
  {
    id: 2,
    name: "函数的概念",
    category: "未掌握 需重点关注",
    value: 29,
  },
  {
    id: 3,
    name: "图像法",
    category: "未掌握 需重点关注",
    value: 15,
  },
  {
    id: 4,
    name: "三角函数的概念和性质",
    category: "未掌握 需重点关注",
    value: 12,
  },
  {
    id: 5,
    name: "正弦函数的概念",
    category: "未掌握 需重点关注",
    value: 15,
  },
  {
    id: 6,
    name: "函数的性质",
    category: "未掌握 需重点关注",
    value: 13,
  },
  {
    id: 7,
    name: "三角函数的概念",
    category: "部分掌握",
    value: 30,
  },
  {
    id: 8,
    name: "余弦函数的概念",
    category: "部分掌握",
    value: 45,
  },
  {
    id: 9,
    name: "函数的性质",
    category: "部分掌握",
    value: 55,
  },
  {
    id: 10,
    name: "解析法",
    category: "基本掌握",
    value: 75,
  },
  {
    id: 11,
    name: "同三角函数的基本",
    category: "基本掌握",
    value: 93,
  },
  {
    id: 12,
    name: "函数的性质",
    category: "基本掌握",
    value: 90,
  },
  {
    id: 13,
    name: "函数的值域",
    category: "熟练掌握",
    value: 10,
  },
  {
    id: 14,
    name: "函数的定义域",
    category: "熟练掌握",
    value: 10,
  },
  {
    id: 15,
    name: "函数的表示",
    category: "熟练掌握",
    value: 10,
  },
  {
    id: 16,
    name: "三角函数",
    category: "熟练掌握",
    value: 10,
  },
  {
    id: 17,
    name: "函数的概念与表示",
    category: "熟练掌握",
    value: 10,
  },
  {
    id: 18,
    name: "函数的概念与性质",
    category: "熟练掌握",
    value: 10,
  },
  {
    id: 19,
    name: "函数",
    category: "熟练掌握",
    value: 10,
  },
];
mockLink = [
  {
    source: "11",
    target: "1",
    type: "相关关系",
  },
  {
    source: "7",
    target: "8",
    type: "相关关系",
  },
  {
    source: "7",
    target: "5",
    type: "相关关系",
  },
  {
    source: "7",
    target: "19",
    type: "相关关系",
  },
  {
    source: "5",
    target: "8",
    type: "前置关系",
  },
  {
    source: "4",
    target: "7",
    type: "前置关系",
  },
  {
    source: "4",
    target: "19",
    type: "相关关系",
  },
  {
    source: "16",
    target: "4",
    type: "前置关系",
  },
  {
    source: "4",
    target: "9",
    type: "相关关系",
  },
  {
    source: "3",
    target: "9",
    type: "前置关系",
  },
  {
    source: "3",
    target: "6",
    type: "相关关系",
  },
  {
    source: "18",
    target: "17",
    type: "相关关系",
  },
  {
    source: "17",
    target: "15",
    type: "相关关系",
  },
  {
    source: "17",
    target: "10",
    type: "相关关系",
  },
  {
    source: "14",
    target: "10",
    type: "前置关系",
  },
  {
    source: "13",
    target: "10",
    type: "相关关系",
  },
  {
    source: "2",
    target: "13",
    type: "前置关系",
  },
];
const rawData = mockGraphData.map((item) => {
      if (item.category === "未掌握 需重点关注") {
        return {
          ...item,
          itemStyle: {
            normal: {
              color: "#ff575f",
            },
          },
          // label: {
          //   textBorderColor: "#ff575f",
          // },
        };
      } else if (item.category === "部分掌握") {
        return {
          ...item,
          itemStyle: {
            normal: {
              color: "#ffca56",
            },
          },
        };
      } else if (item.category === "基本掌握") {
        return {
          ...item,
          itemStyle: {
            normal: {
              color: "#00ccc1",
            },
          },
        };
      } else if (item.category === "熟练掌握") {
        return {
          ...item,
          itemStyle: {
            normal: {
              color: "#4f9ef5",
            },
          },
        };
      } else if (item.category === "前置节点") {
        return {
          ...item,
          symbolSize: [80, 80],
          itemStyle: {
            normal: {
              color: "#f4b7be",
            },
          },
          label: {
            show: true,
            position: 'inside',
            color: "#000",
            textBorderWidth: 1,
            formatter: "{a|{b}}",
            rich: {
              a: {
                color: "#000",
                lineHeight: 30,
              },
             
            },
          },
        };
      } else if (item.category === "本次未考核") {
        return {
          ...item,
          itemStyle: {
            normal: {
              color: "#ffffff",
              borderWidth: 2,
              borderColor: "#ec808d",
            },
          },
          label: {
            show: true,
            position: 'inside',
            color: "#000",
            textBorderWidth: 1,
            formatter: ["{b|历史掌\n握程度\n{c}%}", "{a|{b}}"].join("\n"),
            rich: {
              a: {
                color: "#000",
                lineHeight: 30,
              },
              b: {

                color: "#000",
                align: "center",
                lineHeight: 15,
              },
            },
            offset: [0, 20]
          },
        };
      } else {
        return {
          ...item,
          itemStyle: {
            normal: {
              color: "#4f9ef5",
            },
          },
        };
      }
    });
const rawLink = mockLink.map((item) => {
      if (item.type === "相关关系") {
        return {
          ...item,
          tooltip: { formatter: "相关关系" },
        };
      } else if (item.type === "前置关系") {
        return {
          ...item,
          tooltip: { formatter: "前置关系" },
          symbolSize: [10, 10],
        };
      } else if (item.type === "包含关系") {
        return {
          ...item,
          tooltip: { formatter: "包含关系" },
          lineStyle: { type: "dashed" },
        };
      } else {
        return {
          ...item,
        };
      }
    }); 
option = {
      title: {
        text: "知识图谱",
        subtext: "Default layout",
        top: "bottom",
        left: "right",
      },
      color: ["#ff575f", "#ffca56", "#00ccc1", "#4f9ef5"],
      tooltip: {
        trigger: "item",
        formatter: "{b}  {c}%",
      },
      legend: {
        selectedMode: "true",
        orient: "vertical",
        top: 10,
        show: true,
        data: [
          {
            name: "未掌握 需重点关注",
          },
          {
            name: "部分掌握",
          },
          {
            name: "基本掌握",
          },
          {
            name: "熟练掌握",
          },
        ],
        left: 10,
        // itemStyle:{color: 'inherit'},
        // selector: [
        //   {
        //     type: "inverse",
        //     title: "反选",
        //   },
        // ],
      },
      
      animationDuration: 1000,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          name: "",
          type: "graph",
          layout: "force",
          edgeSymbol: ["none", "arrow"],
          edgeSymbolSize: [0, 0],
          draggable: false,
          zoom: 1, // 数据多的情况下控制显示区域大小
          // itemStyle: {
          //   normal: {
          //     // borderWidth: 2
          //   },
          // },
          symbolSize: [60, 60],
          force: {
            // 布局配置
            repulsion: 600,
            edgeLength: 120,
            layoutAnimation: true,
            friction:0.6
          },
          data: rawData,
          links: rawLink,
          categories: [
            {
              name: "未掌握 需重点关注",
            },
            {
              name: "部分掌握",
            },
            {
              name: "基本掌握",
            },
            {
              name: "熟练掌握",
            },
            {
              name: "前置节点",
            },
            {
              name: "本次未考核",
            },
          ],
          roam: true, // 是否开启平移缩放
          // edgeLabel: {
          //   normal: {
          //     show: true,
          //     formatter: function (x: any) {
          //       return x.data.name;
          //     },
          //   },
          // },
          label: {
            normal: {
              show: true,
              // position: ["125%", "100%"],
              position: "inside",
              color: "#fff",
              textBorderWidth: 1,
              formatter: ["{b|{c}%}", "{a|{b}}"].join("\n"),
              rich: {
                a: {
                  color: "#000",
                  height: 0,
                  // lineHeight: 10
                },
                b: {
                  color: "#fff",
                  align: "center",
                  lineHeight: 80,
                },
              },
            },
          },
          lineStyle: {
            normal: {
              color: "#000",
              curveness: 0.3,
              type: "solid",
            },
          },
          emphasis: {
            focus: "adjacency",
            lineStyle: {
              width: 5,
            },
          },
        },
      ],
};
