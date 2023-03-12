option = {
    backgroundColor: '#f6f1ec',
    title: {
        text: '填充雷达图',
        top:'5%',
        left:'42%',
        textStyle: {  color: '#000', fontSize: 22, }, 
    },
    legend: {
        bottom: '10%',
        // right: '50%',
        textStyle: {  color: '#000', fontSize: 22, }, 
        data: ['11111', '22222','33333','44444'],
        icon: 'square',
    },
    radar: {
        radius: '60%',
        center: ['50%', '52%'],
        startAngle: 0,
        triggerEvent: true,
        name: {  textStyle: { color: '#000', fontSize: '20', borderRadius: 3, padding: [20, 5] } },
        nameGap: '2',
        indicator: [
            { name: '二月', max: 6500 },
            { name: '一月', max: 16000 },
            { name: '四月', max: 30000 },
            { name: '三月', max: 38000 },
        ],
        splitArea: {
            areaStyle: {
                // color: [ 'rgba(0,255,255, 0.1)', 'rgba(0,255,255, 0.2)', 'rgba(0,255,255, 0.3)', 'rgba(0,255,255, 0.4)', 'rgba(0,255,255, 0.5)', 'rgba(0,255,255, 0.6)', ].reverse(),
                color: [ 'rgba(0,255,255, 0)'],
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 0,
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
    series: [
        {
        name: '11111',
        type: 'radar',
        areaStyle: { color: '#eaa90f' },
        symbol: 'circle',
        symbolSize: 0,
        itemStyle: { color: 'rgba(127,255,210,0.8)', borderColor: 'rgba(127,255,210,0.2)', borderWidth: 0, },
        lineStyle: { color: 'rgba(127,255,210, 0.6)', width: 0 },
        label: { show: false, },
        data: [ [4600, 13000, 25000, 23500] ]
    },
    {
        name: '22222',
        type: 'radar',
        areaStyle: { color: '#4eb0a5' },
        symbol: 'circle',
        symbolSize: 0,
        itemStyle: { color: 'rgba(255,237,145,0.8)', borderColor: 'rgba(255,237,145,0.2)', borderWidth: 0, },
        lineStyle: { color: 'rgba(255,237,145, 0.6)', width: 0 },
        data: [ [5300, 15000, 12800, 13500, 15000] ]
    }
    ,{
        name: '33333',
        type: 'radar',
        areaStyle: { color: '#62cdda' },
        symbol: 'circle',
        symbolSize: 0,
        itemStyle: { borderWidth: 0, },
        lineStyle: { width: 0 },
        data: [ [3300, 8000, 8800, 8500, 15000] ]
    }
    ,{
        name: '44444',
        type: 'radar',
        areaStyle: { color: '#dc7078' },
        symbol: 'circle',
        symbolSize: 0,
        itemStyle: { borderWidth: 0, },
        lineStyle: { width: 0 },
        data: [ [300, 5000, 2800, 13500, 15000] ]
    }
]
};