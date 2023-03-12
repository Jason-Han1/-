 function obtainEchartDataSource() {
     var source = {
         "beans": [{
                 "avgIncome": "3158.00",
                 "subTitle": "较前一年变化 --",
                 "year": "2014"
             },
             {
                 "avgIncome": "2450.00",
                 "subTitle": "较前一年减少 22.42%",
                 "year": "2015"
             },
             {
                 "avgIncome": "6450.00",
                 "subTitle": "较前一年增加 163.27%",
                 "year": "2016"
             },
             {
                 "avgIncome": "8222.00",
                 "subTitle": "较前一年增加 21.27%",
                 "year": "2017"
             },
             {
                 "avgIncome": "0",
                 "subTitle": "较前一年减少 100.00%",
                 "year": "2018"
             },
             {
                 "avgIncome": "0",
                 "subTitle": "较前一年变化 --",
                 "year": "2019"
             }
         ]
     };

     var beans = source.beans;
     var xAxisData = [];
     var seriesLineData = [];
     var tooltipsData = [];
     var scatterData = [];
     for (var i in beans) {
         var y = beans[i].year;
         var avgIncome = beans[i].avgIncome;
         var subTitle = beans[i].subTitle;
         // x轴刻度
         xAxisData.push({
             value: y
         });
         // 折线数据
         seriesLineData.push({
             value: avgIncome
         });
         // 提示框次级数据
         tooltipsData.push(subTitle);
         // x轴坐标点数据
         scatterData.push({
             value: [y, 0]
         })
     }
     var last = (Number)(beans[beans.length - 1].year);
     // 限制到2020年   无限制放开
     tailRecursion(xAxisData, last);

     return {
         xAxisData: xAxisData,
         scatterData: scatterData,
         seriesLineData: seriesLineData,
         tooltipsData: tooltipsData
     }
 }

 /**
  * 处理x轴年份扩展
  * @param xData
  * @param value
  */
 function tailRecursion(xData, value) {
     if (value < 2020) {
         value++;
         xData.push({
             value: value
         });
         tailRecursion(xData, value);
     }
 }

 var dataSource = obtainEchartDataSource();


 var option = {
     tooltip: {
         show: true
     },
     grid: {
         top: '30%',
         left: '1%',
         right: '1%',
         bottom: '0%',
         containLabel: true
     },
     xAxis: [{
         type: 'category',
         // boundaryGap: false,
         axisTick: {
             show: false
         },
         // x轴 点击触发事件
         triggerEvent: true,
         data: dataSource.xAxisData
     }],
     yAxis: [{
         type: 'value',
         name: '单位（元）',
         splitLine: {
             show: false
         },
         axisLine: {
             show: false
         },
         axisLabel: {
             show: true
         },
         axisTick: {
             show: false
         }
     }],
     series: [{
             name: '人均纯收入',
             type: 'line',
             //是否平滑曲线显示
             smooth: true,
             // 默认是空心圆（中间是白色的），改成实心圆
             symbol: 'circle',
             // 屏蔽标记鼠标事件
             silent: true,
             symbolSize: 1,
             lineStyle: {
                 normal: {
                     width: 4,
                     // 线条颜色
                     color: "#4C84FF"
                 }
             },
             label: {
                 show: true,
                 position: 'top',
                 formatter: '{c} 元',
                 textStyle: {
                     color: '#4f4a51',
                     fontSize: 14,
                     fontWeight: 'bold'
                 }
             },
             areaStyle: { //区域填充样式
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: 'rgba(0, 136, 212, 0.2)'
                     }, {
                         offset: 1,
                         color: 'rgba(0, 136, 212, 0)'
                     }], false),
                     shadowColor: 'rgba(0, 0, 0, 0.1)',
                     shadowBlur: 10
                 }
             },
             data: dataSource.seriesLineData
         },
         {
             type: 'pictorialBar',
             data: deepClone(dataSource.seriesLineData),
             barGap: "10%",
             symbolRepeat: true,
             symbolMargin: 2,
             // 点状线 鼠标不触发事件
             silent: true,
             symbol: "rect",
             symbolSize: 2,
             color: '#c8c5d1',
             symbolClip: true

         },
         {
             type: 'scatter',
             name: '年份',
             symbolSize: 10,
             data: dataSource.scatterData,
             tooltip: {
                 show: true,
                 backgroundColor: 'white',
                 textStyle: {
                     color: '#000'
                 },
                 formatter: function(param) {
                     var index = param.dataIndex;
                     var lineData = option.series[0].data[index].value;
                     var tooltipsData = dataSource.tooltipsData;
                     return '<div style="border: medium #0094ff;"><span style="font-size:15px;color: #0a080b"><strong>人均纯收入：</span><span style="color: #F84040">' + lineData +
                         '</style></span>元</strong></br>' +
                         '<span style="font-size:13px; color: #9D9D9D">' + tooltipsData[index] + '</span></div>';
                 },
                 extraCssText: 'box-shadow: 0 0 3px #A0C5C8;'
             },
             itemStyle: {
                 borderWidth: 1,
                 borderColor: '#00a7db',
                 color: {
                     type: 'radial',
                     x: 0.5,
                     y: 0.5,
                     r: 0.5,
                     colorStops: [{
                         offset: 0.4,
                         color: '#ffffff'
                     }, {
                         offset: 1,
                         color: '#4C84FF' // 100% 处的颜色
                     }],
                     globalCoord: false
                 }
             }
         }
     ]
 };


 myChart.setOption(option);

 /**
  *
  * 对象深拷贝
  *
  * @param json
  */
 function deepClone(json) {
     var s = JSON.stringify(json);
     return JSON.parse(s);
 }


 /**
  * 注册x 轴  点击事件
  */
 myChart.on('click', function(e) {

     var componentType = e.componentType;
     var year = '';
     switch (componentType) {
         case 'series':
             year = e.name;
             break;
         case 'xAxis':
             year = e.value;
             break;
     }
     selectAction(year)
 });
 // 加载后默认选中当前年
 selectCurrent();

 /**
  * 选中操作
  * @param year
  * @param callback 自定义事件函数钩子 参数为 x轴刻度值
  * @see selectedStyle
  */
 function selectAction(year, callback) {
     selectedStyle(year, callback);

     if ('[object Function]' === Object.prototype.toString.call(callback)) {
         callback(year);
     }

     myChart.setOption(option);
 }

 /**
  *  点击x 轴 事件   触发选中高亮  同时触发 callback 事件
  * @param year
  */
 function selectedStyle(year) {
     var scatterData = option.series[2].data;
     var length = scatterData.length;

     for (var i = 0; i < length; i++) {

         var lineData = option.series[0].data[i];
         // 移除坐标轴点样式
         delete scatterData[i].itemStyle;

         // 移除折线样式
         delete lineData.label;
         //匹配到就增加样式
         if (year === scatterData[i].value[0]) {
             var scatterColor = '#4C84FF';
             // 折线选中变大 变色
             lineData.label = {
                 show: true,
                 fontSize: 16,
                 color: scatterColor
             };
             // x轴圆点变色
             scatterData[i].itemStyle = {
                 color: scatterColor
             };
         }
     }

 }


 /**
  * 默认选中当前年
  * @param callback  回调钩子
  */
 function selectCurrent(callback) {
     var currentYear = new Date().getFullYear().toString();
     selectAction(currentYear, callback)
 }