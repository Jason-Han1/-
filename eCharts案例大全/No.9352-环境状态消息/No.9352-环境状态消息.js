option = {
    // 表头
    title: {
        text: '环境状态消息',
        subtext: '实时更新'
    },
    // 提示信息
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    // 说明
    legend: {
        data: ['温度', '光照强度', '湿度']
    },
    // 工具箱
    toolbox: {
        show: true,
        feature: {
            dataView: {
                readOnly: false
            },
            saveAsImage: {}
        }
    },
    xAxis: [{
        type: 'category',
        // 边界间隙(默认为true)
        boundaryGap: false,
        data: (function() {
            var now = new Date();
            var res = [];
            var len = 10;
            while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                now = new Date(now - 2000);
            }
            return res;
        })()
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        name: '温度/湿度',
        max: 80,
        min: 0,
        boundaryGap: [0, 0]
    }],
    // 定义初始化数据
    series: [{
        name: '温度',
        type: 'line',
        smooth: true,
        // 区域样式
        areaStyle: {},
        data: (function() {
            var res = [];
            var len = 0;
            while (len < 10) {
                res.push((Math.random() * 5 + 15).toFixed(1) - 0);
                len++;
            }
            return res;
        })()
    }]
};

// 定时刷新Echarts
setInterval(function() {
    // 格式化当前时间
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

    // Echarts图中显示的数据
    var data0 = option.series[0].data;

    // 定时提交变化新数据
    data0.shift();
    data0.push((Math.random() * 5 + 15).toFixed(1) - 0);

    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);

    myChart.setOption(option);
}, 2100);