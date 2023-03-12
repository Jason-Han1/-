//有点鬼畜
   myChart.on("mousemove", function (params) { //移入分离

      myChart.dispatchAction({
         type: "pieSelect",
         dataIndex: params.dataIndex
      })
   })
   myChart.on("mouseout", function (params) { //移出返回
      setTimeout(function() {
       
      myChart.dispatchAction({
         type: "pieUnSelect",
         dataIndex: params.dataIndex
      })
   }, 100);
   })
   var option = {
       animation:false,
      series: [
         {
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            selectedOffset: 45, //饼图分离的大小
            data: [
               { value: 234, name: '联盟广告' },
               { value: 135, name: '视频广告' },
               { value: 1548, name: '搜索引擎' }
            ],
            itemStyle: {
               emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
               }
            }
         }
      ]
   };
