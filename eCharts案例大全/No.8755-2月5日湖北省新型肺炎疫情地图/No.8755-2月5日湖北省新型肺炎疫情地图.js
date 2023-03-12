 var uploadedDataURL = "/asset/get/s/data-1578022159407-bQN7ZPwt.json";
 function showProvince() {
     var name = 'hubei';

     myChart.showLoading();
     $.get(uploadedDataURL, function(geoJson) {
         myChart.hideLoading();

         echarts.registerMap(name, geoJson);

         myChart.setOption(option = {
             backgroundColor: "rgb(230, 238, 243)",
             title: {
                 text: '2月29日湖北省新型肺炎疫情地图',
                 left: 'center', //标题位置
                 textStyle: {
                     fontSize: 32,
                     fontWeight: 'bolder',
                     color: 'black' // 主标题文字颜色
                 }
             },
             color: ['white'],
             legend: {
                 orient: 'vertical',
                 left: 'left',
                 textStyle: {
                     fontSize: 20,
                     color: 'black' // 图例文字颜色
                 },
                 //data: ['地市']
                 // 图例位置
             },
             visualMap: {
                 min: 0,
                 max: 10000,
                 left: 'left',
                 top: 'bottom',
                 text: ['高', '低'],
                 // 文本，默认为数值文本
                 //calculable: true,
                 //color: ['blue', 'blue']
                 //图例颜色
                 pieces: [{
                     min: 10000,
                     max: 99999,
                     label: ">10000",
                     color: "#000000"

                 }, {
                     min: 5000,
                     max: 9999,
                     label: "5000-9999",
                     color: "#2E0000"
                 }, {
                     min: 1000,
                     max: 4999,
                     label: "1000-4999",
                     color: "#740001"

                 }, {
                     min: 500,
                     max: 999,
                     label: "500-999",
                     color: "#A50002"
                 }, {
                     min: 100,
                     max: 499,
                     label: "100-499",
                     color: "#EA0002"
                 }, {
                     min: 10,
                     max: 99,
                     label: "10-99",
                     color: "#F25669"
                 }, {
                     min: 0,
                     max: 9,
                     label: "0-9",
                     color: "#ffffff"

                 }],
                 orient: 'vertical',
                 itemWidth: 25,
                 itemHeight: 15,
                 showLabel: true,
                 seriesIndex: [0],
                 textStyle: {
                     color: '#000'
                 }
             },
             toolbox: {
                 show: true,
                 orient: 'vertical',
                 left: 'right',
                 top: 'center',
                 feature: {
                     dataView: {
                         readOnly: false
                     },
                     restore: {},
                     saveAsImage: {}
                 }
             },
             series: [{
                 name: '地市',
                 type: 'map',
                 mapType: name,
                 label: {
                     normal: {
                         show: true
                     },
                     emphasis: {
                         textStyle: {
                             color: '#fff'
                         }
                     }
                 },

                 data: [{
                         name: '鄂州市',
                         value: 1391
                     },{
                         name: '恩施土家族苗族自治州',
                         value: 252
                     },{
                         name: '黄冈市',
                         value: 2905
                     },{
                         name: '黄石市',
                         value: 1014
                     },{
                         name: '荆门市',
                         value: 925
                     },{
                         name: '荆州市',
                         value: 1579
                     },{
                         name: '潜江市',
                         value: 198
                     },{
                         name: '神农架林区',
                         value: 11
                     },{
                         name: '十堰市',
                         value: 672
                     },{
                         name: '随州市',
                         value: 1307
                     },{
                         name: '天门市',
                         value: 496
                     },{
                         name: '武汉市',
                         value: 49122
                     },{
                         name: '仙桃市',
                         value: 575
                     },{
                         name: '咸宁市',
                         value: 836
                     },{
                         name: '襄阳市',
                         value: 1175
                     },{
                         name: '孝感市',
                         value: 3518
                     },{
                         name: '宜昌市',
                         value: 931
                     }

                 ]
                 //animationDurationUpdate: 1000,
                 //animationEasingUpdate: 'quinticInOut'
             }]
         });
     });
 }

 var currentIdx = 0;

 showProvince();