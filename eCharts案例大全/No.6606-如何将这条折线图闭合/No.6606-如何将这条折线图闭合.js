option = {
       legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: true
        },  
        xAxis: {
            type: 'category',
            name: '输出端扭矩(Nm)',
        },
        yAxis: {
            type: 'value',
            name: '输出端角度(°)',
        },
        series: [
          {
            // data: this.state.allData,
            data: [
              [1,-3],
              [2, -2],
              [3, -1],
              [4, 0],
              [5, 1],
              [6, 2],
              [7, 3],
              // [7, 2.8],
              [6.1, 1.8],
              [5.2, 0.9],
              [4.3, -0.8],
              [3.2, -1.2],
              [2.1,-2.2],
              [1.1, -3]
            ],
            type: 'line',
            smooth: true,
          }
      ]
};