option = {
    title: {
         subtext: '单位：%',
		  left:100
        
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var str = ''; //声明一个变量用来存储数据
            const [a, b] = params;
            console.log(params)
            var a1 = `${a.seriesName}: ${a.value > 0 ? a.value : -a.value}`;
            var b1 = `${b.seriesName}: ${b.value > 0 ? b.value : -b.value}`;
            str = a1 + '</br>' + b1;
            return str;
        },
    },
    legend: {
        //位置需要与color对应，方可得到相应颜色
        data: ['2019年', '2018年']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: function(v) {
                return v > 0 ? v : -v;
            }
        }
    }],
    series: [
        {
            name: '2019年',
            type: 'bar',
            stack: '总量',
            data: [19.7,34.7,17.6,8.1,19.9]
        },
        {
            name: '2018年',
            type: 'bar',
            stack: '总量',
            data: [-37.6,-31.9,-11.4,-6.6,-12.9]
        },
    ]
};