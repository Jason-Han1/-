var data1 = [709, 1999, 709, 2299, 3299, 2299, 1999, 2999, 1999, 709, 1999, 709];
var xData = function() {
      var data = [];
      for (var i = 1; i < 13; i++) {
        data.push(i + "月");
      }
      return data;
    }();
option = {
    legend: {
        show: false
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            data: xData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '周转量',
            type: 'bar',
            // "stack": "总量",
            barMaxWidth: 35,
            barGap: '10%',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#299CE1', // 0% 处的颜色
                            },
                            {
                                offset: 0.8,
                                color: '#2168B2', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#2168B2', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: data1,
        }
    ],
};
