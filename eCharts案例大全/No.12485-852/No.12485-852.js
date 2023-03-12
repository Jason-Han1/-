var uploadedDataURL = "/asset/get/s/data-1545900270544-5wKBFSOqK.txt";

function getData(raw) {
    var data = [];
    for (var i = 0, len = raw.length; i < len; ++i) {
        data.push({
            value: raw[i],
            itemStyle: {
                color: 'rgb(' + raw[i][0] + ',' + raw[i][1] + ',' + raw[i][2] + ')'
            }
        });
    }
    return data;
}

option = {
    xAxis3D: {
        type: 'value',
        min:-100,
        max:100
    },
    yAxis3D: {
        type: 'value',
        min: -100,
        max: 100
    },
    zAxis3D: {
        type: 'value',
        min: -100,
        max: 100
    },
    grid3D: {

    },
    series: {
        type: 'scatter3D',
        data: []
    }
}

$.get('/asset/get/s/data-1545900270544-5wKBFSOqK.txt', function(raw) {
    var rawData = JSON.parse(raw);
    var data = getData(rawData);

    myChart.setOption({
        series: {
            data: data
        }
    });
});