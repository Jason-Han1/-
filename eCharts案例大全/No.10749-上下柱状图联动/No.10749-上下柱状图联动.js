 var max = 100, xIdxs = [], value1 = [], value2 = [];
    for (var i = 0; i < 100; i++) {
        value1.push((Math.random() * 100).toFixed(0));
        value2.push((Math.random() * 100).toFixed(0));
        xIdxs.push("num" + (i + 1));
    }
    var option = {
        title: {
            left: 'center',
            text: "随机数"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: [{
            top: 40,
            bottom: '48%',
            left: 10,
            right: 10,
            containLabel: true
        }, {
            top: '54%',
            bottom: 20,
            left: 10,
            right: 10,
            containLabel: true
        }],
        xAxis: [{
            show: true,
            type: 'category',
            axisTick: {show: false},
            data: xIdxs
        }, {
            show: true,
            type: 'category',
            gridIndex: 1,
            axisTick: {show: false},
            axisLabel: {show: false},
            data: xIdxs
        }],
        yAxis: [{
            show: true,
            type: 'value',
            max: max,
            axisTick: {show: false},
            splitLine: {show: false}
        }, {
            show: true,
            type: 'value',
            max: max,
            gridIndex: 1,
            inverse: true,
            axisTick: {show: false},
            splitLine: {show: false}
        }],
        dataZoom: [{
            type: 'slider',
            height: 20, //组件高度
            left: 20, //左边的距离
            right: 15, //右边的距离
            bottom: 5, //底边的距离
            endValue: 10,
            xAxisIndex: [0, 1],
        }, {
            type: 'inside'
        }, {
            type: 'inside',
            xAxisIndex: [0, 1]//两个滚轴（让第二个serie的滚动能联动第一个serie）
        }],
        series: [{
            name: '男随机数',
            type: 'bar',
            z: 3,
            barWidth: '40%',
            data: value1
        }, {
            name: '女随机数',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 3,
            barWidth: '40%',
            data: value2
        }]
    };
