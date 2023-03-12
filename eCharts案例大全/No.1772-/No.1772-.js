
let yLabel = ['减水剂', '钢绞线', '水泥', '钢材']
let yData = [5, 4,3,7]
let bgData = []
for(let i in yData){
    bgData.push(11)
}
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
      // 图例
        legend: {
          // legend 不好做 放弃
          itemGap: 20,
          bottom: 10,
          left: 'center',
          itemHeight: 14,
          itemWidth:14,
          data: [
            {
              name: '人数',
              icon: 'roundRect',
              itemStyle: {
                color: 'red',
              },
              textStyle: {
                fontSize: 18,
                color: '#000000',
              }
            },
            {
              name: '背景',
              icon: 'roundRect',
              itemStyle: {
                color: '#4890ed',
              },
              textStyle: {
                fontSize: 18,
                color: '#000000',
              }
            },
          ],
          textStyle: {
            color: '#fff',
          },
        },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName + ' : ' + params[0].value + ' <br/>'
        }
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        // show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            margin:15,
            textStyle: {
                color: '#fff',
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: yLabel
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: false,
        axisLabel: {
            textStyle: {
                color: '#9aeced',
                fontSize: '12'
            },
        },
        data: yData
    }],
    series: [{
            name: '人数',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0,30,30,0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#52d8da'
                    }, {
                        offset: 1,
                        color: '#57dcde'
                    }]),
                    shadowBlur:0,
                    shadowColor:'rgba(87,220,222,0.7)',
                },
            },
            barWidth: 20,
            data: yData
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: bgData,
            itemStyle: {
                normal: {
                    color: '#fedf19',
                    barBorderRadius: [0,30,30,0],
                }
            },
        },
    ]
};