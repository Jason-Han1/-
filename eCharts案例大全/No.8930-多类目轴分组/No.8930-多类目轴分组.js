    //  请用echarts 4.5版本以上观看
    var labelCatch = "";
    var tickCatch = "";
    var formValue = "";
    var option = {
        title: {},
        grid: {
            bottom: 80
        },
        xAxis: [{
                data: ['1', '2', '3', 'a', 'b', 'c', 'd', 'A', 'B', 'C', '更新', '渲染'],
                offset: 0,
                position: 'bottom',
            },
            {
                position: 'bottom',
                offset: 20,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    width: '100%',
                    backgroundColor: '#4f2',
                    formatter: function(value, index) {
                        if (formValue === value) {
                            return ''
                        } else {
                            formValue = value;
                            return formValue
                        }

                    },
                },
                axisTick: {
                    length: 20,
                    lineStyle: {},
                    // alignWithLabel: true,
                    interval: function(index, value) {
                        if (tickCatch === value && index !== 0) {
                            return false
                        } else {
                            tickCatch = value;
                            return true
                        }

                    },
                },

                data: ['数字', '数字', '数字', '小写字母', '小写字母', '小写字母', '小写字母', '大写字母', '大写字母', '大写字母', '中文', '中文']
            }
        ],
        dataZoom: {
            xAxisIndex: [0, 1],
        },
        yAxis: {},
        series: [{
            type: 'line',
            data: [234, 284, 224, 193, 223, 310, 336, 123, 310, 336, 123, 310, 2310]
        }]
    };