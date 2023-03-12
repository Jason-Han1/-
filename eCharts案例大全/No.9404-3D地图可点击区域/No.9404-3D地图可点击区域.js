var geoCoordMap = {
                 "北京":[116.405285,39.904989],
                 "福建":[119.306239,26.075302],
                 "浙江":[120.153576,30.287459],
                 "上海":[121.472644,31.231706],
                 "广东":[113.280637,23.125178],
                 "广西":[108.320004,22.82402],
                 "安徽":[117.283042,31.86119],
                 "湖南":[112.982279,28.19409],
                 "湖北":[114.298572,30.584355]
              };

              var convertData = function(data) {
                 var res = [];
                 for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                       res.push({
                          name: data[i].name,
                          value: geoCoord.concat(data[i].value)
                       });
                    }
                 }
                 return res;
              };

              option = {
                 tooltip: {
                    show: true,
                    // formatter:(params)=>{
                    //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
                    //   return data;
                    // },
                 },
                 visualMap: [{
                    show: false,
                    type: 'continuous',
                    seriesIndex: 0,
                    text: ['bar3D'],
                    calculable: true,
                    max: 300,
                    inRange: {
                       color: ['#87aa66', '#eba438', '#d94d4c']
                    }
                 }],
                 geo3D: {
                    map: 'china',
                    tooltip:{
                       show:false
                    },
                    regionHeight:2.9,
                    label:{
                       show:false,
                       textStyle:{
                          color:'#fff',
                          fontSize:12,
                          backgroundColor: 'rgba(0,0,0,0)'
                       }
                    },
                    left:'10%',
                    shading:'color',
                    postEffect:{
                       show:true
                    },
                    itemStyle: {
                       areaColor: "#008ae9",
                       opacity: 1,
                       borderWidth: 0,
                       borderColor: "rgba(40,255,248,1)"
                    },
                    emphasis: {
                       label: {
                          show: true
                       },
                       itemStyle: {
                          areaColor: "#0067e9",
                       }
                    },
                 },
                 series: [
                    {
                    name: 'bar3D',
                    type: "bar3D",
                    coordinateSystem: 'geo3D',
                    barSize: 1.5, //柱子粗细
                    shading: 'lambert',
                    opacity: 1,
                   tooltip:{
                      show:false
                   },
                    minHeight:4,
                    bevelSize: 0.3,
                    label: {
                       show: false,
                       formatter: '{b}'
                    },
                    data: convertData([{
                       name: "北京",
                       value: (Math.random() * 300).toFixed(2)
                    },{
                       name: "福建",
                       value: (Math.random() * 300).toFixed(2)
                    },{
                       name: "浙江",
                       value: (Math.random() * 300).toFixed(2)
                    },{
                       name: "上海",
                       value: (Math.random() * 300).toFixed(2)
                    },{
                       name: "广东",
                       value: (Math.random() * 300).toFixed(2)
                    },{
                       name: "广西",
                       value: (Math.random() * 300).toFixed(2)
                    },{
                       name: "安徽",
                       value: (Math.random() * 300).toFixed(2)
                    },{
                       name: "湖南",
                       value: (Math.random() * 300).toFixed(2)
                    },{
                       name: "湖北",
                       value: (Math.random() * 300).toFixed(2)
                    },
                    ]),
                 },
                 {
                    type:'map3D',
                    map: 'china',
                    tooltip:{
                     show:false
                    },
                    label:{
                       show:true,
                       textStyle:{
                          color:'#fff',
                          fontSize:12,
                          backgroundColor: 'rgba(0,0,0,0)'
                       }
                    },
                    left:'10%',
                    shading:'color',
                    postEffect:{
                      show:true
                    },
                    itemStyle: {
                       areaColor: "#008ae9",
                       opacity: 1,
                       borderWidth: 1.5,
                       borderColor: "rgba(40,255,248,1)"
                    },
                    emphasis: {
                       label: {
                          show: true
                       },
                       itemStyle: {
                          areaColor: "#0067e9",
                       }
                    },
                 }]
              };