var MyShape = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    buildPath: function (ctx, shape) {
        ctx.moveTo(shape.x, shape.y);
        ctx.lineTo(shape.x + shape.width, shape.y);
        ctx.lineTo(shape.x, shape.y + shape.height);
        ctx.lineTo(shape.x + shape.width, shape.y + shape.height);
        ctx.closePath();
    }
});
echarts.graphic.registerShape('myCustomShape', MyShape);

option = {
    series: {
        type: 'custom',
        coordinateSystem: 'none',
        renderItem: function (params, api) {
            return {
                type: 'myCustomShape',
                shape: {
                    x: api.value(0),
                    y: api.value(1),
                    width: api.value(2),
                    height: api.value(3)
                },
                style: {
                    fill: 'red'
                }
            };
        },
        data: [[10, 20, 30, 40],[40, 20, 30, 40],[80, 20, 30, 40]]
    }
};