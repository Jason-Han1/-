var yData1 = [100, 90,80,110];
var yData2 = [150,160,120,150];
var name1 = "XX";
var name2 = "XXX";
option = {
    backgroundColor:'#101736',
    tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            label:{
            }
          },
          formatter: function(params) {
            var tipString = params[0].axisValue + "<br />";
            var key = "value";
            params.sort(function(obj1, obj2) {
                var val1 = obj1[key];
                var val2 = obj2[key];
                if (val1 < val2) {
                    return 1;
                } else if (val1 > val2) {
                    return -1;
                } else {
                    return 0;
                }
            })
            var indexColor;
            for (var i = 0, length = params.length; i < length; i++) {
                if (params[i].componentSubType == 'bar') {
                    indexColor = params[i + 1].color;
                    tipString += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:' + indexColor + '"></span>';
                    tipString += '<span data-type ="lineTip" data-val=' + params[i].value + '>' + params[i].seriesName + '：' + params[i].value + '</span><br />';
                }
            }
            return tipString;
        }
    },
    title: {
            text: "板块收支占比分析",
            x: "4%",
            width: 173,
            height: 163,
            fontSize: 22,
            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16',
    
            },
        },
    legend: {
            orient:'horizontal',
            icon: 'squareRatio', //图例形状
            selectedMode: false,
            bottom:'90%',
            right:'30%',
            itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
            itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
            itemGap: 80, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
                fontSize: 14,
                color: '#fff',
            }
        },
    grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
    animation: false,
    xAxis: {
          type: 'category',
          data: ['总公司','一分','二分','三分'],
          axisLine: {
            lineStyle: {
              color: 'white'

            }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
        },
    yAxis: {
          type: 'value',
          max:'200',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type:'dashed',
              color: 'rgba(255,255,255,0.3)'
            }
          },
          axisLabel: {}
        },
    series: [{
            name: name1,
            type: 'bar',
            itemStyle: {
                normal: {
                    opacity: .9,
                    
                }
            },
            barWidth: "30",
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(192,0,255,0.6)'
                }, {
                    offset: 1,
                    color: 'rgba(192,0,255,0.2)'
                }]),
            data: yData1
        },
        {
            name: name1,
            type: 'pictorialBar',
            symbol: "diamond",
            symbolSize: [30, 8],
            symbolOffset: [-20, 0],
            z: 12,
            color: "rgba(192,0,255,0.6)",
            data: yData1
        },
        {
            name: name1,
            type: 'pictorialBar',
            symbol: "diamond",
            symbolSize: [30, 8],
            symbolOffset: [-20, -3],
            symbolPosition: 'end',
            z: 12,
            color: "rgba(192,0,255,1)",
            data: yData1
        },
        {
            name: name2,
            type: 'bar',
            itemStyle: {
                normal: {
                    opacity: .9,
                    
                }
            },
            barWidth: "30",
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,215,255,0.6)'
                }, {
                    offset: 1,
                    color: 'rgba(0,215,255,0.2)'
                }]),
            data: yData2
        },
        {
            name: name2,
            type: 'pictorialBar',
            symbol: "diamond",
            symbolSize: [30, 8],
            symbolOffset: [20, 0],
            color: "rgba(0,215,255,0.6)",
            z: 12,
            data: yData2
        },
        {
            name: name2,
            type: 'pictorialBar',
            symbol: "diamond",
            symbolSize: [30, 8],
            symbolOffset: [20, -3],
            symbolPosition: 'end',
            z: 12,
            color: "rgba(0,215,255,0.6)",
            data: yData2
        }
    ]
}