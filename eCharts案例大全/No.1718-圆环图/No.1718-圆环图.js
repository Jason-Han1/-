let barColor = ['#16FFF1', '#37D3FF', '#FA7575', '#FD9D66', '#FFE57C'].reverse();
// 计算总和
let total = 0;
data =  [
            {
                name: "其他",
                value: 2,
            },
            {
                name: "环境污染",
                value: 6,
            },
            {
                name: "城市管理",
                value: 18,
            },
            {
                name: "矛盾纠纷",
                value: 22,
            },
            {
                name: "其他",
                value: 2,
        }];
data.forEach((item) => {
    total += item.value;
});
let value = data.map(item => item.name);

option = {
    backgroundColor: '#313131',
    angleAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    radiusAxis: {
        type: 'category',
        data: value,
        z: 100,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    polar: {
        center: ['50%', '50%'],
        radius: ['20%', '96%']
    },
    tooltip: {
        show: true,
        formatter: (item) => {
            return `<span>${ item.name }<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${ barColor[item.dataIndex] }'></span>占比：${((item.value / total) * 100).toFixed(0)}%</span>`;
        }
    },
    series: [{
        type: 'bar',
        coordinateSystem: 'polar',
        barWidth: 6, // 10条数据的时候 10
        barGap: 10,
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(89,113,126,.5)'
        },
        itemStyle: {
            color: function (params) {
                var idx = params.dataIndex;
                return barColor[idx];
            }
        },
        roundCap: true,
        data: data.reverse()
    }]
};