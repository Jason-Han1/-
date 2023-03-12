var uploadedDataURL = "/asset/get/s/data-1560930871546-JrPAqnPN8.json";

  var data_map = [{name:"海安市",value:477,myl:"93.2%"},
                    {name:"通州区",value:877,myl:"93.2%"},
    {name:"如东县",value:356,myl:"93.2%"},
    {name:"港闸区",value:1532,myl:"93.2%"},
    {name:"如皋市",value:447,myl:"93.2%"},
    {name:"开发区",value:963,myl:"93.2%"},
    {name:"海门市",value:809,myl:"93.2%"},
    {name:"崇川区",value:4641,myl:"93.2%"},
    {name:"启东市",value:1268,myl:"93.2%"}];
    
     // 基于准备好的dom，初始化echarts实例
    $.get(uploadedDataURL, function (nantong){
       
        echarts.registerMap('nantong1', nantong);
    
        // 指定图表的配置项和数据
        option = {
            visualMap: {
                min: 200,
                max: 3000,
                left:'1%',
                bottom:'1%',
                itemWidth: 25,
                itemHeight: 100,
                text:['High','Low'],
                realtime: false,
                calculable: true,
                textStyle: {
                    color:'#fff',
                    fontSize:'20'
                },
                inRange: {
                    color: ['#18b0ff','#ffde00', '#ff6f18']
                }
            },
            tooltip: {
                trigger: 'item',
            },

            series: [{
                name:'南通热力图',
                type: 'map',
                mapType: 'nantong1',
                zoom:1,
                label: {
                    normal: {show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize:'16'
                        },
                    },
                    emphasis: {
                        show: true,
                        textStyle: {color:'#fff',
                            fontSize:'16'}
                    }
                },
                tooltip : {
                    trigger: 'item',
                    formatter: function (params) {
                        return "&nbsp;&nbsp;"+params.name+"</br>量："+params.value;
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(7,157,233,0.4)',
                        borderColor: '#ddd',

                    },
                    emphasis: {
                        areaColor: '#3093d8'
                    }
                },
                data:data_map,
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

    })