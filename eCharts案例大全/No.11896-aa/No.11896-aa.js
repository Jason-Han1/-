// 设置每个bar的颜色
function setColor(index){
  var colorList = ['#FF9983', '#038DFF', '#72DC93', '#8B87FF', '#00D3FF', '#C6CAD3'];
  var length = colorList.length;
  var Index = index;
  function change(){
    if(Index>=length) {
      Index = Index-length;
      change();
    }
  }
  change();
  return colorList[Index];
}

// 设置每个data的值
function setData(item, index) {
  var _array = [];
  _array[index] = item.count;
  for(var i=0; i<index;i++) {
    _array[i] = 0
  }
  return _array;
}
var orgResourceBySubject = [
    {
		"percentage":"0%",
		"count":0,
		"subjectName":"生物"
	},
	{
		"percentage":"0%",
		"count":0,
		"subjectName":"艺术"
	},
	{
		"percentage":"0%",
		"count":0,
		"subjectName":"历史"
	},
	{
		"percentage":"83.33%",
		"count":15,
		"subjectName":"语文"
	},
]
var chartData = [];
var chartNames = [];
var max = 0;
// 初始化传入echarts的数据
function getChartData() {
  if(orgResourceBySubject.length<=0) {
    return;
  }
  var list = [...orgResourceBySubject];
  chartData = []; 
  var counts = []; // item.count的集合
  var differences=[]; // 差值（最大值减去每个item.count）

  list.forEach((item, index) => {
    // echarts的series数据
    chartData.push({
      name: item.subjectName,
      type: 'bar',
      barGap:'-100%',
      z: 3,
      itemStyle: {
        normal: {
          color: setColor(index)
        }
      },
      data: setData(item,index),
      label: {
        normal: {
          formatter: function(data){
            return list[data.dataIndex].percentage+' '+data.value+'个';
          },
          position: 'left',
          offset: [250,0],
          show: true,
          color: '#666',
        }
      },
    });
    // 数据的‘数量’数组
    counts.push(item.count);
    chartNames.push(item.subjectName);
    
    // 设置最大值
    max = max + item.count;
  });

  // 差值数组
  counts.forEach(item => {
    differences.push(max-item);
  });
  // 在尾巴添加一个底色
  chartData.push({
    type: 'bar',
    stack: 'chart',
    silent: true,
    itemStyle: {
      normal: {
        color: '#eee'
      }
    },
    data: differences
  });
}

option = {
        tooltip: {},
        color: ['#FF9983', '#038DFF', '#72DC93', '#8B87FF', '#00D3FF', '#C6CAD3'],
        legend: {
          // data: yarray,
          formatter: '{name}',
          icon: 'circle',
          itemWidth: 8,
          itemHeight: 8,
          borderRadius: 8,
          textStyle: {
            color: '#999999',
            borderRadius: 8,
          }
        },
        grid: [{
          top: 0,
          width: '100%',
          bottom: 20,
          left: 0,
          right:0,
          containLabel: true
        }],
        xAxis: [{
          show: false,
          type: 'value',
          max: max,
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          data: chartNames,
          axisLabel: {
            margin:16,
            interval: 0,
            color: '#333333',
            fontFamily: "PingFang SC",
            fontSize: 12
          },
          inverse: true,
          axisLine:{       //y轴
            show:false
          },
          axisTick:{
            show:false
          },
          splitLine: {
            show: false
          },
        }],
        series: this.chartData
      }