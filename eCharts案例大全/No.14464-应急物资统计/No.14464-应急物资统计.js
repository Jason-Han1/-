option = {
    backgroundColor:'#232c49',
    title: {},
    tooltip: {
        trigger: 'axis'
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
            '气象信息',
            '地震监测',
            '地质灾害检测',
            '水纹检测',
            '环境检测',
            '疫病检测',
            '观察测量'
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
        max: 1000,
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
        name: '实时人数',
        type: 'bar',
        data: [300, 500, 450, 450, 700, 850, 650],
        itemStyle: {
            normal: {
                color: '#5d94ca'
            }
        }
        
    }]
};