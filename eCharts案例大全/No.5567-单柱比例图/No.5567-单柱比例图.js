let data = [],
    typs = [],
    sourceData = [{
        "source": 0,
        "source_name": "无",
        "count": 4,
        "percent": null
    }, {
        "source": 1,
        "source_name": "一体机邀约",
        "count": 6,
        "percent": null
    }, {
        "source": 2,
        "source_name": "速检通邀约",
        "count": 9,
        "percent": null
    }, {
        "source": 3,
        "source_name": "问卷邀约",
        "count": 8,
        "percent": null
    }, {
        "source": 7,
        "source_name": "手动添加",
        "count": 4,
        "percent": null
    }, {
        "source": 8,
        "source_name": "抖音客户来源",
        "count": 0,
        "percent": null
    }, {
        "source": 9,
        "source_name": "服务卡邀约",
        "count": 13,
        "percent": null
    }, {
        "source": 10,
        "source_name": "心电邀约",
        "count": 0,
        "percent": null
    }, {
        "source": -10,
        "source_name": "散客",
        "count": 0,
        "percent": null
    }];

//- 数据格式化
sourceData.forEach((o) => {

    if (o.count > 0) {
        data.push(o.count);
        typs.push(o.source_name);
    }

})

let count = data.reduce(function(prev, curr, idx, arr) {
        return prev + curr;
    }),

    rich = {
        b: {
            fontSize: 16,
            padding: [20, 0, -20, 0],
        },
        d: {
            fontSize: 14,
            fontWeight: 100,
            padding: [2, 0, 0, 0]
        }
    },
    label = {
        normal: {
            show: true
        }
    },
    itemStyle = {
        barBorderRadius: 10
    },

    formatSeries = () => {
        let arr = []
        typs.forEach((o, i) => {
            arr.push({
                name: o,
                type: 'bar',
                stack: 'income',
                barWidth: 10,
                label: label,
                labelLine: {
                    normal: {
                        show: true,
                        length: 90,
                        length2: 45,
                        smooth: true,
                    }
                },
                itemStyle: itemStyle,
                data: [{
                    value: data[i],
                    label: {
                        normal: {
                            offset: [0, 0],
                            position: 'center',
                            formatter: [
                                '{b|' + o + '}',
                                '{d|新客:' + data[i] + '}',
                                '{d|占比:' + (data[i] / count * 100).toFixed(
                                    1) + '%}'
                            ].join('\n'),
                            rich: rich
                        }
                    }
                }]
            })
        })

        return arr;
    };

option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            let res = params.seriesName + '</br>新客：' + params.value + '</br>占比：' + (params.value /
                count * 100).toFixed(1) + '%';
            return res;
        }
    },
    xAxis: [{
        type: 'value',
        show: false,
        max: count, // 居中显示
    }],
    yAxis: [{
        type: 'category',
        show: false,
    }],
    legend: {
        show: true,
        top: 'top',
        textStyle: {
            fontSize: 12,
            color: '#c8c8c8'
        },
    },
    color: ['#618cff', '#ffa57c', '#fb7636', '#24b314', '#8452e7', '#00d3e2'],
    series: formatSeries(),

}