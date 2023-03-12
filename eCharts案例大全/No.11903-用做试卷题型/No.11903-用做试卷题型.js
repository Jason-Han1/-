option = {
    tooltip: {
        trigger: 'item',
    },
    calculable: true,
    polar: {
        center: ['50%', '50%'],
        radius: '80%'
    },
    radiusAxis: {
        // 极坐标半径刻度
        min: 0,
        max: 100,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show:false
        },
        splitLine:{
            lineStyle:{
                type: 'dashed',
                color:'#d1d1d1'
            }
        }
    },
    angleAxis: {
        type: 'category',
        clockwise: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                width: 1,
                type: 'dashed',
                color:'#d1d1d1'
            },
        },
        axisLine: {
            lineStyle:{
                color:'#d1d1d1'
            }
        },
    },
    series: [{
        name: '通过率（%）',
        type: 'pie',
        clockwise: false,
        radius: ['15.6%', '80%'],
        center: ['50%', '50%'],
        roseType: 'area',
        hoverOffset:0,
        label: {
            show:true,
            rotate:90,
            fontSize:12,
            color:'#d1d1d1',
            offset:18,
            textPosition:[10,10]
        },
        labelLine:{
            show:false,
            length:0,
            length2:0
        },
        data: [{
            value: 100,
            name: 'rose1'
        }, {
            value: 5,
            name: 'rose2'
        }, {
            value: 15,
            name: 'rose3'
        }, {
            value: 25,
            name: 'rose4'
        }, {
            value: 20,
            name: 'rose5'
        }, {
            value: 35,
            name: 'rose6'
        }, {
            value: 0,
            name: 'rose7'
        }, {
            value: 50,
            name: 'rose8'
        }]
    }]
};