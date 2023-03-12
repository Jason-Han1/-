const dataY = ['4月', '5月', '6月', '7月', '8月', '9月']
const data = [7536, 13236, 18236, 5754, 15526, 14526]
let constData = []
      const max = Math.max(...data)
      for (let i = 0; i < data.length; i++) {
        constData.push(max)
      }

option = {
    tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: '{b}:  {c}次'
        },
        grid: {
          //左侧文字
          containLabel: true,
          left: 0,
          right: 15,
          bottom: 0
        },
        // X轴坐标不显示设置
        xAxis: {
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            fontSize: 32,
            fontWeight: 400,
            color: '#ccc',
            margin: 22,
            formatter: (value, index) => {
              return `${value} {rank|${data[index]}} 次`
            },
            rich: {
              rank: {
                color: '#0FBADE',
                fontSize: 32,
              },
            },
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: dataY
        },
        series: [
          {
            type: 'bar',
            barWidth: '50%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [
                      {offset: 0, color: 'rgba(64,193,230,0.04)'},                   //柱图渐变色
                      {offset: 1, color: '#74E2F4'},                   //柱图渐变色
                    ]
                ),
              }
            },
            label: {
              show: false,
              position: 'insideRight'
            },
            data: data
          },
          {
            type: 'bar',
            barWidth: '50%',
            barGap:'-100%',
            itemStyle: {
              opacity: 0.1,
              color: '#40C1E6'
            },
            data: constData
          }
        ]
};