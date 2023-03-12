let data0=[0,0,0,0,0,0,0,0];
let data1=[0,0,0,0,0,0,0,0];
let datax=[];


let now = new Date(2010, 9, 3);
let oneDay = 24 * 3600 * 1000;

function randomData() {
  now = new Date(+now + oneDay);
  debugger
  return now.getDate() +'/'+ parseInt(now.getMonth() + 1) +'/'+ now.getFullYear()
 
}

for (var i = 0; i < 8; i++) {
  datax.push(randomData());
  debugger
}

console.log(datax)
option = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    //data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    //boundaryGap: false,
    data: datax
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: data0
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: data1
    },
  ]
};
setInterval(function () {
    data0.shift();
    data0.push(Math.random()*5);
    data1.shift();
    data1.push(Math.random()*10);
    datax.shift();
    datax.push(randomData());

  myChart.setOption({
    xAxis:{
      data:datax
    },
    series: [
      {
        data: data0
      },
      {
        data: data1
      }
    ],
  });
}, 1000);