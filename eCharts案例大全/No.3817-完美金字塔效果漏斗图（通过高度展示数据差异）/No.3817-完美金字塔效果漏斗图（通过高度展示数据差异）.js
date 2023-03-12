data = [
    {value: (Math.random()*100).toFixed(0), name: '访问'},
    {value: (Math.random()*100).toFixed(0), name: '咨询'},
    {value: (Math.random()*100).toFixed(0), name: '订单'},
    {value: (Math.random()*100).toFixed(0), name: '点击'},
    {value: (Math.random()*100).toFixed(0), name: '展现'}
]
let sum = eval(data.map(item => item.value).join('+'))
let addUp = 0
let minHeight = 2 //最小高度
let top = 5
data = data.map(item => {
    let itemValue = 0
    if (item.value / sum * 100 < minHeight) itemValue = minHeight
    else itemValue = (item.value / sum * 100)
    top += itemValue
    return {
        value: addUp += itemValue,
        name: item.name,
        realValue: item.value,
        itemStyle: {
            height: `${itemValue}%`
        }
    }
})
option = {
    backgroundColor: '#2b2a38',
    color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
    series: [{
        type: 'funnel',
        sort: 'ascending',
        top: `${top - 100}%`,
        label: {
            show: true,
            color: '#eee',
            fontSize: 16,
            overflow: 'break',
        },
        labelLine: {
            length: 20,
            lineStyle: {
                width: 1,
                type: 'solid'
            }
        },
        data
    }]
}