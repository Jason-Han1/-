function renderItem(params, api) {
    const values = [api.value(0), api.value(1)]
    const { cx, cy, r0, r } = params.coordSys
    const angles = values.map(val => api.coord([1, val])[3])
    console.log(values,
        values.map(val => api.coord([1, val])[3] / Math.PI * 180),
        params.dataInsideLength)
    
    return {
        type: 'sector',
        shape: {
            cx,
            cy,
            r0,
            r,
            startAngle: -angles[0],
            endAngle: -angles[1]
        },
        style: api.style({
            fill: api.visual('color'),
            opacity: 1 / params.dataInsideLength
        })
    }
}

option = {
    angleAxis: {
        min: 0,
        max: 24,
        maxInterval: 1
    },
    radiusAxis: {
        show: false
    },
    polar: {},
    series: {
        type: 'custom',
        coordinateSystem: 'polar',
        renderItem,
        // data: [[8, 13], [6, 17], [4, 18]]
        data: new Array(30).fill(null).map(() => {
            const start = Math.random() * 16 / 2 - 4
            const end = Math.random() * 16 / 2 - 4
            return [8 + start, 17 + end]
        })
    }
}
