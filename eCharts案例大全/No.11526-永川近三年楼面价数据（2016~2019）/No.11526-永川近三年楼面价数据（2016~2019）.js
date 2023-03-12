

/**
Created by 王丹 重庆大学
*/

 option = {
               title: {
                   text: '永川近三年楼面价数据（2016~2019）',
                   left:10,
                   top:10,
                   textStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                        lineHeight: 40
                     
                   }
               },
               tooltip: {
                   trigger: 'axis',
                   axisPointer: {
                       type: 'cross',
                       label: {
                           backgroundColor: '#283b56'
                       }
                   }
               },
               legend: {
                   data: ['老城区', '兴龙湖', '凤凰湖', '神女湖', '城西', '其他'],
                   itemHeight: 25,
                   itemWidth:40,
                   top: 15,
                   textStyle: {
                       fontSize: 20
                     
                   }
               },
               toolbox: {
                   show: true,
                   feature: {
                       dataView: { readOnly: false },
                       restore: {},
                       saveAsImage: {}
                   }
               },
               dataZoom: {
                   show: false,
                   start: 0,
                   end: 100
               },
               grid: {
                   top:100
               },
               xAxis: [
                   {
                       type: 'category',
                       boundaryGap: true,
                       data: ['2016.Q1', '2016.Q2', '2016.Q3', '2016.Q4', '2017.Q1', '2017.Q2', '2017.Q3', '2017.Q4', '2018.Q1', '2018.Q2'],
                       axisLabel: {
                           textStyle: {

                               fontSize: 18,
                           }
                       },
                   },
                      
               ],
               yAxis: [
                   {
                       type: 'value',
                       scale: true,
                       name: '价格',
                       nameTextStyle: {
                           fontSize:20,
                       },
                       padding:[5,0,5,5],
                       min:0,
                       boundaryGap: false,
                       axisLabel: {
                           textStyle: {
                               
                               fontSize: 18,
                           }
                       },
                   },
             
               ],
               series: [
                   {
                       name: '老城区',
                       type: 'line',
                       symbolSize:15,
                       xAxisIndex: 0,
                       yAxisIndex: 0,
                       data: [912.065, 710.857, 800.953, 895.799, 796.126, 665.848, 1105.728, 1144.893, 1449.048, 1564.639, 2925.435, 1652.674, 1500.075]
                   },
                   {
                       name: '兴龙湖',
                       type: 'bar',
                       data: [1200.89, 929.257, 1006.642, 1084.028, 928.908, 750.039, 1316.184, 1206.244, 1478.873, 1548.341, 2809.621, 1333.407, 1517.959]
                   },
                   {
                       name: '凤凰湖',
                       type: 'bar',
                       data: [747.377, 608.412, 517.74, 779.94, 698.409, 588.209, 1463.644, 1024.091, 1303.432, 1725.349, 1750.133, 1304.738, 1649.738]
                   },
                   {
                       name: '神女湖',
                       type: 'bar',
                       data: [379.703, 366.914, 476.655, 598.569, 585.987, 532.15, 816.729, 893.945, 1274.297, 1520.838, 3098.471, 1631.261, 2040.057]
                   },
                   {
                       name: '城西',
                       type: 'bar',
                       data: [491.394, 392.919, 439.37, 487.933, 430.782, 438.493, 760.064, 635.366, 832.862, 860.912, 1542.122, 722.335, 850.057]
                   },
                   {
                       name: '其他',
                       type: 'bar',
                       data: [600.445, 593.372, 602.55, 594.704, 463.188, 350.018, 524.763, 420.655, 441.832, 385.218, 536.152, 331.828, 408.162]
                   }
               ]
           };

           app.count = 10;
           setInterval(function () {
               axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
               var time = ['2016.Q1', '2016.Q2', '2016.Q3', '2016.Q4', '2017.Q1', '2017.Q2', '2017.Q3', '2017.Q4', '2018.Q1', '2018.Q2', '2018.Q3', '2018.Q4', '2019.Q1'];

               var data0 = option.series[0].data;
               var data1 = option.series[1].data;
               var data2 = option.series[2].data;
               var data3 = option.series[3].data;
               var data4 = option.series[4].data;
               var data5 = option.series[5].data;
               data0.push(data0[0]);
               data0.shift();

               data1.push(data1[0]);
               data1.shift();
               data2.push(data2[0]);
               data2.shift();
               data3.push(data3[0]);
               data3.shift();
               data4.push(data4[0]);
               data4.shift();
               data5.push(data5[0]);
               data5.shift();



              
               option.xAxis[0].data.push(time[(app.count++) % 13]);
               option.xAxis[0].data.shift();
            

               myChart.setOption(option);
           }, 2100);