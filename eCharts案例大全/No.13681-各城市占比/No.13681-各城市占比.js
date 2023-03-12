 const baifenbi = [0.111, 0.333, 0.444, 0.222, 0.333, 0.333, 0.46];
 const bgBar = [1, 1, 1, 1, 1, 1, 1];
 const _baifenbi = [];
 const colors = ['#11D0A8', '#FF9F01', '#781414', '#03A6AB', '#E8B47B', '#F54323', '#D011C9']
 const city = ['北京', '上海', '西安', '广州', '深圳', '重庆', '武汉'];
 const richs = {};
 //定义富文本样式，为了匹配label字体的样式
 city.forEach((ele, i) => {
     let a = 'a' + i
     richs[a] = {
         color: colors[i],
         fontSize: 15,
     }
 })
 console.log(richs)
 baifenbi.forEach((ele, i) => {
     _baifenbi.push({
         name: city[i],
         value: ele,
         itemStyle: {
             normal: {
                 color: colors[i]
             }
         }
     })
 })
 option = {
     title: {
         text: '各城市占比',
         left: 'left',
         top: '0%',
         textStyle: {
             fontSize: 20,
         }
     },
     grid: {
         left: '2%',
         bottom: '2%',
         right: '5%',
         top: '7%',
     },
     xAxis: {
         show: false,
     },
     yAxis: {
         type: 'category',
         axisLabel: {
             show: false, //让Y轴数据不显示
         },
         itemStyle: {

         },
         axisTick: {
             show: false, //隐藏Y轴刻度
         },
         axisLine: {
             show: false, //隐藏Y轴线段
         },
         data: city,
     },
     series: [
         //背景色--------------------我是分割线君------------------------------//
         {
             show: true,
             type: 'bar',
             barGap: '-100%', //两列柱子都设置成-100%可以保证他们重合
             barCategoryGap: '50%',
             barWidth: 30, //统计条宽度 
             itemStyle: {
                 normal: {
                     color: 'rgba(14, 26, 36,1)'
                 },
             },
             z: 1,
             data: bgBar,
             label: {
                 normal: {
                     show: true,
                     position: 'insideRight',
                     //这种用HTML样式的方法不行
                     // formatter: function(data) {
                     //     // console.log("bg",data)
                     //     // console.log(option.series[1].data)
                     //     const series1 = option.series[1].data;
                     //     let str = ""
                     //     series1.forEach(ele => {
                     //         if(ele.name===data.name){
                     //             const aa = '#d011c9'
                     //             str+='<div style="color:\''+aa+'\'">'
                     //             // str+="<div style='color:'"+ele.itemStyle.normal.color+"'"+">"
                     //             str+=  data.name+'  '+(baifenbi[data.dataIndex] * 100).toFixed(1) + '%';
                     //         }

                     //     });
                     //     str+="</div>"
                     //     console.log(str)
                     //     return str;
                     //     // return data.name+'  '+(baifenbi[data.dataIndex] * 100).toFixed(1) + '%'
                     // },
                     //为了让label用背景色去定位，且label字体颜色必须和柱子颜色一样
                     formatter: function(data) {
                         const series1 = option.series[1].data;
                         let str = ""
                         series1.forEach((ele, i) => {
                             if (ele.name === data.name) {
                                 let aa = "a" + i
                                 str += '{' + aa + '| ' + data.name + '  ' + (baifenbi[data.dataIndex] * 100).toFixed(1) + '%' + '}';
                             }

                         });
                         return str;
                     },
                     rich: richs
                 }
             },
         },
         //蓝条--------------------我是分割线君------------------------------//
         {
             show: true,
             type: 'bar',
             barGap: '-100%',
             barCategoryGap: '50%',
             barWidth: 30, //统计条宽度
             max: 1,
             labelLine: {
                 show: false,
             },
             z: 2,
             data: _baifenbi,
         },
     ]
 }