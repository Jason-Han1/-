var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var imgData;
var currentImg;
var config = {
    scale: 0.25,
    roughness: 0.53,
    metalness: 0.81,
    projection: 'orthographic',
    depthOfField: 0,
    lockY: false,
    move: true,
    sameColor: false,
    color: '#777',
    colorContrast: 1.4,
    lightIntensity: 10,
    lightColor: '#fff',
    lightRotate: 30,
    lightPitch: 10,
    AO: 1.5,
    showEnvironment: false,
    barNumber: 152,
    barBevel: 0.44,
    barSize: 1,
};
option = {
    tooltip: {},
    backgroundColor: '#000',
    xAxis3D: {
        type: 'value',
    },
    yAxis3D: {
        type: 'value',
    },
    zAxis3D: {
        type: 'value',
        min: 0,
        max: 100,
    },
    grid3D: {
        show: false,
        viewControl: {
            projection: 'perspective',
            alpha: 45,
            beta: -45,
            panSensitivity: config.move ? 1 : 0,
            rotateSensitivity: config.lockY ? [1, 0] : 1,
            damping: 0.9,
            distance: 60,
        },
        postEffect: {
            enable: true,
            bloom: {
                intensity: 0.2,
            },
            screenSpaceAmbientOcclusion: {
                enable: true,
                intensity: 1.5,
                radius: 5,
                quality: 'high',
            },
            screenSpaceReflection: {
                enable: true,
            },
            depthOfField: {
                enable: true,
                blurRadius: config.depthOfField,
                fstop: 10,
                focalDistance: 55,
            },
        },
        boxDepth: 100,
        boxHeight: 20,
        environment: 'none',
        light: {
            main: {
                shadow: true,
                intensity: 2,
            },
            ambientCubemap: {
                texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
                exposure: 2,
                diffuseIntensity: 0.2,
                specularIntensity: 1.5,
            },
        },
    },
};
function updateData(data, width, height) {
    console.time('update');
    var dataItem = [];
    var dataProvider = {
        getItem: function (i) {
            var r = data[i * 4];
            var g = data[i * 4 + 1];
            var b = data[i * 4 + 2];

            var lum = 0.2125 * r + 0.7154 * g + 0.0721 * b;
            lum = (lum - 125) * config.scale + 50;
            dataItem[0] = i % width;
            dataItem[1] = height - Math.floor(i / width);
            dataItem[2] = lum;
            return dataItem;
        },
        count: function () {
            return data.length / 4;
        },
    };

    myChart.setOption({
        grid3D: {
            boxWidth: (100 / height) * width,
        },
        series: [
            {
                animation: false,
                type: 'bar3D',
                shading: 'realistic',
                realisticMaterial: {
                    roughness: config.roughness,
                    metalness: config.metalness,
                },
                barSize: config.barSize,
                bevelSize: config.barBevel,
                silent: true,
                itemStyle: {
                    color: config.sameColor
                        ? config.color
                        : function (params) {
                              var i = params.dataIndex;
                              var r = data[i * 4] / 255;
                              var g = data[i * 4 + 1] / 255;
                              var b = data[i * 4 + 2] / 255;
                              var lum = 0.2125 * r + 0.7154 * g + 0.0721 * b;
                              r *= lum * config.colorContrast;
                              g *= lum * config.colorContrast;
                              b *= lum * config.colorContrast;
                              return [r, g, b, 1];
                          },
                },
                data: dataProvider,
            },
        ],
    });
    setTimeout(function () {
        myChart.getZr().refresh();
    }, 100);
}
function loadImage(img) {
    var height = (canvas.height = Math.min(config.barNumber, img.height));
    var aspect = img.width / img.height;
    var width = (canvas.width = Math.round(height * aspect));

    ctx.drawImage(img, 0, 0, width, height);

    imgData = ctx.getImageData(0, 0, width, height);

    updateData(imgData.data, width, height);
}
function updateDataWhenChange() {
    if (imgData) {
        updateData(imgData.data, imgData.width, imgData.height);
    }
}

function updateControlAndLight() {
    myChart.setOption({
        grid3D: {
            environment: config.showEnvironment ? 'auto' : '#000',
            viewControl: {
                panSensitivity: config.move ? 1 : 0,
                rotateSensitivity: config.lockY ? [1, 0] : 1,
            },
            light: {
                main: {
                    intensity: config.lightIntensity,
                    color: config.lightColor,
                    alpha: config.lightPitch,
                    beta: config.lightRotate,
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
                },
            },
            postEffect: {
                screenSpaceAmbientOcclusion: {
                    intensity: config.AO,
                },
            },
        },
    });
}
function readFile(file) {
    if (!file || !file.type.match(/image/)) {
        return;
    }

    var fileReader = new FileReader();
    fileReader.onload = function (e) {
        img = new Image();
        img.onload = function () {
            loadImage(img);
            currentImg = img;
        };
        img.src = e.target.result;
    };
    fileReader.readAsDataURL(file);
}
$('<div id="image-upload">将图片拖到此处或点击上传</div>').appendTo($('#chart-panel')).css({
    width: '200px',
    height: '50px',
    'line-height': '50px',
    'text-align': 'center',
    cursor: 'pointer',
    'font-size':'12px',
    background: 'rgba(0, 255, 255, 0.1)',
    'border-radius': '4px',
    border: '1px dashed #0ff',
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    'z-index': '10',
    color: '#0ff',
});
$('#image-upload').on('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
});
$('#image-upload')[0].addEventListener('drop', function (e) {
    e.stopPropagation();
    e.preventDefault();

    var files = e.dataTransfer.files;
    return readFile(files[0]);
});
$('#image-upload').on('click', function () {
    var $file = $('<input type="file" />');
    $file.on('change', function (e) {
        readFile(e.target.files[0]);
    });
    $file.click();
});
var img = new Image();
img.onload = function () {
    loadImage(img);
    currentImg = img;
};
img.src = '/asset/get/s/data-1627544052697-LqMgjlaLP.png';
