var lineHeight = 60;
var colWidth = 200;
var fontSize = 22;
var useBar = true;
var dataset = [
    ["Wife Beating is justified", "No Education", "Primary", "Secondary", "Higher"],
    ["... for at least one specific reason", 51.8, 48.7, 38.4, 19.6],
    ["... if she argues with him", 34.9, 31, 21.5, 8.5],
    ["... if she burns the food", 20, 17.1, 10.4, 2.9],
    ["... if she goes out without telling him", 35.9, 32.3, 22.3, 8.8],
    ["... if she neglects the children", 37.8, 35.2, 27.4, 12.8],
    ["... if she refuses to have sex with him", 31.4, 25.6, 15.7, 6.6]
];

function renderItem(param, api) {
    var group = [];
    var value = param.encode.value;
    var top = lineHeight * (param.dataIndex + 2.5);
    for (var i = 0; i < value.length; ++i) {
        var left = i === 0 ? 30 : 230 + colWidth * i;
        var v = api.value(value[i]);
        var text = new echarts.graphic.Text({
            style: {
                text: v + (i === 0 ? '' : '%'),
                fontSize: fontSize,
                fontFamily: 'Lato',
                fontWeight: i === 0 ? 300 : 100,
                fill: 'white'
            },
            position: [left, top],
            z2: 100
        });
        group.push(text);
        
        if (useBar) {
            var rect = new echarts.graphic.Rect({
                style: {
                    fill: 'rgba(255, 50, 80, 0.5)',
                },
                shape: {
                    width: v * 3.2,
                    height: lineHeight * 0.6
                },
                position: [left, -lineHeight * 0.15 + top]
            });
            group.push(rect);
        }
    }
    return {
        type: 'group',
        children: group
    };
}

var graphics = [];
for (var i = 0; i < 7; ++i) {
    graphics.push({
        type: 'rect',
        style: {
            fill: '#555'
        },
        shape: {
            width: 1200, 
            height: 1
        },
        left: 10,
        top: (i + 2.14) * lineHeight
    });
}
for (var i = 0; i < dataset[0].length; ++i) {
    var left = i === 0 ? 30 : 230 + colWidth * i;
    graphics.push({
        type: 'text',
        style: {
            text: dataset[0][i],
            fontSize: fontSize,
            fontFamily: 'Lato',
            fontWeight: 500,
            fill: 'white'
        },
        position: [left, lineHeight * 1.5]
    });
}

option = {
    backgroundColor: '#000',
    title: {
        text: 'Education is a key driver for changing attitudes on violence against women',
        subtext: '(Data from: https://public.tableau.com/profile/jay.kumar#!/vizhome/VoilenceAgaintWomenMOM2020W10/Violenceagainstwomen)',
        sublink: 'https://public.tableau.com/profile/jay.kumar#!/vizhome/VoilenceAgaintWomenMOM2020W10/Violenceagainstwomen',
        textStyle: {
            fontSize: 20,
            fontFamily: 'Lato',
            fontWeight: 400,
            color: '#fff'
        },
        left: 'center',
        top: 20
    },
    dataset: {
        source: dataset,
    },
    series: [{
        type: 'custom',
        coordinateSystem: 'none',
        renderItem: renderItem,
        encode: {
            value: [0, 1, 2, 3, 4]
        }
    }],
    graphic: {
        elements: graphics
    },
    animation: false
};