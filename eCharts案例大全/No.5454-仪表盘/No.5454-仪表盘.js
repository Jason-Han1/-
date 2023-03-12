 

 
var option = {
    series: 
        {
            type: 'gauge',
            splitNumber: 10, //刻度数量
            min: 0,
            max: 100,
            radius: '80%', //图表尺寸
            center:['50%','50%'],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [[0,'#E02020'],
                            [0.3,'#E02020'],
                            [0.3, '#1683F2'],
                            [0.5, '#1683F2'],
                            [0.8, '#1683F2'],
                             [1,'#1683F3 ']]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 4
                },
                length: 20,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                //show: 0,
                length: '70%',
                width: 4
            },
            detail: {
                //borderColor: '#fff',
                //shadowColor: '#fff', //默认透明
                //shadowBlur: 2,
                offsetCenter: [0, '80%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE 
                    color: '#fff',
                    fontSize: 30,
                },
                formatter: '{value}%'
            },
            data: [10]
        }
      
};