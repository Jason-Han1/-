option = {
    
    series: [{
        type: 'graph',
        data: [{
    name: '1',
    x: 10,
    y: 100,
    value: 10
}, {
    name: '2',
    x: 100,
    y: 100,
    value: 20,
    itemStyle: {
        color: 'red'
    }
}],
        links:[
            {
                source:'1',
                target:'2',
                lineStyle:{
                    curveness:0,
                },
            }
            ],
    }]
};
