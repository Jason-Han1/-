var areaData = {
    colorList: [
        [81, 184, 254],
        [89, 197, 167],
        [255, 165, 93],
        [250, 130, 125]
      ],
    xAxis:  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    series: [{
        name: '移动',
        data:[120, 82, 91, 134, 190, 230, 210]
    }, {
        name: '电信',
        data:[100, 62, 81, 104, 170, 210, 200]
    }]
}

function getSeries(areaData){
    var seriesData = [];
      areaData.series.forEach(function(element, index) {
        var color = areaData.colorList[index];
        var seriesSingle = {
          name: element.name,
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 3
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')',
              borderColor: 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',0.2)',
              borderWidth: 12
            }
          },
          areaStyle: {
            normal: {
                color: 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')'
            }
        },
          data: element.data
        }
        seriesData.push(seriesSingle);
      })
      return seriesData;
}
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: areaData.xAxis,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#51b8fe',
                width: 2
            }
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#51b8fe',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#ddd'
            }
        }
    },

    series: getSeries(areaData)
};