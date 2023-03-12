option = {
    tooltip: {
        trigger: 'axis'
    },
    radar: {
        indicator: [
            {text: '外观', max: 100, color: '#3c4668'}, // 设置 max 为最大值 小一丢丢
            {text: '拍照', max: 100, color: '#3c4668'},
            {text: '系统', max: 100, color: '#3c4668'},
            {text: '性能', max: 100, color: '#3c4668'},
            {text: '屏幕', max: 100, color: '#3c4668'}
        ],
        splitNumber: 3,
        axisLine:{
            lineStyle:{
                color: '#3c4668'
            }
        },
        splitLine: {
            lineStyle: {
                color: ['#e1eaf9', '#3c4668','#3c4668']
            }  
        },
        splitArea: {
           show: false 
        },
        radius: 200,
        center: ['50%','60%'],
    },
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            symbol: 'circle',
            symbolSize: 10,
            lineStyle:{
                color: 'transparent'
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: '#354270',
                        opacity: 1
                    }
                }
            },
            data: [
                {
                    value: [60,73,85,40, 50],
                    name: '某软件'
                }
            ]
        }
    ]
};
