var hours =['0时', '1时', '2时', '3时', '4时', '5时', '6时',
        '7时', '8时', '9时','10时','11时',
        '12时', '13时', '14时', '15时', '16时', '17时',
        '18时', '19时', '20时', '21时', '22时', '23时']
var days = ['周一', '周二', '周三',
        '周四', '周五', '周六', '周日'];
var arr=[
    [123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12],
    [123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12],
    [123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12],
    [123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12],
    [123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12],
    [123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12],
    [123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12,123,123,12,3,123,12]
    ]
option = {
    backgroundColor:'#fff',
    title: [],
    xAxis: [],
    grid: [],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // type: 'shadow'
        }
    },
    yAxis:[],
    series:[]
};

for(var i=0;i<days.length;i++){
    option.title.push({
      textBaseline: 'middle',
        top: (i + 0.6) * 100 / 7 + '%',
        text: days[i]
    })
    option.xAxis.push({
        gridIndex:i,
        type: 'category',
        data: hours,
        axisLabel: {
            color:'#000',
            interval: 0
        }
    })
    option.grid.push({
        top:(i * 100 / 7 + 5) + '%',
        height:30
    })
    option.yAxis.push({
        gridIndex:i,
        show:false,
        type: 'value',
        axisTick:{       //y轴刻度线
          show:false
        },
        splitLine: {     //网格线
          show: false
        },
        axisLine:{       //y轴
          show:false
        }
    })
    option.series.push({
        xAxisIndex: i,//使用x轴的index-0，y轴的index-0
        yAxisIndex: i,
        data: arr[i],
        type: 'bar',
    })
}
