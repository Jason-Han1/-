function getDate() {
    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];
    for (let i = 1; i < 20000; i++) {
      var now = new Date((base += oneDay));
      date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    }
    return date;
}
function getData() {
    let data = [Math.random() * 300];
    for (let i = 1; i < 20000; i++) {
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    return data;
}
var date = getDate();
var data = getData();
option = {
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%'];
    }
  },
  title: {
    left: 'center',
    text: 'Large Area Chart'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%']
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 100
    }
  ],
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'rgb(255, 70, 131)'
      },
      data: data
    }
  ]
};