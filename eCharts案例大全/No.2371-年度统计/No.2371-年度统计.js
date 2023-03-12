var arr1=[1,2,3,4,5,6,7,8,9,10,11,12]
var arr2=[12,11,10,9,8,7,6,5,4,3,2,1]
var total=[13,13,13,13,13,13,13,13,13,13,13,13]
var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + "月");
    }
    return data;
}();
option = {
  title: {
    show:false,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "none",
      textStyle: {
        color: "#fff"
      }
    },
  },
  grid: {
    borderWidth: 0,
    top: 20,
    left: 10,
    right: 10,
    bottom: 20,
    textStyle: {
      color: "#fff"
    }
  },
  legend: {
    x: '0',
    top: '0',
    textStyle: {
      color: '#90979c',
    },
    data: ['正在进行', '已完成'],
    orient: 'vertical',
  },
  calculable: true,
  xAxis: [{
    type: "category",
    axisLine: {
      lineStyle: {
        color: '#90979c'
      }
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: true
    },
    splitArea: {
      show: false
    },
    axisLabel: {
      interval: 0,
    },
    data: xData,
  }],
  yAxis: [{
    show:false,
  }],
  series: [{
    name: "已完成",
    type: "bar",
    stack: "总量",
    itemStyle: {
      normal: {
        color: "#53CA8B",
        label: {
          show: false,
        },
        barBorderRadius: 5,
      },
    },
    data: arr1
  },{
    name: "正在进行",
    type: "bar",
    stack: "总量",
    barWidth: 20,
    barGap: "10%",
    itemStyle: {
      normal: {
        color: "#358AFF",
        label: {
          show: false,
        },
        barBorderRadius: 5,
      }
    },
    data: arr2,
  },{
    name:'总计',
    type:'bar',
    stack:'',
    barWidth: 1,
    label: {
      show: true,
      color: "#333333",
      position: "top",
    },
    z:-1,
    barGap:"-50%",
    data:total,
  }]
}
