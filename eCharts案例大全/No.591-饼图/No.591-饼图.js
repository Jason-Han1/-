option = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['36%', '66%'],
        center: ['50%', '50%'],
        label: {
            fontSize: 13,
            color: '#333',
            formatter: function(param) {
                return param.name + '{per' + param.dataIndex + '|' + param.percent.toFixed(0) + '%}';
            },
            rich: {
                per0: {
                    padding: [0, 0, 0, 5],
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: '#ffc770'
                },
                per1: {
                    padding: [0, 0, 0, 5],
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: '#47d6ff'
                },
                per2: {
                    padding: [0, 0, 0, 5],
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: '#479eff'
                }
            }
        },
        labelLine: {
            show: true,
            // length: 6,
            // length2: 15
        },
        data: [{
            name:"张三",
            value: "300"
        },{
            name:"李四",
            value: "120"
        },{
            name:"王五",
            value: "556"
        }]
    }, {
        type: 'pie',
        radius: ['36%', '43%'],
        center: ['50%', '50%'],
        silent: true,
        data: [{
            name: '',
            value: 1,
        }]
    }]
}