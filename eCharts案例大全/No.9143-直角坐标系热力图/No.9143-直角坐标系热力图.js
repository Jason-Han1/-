var axisdata = [];
for (var i = -5; i < 5; i++) {
    axisdata.push(i)
}

function makeHeatData() {
    let maxDegree = 360
    let points = []
    let radius = 5
    let buildPoints = function(radius) {
        let degree = maxDegree / (radius * 8)
        for (let i = 1; i < maxDegree; i += degree) {
            points.push(
                [
                    Math.sin(i) * radius,
                    Math.cos(i) * radius,
                    i
                ]
            )
        }
    }
    for (let i = 1; i <= 5; i++) {
        buildPoints(i)
    }
    return points;
}
var data = makeHeatData();
option = {
    tooltip: {
        show: true
    },
    geo: [{
        map: 'world',
        zoom: 0,
        roam: true,
        show: false,
        id: 'geo1',
        itemStyle: {
            areaColor: 'rgb(0,0,0,0)'
        },
        height: '100%'
    }],
    grid: {
        show: true,
        height: '62%',
        width: '50%',
        top: '20%',
        left: 'center',
        borderColor: 'rgb(0,0,0,0)'
    },
    animation: false,
    xAxis: {
        type: 'value',
        data: axisdata
    },
    yAxis: {
        type: 'value',
        data: axisdata
    },
    series: [{
        id: 'test',
        name: "fs",
        type: 'heatmap',
        coordinateSystem: 'cartesian2d',
        data: data,
        gridIndex: 0,
        itemStyle: {
            show: true,
            color: 'rgb(0,0,0,0)'
        }
    }, ]

};

myChart.setOption(option);

function convertToPx(dataitem) {
    var newxy = myChart.convertToPixel({
        seriesId: 'test'
    }, dataitem);
    return newxy
}

function convertToGeo(dataitem) {
    var pointobj = myChart.convertFromPixel({
        geoId: 'geo1'
    }, convertToPx(dataitem));
    var point = [pointobj[0], pointobj[1]];
    return point;
}

function convertData(data, x, y) {
    var convertedData = [];
    x = Math.ceil(x);
    y = Math.ceil(y);
    for (var i = 0; i < data.length; i++) {
        if (data[i][0] >= x && data[i][0] <= y) {
            var geoCoord = convertToGeo([data[i][0], data[i][1]]);
            geoCoord.push(data[i][2]); //
            convertedData.push(geoCoord);
        }
    }
    return convertedData;
}
var cusdata = convertData(data, -6, data.length);
setTimeout(function() {
    myChart.setOption({
        series: [{
            name: 'testheatmap',
            type: 'heatmap',
            id: 'testheatmap',
            coordinateSystem: 'geo',
            seriesIndex: 1,
            geoIndex: 0,
            data: cusdata,
            blurSize: 20,
            pointSize: 25
        }, ],
        visualMap: {
            show: true,
            top: 'bottom',
            seriesIndex: 1,
            calculable: true,
            min: 0,
            max: 250,
            inRange: {
                color: ['blue', 'green', 'yellow', 'red']
            }
        }
    });
}, 500);