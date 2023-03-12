var echartData = [35, 56, 50, 32, 38, 32],
    option = {
        backgroundColor: "#25c7e6",
        tooltip: {
            trigger: 'item',
            formatter: "{b}<br/>{c}%",
        },
        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '13%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            offset: 20,
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,1)'
                }
            },
            axisTick: {
                show: false
            },
            data: ['A1', 'B2', 'C3', 'D4', 'E5', 'F6', ],
        }],
        yAxis: [{
            show: false,
            type: 'value'
        }],

        series: [{
            name: '统计',
            barMaxWidth: '40%',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 0,
                    shadowColor: '#209ac5',
                    shadowOffsetX: 10,
                    shadowOffsetY: 15,
                    color: function(params) {
                        var colorList = [
                            '#ccff00','#ccff00','#ccff00','#ccff00','#ccff00','#ccff00'
                        ];
                        return colorList[params.dataIndex]
                    },
                    // label: {
                    //     show: true,
                    //     position: 'top',
                    //     formatter: function(params) {
                    //         var total = 0;
                    //         var percent = 0;
                    //         echartData.forEach(function(value, index) {
                    //             total += value;
                    //         });
                    //         percent = ((params.value / total) * 100).toFixed(2);
                    //         return '' + params.name + '\n\n' + params.value + '%，' + '' + percent + '%';
                    //     },
                    // }
                }
            },
            data: echartData,
        }]
    };