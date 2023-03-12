var uploadedDataURL = "/asset/get/s/data-1560931254972-eeodqbz5-.json";

  var data_map = [{name:"南京市",value:477,myl:"93.2%"},
                    {name:"无锡市",value:877,myl:"93.2%"},
    {name:"徐州市",value:356,myl:"93.2%"},
    {name:"常州市",value:1532,myl:"93.2%"},
    {name:"苏州市",value:447,myl:"93.2%"},
    {name:"南通市",value:963,myl:"93.2%"},
    {name:"淮安市",value:809,myl:"93.2%"},
    {name:"盐城市",value:4641,myl:"93.2%"},
    {name:"扬州市",value:1268,myl:"93.2%"},
      {name:"泰州市",value:1268,myl:"93.2%"},
       {name:"宿迁市",value:4641,myl:"93.2%"},
    {name:"镇江市",value:1268,myl:"93.2%"}];
 
  
    
    
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
                        return "&nbsp;&nbsp;"+params.name+"</br>工单量："+params.value;
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