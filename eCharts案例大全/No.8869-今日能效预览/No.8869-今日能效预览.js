 var option = {
     title: [{
             text: '今日能效预览',
             x: 'center',
             textStyle: {
                 fontSize: 20
             }
         },
         {
             text: '内外块粉比',
             x: '19.8%',
             y: '45%',
             textAlign: 'center',
             textBaseline: 'middle',
             textStyle: {
                 fontSize: 20
             }
         },
         {
             text: '块粉比',
             x: '49.8%',
             y: '45%',
             textAlign: 'center',
             textBaseline: 'middle',
             textStyle: {
                 fontSize: 20
             }
         },
         {
             text: '内外比',
             x: '79.8%',
             y: '45%',
             textAlign: 'center',
             textBaseline: 'middle',
             textStyle: {
                 fontSize: 20
             }
         },
         {
             text: '34106.24吨',
             x: 'center',
             y: '8%',
             subtext: getDate(),
             textStyle: {
                 fontSize: 80
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
             data: ['外销', '内销'],
             x: '25%',
             y: '60%'
         },
         {
             data: ['外销块煤', '内销块煤', '外销面煤', '内销面煤', '块煤', '面煤'],
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
             type: 'value',
             axisLabel: {
                 formatter: '{value} 吨'
             },
             boundaryGap: [0, 0.01]
         },
         {
             gridIndex: 1,
             type: 'category',
             boundaryGap: false,
             data: ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时']
         }
     ],
     yAxis: [{
             type: 'category',
             data: ['块煤大块', '块煤4-8', '块煤3-6', '块煤2-4', '块煤1-3', '块煤0.5-1', '面煤', '电面煤', '电块煤', '劣质煤'],
             axisLabel: {
                 interval: 0
             }
         },
         {
             gridIndex: 1,
             type: 'value',
             axisLabel: {
                 formatter: '{value} 吨'
             }
         }
     ],
     series: [{
             name: '外销',
             type: 'bar',
             label: {
                 normal: {
                     show: true,
                     position: 'right'
                 }
             },
             data: [1576.28, 840.18, 997.15, 1865.25, 3026.62, 877.09, 6361.68, 0, 0, 1188.28]
         },
         {
             name: '内销',
             type: 'bar',
             label: {
                 normal: {
                     show: true,
                     position: 'right'
                 }
             },
             data: [44.67, 11.94, 123.67, 20.28, 62.46, 29.62, 1362.29, 10127.00, 3909.78, 1682.00]
         },
         {
             name: '大煤种',
             type: 'pie',
             center: ['20%', '45%'],
             radius: ['15%', '20%'],
             label: {
                 normal: {
                     formatter: '{b} :{c}吨({d}%)'
                 }
             },
             data: [{
                     value: 9182.57,
                     name: '外销块煤'
                 },
                 {
                     value: 4202.42,
                     name: '内销块煤'
                 },
                 {
                     value: 6361.68,
                     name: '外销面煤'
                 },
                 {
                     value: 11489.29,
                     name: '内销面煤'
                 }
             ]
         },
         {
             name: '块粉比',
             type: 'pie',
             center: ['50%', '45%'],
             radius: ['15%', '20%'],
             label: {
                 normal: {
                     formatter: '{b} :{c}吨({d}%)'
                 }
             },
             data: [{
                     value: 13384.99,
                     name: '块煤'
                 },
                 {
                     value: 17850.97,
                     name: '面煤'
                 }
             ]
         },
         {
             name: '内外比',
             type: 'pie',
             center: ['80%', '45%'],
             radius: ['15%', '20%'],
             label: {
                 normal: {
                     formatter: '{b} :{c}吨({d}%)'
                 }
             },
             data: [{
                     value: 15544.25,
                     name: '外销'
                 },
                 {
                     value: 15691.71,
                     name: '内销'
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
             data: ['516.48', '482.46', '418.74', '284.66', '315.28', '365.34', '657.19', '3054.78', '4127.51', '5180.03', '5416.46', '4113.99', '3021.61', '4191.89', '3437.5', '1250.22', ],
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
                     type: 'average',
                     name: '平均值'
                 }]
             }
         }
     ]
 };
 
 function getDate(){
        var now = new Date();
        var year = now.getFullYear(); //得到年份
        var month = now.getMonth();//得到月份
        var date = now.getDate();//得到日期
        var day = now.getDay();//得到周几
        var hour = now.getHours();//得到小时
        var minu = now.getMinutes();//得到分钟
        var sec = now.getSeconds();//得到秒
　　     var MS = now.getMilliseconds();//获取毫秒
        var week;
        month = month + 1;
        if (month < 10) month = "0" + month;
        if (date < 10) date = "0" + date;
        if (hour < 10) hour = "0" + hour;
        if (minu < 10) minu = "0" + minu;
        if (sec < 10) sec = "0" + sec;
        if (MS < 100) MS = "0" + MS;
        var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        week = arr_week[day];
        var time = "";
        time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec + " " + week;
        return time;
 }