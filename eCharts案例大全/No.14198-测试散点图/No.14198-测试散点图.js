var table = "/asset/get/s/data-1516333073341-SyYMOkJSM.png";

var householdtable = "/asset/get/s/data-1516333049746-S1fbuJyBG.png";

var retailtable = "/asset/get/s/data-1516332870727-ryJUw1kBz.png";

var travltable = "/asset/get/s/data-1516332865580-Bk5Swk1rG.png";

var uploadedDataURL = "/asset/get/s/data-1479697763933-ByhDrJlGx.json";
var unify = "/asset/get/s/data-1516091863551-r1eJqEjEM.png";

var retail = "/asset/get/s/data-1516091809749-SJcoYNs4z.png";

var household = "/asset/get/s/data-1516091686336-BkRXF4oNz.png";

var finance = "/asset/get/s/data-1516091523271-rJiFdNj4f.png";

var travl = "/asset/get/s/data-1516091446583-B1ySdVs4G.png";

$.get(uploadedDataURL, function (geoJson) {
    myChart.hideLoading();

    echarts.registerMap('wuhan', geoJson);

var allData = {
"citys":[
{"name":"零售","value":[112.46607,215.093863,4],symbol: 'image://' + retail,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"旅游","value":[112.46607,375.093863,4],symbol: 'image://' + travl,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"家居","value":[112.46607,535.093863,4],symbol: 'image://' + household,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"零售中间表","value":[232.65607,215.093863,4],symbol: 'image://' + retailtable,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"旅游中间表","value":[232.65607,375.093863,4],symbol: 'image://' + travltable,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"家居中间表","value":[232.65607,535.093863,4],symbol: 'image://' + householdtable,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"MQ","value":[352.8361,375.093863,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"MQ_LVYOU_JFDZ","value":[492.0961,335.843863,4],symbol: 'image://' + table,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"MQ_LVYOU_JFZJ","value":[492.0961,415.943863,4],symbol: 'image://' + table,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"MQ_INZONE_JFDZ","value":[492.0961,175.043863,4],symbol: 'image://' + table,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"MQ_INZONE_JFZJ","value":[492.0961,255.143863,4],symbol: 'image://' + table,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"MQ_JIAJU_JFDZ","value":[492.0961,495.243863,4],symbol: 'image://' + table,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"MQ_JIAJU_JFZJ","value":[492.0961,575.343863,4],symbol: 'image://' + table,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"统一平台","value":[672.4361,375.093863,4],symbol: 'image://' + unify,"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
],


"moveLines":[
{"fromName":"零售","toName":"零售中间表","coords":[[112.46607,215.093863],[232.65607,215.093863]]},
{"fromName":"旅游","toName":"旅游中间表","coords":[[112.46607,375.093863],[232.65607,375.093863]]},
{"fromName":"家居","toName":"家居中间表","coords":[[112.46607,535.093863],[232.65607,535.093863]]},
{"fromName":"零售中间表","toName":"MQ","coords":[[232.65607,215.093863],[352.8361,375.093863]]},
{"fromName":"MQ","toName":"零售中间表","coords":[[352.8361,375.093863],[232.65607,215.093863]]},
{"fromName":"旅游中间表","toName":"MQ","coords":[[232.65607,375.093863],[352.8361,375.093863]]},
{"fromName":"MQ","toName":"旅游中间表","coords":[[352.8361,375.093863],[232.65607,375.093863]]},
{"fromName":"家居中间表","toName":"MQ","coords":[[232.65607,535.093863],[352.8361,375.093863]]},
{"fromName":"MQ","toName":"家居中间表","coords":[[352.8361,375.093863],[232.65607,535.093863]]},
{"fromName":"MQ","toName":"MQ_LVYOU_JFDZ","coords":[[352.8361,375.093863],[492.0961,335.843863]]},
{"fromName":"MQ","toName":"MQ_LVYOU_JFZJ","coords":[[352.8361,375.093863],[492.0961,415.943863]]},
{"fromName":"MQ","toName":"MQ_INZONE_JFDZ","coords":[[352.8361,375.093863],[492.0961,175.043863]]},
{"fromName":"MQ","toName":"MQ_INZONE_JFZJ","coords":[[352.8361,375.093863],[492.0961,255.143863]]},
{"fromName":"MQ","toName":"MQ_JIAJU_JFDZ","coords":[[352.8361,375.093863],[492.0961,495.243863]]},
{"fromName":"MQ","toName":"MQ_JIAJU_JFZJ","coords":[[352.8361,375.093863],[492.0961,575.343863]]},
{"fromName":"MQ_LVYOU_JFDZ","toName":"统一平台","coords":[[492.0961,335.843863],[672.4361,375.093863]]},
{"fromName":"MQ_LVYOU_JFZJ","toName":"统一平台","coords":[[492.0961,415.943863],[672.4361,375.093863]]},
{"fromName":"MQ_INZONE_JFDZ","toName":"统一平台","coords":[[492.0961,175.043863],[672.4361,375.093863]]},
{"fromName":"MQ_INZONE_JFZJ","toName":"统一平台","coords":[[492.0961,255.143863],[672.4361,375.093863]]},
{"fromName":"MQ_JIAJU_JFDZ","toName":"统一平台","coords":[[492.0961,495.243863],[672.4361,375.093863]]},
{"fromName":"MQ_JIAJU_JFZJ","toName":"统一平台","coords":[[492.0961,575.343863],[672.4361,375.093863]]},
]
};
  
option = {
    backgroundColor: '#030832',
    title: {
        text: 'MQ数据传输图',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    legend: {
        show: true,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff'
        }
    },
    tooltip:{
        formatter:'{b}'
    },
    geo: {
        map: '北京市',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke',
            period:7,
            scale:26
        },
        label: {
            normal:{
              show:true,
              position:'top',
              formatter:'{b}'
            },
            emphasis: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#46bee9'
            }
        },
        data: allData.citys
    }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 6,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: allData.moveLines
    }]
};
myChart.setOption(option);
});