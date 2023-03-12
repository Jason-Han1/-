var data = [
    { name: '功能1', value: 91 },
    { name: '功能2', value: 70 },
    { name: '功能3', value: 60 },
    { name: '功能4', value: 20 }
]

option = {
    backgroundColor: "#041730",
    // tooltip: {},
    xAxis: {
        splitLine: {
          show: false
        },
        // offset: 10,
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        data: data,
        inverse: true,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#B3D6FF',
          formatter: function(value, index) {
              var failureLevel = 'c'
              // TODO 此处可根据需要调整显示样式  
              if (index === 0) {
                  failureLevel = 'a'
              }
              if (index === 1) {
                  failureLevel = 'b'
              }
              return `{${failureLevel}|${value}}    ${data[index].name}`
          },
          rich: {
              a: { color: '#FB4848' }, // 严重 红色
              b: { color: '#FFB977' }, // 一般 黄色
              c: { color: '#7094CF' }  // 正常 蓝色
          }
        },
        position: 'right'
    },
    series: [
        {
        tooltip: {
            show: false
        },
        type: "pictorialBar",
        symbol: "rect",
        symbolRepeat: true,
        symbolMargin: "5%",
        symbolClip: true,
        itemStyle: {
            color: '#8AA7D8'
        },
        symbolSize: ['14', '3'],
        data: [91, 20, 60, 70],
        z: 10,
        legendHoverLink: false
    },
    {
        tooltip: {
            show: false
        },
        type: "pictorialBar",
        symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAAFCAYAAABcpODQAAAAZUlEQVRYR2OsX3WFje87s8I/Vgbh0ijN46P80fAYTQ/0yw+MvQuvq41mvtHCZ7TwHZjKh7F72XXL0cAfmMAfrWnoV9MM1pYdIwMDA8NgddxozTxaMw/3yoFxNPON9vlGa+KBq4kB1aCQz0XyyW4AAAAASUVORK5CYII=",
        symbolRepeat: false,
        symbolClip: true,
        symbolSize: ['100%', '5'],
        data: [100, 100, 100, 100], //TODO 此处需要根据实际数据修改最大值
        z: 9,
        legendHoverLink: false
    }]
};
