var totalCost = [100, 100, 100,100]; //背景色比例
    var visits = [82.32, 73.56, 22.9,48.34]; //数值
    var grade = ['拨货率', '不良率', '拨备余额','租金回收率'];
    var data = {
        grade: grade,
        totalCost: totalCost,
        visits: visits,
    };
    option = {
        backgroundColor: '#ffffff',
        grid: {
        	top:30,
            left: 50,
            right: 50,
            bottom: 150,
            containLabel: true

        },
        tooltip: {
            show: false
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            type: 'category',
            
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                margin:90,
                textStyle: {
                    align:'left',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#171B1F'
                },
            },
            data: data.grade
        }, {
            type: 'category',

            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    
                    fontSize: 14,
                    color: '#54AFEE',
                },
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: data.visits
        }, ],
        series: [{

                type: 'bar',
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        show: true,
                        color: '#F0F0F0',
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                barWidth: '30%',

                data: data.totalCost
            },
            {

                type: 'bar',
                
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#6390F0'

                        }, {
                            offset: 1,
                            color: '#25EBE9'

                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                barWidth: '30%',

                data: data.visits
            }

        ]
    };