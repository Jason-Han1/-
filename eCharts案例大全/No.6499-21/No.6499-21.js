var path = "path://M408 350c0-9.941-8.059-18-18-18s-18 8.059-18 18v246h-0.098c-1.274 16.229-14.847 29-31.402 29h-3c-17.397 0-31.5-14.103-31.5-31.5V254c0-28.167 22.833-51 51-51h310c28.167 0 51 22.833 51 51v339.5c0 17.397-14.103 31.5-31.5 31.5-16.555 0-30.128-12.771-31.402-29H655V350c0-9.83-7.88-17.82-17.67-17.997L637 332c-9.941 0-18 8.059-18 18v601.5c0 26.234-21.266 47.5-47.5 47.5S524 977.734 524 951.5V596h-21v355.5c0 26.234-21.266 47.5-47.5 47.5S408 977.734 408 951.5zM512.5 25c44.459 0 80.5 36.041 80.5 80.5S556.959 186 512.5 186 432 149.959 432 105.5 468.041 25 512.5 25z"
option = {
    title: {
        text: '客运量',
        left: '80%',
        top: '75%',
    },
    dataset: {
        source: [
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [220, 182, 191, 234, 290, 330, 310],
          [120, 82, 91, 34, 190, 230, 210],
          [220, 182, 191, 234, 290, 330, 310],
          [20, 82, 291, 134, 95, 38, 110]  
        ]
    },
    legend: {
      orient: 'vertical',
      left: '80%',
      top: '78.5%',
      textStyle: {
         fontWeight: 'bold'
      }
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        name: '线路',
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        itemStyle: {
         color: 'orange'
        },
        barWidth: 10,
        seriesLayoutBy: 'row'
        
    },
    {
        name: '2016日均',
        type: 'scatter',
        symbol: path,
        symbolSize: 20,
        symbolKeepAspect: true,
        itemStyle: {
         color: 'green'
        },
        seriesLayoutBy: 'row'
    },
        {
        name: '2017日均',
        type: 'scatter',
        symbol: path,
        symbolSize: 20,
        symbolKeepAspect: true,
        itemStyle: {
         color: 'red'
        },
        seriesLayoutBy: 'row'
    },
    {
        name: '2017工作日日均',
        type: 'scatter',
        symbol: path,
        symbolSize: 20,
        symbolKeepAspect: true,
        itemStyle: {
         color: 'blue'
        },
        seriesLayoutBy: 'row'
    }
    ]
}