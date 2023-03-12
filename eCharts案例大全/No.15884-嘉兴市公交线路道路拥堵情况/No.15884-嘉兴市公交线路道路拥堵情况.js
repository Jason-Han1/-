var uploadedDataURL = "/asset/get/s/data-1477626617822-SJMboHgel.txt";

function convertData(sourceData) {
    return [].concat.apply([], $.map(sourceData, function(busLine, index) {
        var prevPoint = null;
        var points = [];
        var value = busLine.shift();
        for (var i = 0; i < busLine.length; i += 2) {
            var point = [busLine[i], busLine[i + 1]];
            if (i > 0) {
                point = [
                    prevPoint[0] + point[0],
                    prevPoint[1] + point[1]
                ];
            }
            prevPoint = point;

            points.push([point[0] / 1e5, point[1] / 1e5]);
        }
        return {
            value: value,
            coords: points
        };
    }));
}

var option = {
    bmap: {
        roam: true
    },
    visualMap: {
        type: "piecewise",
        left: 'right',
        /*            pieces: [
                {min: 15}, // 不指定 max，表示 max 为无限大（Infinity）。
                {min: 12, max: 15},
                {min: 9, max: 12},
                {min: 6, max: 9},
                {min: 3, max: 6},
                {max: 3}     // 不指定 min，表示 min 为无限大（-Infinity）。
            ],*/
        min: 0,
        max: 15,
        splitNumber: 5,
        maxOpen: true,
        color: ['red', 'yellow', 'green']
    },
    tooltip: {
        formatter: function(params, ticket, callback) {
            return "拥堵指数:" + params.value;
        },
        trigger: 'item'
    },
    series: [{
        type: 'lines',
        coordinateSystem: 'bmap',
        polyline: true,
        lineStyle: {
            normal: {
                opacity: 1,
                width: 4
            },
            emphasis: {
                width: 6
            }
        },
        effect: {
            show: true,
            symbolSize: 2,
            color: "white"
        }
    }]
};

$.getJSON(uploadedDataURL, function(rawData) {
    option.series[0].data = convertData(rawData);
    myChart.setOption(option);
    // console.log(option);
    //获取echart中使用的bmap实例
    var map = myChart.getModel().getComponent('bmap').getBMap();
    map.disableDoubleClickZoom();
    map.centerAndZoom("嘉兴", 13);

});