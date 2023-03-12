
var liaoning = "/asset/get/s/data-1528614130651-Syse6Bqxm.json";



$.get(liaoning, function(repJson) {
    echarts.registerMap('liaoning', repJson);


    option = {
        backgroundColor: '#899cb6',
        title: {
            text: '辽宁省待解决告警全览',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            min: 0,
            max: 50,
            text:['High','Low'],
            textStyle:{
                color:'#fff' 
            },
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue','yellow', 'orangered']
            }
        },
        series: [{
            name: '辽宁地图全览',
            type: 'map',
            map: 'liaoning',
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                    {name: '沈阳市', value: 11},
                    {name: '大连市', value: 14},
                    {name: '鞍山市', value: 31},
                    {name: '抚顺市', value: 6},
                    {name: '本溪市', value: 0},
                    {name: '丹东市', value: 0},
                    {name: '锦州市', value: 3},
                    {name: '营口市', value: 4},
                    {name: '阜新市', value: 5},
                    {name: '辽阳市', value: 21},
                    {name: '盘锦市', value: 4},
                    {name: '铁岭市', value: 5},
                    {name: '朝阳市', value: 0},
                    {name: '葫芦岛市', value: 0}
                ],
        }]
    };
    myChart.setOption(option);
})