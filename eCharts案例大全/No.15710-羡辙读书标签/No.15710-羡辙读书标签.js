var rightBook = "/asset/get/s/data-1483080241722-ry5VfFmrx.png";
var leftBook = "/asset/get/s/data-1483080235153-ByX4GFQrx.png";

var bookBg = "/asset/get/s/data-1483079771848-B1VDlK7Bx.png";

var tagsAll = "/asset/get/s/data-1482907856060-SJ_0x1brx.json";
var tagsRead = "/asset/get/s/data-1482907801586-BJzsgkbrl.json";



var colors = ['#555', '#fff'];

option = {
    title: {
        text: '羡辙豆瓣读书 tag',
        bottom: 0,
        left: 'center'
    },
    series: [{
        type: 'wordCloud',
        gridSize: 20,
        sizeRange: [12, 45],
        rotationRange: [0, 0],
        shape: 'circle',
        data: [],
        left: 50,
        width: '45%',
        top: 60,
        height: '72%',
        textStyle: {
            normal: {
                color: '#555'
            },
            emphasis: {
                color: '#109b85'
            }
        }
    }, {
        type: 'wordCloud',
        gridSize: 20,
        sizeRange: [12, 45],
        rotationRange: [0, 0],
        shape: 'circle',
        data: [],
        left: '52%',
        width: '45%',
        top: 60,
        height: '72%',
        textStyle: {
            normal: {
                color: colors[1]
            },
            emphasis: {
                color: '#109b85'
            }
        }
    }, {
        type: 'scatter',
        data: [],
        color: [colors[0]],
        name: '所有读过想读的书'
    }, {
        type: 'scatter',
        data: [],
        color: [colors[1]],
        name: '2016读过的书'
    }],
    legend: {
        data: ['所有读过想读的书', '2016读过的书'],
        show: true
    },
    xAxis: {
        type: 'value',
        show: false
    },
    yAxis: {
        type: 'value',
        show: false
    },
    graphic: {
        elements: [{
            type: 'image',
            style: {
                image: bookBg,
                width: window.innerWidth - 60,
                x: 30,
                y: 40,
                height: window.innerHeight - 100
            }
        }]
    }
};


// load tag data
var tagsAllData = [];
var tagsReadData = [];
$.getJSON(tagsAll, function (data) {
    for (var name in data) {
        tagsAllData.push({
            name: name,
            value: data[name]
        });
    }

    $.getJSON(tagsRead, function (data) {
        for (var name in data) {
            tagsReadData.push({
                name: name,
                value: data[name]
            });
        }
    
        loadImage();
    });
});


// load mask image
function loadImage() {
    var leftImage = new Image();
    leftImage.onload = imageLoaded;
    leftImage.src = leftBook;
    
    var rightImage = new Image();
    rightImage.onload = imageLoaded;
    rightImage.src = rightBook;
    
    var loadedCnt = 0;
    function imageLoaded() {
        ++loadedCnt;
        if (loadedCnt === 2) {
            console.log(myChart);
            myChart.setOption({
                series: [{
                    maskImage: leftImage,
                    data: tagsAllData
                }, {
                    maskImage: rightImage,
                    data: tagsReadData
                }]
            });
        }
    }
}
