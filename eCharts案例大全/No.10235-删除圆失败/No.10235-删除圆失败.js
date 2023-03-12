
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    graphic: [{
        elements: [{
            type: 'circle',
            position: [200, 200],
            shape: {
                cx: 0,
                cy: 0,
                r: 20
            },
        }]
    }]
};
 
myChart.on('click', function (params) {
    var opt = myChart.getOption();
    opt.graphic[0].elements.splice(0, 1);
    myChart.setOption({
        graphic: [{
            elements: opt.graphic[0].elements
        }]
    });
    console.log(opt)
}); 