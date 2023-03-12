var uploadedDataURL = "/asset/get/s/data-1461573404128-HJ4Qv8og.json";

option = {
    grid: {
        left: 10,
        bottom: 20,
        containLabel: true,
        top: 80
    },
    xAxis: {
        type: 'value',
        name: 'Expectancy',
        nameLocation: 'middle'
    },
    yAxis: {
        type: 'value',
        scale: true,
        name: 'Life',
        nameLocation: 'middle',
        nameGap: 20
    },
    toolbox: {
        feature: {
            dataZoom: {}
        }  
    },
    dataZoom: {
        type: 'inside'  
    },
    series: []
};

$.getJSON(uploadedDataURL, function (data) {
    var series = data.series;
    
    option.visualMap = {
        show: false,
        min: 0,
        max: 100,
        dimension: 1,
        inRange: {
            colorLightness: [0.2, 0.9]
        }
    };
    
    option.legend = {
        data: data.counties,
        selectedMode: 'single',
        right: 100
    };
    
    data.counties.forEach(function (country) {
        var data = series.map(function (yearData) {
            var item = yearData.filter(function (item) {
                return item[3] === country;
            })[0];
            return {
                label: {
                    normal: {
                        show: item[4] % 10 === 0 && item[4] >  1950,
                        position: 'top'
                    },
                    emphasis: {
                        show: true
                    }
                },
                name: item[4],
                value: item
            };
        });
        var links = data.map(function (item, idx) {
            return {
                source: idx,
                target: idx + 1
            };
        });
        links.pop();
        
        option.series.push({
            name: country,
            type: 'graph',
            coordinateSystem: 'cartesian2d',
            data: data,
            links: links,
            edgeSymbol: ['none', 'arrow'],
            edgeSymbolSize: 5,
            legendHoverLink: false,
            lineStyle: {
                normal: {
                    color: '#333'
                }  
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#333'
                }  
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#333'  
                    },
                    position: 'right'
                }  
            },
            symbolSize: 10,
            animationDelay: function (idx) {
                return idx * 100
            }
        });
    });
    
    
    myChart.setOption(option);
});