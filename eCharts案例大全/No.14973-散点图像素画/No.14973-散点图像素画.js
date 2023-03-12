var uploadedDataURL = "/asset/get/s/data-1503306613861-ByR_mXudZ.png";

xDotCnt = 32;
yDotCnt = 32;

option = {
    grid: {
        width: 400,
        height: 400,
        left: 200
    },
    xAxis: {
        min: 0,
        max: xDotCnt - 1,
        type: 'value',
        show: false
    },
    yAxis: {
        min: 0,
        max: yDotCnt - 1,
        type: 'value',
        inverse: true,
        show: false
    },
    series: [],
    title: {
        text: '散点图像素画'
    },
    animationDuration: function(id) {
        return (id * 2 + Math.random() * 100 + 3) * 5;
    },
    animationDelay: function(id) {
        return (Math.random() * 1000) * 5;
    }
};

getPixels(uploadedDataURL, setOption);


var btn = document.createElement('button');
btn.style.position = 'absolute';
btn.style.top = '50px';
btn.style.marginLeft = '10px';
btn.innerHTML = '上传图片';
btn.setAttribute('onclick', 'upload()');
document.body.appendChild(btn);

var file = document.createElement('input');
file.style.display = 'none';
file.setAttribute('type', 'file');
file.setAttribute('onchange', 'imageSelected(this.files)');

window.upload = function () {
    file.click();
};

window.imageSelected = function (files) {
    if (files && files.length > 0) {
        var reader = new FileReader();
        reader.onload = function(e) { 
            getPixels(e.target.result, setOption);
        };
        reader.readAsDataURL(files[0]); 
    }
};


function setOption(pixels) {
    var series = {
        type: 'scatter',
        symbol: 'circle',
        symbolSize: [12, 12],
        data: []
    };
    
    for (var i = 0, x = 0, y = 0, len = pixels.length; i < len; ++i) {
        if (pixels[i] && pixels[i] !== '-') {
            series.data.push({
                value: [y, x],
                itemStyle: {
                    normal: {
                        color: pixels[i]
                    }
                }
            });
        }
        
        ++x;
        if (x === xDotCnt) {
            // Next line
            ++y;
            x = 0;
        }
    }
    
    option.series = series;
    
    myChart.setOption(option, true);
}


function getPixels(url, cb) {
    var canvasRatio = 1;
    var canvas = document.createElement('canvas');
    canvas.width = xDotCnt * canvasRatio;
    canvas.height = yDotCnt * canvasRatio;
    var ctx = canvas.getContext('2d');
    
    var img = new Image();
    img.onload = function () {
        var x = 0;
        var y = 0;
        var width = canvas.width;
        var height = canvas.height;
        
        if (img.width > img.height) {
            y = (img.width - img.height) / 2 
                / img.width * canvas.width;
            height = img.height / img.width * canvas.width;
        }
        else if (img.width < img.height) {
            x = (img.height - img.width) / 2
                / img.height * canvas.height;
            width = img.width / img.height * canvas.height;
        }
        ctx.drawImage(img, x, y, width, height);
        
        var pixels = [];
        for (var x = 0; x < xDotCnt; ++x) {
            for (var y = 0; y < yDotCnt; ++y) {
                var data = ctx.getImageData(
                    x * canvasRatio, y * canvasRatio, 1, 1
                ).data;
                pixels.push(getHex(data[0], data[1], data[2], data[3]));
            }
        }
        
        if (typeof cb === 'function') {
            cb(pixels);
        }
    };
    img.src = url;
}


function getHex(r, g, b, a) {
    if (a === 0) {
        return '-';
    }
    else {
        var color = [r, g, b];
        var hex = '#';
        for (var c = 0; c < color.length; ++c) {
            var d = color[c].toString(16);
            if (d.length < 2) {
                d = '0' + d;
            }
            hex += d;
        }
        return hex;
    }
}
