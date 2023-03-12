
 var xList= ["2020-09-01", "2020-09-02", "2020-09-03", "2020-09-04", "2020-09-06", "2020-09-07", "2020-09-08", "2020-09-09", "2020-09-10", "2020-09-11", "2020-09-14"]
 var  yList= [100, 56, 196, 140, 1, 234, 298, 143, 362, 187, 278]
option ={
      tooltip: {
        trigger: 'axis',
        // axisPointer: {
        //     type: 'cross',
        //     label: {
        //         backgroundColor: '#6a7985',
        //     },
        // },
      },
 backgroundColor: '#0A2E5D',
      grid: {
        top: 10,
        left: 30,
        right: 30,
        bottom: 30,
        containLabel: true,
      },

      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {

              color: '#00D2FF'
            },
          },

          axisLabel: {
            fontSize: 12,
            color: '#FFFFFF'

          },
          data: xList,
          splitLine: {
            show: false,

          },

        },
      ],
      yAxis: [
        {
          type: 'value',
          // min: (value) => {
          //   return value.min - 10;
          // },
          axisLine: {
            lineStyle: {
              // color: '#B5B5B5',
              fontSize: 12,
            },
          },
          axisLabel: {
            fontSize: 12,
            color: '#FFFFFF'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#284D56',

            },
          },
        },
      ],
      series: [
        {
          name: '事件数',
          type: 'line',
          smooth: true,
          label: {
            normal: {
              show: false,
              position: 'top',
            },
          },

          itemStyle: {
            color: '#23b8d5',
          },
          lineStyle: {
            color: '#CCF6FF',
            width: 3

          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#00FFC9', // 0% 处的颜色
              }, {
                offset: 1, color: '#00EBFF00', // 100% 处的颜色
              }],
              globalCoord: false, // 缺省为 false
            },
          },

          data: yList,
        },
      ],
    };