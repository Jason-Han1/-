//风向频率数组，按顺时针方向，上北下南左西右东，16方位。若要使线重合，请将下标为0的数值添加到末尾。
let percentList = [1, 3, 1, 4, 4, 6, 10, 5, 6, 9, 15, 10, 8, 13, 2, 3, 1];
//风向 16方位
let namelist = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW'
];
//数据
const seriesData = [];
for (let i = 0; i <= namelist.length; i++) {
  var jiaodu = (360 / namelist.length) * i;
  seriesData.push([percentList[i], jiaodu]); //[径向，角度]
}
//console.log(data);
option = {
  backgroundColor: '#fff',
  title: {
    text: '风向玫瑰图',
    top: 10,
    subtext: '',
    x: 'center',
    textStyle: {
      color: '#666'
    }
  },
  angleAxis: {
    type: 'value',
    startAngle: 90,
    boundaryGap: false,
    min: 0, //最小刻度
    max: 360, //最大刻度
    interval: 360 / namelist.length, //间隔刻度 16方位间隔22.5，可改8方位
    axisLabel: {
      show: true,
      color: '#1c2383',
      fontWeight: 'bold',
      formatter: function (value, index) {
        return namelist[index];
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#9a9a9a',
        width: 1
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#333',
        width: 3
      }
    },
    axisTick: {
      alignWithLabel: true
    },
    z: 10
    //data: namelist,
  },
  radiusAxis: {
    z: 200,
    boundaryGap: ['20%', '20%'],
    axisLabel: {
      show: true,
      color: '#000',
      fontWeight: 'bold',
      formatter: '{value} '
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#054b07',
        width: 1
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#12510e',
        width: 1
      }
    }
  },
  polar: {},
  tooltip: {
    trigger: 'item',
    borderColor: '#12510e',
    borderWidth: 1,
    textStyle: {
      color: '#000000',
      fontWeight: 'bold'
    },
    axisPointer: {
      type: 'cross'
    },
    formatter: function(params){
      //第一个和最后一个点保持一致，防止第一个点时找不见数据
      var dataIndex = params.dataIndex >= namelist.length ? 0 : params.dataIndex;
      var txt = '风向：' + namelist[dataIndex] + '<br />百分数值：' + params.data[0] + "%";
      return txt;
    }
  },
  series: [
    {
      type: 'line',
      barWidth: '99%',
      data: seriesData,
      coordinateSystem: 'polar',
      showBackground: true,
      backgroundStyle: {
        color: '#fff'
      },
      color: ['#054b07'],
      itemStyle: {
        normal: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(189, 203, 203, 0.5)'
        },
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(105, 113, 113, 0.5)',
          opacity: 0.9
        }
      }
    }
  ]
};
