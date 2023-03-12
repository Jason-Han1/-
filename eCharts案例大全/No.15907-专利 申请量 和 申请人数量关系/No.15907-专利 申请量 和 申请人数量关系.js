var rawData = [
    [808, 81, 1980],
    [832, 95, 1981],
    [876, 92, 1982],
    [890, 95, 1983],
    [932, 134, 1984],
    [946, 103, 1985],
    [987, 234, 1986],
    [1098, 254, 1987],
    [1345, 267, 1988],
    [1657, 287, 1989],
    [2001, 308, 1990],
    [2546, 364, 1991],
    [3807, 387, 1992],
    [3890, 413, 1993],
    [5020, 532, 1994],
    [6123, 587, 1995],
    [6457, 598, 1996],
    [6578, 595, 1997],
    [7091, 605, 1998],
    [7149, 690, 1999],
    [8123, 813, 2000],
    [10020, 843, 2001],
    [10054, 1008, 2002],
    [12123, 1156, 2003],
    [14231, 1324, 2004],
    [16543, 1357, 2005],
    [18790, 1489, 2006],
    [13897, 1567, 2007],
    [9321, 1387, 2008],
    [7321, 1254, 2009],
    [7092, 1146, 2010]
];

var data = rawData.map(function (item) {
    var year = item[2];
    return {
        value: item,
        label: {
            normal: {
                show: year % 4 === 0,
                position: 'top'
            },
            emphasis: {
                show: true
            }
        },
        name: year
    };
});

var links = rawData.map(function (item, idx) {
    return {
        source: idx,
        target: idx + 1
    };
});
links.pop();
    
option = {
    title: {
        text: '专利 申请量 和 申请人数量关系'  
    },
    grid: {
        left: 10,
        bottom: 20,
        containLabel: true,
        top: 80
    },
    tooltip: {
    },
    xAxis: {
        type: 'value',
        nameLocation: 'middle'
    },
    yAxis: {
        type: 'value',
        scale: true,
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
    visualMap: {
        show: false,
        min: 0,
        max: 100,
        dimension: 1,
        inRange: {
            colorLightness: [0.2, 0.9]
        }
    },
    series: [{
        name: '申请量 - 申请人数量关系',
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
    }]
};
