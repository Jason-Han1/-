option = {
     backgroundColor: '#1b1b1b',
    tooltip : {
        formatter: "{b} : {c}"
    },
      toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series: [
        {
            name: 'AQI',
             min:0,
            max:300,
             splitNumber:6,
            type: 'gauge',
            detail: {formatter:'{value}'},
             axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.167, '#73ff73'],[0.334, '#ffff82'],[0.5, '#ffb973'],[0.667, '#ff7373'],[1, '#af7373']]
                }
            },
             axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
              title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic',
                    color: '#fff'
                }
            },
            data: [{value: 72, name: 'AQI'}]
        }
    ]
};

