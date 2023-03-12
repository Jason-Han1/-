 var geoCoordMap = {
     "海南": [110.17, 19.92],
     "河南": [113.700339, 34.751827],
     "河北": [114.54095, 38.058913],
     "湖北": [114.289984, 30.5942],
     "广东": [113.293215, 23.102603],
     "湖南": [113.03042, 28.188898],
     "江西": [115.911671, 28.658012],
     "黑龙江": [126.629804, 45.774197],
     "四川": [104.112035, 30.630737],
     "安徽": [117.321109, 31.850184],
 }
 var data = [{
         name: '江苏',
         value: 5.3
     },
     {
         name: '北京',
         value: 3.8
     },
     {
         name: '上海',
         value: 4.6
     },
     {
         name: '重庆',
         value: 3.6
     },
     {
         name: '河北',
         value: 3.4
     },
     {
         name: '河南',
         value: 3.2
     },
     {
         name: '云南',
         value: 1.6
     },
     {
         name: '辽宁',
         value: 4.3
     },
     {
         name: '黑龙江',
         value: 4.1
     },
     {
         name: '湖南',
         value: 2.4
     },
     {
         name: '安徽',
         value: 3.3
     },
     {
         name: '山东',
         value: 3.0
     },
     {
         name: '新疆',
         value: 3
     },
     {
         name: '江苏',
         value: 3.9
     },
     {
         name: '浙江',
         value: 3.5
     },
     {
         name: '江西',
         value: 2.0
     },
     {
         name: '湖北',
         value: 2.1
     },
     {
         name: '广西',
         value: 3.0
     },
     {
         name: '甘肃',
         value: 1.2
     },
     {
         name: '山西',
         value: 3.2
     },
     {
         name: '内蒙古',
         value: 3.5
     },
     {
         name: '陕西',
         value: 2.5
     },
     {
         name: '吉林',
         value: 4.5
     },
     {
         name: '福建',
         value: 2.8
     },
     {
         name: '贵州',
         value: 1.8
     },
     {
         name: '广东',
         value: 3.7
     },
     {
         name: '青海',
         value: 0.6
     },
     {
         name: '西藏',
         value: 1
     },
     {
         name: '四川',
         value: 3.3
     },
     {
         name: '宁夏',
         value: 0.8
     },
     {
         name: '海南',
         value: 1.9
     },
     {
         name: '台湾',
         value: 0.1
     },
     {
         name: '香港',
         value: 0.1
     },
     {
         name: '澳门',
         value: 0.1
     }
 ];


 var option = {
     visualMap: {
          orient: 'horizontal',
         type: 'continuous',
         itemWidth: 9,
         itemHeight: 55,
         text: ['高', '低'],
         showLabel: true,
         seriesIndex: [0],
         min: 0,
         max: 5,
         inRange: {
             color: ['#e4f2dc', '#cde8bc', '#a3ea77','#90d764', '#68b837']
         },
         textStyle: {
             color: '#7B93A7',
             fontSize: 14
         }


     },
     tooltip: {
         show: true,
         formatter: function(params) {
             return params.name + '：' + params.data['value'] + '%'
         },
     },
     geo: {
         roam: true,
         map: 'china',
         label: {
             emphasis: {
                 show: false
             }
         },

         itemStyle: {
             normal: {
                 areaColor: '#a3ea77',
                 borderColor: '#fff',
             },
             emphasis: {
                 areaColor: '#68b837',
             }
         },
         regions: [{
            name: '南海诸岛',
            value: 0,
            itemStyle: {
                normal: {
                    opacity: 0,
                    label: {
                        show: false
                    }
                }
            }
        }],
     },
     series: [{
         type: 'map',
         map: 'china',
         geoIndex: 0,
         aspectScale: 0.2, //长宽比
         showLegendSymbol: false, // 存在legend时显示
         label: {
             normal: {
                 show: false
             },
             emphasis: {
                 show: false,
                 textStyle: {
                     color: '#fff'
                 }
             }
         },
         roam: true,
         itemStyle: {
             normal: {
                 areaColor: '#031525',
                 borderColor: '#3B5077',
             },
             emphasis: {
                 areaColor: '#2B91B7'
             }
         },
         animation: false,
         data: data,


     }]
 };