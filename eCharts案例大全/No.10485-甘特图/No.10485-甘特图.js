// @ts-ignore
Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,                 //月份   
    "d+": this.getDate(),                    //日   
    "h+": this.getHours(),                   //小时   
    "m+": this.getMinutes(),                 //分   
    "s+": this.getSeconds(),                 //秒   
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
    "S": this.getMilliseconds()             //毫秒   
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

function formart (date) {
  const d = date ? new Date(date) : new Date();
  // @ts-ignore
  return d.Format('yyyy-MM-dd');
}


const day = 1000 * 60 * 60 * 24;

var data = [];

var dataCount = 10;
var types = [
  { name: 'JS Heap', color: '#7b9ce1' },
  { name: 'Documents', color: '#bd6d6c' },
  { name: 'Nodes', color: '#75d874' },
  { name: 'Listeners', color: '#e0bc78' },
  { name: 'GPU Memory', color: '#dc77dc' },
  { name: 'GPU', color: '#72b362' }
];


var categories = [
  'categoryA', 'categoryB', 'categoryC', 'categoryD', 'categoryE', 'categoryF',
  'categoryA', 'categoryB', 'categoryC', 'categoryD', 'categoryE', 'categoryF'
];

var startTime = +new Date(formart());



// Generate mock data
// @ts-ignore
echarts.util.each(categories, function (category, index) {
  var baseTime = startTime;
  for (var i = 0; i < dataCount; i++) {
    var typeItem = types[Math.round(Math.random() * (types.length - 1))];
    var duration = Math.round(Math.random() * 10000);
    data.push({
      name: typeItem.name,
      value: [
        index,
        baseTime,
        baseTime += (day * (Math.random() * 3 | 0)),
        duration
      ],
      itemStyle: {
        normal: {
          color: typeItem.color
        }
      }
    });
    baseTime += (day * (Math.random() * 3 | 0))
  }
});

data.forEach((item, index) => {
  item.value[1] = formart(item.value[1])//'2019-08-0' + (6 + index + 1)
  item.value[2] = formart(item.value[2])//'2019-08-0' + (6 + index + 2)
})

function renderItem(params, api) {

      var categoryIndex = api.value(0);
      var start = api.coord([api.value(1), categoryIndex]);
      var end = api.coord([api.value(2), categoryIndex]);
      var height = api.size([0, 1])[1] * 0.6;

      debugger

      var rectShape = echarts.graphic.clipRectByRect({
        x: start[0],
        y: start[1], // - height / 2,
        width: end[0]-start[0],
        height: 10
      }, {
          x: params.coordSys.x,
          y: params.coordSys.y,
          width: params.coordSys.width,
          height: params.coordSys.height
        });


      const result = rectShape && {
        type: 'rect',
        shape: rectShape,
        style: api.style(),
        styleEmphasis: {
          textStroke: null
        }
      };

      result.style.text = "sdfdsaf"
      result.style.textFill = '#000'
      result.style.textStroke = null
      // result.style.textOffset = [0, -10]
      result.style.textPosition = 'top'
      return result
    }


option = {
      tooltip: {
        formatter: function (params) {
          return params.marker + params.name + ': ' + params.value[3] + ' ms';
        }
      },
      title: {
        text: 'Profile',
        left: 'center'
      },
    
      xAxis: {
        boundaryGap : false,
        data: Array(30).fill(0).map((item, index) => {
          return formart(startTime + day * index)
        })
      },
      yAxis: {
        data: categories
      },
      series: [{
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
          normal: {
            opacity: 0.8
          }
        },
        encode: {
          x: [1, 2],
          y: 0
        },
        data: data
      }]
    };

