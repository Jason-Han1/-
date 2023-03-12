var loadData = [];
var titleArr = ['包装班', '调色班', '多彩班', '投料班', '中试班'];
var allArr = [22, 8, 11,17,12];
var chuqinArr = [22, 8, 11,17,12];

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        top: 'bottom',
        data: ['总人数','出勤人数'],
        textStyle: {//字体颜色
            color:'yellow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        
        splitLine: {
            show: true,
            lineStyle: {
              color: '#D2E6F9',
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#D2E6F9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#000'
          }
    },
    xAxis: {
        type: 'category',
        data: titleArr,
        axisLine: {
            lineStyle: {
              color: '#D2E6F9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#000'//x轴字体颜色
          }
    },
    series: [
        {
            name: '总人数',
            type: 'bar',
            barWidth: 24,
            barGap: '40%',
            data: allArr,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#8BDCFF' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#4594E8' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                normal:{//柱形图上方标题
                    label:{
                        show:true,
                        position:'top',
                        textStyle:{
                            color:'#000',
                            fontSize:16
                        }
                    },
                    barBorderRadius: [4, 24, 0, 0],
                    color: new echarts.graphic.LinearGradient(//颜色渐变
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(0,165,0)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgb(255,175,0)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(255,185,0)'
                            }
                        ]
                    )
                }
            }
        },
        {
            name: '出勤人数',
            type: 'bar',
            barWidth: 24,
            barGap: '40%',
            data: chuqinArr,
            itemStyle: {
                barBorderRadius: [4, 24, 0, 0],// [ 左上角参数1, 右上角参数2, 右下角参数3, 左下角参数4]
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#59FFB7' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#37BDFF' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                normal:{//柱形图上方标题
                    label:{
                        show:true,
                        position:'top',
                        textStyle:{
                            color:'#000',
                            fontSize:16
                        }
                    },
                barBorderRadius: [4, 24, 0, 0]//顶端的弧度
                }
            }
        }
    ]
};
