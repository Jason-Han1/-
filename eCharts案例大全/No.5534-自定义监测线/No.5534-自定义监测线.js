var monitorLine = echarts.graphic.extendShape({
    type: 'monitor-line',
    shape: {
        x: 0,
        y1: 0,
        y2: 0
    },
    buildPath: function(path, shape) {
        path.moveTo(shape.x,shape.y1);
        path.lineTo(shape.x,shape.y2);
        path.lineTo(shape.x + 2,shape.y2);
        path.lineTo(shape.x + 2,shape.y1);
        path.moveTo(shape.x,shape.y2);
        path.lineTo(shape.x + 2,  shape.y2);
        path.lineTo(shape.x + 22, shape.y2 + 20);
        path.lineTo(shape.x + 22, shape.y2 + 60);
        path.lineTo(shape.x - 20, shape.y2 + 60);
        path.lineTo(shape.x - 20, shape.y2 + 60);
        path.lineTo(shape.x - 20, shape.y2 +20);
    }
})
echarts.graphic.registerShape('monitor-line', monitorLine);

option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310]
    }],
    graphic: {
        type: "monitor-line",
        shape: {
            x: 300,
            y1: 0,
            y2: 829
        },
        style: {
            fill: "#1890ff",
            stroke: "#1890ff"
        },
        draggable: true,
        ondrag: handleOndrag
    }
};
function handleOndrag() {
    option.graphic.bottom = 0;
    let instance = echarts.getInstanceByDom(document.querySelector("#chart-panel"));
    instance.setOption(option);
}