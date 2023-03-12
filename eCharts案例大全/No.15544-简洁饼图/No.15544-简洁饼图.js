 var colorList = [
     '#59c5a7', '#51b8fe', '#fa827d'
 ];
 
 // 总和
 var total = {
     name: '总单数',
     value: '145'
 }

 var originalData = [{
     value: 55,
     name: '优先55'
 }, {
     value: 70,
     name: '普通70'
 }, {
     value: 25,
     name: "紧急25"
 }];

 echarts.util.each(originalData, function(item, index) {
     item.itemStyle = {
         normal: {
             color: colorList[index]
         }
     };
 });

 option = {
     title: [{
            text: total.name,
            left: '49%',
            top: '46%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#999',
                fontWeight: 'normal',
                fontSize: 20
            }
        }, {
            text: total.value,
            left: '49%',
            top: '51%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#666',
                fontWeight: 'normal',
                fontSize: 40
            }
        }],
     series: [{
         hoverAnimation: false, //设置饼图默认的展开样式
         radius: [100, 190],
         name: 'pie',
         type: 'pie',
         selectedMode: 'single',
         selectedOffset: 16, //选中是扇区偏移量
         clockwise: true,
         startAngle: 90,
         label: {
             normal: {
                 textStyle: {
                     fontSize: 18,
                     color: '#999'
                 }
             }
         },
         labelLine: {
             normal: {
                 lineStyle: {
                     color: '#999',

                 }
             }
         },
         data: originalData
     }]
 };
 myChart.setOption(option, true);