var uploadedDataURL = "/asset/get/s/data-1464248983149-HJ1jcQNX.json";

$.getJSON(uploadedDataURL, function (data) {

    var points = [].concat.apply([], data.map(function (track) {
        return track.map(function (seg) {
            return seg.coord.concat([1]);
        });
    }));
    myChart.setOption({
        animation: false,
        bmap: {
            center: [120.13066322374, 30.240018034923],
            zoom: 14,
            roam: true
        },
        visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
            }
        },
        series: [{
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: points,
            pointSize: 5,
            blurSize: 6
        }]
    });

    var bmap = myChart.getModel().getComponent('bmap').getBMap();
    bmap.addControl(new BMap.MapTypeControl());
});