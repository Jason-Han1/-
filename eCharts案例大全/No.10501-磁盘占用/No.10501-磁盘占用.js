var symbol = 'path://M1012.31616 813.0048L888.28416 100.05504c-6.72256-44.19072-43.68896-78.05952-89.12896-79.91296H221.09184c-46.1824 1.88928-83.82464 36.79232-89.6256 82.05312L7.82848 813.04064C3.16928 827.31008 0 842.28608 0 858.12224c0 80.48128 65.24928 145.73568 145.73568 145.73568h728.67328c80.48128 0 145.73568-65.2544 145.73568-145.73568 0-15.872-3.16928-30.81728-7.82848-45.11744zM196.62336 87.80288h626.90304l109.26592 638.50496c-15.08352-5.26336-31.05792-8.71424-47.95904-8.71424H135.32672c-16.90112 0-32.87552 3.45088-47.95904 8.71424L196.62336 87.80288zM878.7456 937.0624H141.39904c-40.64768 0-73.73312-38.2976-73.73312-78.94528S100.75136 784.384 141.39904 784.384H878.7456c40.64768 0 73.73312 33.08544 73.73312 73.73312s-33.08544 78.94528-73.73312 78.94528z m-477.97248-406.84544h218.5984c40.2432 0 72.86784-32.62464 72.86784-72.86784s-32.62464-72.86784-72.86784-72.86784c0-60.34432-48.9216-109.30176-109.30176-109.30176-60.37504 0-109.30176 48.95744-109.30176 109.30176-40.2432 0-72.86784 32.62464-72.86784 72.86784s32.62976 72.86784 72.87296 72.86784z';

var labelSetting = {
    show: true,
    position: ['48%','40%'],
    formatter: function (param) {
        return (param.value / 100 * 100).toFixed(0) + '%';
    },
    textStyle: {
        fontSize: 18,
        fontFamily: 'Arial',
        color: '#fff'
    }
};

option = {
    tooltip: {
        formatter: '{a} : {c}%'
    },
    xAxis: {
        data: ['1'],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false}
    },
    yAxis: {
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false},
        splitLine: {show: false}
    },
    series: [{
        name: '已使用存储空间',
        type: 'pictorialBar',
        symbolClip: true,
        symbolBoundingData: 100,
        label: labelSetting,
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0, color: '#8099ff' // 0% 处的颜色
                }, {
                    offset: 0.5, color: '#6f74e1'
                }, {
                    offset: 1, color: '#5eb3ff' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        },
        data: [{
            value: 73,
            symbol: symbol
        }],
        z: 10
    }, {
        name: '总存储容量',
        type: 'pictorialBar',
        symbolBoundingData: 100,
        animationDuration: 0,
        itemStyle: {
            color: '#ccc'
        },
        data: [{
            value: 100,
            symbol: symbol
        }]
    }]
};