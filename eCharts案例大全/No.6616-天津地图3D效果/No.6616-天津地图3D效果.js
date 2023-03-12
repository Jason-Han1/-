var uploadedDataURL = "/asset/get/s/data-1525844720391-Skugj-g0f.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('tianjin', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '和平':[117.2,39.12],
        '河东':[117.22,39.12],
        '河西':[117.22,39.12],
        '南开':[117.15,39.13],
        '河北':[117.18,39.15],
        '红桥':[117.15,39.17],
        '塘沽':[117.65,39.02],
        '汉沽':[117.8,39.25],
        '大港':[117.45,38.83],
        '东丽':[117.3,39.08],
        '西青':[117,39.13],
        '津南':[117.38,38.98],
        '北辰':[117.13,39.22],
        '武清':[117.03,39.38],
        '宝坻':[117.3,39.72],
        '宁河':[117.82,39.33],
        '静海':[116.92,38.93],
        '蓟县':[117.4,40.05],
    }
    var data = [
        {name:'和平', value: 199},
        {name:'河东', value: 39},
        {name:'河西', value: 152},
        {name:'南开', value: 299},
        {name:'河北', value: 89},
        {name:'红桥', value: 52},
        {name:'塘沽', value: 9},
        {name:'汉沽', value: 352},
        {name:'大港', value: 99},
        {name:'东丽', value: 39},
        {name:'西青', value: 480},
        {name:'津南', value: 481},
        {name:'北辰', value: 482},
        {name:'武清', value: 483},
        {name:'宝坻', value: 484},
        {name:'宁河', value: 485},
        {name:'静海', value: 486},
        {name:'蓟县', value: 487},
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
            show: true,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                // color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
        geo: {
        map: 'tianjin',
        aspectScale: 0.75,
        layoutCenter: ["50%", "51.5%"], //地图位置
        layoutSize: '100%',
        roam: true,
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 0.5,
                color: {
                    type: 'linear-gradient',
                    x: 0,
                    y: 1500,
                    x2: 2500,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#009DA1' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#005B9E' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                },
                opacity: 0.5,
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        },
        z: 2
    },
    series: [{
        type: 'map',
        map: 'tianjin',
        tooltip: {
            show: false
        },
        label: {
            show: true,
            color: '#FFFFFF',
            fontSize: 16
        },
        aspectScale: 0.75,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: '95%',
        roam: true,
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 0.6)',
                borderWidth: 0.8,
                areaColor: {
                    type: 'linear-gradient',
                    x: 0,
                    y: 1200,
                    x2: 1000,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#009DA1' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#005B9E' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                },
            },
            emphasis: {
                areaColor: 'rgba(147, 235, 248, 0)'
            }
        },
        zlevel: 1
    }]
         
    
    };
    myChart.setOption(option);
});
myChart.on('georoam', function(params) {
    var option = myChart.getOption(); //获得option对象
    console.log('option的值：',option);
    if (params.zoom != null && params.zoom != undefined) { //捕捉到缩放时
        option.geo[0].zoom = option.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
    } else { //捕捉到拖曳时
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
    }
    myChart.setOption(option); //设置option
});