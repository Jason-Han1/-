var uploadedDataURL = "/asset/get/s/data-1577929263585-7iWLUl9L.json";


$.get(uploadedDataURL, function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('江门市', geoJson);
    
var allData = {
"citys":[
{"name":"肇庆市","value":[112.202505446,23.5402929609],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"佛山市","value":[112.943591829,23.0124787236],"symbolSize":10,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"广州市","value":[113.535632255,23.3480142139],"symbolSize":20,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"深圳市","value":[114.133979873,22.6578881941],"symbolSize":16,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"中山市","value":[113.378541178,22.5212390768],"symbolSize":6,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"江门市","value":[112.670232328,22.2849956517],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"珠海市","value":[113.359346020,22.1755210066],"symbolSize":5,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"东莞市","value":[113.875271234,22.9359894759],"symbolSize":15,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"惠州市","value":[114.497460348,23.2438307900],"symbolSize":8,"itemStyle":{"normal":{"color":"#F58158"}}},
],

"moveLines":[
{"coords":[[112.943591829,23.0124787236],[113.535632255,23.3480142139]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:18 ,opacity:0.6,curveness: 0.2}}},
{"coords":[[114.133979873,22.6578881941],[113.875271234,22.9359894759]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:12 ,opacity:0.6,curveness: 0.2}}},
{"coords":[[113.875271234,22.9359894759],[114.133979873,22.6578881941]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:12 ,opacity:0.6,curveness: 0.2}}},
{"coords":[[113.535632255,23.3480142139],[112.943591829,23.0124787236]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:9 ,opacity:0.4,curveness: 0.2}}},
{"coords":[[114.497460348,23.2438307900],[114.133979873,22.6578881941]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:8 ,opacity:0.4,curveness: 0.2}}},
{"coords":[[113.378541178,22.5212390768],[113.359346020,22.1755210066]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:7 ,opacity:0.4,curveness: 0.2}}},
{"coords":[[113.875271234,22.9359894759],[113.535632255,23.3480142139]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:6 ,opacity:0.4,curveness: 0.2}}},
{"coords":[[113.535632255,23.3480142139],[113.875271234,22.9359894759]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:6 ,opacity:0.4,curveness: 0.2}}},
{"coords":[[114.133979873,22.6578881941],[113.535632255,23.3480142139]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:5 ,opacity:0.4,curveness: 0.2}}},
{"coords":[[114.133979873,22.6578881941],[114.497460348,23.2438307900]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:5 ,opacity:0.4,curveness: 0.2}}},
{"coords":[[114.497460348,23.2438307900],[113.875271234,22.9359894759]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:5 ,opacity:0.4,curveness: 0.2}}},
{"coords":[[113.535632255,23.3480142139],[114.133979873,22.6578881941]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:4 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.875271234,22.9359894759],[114.497460348,23.2438307900]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:3 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[112.943591829,23.0124787236],[113.378541178,22.5212390768]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:3 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[114.497460348,23.2438307900],[113.535632255,23.3480142139]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:3 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[112.202505446,23.5402929609],[112.943591829,23.0124787236]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:2 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[112.943591829,23.0124787236],[112.202505446,23.5402929609]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:2 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.359346020,22.1755210066],[113.378541178,22.5212390768]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:2 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.378541178,22.5212390768],[112.943591829,23.0124787236]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:2 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.378541178,22.5212390768],[113.535632255,23.3480142139]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:2 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[112.202505446,23.5402929609],[113.535632255,23.3480142139]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:2 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[112.670232328,22.2849956517],[113.535632255,23.3480142139]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:2 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.535632255,23.3480142139],[114.497460348,23.2438307900]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:2 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[112.670232328,22.2849956517],[113.378541178,22.5212390768]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:2 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.535632255,23.3480142139],[113.378541178,22.5212390768]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:2 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.535632255,23.3480142139],[112.202505446,23.5402929609]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:2 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[112.943591829,23.0124787236],[113.875271234,22.9359894759]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.875271234,22.9359894759],[112.943591829,23.0124787236]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.535632255,23.3480142139],[112.670232328,22.2849956517]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.378541178,22.5212390768],[112.670232328,22.2849956517]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[114.133979873,22.6578881941],[112.943591829,23.0124787236]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[112.943591829,23.0124787236],[114.133979873,22.6578881941]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[112.943591829,23.0124787236],[112.670232328,22.2849956517]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.535632255,23.3480142139],[113.359346020,22.1755210066]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[112.670232328,22.2849956517],[112.943591829,23.0124787236]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.359346020,22.1755210066],[113.535632255,23.3480142139]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[114.133979873,22.6578881941],[113.378541178,22.5212390768]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.875271234,22.9359894759],[113.378541178,22.5212390768]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.378541178,22.5212390768],[114.133979873,22.6578881941]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.378541178,22.5212390768],[113.875271234,22.9359894759]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[114.133979873,22.6578881941],[113.359346020,22.1755210066]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},
{"coords":[[113.359346020,22.1755210066],[114.133979873,22.6578881941]], lineStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#58B3CC'}, {offset: 1, color: '#F58158'}], false),width:1 ,opacity:0.2,curveness: 0.2}}},

]
};
    let oneLevel = []
     let twoLevel = []
      let threeLevel = []
       let fourLevel = []
        let fiveLevel = []
       let sixLevel = []
    allData["moveLines"].forEach( data => {
        if(data.lineStyle.normal.width >= 0 &&data.lineStyle.normal.width < 10) oneLevel.push(data)
        if(data.lineStyle.normal.width >= 10 &&data.lineStyle.normal.width < 20) twoLevel.push(data)
        if(data.lineStyle.normal.width >= 20 &&data.lineStyle.normal.width < 30) threeLevel.push(data)
        if(data.lineStyle.normal.width >= 30 &&data.lineStyle.normal.width < 40) fourLevel.push(data)
        if(data.lineStyle.normal.width >= 40 &&data.lineStyle.normal.width < 50) fiveLevel.push(data)
        if(data.lineStyle.normal.width >= 50) sixLevel.push(data)
    })
