app.title = '堆叠柱状图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title:{
        text:'岩爆监测预警分级比例图',
        show:true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['引水发电标','泄洪标']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Ⅰ级',
            type:'bar',
            data:[320, 332],
            itemStyle:{
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#69B9ff' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: '#32468e' // 100% 处的颜色
                  }], false),
                  barBorderRadius: [60, 60, 0, 0]
                }
            }
        },
        {
            name:'Ⅱ级',
            type:'bar',
            stack: '广告',
            data:[120, 132],
            itemStyle:{
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#ffebc5' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: '#ffd945' // 100% 处的颜色
                  }], false),
                  barBorderRadius: [60, 60, 0, 0]
                }
            }
        },
        {
            name:'Ⅲ级',
            type:'bar',
            data:[862, 1018],
            itemStyle:{
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#ffc6a6' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: '#ff8311' // 100% 处的颜色
                  }], false),
                  barBorderRadius: [60, 60, 0, 0]
                }
            }
        },
        {
            name:'Ⅳ级',
            type:'bar',
            data:[862, 1018],
            itemStyle:{
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#ffb7b7' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: '#ff1f1f' // 100% 处的颜色
                  }], false),
                  barBorderRadius: [60, 60, 0, 0]
                }
            }
        }
    ]
};
