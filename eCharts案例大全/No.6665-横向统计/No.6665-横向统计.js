 var warningCountData = [{
         name: "高级告警",
         data: [0]
     },
     {
         name: "中级告警",
         data: [0]
     },
     {
         name: "低级告警",
         data: [0]
     },
 ];


 var option = {
     backgroundColor: '#fff',
     grid: {
				top: 'middle',
				left: '3%',
				right: '4%',
				bottom: '3%',
				height: 50
			},
     tooltip: {
         show: false,
     },
     legend: {
         show: false,
     },
     xAxis: {
         axisLine: {
             show: false,
         },
         axisTick: {
             show: false,
         },
         splitLine: {
             show: false,
         },
         axisLabel: {
             show: false,
         },
     },
     yAxis: {
         data: ["sss"],
         axisLabel: {
             show: false,
         },
         axisLine: {
             show: false,
         },
         axisTick: {
             show: false,
         },
         splitLine: {
             show: false,
         },
     },
     color: [
         "#EF6B6E",
         "#FCAD2C",
         "#3DBB33 ",
         "#5292FD",
         "#7F6AAD",
         "#585247",
     ],
     series: [],
 }

 warningCountData.forEach((item, index) => {
     option.series.push({
         type: "bar",
         name: item.name,
         stack: "2",
         label: {
             normal: {
                 show: true,
                 position: 'inside', //在横条内
                 //position: [5, 5],
                 formatter: `{name|${item.name}}{value|(${item.data})}`,
                 align: "center",
                 textStyle: {
                     color: "#fff",
                     rich: {
                         name: {
                             fontSize: "16",
                             fontWeight: 500,
                             color: "#FFF",
                             textAlign:'left'
                         },
                         value: {
                             fontSize: "14",
                             fontWeight: 500,
                             color: "#fff",
                             textAlign:'left'
                         },
                     },
                 },
             },
         },
         barWidth: 30,
         data: item.data[0]==0?[1]:[0],
         itemStyle: {
             normal: {
                 barBorderRadius: [0],
             },
         },
     });
     if (index === 0) {
         option.series[index].itemStyle.normal.barBorderRadius = [5, 0, 0, 5, ];
     } else if (index === warningCountData.length - 1) {
         option.series[index].itemStyle.normal.barBorderRadius = [0, 5, 5, 0];
     } else {
         return;
     }
 });