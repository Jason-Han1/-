let barHeight = 40, barWidth = 40, barRadius = 4
let encode = {
            x: 'product',
            y: '2015'
        }
function renderLine (params, api) {
    console.debug(api.value('2017'))
    var xValue = api.value(encode.x);
    var highPoint = api.coord([xValue, api.value(encode.y)]);
    var lowPoint = api.coord([xValue, 0]);
    var style = api.style({
        stroke: api.visual('color'),
        fill: null
    });

    return {
            type: 'line',
            shape: {
                x1: lowPoint[0], y2: lowPoint[1],
                x2: highPoint[0], y1: highPoint[1] + barHeight
                
            },
            style: style
        };
}

function renderBar (params, api) {
            var yValue = api.value(encode.y);
            var start = api.coord([api.value(encode.x), yValue]);
            var style = api.style();
            return {
                type: 'rect',
                shape: {
                    x: start[0] - barWidth/2,
                    y: start[1],
                    width: barWidth,
                    height: barHeight,
                    r: barRadius
                },
                style: style
            };
        }
option = {
    backgroundColor: '#353236',
    dataset: {
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
    },
    xAxis: {
        type: 'category',
        boundaryGap: true
        
    },
    yAxis: {
        
    },
    series: [
        {
        name: 'height',
        type: 'custom',
        renderItem: renderBar,
        label: {
            show: true,
            position: 'top'
        },
        itemStyle: {
            color: '#F15A29'
        },
        encode
    },
        {
            show: false,
            type: 'custom',
            name: 'custom',
            itemStyle: {
                color: '#27AAE1',
                borderType: 'dashed',
                borderWidth: 1.5
            },
            renderItem: renderLine,
            encode,
            z: 100
        }
    ]
};
