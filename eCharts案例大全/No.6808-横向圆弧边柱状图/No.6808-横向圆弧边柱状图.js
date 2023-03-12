var barColor=['#8F6EE8','#7F6EE8','#6E74E8','#6A8FF1','#62A4F0','#6AC5F1','#62D4E3','#73DFD9']
personFloorName=['F1','F2','F3','F4','F5']
personArr=[30,40,10,3,26]
option = {
    title: {
        text: '横向圆弧边柱状图'
    },
   grid: {
          left: '5%',
          right: '15%',
          bottom: '0',
          top: '5%',
          containLabel: true
        },
        // tooltip: {
        //   trigger: 'item',
        //   formatter: type=='person'?'{c}人':'{c}件'
        // },
        xAxis: [{
            show: false,
          },
          //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
          {
            show: false,
          }
        ],
        yAxis: {
          type: 'category',
          axisLabel: {
            show: true,
            color: '#333',
            fontSize: '12'
          },
          itemStyle: {
          
          },
          axisTick: {
            show: false, //隐藏Y轴刻度
          },
          axisLine: {
            show: false, //隐藏Y轴线段
          },
          data: personFloorName,
        },
        series: [
          //背景色--------------------我是分割线君------------------------------//
          // {
          //   show: true,
          //   type: 'bar',
          //   barGap: '-100%',
          //   barWidth: '8px', //统计条宽度 
          //   silent :true,
          //   itemStyle: {
          //     normal: {
          //       barBorderRadius: 20,
          //       color: '#EEF1F7'
          //     }
          //   },
          //   z: 1,
          //   data: grayBar,
          // },
          //蓝条--------------------我是分割线君------------------------------//
          {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '8px', //统计条宽度
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: function(params) {
                  var idx=params.dataIndex;
                    return idx>=8?barColor[idx%8]:barColor[idx]
                },
              },
            },
            max: 1,
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12,
                  color: '#333', 
                },
                position: 'right',
                formatter: '{c}'
              },
            },
            labelLine: {
              show: false,
            },
            z: 2,
            data: personArr,
          },

        ]
};