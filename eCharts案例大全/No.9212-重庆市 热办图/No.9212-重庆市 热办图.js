var uploadedDataURL = "/asset/get/s/data-1576202632287-KBwWpPjR.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('chongqing', geoJson);
    myChart.hideLoading();
   var geoCoordMap = {
       
    }
    var data1 = [{
                    name: '主城区',
                    value: 10
                },
                {
                    name: '渝西片区',
                    value: 9
                },
                {
                    name: '渝东北片区',
                    value: 8
                },
                {
                    name: '渝东南片区',
                    value: 6
                },
                {
                    name: '万州区',
                    value: 3
                },
                {
                    name: '黔江区',
                    value: 8
                },
                {
                    name: '涪陵区',
                    value: 7
                },
                {
                    name: '渝中区',
                    value: 6
                },
                {
                    name: '大渡口区',
                    value: 4
                },
                {
                    name: '江北区',
                    value: 5
                },
                {
                    name: '沙坪坝区',
                    value: 4
                },
                {
                    name: '九龙坡区',
                    value: 9
                },
                {
                    name: '南岸区',
                    value: 10
                },
                {
                    name: '北碚区',
                    value: 3
                },
                {
                    name: '綦江区',
                    value: 7
                },
                {
                    name: '大足区',
                    value: 6
                },
                {
                    name: '渝北区',
                    value: 5
                },
                {
                    name: '巴南区',
                    value: 5
                },
                {
                    name: '长寿区',
                    value: 2
                },
                {
                    name: '江津区',
                    value: 1
                },
                {
                    name: '合川区',
                    value: 3
                },
                {
                    name: '永川区',
                    value: 6
                },
                {
                    name: '南川区',
                    value: 7
                },
                {
                    name: '璧山区',
                    value: 9
                },
                {
                    name: '铜梁区',
                    value: 7
                },
                {
                    name: '潼南区',
                    value: 5
                },
                {
                    name: '荣昌区',
                    value: 4
                },
                {
                    name: '开州区',
                    value: 1.27
                },
                {
                    name: '梁平区',
                    value: 1.32
                },
                {
                    name: '武隆区',
                    value: 6
                },
                {
                    name: '城口县',
                    value: 2
                },
                {
                    name: '丰都县',
                    value: 8
                },
                {
                    name: '垫江县',
                    value: 1
                },
                {
                    name: '忠县',
                    value: 3
                },
                {
                    name: '云阳县',
                    value: 5
                },
                {
                    name: '奉节县',
                    value: 2
                },
                {
                    name: '巫山县',
                    value: 1.22
                },
                {
                    name: '巫溪县',
                    value: 5
                },
                {
                    name: '石柱土家族自治县',
                    value: 9
                },
                {
                    name: '秀山土家族苗族自治县',
                    value: 1.17
                },
                {
                    name: '酉阳土家族苗族自治县',
                    value: 0.93
                },
                {
                    name: '彭水苗族土家族自治县',
                    value: 1.10
                }
    ];

 

    option = {  
        backgroundColor:'#222',
	  tooltip: {
               formatter :'{b}{c}'
           },
        visualMap: {
            min: 0,
            max:10,
            text: ['高', '低'],
            realtime: false,
            calculable: true,
            inRange: {
               color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096', ]
            },
			 textStyle: {
                color: '#fff'
            }
        },
      
        series: [ {
            name: '地图数据',
            type: 'map',
            zoom: 1.1,
            roam: true, //是否开启鼠标缩放和平移漫游
            mapType: 'chongqing', // 自定义扩展图表类型
            itemStyle: {
                normal: {
                    borderColor: 'white',
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