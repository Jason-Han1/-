option = {
    backgroundColor: 'rgba(0,0,0,.5)',
    legend: {
        top: '0%',
        right: '2%',
        orient: 'vertical',
        textStyle: {  color: '#fff', fontSize: 22, }, 
        data: ['2019评分', '2020评分'],
        icon: 'roundRect',
    },
    radar: {
        radius: '60%',
        center: ['50%', '52%'],
        startAngle: 0,
        triggerEvent: true,
        name: {  textStyle: { color: '#fff', fontSize: '20', borderRadius: 3, padding: [20, 5] } },
        nameGap: '2',
        indicator: [
            { name: '服务态度', max: 6500 },
            { name: '办事时间', max: 16000 },
            { name: '跑动次数', max: 30000 },
            { name: '缴费方式', max: 38000 },
        ],
        splitArea: {
            areaStyle: {
                color: [ 'rgba(0,255,255, 0.1)', 'rgba(0,255,255, 0.2)', 'rgba(0,255,255, 0.3)', 'rgba(0,255,255, 0.4)', 'rgba(0,255,255, 0.5)', 'rgba(0,255,255, 0.6)', ].reverse(),
                shadowColor: 'rgba(0, 0, 0, 1)',
                shadowBlur: 30,
                shadowOffsetX: 10,
                shadowOffsetY: 10
            }
        },
        axisLine: {  lineStyle: { color: 'rgba(0,206,209, 0.3)' } },
        splitLine: {
            lineStyle: {
                width: 1,
                color: [ 'rgba(0,206,209, 0.1)', 'rgba(0,206,209, 0.2)', 'rgba(0,206,209, 0.3)', 'rgba(0,206,209, 0.4)', 'rgba(0,206,209, 0.5)', 'rgba(0,206,209, 0.6)' ].reverse() 
            }
        }
    },
    series: [{
        name: '2019评分',
        type: 'radar',
        areaStyle: { color: 'rgba(127,255,210, 0.5)' },
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: { color: 'rgba(127,255,210,0.8)', borderColor: 'rgba(127,255,210,0.2)', borderWidth: 10, },
        lineStyle: { color: 'rgba(127,255,210, 0.6)', width: 2 },
        label: { show: false, },
        data: [ [4600, 13000, 25000, 23500, 25000] ]
    },
    {
        name: '2020评分',
        type: 'radar',
        areaStyle: { color: 'rgba(255,237,145, 0.5)' },
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: { color: 'rgba(255,237,145,0.8)', borderColor: 'rgba(255,237,145,0.2)', borderWidth: 10, },
        lineStyle: { color: 'rgba(255,237,145, 0.6)', width: 2 },
        data: [ [5300, 15000, 12800, 13500, 15000] ]
    }
]
};