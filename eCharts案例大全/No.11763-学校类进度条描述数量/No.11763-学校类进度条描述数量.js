var spirit = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAkZJREFUWAnNVj1MVEEQntnDEEHNu2BlqOix1VgA0V4bA81xh5GEzoTCioJGY6xogBgLiEdpcrGFxsLaSCk9FEQ8Eg0kBNjxG3Bz7xGWt+/xLnebvNu9mdlvvtmZ/WGKtcHZ2ZsH+3tfReRBTBw+ZD4yTO+bq2vzoZNM3PBw/9dobucKJNIrVl7HMdPGCQJCfCNtQppeiDJhJAikgbdD3+MDZeKPbOin6kXoDVLTl7Bl2jTMdZVZkackNJbQB/7xEzDUQDGtK05Um5xDlyAAglvQL6i+XKveE7JjOs7aujcFWNbl8tTkX40Iyx9ljSzU3psC5HRI8JO3RS9rI3xqK0BorTIiMaXS5+bKpw2H6yfgLHL2cP4O/h5dnC6n9iFkw07eYuckBfXYOb2XQQlLQu4lgC023n/L3NWPmJuXgRUh86eA6c/OUv23OsE2zF8MKSy9BFCAQ+Xp6n2dLydSukY9XknBT8DSMll75eQilN4aKAI8BKPjBLwpIOLvzLSnUaACH+M4zHTNhkSvNl4CxtBc7DJSIgOhoFnsujcF1sp0eary5H80/TjZ2tK8KYC35y2nbfIOJx1PQccJeFPAht/i2bWpice1uoLvto6Lbn4CRN+aq3X3JvxQtGOH170pwA5oYBseK1Ms/x3H2PWQTUS1ysSZnvJfWt4UwEHiGe4cB/eGvoDXj4v2zLwbl3H0ovqMrQyeCVmGEflM3CDzmNmy0KuQeWJ4uwfr28Dj47wWijhv8PAFzGIIAdxy1oDtdpBxG4zU9z/FKLkY8NVKeAAAAABJRU5ErkJggg=='

var maxData = 2000;

option = {
    tooltip: {
    },
    xAxis: {
        show: false,
        max: maxData,
        splitLine: {show: false},
        offset: 10,
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        axisLabel: {
            margin: 10
        }
    },
    yAxis: {
        show: false,
        // data: ['2013', '2014', '2015', '2016'],
        data: ['2013'],
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 10,
            textStyle: {
                color: '#999',
                fontSize: 16
            }
        }
    },
    grid: {
        top: 'center',
        height: 200,
        left: 70,
        right: 100
    },
    series: [{
        // current data
        type: 'pictorialBar',
        symbol: spirit,
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        symbolClip: true,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: [891, 1220, 660, 1670],
        z: 10
    }, {
        // full data
        type: 'pictorialBar',
        itemStyle: {
            normal: {
                opacity: 0.2
            }
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        symbol: spirit,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: [2000],
        z: 5
    },{
        // current data
        type: 'pictorialBar',
        symbol: spirit,
        symbolRepeat: 'fixed',
        symbolOffset: [0,'200%'],
        symbolMargin: '5%',
        symbolClip: true,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: [891],
        z: 10
    },{
        // full data
        type: 'pictorialBar',
        itemStyle: {
            normal: {
                opacity: 0.2
            }
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        symbolOffset: [0,'200%'],
        symbol: spirit,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: [2000],
        z: 5
    }, ]
};

