var option = {
   grid: [
      {
         // 这是控制上面的bar
         left: '6%',
         right: '3%',
         top: '5%',
         bottom: '12%',
         height: '35%',
         containLabel: false,
      },
      {
         // 控制下面的line
         left: '6%',
         right: '3%',
         top: '50%',
         bottom: '12%',
         height: '35%',
         containLabel: false,
      },
   ],
   // tooltip: {
   //             show: true,
   //             trigger: 'axis',
   //             // backgroundColor: '#fff',
   //             formatter: function(params) {
   //                const barData = params.filter(e => e.seriesType == 'bar');
   //                const lineData = params.filter(e => e.seriesType == 'line');
   //                // 量
   //                let volumeContent = '';
   //                const volumeTitle = barData[0].axisValue + '合约量';
   //                volumeContent += ` <div>${volumeTitle}</div>`;
   //                barData.forEach(e => {
   //                   volumeContent += `<div>${e.seriesName}:${e.value}Mwh</div>`;
   //                });
   //                // 价
   //                let priceContent = '';
   //                const priceTitle = lineData[0].axisValue + '合约价';
   //                priceContent += `<div>${priceTitle}</div>`;
   //                lineData.forEach(e => {
   //                   priceContent += `<div>${e.marker}${e.seriesName}：${e.value}元/MWh</div>`;
   //                });
   //                return `<div style="padding:10px">
   //                         <div style="padding-bottom:10px;border-bottom:1px dashed #fff;">${volumeContent}</div>
   //                         <div style="padding-top:10px">${priceContent}</div>
   //                       </div>`;
   //             },
   //          },
   dataZoom: [
      {
         // 这个地方是控制下面的滑动条。
         show: true,
         realtime: true,
         start: 0,
         end: 100,
         xAxisIndex: [0, 1],
      },
      {
         type: 'inside',
         realtime: true,
         start: 0,
         end: 100,
         xAxisIndex: [0, 1],
      },
   ],
   xAxis: [
      {
         // x轴要写两份
         type: 'category',
         name: '',
         silent: false,
         axisLine: {
            onZero: true,
            lineStyle: {
               color: '#eeeeee',
            },
         },
         splitLine: {
            show: false,
            lineStyle: {
               color: '#eeeeee',
            },
         },
         axisLabel: {
            color: '#333',
         },
         splitArea: {
            show: false,
         },
         data: [1, 2, 3, 4, 5],
      },
      {
         type: 'category',
         gridIndex: 1, // 所在的 grid 的索引，默认位于第一个 grid。
         splitLine: {
            lineStyle: {
               color: '#eeeeee',
            },
         },
         axisLine: {
            lineStyle: {
               color: '#eeeeee',
            },
         },
         nameTextStyle: {
            color: '#333',
         },
         axisLabel: {
            color: '#333',
         },
         data: [1, 2, 3, 4, 5],
      },
   ],
   yAxis: [
      {
         // y轴也是
         inverse: 0,
         splitArea: {
            show: false,
         },
         axisLabel: {
            color: '#333',
         },
         axisLine: {
            lineStyle: {
               color: '#eeeeee',
            },
         },
         splitLine: {
            lineStyle: {
               color: '#eeeeee',
            },
         },
      },
      {
         type: 'value',
         gridIndex: 1,
         splitLine: {
            lineStyle: {
               color: '#eeeeee',
            },
         },
         axisLine: {
            lineStyle: {
               color: '#eeeeee',
            },
         },
         nameTextStyle: {
            color: '#333',
         },
         axisLabel: {
            color: '#333',
         },
      },
   ],
   tooltip: {
      trigger: 'axis',
   },
   axisPointer: {
      link: [
         {
            // 表示所有 xAxisIndex 为 0、3、4 和 yAxisName 为 'someName' 的坐标轴联动。
            xAxisIndex: [0, 1],
            yAxisName: 'someName',
         },
         // {
         //    // 表示左右 xAxisId 为 'aa'、'cc' 以及所有的 angleAxis 联动。
         //    xAxisId: ['aa', 'cc'],
         //    angleAxis: 'all',
         // },
      ],
   },

   series: [
      {
         name: 'In',
         type: 'bar',
         stack: 'one',
         barMaxWidth: '60px',
         itemStyle: {
            normal: {
               color: '#2BCDF1',
            },
            emphasis: {
               barBorderWidth: 1,
               shadowBlur: 10,
               shadowOffsetX: 0,
               shadowOffsetY: 0,
               shadowColor: 'rgba(0,0,0,0.5)',
            },
         },
         data: [2, 4, 3, 7, 9],
      },
      {
         name: 'Out',
         type: 'bar',
         stack: 'one',
         itemStyle: {
            normal: {
               color: '#FF6C8C',
            },
            emphasis: {
               barBorderWidth: 1,
               shadowBlur: 10,
               shadowOffsetX: 0,
               shadowOffsetY: 0,
               shadowColor: 'rgba(0,0,0,0.5)',
            },
         },
      },
      {
         name: '',
         type: 'line',
         stack: '',
         xAxisIndex: 1,
         yAxisIndex: 1,
         lineStyle: {
            normal: {
               width: 0.5,
            },
         },
         itemStyle: {
            normal: {
               color: '#2F98F8',
            },
         },
         data: [2, 4, 3, 7, 9],
      },
   ],
};
