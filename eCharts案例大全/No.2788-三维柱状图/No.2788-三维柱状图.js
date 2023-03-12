function getRandom(min, max, isInt) {
    isInt = isInt === false ? 0 : 1;
    min = Math.random() * (max - min + isInt) + min; // 节省一个变量
    return isInt ? Math.floor(min) : min;
}

function getRandomColor() {
    return `rgba(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)}, 1)`;
}

function generateData(rowIndex) {
    var data = [];

    for (var i = 0; i <= 10; i++) {
        for (var j = 0; j <= 10; j++) {
            data.push({
                value: [i/10, j/10, 0.1],
                itemStyle: {
                    width: 20,
                    height: 20,
                    color: rowIndex === 0 ? getRandomColor()  : getRandomColor(),
                },
            });
        }
    }
    return data;
}

var series = [];
for (var i = 0; i < 10; i++) {
    series.push({
        type: 'bar3D',
        data: generateData(i),
        stack: 'stack',
        shading: 'lambert',
        emphasis: {
            label: {
                show: false,
            },
        },
    });
}

console.log('series', series);

myChart.setOption({
    xAxis3D: {
        type: 'value',
        // splitLine: {
        //     show: false
        // }
    },
    yAxis3D: {
        type: 'value',
        // splitLine: {
        //     show: false
        // }
    },
    zAxis3D: {
        name: '张三',
        type: 'value',
        // max: 1,
        // axisTick: {
        //     show: false
        // },
        // axisLabel: {
        //     show: false
        // },
        // splitLine: {
        //     show: false
        // },
        // axisLine: {
        //     lineStyle: {
        //         color: '#fff'
        //     }
        // }
    },
    grid3D: {
        viewControl: {
            // autoRotate: true
        },
        light: {
            main: {
                shadow: false,
                quality: 'ultra',
                intensity: 1,
            },
        },
    },
    series: series,
});
