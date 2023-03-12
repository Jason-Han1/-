 option = {
     backgroundColor: "#000",
     title: {
         text: '下达各区(新区)',
         top: 8,
         left: '5%',
         textStyle: {
             fontWeight: 'normal',
             fontSize: 20,
             color: '#fff'
         }
     },
     legend: {
         type: 'scroll',
         bottom: "2%",
         itemHeight: 16,
         itemWidth: 16,
         itemGap: 30,
         textStyle: {
             fontSize: 16,
             color: 'rgba(55,255,249,1)'
         },
         data: [{
             name: "按规划实施",
             borderColor: 'red'
         }, {
             name: "规划"
         }, {
             name: "超量",
             color: "#ffff00",
             backgroundColor: "#ffff00"
         }],
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         },
         textStyle: {
             fontSize: 24
         },
        //  formatter: function(parms) { //给提示框的每一项内容添加单位
        //      // console.log(parms)
        //      //点击图例的时候会报seriesName不存在错误，根据长度的不同返回不同的数据
        //      if (parms.length == 1) {
        //          var str = parms[0].seriesName + ":" + " " +
        //              parms[0].value + " 公顷 "

        //          return '<div>' + parms[0].name + '</div>' + str;
        //      } else if (parms.length == 2) {
        //          var str = parms[0].seriesName + ":" + " " +
        //              parms[0].value + " 公顷 "
        //          var str1 = parms[1].seriesName + ":" + " " +
        //              parms[1].value + " 公顷 "

        //          return '<div>' + parms[0].name + '</div>' + str + "<br/>" + str1;
        //      } else {
        //          var str = parms[0].seriesName + ":" + " " +
        //              parms[0].value + " 公顷 "
        //          var str1 = parms[1].seriesName + ":" + " " +
        //              parms[1].value + " 公顷 "
        //          var str2 = parms[2].seriesName + ":" + " " +
        //              parms[2].value + " 公顷 "

        //          return '<div>' + parms[0].name + '</div>' + str + "<br/>" + str1 + "<br/>" + str2;
        //      }
        //  }
     },
     grid: {
         top: '12%',
         left: '10%',
         right: '5%',
         bottom: '15%',
     },
     xAxis: [{
         splitLine: {
             show: false
         },
         "axisTick": { //y轴刻度线
             "show": false
         },
         axisLine: {
             lineStyle: {
                 color: '#ccc',
             }
         },
         axisLabel: {
             interval: 0,
             color: '#fff',
             fontSize: '16'
         }
     }],
     yAxis: {
         inverse: true,
         name: ' ',
         nameTextStyle: {
             color: '#fff',
             fontSize: 12,
             padding: [10, 0, 5, 0],
         },
         splitLine: {
             show: false
         },
         axisLabel: {
             interval: 0,
             show: true,
             color: '#fff',
             fontSize: '16'

         },
         "axisTick": { //y轴刻度线
             "show": false
         },
         axisLine: {
             lineStyle: {
                 color: '#ccc',
             }
         },
         data: ['福田区', '罗湖区', '南山区', '盐田区', '宝安区', '龙岗区', '龙华区', '坪山区', '光明新区', '大鹏新区', '前海合作区', '深汕合作区'],
     },
     series: [{
             name: '规划',
             barGap: '-100%',
             stack: 'sum',
             type: 'bar',
             barWidth: 15,
             color: 'rgba(17, 49, 58,.5)',
             itemStyle: { //设置每个柱子的样式
                 borderColor: '#01DD5E',
                 borderType: "dotted",
                 borderWidth: 2
             },
             label: {
                 normal: {
                     show: false,
                     position: 'insideRight'
                 }
             },
             data: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500]
         },
         {
             name: '按规划实施',
             type: 'bar',
             barGap: '-100%',
             barWidth: 15,
             color: "#00B4FF",
             label: {
                 normal: {
                     show: false,
                     position: 'insideRight',
                 }
             },
             data: [420, 302, 301, 334, 390, 400, 320, 390, 330, 320, 300, 320]
         },
         {
             name: '超量',
             type: 'bar',
             barGap: '-100%',
             barWidth: 15,
             stack: 'sum',
             color: "#ffff00",
             label: {
                 normal: {
                     show: true,
                     position: 'top',
                     formatter: '',
                     position: 'right',
                     color: "#ffff00",
                 }
             },
             data: [20, 30, 31, 34, 39, 30, 20, 39, 30, 20, 23, 12]
         }
     ]
 };