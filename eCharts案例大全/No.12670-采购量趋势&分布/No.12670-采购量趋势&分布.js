setTimeout(function() {



    option = {
        backgroundColor:'#112842',
        legend: {},

        tooltip: {

            trigger: 'axis',

            showContent: false

        },

        dataset: {

            source: [

                ['product', '2014', '2015', '2016', '2017', '2018'],

                ['钢圈', 17, 17.5, 19, 20, 23],

                ['铝圈', 1.35, 1.5, 1.65, 1.9, 2.5],

                ['轮胎', 1.1, 2.1, 3.4, 4.5, 4.8],

                ['电子&内饰', 0.5, 0.65, 0.8, 1.5, 1.86],

                ['工具', 3.5, 6.5, 7.6, 12.5, 15.1]

            ]

        },

        xAxis: {
            type: 'category',
            name: '年'
        },

        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 千万元'
            },

            name: '采购额',
            gridIndex: 0
        },

        grid: {
            top: '55%'
        },

        series: [

            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },

            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },

            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },

            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },

            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },

            {

                type: 'pie',

                id: 'pie',

                radius: '30%',

                center: ['50%', '25%'],

                label: {

                    formatter: '{b}: {@2014} ({d}%)'

                },

                encode: {

                    itemName: 'product',

                    value: '2014',

                    tooltip: '2014'

                }

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



});