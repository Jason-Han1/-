let radius = 0.7;
let isBig = true
var timerId;
option = {
    backgroundColor: "#061740",
    series: [{
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            // params 包含了当前数据信息和坐标系的信息   api 是一些开发者可调用的方法集合
            renderItem: function(params, api) {
                return {
                    name: '圆',
                    // circle有动画
                    type: 'circle',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * radius,
                    },
                    // path 无动画********为啥子？？？？？？？
                    // type: 'path',
                    // shape: {
                    //     pathData: 'M229.76512 794.23488c155.61728 155.61728 408.84224 155.61728 564.45952 0s155.61728-408.84224 0-564.45952-408.84224-155.61728-564.45952 0S74.14784 638.60736 229.76512 794.23488zM260.73088 260.72064c138.55744-138.55744 364.00128-138.55744 502.55872 0 138.53696 138.5472 138.53696 364.00128 0 502.55872-138.55744 138.5472-364.02176 138.5472-502.55872 0C122.17344 624.72192 122.17344 399.26784 260.73088 260.72064z',
                    //     layout: 'center',
                    //     x: api.getWidth() * ((1 - radius) / 2),
                    //     y: api.getHeight() * ((1 - radius) / 2),
                    //     width: api.getWidth() * radius,
                    //     height: api.getHeight() * radius,
                    // },

                    style: {
                        stroke: "#0CD3DB",
                        fill: "transparent", // 弧形内部填充色
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        },

    ]
};

function draw() {
    if (isBig) {
        if (radius > 0.9) {
            isBig = false
        }
        radius = radius + 0.05
    } else {
        if (radius < 0.5) {
            isBig = true
        }
        radius = radius - 0.05
    }
    myChart.setOption(option, true)
    //window.requestAnimationFrame(draw);
}
if (timerId) {
    clearInterval(timerId);
}
timerId = setInterval(function() {
    //用setInterval做动画感觉有问题
    draw()
}, 100);