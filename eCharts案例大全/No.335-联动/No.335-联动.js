var option = {
        legend: {},
        tooltip: {
            //trigger: 'axis',
            showContent: false,
        },
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {type: 'category', 
                triggerEvent: true,
                //axisPointer: {show:true}
            },
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', symbolSize: 10},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', symbolSize: 10},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', symbolSize: 10},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', symbolSize: 10},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@[2012]} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
    };

setTimeout(function () {
    myChart.on('mouseover',function(params){

        if(params.componentType == "xAxis"){
            let xAxisInfo = params.value;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + xAxisInfo + ']} ({d}%)'
                    },
                    encode: {
                        value: xAxisInfo,
                        tooltip: xAxisInfo
                    }
                }
            });
        }
        if(params.componentType == "series" && params.seriesType == 'line'){
            let xAxisInfo = params.value[0];
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + xAxisInfo + ']} ({d}%)'
                    },
                    encode: {
                        value: xAxisInfo,
                        tooltip: xAxisInfo
                    }
                }
            });
        }
        setTimeout(function(){
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 4,
                dataIndex: params.seriesIndex
            });
        },300);         
    });

    myChart.on('mouseout',function(params){
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 4,
            dataIndex: params.seriesIndex
        });         
    });
},0);

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);