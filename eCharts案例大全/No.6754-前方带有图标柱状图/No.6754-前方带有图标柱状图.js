 var chartData = [{
        name:'入监',
         value: 10700,
         test: '备注1' //自定义参数
     },
     {
         name:'释放',
         value: 6800,
         test: '备注2'
     },
 ];
 var rjsf = ['释放', '入监']
 var itemValue = [],
     bgData = []; //声明背景数据

 // 取出所有数据最大值,作为柱形图背景数据
 chartData.forEach(function(items, index) { //console.log(items)
     itemValue.push(items.value);
 });
 /*console.log(chartData)*/
 maxdata = Math.max.apply(null, itemValue); ///applay方法★取得最大值
 //console.log("最大值为 %c"+ maxdata, "color:red");
 for (var i = 0; i < chartData.length; i++) {
    var maxdata1=maxdata+10000//最大值加10000取整个的占比
        bgData.push(maxdata1); //取得最大值
        // console.log(bgData)
 }
 //图表
 option = {
     title: {
         show: false
     },
     tooltip: {
         trigger: 'axis', // axis , item
         axisPointer: {
             type: 'shadow' // 'line' | 'shadow'
         },
         //backgroundColor:'transparent',
         padding: 0,
         textStyle: {
             fontSize: 16,
             fontFamily: 'Simsun',
             color: '#fff'
         },
          formatter: function(params, ticket, callback) {
              var res = '<table class="charts_tip">' +
                  '<thead>' +
                  '<tr><th colspan="2" style="padding:2px 5px; background:' + params[1].color + '">' + params[1].name + '</th></tr>' +
                  '</thead>' +
                  '<tbody>' +
                  '<tr><td class="cc" style="padding:2px 5px;">数量</td><td>' + params[1].value + '</td></tr>' +
                  '<tr><td class="cc" style="padding:2px 5px;">备注</td><td>' + params[1].data.test + '</td></tr>' +
                  '</tbody>' +
                  '</table>';
              setTimeout(function() {
                  callback(ticket, res); // 仅为了模拟异步回调
              }, 3000)
              return res;
          }
     },
     legend: {
         show: false
     },
     toolbox: {
         show: false
     },
     grid: {
         left: "0%", //距离dom间距
         right: "4%",
         top: "2%",
         bottom: "-10%",
         containLabel: true
     },
     xAxis: [{
         type: 'value',
         position: 'bottom',
         boundaryGap: true, // 边界间隙
         min: 0,
         axisLabel: {
             show: false,
             textStyle: {
                 color: '#fff',
                 fontSize: 16
             }
         },
         axisLine: {
             show: false,
             lineStyle: {
                 color: 'rgba(255, 255, 255, .5)'
             }
         },
         axisTick: {
             show: false // 坐标轴小标记
         },
         splitLine: {
             show: false, // 是否显示分割线
             lineStyle: {
                 color: 'rgba(255, 255, 9255, 0)', // 纵向向网格线颜色
                 type: 'dashed',
                 width: 1
             }
         }
     }],
     yAxis: {
         type: 'category',
         position: 'left',
         data: rjsf,
         axisLabel: {
             verticalAlign: "bottom",
             align: "left",
             padding: [0, 0, 6, 10],
             textStyle: {
                 color: 'red',
                 fontSize: 10
             },
             //加左边小远圈富文本
             rich: {
                 lg: {
                     backgroundColor: '#00f28c',
                     color: '#fff',
                     borderRadius: 15,
                     // padding: 5,
                     align: 'center',
                     width: 10,
                     height: 10
                 },
             },
             formatter: function(value, index) {
                 return [
                     '{lg|' + '}' + '{title|' + value + '} '
                 ].join('\n')
             },
         },
         axisLine: {
             show: false,
             lineStyle: {
                 color: 'rgba(255, 255, 255, .5)',
                 width: 1
             }
         },
         axisTick: {
             show: false // 坐标轴小标记
         },
         splitLine: {
             show: false
         },
         /*data: (function(data) {
             var arr = [];
             data.forEach(function(items) {
                 arr.push(items.name);
             });
             console.log(arr)
             return arr;
         })(chartData) // 载入y轴数据*/
     },
     series: [{
         type: 'bar',
         barGap: "-100%",
         label: {
             normal: {
                 show: false
             }
         },
         barWidth: 10,
         itemStyle: {
             normal: {
                 barBorderRadius: [10, 10, 10, 10],
                 color: '#253973' // 图表颜色
             }
         },
         data: bgData, // 载入背景数据
         z: 0
     }, {
         type: 'bar',
         label: {
             normal: {
                 show: true,
                 position: ['90%', '-15px'], // top, right, inside, insideTop,...
                 textStyle: {
                     color: '#00d4ff',
                     fontSize: 10
                 },
                //  formatter: '{c}' + "万人"
                 formatter: function(params) {
                        console.log(params)
                        var strVal = 0;//右上角数据，判断是否大于10000
                        var strVal1=0;//右上角数据，判断是否加'万人'或人
                        chartData.forEach(function(v, i, array) {
                            if (params.name == v.name) {//判断params.name与chartData相等时
                                strVal = v.value;
                                strVal1=v.value;
                                params.data = v.test
                            }
                        })
                        var res='';
                        strVal>9999?strVal=strVal/10000:strVal
                        return strVal==strVal1?strVal+'人':strVal+'万人';//判断strval与strVal1是否相等,如果相等则没有除以10000后方加人否则加万人
                    }
             }
         },
         barWidth: 10,
         itemStyle: {
             normal: {
                 barBorderRadius: [10, 10, 10, 10],
                 //color:'#ffc938', // 图表颜色
                 /*color: function(params) { // 颜色定制显示（按顺序）
                     var colorList = ['#00ff90', '#00ff90'];
                     return colorList[params.dataIndex]
                 },*/
                 color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#00ff90'
                    }, {
                        offset: 1,
                        color: '#fafffd'
                    }]),//渐变
                 //barBorderRadius: [0, 17, 17, 0]  //圆角
             }
         },
         data: chartData, // 载入数据(内含自定义参数)
         z: 1
     }],
 };