 const colorList = ['#6aa8ff', '#5b61b6', '#3bd0fc', '#7ce1d2', '#ff7d5a'];
 const xAxis = [{
         value: 300,
         name: '判断题'
     },
     {
         value: 351,
         name: '成语纠错'
     },
     {
         value: 300,
         name: '名著题目'
     },
     {
         value: 200,
         name: '古诗词'
     },
     {
         value: 200,
         name: '作文'
     },
 ];
 const yAxis = ['判断题', '成语纠错', '古诗词', '名著题目', '作文'];
 const options = {
     tooltip: {
         trigger: 'item',
         formatter: "{b}: {d}%"
     },
     legend: {
         bottom: '3%',
         itemGap: 25,
         textStyle: {
             color: '#444',
             fontWeight: 700
         },
         x: 'center',
         formatter: (name) => {
             let total = 0;
             let target;
             for (var i = 0, l = xAxis.length; i < l; i++) {
                 total += xAxis[i].value;
                 if (xAxis[i].name == name) {
                     target = xAxis[i].value;
                 }
             }
             let tempName;
             if (name.length > 6) {
                 tempName = name.slice(0, 6) + "...";
             } else {
                 tempName = name;
             }
             return tempName + " " + ((target / total) * 100).toFixed(2) + "%";
         },
         data: yAxis
     },
     series: [{
             type: 'pie',
             radius: ['30%', '55%'],
             center: ['50%', '35%'],
             clockwise: false,
             z: 10,
             itemStyle: {
                 normal: {
                     color: function(params) {
                         return colorList[params.dataIndex]
                     },
                     shadowBlur: 20,
                     shadowColor: 'rgba(0, 0, 0, 0.3)'
                 }
             },
             label: {
                 normal: {
                     formatter: function(params) {
                         let str = `${params.percent + '%'}`
                         str = '{pera|' + params.percent + '%}'
                         return str
                     },
                     rich: {
                         pera: {
                             color: '#444',
                             fontWeight: 700,
                             backgroundColor: '#fff',
                             padding: [4, 10],
                             lineHeight: 20,
                             fontSize: 14,
                             height: 20,
                             borderRadius: 7,
                             borderWidth: 2,
                             borderColor: '#d9e4ff'
                         },
                     }
                 }
             },
             labelLine: {
                 normal: {
                     length: 0,
                     length2: 0,
                     lineStyle: {
                         width: 0
                     }
                 }
             },
             data: xAxis
         },
         // 边框的设置
         {
             name: '外边框',
             type: 'pie',
             clockWise: false, //顺时加载
             hoverAnimation: false, //鼠标移入变大
             center: ['50%', '35%'],
             radius: ['65%', '65%'],
             label: {
                 normal: {
                     show: false
                 }
             },
             data: [{
                 value: 9,
                 name: '',
                 itemStyle: {
                     normal: {
                         borderWidth: 2,
                         borderColor: '#e4edff'
                     }
                 }
             }]
         }
     ]
 };