var uploadedDataURL = "/asset/get/s/data-1492170931766-Hk2huV0pl.json";



//A = 理论能收集的心率数据个数;

//B = 实际收集心率数据数量；

//区间百分比 =（ A - B) /A
$.get(uploadedDataURL, function(data) {
    data = JSON.parse(data);

    var selected = {};
    data.legend.forEach(function(id) {
        selected[id] = true;
    });
    myChart.setOption(option = {
        grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            top: '20%',
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            formatter: function(params) {
                if (params.value.length > 1) {
                    return params.seriesName + ' :<br/>' +
                        params.value[0] + ' ' +
                        params.value[1] + ' ';
                } else {
                    return params.seriesName + ' :<br/>' +
                        params.name + ' : ' +
                        params.value + 'kg ';
                }
            },
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            }
        },
        legend: {
            data: data.legend,
            left: 'right',
            selected: selected
        },
        xAxis: [{
            type: 'time',
            name: '时间',
            scale: true,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            name: '区间百分比',
            scale: true,
            axisLabel: {
                formatter: '{value}'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        }],
        series: data.data
    });
})