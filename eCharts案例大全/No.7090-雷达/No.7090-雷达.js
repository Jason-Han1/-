option = {
    backgroundColor: '#000',
    legend: {
        top: '0%',
        right: '2%',
        orient: 'vertical',
        textStyle: {  color: '#fff', fontSize: 22, }, 
        data: ['道路里程占比'],
        icon: 'roundRect',
    },
    radar: {
        radius: '80%',
        center: ['50%', '52%'],
        startAngle: 0,
        triggerEvent: true,
        name: {  textStyle: { color: '#fff', fontSize: '20', borderRadius: 3, padding: [20, 5] } },
        nameGap: '2',
        indicator: [
            { name: '国道', max: 6500 },
            { name: '高速公路', max: 16000 },
            { name: '省道', max: 30000 },
            { name: '县乡道路', max: 38000 },
        ],
        splitArea: {
            areaStyle: {
                color: [ 'rgba(0,255,255, 0.1)', 'rgba(0,255,255, 0.2)', 'rgba(9,107,166, 0.3)', 'rgba(9,107,166, 0.4)', ].reverse(),
                shadowColor: 'rgba(9,107,166, 0.5)',
                shadowBlur: 30,
                shadowOffsetX: 10,
                shadowOffsetY: 10
            }
        },
        axisLine: {  lineStyle: { color: 'rgba(9,107,166, 0.2)' } },
        splitLine: {
            lineStyle: {
                width: 1,
                color: [ '#096ba6', '#096ba6', 'rgba(9,107,166, 0.3)', 'rgba(9,107,166, 0.7)'].reverse() 
            }
        }
    },
    series: [{
        name: '道路里程占比',
        type: 'radar',
        areaStyle: { color: 'rgba(252,226,78,0.3)' },
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: { color: 'rgba(252,226,78,0.8)', borderColor: 'rgba(252,226,78,0.2)', borderWidth: 10, },
        lineStyle: { color: '#fcee06', width: 3 },
        label: { show: false, },
        data: [ [4600, 13000, 15000, 23500] ]
    }
]
};