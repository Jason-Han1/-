/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/


var uploadedDataURL = "/asset/get/s/data-1560931254972-eeodqbz5-.json";


myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('jiangxi', geoJson);
    myChart.hideLoading();
   var geoCoordMap = {
            '南京市': [118.796, 32.058],
            '无锡市': [120.312, 31.490],
            '徐州市': [120.643338882, 31.9787250105],
            '常州市': [120.643338882, 31.9787250105],
            '苏州市': [120.643338882, 31.9787250105]
        }
        var data = [{
                name: "南京市",
                value: 4277,
                myl: "93.2%"
            },
            {
                name: "无锡市",
                value: 877,
                myl: "93.2%"
            },
            {
                name: "徐州市",
                value: 356,
                myl: "93.2%"
            },
            {
                name: "常州市",
                value: 1532,
                myl: "93.2%"
            },
            {
                name: "苏州市",
                value: 447,
                myl: "93.2%"
            },
            {
                name: "南通市",
                value: 963,
                myl: "93.2%"
            },
            {
                name: "淮安市",
                value: 809,
                myl: "93.2%"
            },
            {
                name: "盐城市",
                value: 4641,
                myl: "93.2%"
            },
            {
                name: "扬州市",
                value: 1268,
                myl: "93.2%"
            },
            {
                name: "泰州市",
                value: 1268,
                myl: "93.2%"
            },
            {
                name: "宿迁市",
                value: 4641,
                myl: "93.2%"
            },
            {
                name: "镇江市",
                value: 1268,
                myl: "93.2%"
            },
             {
                name: "连云港市",
                value: 1268,
                myl: "93.2%"
            }
        ];
    var max = 480, min = 9; // todo 
    var maxSize4Pin = 100, minSize4Pin = 20;

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};


    option = {
        title: {
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
        },

        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['credit_pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
       
         visualMap: {
            min: 0,
            max: 2000,
            left: '1%',
            bottom: '1%',
             calculable: true,
            seriesIndex: [0],
            itemWidth: 15,
            itemHeight: 100,
            text: ['map3D'],
            realtime: false,
            textStyle: {
                color: 'black',
                fontSize: '15'
            },
            inRange: {
                color: ['#83D1FC', '#62ACE8', '#3A7FCE']
            }
        },
        geo: {
            show: true,
            zlevel: -100,
            roam: false,
            map: 'jiangxi'
        },
        series : [
         {
            type: 'map3D',
            map: 'jiangxi',
             roam: false,
            data: data,
            zlevel: 4
        },
        {
            type: 'map',
            map: 'jiangxi',
            roam: false,
            data: data,
            show: false,
            zlevel: -100
        },
        {
            zlevel:12,
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: 50,
            label: {
                normal: {
                    show: true,
                    formatter: function(value) {
                        return value.value[2]
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#CE376B', //标志颜色
                }
            },
            data: convertData(data),
        },
        
         
    ]
    };
    myChart.setOption(option);
});