setTimeout(function() {

    option = {
        legend: {

        },



        dataset: {
            source: [
                ['pr', '三人班学费', '一对一学费'],
                ['阅读理解', 3500, 4000],
                ['完形填空', 3500, 4000],
                ['语法填空', 1500, 2000],
                ['短文改错', 1500, 2000],
                ['英语写作', 2000, 2500],
                ['词汇', 1500, 2000]
            ]
        },

        tooltip: {

            trigger: 'item',
           
            
             //axisPointer: {
            type: 'shadow',
            crossStyle: {
                color: '#999'
           //}
        },
        },

        xAxis: {
            type: 'category'
        },
        yAxis: {
            gridIndex: 0
        },
        grid: {
           top: '65%',left:'90'
        
        },
        series: [{
                type: 'bar',
                smooth: true,
                stack: '总量',
                seriesLayoutBy: 'row'
            },
            {
                type: 'bar',
                smooth: true,
                stack: '总量',
                seriesLayoutBy: 'row'
            },
            {
                type: 'bar',
                smooth: true,
                stack: '总量',
                seriesLayoutBy: 'row'
            },
            {
                type: 'bar',
                smooth: true,
                stack: '总量',
                seriesLayoutBy: 'row'
            },
            {
                type: 'bar',
                smooth: true,
                stack: '总量',
                seriesLayoutBy: 'row'
            },
            {
                type: 'bar',
                smooth: true,
                stack: '总量',
                seriesLayoutBy: 'row'
            },




            {
                name: '所需课时',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],
                center: ['50%', '30%'],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: [

                    {
                        value: 10,
                        name: '阅读理解'
                    },
                    {
                        value: 10,
                        name: '完形填空'
                    },
                    {
                        value: 5,
                        name: '语法填空'
                    },
                    {
                        value: 5,
                        name: '短文改错'
                    },
                    {
                        value: 10,
                        name: '英语写作'
                    },
                    {
                        value: 10,
                        name: '词汇'
                    },
                ]
            },
            {
                name: '题型分值',
                type: 'pie',
                radius: ['40%', '50%'],
                center: ['50%', '30%'],

                data: [{
                        value: 40,
                        name: '阅读理解'
                    },
                    {
                        value: 30,
                        name: '完形填空'
                    },
                    {
                        value: 15,
                        name: '语法填空'
                    },
                    {
                        value: 10,
                        name: '短文改错'
                    },
                    {
                        value: 25,
                        name: '英语写作'
                    },
                    {
                        value: 10,
                        name: '词汇'
                    },

                ]
            }
        ]


    };

    myChart.on('updateAxisPointer', function(event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    myChart.setOption(option);
    window.addEventListener("resize", function() {

        option.chart.resize();

    });

});