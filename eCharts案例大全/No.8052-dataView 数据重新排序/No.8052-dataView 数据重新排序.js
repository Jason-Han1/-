option = {
    title: {
        text: 'dataView 数据重新排序'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    toolbox: {
        feature: {
            dataView: {
                readOnly: false,
                optionToContent: function(opt) {
                    var axisData = opt.xAxis[0].data;
                    var series = opt.series;
                    var indexSorted = [];

                    // 准备一个 index 列表
                    axisData.forEach((num, index) => {
                        indexSorted[index] = index;
                    });
                    
                    // 对 index 列表按 series[0] 数值大小重新排序
                    indexSorted = indexSorted.sort(function(a, b) {
                        return series[0].data[a] - series[0].data[b];
                    });
                    
                    var table = '<table style="width:100%;text-align:center"><tbody><tr>' +
                        '<td>时间</td>' +
                        '<td>' + series[0].name + '</td>' +
                        '<td>' + series[1].name + '</td>' +                        
                        '</tr>';


                    console.log(opt);
                    for (var i = 0, l = indexSorted.length; i < l; i++) {
                        table += '<tr>' +
                            '<td>' + axisData[indexSorted[i]] + '</td>' +
                            '<td>' + series[0].data[indexSorted[i]] + '</td>' +
                            '<td>' + series[1].data[indexSorted[i]] + '</td>' +
                            '</tr>';
                    }
                    table += '</tbody></table>';
                    return table;
                }
            }
        }

    },
    series: [{
        type: 'line',
        name: 'series1',
        data: [220, 182, 191, 234, 290, 330, 310]
    },{
        type: 'line',
        name: 'series2',
        data: [210, 122, 131, 234, 130, 230, 150]
    }]
};