var itemStyle = {
  normal: {
    label: {
      position: 'inner',
      show: true,
      formatter: '{b}:{c}个 \n ({d}%)'
    },
    borderColor: '#fff',
    borderWidth: 1,
    labelLine: { show: true }
  }
};

var data = [
  {name:'未说明',value:[{ value: 1048, name: '亚信' },{ value: 735, name: '哈尔滨分院' },
         { value: 580, name: '济南分院' },{ value: 484, name: '天源迪科' }]}
  ,
  {name:'需求',value:[{ value: 1048, name: '亚信' },{ value: 735, name: '哈尔滨分院' },
         { value: 580, name: '济南分院' },{ value: 484, name: '天源迪科' }]}
          ,
  {name:'der',value:[{ value: 1048, name: '亚信' },{ value: 735, name: '哈尔滨分院' },
        { value: 580, name: '济南分院' },{ value: 484, name: '天源迪科' }]}
            ,
  {name:'der1',value:[{ value: 1048, name: '亚信' },{ value: 735, name: '哈尔滨分院' },
        { value: 580, name: '济南分院' },{ value: 484, name: '天源迪科' }]}
                    ,
  {name:'der1',value:[{ value: 1048, name: '亚信' },{ value: 735, name: '哈尔滨分院' },
        { value: 580, name: '济南分院' },{ value: 484, name: '天源迪科' }]}
                    ,
  {name:'der1',value:[{ value: 1048, name: '亚信' },{ value: 735, name: '哈尔滨分院' },
        { value: 580, name: '济南分院' },{ value: 484, name: '天源迪科' }]}
                    ,
  {name:'der1',value:[{ value: 1048, name: '亚信' },{ value: 735, name: '哈尔滨分院' },
        { value: 580, name: '济南分院' },{ value: 484, name: '天源迪科' }]}
                    ,
  {name:'der1',value:[{ value: 1048, name: '亚信' },{ value: 735, name: '哈尔滨分院' },
        { value: 580, name: '济南分院' },{ value: 484, name: '天源迪科' }]}
];
var titleArr = [],seriesArr = [];
var top = ['8%','8%','8%','50%','50%','50%','50%']
var left = ['29.5%','49.5%','69.5%','19.5%','39.5%','59.5%','79.5%']
var center1 = ['30%','50%','70%','20%','40%','60%','80%']
var center2 = ['40%','40%','40%','80%','80%','80%','80%']
data.forEach(function (item, index) {
  // console.log(index * 25 + 15 + '%')
          console.log(index * 30 + 19 + '%')
      titleArr.push({
        text: item.name,
        subtext:'总数151',
        left: left[index],
        top: top[index],
        textAlign: 'center',
    });
    seriesArr.push({
        name: item.name,
        type: 'pie',
        clockWise: false,
        // radius: [60, 70],
         radius: '30%',
        itemStyle: itemStyle,
        hoverAnimation: false,
        center: [center1[index]  + '%', center2[index]+ '%'],
        data: item.value,
    });
})
option = {
  title: titleArr,
  legend: {},
  tooltip: {},
  series: seriesArr
};
