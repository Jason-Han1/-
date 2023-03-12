    var data = [{
        "name": "重大隐患",
        "value": 12
    }, {
        "name": "较大隐患",
        "value": 15
    }, {
        "name": "一般隐患",
        "value": 10
    }];
    var total_datas = 0;
    for (var i = 0; i < data.length; i++) {
        total_datas += data[i].value
    }
    rich = {
        white: { //百分数样式
            color: "#333",
            fontSize: 16,
            align: 'center',
            padding: [12, 0]
        },
        yt: {
            color: "#333",
            fontSize: 16,
            padding: [10, 20]

        }
    };
    var seriesObj = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [60, 70],
        center: ['50%', '50%'],
        hoverAnimation: true,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: "#333",
                    fontSize: 16,
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < data.length; i++) {
                            total += data[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed();
                        if (params.name !== '') {
                            return '{white|' + params.name + '}' + '\n' + percent + '%';
                        } else {
                            return '';
                        }
                    },
                    rich: rich
                },
                labelLine: {
                    show: true, //是否显示指示线
                }
            }
        },
        data: data
    }];
    var option = {
        backgroundColor: "#fff",
        color: ['#FF3559', '#FC8422', '#0097FF', '#63CEFF', '#00A7FE'],
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)",
        },
        title: {
            text: total_datas + '个',
            subtext: '隐患总数',
            textStyle: {
                color: '#333',
                fontWeight: 'normal',
                fontSize: 16,
                align: 'center',
                padding: 20
            },
            textAlign: 'center',
            subtextStyle: {
                fontSize: 16,
                color: '#333',
                align: 'center',
                fontWeight: 'normal',
                padding: [20, 0]
            },
            textAlign: 'center',
            left: '50%',
            y: '47%',
        },
        series: seriesObj
    }