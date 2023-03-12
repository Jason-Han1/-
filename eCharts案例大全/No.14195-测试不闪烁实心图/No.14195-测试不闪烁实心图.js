var retailtable = "/asset/get/s/data-1516360001956-ry9S-L1rM.png";

//var household = "/asset/get/s/data-1516338507387-rymUpeJBG.png";

var table = "/asset/get/s/data-1516338170066-HkGZ3e1rG.png";

//var retailtable = "/asset/get/s/data-1516338103541-SJeajeJBz.png";

var travltable = "/asset/get/s/data-1516338063920-B1d5ixkrG.png";

var householdtable = "/asset/get/s/data-1516338015401-SkDDox1SG.png";

//var table = "/asset/get/s/data-1516333073341-SyYMOkJSM.png";

//var householdtable = "/asset/get/s/data-1516333049746-S1fbuJyBG.png";

//var retailtable = "/asset/get/s/data-1516332870727-ryJUw1kBz.png";

//var travltable = "/asset/get/s/data-1516332865580-Bk5Swk1rG.png";

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
],

'newCity':[
    {"name":"家居","value":[222.65607,485.093863,4],'symbol':'circle',"symbolSize":40,"itemStyle":{"normal":{"color":"#F58158"}}},
    {"name":"旅游","value":[502.0961,485.093863,4],'symbol':'circle',"symbolSize":40,"itemStyle":{"normal":{"color":"#F58158"}}},
    {"name":"统一平台","value":[352.8361,375.093863,4],'symbol':'circle',"symbolSize":40,"itemStyle":{"normal":{"color":"#F58158"}}},
    {"name":"零售","value":[352.8361,265.093863,4],'symbol':'circle',"symbolSize":40,"itemStyle":{"normal":{"color":"#F58158"}}},
],

"moveLines":[
{name:'1350笔',label:{normal:{show:true,position:'middle',color:'white'}},"coords":[[342.8361,375.093863],[342.8361,265.093863]]},
{name:'1127笔',label:{normal:{show:true,position:'middle',color:'white'}},"coords":[[362.8361,265.093863],[362.8361,375.093863]]},
{name:'150笔',label:{normal:{show:true,position:'middle',color:'white'}},"coords":[[342.8361,365.093863],[222.65607,475.093863]]},
{name:'132笔',label:{normal:{show:true,position:'middle',color:'white'}},"coords":[[227.65607,495.093863],[350.8361,385.093863]]},
{name:'337笔',label:{normal:{show:true,position:'middle',color:'white'}},"coords":[[362.8361,365.093863],[502.0961,475.093863]]},
{name:'290笔',label:{normal:{show:true,position:'middle',color:'white'}},"coords":[[495.0961,495.093863],[350.8361,385.093863]]},
],
};
  
option = {
    backgroundColor: '#020933',
    title: {
        text: 'MQ数据传输图',
        left: '260',
        top: '20',
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
        show:true,
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
        //type: 'effectScatter',
        type: 'scatter',
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
              position:'inside',
              formatter:'{b}',
              color:'white',
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
        data: allData.newCity
    }, 
    {
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
                color:'green',
                /*
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),*/
                width: 2,
                opacity: 1,
                curveness: 0
            }
        },
        data: allData.moveLines
    },
    ]
};
myChart.setOption(option);
});