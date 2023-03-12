var colors = ['#a5a5a5','#ecff44','#00ffaa','#0085ff']
option = {
   
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
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
        splitLine: {show: false},
        axisLine:{show:false},
         axisTick: {
      show: false
    },
        data: ['初期库存', '本期出', '本期入', '期末库存']
    },
    yAxis: {
        show:false,
        type: 'value',
        splitLine: {show: false},
        label:{show:false}
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 13838, 13834, 0]
        },
        {
            name: '库存',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
             itemStyle: {
                color: function (param) {
                    // console.log(param.dataIndex)
                    return colors[param.dataIndex];
                }
            },
            data: [16398, 2564, 4538, 18372]
        }
    ]
};