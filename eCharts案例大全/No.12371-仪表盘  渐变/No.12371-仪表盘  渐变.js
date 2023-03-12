 
var color = ['#af00a9','#ffb800','#00ed03'];
 
var option = {
    backgroundColor: "#12001b",
    series: [
        {
            name: "",
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
                    color: [[1,'#fff']]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 2
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
                show: 0, 
            },
            detail: {
                 show: 0, 
            }, 
        },
        {
            name: data[0],
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
                    color: [[0.05,'#cf3'],
              [0.10,'#9f3'],
              [0.15,'#6f3'],
              [0.20,'#3f3'],
              [0.25,'#3f6'],
              [0.30,'#3f9'],
              [0.35,'#3fc'],
              [0.40,'#3ff'],
              [0.45,'#3cf'],
              [0.50,'#39f'],
              [0.55,'#36f'],
              [0.60,'#33f'],
              [0.65,'#63f'],
              [0.70,'#93f'],
              [0.75,'#c3f'],
              [0.80,'#f3f'],
              [0.85,'#f3c'],
              [0.90,'#f39'],
              [0.95,'#f36'],
              [1,'#fff']]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 2
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
                show: 0,
                length: '70%',
                width: 2
            },
            detail: {
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 2,
                offsetCenter: [0, '0%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE 
                    color: '#fff',
                    fontSize: 30,
                },
                formatter: '{value}%'
            },
            data: [{
                name: "",
                value:50
            }]
        }
      
    ]
};