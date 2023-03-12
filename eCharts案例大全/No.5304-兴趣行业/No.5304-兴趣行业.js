//跳转代码
// myChart.on('click', function(params) {
//     console.log(params.name);
//     window.open(params.data.url);
//     // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.value));
// });

var datas = [{
    "name": "生猪",
    "value": 6833885269.37
}, {
    "name": "柑橘",
    "value": 682341544.93
}, {
    "name": "禽蛋",
    "value": 3529643173.8
},{
    "name": "大田",
    "value": 9773789.04
}, {
    "name": "水产",
    "value": 299226867.33
}, {
    "name": "物流",
    "value": 144844182.23
}, {
    "name": "其他",
    "value": 380040430.77
}];
 function compare(propertyName) {
    return function(object1, object2) {
      var value1 = object1[propertyName];
      var value2 = object2[propertyName];
      if (value2 < value1) {
        return 1;
      } else if (value2 > value1) {
        return -1;
      } else {
        return 0;
      }
    }
  }
datas=datas.sort(compare("value")).reverse();
var seriesData=[];
var maxValue = datas[0].value;
// var colors =[
//         '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
//         '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
//         '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
//         '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
//     ];
var colors =['#4983F5','#3D993D','#525CCC','#3344FF','#39ACE5','#008099','#2985CC']
for(var i=0;i<datas.length;i++){
    var ss = 120;
    if(i<3){
       ss= 100-i*10;
    }else if(3<=i<10){
       ss= 100-i*10;
    }else{
       ss= 100-i*4; 
    }
    var color=colors[i];
    var item ={
                "name": datas[i].name,
                "value": datas[i].value,
                "symbolSize": ss,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 10,
                        "shadowColor":color ,
                        "color": color
                    }
                }
            };
            
        seriesData.push(item);
}
console.log(seriesData)
option = {
    tooltip: {
        formatter: function(params) {
            console.log(params)
            var str = params.marker + "" + params.data.name + "</br>" +
                "交易额：" + params.data.value + "万元</br>" ;
            return str;
        }
    },
    animationDurationUpdate: function(idx) {
        // 越往后的数据延迟越大
        return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 130,
            edgeLength: 10
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: seriesData
    }]
}