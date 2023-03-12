     var num = 1
     const option = {
         backgroundColor: '#222',
         title: {
             top: 1 + "%",
             left: "center",
             text: " 交易场景统计",
             subtext: "",
             textStyle: {
                 // 文字颜色
                 color: "#fff",
                 // 字体风格,'normal','italic','oblique'
                 fontStyle: "normal",
                 // 字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                 fontWeight: "bold",
                 // 字体系列
                 fontFamily: "sans-serif",
                 // 字体大小
                 fontSize: num == 1 ?
                     15 : 13 * num,
             }
         },
         tooltip: {
             trigger: "axis",
             axisPointer: {
                 type: "shadow"
             }
         },
         color: ["#CC9933", "#7F58B2"], // legend颜色
         legend: {
             top: 28 * num,
             data: ["金额", "笔数"],
             textStyle: {
                 color: "#ffffff", // 字体颜色
                 fontSize: 12 * num
             },
             icon: "circle", // 圆形
             itemHeight: 8 * num // 改变圆圈大小
         },
         grid: {
             left: "0%",
             right: "10%",
             bottom: "10%",
             containLabel: true
         },
         yAxis: {
             show: false,
             type: "value",
         },
         xAxis: {
             type: "category",
             data: ["付款码", "收款码", "二维码", "H5", "小程序"],
             // inverse: true, // Y轴逆向数据
             axisLabel: {
                 color: "#fff",
                 textStyle: {
                     color: "#c3dbff", // 更改坐标轴文字颜色
                     fontSize: 13 * num // 更改坐标轴文字大小
                 }
             },
             // 不显示x轴的线
             axisLine: {
                 show: false
             },
             // 不显示刻度
             axisTick: {
                 show: false
             }
         },
         series: [{
                 name: "金额",
                 type: "bar",
                 data: [0.1, 9481, 8300, 0.6, 5341, 2807],
                 // 柱子的宽度
                 barWidth: 16 * num,
                 itemStyle: {

                 },
                 label: {
                     show: true, //开启显示
                     position: "top", //在上方显示
                     textStyle: {
                         //数值样式
                         color: "#fff",
                         fontSize: num == 1 ?
                             12 : 18 * num,
                     }
                 }
             },
             {
                 name: "笔数",
                 type: "bar",
                 data: [2, 6920, 4050, 3, 1564, 1688],
                 // 柱子的宽度
                 barWidth: 16 * num,
                 barGap: "60%" /*多个并排柱子设置柱子之间的间距*/ ,
                 barCategoryGap: "80%" /*多个并排柱子设置柱子之间的间距*/ ,
                 // 修改第一组柱子的圆角
                 itemStyle: {},
                 label: {
                     show: true, //开启显示
                     position: "top", //在上方显示
                     textStyle: {
                         //数值样式
                         color: "#fff",
                         fontSize: num == 1 ?
                             12 : 18 * num,
                     }
                 }
             }
         ]
     };
     myChart.setOption(option);