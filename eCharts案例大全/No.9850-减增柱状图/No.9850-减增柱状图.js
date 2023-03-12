
    var dataCost = ['5 名称.100', '4 名称.101', '3 名称.103','2 名称.104','1 名称.105']; //名字
    var visits = [92, 102, 89,110,103];//实际值
    var totalCost = [1,1,1,1,1]; //比例综合
    var cost = [0.2, 0.2, 0.8,0.1,0.2]; //百分比显示

    var data = {
        cost: cost,
        totalCost: totalCost,
        visits: visits,
        dataCost: dataCost
    };
    option = {
        grid: {
            left: '12%',
            right: '10%',
            top: '2%',
            bottom: '2%',
        },
        xAxis: {
            show: false,
        },
        yAxis: {
            type: 'category',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
        },
        series: [{
            type: 'bar',
            barGap: '-100%',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#1891d2',
                    fontSize: 10,
                    formatter: function(param) {
                        return '  '+data.visits[param.dataIndex] + 'w次';
                    },
                }
            },
            barWidth: '20%',
            itemStyle: {
                normal: {
                    // borderColor: '#4DCEF8',
                    // borderWidth: 0.1,
                    barBorderRadius: 2,
                    color: '#0d1940'
                },
            },
            z: 1,
            data: data.totalCost,
            // data: da
        }, {
            type: 'bar',
            barGap: '-98%',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    barBorderRadius: 1,
                    color: {
                        type: 'linear',
                        x: 0,
                        x1: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#49b7e6'
                            },
                            {
                                offset: 0.5,
                                color: '#8abdad'
                            },
                            {
                                offset: 1,
                                color: '#f5c64d'
                            },
                        ]
                    }
                },
            },
            max: 1,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    color: '#1891d2',
                    fontSize: 10,
                    formatter: function(param) {
                        return data.dataCost[param.dataIndex];
                    },
                }
            },
            labelLine: {
                show: false,
            },
            z: 2,
            data: data.cost,
        }]
    }