option = {
    legend: {
        data: ['平均值延误时间1', '平均值延误时间2', '记录数1', '记录数2']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    yAxis: {
        type: 'value',
    },
    xAxis: [{
            type: 'category',
            data: ['北京区管-（军事活动|0403）', 
                   '北京区管-（航班时刻安排|0301）', 
                   '郑州区管-（军事活动|0403）', 
                   '重庆区管-（军事活动|0403）',
                   '上海区管-（军事活动|0403）',
                   '上海区管-（航班时刻安排|0301）',
                   ],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel : {//坐标轴刻度标签的相关设置。
            interval:0,
                 formatter:function(val){
                    return val.split("-").join("\n");
            }
            }
        }
    ],
    dataZoom: [
      {
        type: 'inside',
        show: true,
        start: 0,
        end: 50,
        // bottom: 20,
        // borderColor: '#2a2c30 ',
        xAxisIndex: 0,
      }
  ],
    series: [
        {
            name: '平均值延误时间',
            type: 'bar',
            barGap: '0',
            barWidth: 15,
            data: [5, 51, 51, 20, 35, 58, 23],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
            },
            itemStyle: {
              normal: {
                // barBorderRadius: 30,
                color: 'green', // 柱子颜色
              },
            },
        }, 
         {
            name: '记录数',
            type: 'bar',
            barWidth: 15,
            data: [10, 10, 30, 51, 15, 45,36],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
            },
            itemStyle: {
              normal: {
                // barBorderRadius: 30,
                color: 'rgba(103,92,230, 0.8)', // 柱子颜色
              },
            },
        }

    ]
};