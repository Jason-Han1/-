var data1 = [
    [520, 100],
    [450, 400],
    [100, 250]
];
var data2 = [
    [100, 70],
    [300, 120],
    [100, 400]
];
var seriesList = [];
for (var i = 0; i < 2; i++) {
    let data = data1;
    let name = "name1";
    if (i == 1) {
        data = data2;
        name = "name2";
    }

    var tmp = {
        type: 'custom',
        name: name,
        data: data,
        renderItem: function(params, api) {
            if (params.context.rendered) {
                return;
            }
            params.context.rendered = true;

            return {
                type: 'polyline',
                style: {
                    stroke: 'red',
                    fill: null
                },
                shape: {
                    points: data,
                }
            };
        }
    };
    seriesList.push(tmp);
}

option = {
    tooltip: {},

    grid: {
        bottom: 70,
        top: 120,
    },
    xAxis: {
        show: false

    },
    yAxis: {
        show: false
    },
    series: seriesList
};