 var cellphone = ['iPhone X', '一加5', 'HTC U11+', '小米MIX 2', 'Moto Z 2018', '三星GALAXY Note 8', '努比亚Z17S', '努比亚Z17'];
 var cellPhone1 = ['荣耀V10', '三星GALAXY S8', '苹果iPhone 7 Plus', '索尼Xperia XZ1', '华为Mate 10', '索尼Xperia XZ Premium', '小米6', '华为P10'];
 var cellphoneTotle = cellphone.concat(cellPhone1);



 option = {
     title: {
         text: '手机CPU性能',
         subtext: '数据来源网络',
         sublink: 'http://mobile.zol.com.cn/soc/'
     },
     tooltip: {
         show: true
     },
     legend: {
         type: 'scroll',
         orient: 'vertical',
         top: '20%',
         left: '10%',
         selected: {
             //'iPhone X': false,
         },
         data: cellphoneTotle
     },
     radar: {
         shape: 'circle',
         scale: true,
         indicator: [{
                 text: '综合性能',
             },
             {
                 text: 'ANTUTU',
             },
             {
                 text: '3DMark',
             },
             {
                 text: 'GeekBench4',
             },

         ],
         center: ['60%', '50%'],
         radius: '50%'
     },

     series: [{
         type: 'radar',
         zlevel: 2,
         data: [{
                 value: [10, 217397, 61474, 10304],
                 name: 'iPhone X'
             },
             {
                 value: [7.2, 180796, 40453, 6761],
                 name: '一加5'
             },
             {
                 value: [7, 172144, 42047, 6513],
                 name: 'HTC U11+'
             },
             {
                 value: [7, 174517, 41345, 6580],
                 name: '小米MIX 2'
             },
             {
                 value: [6.9, 171737, 40029, 6611],
                 name: 'Moto Z 2018'
             },
             {
                 value: [6.9, 174331, 40187, 6423],
                 name: '三星GALAXY Note 8'
             },
             {
                 value: [6.9, 178336, 36496, 6806],
                 name: '努比亚Z17S'
             },
             {
                 value: [6.7, 178618, 35035, 6464],
                 name: '努比亚Z17'
             },
             {
                 value: [6.6, 173468, 32242, 6701],
                 name: '荣耀V10'
             },
             {
                 value: [6.6, 173236, 36631, 6108],
                 name: '三星GALAXY S8'
             },
             {
                 value: [6.6, 172644, 37334, 5965],
                 name: '苹果iPhone 7 Plus'
             },
             {
                 value: [6.4, 156209, 39466, 5914],
                 name: '索尼Xperia XZ1'
             },
             {
                 value: [6.4, 173996, 31847, 6330],
                 name: '华为Mate 10'
             },
             {
                 value: [6.4, 165425, 33527, 6287],
                 name: '索尼Xperia XZ Premium'
             },
             {
                 value: [6.1, 143990, 39643, 5390],
                 name: '小米6'
             },
             {
                 value: [5.7, 138505, 27552, 6591],
                 name: '华为P10'
             },
         ]
     }]
 }