
setTimeout(function () {

    option = {
        title: {
        text: '持股比例 ',
        
    },
        legend: {
        },
        tooltip: {
            trigger: 'axis',
            showContent: true
        },
        dataset: {
            dimensions: ['product', '高信誉白名单', '白名单', '黑名单'],
            source: [
                // [product:'高信誉白名单', '白名单', '黑名单'],
                {product:'客户A','高信誉白名单':305,'白名单':200,'黑名单':0},
                {product:'客户B','高信誉白名单':35,'白名单':200,'黑名单':10},
                {product:'客户C','高信誉白名单':33,'白名单':100,'黑名单':20},
                {product:'客户D','高信誉白名单':0,'白名单':20,'黑名单':200}
            ]
        
            // source: [
            //     ['product', '客户A', '客户B', '客户C','客户D'],
            //     ['高信誉白名单', 41.1, 30.4, 65.1],
            //     ['白名单', 86.5, 92.1, 85.7],
            //     ['黑名单', 24.1, 67.2, 79.5]
            // ]
        },
        xAxis: {type: 'category'},
    //      xAxis: [
    //     {
    //         type: 'category',
    //         data: ['客户A', '客户B', '客户C', '客户D'],
    //         axisTick: {
    //             alignWithLabel: true
    //         }
    //     }
    // ],
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'bar',seriesLayoutBy: 'row'},
            {type: 'bar',seriesLayoutBy: 'row'},
            {type: 'bar',seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                // radius: '30%',//饼图
                radius: ['20%', '40%'],//环装图 
                center: ['50%', '30%'],
                data: [
                {value: 0.3, name: '客户A持股'},
                {value: 0.3, name: '客户B持股'},
                {value: 0.3, name: '客户C持股'},
                {value: 0.1, name: '客户D持股'},
                
            ],
                label: {
                    formatter: '{b}: {@高信誉白名单} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '高信誉白名单',
                    tooltip: '高信誉白名单'
                }
            }
        ]
    };

    myChart.on('updateAxisPointer', function (event) {
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