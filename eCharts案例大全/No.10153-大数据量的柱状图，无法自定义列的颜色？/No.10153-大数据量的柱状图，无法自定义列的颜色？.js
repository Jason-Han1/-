
var dataCount = 5e2;
var data = generateData(dataCount);

var option = {
    title: {
        text: echarts.format.addCommas(dataCount) + ' Data',
        left: 10
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: false
            },
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        bottom: 90
    },
    dataZoom: [{
        type: 'inside'
    }, {
        type: 'slider'
    }],
    xAxis: {
        data: data.categoryData,
        silent: false,
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }
    },
    yAxis: {
        splitArea: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        data: data.valueData,
        itemStyle: {
            normal: {
              color: data => {
                if (data.value > 5000) {
                  return '#e01f54';
                }
                return '#6be6c1';
              },
            },
        },  
        // Set `large` for large data amount
        large: true,
        largeThreshold:5000   //开启绘制优化的阈值  
    }]
};

function generateData(count) {
    var baseValue = Math.random() * 1000;
    var time = +new Date(2011, 0, 1);
    var smallBaseValue;

    function next(idx) {
        smallBaseValue = idx % 30 === 0
            ? Math.random() * 700
            : (smallBaseValue + Math.random() * 500 - 250);
        baseValue += Math.random() * 20 - 10;
        return Math.max(
            0,
            Math.round(baseValue + smallBaseValue) + 3000
        );
    }

    var categoryData = [];
    var valueData = [];

    for (var i = 0; i < count; i++) {
        categoryData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
        valueData.push(next(i).toFixed(2));
        time += 1000;
    }

    return {
        categoryData: categoryData,
        valueData: valueData
    };
}
