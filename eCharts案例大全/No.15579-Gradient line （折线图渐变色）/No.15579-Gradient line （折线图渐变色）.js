var uploadedDataURL = "/asset/get/s/data-1469156830975-S1PyA-yO.json";


$.getJSON(uploadedDataURL, function (data) {
    
    data = data.slice(0, 50);
    var dateList = data.map(function (item) {
        return item[0];
    });
    var valueList = data.map(function (item) {
        return item[1];
    });
    
    myChart.setOption(option = {

        // Make gradient line here
        visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
        }, {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1
        }],

        
        title: [{
            left: 'center',
            text: 'Gradient along the y axis'
        }, {
            top: '55%',
            left: 'center',
            text: 'Gradient along the x axis'
        }],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            data: dateList
        }, {
            data: dateList,
            gridIndex: 1
        }],
        yAxis: [{
            splitLine: {show: false}
        }, {
            splitLine: {show: false},
            gridIndex: 1
        }],
        grid: [{
            bottom: '60%'  
        }, {
            top: '60%'
        }],
        series: [{
            type: 'line',
            data: valueList
        }, {
            type: 'line',
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1
        }]
    });
});