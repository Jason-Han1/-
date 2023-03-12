var uploadedDataURL = "/asset/get/s/data-1511365693708-BkLB2GXxG.csv";

var data = [];
$.get(uploadedDataURL).then(function(res) {
    res.split('\n').slice(1).forEach(function(l) {
        data.push(l.split(',').map(function(d) {
            return +d;
        }));
    });

    myChart.setOption({
        xAxis3D: {
            type: 'value'
        },
        yAxis3D: {
            type: 'value'
        },
        zAxis3D: {
            type: 'value'
        },
        grid3D: {
            viewControl: {
                // autoRotate: true
            },
            light: {
                main: {
                    shadow: true,
                    quality: 'ultra',
                    intensity: 1.5
                }
            }
        },
        series: [{
            type: 'scatter3D',
            data: data
        }]
    });
});