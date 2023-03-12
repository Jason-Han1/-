option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',

            textStyle: {
              color: '#05294D',
            },
          },
          backgroundColor: '#05294D',
          borderColor: '#135469',
          borderWidth: 2,
          padding: [20, 20, 20, 20],
        },
        grid: {
          borderWidth: 0,
          top: '15%',
          left: '10%',
          right:'7%',
          bottom: '15%',
          textStyle: {
            color: '#fff',
          },
        },
        legend: {
          show:false,
          bottom: '-3%',
          right: '40%',
          textStyle: {
            fontSize: '12px',
            fontFamily: 'MicrosoftYaHeiUI',
            color: '#FFFFFF',
          },
          itemWidth: 12,
          itemHeight: 12,
          data: [
            {
              name: '周转量',
            },
            {
              name: '趋势',
            },
          ],
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.5)',
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: '#32ABCC',
              fontSize: 12,
            },
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                width: 0.3
              }
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: '#32ABCC',
              fontSize: 12,
              formatter: '{value} %'
            },
            splitArea: {
              show: false,
            },
          },
        ],
        series: [
          {//柱底圆片
            name: "整体输出RPS趋势",
            yAxisIndex: 0,
            type: "pictorialBar",
            symbolSize: [20, 10],//调整截面形状
            symbolOffset: [0, 5],
            z: 12,
            tooltip: {
              show: true
            },
            itemStyle: {
              "normal": {
               color:{
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#1BD4F9' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#1F79E2' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                },
              }
            },
            data: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30],
          },
          //柱体
          {
            name: '整体输出RPS趋势',
            type: 'bar',
            barWidth: 20,
            yAxisIndex: 0,
            barGap: '0%',
            tooltip: {
              show: false
            },
            itemStyle: {
              "normal": {
               color:{
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#057DFE' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#02D7EA' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                },
              }
            },
            data: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30],
          },
          //柱顶圆片
          {
            name: "整体输出RPS趋势",
            type: "pictorialBar",
            yAxisIndex: 0,
            symbolSize: [20, 10],//调整截面形状
            symbolOffset: [0, -5],
            z: 12,
            tooltip: {
              show: false
            },
            symbolPosition: "end",
            "itemStyle": {
              "normal": {
                color:{
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#50A7FF' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#02D6EA' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                },
              }
            },
            data: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30],
          },
        ],
      }