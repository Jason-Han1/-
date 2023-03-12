option = {
    title: {
        text: '流失用户金币分布',
        left: '50%',
        textAlign: 'center'
    },
    color: ['#95c7ff'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: null // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)',
        formatter: '<div style="text-align: center;">流失用户金币分布</div>{b}  :  {c}'
    },
    grid: {
        top: '10%'
    },
    xAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        }
    }],
    yAxis: [{
        type: 'category',
        boundaryGap: true,
        splitLine: {
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        data: ['￥0~2', '￥2~10', '￥11~20', '￥20~40', '￥40~100', '￥100~200', '￥200~600','￥600~1000','￥1000+']
    }],
    series: [{
        name: '人数',
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        label: {
            normal: {
                show: true,
                position: 'right'
            }
        },
        data: [12882, 11882, 9800, 6800, 4000, 3600, 3500,600,199]
    }]
};

var ser = option.series[0].data
var sum = 43903
var rate = []
for (var i = 0, len = ser.length; i<len; i++){
    rate.push((ser[i]/sum).toFixed(4))
}

option.series.push({
            name:'百分比',
            type:'bar',
            stack: '总量',
            itemStyle : { 
              normal: {
                label : {
                  show: true, 
                  position: [60,10],
                  textStyle:{color:'95c7ff'},
                  formatter:function(v){
                    return (v.value*100).toFixed(2)+'%';
                  }
                 }
              }
            },
            data:rate
        });

myChart.setOption(option);      
