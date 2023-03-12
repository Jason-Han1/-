var read = {
    '1959': 1,
    '1985': 1,
    '1986': 2,
    '1990': 2,
    '1991': 2,
    '1992': 2,
    '1994': 1,
    '1995': 1,
    '1996': 3,
    '1997': 5,
    '1999': 5,
    '2000': 4,
    '2001': 4,
    '2002': 9,
    '2003': 6,
    '2004': 13,
    '2005': 15,
    '2006': 15,
    '2007': 24,
    '2008': 29,
    '2009': 35,
    '2010': 49,
    '2011': 50,
    '2012': 33,
    '2013': 29,
    '2014': 30,
    '2015': 17,
    '2016': 2
};
var wish = {
    '1981': 2,
    '1986': 2,
    '1989': 2,
    '1992': 1,
    '1994': 1,
    '1997': 1,
    '1999': 2,
    '2000': 2,
    '2001': 2,
    '2002': 4,
    '2003': 8,
    '2004': 6,
    '2005': 9,
    '2006': 12,
    '2007': 12,
    '2008': 11,
    '2009': 10,
    '2010': 15,
    '2011': 15,
    '2012': 15,
    '2013': 13,
    '2014': 20,
    '2015': 28,
    '2016': 17
};
var readThisYear = {
    '1991': 1,
    '2001': 1,
    '2005': 1,
    '2008': 2,
    '2009': 2,
    '2010': 1,
    '2011': 7,
    '2012': 6,
    '2013': 4,
    '2014': 8,
    '2015': 9,
    '2016': 2
};
var startYear = 1980;

var color = ['#22C3AA', '#D0648A'];
option = {
    title: {
        text: '羡辙感兴趣的书的出版年份'
    },
    color: color,
    xAxis: {
        data: (function() {
            var d = [];
            for (var i = startYear; i < 2017; ++i) {
                d.push(i);
            }
            return d;
        })(),
        axisLine: {
            lineStyle: {
                color: '#888'
            }
        }
    },
    yAxis: [{
        axisLine: {
            lineStyle: {
                color: '#888'
            }
        }
    }],
    series: [{
        type: 'bar',
        name: '读过',
        data: (function() {
            var d = [];
            for (var i = startYear; i < 2017; ++i) {
                var all = read[i] || 0;
                var thisYear = readThisYear[i] || 0;
                d.push(all - thisYear || '-');
            }
            return d;
        })(),
        markPoint: {
            data: [{
                type: 'max'
            }]
        },
        stack: 'read',
        zlevel: 2
    }, {
        type: 'bar',
        name: '想读',
        data: (function() {
            var d = [];
            for (var i = startYear; i < 2017; ++i) {
                d.push(wish[i] || 0);
            }
            return d;
        })(),
        markPoint: {
            data: [{
                type: 'max'
            }]
        },
        zlevel: 2
    }, {
        type: 'line',
        name: '读过',
        data: (function() {
            var d = [];
            for (var i = startYear; i < 2017; ++i) {
                d.push(read[i] || '-');
            }
            return d;
        })(),
        markPoint: {
            data: [{
                type: 'max'
            }]
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: 'rgba(255, 255, 255, 0.1)'
                }, {
                    offset: 0.2,
                    color: 'rgba(34, 195, 170, 0.4)'
                }], false)
            }
        },
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        symbolSize: 0
    }, {
        type: 'line',
        name: '想读',
        data: (function() {
            var d = [];
            for (var i = startYear; i < 2017; ++i) {
                d.push(wish[i] || 0);
            }
            return d;
        })(),
        markPoint: {
            data: [{
                type: 'max'
            }]
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: 'rgba(255, 255, 255, 0.2)' // 0% 处的颜色
                }, {
                    offset: 0,
                    color: color[1] // 100% 处的颜色
                }], false)
            }
        },
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        symbolSize: 0
    }, {
        type: 'bar',
        name: '今年读过',
        data: (function() {
            var d = [];
            for (var i = startYear; i < 2017; ++i) {
                d.push(readThisYear[i] || '-');
            }
            return d;
        })(),
        stack: 'read',
        zlevel: 2,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0.8,
                    color: '#219886' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: color[0] // 100% 处的颜色
                }], false)
            }
        }
    }],
    tooltip: {},
    legend: {
        data: ['读过', '今年读过', '想读'],
        bottom: 10
    }
};