var data = [{
            value: 535,
            name: '前科人员'
        }, {
            value: 310,
            name: '社康社健人员'
        }, {
            value: 234,
            name: '待抓捕人员'
        }];
        var option = {
            color: ['#019e97', '#14b4b2', '#84ccc9'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                left: '60%',
                y: 'center',
                formatter: function(name) {
                    var total = 0;
                    var target;
                    for (var i = 0, l = data.length; i < l; i++) {
                        total += data[i].value;
                        if (data[i].name == name) {
                            target = data[i].value;
                        }
                    }
                    var str = name + '  ' + target + '人' + '占  ' + ((target / total) * 100).toFixed(2) + '%';
                    return str;
                },
                data: ['前科人员', '社康社健人员', '待抓捕人员']
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['30%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    }
                },
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#e5e5e5',
                        borderWidth: 3,
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data
            }]
        };