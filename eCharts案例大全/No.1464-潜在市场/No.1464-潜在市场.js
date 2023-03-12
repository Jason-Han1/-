
option = {
        textStyle: {
            color: '#333'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            textStyle: {
                align: 'left'
            },
        },
        legend: {
            bottom: '10px',
            selectedMode: true,
            itemWidth: 14,
            itemGap: 14,
            textStyle: {color: '#333'}
        },
        grid: {
            top: '10px',
        },
        xAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
            },
        }],
        yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
        }],
        series: [
            {type: 'bar', stack: 'total'},
            {type: 'bar', stack: 'total'},
            {type: 'bar', stack: 'total'},
            {type: 'bar', stack: 'total'},
            {type: 'bar', stack: 'total'},
            {type: 'bar', stack: 'total'},
        ],
        dataset: [
          {
            "source": [
              ['time', '自动驾驶', '工业自动化', '教育', '智能交通', '医学领域', '智能机器人'], 
              ['2025年', 1171, 2370, 1875, 2621, 1270, 230],
              ['2030年', 1020, 4300, 2575, 3400, 2500, 300], 
              ['2050年', 1050, 8000, 4675, 5000, 6000, 700]
            ]
          }
        ]
    }
