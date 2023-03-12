option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '2%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            axisTick: { show: true },
            axisLabel: {
                interval: "auto", 
                lineHeight:22,
                fontSize:16,
                color:'#000',
                margin: 10,
                formatter: function (params) {
                  var newParamsName = '';
                  var paramsNameNumber = params.length;
                  var provideNumber = 1; //一行显示几个字
                  var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                  if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                      var tempStr = '';
                      var start = p * provideNumber;
                      var end = start + provideNumber;
                      if (p == rowNumber - 1) {
                        tempStr = params.substring(start, paramsNameNumber);
                      } else {
                        tempStr = '\xa0' + params.substring(start, end) + ' \n';
                      }
                      newParamsName += tempStr;
                    }
                  } else {
                    newParamsName = params;
                  }
                  return newParamsName;
                }
            },
             axisLine: { // 轴线
              lineStyle: {
                color: "#e0e0e0",
                width: 2,
              },
            },
            data: ['一级必达转队', '二级必达转队', '三级必达转队','一级必达转队', '二级必达转队', '三级必达转队','一级必达转队', '二级必达转队', '三级必达转队','一级必达转队', '二级必达转队', '三级必达转队'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            // 修改y轴分割线
            splitLine: {
                lineStyle: {
                    color: '#e6e6e6',
                    type: 'dashed',
                },
            },
        },
    ],
    series: [
        {
            type: 'bar',
            barWidth : 35,
            emphasis: {
                focus: 'series',
            },
            data: [250, 600, 420,250, 600, 420,250, 600, 420,250, 600, 420],
            itemStyle: {
                color: '#0091ff',
            },
        },
      
    ],
};
