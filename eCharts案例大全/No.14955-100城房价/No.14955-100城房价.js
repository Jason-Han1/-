var uploadedDataURL = "/asset/get/s/data-1503486509574-HJU4MJjd-.json"; //二手房均价

// var uploadedDataURL = "/asset/get/s/data-1503473364754-Sk6R0i9dZ.json";//100城房价

$.getJSON(uploadedDataURL, function(linedata) {
    var legendData = [];
    var legendSelected = {};
    var seriesData = [];
    linedata.Table.map(function(e) {
        legendData.push(e.city);
        seriesData.push({
            name: e.city,
            type: 'line',
            data: e.Data.split(",")
        });
        if (["全国", "北京", "上海", "杭州", "宁波"].indexOf(e.city) == -1) {
            legendSelected[e.city] = false;
        }
    });
    var option = {
        title: {
            text: '房价'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: legendData,
            selected: legendSelected
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: linedata.month.split(",")
        },
        yAxis: {
            type: 'value',
        },
        series: seriesData
    };
    myChart.setOption(option)
})