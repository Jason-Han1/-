var data= [
            [270, 1],
            [280, 2],
            [260, 1],
            [290, 3],
            [240, 2],
            [270, 3],
            [290, 2],
            [300, 3],
            [310, 4],
            [300, 5],
            [290, 4],
            [320, 4],
            [330, 6],
            [340, 4],
            [330, 5],
            [340, 5],
            [320, 6],
            [330, 7],
            [320, 5],
            [340, 4],
            [350, 3],
            [340, 3],
            [360, 4],
            [350, 2],
            [330, 3],
            [360, 4],
            [10, 3],
            [20, 4],
            [20, 4],
            [10, 3],
            [30, 3],
            [20, 2],
            [20, 3],
            [40, 4],
            [30, 2],
            [50, 3],
            [40, 2],
            [40, 4],
            [20, 2],
            [60, 3],
            [50, 4],
            [20, 4],
            [40, 2],
            [20, 1],
            [20, 2],
            [20, 3],
            [40, 1],
            [20, 2],
            [60, 1]
        ];
        
function wind(data) {
    return [{
        name: '风向风速（deg|m/s）',
        type: 'line',
        smooth: 'true',
        symbol: 'arrow',
        symbolOffset: [0, -3.5],
        symbolSize: 20,
        data: data.map(function (item) {
            return {
                value: item[1],
                symbolRotate : 180 - item[0]
            }
        })
    }];

}

option = {
    tooltip: {
        trigger: 'axis',
        showDelay: 0, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
        formatter: function(params) {
            var res = params[0].name;
            res += '<br/>' + params[0].seriesName + ':' + params[0].value + 'm/s';
            return res;
        }
    },
    color: ['#CC6600'],
    legend: {
        y: -30,
        data: ['风向风速（deg|m/s）']
    },
    dataZoom: {
        y: 200,
        type: 'inside', //鼠标滑动缩放
        show: true,
        realtime: true,
        start: 50,
        end: 100
    },
    grid: {
        x: 80,
        y: 5,
        x2: 20,
        y2: 30
    },
    xAxis: [{
        type: 'category',
        position: 'bottom',
        boundaryGap: true,
        axisTick: {
            onGap: false
        },
        splitLine: {
            show: false
        },
        data: ["01日12时", "13时", "14时", "15时", "16时", "17时", "18时", "19时", "20时", "21时", "22时", "23时", "02日00时", "01时", "02时", "03时", "04时", "05时", "06时", "07时", "08时", "09时", "10时", "11时", "12时", "13时", "14时", "15时", "16时", "17时", "18时", "19时", "20时", "21时", "22时", "23时", "03日00时", "01时", "02时", "03时", "04时", "05时", "06时", "07时", "08时", "09时", "10时", "11时", "12时"]
    }],
    yAxis: [{
        type: 'value',
        name: '风速（m/s）',
        nameLocation: 'middle',
        nameGap: '25',
        scale: true,
        min: 0,
        minInterval: 1,
        splitNumber: 3,
        boundaryGap: [0.05, 0.05],
        splitArea: {
            show: true
        }
    }],
    series: wind(data)
};


