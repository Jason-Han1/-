option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {
        data: ['EQ,TS', 'FL,LA', 'FL,ST', 'ST,LA', 'EQ,LA','EQ,FL']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        max:1
    },
    yAxis: {
        type: 'category',
        data: ['1980-1990', '1990-2000', '2000-2010', '2010-2020'],
        inverse: true
    },
    series: [
        {
            name: 'EQ,TS',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data:[0.76,0.39,0.36,0.20]
        },
        {
            name: 'FL,LA',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [0.02,0.05,0.14,0.38]
        },
        {
            name: 'FL,ST',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [0.14,0.46,0.35,0.13]
        },
        {
            name: 'ST,LA',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                formatter: function (params) {
             if (params.value > 0) {
               return params.value;
             } else {
               return '';
             }
           },
            },
            emphasis: {
                focus: 'series'
            },
            data: [0.01,0.00,0.07,0.21]
        },
        {
            name: 'EQ,LA',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                formatter: function (params) {
             if (params.value > 0) {
               return params.value;
             } else {
               return '';
             }
           },
           
            },
            emphasis: {
                focus: 'series'
            },
            data: [0.00,0.00,0.02,0.05]
        },
        {
            name: 'EQ,FL',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [0.07,0.09,0.06,0.04]
        },
    ]
};