 var mainGaugedata = [{
     name: '服务热度',
     value: 10.26
 }, {
     name: '移动指数',
     value: 90.9
 }, {
     name: '消费指数',
     value: 94.49
 }, {
     name: '评价指数',
     value: 98.54
 }]

 var titleArr = [],
     seriesArr = [];

 mainGaugedata.forEach(function(item, index) {

     titleArr.push(
          {
                text:item.name,
                left: index * 25 + 12.5 + '%',
                top: '65%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: '16',
                    color: "#6b9fd6",
                    textAlign: 'center',
                },
            }        

     );
     seriesArr.push(

         {
             name: '仪表盘每秒跳动一格v2',
             type: 'gauge',
             splitNumber: 10,
             detail: {
                 formatter: '{value}%',
                 offsetCenter: [0, '60%'],
                 textStyle: {
                     color: '#fff',
                     fontSize: 20
                 }

             },
             center: [index * 25 + 12.5 + '%', '50%'],
             radius: '25%',
             min: 0,
             max: 100,

             axisLabel: {
                 show: false
             },
             axisLine: { //背景边框

                 lineStyle: {
                     width: 15,
                     color: [
                         [0.2, '#91c7ae'],
                         [0.8, '#63869e'],
                         [1, '#c23531']
                     ]
                 }
             },
             splitLine: { //分隔线样式
                 show: true,
                 
                 length: 25,
                 lineStyle: {
                     color: 'auto'
                 }
             },
             axisTick: { //小刻度样式
                 show: true,
                 lineStyle: {
                     color: 'auto',
                     width: 1
                 },
                 length: 20,
                 splitNumber: 5
             },
             data: [{
                 value: item.value,
             }]
         }
     )

 })
 option = {
     backgroundColor: "#003366",
     title: titleArr,
     series: seriesArr
 };