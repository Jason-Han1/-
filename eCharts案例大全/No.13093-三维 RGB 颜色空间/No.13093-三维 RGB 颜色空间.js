function getData(raw) {
    var data = [];
    for (var i = 0, len = raw.length; i < len; ++i) {
        data.push({
            value: raw[i],
            itemStyle: {
                color: 'rgb(' + raw[i][0] + ',' + raw[i][1] + ',' + raw[i][2] + ')'
            }
        });
    }
    return data;
}

option = {
    xAxis3D: {
        type: 'value',
        min: 0,
        max: 255
    },
    yAxis3D: {
        type: 'value',
        min: 0,
        max: 255
    },
    zAxis3D: {
        type: 'value',
        min: 0,
        max: 255
    },
    grid3D: {
        
    },
    series: {
        type: 'scatter3D',
        data: []
    }
}

$.get('https://webserver-1256209664.cos.ap-shanghai.myqcloud.com/misc/given_colors1.txt', function (raw) {
   var rawData = JSON.parse(raw);
   var data = getData(rawData);
   
   myChart.setOption({
       series: {
           data: data
       }
   });
});
