let XY = [];
for (i = -30; i <= 30; i++) {
    if (i !== 0) {
        if (i === 1) {
            XY.push([null,null]);
        }
        XY.push([i, Math.pow(i, -1)]);
    } else {
        continue;
    }
}

option = {
    title: {
        text: '函数曲线：y = x^-1'
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: (value) => {
            const v = `${value.marker} 坐标：( ${value.data[0]} , ${value.data[1].toFixed(3)} )`;
            return v;
        }
    },
    xAxis: {
        axisLine: {
            symbol: ['none', 'arrow']
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        minorTick: {
            show: true,
            splitNumber: 10
        }
    },
    yAxis: {
        axisLine: {
            symbol: ['none', 'arrow']
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        minorTick: {
            show: true
        }
    },
    series: [{
        symbolSize: 5,
        data: XY,
        type: 'line'
    }]
};