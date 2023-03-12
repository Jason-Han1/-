var uploadedDataURL = "/asset/get/s/data-1504965328785-rJKAz_-cW.json";

$.get(uploadedDataURL, function(points) {
    points = JSON.parse(points);
    points = JSON.parse(points);
    var colorList = ['#778899', '#FFD700', '#7CFC00', "#00BFFF", '#FF8C00', "#FF0000", "#9400D3"];
    var labels = ["0", "0~10", "10~20", "20~30", "30~50", "50~80", ">80"];
    var series = labels.map((i, j) => {
        var name = i;
        var data = points[name];
        for (var index in data) {
            var tempArr = [];
            var tempStr = String(data[index]);
            tempArr.push(Number(tempStr.split(',')[0]));
            tempArr.push(Number(tempStr.split(',')[1]));
            tempArr.push(tempStr.split(',')[2]);
            tempArr.push(tempStr.split(',')[3]);
            data[index] = tempArr;
        }
        var color = colorList[j];
        return {
            name: name,
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: data,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            itemStyle: {
                normal: {
                    color: color
                }
            },
            blendMode: 'lighter'
        }
    });
    myChart.setOption(option = {
        animation: true,
        bmap: {
            center: [125.35, 43.86],
            zoom: 12,
            roam: true,
            mapStyle: {
                style: 'dark'
            },
        },
        legend: {
            orient: 'vertical',
            bottom: '55',
            left: '1',
            backgroundColor: "rgba(255,255,255,0.6)",
            data: labels.reverse(),
            formatter: (name) => {
                return '速度:' + name + 'km/h';
            }
        },
        series: series,
        tooltip: {
            formatter: function(params) {
                var retStr = '车牌号: ' + params.data[3] + '<br />经度: ' + params.data[0] + '   纬度: ' + params.data[1] + '<br />速度: ' + params.data[2] + '    km/h';
                return retStr;
            }
        },
    });
});