let url = 'www.baidu.com'
let attackNode = {
    name: '杭州',
    value: [120.165024, 30.252501],
    ip: '121.40.198.98'
}
var allCity = [{
  "id": 1,
  "name": "南京",
  "value": [118.796877, 32.060255],
  "color": "#00BCD4",
  "attack_times": 6925,
  "ip": '117.88.5.20',
  "type": 'cc',
  "attackName": 'CC攻击'
}]

 var series = [{
     type: 'effectScatter',
     coordinateSystem: 'geo',
     zlevel: 4,
     symbolSize: 20,
     itemStyle: {
         normal: {
             color: '#FAF83899'
         }
     },
     tooltip: {
        formatter: function (params) {
            let data = params.data
            let str = ` 
            ${url} （${data.name}）<br>
            节点已成功防御
            `
            return str
        }
     },
     rippleEffect: {
         scale: 2,
         brushType: 'stroke'
     },
     data: [attackNode],
 }
 ];

 //绘制所有城市 显示特效
 allCity.forEach(function(item) {
     series.push({
         name: item.name,
         type: 'lines',
         zlevel: 2,
        "polyline": true,
        "lineStyle": {
            "normal": {
                "width": 0
            }
        },
        "effect": {
            "constantSpeed": 70,
            "show": true,
            "trailLength": 0.6,
            "symbolSize": 2,
            color: item.color,
            loop: true
        },
         data: [{
            fromName: item.fromName,
             toName: item.toName,
             coords: [item.value, attackNode.value]
         }]
     })
     series.push({
         type: 'effectScatter',
         coordinateSystem: 'geo',
         zlevel: 4,
         symbolSize: item.attack_times > 5000 ? item.attack_times / 1000 : 5,
         rippleEffect: {
             scale: 6,
             brushType: 'stroke'
         },
         tooltip: {
            formatter: function (params) {
                let str = ` 
                ${item.ip} （${item.name}）<br>
                正在发起 ${item.attackName} (${item.attack_times})
                `
                return str
            }
        },
         itemStyle: {
             normal: {
                color: item.color
             }
         },
         data: [{
             name: item.name,
             value: item.value,
             visualMap: false
         }],
     })
 });



 option = {
     backgroundColor: '#051b4a',
     tooltip: {
         trigger: 'item'
     },
     geo: {
         map: 'china',
         zoom: 1,
         scaleLimit: {
             min: 0.5,
             max: 3
         },
         label: {
             emphasis: {
                 show: true,
                 color: '#fff'
             }
         },
         roam: true,
         itemStyle: {
             normal: {
                 borderColor: 'rgba(147, 235, 248, 1)',
                 borderWidth: 1,
                 areaColor: {
                     type: 'radial',
                     x: 0.5,
                     y: 0.5,
                     r: 0.8,
                     colorStops: [{
                         offset: 0,
                         color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                     }, {
                         offset: 1,
                         color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                     }],
                     globalCoord: false // 缺省为 false
                 },
             },
             emphasis: {
                 areaColor: '#389BB7',
                 borderWidth: 0
             }
         }
     },
     series: series
 };