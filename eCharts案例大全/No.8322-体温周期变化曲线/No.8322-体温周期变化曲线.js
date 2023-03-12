option = {
    title: {
            text: '体温周期变化曲线'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            min:35,
            max:42,
            splitLine: {
                show: false
            }
        },
        toolbox: {
            left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            startValue: '周一'
        }, {
            type: 'inside'
        }],
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 35,
                lte: 37.3,
                color: '#37A2DA'
            }, {
                gt: 37.3,
                lte: 38.1,
                color: '#ffde33'
            }, {
                gt: 38.1,
                lte: 39.1,
                color: '#ff9933'
            }, {
                gt: 39.1,
                lte: 41,
                color: '#cc0033'
            }, {
                gt: 41,
                color: '#660099'
            }]
        },
        series: {
            name: '耳温',
            type: 'line',
            symbol: 'circle',
            data: ['36.8','39.4','41.3','36.5','38.2','37.8','36.4'],
            markLine: {
                silent: true,
                data: [{
                    yAxis: 37.3
                }, {
                    yAxis: 38.1
                }, {
                    yAxis: 39.1
                }, {
                    yAxis: 41
                }]
            }
        }

};