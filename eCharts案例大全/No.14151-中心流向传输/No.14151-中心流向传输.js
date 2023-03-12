var uploadedDataURL = "/asset/get/s/data-1479697763933-ByhDrJlGx.json";
$.get(uploadedDataURL, function (geoJson) {
    myChart.hideLoading();

    echarts.registerMap('wuhan', geoJson);

var allData = {
'newCity':[
    {"name":"",'color':'#FFFF33',"value":[222.65607,485.093863,4],'symbol':'circle',"symbolSize":50,"itemStyle":{"normal":{"color":"#b12711",opacity:1}}},
    {"name":"","value":[502.0961,485.093863,4],'symbol':'circle',"symbolSize":50,"itemStyle":{"normal":{"color":"#684086",opacity:1}}},
    {"name":"","value":[352.8361,395.093863,4],'symbol':'circle',"symbolSize":80,"itemStyle":{"normal":{"color":"#1eacb5",opacity:1}}},
    {"name":"","value":[352.8361,265.093863,4],'symbol':'circle',"symbolSize":50,"itemStyle":{"normal":{"color":"#06752b",opacity:1}}},
],

"moveLines":[
{name:'1350笔',label:{normal:{show:false,position:'middle',align:'',verticalAlign:'bottom',color:'#FFFF33'}},"coords":[[342.8361,375.093863],[342.8361,265.093863]]},
{name:'1127笔',label:{normal:{show:false,position:'middle',color:'#FFFF33'}},"coords":[[362.8361,265.093863],[362.8361,375.093863]]},
{name:'150笔',label:{normal:{show:false,position:'middle',color:'#FFFF33'}},"coords":[[342.8361,365.093863],[222.65607,475.093863]]},
{name:'132笔',label:{normal:{show:false,position:'middle',color:'#FFFF33'}},"coords":[[227.65607,495.093863],[350.8361,385.093863]]},
{name:'337笔',label:{normal:{show:false,position:'middle',color:'#FFFF33'}},"coords":[[362.8361,365.093863],[502.0961,475.093863]]},
{name:'290笔',label:{normal:{show:false,position:'middle',color:'#FFFF33'}},"coords":[[495.0961,495.093863],[350.8361,385.093863]]},
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
              fontSize:20,
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
            symbolSize: 16,
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