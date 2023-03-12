var hours = ['0', '1'];
var days = ['1', '0'];

var data = [[0, 0, 2755], [0, 1, 28139], [1, 0, 10937], [1, 1, 1119]];

var min = 0;
var max = 10;
data.forEach((m) => {
  min = Math.min(min, m[2]);
  max = Math.max(max, m[2]);
});
max *= 1.1;

option = {
    grid: {
        height: '50%',
        width: '50%',
        // top: '10%'
    },
    xAxis: {
        type: 'category',
        name: '实际值',
        nameLocation: 'center',
        data: hours,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false,
        },
    },
    yAxis: {
        type: 'category',
        name: '预测值',
        nameLocation: 'center',
        data: days,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false,
        },
    },
    visualMap: {
        min: min,
        max: max,
        right: '10%',
        top: 'center',
        itemHeight: '100%',
        inRange: {
         color: ['#F8FAFB', '#DCE3EC', '#D2DCE7', '#5075A1'],
        // colorLightness: 0.8,
        // colorSaturation: 1,
        // colorHue: 180,
        },
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
            show: true
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};