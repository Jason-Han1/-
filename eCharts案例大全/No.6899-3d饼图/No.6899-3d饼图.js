
// 扩展组件地址https://github.com/StillAlexLiu/echarts-pie-3d
const MyShape = echarts.graphic.extendShape({
    shape: {
        cx: 0,
        cy: 0,
        r: 0,
        startAngle: 0,
        endAngle: Math.PI * 2,
        clockwise: true,
        step: 0
    },
    style: {
        stroke: '#000',
        fill: null
    },
    buildPath: function(ctx, shape) {
        const x = shape.cx
        const y = shape.cy
        const r = Math.max(shape.r, 0)
        const startAngle = shape.startAngle
        const endAngle = shape.endAngle
        const clockwise = shape.clockwise
        const unitX = Math.cos(startAngle)
        const unitY = Math.sin(startAngle)
        const unitXE = Math.cos(endAngle)
        const unitYE = Math.sin(endAngle)
        ctx.moveTo(unitX * r + x, unitY * r + y)
        ctx.arc(x, y, r, startAngle, endAngle, !clockwise)
        ctx.lineTo(unitXE * r + x, unitYE * r + y + shape.step)
        ctx.arc(x, y + shape.step, r, endAngle, startAngle, clockwise)
        ctx.lineTo(unitX * r + x, unitY * r + y)
    }
})
echarts.graphic.registerShape('myCustomShape', MyShape)

const PI2 = Math.PI * 2
const data1 = [{
        value: 335,
        name: '直接访问'
    },
    {
        value: 310,
        name: '邮件营销'
    },
    {
        value: 234,
        name: '联盟广告'
    },
    {
        value: 135,
        name: '视频广告'
    },
    {
        value: 1548,
        name: '搜索引擎'
    }
]
const valueList = []
for (let i = 0; i < data1.length; i++) {
    valueList.push(data1[i].value)
}
const viewData = []
let validDataCount = 0
const colorList = ['#f00', '#0f0', '#00f', '#ff0', '#0ff']
for (let i = 0; i < data1.length; i++) {
    const item = data1[i]
    const percent = echarts.number.getPercentWithPrecision(valueList, i, 1)
    validDataCount += percent
    viewData.push({
        name: item.name,
        value: item.value,
        percent: percent,
        validDataCount: validDataCount,
        __pieColor: colorList[i % colorList.length]
    })
}

option = {
    series: [{
        data: data1,
        type: 'custom',
        coordinateSystem: 'none',
        renderItem: (params, api) => {
            // 使用echarts自己等lib计算出百分比
            const index = params.dataIndex
            const data = viewData[index]
            const start = PI2 * (data.validDataCount - data.percent) / 100
            const end = PI2 * data.validDataCount / 100
            const center = [api.getWidth() / 2, api.getHeight() / 2]
            const scale = [1, 0.6]
            const origin = center
            return {
                type: 'group',
                children: [{
                        type: 'sector',
                        scale: scale,
                        origin: origin,
                        silent: true,
                        z2: 0,
                        shape: {
                            cx: center[0],
                            cy: center[1] + 20,
                            r0: 0,
                            r: 130,
                            startAngle: start,
                            endAngle: end
                        },
                        style: api.style({
                            fill: data.__pieColor
                        })
                    },

                    {
                        type: 'sector',
                        scale: scale,
                        origin: origin,
                        silent: true,
                        z2: 2,
                        shape: {
                            cx: center[0],
                            cy: center[1] - 20,
                            r0: 0,
                            r: 130,
                            startAngle: start,
                            endAngle: end
                        },
                        style: api.style({
                            fill: data.__pieColor
                        })
                    },
                    {
                        type: 'myCustomShape',
                        scale: scale,
                        origin: origin,
                        silent: true,
                        z2: 1,
                        shape: {
                            cx: center[0],
                            cy: center[1] - 20,
                            step: 40,
                            r0: 0,
                            r: 130,
                            startAngle: start,
                            endAngle: end
                        },
                        style: api.style({
                            fill: data.__pieColor,
                            stroke: data.__pieColor,
                            lineWidth: 0
                        })
                    }
                ]
            }
        }
    }]

}
// 3d插件在https://github.com/StillAlexLiu/echarts-pie-3d