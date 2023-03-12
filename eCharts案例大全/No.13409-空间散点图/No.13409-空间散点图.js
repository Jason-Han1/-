   data = 
      [[1.29, 1.86, 11.9, '天津市'],
            [7.19, 3.6, 21.48, '河北省'],
            [3.7, 1.5, 40.56, '山西省'],
            [6.25, 2.75, 44.21, '安徽省'],
            [4.62, 2.08, 45.19, '江西省'],
            [9.56, 4.5, 47.13, '河南省'],
            [8.3, 3.7, 44.65, '四川省'],
       [3.7, 1.5, 40.56, '陕西省']]
   option = {
       xAxis3D: {
           type: 'value'
       },
       yAxis3D: {
           type: 'value'
       },
       zAxis3D: {
           type: 'value'
       },
       tooltip: {
           padding: 10,
           backgroundColor: '#222',
           borderColor: '#777',
           borderWidth: 1,
           formatter: function(obj) {
               var value = obj.value;
               return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                   value[3] +
                   '</div>' +
                   'X轴：' + value[0] + '<br>' +
                   'Y轴：' + value[1] + '<br>' +
                   'Z轴：' + value[2] + '<br>';
           }
       },
       visualMap: [{
               left: 'right',
               top: '10%',
               dimension: 2,    //改变形状的大小
               min: 0,
               max: 100,
               show: false,
               itemWidth: 30,
               itemHeight: 120,
               calculable: true,
               precision: 0.1,
               text: ['圆形大小'],
               textGap: 30,
               textStyle: {
                   color: '#fff'
               },
               inRange: {
                   symbolSize: [10, 70]
               },
               outOfRange: {
                   symbolSize: [10, 70],
                   color: ['rgba(255,255,255,.2)']
               },
               controller: {
                   inRange: {
                       color: ['#c23531']
                   },
                   outOfRange: {
                       color: ['#444']
                   }
               }
           },
           {
               left: 'right',
               bottom: '5%',
               dimension: 1,    //和颜色有关
               min: 0,
               max: 5,
               show: false,
               itemHeight: 120,
               calculable: true,
               precision: 0.1,
               text: ['颜色的变化'],
               textGap: 30,
               textStyle: {
                   color: '#fff'
               },
               inRange: {
                   colorLightness: [1, 0.5]
               },
               outOfRange: {
                   color: ['rgba(255,255,255,.2)']
               },
               controller: {
                   inRange: {
                       color: ['#c23531']
                   },
                   outOfRange: {
                       color: ['#444']
                   }
               }
           }
       ],
       grid3D: {
           viewControl: {
               // autoRotate: true
           },
           light: {
               main: {
                   shadow: true,
                   quality: 'ultra',
                   intensity: 1.5
               }
           }
       },
       series: [{
           type: 'scatter3D',
           data: data
       }]
   }