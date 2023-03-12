 var datas = {
     dataArr: [{
             name: "黄瓜",
             value: 80
         },
         {
             name: "芒果",
             value: 20
         },
         {
             name: "青菜",
             value: 30
         },
         {
             name: "火龙果",
             value: 50
         },
         {
             name: "哈密瓜",
             value: 60
         },
         {
             name: "番茄",
             value: 20
         },
         {
             name: "香蕉",
             value: 90
         },
         {
             name: "木瓜",
             value: 10
         },
         {
             name: "无花果",
             value: 24
         },
         {
             name: "车厘子",
             value: 36
         },
         {
             name: "葡萄",
             value: 34
         },
         {
             name: "梨子",
             value: 67
         }
     ],
     shadowColorStyle: "rgba(155, 140, 197,0.1)",
     color: "rgba(155, 140, 197,0.8)"
 };
 var fontColor = "#fff";
 var seriesName = "";
 let noramlSize = 16;
 let max = getMax(datas.dataArr, "amount");
 let angleAxisData = getValArr(datas.dataArr, "name");
 datas.dataArr.forEach(ele => {
     ele.percent = ((ele.value / max) * 100).toFixed(2);
 });

 function getMax(arr, key) { //获取 含对象 数组的最大值
     var max = 0,
         len = arr.length;
     for (var i = 0; i < len; i++) {
         var item = arr[i][key];
         if (max < item) max = item;
     }
     return max;
 };

 function getValArr(arr, key) { //获取 所有value组成的数组
     var val = [],
         len = arr.length;
     for (var i = 0; i < len; i++) {
         val.push(arr[i][key]);
     }
     return val;
 };

 var option = {
     backgroundColor: "#000",
     tooltip: {
         trigger: "axis",
         backgroundColor: "#f6f6f6",
         textStyle: {
             color: "#000"
         },
         axisPointer: {
             type: "shadow",
             shadowStyle: {
                 color: datas.shadowColorStyle
             }
         },
         formatter: "{b}: {c}%"
     },
     angleAxis: {
         type: "category",
         axisLine: {
             lineStyle: {
                 color: "#eee"
             }
         },
         axisLabel: {
             interval: 0,
             fontSize: 14,
             color: "#fff",
             formatter: function(params) {
                 if (params.length > 3) {
                     return params.slice(0, 3) + "...";
                 } else {
                     return params;
                 }
             }
         },
         axisTick: {
             show: false
         },
         splitLine: {
             show: true,
             lineStyle: {
                 type: "dashed",
                 color: "#eeeeee"
             }
         },
         itemStyle: {
             emphasis: {
                 show: true
             }
         },
         data: angleAxisData,
         z: 10
     },
     radiusAxis: {
         //  max: 100,
         //  min: 0,
         axisTick: {
             show: false
         },
         axisLine: {
             show: false,
             lineStyle: {
                 color: "#6d8a92"
             }
         },
         axisLabel: {
             formatter: "{value}%",
             textStyle: {
                 fontSize: 12,
                 color: "#a3a3a3"
             }
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: "#eeeeee"
             }
         },
         splitArea: {
             areaStyle: {
                 color: "transparent"
             }
         }
     },
     polar: {
         center: ["50%", "50%"],
         radius: "70%"
     },
     series: [{
         type: "bar",
         data: datas.dataArr,
         itemStyle: {
             color: datas.color
         },
         coordinateSystem: "polar"
     }]
 }