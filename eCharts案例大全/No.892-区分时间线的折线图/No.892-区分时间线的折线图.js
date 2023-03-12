let cutYDataIdx = 4;
const yDataFlow = [10,220,35,400,50,600,700,800,900,1000];
const yDataSaturation = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];
let xData = [1,2,3,4,5,6,7,8,9];
option = {
        backgroundColor: '#000912',
        color: ['#6DD400', '#32C5FF', '#E02020',
          '#D6F700', '#44D7B6', '#8563FF', '#B620E0'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            textStyle: {
              color: '#fff'
            }
          },
        },
        grid: {
          left: 50,
          right: 45,
          top: 40,
          bottom: 30
        },
        calculable: true,
        visualMap: [
          {
            type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 0,
            // 阴影
            pieces: [
              {
                gt: 0,
                lt: cutYDataIdx,
                color: 'rgba(117,219,110,0.8)'
              },
              {
                gt: cutYDataIdx,
                lt: xData.length,
                color: 'rgba(117,219,110,0.3)'
              }
            ]
          },
          {
            type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 1,
            // 阴影
            pieces: [
              {
                gt: 0,
                lt: cutYDataIdx,
                color: 'rgba(103,117,231,0.8)'
              },
              {
                gt: cutYDataIdx,
                lt: xData.length,
                color: 'rgba(103,117,231,0.3)'
              }
            ]
          }
        ],
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#90979c'
              },
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            // data: xData
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} %'
            },
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#90979c'
              },
              show: false,
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
          },
          {
            type: 'value',
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#90979c'
              },
              show: false,
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            },
          },
        ],
        series: [
          {
            name: '整体饱和度',
            type: 'line',
            data: yDataSaturation,
            smooth: true, // 圆滑过渡
            symbolSize: 0, // 去掉节点的显示
            // 阴影
            areaStyle: {},
          },
          {
            name: '交通流率',
            type: 'line',
            yAxisIndex: 1,
            data: yDataFlow,
            symbolSize: 0,
            smooth: true,
            areaStyle: {},
          }
        ]
      };
