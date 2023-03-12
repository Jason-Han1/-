 option = {
     backgroundColor: '#000',
     color: [
         "#5155e6",
         "#08befa",
         "#d1ff69",
         "#1185f4",
         "#1512ed",
         "#1fcfff",
         "#ffd529",
     ],
     textStyle: {
         fontSize: 8, //edit
         color: "#40E7F4 ",
     },
     legend: [{
             itemWidth: 15,
             data: ['修缮工程 - 12', '地下空间 - 15', '燃气工程 - 16'],
             orient: "vertical",
             itemGap: 50,
             textStyle: {
                 fontSize: 20, //字体大小 //edit
                 color: "#659ab2", //字体颜色
                 rich: {
                     value: {
                         // color: ["#ff283c", "#0064d5"],
                         color: "#fff",
                         fontSize: 20, //edit
 
                     },
                 },
             },
             left: 100, //edit
             top: "center",
         },
         {
             itemWidth: 15,
             data: ['房屋检测 - 6', '拆除工程 - 6', '拆除工程 - 14', '物业管理 - 4'],
             orient: "vertical",
             textStyle: {
                 fontSize: 20, //字体大小 //edit
                 color: "#659ab2", //字体颜色
                 rich: {
                     value: {
                         // color: ["#ff283c", "#0064d5"],
                         color: "#fff",
                         fontSize: 20, //edit
 
                     },
                 },
             },
             right: 100,
             top: "center",
             itemGap: 30,
         },
     ],
     series: [{
             name: "修缮工程",
             type: "pie",
             radius: ["3%", "5%"],
             label: false,
             startAngle: 90,
             clockWise: true, //顺时加载
             hoverAnimation: true,
             hoverOffset: 3,
             data: [{
                     value: 12,
                     name: "修缮工程" + " - " + 12,
                     itemStyle: {
                         color: "#5155e6",
                     },
                 },
                 {
                     value: 76,
                     hoverAnimation: false, //鼠标移入变大
                     itemStyle: {
                         normal: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                         emphasis: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                     },
                 },
             ],
         },
         {
             name: "地下空间",
             type: "pie",
             radius: ["10%", "12%"],
             label: false,
             startAngle: 15,
             clockWise: true,
             hoverAnimation: true,
             hoverOffset: 3,
             data: [{
                     value: 15,
                     name: "地下空间" + " - " + 15,
                     itemStyle: {
                         color: "#08befa",
                     },
                 },
                 {
                     value: 76,
                     hoverAnimation: false,
                     itemStyle: {
                         normal: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                         emphasis: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                     },
                 },
             ],
         },
         {
             name: "燃气工程",
             type: "pie",
             radius: ["17%", "19%"],
             label: false,
             startAngle: 180,
             clockWise: true,
             hoverAnimation: true,
             hoverOffset: 3,
             data: [{
                     value: 16,
                     name: "燃气工程" + " - " + 16,
                     itemStyle: {
                         color: "#d1ff69",
                     },
                 },
                 {
                     value: 76,
                     hoverAnimation: false,
                     itemStyle: {
                         normal: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                         emphasis: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                     },
                 },
             ],
         },
         {
             name: "房屋检测",
             type: "pie",
             radius: ["24%", "26%"],
             label: false,
             startAngle: 0,
             clockWise: true,
             hoverAnimation: true,
             hoverOffset: 3,
             data: [{
                     value: 6,
                     name: "房屋检测" + " - " + 6,
                     itemStyle: {
                         color: "#1185f4",
                     },
                 },
                 {
                     value: 76,
                     hoverAnimation: false,
                     itemStyle: {
                         normal: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                         emphasis: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                     },
                 },
             ],
         },
         {
             name: "拆除工程",
             type: "pie",
             radius: ["31%", "33%"],
             label: false,
             startAngle: 270,
             clockWise: true,
             hoverAnimation: true,
             hoverOffset: 3,
             data: [{
                     value: 9,
                     name: "拆除工程" + " - " + 9,
                     itemStyle: {
                         color: "#1512ed",
                     },
                 },
                 {
                     value: 76,
                     hoverAnimation: false,
                     itemStyle: {
                         normal: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                         emphasis: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                     },
                 },
             ],
         },
         {
             name: "建设工程",
             type: "pie",
             radius: ["36%", "38%"],
             label: false,
             startAngle: 100,
             clockWise: true,
             hoverAnimation: true,
             hoverOffset: 3,
             data: [{
                     value: 14,
                     name: "建设工程" + " - " + 14,
                     itemStyle: {
                         color: "#1fcfff",
                     },
                 },
                 {
                     value: 76,
                     hoverAnimation: false,
                     itemStyle: {
                         normal: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                         emphasis: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                     },
                 },
             ],
         },
         {
             name: "物业管理",
             type: "pie",
             radius: ["43%", "45%"],
             label: false,
             startAngle: 120,
             clockWise: true,
             hoverAnimation: true,
             hoverOffset: 3,
             data: [{
                     value: 4,
                     name: "物业管理" + " - " + 4,
                     itemStyle: {
                         color: "#ffd529",
                     },
                 },
                 {
                     value: 76,
                     hoverAnimation: false,
                     itemStyle: {
                         normal: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                         emphasis: {
                             color: "#fff",
                             opacity: 0.1,
                         },
                     },
                 },
             ],
         },
     ],
 };