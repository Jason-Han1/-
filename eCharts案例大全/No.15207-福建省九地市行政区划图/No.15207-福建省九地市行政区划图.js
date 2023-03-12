var uploadedDataURL = "/asset/get/s/data-1497420512483-HyukmI0GZ.json";

var uploadedDataURL = "/asset/get/s/data-1497420509004-BkBy7UCGb.json";

var uploadedDataURL = "/asset/get/s/data-1497420499902-BynAfUAMb.json";

var uploadedDataURL = "/asset/get/s/data-1497420496282-Hkd0zLAzZ.json";

var uploadedDataURL = "/asset/get/s/data-1497420493340-B1HAMI0GZ.json";

var uploadedDataURL = "/asset/get/s/data-1497420489494-HkWCGURzb.json";

var uploadedDataURL = "/asset/get/s/data-1497420479126-Skw6MI0GW.json";

var uploadedDataURL = "/asset/get/s/data-1497419670800-BJyoJICGb.json";

var uploadedDataURL = "/asset/get/s/data-1497419668642-ryaqyL0MW.json";

var uploadedDataURL = "/asset/get/s/data-1497419665993-Hy95kURfb.json";

app.title = '34 省切换查看';

var provinces = ['1497419665993-Hy95kURfb', '1497419668642-ryaqyL0MW', '1497419670800-BJyoJICGb', '1497420479126-Skw6MI0GW', '1497420489494-HkWCGURzb', '1497420493340-B1HAMI0GZ', '1497420496282-Hkd0zLAzZ', '1497420499902-BynAfUAMb', '1497420509004-BkBy7UCGb', '1497420512483-HyukmI0GZ'];
var provincesText = ['全省', '福州', '厦门', '宁德', '莆田', '泉州', '漳州', '龙岩', '三明', '南平'];

function showProvince() {
    var name = provinces[currentIdx];

    // myChart.showLoading();

    $.get('/asset/get/s/data-' + name + '.json', function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#fff',
            title: {
                text: provincesText[currentIdx],
                left: 'center',
                textStyle: {
                    color: '#000'
                }
            },
            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgb(0,0,230',
                        areaColor: 'rgb(150,190,210',
                        borderWidth: 2
                    }
                },
                animation: false
                    // animationDurationUpdate: 1000,
                    // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

var currentIdx = 0;

option = {
    graphic: [{
        id: 'left-btn',
        type: 'circle',
        shape: {
            r: 20
        },
        style: {
            text: '<',
            fill: '#eee'
        },
        left: 10,
        top: 'middle',
        onclick: function() {
            currentIdx -= 1;
            if (currentIdx < 0) {
                currentIdx += provinces.length;
            }
            showProvince();
        }
    }, {
        id: 'right-btn',
        type: 'circle',
        shape: {
            r: 20
        },
        style: {
            text: '>',
            fill: '#eee'
        },
        top: 'middle',
        right: 10,
        onclick: function() {
            currentIdx = (currentIdx + 1) % provinces.length;
            showProvince();
        }
    }],

    series: []
};

showProvince();