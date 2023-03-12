// mock数据
const dataArray = [
    {"NUM":152879,"REMARK":"使用情况","NAME":"其他"},
    {"NUM":6898,"NAME":"绿"},
    {"NUM":6898,"NAME":"红"},
]
const color = [
    // 绿颜色
    [{ offset: 0, color: '#bfedc0' }, { offset: 1, color: '#77dc7e' }],
    // 红颜色
    [{ offset: 0, color: '#f19bc1' }, { offset: 1, color: '#eb576f' }],
    // 其他颜色
    [{ offset: 0, color: '#accdff' }, { offset: 1, color: '#1976ff' }]
]

 // data数据
const echartData = dataArray.map((v, i) => ({
    name: v.NAME,
    value: v.NUM,
    itemStyle: { 
        // fixbug: 由于顺序可能是乱序的，所以这里根据 NAME 来匹配 color
        color: { 
            type: 'linear',  
            colorStops: v.NAME === '绿' 
                ? color[0] 
                    : v.NAME === '红' 
                    ? color[1]
                    : color[2]
        }
    }
}))

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)',
        textStyle: { color: '#fff', fontSize: '110%'}
    },
    legend:  {
        show: false,
        bottom: '5%',
        // right: '5%',
        data: ['绿', '红', '其他'],
        textStyle:{ color: '#fff', fontSize: '100%'},
        itemGap : 20,
        textGap: 10,
        itemWidth: 25,
        itemHeight: 14
    },
    series: [
        {
            name: '使用情况',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            labelLine: {
                show: false
            },
            data: echartData,
            emphasis:{ labelLine: { itemStyle: { shadowColor: 'rgba(250,250,250,0.2)', shadowBlur: 20 }}}
        },
         // 边框的设置
        {
            radius: ['52%', '72%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {  normal: { show: false }, emphasis: { show: false } },
            labelLine: { normal: { show: false }, emphasis: { show: false }},
            animation: false,
            tooltip: { show: false },
            // 阴影颜色
            itemStyle: { color:'rgba(250,250,250,0.2)'},
            data: [{ value: 1 }],
        }
    ]
};
