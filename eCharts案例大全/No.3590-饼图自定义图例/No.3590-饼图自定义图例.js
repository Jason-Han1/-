let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF'];
let chartData = [
    {
        name: "其他",
        value: 121711,
        unit: '元'
    },
    {
        name: "初中及以下",
        value: 81711,
        unit: '元'
    },{
        name: "本科及以上",
        value: 13211,
        unit: '元'
    },
    {
        name: "高中",
        value: 42111,
        unit: '元'
    },
];
let arrName = [];
let arrValue = [];
let sum = 0;
let pieSeries = [],
    lineYAxis = [];

// 数据处理
chartData.forEach((v, i) => {
    arrName.push(v.name);
    arrValue.push(v.value);
    sum = sum + v.value;
})

// 图表option整理
chartData.forEach((v, i) => {
    pieSeries.push({
        name: '学历',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [55 - i * 5 + '%', 50 - i * 5 + '%'],
        center: ["30%", "50%"],
        label: {
            show: false
        },
        data: [{
            value: v.value,
            name: v.name
        }, {
            value: sum - v.value,
            name: '',
            itemStyle: {
                color: "rgba(0,0,0,0)"
            }
        }]
    });
    // pieSeries.push({
    //     name: '',
    //     type: 'pie',
    //     silent: true,
    //     z: 1,
    //     clockWise: false, //顺时加载
    //     hoverAnimation: false, //鼠标移入变大
    //     radius: [55 - i * 5 + '%',50 - i * 5 + '%'],
    //     center: ["30%", "50%"],
    //     label: {
    //         show: false
    //     },
    //     data: [{
    //         value: 7.5,
    //         itemStyle: {
    //             color:"rgba(255,255,255,0.1)"  //圆环颜色
    //         }
    //     }, {
    //         value: 2.5,
    //         name: '',
    //         itemStyle: {
    //             color: "rgba(0,0,0,0)"
    //         }
    //     }]
    // });
    v.percent = (v.value / sum * 100).toFixed(1) + "%";
    lineYAxis.push({
        value: i,
        textStyle: {
            rich: {
                circle: {
                    color: color[i],
                    padding: [0, 5]
                }
            }
        }
    });
})
let legendData = []
for (var j = 0; j < chartData.length; j++) {
  var data = {
    name: chartData[j].name,
    icon: 'circle',
    textStyle: {
      fontSize: 18,
      color: color[j]
    }
  }
  legendData.push(data)
}
function array2obj (array, key) {
  var resObj = {}
  for (var i = 0; i < array.length; i++) {
    resObj[array[i][key]] = array[i]
  }
  return resObj
}
let objData = array2obj(chartData, 'name')
console.log(objData)
option = {
    backgroundColor: '#030c3b',
    color: color,
    grid: {
        top: '15%',
        bottom: '54%',
        left: "30%",
        containLabel: false
    },
    legend:{
         orient: 'vertical',
         top: 'center',
         left: '70%',
         itemGap: 20,
         itemWidth:10,
         itemHeight:10,
         data:chartData,
         formatter: function(name) {
            return `{name|${name}}{value|${objData[name].value}}`
        },
         textStyle: {
            color: "#beceff", //元字颜色
            fontSize: 14,
            rich: {
                name: {
                    color: '#beceff',
                    fontSize: 14,
                    width:100
                },
                value: {
                    color: '#beceff',
                    fontSize: 16,
                    fontWeight: 500,
                    padding: [0, 0, 0, 20]
                },
            }
        },
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: lineYAxis
    }],
    xAxis: [{
        show: false
    }],
    series: pieSeries
};