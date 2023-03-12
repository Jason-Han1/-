app.title = '极坐标系下的堆叠柱状图';

option = {
    angleAxis: {
        type: 'category',
        data: ['五险一金', '绩效奖金', '年底双薪',
        '带薪年假', '员工旅游', '补充医疗', '定期体检'],
        
    },
    radiusAxis: {
            axisTick: {  //刻度
                show: false
            },
            axisLabel: {  //刻度
                show: false
            },
            pointer: {  //雷达图指针
                show: false
            },
            axisLine: {
                show: false, // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    width: 26,
                    shadowColor: '#e9e9e9'
                }
            },
            splitLine: {  //分割线样式
                show: false
            },
    },
    polar: {
        shape: 'circle',
        radius: 120
    },
    series: [{
            type: 'line',
            data: [1, 2, 3, 4, 3, 5, 3, 1],
            clipOverflow: false,
            coordinateSystem: 'polar',
            smooth: true,
            symbol: 'circle',
            lineStyle: {
               normal: {
                 opacity: 0.9,
                 color: new echarts.graphic.RadialGradient(0.3, 0.2, 1, [
                 {
                     color: '#E5F1FD',
                     offset: 1
                 },
                 {
                     color: '#C9E3FB',
                     offset: .4
                  }
               ])
            }
            },
            
            areaStyle: {
             normal: {
                 opacity: 0.9,
                 color: new echarts.graphic.RadialGradient(0.3, 0.2, 1, [
                 {
                     color: '#E5F1FD',
                     offset: 0
                 },
                 {
                     color: '#C9E3FB',
                     offset: .4
                  }
               ])
            }
            },
        }],
    legend: {
        show: true,
        data: ['A']
    }
};
