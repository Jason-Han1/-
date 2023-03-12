    // 数学期望
    var mean = 71.26;
    // 标准差
    var std = 9.816214;
    // 样本空间
    var sample = 1000;
    // 步进
    var step = (2 * mean - 0) / (sample - 1);
    // 因子
    var factor = (1.0 / (std * Math.sqrt(2*Math.PI)));
    // 待被除分母
    var denominator = 2.0 * std * std;

    // X点坐标
    var dataX = [];
    // y点坐标
    var dataY = [];

    // 初始化坐标
    for (var i = 0; i < sample; i++) {
        var x = getXvalue(i);
        dataX[i] = x;
        var y = getYvalue(x);
        dataY[i] = y;
    }

    function getXvalue(i) {
        return 0 + step * i;
    }

    function getYvalue(x) {
        var z = x - mean;
        var y = factor * Math.exp(-z * z / denominator);
        return y;
    }




    var option = {
        title: {
            text: '正态分布图',
            subtext: ''
        },
        legend: {
            'data': ['出现的几率']
        },
        toolbox: {
            show: true,
            feature: {
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: [{
            type: 'category',
            data: dataX
        }],
        'grid': {
            'y2': 100
        },
        splitLine: {
            show: false
        },
        yAxis: [{
            type: 'value',
            name: ''
        }],
        series: [{
            name: '出现的几率',
            type: 'line',
            data: dataY
        }]
    };