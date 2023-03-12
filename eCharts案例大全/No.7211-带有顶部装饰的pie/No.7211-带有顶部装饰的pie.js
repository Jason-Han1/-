const colors = ["#1576d2", "#d14a82", "#26c1f2", "#a166ff", "#9C2BB6"]
const radius = [0.5, 0.75]
const data = [{
        name: 'Mon',
        value: 182
    },
    {
        name: 'Tue',
        value: 191
    },
    {
        name: 'Wed',
        value: 234
    },
    {
        name: 'Thu',
        value: 290
    },
    {
        name: 'Fri',
        value: 330
    },
]
const sum = data.reduce((prev, curr) => {
    curr._start = prev
    curr._end = prev + curr.value
    return curr._end
}, 0)

function renderItem(params, api) {
    const ceilAngle = Math.PI / 100 // 装饰的显示角度
    const coordSys = params.coordSys
    const coordRadius = coordSys.r
    const val = api.value(0)
    const index = api.value(1)
    const r0 = coordRadius * radius[0]
    const r = coordRadius * radius[1]
    const startAngle = (data[index]._start * Math.PI * 2) / sum - Math.PI / 2
    const endAngle = (data[index]._end * Math.PI * 2) / sum - Math.PI / 2
    return {
        type: "group",
        children: [{
            type: 'sector',
            shape: {
                cx: coordSys.cx,
                cy: coordSys.cy,
                r,
                r0,
                startAngle: startAngle,
                endAngle: endAngle
            },
            style: api.style({
                fill: colors[index],
                opacity: 0.5
            })
        }, {
            type: 'sector',
            shape: {
                cx: coordSys.cx,
                cy: coordSys.cy,
                r,
                r0,
                startAngle: val === 0 ? endAngle : endAngle - ceilAngle,
                endAngle: endAngle
            },
            style: api.style({
                fill: colors[index]
            })
        }]
    }
}

option = {
    color: colors,
    angleAxis: {
        type: 'category',
        show: false
    },
    radiusAxis: {
        show: false
    },
    polar: {
        radius: "100%"
    },
    series: [{
        type: 'custom',
        data: data,
        renderItem: renderItem,
        coordinateSystem: 'polar',
    }]
}