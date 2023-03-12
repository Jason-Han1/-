var uploadedDataURL = "/asset/get/s/data-1514514760770-rJWUYm7mG.json";

var uploadedDataURL = "/asset/get/s/data-1514514766464-H1IUFQQXz.json";

var mapdata = '';
$.get('/asset/get/s/data-1514514760770-rJWUYm7mG.json').done(function (data) {
    mapdata = $.parseJSON(data);
});

//无锡市行政区
$.get('/asset/get/s/data-1514514766464-H1IUFQQXz.json', function (mapJson) {
    echarts.registerMap('无锡市', mapJson);
    myChart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                var res = params.name + '<br/>';
                var seriesdata = params.data.value;
                for(var j = 0;j<seriesdata.length;j++){
                   res += ' * '+seriesdata[j].key + ':' + seriesdata[j].value + '<br/>'
                }
                return res;
            }
        },
        series: [{
            type: 'map',
            map: '无锡市',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            visualMap: {
                min: 0,
                max: 70000,
                calculable: true,
                inRange: {
                    color: ['#50a3ba', '#eac736', '#d94e5d']
                },
                textStyle: {
                    color: '#fff'
                }
            },
            label:{
                    normal:{
                        show:true,
                        textStyle:{
                            color:'#ffffff',
                            fontSize:13
                        }
                    },
                    emphasis:{
                        show:true,
                        textStyle:{
                            color:'#ffffff',
                            fontSize:16
                        }
                    }
                },
                itemStyle:{
                    normal:{
                        areaColor:'#00CCFF',
                        borderColor:'#ffffff'
                    },
                    emphasis:{
                        areaColor:'#0099FF'
                    }
                },
                data:mapdata
        }]
    })
});