option = {
    backgroundColor: '#404a59',
    title: {
        text: '2008年长三角城市相互持股关系图',
        top: 40,
        left: 'center',
        textStyle: {
            color: '#D5D5D5'
        }
    },
    legend:[
         {
          bottom: "30%",
          right: "5%",
          textStyle: {
            // 图例文字样式
            color: "#D5D5D5",
            fontSize: 16,
            fontFamily: "微软雅黑"
          },
          
          itemWidth: 0, // 图例图形的宽度
          itemHeight: 2, // 图例图形的高度
          formatter:() => {
             return '知识创新网络';
          },
          data: [
            {
              name: "A", // 图例文字内容
              icon: "roundRect" // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
            //也可引用自定义的图片
              //  icon: "image://https://p1.pstatp.com/list/dfic-imagehandler/8ac89fbe-b30c-4ba0-8d75-02c0f60a7ea6"
            }
          ]
        },
        {
          bottom: "26%",
          right: "5%",
          textStyle: {
            // 图例文字样式
            color: "#D5D5D5",
            fontSize: 14,
            fontFamily: "微软雅黑"
          },
          align:'right',
          itemWidth: 33, // 图例图形的宽度
          itemHeight: 2, // 图例图形的高度
          itemStyle: {
            color:'#F58055'  
          },
          formatter:(name) => {
             return '0-10';
          },
          data: [
            {
              name: "B", // 图例文字内容
              icon: "roundRect" // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
            //也可引用自定义的图片
              //  icon: "image://https://p1.pstatp.com/list/dfic-imagehandler/8ac89fbe-b30c-4ba0-8d75-02c0f60a7ea6"
            }
          ]
        },
        {
          bottom: "22%",
          right: "5%",
          textStyle: {
            color: "#D5D5D5",
            fontSize: 14,
            fontFamily: "微软雅黑"
          },
          align:'right',
          itemWidth: 33,
          itemHeight: 5,
          itemStyle: {
            color:'#F58055'  
          },
          formatter:(name) => {
             return '10-20';
          },
          data: [
            {
              name: "C",
              icon: "roundRect" //引用自定义的图片
            }
          ]
        },
        {
          bottom: "18%",
          right: "5%",
          textStyle: {
            color: "#D5D5D5",
            fontSize: 14,
            fontFamily: "微软雅黑"
          },
          align:'right',
          itemWidth: 33,
          itemHeight: 10,
          itemStyle: {
            color:'#F58055'  
          },
          formatter:(name) => {
             return '20-30';
          },
          data: [
            {
              name: "D",
              icon: "roundRect" //引用自定义的图片
            }
          ]
        },
        {
          bottom: "14%",
          right: "5%",
          textStyle: {
            color: "#D5D5D5",
            fontSize: 14,
            fontFamily: "微软雅黑"
          },
          align:'right',
          itemWidth: 33,
          itemHeight: 15,
          itemStyle: {
            color:'#F58055'  
          },
          formatter:(name) => {
             return '30-40';
          },
          data: [
            {
              name: "E",
              icon: "roundRect" //引用自定义的图片
            }
          ]
        },
        {
          bottom: "10%",
          right: "5%",
          textStyle: {
            color: "#D5D5D5",
            fontSize: 14,
            fontFamily: "微软雅黑"
          },
          align:'right',
          itemWidth: 33,
          itemHeight: 20,
           itemStyle: {
            color:'#F58055'  
          },
          formatter:(name) => {
             return '40-50';
          },
          data: [
            {
              name: "F",
              icon: "roundRect" //引用自定义的图片
            }
          ]
        },
        {
          bottom: "6%",
          right: "5%",
          textStyle: {
            color: "#D5D5D5",
            fontSize: 14,
            fontFamily: "微软雅黑"
          },
          align:'right',
          itemWidth: 33,
          itemHeight: 25,
           itemStyle: {
            color:'#F58055'  
          },
          formatter:(name) => {
             return '50以上';
          },
          data: [
            {
              name: "G",
              icon: "roundRect" //引用自定义的图片
            }
          ]
        }
        
      ],
    geo: {
        map: '江门市',
        label: {
            //normal:{
                //show: true,
                //textStyle:{
                    //color:'#fff',
                //}
            //},
            emphasis: {
                show: false,
                    textStyle:{
                    color:'#fff',
                }
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#2a333d',
                borderColor: '#404a59',
                borderWidth:1,
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: 'A',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke',
            period:7,
            scale:10
        },
        label: {
            normal:
            {
                show : true,
                position:'right',
                formatter:'{b}'
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
        data: allData.citys
    }, {
        name: 'B',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 1,
        large: true,
        effect: {
            show: true,
            constantSpeed: 50,
            symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 3,
            trailLength: 0,
        },
        data: oneLevel
    },
    {
        name: 'C',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 1,
        large: true,
        effect: {
            show: true,
            constantSpeed: 50,
            symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 3,
            trailLength: 0,
        },
        data: twoLevel
    
    }, {
        name: 'D',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 1,
        large: true,
        effect: {
            show: true,
            constantSpeed: 50,
            symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 3,
            trailLength: 0,
        },
        data: threeLevel
    
   } , {
        name: 'E',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 1,
        large: true,
        effect: {
            show: true,
            constantSpeed: 50,
            symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 3,
            trailLength: 0,
        },
        data: fourLevel
    
    }, {
        name: 'F',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 1,
        large: true,
        effect: {
            show: true,
            constantSpeed: 50,
            symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 3,
            trailLength: 0,
        },
        data: fiveLevel
        
    }
        , {
        name: 'G',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 1,
        large: true,
        effect: {
            show: true,
            constantSpeed: 50,
            symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 3,
            trailLength: 0,
        },
        data: sixLevel}
    ]
};
myChart.setOption(option);
});