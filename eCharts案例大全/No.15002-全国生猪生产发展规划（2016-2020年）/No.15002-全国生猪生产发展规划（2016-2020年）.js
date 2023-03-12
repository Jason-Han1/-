var mydata=[
    {name: '河北', value: 1},
    {name: '山东', value: 1},
    {name: '河南', value: 1},
    {name: '重庆', value: 1},
    {name: '广西', value: 1},
    {name: '四川', value: 1},
    {name: '海南', value: 1},
    {name: '北京', value: 2},
    {name: '天津', value: 2},
    {name: '上海', value: 2},
    {name: '江苏', value: 2},
    {name: '浙江', value: 2},
    {name: '福建', value: 2},
    {name: '安徽', value: 2},
    {name: '江西', value: 2},
    {name: '湖北', value: 2},
    {name: '湖南', value: 2},
    {name: '广东', value: 2},
    {name: '辽宁', value: 3},
    {name: '吉林', value: 3},
    {name: '黑龙江', value: 3},
    {name: '内蒙古', value: 3},
    {name: '云南', value: 3},
    {name: '贵州', value: 3},
    {name: '山西', value: 4},
    {name: '陕西', value: 4},
    {name: '甘肃', value: 4},
    {name: '新疆', value: 4},
    {name: '西藏', value: 4},
    {name: '青海', value: 4},
    {name: '宁夏', value: 4}
];

 option = {
     backgroundColor:'#f2f2f2',
     title: {
         text: '全国生猪生产发展规划（2016-2020年）',
         subtext: 'Foison制图 ',
         x: 'center',
         y: '5%'
     },
     tooltip: {
         trigger: 'item',
         formatter:'{b}',
     },
      roam:true,
     dataRange: {
         min: 0,
         max: 5,
         x: '5%',
         y: '80%',

         splitList: [

             {
                 start: 3.5,
                 end: 5,
                 label: '适度发展区',
                 color: '#b3ffb3'

             }, {
                 start: 2.5,
                 end: 3.5,
                 label: '潜力发展区',
                 color: '#80bfff'
             }, {
                 start: 1.5,
                 end: 2.5,
                 label: '约束发展区',
                 color: '#ff704d'
             },

             {
                 start:0,
                 end: 1.5,
                 label: '重点发展区',
                 color: '#5cd65c'
             },
              
         ],
         color: ['red', 'gold', 'lightgrey'],

     },
     toolbox: {
         show: true,
         orient: 'vertical',
         x: 'right',
         y: 'center',
         feature: {
             mark: {
                 show: true
             },
             dataView: {
                 show: true,
                 readOnly: false
             },
             dataZoom: {
                 show: true
             },
             restore: {
                 show: true
             },
             saveAsImage: {
                 show: true
             }
         }
     },
     roamController: {
         show: true,
         x: 'right',
         mapTypeControl: {
             'china': true
         }
     },
     series: [{
         name: '生猪',
         type: 'map',
         mapType: 'china',
         roam: false,
         itemStyle: {
             normal: {
                 label: {
                     show: true
                 }
             },
             emphasis: {
                 label: {
                     show: true
                 }
             }

         },
         data:mydata,
     }, ]
 };