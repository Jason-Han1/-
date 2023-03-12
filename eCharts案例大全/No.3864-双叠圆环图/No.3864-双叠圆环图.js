 option = {
     color: ["#0DA0F2", "#40FFFF", "#00F476", "#E5F434", "#FEB425", '#FBADAD'],
     backgroundColor: 'black',
     legend: {
         orient: "vertical",
         y: "center", // 可设定图例在上、下、居中
         right: '10%',
         padding: [0, 0, 0, 0], // 可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
         itemWidth: 5, // 图例的宽度
         itemHeight: 5, // 图例的高度
         textStyle: {
             // 图例文字的样式(根据legend的样式来改变)
             color: "#fft",
             fontSize: 12,
             fontFamily: 'Alibaba PuHuiTi'
         }
     },
     series: [{
             type: 'pie',
             minAngle: 10,
             radius: ["40%", "60%"],
             center: ["40%", "55%"],
             startAngle: 50,
             label: {
                 normal: {
                     //c 是数量 {font|{c}}\n{hr|}\n{text|{b}}
                     formatter: "{text|{b}}{font|{c}}",
                     rich: {
                         font: {
                             fontSize: 12,
                             fontWeight: 600,
                             padding: [5, 0],
                         },
                         text: {
                             padding: [5, 0]
                         },
                         hr: {
                             height: 0,
                             borderWidth: 1,
                             width: "100%",
                             borderColor: "#fff"
                         }
                     }
                 }
             },
             z: 0,
             //鼠标放上去显示当前的样式
             emphasis: {
                 opacity: 0.06,
                 label: {
                     show: true
                 },
                 labelLine: {
                     show: true
                 }
             },
             labelLine: {
                 show: false,
                 length: 10,
                 length2: 5
             },
             itemStyle: {
                 normal: {
                     //线的隐藏显示
                     label: {
                         show: false
                     },
                     labelLine: {
                         show: false,
                         length: 10,
                         length2: 5
                     }
                 },
             },
             data: [
                 {
                     value: 10,
                     name: '汽车'
                 },
                 {
                     value: 40,
                     name: '大巴车'
                 },
                 {
                     value: 60,
                     name: '轮船'
                 },
                 {
                     value: 100,
                     name: '飞机'
                 },
                  {
                     value: 10,
                     name: '高铁'
                 },
                  {
                     value: 40,
                     name: '坦克'
                 }
             ]
         },
         {
             type: 'pie',
             startAngle: 50,
             minAngle: 10,
             radius: ["40%", "60%"],
             center: ["40%", "55%"],
             label: {
                 show: false
             },
             labelLine: {
                 show: false,
             },
             z: 4,
             silent: !0,
              data: [
                 {
                     value: 10,
                     name: '汽车'
                 },
                 {
                     value: 40,
                     name: '大巴车'
                 },
                 {
                     value: 60,
                     name: '轮船'
                 },
                 {
                     value: 100,
                     name: '飞机'
                 },
                  {
                     value: 10,
                     name: '高铁'
                 },
                  {
                     value: 40,
                     name: '坦克'
                 }
             ]
         }
     ]
 }