 option = {
        backgroundColor:'#cccded',
        color: ['#2592fe', '#5ae220', '#ffaf00'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            align: 'right',
            right: 10,
            textStyle: {
                color: '#FFFFFF',
            },
            data: ['余氯', 'PH值', '浊度']
        },
        grid: {
            left: '1%',
            right: '1%',
            top: '10%',
            bottom: '6%',
            containLabel: true
        },
        toolbox: {
            "show": false,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            "axisLine": {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            "axisTick": {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            "axisLine": {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#fff'
                }
            },
            "axisTick": {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            type: 'value'
        },
        series: [{
            name: '余氯',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [90, 50, 39, 50, 120, 82, 80]
        }, {
            name: 'PH值',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [70, 50, 50, 87, 90, 80, 70]
        }, {
            name: '浊度',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [290, 200,20, 132, 15, 200, 90]
        }]
    }