option = {
        color: ['#7a7efc', '#21ebdd'],
        backgroundColor: "#082d47",
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: 'rgba(0,0,0,0)'
            }
          },
          backgroundColor: "rgba(255,255,255,0.8)",
          formatter: function(e) {
            let html = "";
            e.forEach(e => {
              html += e.seriesName + ' ' + e.name + "：" + e.value + "件<br/>";
            })
            return html;
          },
          textStyle: {
            color: "#333"
          }
        },
        grid: {
          top: 35,
          left: 30,
          right: '3%',
          bottom: 35,
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            margin: 10,
            align: "center",
            fontSize: 9,
            rotate: 35,
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0a344c'
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#cbd1d5'
            }
          },
          data: ['17.01', '17.02', '17.03', '17.04', '17.05', '17.06', '17.07', '17.08', '17.09', '17.10', '17.11', '17.12']
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#cbd1d5'
            }
          },
          axisLabel: {
            fontSize: 9
          },
          splitLine: {
            lineStyle: {
              color: '#0a344c'
            }
          }
        }],
        series: [{
          name: '去年',
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 3
            }
          },
          data: [8.3, 7, 32.5, 56.6, 34.1, 14.8, 39.6, 24.1, 50.1, 32.4, 21.8, 15.7]
        }, {
          name: '今年',
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 3
            }
          },
          data: [18.3, 7, 32.5, 36.6, 24.1, 14.8, 29.6, 34.1, 40.1, 22.4, 21.8, 12.7]
        }]
      };