option = {
        title: {
          text: '本月拥堵情况统计表',
          top: "16%",
          left: "center",
          textStyle: {
            color: '#333',
            fontSize: '23'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['10级拥堵', '9级拥堵', '8级拥堵', '7级拥堵'],
          top: "26%",
          textStyle: {
            color: '#666'
          },
          itemHeight: '6',
          icon: 'rect',
          itemGap: 20
        },
        color: ['#e04e46', '#dc9470', '#dab87e', '#ecee98'],
        grid: {
          left: '3%',
          right: '6%',
          bottom: '13%',
          top: '35%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1-3', '4-6', '7-9', '10,12', '13,15', '16,18', '19,21'],
          name: '(日)',
          axisLabel: {
            color: '#5e6877'
          },
          axisLine: {
            lineStyle: { color: '#5e6877' }
          },
          axisTick: {
            lineStyle: { color: '#5e6877' } 
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#5e6877'
          },
          name: '(数)',
          minInterval: 1,
          axisLine: {
            lineStyle: { color: '#5e6877' }
          },
          axisTick: {
            lineStyle: { color: '#5e6877' }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#5e6877'],
              width: 1,
              type: 'solid'
            }
          }
        },
        series: [
          {
            name: '10级拥堵',
            type: 'line',
            stack: '10级拥堵',
            smooth: true,
            data: [11, 123, 111, 123, 111, 123, 111, 123, 111, 123, 111, 123, 111]
          },
          {
            name: '9级拥堵',
            type: 'line',
            stack: '9级拥堵',
            smooth: true,
            data: [3, 243, 1, 33, 7, 8, 232, 113, 1, 243, 1, 243, 1]
          },
          {
            name: '8级拥堵',
            type: 'line',
            stack: '8级拥堵',
            smooth: true,
            data: [3, 523, 12, 523, 12, 523, 12, 523, 12, 523, 12]
          },
          {
            name: '7级拥堵',
            type: 'line',
            stack: '8级拥堵',
            smooth: true,
            data: [3, 523, 233, 1, 55, 2, 523, 12]
          },
        ]
}