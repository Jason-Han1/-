// 不同类型数据类型对应的单位
const baseUnit = {
  '折线图': 'm³',
  '柱状图': 'm'
};
function myFormatter(params, callback) {
  let str = params[0].axisValueLabel + '<br>';
  params.forEach((item) => {
    item = new Proxy(item, {
      get(target, key, receiver) {
        let result = target[key];
        if (callback && typeof callback === 'function') {
          result = callback(target, key, result);
        }
        return result;
      },
      set(target, key, value, receiver) {
        return true;
      }
    });
    if (item.marker) {
      str +=
        item.marker +
        item.seriesName +
        ':' +
        item.value +
        baseUnit[item.seriesName] +
        '<br>';
    }
  });
  return str;
}

option = {
    title: {
        text: 'Awesome Chart'
    },
    legend:{
        show:true
    },
    tooltip:{
         trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true
            }
          },
        formatter: (params) => {
            return myFormatter(params);
          },
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [
        {
        name:'折线图',
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
         name:'柱状图',
        type: 'bar',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};
