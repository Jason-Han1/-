const xKeys = ["B-0", "B-1", "B-2", "B-0", "B-1", "B-2", "B-3", "B-4", "B-0", "B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7", "B-8"]
const splitIndex = [3, 8, 17];
const xGroup = ['', 'GROUP_1','','','','GROUP_2','','', '','','','','GROUP_2','','','','']
const data = [{
        OEE: 74.1,
        HISMAX: 36.8,
        TREND: 1
    },
    {
        OEE: 83.2,
        HISMAX: 50.8,
        TREND: 0
    },
    {
        OEE: 54.9,
        HISMAX: 112.2,
        TREND: 0
    },
    {
        OEE: 48.3,
        HISMAX: 68.5,
        TREND: 0
    },
    {
        OEE: 93.9,
        HISMAX: 2.8,
        TREND: 0
    },
    {
        OEE: 14.6,
        HISMAX: 98.7,
        TREND: 0
    },
    {
        OEE: 49.7,
        HISMAX: 67.9,
        TREND: 0
    },
    {
        OEE: 46.5,
        HISMAX: 62.6,
        TREND: 1
    },
    {
        OEE: 49.2,
        HISMAX: 36.5,
        TREND: 1
    },
    {
        OEE: 53.9,
        HISMAX: 67.4,
        TREND: 1
    },
    {
        OEE: 81.7,
        HISMAX: 13.4,
        TREND: 1
    },
    {
        OEE: 48.8,
        HISMAX: 68.5,
        TREND: 0
    },
    {
        OEE: 72,
        HISMAX: 22.7,
        TREND: 1
    },
    {
        OEE: 69.9,
        HISMAX: 63.4,
        TREND: 0
    },
    {
        OEE: 44.9,
        HISMAX: 41.7,
        TREND: 1
    },
    {
        OEE: 58.1,
        HISMAX: 83.6,
        TREND: 1
    },
    {
        OEE: 91.4,
        HISMAX: 68.6,
        TREND: 0
    }
]
option = {
    legend: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      title: {
        text: 'MDL',
        subtext: 'desc',
      },
      grid: {
        bottom: '12%',
        containLabel: true
      },
     xAxis: [
        {
          type: 'category',
          gridIndex: 0,
          data: xKeys,
          axisLine: {
            lineStyle: {
              color: '#000'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#000'
            }
          },
          zlevel: 2
        },
        {
          type: 'category',
          data: xGroup,
          position: 'bottom',

          axisLine: {
            onZero: false,
            show: false
          },
          axisLabel: {
            margin: -15,
            interval: (index, value) => {
              if (!value) return false;
              return true;
            },
          },
          axisTick: {
            length: 40,
            inside: true,
            interval: (index, value) => {
              if (index === 0) {
                return true;
              }
              if (splitIndex.indexOf(index) >= 0) {
                return true
              }
              if (data.length === index) {
                return true;
              }
              return false;
            },
            lineStyle: {
              color: '#000',
              fontSize: '14px'
            }
          },
          offset: 40,
          minorSplitLine: {
            show: true,
            length: 10,
          },

          zlevel: 1
        }
      ],
     yAxis: [{
        type: 'value',
      }],
    series: [
        {
          type: 'bar',
          data: data.map(item => item.OEE),
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#000'
            }
          },
          // xAxisIndex: 0,
          // yAxisIndex: 0
        },
      ]
};