
var hours = [];
var days = ['2020/10/2'];



var data = new Array(180).fill(1).map(item => [Math.random() * 10]);
const time = new Date().getTime()
data = data.map(function (item, index) {
    const thatTime =  new Date(time - index * 24 * 60 * 60 * 1000);
    const timeStr = thatTime.getDay() + '/' + thatTime.getMonth() + '/' + thatTime.getFullYear();
    hours.push(timeStr);
    return item[0];
});
console.log(hours)
option = {
    title: {
        text: '状态表'
    },
    tooltip: {
        position: 'top'
    },
    grid: {
        left: 2,
        height: 40,
        right: 40,
        containLabel: true,
    
    },
    xAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
            show: false,
        },
        axisLabel: {
          interval: 1000,
          showMaxLabel: true,
          showMinLabel: true
        },
        axisLine: {
            show: false
        },
        axisTick: false
    },
    yAxis: {
        type: 'category',
        show: false,
        data: days,
        axisLine: {
            show: false
        }
    },
    visualMap: [
      {
          type: 'continuous',
          min: 0,
          max: 10,
          inRange: {
              color: ['#f00', '#0f2']
          }
    }],
    series: [{
        name: '状态表',
        type: 'scatter',
        symbolSize: [3, 15],
        symbol: 'rect',
        data: data,
        animationDelay: function (idx) {
            return idx * 5;
        }
    }]
};