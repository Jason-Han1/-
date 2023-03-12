let base = +new Date(2021, 9, 3);
let oneHour = 3600 * 1000;
data = [[base, Math.random() * 10 + 50]];
for (let i = 1; i < 24 * 7; i++) {
    let now = new Date((base += oneHour));
    data.push([now, Math.abs(Math.round(Math.random() * 10 + 50))]);
}
option = {
    tooltip: {
        trigger: 'axis',
        confine: true,
        position: function (pt) {
            return [pt[0], '10%'];
        },
    },
    xAxis: {
        type: 'time',
        boundaryGap: false,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            formatter: function (value, index) {
                var date = new Date(value);
                let m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
                    d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                return m + '/' + d;
            },
        },
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        name: '单位：次',
        splitLine: {
            show: false,
        },
        max: function (value) {
            return value.max;
        },
    },
    grid: {
        left: '10%',
        top: '25%',
        right: '5%',
        bottom: '12%',
    },
    textStyle: {
        color: '#008eff',
    },
    legend: {
        right: '5%',
        top: '20%',
        textStyle: {
            color: '#008eff',
        },
    },
    series: [
        {
            name: '告警次数',
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0,142,255,0.5)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,142,255,0)', // 100% 处的颜色
                        },
                    ],
                },
            },
            lineStyle: {
                color: '#008eff',
            },
            data: data,
        },
    ],
};
