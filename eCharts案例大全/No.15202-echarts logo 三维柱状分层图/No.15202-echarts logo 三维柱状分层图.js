var img = new Image();
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

img.onload = function() {
    var width = canvas.width = Math.floor(img.width / 6);
    var height = canvas.height = Math.floor(img.height / 6);
    ctx.drawImage(img, 0, 0, width, height);
    var imgData = ctx.getImageData(0, 0, width, height);

    // StackBlur.imageDataRGBA(imgData, 5);

    var data = [];
    for (var i = 0; i < imgData.data.length / 4; i++) {
        var r = imgData.data[i * 4];
        var g = imgData.data[i * 4 + 1];
        var b = imgData.data[i * 4 + 2];
        var a = imgData.data[i * 4 + 3];
        if (a < 250) {
            continue;
        }

        var lum = (0.2125 * r + 0.7154 * g + 0.0721 * b);
        var barHeight = (lum - 125) / 4 + 50;
        lum /= 255;
        data.push({
            value: [i % width, height - Math.floor(i / width), barHeight],
            itemStyle: {
                color: [r / 255, g / 255, b / 255, 1.0]
            }
        });
    }


    myChart.setOption(option = {
        tooltip: {},
        xAxis3D: {
            type: 'value'
        },
        yAxis3D: {
            type: 'value'
        },
        zAxis3D: {
            type: 'value',
            min: 0,
            max: 100
        },
        grid3D: {
            show: false,
            viewControl: {
                alpha: 70,
                beta: 0,
                distance: 100,
                // panMouseButton: 'left',
                // rotateMouseButton: 'right'
            },
            postEffect: {
                enable: true,
                bloom: {
                    intensity: 0.05
                },
                depthOfField: {
                    enable: true,
                    blurRadius: 4,
                    fstop: 10,
                    focalDistance: 100
                },
                SSAO: {
                    enable: true,
                    radius: 3,
                    intensity: 1.5
                }
            },
            boxHeight: 20,
            environment: '#000',
            light: {
                main: {
                    shadow: true,
                    intensity: 2
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr',
                    exposure: 2,
                    diffuseIntensity: 1
                }
            }
        },
        series: [{
            type: 'bar3D',
            shading: 'lambert',
            barSize: 0.8,
            silent: true,
            data: data
        }]
    });
    
    // $('#chart-panel').css({
    //     'background-image': 'url(/asset/get/s/data-1497445317133-S1ap7hAf-.jpg)'
    // })
}

img.src = '/asset/get/s/data-1497444072981-Hkbek2CGZ.png';