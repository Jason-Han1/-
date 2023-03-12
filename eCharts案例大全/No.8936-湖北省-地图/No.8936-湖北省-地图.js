var uploadedDataURL = "/asset/get/s/data-1578022159407-bQN7ZPwt.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('hubei', geoJson);
    myChart.hideLoading();
   var geoCoordMap = {
       
    }
    var data1 = [
    {name: '鄂州市', value: 100, attr3: 3000, attr4: 600, attr5: 56},
    {name: '恩施土家族苗族自治州', value: 33.33, attr3: 1000, attr4: 300, attr5: 99},
    {name: '黄冈市', value: 66.67, attr3: 2000, attr4: 500, attr5: 98},
    {name: '黄石市', value: 40, attr3: 1200, attr4: 500, attr5: 68},
    {name: '荆门市', value: 6.67, attr3: 200, attr4: 100, attr5: 60},
    {name: '荆州市', value: 26.67, attr3: 800, attr4: 200, attr5: 100},
    {name: '潜江市', value: 33.33, attr3: 1000, attr4: 500, attr5: 85},
    {name: '神农架林区', value: 23.33, attr3: 700, attr4: 200, attr5: 79},
    {name: '十堰市', value: 16.67, attr3: 500, attr4: 200, attr5: 30},
    {name: '随州市', value: 26.67, attr3: 800, attr4: 300, attr5: 60},
    {name: '天门市', value: 33.33, attr3: 1000, attr4: 200, attr5: 80},
    {name: '武汉市', value: 83.33, attr3: 2500, attr4: 500, attr5: 88},
    {name: '仙桃市', value: 100, attr3: 3000, attr4: 600, attr5: 87},
    {name: '咸宁市', value: 66.67, attr3: 2000, attr4: 500, attr5: 70},
    {name: '襄阳市', value: 60, attr3: 1800, attr4: 300, attr5: 60},
    {name: '孝感市', value: 53.33, attr3: 1600, attr4: 400, attr5: 80},
    {name: '宜昌市', value: 40, attr3: 1200, attr4: 200, attr5: 88}
                ];

    option = {  
        backgroundColor:'#eee',
	  tooltip: {
               //formatter :'{b}<br/>采购量:{c}万元<br/>已采购：{d}万元'
               formatter: function (params) {
                    //alert(JSON.stringify(params));
                    var res='<div><p>'+params.name+'</p></div>'; 
                        res+='<p>总采购金额:'+params.data.attr3+'万元</p>'
                        res+='<p>已采购金额:'+params.data.attr4+'万元</p>'
                        res+='<p>未采购金额:'+params.data.attr5+'万元</p>'
                    return res;
                }
           },
        visualMap: {
            min: 0,
            max:100,
            text: ['高', '低'],
            realtime: false,
            calculable: true,
            inRange: {
               color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096', ]
            },
			 textStyle: {
                color: '#000'
            }
        },
      
        series: [ {
            name: '地图数据',
            type: 'map',
            zoom: 1.1,
            roam: true, //是否开启鼠标缩放和平移漫游
            mapType: 'hubei', // 自定义扩展图表类型
            itemStyle: {
                normal: {
                    borderColor: 'brown',
                },
                emphasis: {
                    label: {
                        show: true,
                        textStyle: {
                            color: 'darkslategray',
                        },
                    }
                }
            },
            data: data1,
			label: {//区域名样式 
                normal: {
                    show: true,
                    textStyle: {
						fontSize:10,
                        color: 'rgba(0,0,0,.5)'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: 'rgba(255,255,255,1)'
                    }
                }
            },
			
			
        }]
    };
    myChart.setOption(option);
	 window.addEventListener("resize",function(){
            myChart.resize();
        });
});