var minTemp = 0;
var maxTemp = 150;
var fillColor = '#fd4d49';
var innerWidth = 20;
var outterWidth = 36;
var padding = 20;

var themeStyle = {
    fill: fillColor
};
var bgStyle = {
    fill: 'rgba(80, 80, 80, 0.8)'
};

function renderItem(params, api) {
    var width = api.getWidth();
    var height = api.getHeight();
    var innerHeight = height - padding * 2;
    var ballRadius = 20;
    var valueHeight = innerHeight - ballRadius * 2 - padding * 2 - (outterWidth - innerWidth) / 2;
    var barHeight = valueHeight / (maxTemp - minTemp) * api.value(0);
    return {
        type: 'group',
        children: [{
            type: 'rect',
            shape: {
                x: -outterWidth / 2 + width / 2,
                y: padding + outterWidth / 2,
                width: outterWidth,
                height: height - ballRadius * 2 - padding * 2,
                r: outterWidth / 2
            },
            z: -1,
            style: bgStyle
        }, {
            type: 'circle',
            shape: {
                cx: width / 2,
                cy: height - padding * 2 - ballRadius,
                r: ballRadius + (outterWidth - innerWidth) / 2
            },
            style: bgStyle
        }, {
            type: 'rect',
            shape: {
                x: -innerWidth / 2 + width / 2,
                y: padding + (valueHeight - barHeight) + outterWidth,
                width: innerWidth,
                height: barHeight + 20
            },
            style: themeStyle
        }, {
            type: 'circle',
            shape: {
                cx: width / 2,
                cy: height - padding * 2 - ballRadius,
                r: ballRadius
            },
            style: themeStyle
        }, {
            type: 'text',
            style: {
                x: width / 2,
                y: padding + (valueHeight - barHeight) + outterWidth - 20,
                text: api.value(0),
                textAlign: 'center',
                fill: 'white',
                font: '16px serif'
            }
        }]
    }
}

option = {
    backgroundColor: '#202123',
    series: {
        type: 'custom',
        renderItem: renderItem,
        coordinateSystem: null,
        data: [75]
    }
};
