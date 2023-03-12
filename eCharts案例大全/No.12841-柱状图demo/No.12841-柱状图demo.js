app.title = '坐标轴刻度与标签对齐';

option = {
    backgroundColor:'#0B256F',
    grid: {
        x: 40,
        y: 30,
        x2: 35,
        y2: 40,
        
    },
    title: {
        text: '单位(m)',
        textStyle: {
            fontWeight: 100,
            fontSize: 12,
            color: '#ffffff',
        },
        top: '0',
        left: '3%'
    },
    tooltip: {
        trigger: 'axis',
        //extraCssText: 'width:120px;height:75px;background:rgba(125,125,125,0.5);'
    },
    legend: {
        data: ['警戒水位', '当前水位'],
        textStyle: { color: '#ffffff' },
        right: '30%',
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                    opacity: 0.5
                }
            },
            axisTick: {
                show: true,
                inside:true
            },
            axisLabel:{
                interval:0,
            },
            data: ["杭长桥", "琳桥", "太湖", "平望", "无锡（大）", "苏州（枫桥）", "甘露", "常州(三)"]
        }
    ],
    yAxis: [
        {
            scale:true,
            splitArea: {
                show: true,
                areaStyle:{
                    color:['rgba(0,0,0,0)','rgba(25, 31, 65, 0.5)']
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    opacity: 0.3,
                    type: 'dashed'
                }
            },
            axisLine: {
                 lineStyle: {
                     color: '#ffffff',
                     opacity: 0
                 }
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [
        {
            name: '警戒水位',
            type: 'bar',
            barWidth:'20%',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#F09E2F'
                }, {
                    offset: 1,
                    color: '#E3372B'
                }])
            },
            data: [4.5, 3.8, 3.8, 3.7, 3.9, 3.8, 3.8, 4.3]
        },
        {
            name: '当前水位',
            type: 'bar',
            barWidth:'20%',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#49AA74'
                }, {
                    offset: 1,
                    color: '#1C9CCC'
                }])
            },
            data: [3.14, 3.55, 3.17, 3.15, 3.64, 3.4, 3.55, 3.66]
        }
    ]
};