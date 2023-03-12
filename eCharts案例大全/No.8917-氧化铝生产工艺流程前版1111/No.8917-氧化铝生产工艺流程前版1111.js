
 var option = {
     title: [{
             text: '氧化铝生产工艺流程',
             x: 'right',
             textStyle: {
                 fontSize: 30
             }
         },
         {
             text: '溶出影响因素',
             x: '49.8%',
             y: '35%',
             textAlign: 'center',
             textBaseline: 'middle',
             textStyle: {
                 fontSize: 35
             }
         },
         {
             text: '溶出过程主要影响因素',
             x: 'center',
             y: '5%',
             //subtext: '2019-05-20 15:19:32',
             textStyle: {
                 fontSize: 50
             }
         }
         
     ],
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     legend: [{
             data: ['循环母液浓度','溶出时间'],
             x: '25%',
             y: '60%'
         },
         {
             data: ['矿物组成及结构', '温度', '矿石粒度', '矿浆搅拌强度','溶出前后溶液成分','反应时间'],
             x: 'left',
             orient: 'vertical'
         }
     ],
     grid: [{
             left: '0%',
             right: '55%',
             top: '65%',
             bottom: '5%',
             containLabel: true
         },
         {
             gridindex: 1,
             left: '48%',
             right: '3%',
             top: '65%',
             bottom: '5%',
             containLabel: true
         }
     ],
     xAxis: [{
             type: 'category',
             boundaryGap:false,
             data: ["10g/L", "20g/L", "30g/L", "40g/L", "50g/L", "60g/L","70g/L", "80g/L", "90g/L", "100g/L","110g/L"],
            
             
            
         },
         {
             gridIndex: 1,
             type: 'category',
             
             boundaryGap: false,
             data: ['0h', '0.1h', '0.2h', '0.3h', '0.4h', '0.5h', '0.6h', '0.7h', '0.8h', '0.9h', '1h', '1.1h', '1.2h', '1.3h', '1.4h', '1.5h', '1.6h', '1.7h', '1.8h', '1.9h', '2.0h' ]
         }
     ],
     yAxis: [{
             type: 'value',
             axisLabel: {
                 formatter: '{value} %'
             },
             boundaryGap: [0, 0.01]
         },
         {
             gridIndex: 1,
             type: 'value',
             axisLabel: {
                 formatter: '{value} ℃'
             }
         }
     ],
     series: [{
             name: '循环母液浓度',
             type: 'line',
             label: {
                 normal: {
                     show: true,
                     position: 'left'
                 }
             },
             data: [75, 77, 79, 81, 84, 86, 88, 88, 88, 89,88]
              },
         {
             name: '溶出时间',
             type: 'line',
             label: {
                 normal: {
                     show: true,
                     position: 'right'
                 }
             },
             data: [61, 63, 67, 71, 77, 82, 83, 84, 85, 86,87]
         },
         {
             name: '溶出影响因素',
             type: 'pie',
             center: ['50%', '35%'],
             radius: ['25%', '40%'],
             label: {
                 normal: {
                     formatter: '{b} :({d}%)'
                 }
             },
             data: [{
                     value: 20,
                     name: '矿物组成及结构'
                 },
                 {
                     value: 25,
                     name: '温度'
                 },
                 {
                     value: 15,
                     name: '矿石粒度'
                 },
                 {
                     value: 20,
                     name: '矿浆搅拌强度'
                 },
                 {
                     value: 10,
                     name: '溶出前后溶液成分'
                 },
                 {
                     value: 10,
                     name: '反应时间'
                 }
             ]
         },
         {
             xAxisIndex: 1,
             yAxisIndex: 1,
             name: '分时统计',
             type: 'line',
             lineStyle: {
                 normal: {
                     color: '#4ea397'
                 }
             },
             data: ['0', '10', '50', '101', '165', '200', '210', '222', '237', '239','241','239', '248', '249', '251', '262', '264', '265', '249','260','252'],
             markPoint: {
                 data: [{
                         type: 'max',
                         name: '最大值',
                         symbolSize: 80
                     },
                     {
                         type: 'min',
                         name: '最小值',
                         symbolSize: 50
                     }
                 ],
                 itemStyle: {
                     normal: {
                         color: '#d0648a'
                     }
                 }
             },
             markLine: {
                 data: [{
                     yAxis: '260',
                     name: '最适宜溶出温度'
                 }]
             }
         }
     ]
 };
