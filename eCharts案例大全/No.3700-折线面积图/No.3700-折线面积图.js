option = {
    legend: {
      show: true,
      symbolSize: 30,
      textStyle: {
          fontSize: 40
      }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [ '7日', '8日', '9日', '10日', '11日', '12日', '13日'],
        axisLabel: {
            fontSize: 32
        }
    },
    yAxis: {
        type: 'value',
        show: false,
        axisLabel: {
            fontSize: 20
        }
    },
    series: [{
        name:'公益服务',
        data: [890,820, 932, 901, 934, 1290, 1330, 1320, 850,920],
        type: 'line',
        areaStyle: {},
        //smooth:true
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 20,
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#6c50f3',
                    fontSize: 24
                }
            }
    },
    {
        name:'服务中心工作',
        data: [500,620, 632, 801, 634, 990, 330, 520, 650,620],
        type: 'line',
        areaStyle: {},
        //smooth:true
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 20,
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#6c50f3',
                    fontSize: 24
                }
            }
    },]
};