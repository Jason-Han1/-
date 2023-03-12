var dataArr = [
  { name: '语文', value: 82 },
  { name: '数学', value: 74 },
  { name: '英语', value: 92 },
  { name: '物理', value: 63 },
  { name: '化学', value: 85 },
];
let xAxisData = [];
let seriesData = [];
let botData=[]
let topData = [];
let sum = 0;
dataArr.map((item) => {
  xAxisData.push(item.name);
  seriesData.push(item.value);
  botData.push(1);// 底数小三角
  if(item.value>sum){
     sum = item.value; 
  }
});
dataArr.map(it => {
  topData.push(sum+20);//背景柱子数据
});
option = {
    backgroundColor: '#000',
    title:{
      text:'第一学期考试成绩' ,
      left:'center',
      top:'3%',
      textStyle: {
        fontSize: 16,
        color: 'rgba(76, 228, 230, 1)',
      },
    },
    tooltip: {// 提示
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: function (params, ticket, callback) {
          const item = params[2];
          return item.name + ' : ' + item.value;
        },
    },
    grid: { // 图形大小，位置
        containLabel: true,
        top: '14%',
        left:'10%',
        right:'10%',
        bottom:'10%'
    },
    xAxis: {// x轴相关
        axisLabel: {
            color: '#9DCFCF',
            fontSize: 14,
            interval: 0,
            margin:20
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(76, 228, 230, 0.1)',
                width: 1,
                type: 'dashed',
            },
            show: true,
        },
        data: xAxisData,
        type: 'category'
    },
    yAxis: {// y轴相关
        axisLabel: {
            color: '#9DCFCF',
            fontSize: 14,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(76, 228, 230, 0.2)', //虚线颜色
                type: 'dashed',
            },
        },
        axisLine: {
            show: false,
        },
        name: '',
    },
    series: [
        {
            data:seriesData,
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 35,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(76, 228, 230, 0.7)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(24, 134, 144, 1)',
                        },
                    ],
                },
            },
            label: {
                show: true,
                position: 'top',
                distance: 10,
                color: '#fff'
            },
        },
        {
            data: botData,//底部三角
            type: 'pictorialBar',
            barMaxWidth: '20',
            color:'rgba(24, 134, 144, 1)',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [35, 15],
        },
        {
            data: seriesData,//数据上部分
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [35, 15],
            zlevel: 2,
            color:'rgba(76, 228, 230, 1)'
        },
        {
            data: topData,//背景阴影
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 35,
            barGap: '-100%',
            zlevel: -1,
            color:'rgba(23, 77, 77, 0.8)'
        },
        {
            data: topData, //顶部三角
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [35, 15],
            color:'rgba(23, 77, 77, 1)',
            zlevel: -1,
        },
    ]
};
