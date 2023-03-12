var option = {
    tooltip: {},
    legend: {
        top: 60,
        data: ['上月', '本月'],
        textStyle: {
                color:'rgb(255,255,255)',
                fontSize:16
            }
    },
    radar: {
        radius: '60%',
        splitNumber: 8,
        axisLine: {
            lineStyle: {
                color: '#fff',
                opacity: .5
            }
        },
        splitLine: {
            lineStyle: {
                color: '#fff',
                opacity: .0
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(127,95,132,.3)',
                opacity: 0,
            }
        },
        name: {
            formatter:'{value}',
            textStyle: {
                color:'rgba(255,255,255,0.5)',
                fontSize:16
            }
        },
        indicator: [{
            name: '照明能耗',
            max: 2000
        }, {
            name: '供暖能耗',
            max: 2000
        }, {
            name: '制冷能耗',
            max: 2000
        }, {
            name: '电梯能耗',
            max: 2000
        }, {
            name: '水泵能耗',
            max: 2000
        }, {
            name: '通风能耗',
            max: 2000
        }]
    },
    series: [{
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                opacity: 0.8
            }
        },
        data: [{
            value: [1800, 1500, 1400, 1400, 1500, 1500],
            name: '上月'
        },{
            value: [1400, 1600, 1600, 1600, 1600, 1600],
            name: '本月'
        }]
    }],
    backgroundColor:'#1e253e',
    color: [
    new echarts.graphic.LinearGradient(0, 0, 1, 0, 
    [{offset: 0, color: '#06d3d8'},{offset: 1, color: '#0018ff'}], false),new echarts.graphic.LinearGradient(0, 0, 1, 0, 
    [{offset: 0, color: '#d23050'},{offset: 1, color: '#ba00ff'}], false)]
};