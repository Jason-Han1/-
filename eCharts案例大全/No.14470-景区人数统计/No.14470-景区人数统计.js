option = {
    backgroundColor:'#232c49',
    title: {},
    tooltip: {
        trigger: 'axis'
    },


    legend: {
        
        data: ['瞬时最高承载人数', '实时人数'],
        textStyle:{
            color:'#fff'
        }
    },
    grid: {
        show: false,
        left: '10%',
        right: '5%',
        bottom: '12%',
        top: '18%',
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: [
            '枫泾古镇',
            '城市沙滩',
            '东林寺',
            '廊下生态园',
            '中国农名画村',
            '南社纪念馆',
            '金山嘴渔村'
        ],
        axisLine: {
            lineStyle: {
                color: '#5d94ca'
            }
        },
        axisLabel: {
            margin:5,
            fontSize: 10,
            color:'#fff'
        }

    }],
    yAxis: {
        type: 'value',
        name: '人数（万人）',
        nameLocation:'start',
        nameTextStyle:{
            color:'#fff'
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 25,
        splitNumber: 5,
        splitLine: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#2a303e', '#262e3b']
            }
        },
        axisLine: {
            lineStyle: {
                color: '#5d94ca'
            }
        },
        axisLabel: {
            margin:5,
            fontSize: 10,
            color:'#fff'
        }
    },
    series: [{
        name: '瞬时最高承载人数',
        type: 'line',

        itemStyle: {
            normal: {
                
                color:'#eedd95',
                lineStyle: {
                    color: '#eedd95'
                }
            }
        },
        data: [15, 18, 13, 16, 17, 10, 6]
    }, {
        name: '实时人数',
        type: 'bar',
        data: [9, 7, 3, 9, 9, 15, 6],
        itemStyle: {
            normal: {
                color: '#5d94ca'
            }
        }
        
    }]
};