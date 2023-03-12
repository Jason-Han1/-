echarts.registerMap("beijin",{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              116.25938415527344,
              39.87707332113241
            ],
            [
              116.40495300292967,
              39.87707332113241
            ],
            [
              116.40495300292967,
              40.04075787580295
            ],
            [
              116.25938415527344,
              40.04075787580295
            ],
            [
              116.25938415527344,
              39.87707332113241
            ]
          ]
        ]
      }
    }
  ]
});

option = {
            backgroundColor:'#156484',
            title: {
                text: "1111",
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip:{
                trigger:"item",
                show:false,
                showContent:false,
                alwaysShowContent:false,
                enterable:true,
         
            },
          geo:[{
              type:'map',
              map:"beijin",
              tooltip:{
                  show:true,
              },
              itemStyle : {
					normal : {
						areaColor : 'rgba(255, 255, 255, 0)', //区域颜色
						borderColor : 'red',
						borderWidth : 2,			//重合后，边框为0，即可隐去边框
					},
					emphasis : {
						show : false,
						areaColor : 'rgba(255, 255, 255, 0)' //滑过鼠标色
					}
				},
          }],
            series: [
                        {
                name: 'beijin',
                type: 'map',
                mapType: 'beijin',
                roam: true,
                 itemStyle : {
					normal : {
						areaColor : 'rgba(255, 255, 255, 0)', //区域颜色
						borderColor : 'red',
						borderWidth : 2,			//重合后，边框为0，即可隐去边框
					},
					emphasis : {
						show : false,
						areaColor : 'rgba(255, 255, 255, 0)' //滑过鼠标色
					}
				},
                }
 

                ]
               
        };
        
        myChart.setOption(option,true);
        //加载饼状图
        option.series.push({
                        name: 'aaa',
                        type: 'pie',                               
                        radius: '5%',
                        center:myChart.convertToPixel({ geoIndex: 0 },[116.35938415527344,39.97707332113241]),
                        color:'red',
                        data: [{ name: 'data1', value: 12 }]
                });
            myChart.setOption(option);    

        