option = {
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false,
                optionToContent: function(opt) {
                    console.log(axisData)
                    var axisData = opt.xAxis[0].data;
                    var series = opt.series;
                    var table = '<table class="box" style="width:100%;text-align:center"><tbody><tr>' +
                        '<td>时间</td>' +
                        '<td>' + series[0].name + '</td>' +
                        '</tr>';
                    for (var i = 0, l = axisData.length; i < l; i++) {
                        table += '<tr>' +
                            '<td>' + axisData[i] + '</td>' +
                            '<td>' + series[0].data[i] + '</td>' +
                            '</tr>';
                    }
                    table += '</tbody></table>';
                    return table;
                }
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            saveAsImage: {
                show: true
            },
            restore: {
                show: true
            },
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '标题1',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};