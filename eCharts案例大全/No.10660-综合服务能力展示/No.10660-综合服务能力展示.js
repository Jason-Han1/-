//  var cellphone = ['iPhone X', '一加5', 'HTC U11+', '小米MIX 2', 'Moto Z 2018', '三星GALAXY Note 8', '努比亚Z17S', '努比亚Z17'];
//  var cellPhone1 = ['荣耀V10', '三星GALAXY S8', '苹果iPhone 7 Plus', '索尼Xperia XZ1', '华为Mate 10', '索尼Xperia XZ Premium', '小米6', '华为P10'];
//  var cellphoneTotle = cellphone.concat(cellPhone1);


var cellphoneTotle = ['南京港','镇江港','常州港','苏州港'];


 option = {
     title: {
         text: '港口服务水平',
        //  subtext: '数据来源网络',
        //  sublink: 'http://mobile.zol.com.cn/soc/'
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
                 text: '装卸效率',
             },
             {
                 text: '设备效率',
             },
             {
                 text: '安全评估',
             },
             {
                 text: '人员效率',
             },

         ],
         center: ['60%', '50%'],
         radius: '50%'
     },

     series: [{
         type: 'radar',
         zlevel: 2,
         data: [{
                 value: [10, 10, 10, 10],
                 name: '南京港'
             },
             {
                 value: [7.2, 9, 9, 4],
                 name: '常州港'
             },
             {
                 value: [7, 8.0, 4.3, 3.1],
                 name: '镇江港'
             },
             {
                 value: [8.0, 4.8, 8.5, 9.2],
                 name: '苏州港'
             }
         ]
     }]
 }