option = {
    backgroundColor: '#0e2147',
    legend: {
	    show:false,
	},
    xAxis: {
        axisLabel: {
            textStyle: {
				color: '#5C91C4', 
		        fontSize: 12
		   },
        },
        axisLine: {
            lineStyle: {
                color: '#5C91C4'
            }
        },
        data: ['越秀', '海珠', '天河', '荔湾', '白云', '增城', '黄埔']
    },
    yAxis:[
	    {
	    name: '家',
	    nameTextStyle:{
	      color: '#5C91C4',
	      fontSize: 14,
	    },
		  type: 'value',
      position: 'left',
          max: 8,
		  interval: 2,
		  axisLabel: {
		    formatter: '{value}',
		    textStyle: {
				color: '#5C91C4', 
		    fontSize: 12
		  },
		},
		axisLine: { show: false },
		axisTick: { show: false },
		splitLine: {
		    lineStyle: {
		        color: '#5C91C4',
		        type: 'dashed'
		    }
		}
	}],
    series: [{
             type: "bar",
             barWidth: 4,
             barGap: '400%',
             label: {
                 show: true,
                 formatter: "{a|}",
                 color: "#fff",
                 position: "top",
                 distance: -10,
                 backgroundColor: "#FF0000",
                 shadowColor: "#FF0000",
                 shadowBlur: 10,
                 padding: 4,
                 borderRadius: 8,
                 rich: {
                     a: {
                         width: 6,
                         height: 6,
                         borderRadius: 6,
                         lineHeight: 6,
                         backgroundColor: "#FF0000"
                     }
                 }
             },
             itemStyle: {
                 normal: {
                     color: {
                         type: "linear",
                         x: 0,
                         y: 0,
                         x2: 1,
                         y2: 1,
                         colorStops: [{
                                 offset: 0,
                                 color: "rgba(255, 0, 0, 1)" // 0% 处的颜色
                             },
                             {
                                 offset: 1,
                                 color: "rgba(255, 0, 0, 0.35)" // 100% 处的颜色
                             }
                         ]
                     }
                 }
             },
             data: [3, 4.2, 3, 0.5, 3, 1.8, 3]
         },{
             type: "bar",
             barWidth: 4,
             barGap: '400%',
             label: {
                 show: true,
                 formatter: "{a|}",
                 color: "#fff",
                 position: "top",
                 distance: -10,
                 backgroundColor: "#FFAF00",
                 shadowColor: "#FFAF00",
                 shadowBlur: 10,
                 padding: 4,
                 borderRadius: 8,
                 rich: {
                     a: {
                         width: 6,
                         height: 6,
                         borderRadius: 6,
                         lineHeight: 6,
                         backgroundColor: "#FFAF00"
                     }
                 }
             },
             itemStyle: {
                 normal: {
                     color: {
                         type: "linear",
                         x: 0,
                         y: 0,
                         x2: 1,
                         y2: 1,
                         colorStops: [{
                                 offset: 0,
                                 color: "rgba(255, 175, 0, 1)" // 0% 处的颜色
                             },
                             {
                                 offset: 1,
                                 color: "rgba(255, 175, 0, 0.34)" // 100% 处的颜色
                             }
                         ]
                     }
                 }
             },
             data: [3, 3, 3, 4.5, 3, 1.8, 1.8]
         },{
             type: "bar",
             barWidth: 4,
             barGap: '400%',
             label: {
                 show: true,
                 formatter: "{a|}",
                 color: "#fff",
                 position: "top",
                 distance: -10,
                 backgroundColor: "#FDFF00",
                 shadowColor: "#FDFF00",
                 shadowBlur: 10,
                 padding: 4,
                 borderRadius: 6,
                 rich: {
                     a: {
                         width: 6,
                         height: 6,
                         borderRadius: 6,
                         lineHeight: 6,
                         backgroundColor: "#FDFF00"
                     }
                 }
             },
             itemStyle: {
                 normal: {
                     color: {
                         type: "linear",
                         x: 0,
                         y: 0,
                         x2: 1,
                         y2: 1,
                         colorStops: [{
                                 offset: 0,
                                 color: "rgba(253, 255, 0, 1)" // 0% 处的颜色
                             },
                             {
                                 offset: 1,
                                 color: "rgba(253, 255, 0, 0.34)" // 100% 处的颜色
                             }
                         ]
                     }
                 }
             },
             data: [5.5, 5.5, 1.7, 5.5, 3.8, 5.4, 5.4]
         }]
};
