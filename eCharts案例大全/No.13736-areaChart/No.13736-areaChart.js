var rawData = [{
    "schoolName": "人大附中",
    "distrib": [
      5,
      4,
      5,
      20,
      12,
      18,
      4,
      4,
      3,
      17,
      17,
      12,
      9,
      11,
      4,
      2,
      7,
      13,
      0,
      15,
      10,
      0,
      17,
      14,
      6,
      7,
      15,
      5,
      14,
      18,
      20,
      11,
      5,
      7,
      8,
      9,
      7,
      5,
      15,
      7,
      4,
      7,
      7,
      18,
      8,
      16,
      14,
      13,
      0,
      17,
      20,
      13,
      11,
      15,
      9,
      4,
      8,
      10,
      19,
      0,
      4,
      7,
      2,
      3,
      14,
      11,
      9,
      6,
      5,
      8,
      7,
      6,
      0,
      1,
      8,
      18,
      5,
      11,
      12,
      12,
      17,
      2,
      11,
      6,
      19,
      0,
      3,
      1,
      7,
      9,
      10,
      12,
      5,
      16,
      8,
      2,
      0,
      14,
      9,
      105
    ]
  },
  {
    "schoolName": "北理工附中",
    "distrib": [
      7,
      7,
      1,
      14,
      17,
      15,
      12,
      6,
      8,
      17,
      14,
      5,
      8,
      12,
      18,
      1,
      12,
      5,
      5,
      5,
      9,
      7,
      11,
      2,
      13,
      12,
      3,
      8,
      14,
      17,
      6,
      17,
      18,
      14,
      20,
      3,
      11,
      12,
      11,
      12,
      0,
      12,
      11,
      15,
      16,
      8,
      8,
      6,
      2,
      9,
      4,
      16,
      8,
      4,
      12,
      13,
      2,
      8,
      19,
      16,
      0,
      17,
      0,
      13,
      9,
      9,
      6,
      0,
      7,
      8,
      17,
      3,
      3,
      15,
      14,
      20,
      11,
      14,
      10,
      20,
      9,
      12,
      13,
      10,
      9,
      0,
      4,
      4,
      3,
      10,
      5,
      13,
      13,
      5,
      15,
      9,
      1,
      13,
      11,
      47
    ]
  }]
var lineSeries = rawData.map(({schoolName, distrib}) => {
          return {
            name: schoolName,
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: distrib,
            smooth: true,
            zlevel: 1
          }
        })

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: []
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          inverse: true,
          data: (() => {
            let i = -1
            let arr = []
            while (++i < 100) {
              arr[i] = i + 1
            }

            return arr
          })(),
          axisTick: {
            interval: 10
          },
          axisLabel: {
            interval: 10
          },
          zlevel: 0
        },
        {
          type: 'category',
          data: [{
              value: 'A',
              textStyle: {
                  width: 20
              }
          }],
          position: 'top',
          zlevel: 1
        }
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          max: 100,
          splitNumber: 10
        }
      ],
      series:[
        ...lineSeries,
        {
            type: 'bar',
            xAxisIndex: 1,
            data: [105, 105, 105, 105, 105],
            zlevel: 0,
            barGap: 0,
            barCategoryGap: 0
            
        }
      ]
};