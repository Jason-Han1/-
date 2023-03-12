var uploadedDataURL = "/asset/get/s/data-1464010965793-ByCCuFlX.csv";

function calculateMA(dayCount, data) {
    var result = [];
    for (var i = 0, len = data.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data[i - j][1];
        }
        result.push(sum / dayCount);
    }
    return result;
}

myChart.showLoading();
$.get(uploadedDataURL, function (csvStr) {
    myChart.hideLoading();
    
    var res = Papa.parse(csvStr).data.slice(2);
    
    console.log(Papa.parse(csvStr));
    
    res = res.reverse();
    
    var dates = res.map(function (item) {
        return item[0];
    });
    
    var data = res.map(function (item) {
        return [+item[1], +item[2], +item[5], +item[6]];
    });
    
    myChart.setOption(option = {
        legend: {
            data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
        },
        tooltip: {
            trigger: 'axis'  
        },
        xAxis: {
            type: 'category',
            data: dates
        },
        yAxis: {
            scale: true,
            scale: true
        },
        dataZoom: [{
            
        }, {
            type: 'inside'
        }],
        animation: false,
        series: [
            {
                type: 'candlestick',
                name: '日K',
                data: data
            },
            {
                name: 'MA5',
                type: 'line',
                data: calculateMA(5, data),
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                }
            },
            {
                name: 'MA10',
                type: 'line',
                data: calculateMA(10, data),
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                }
            },
            {
                name: 'MA20',
                type: 'line',
                data: calculateMA(20, data),
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                }
            },
            {
                name: 'MA30',
                type: 'line',
                data: calculateMA(30, data),
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                }
            }
        ]
    });
});