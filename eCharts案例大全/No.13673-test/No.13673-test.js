var geoCoordMap = {
        "白云机场南-地铁站":["113.303097","23.38669"],
        "昌岗-地铁站":["113.276885","23.090654"],
        "车陂南-地铁站":["113.389561","23.11593"],
        "大石-地铁站":["113.321744","23.017761"],
        "大塘-地铁站":["113.321677","23.077974"],
        "东山口-地铁站":["113.295373","23.12398"],
        "番禺广场-地铁站":["113.385642","22.935482"],
        "岗顶-地铁站":["113.339601","23.13488"],
        "公园前-地铁站":["113.264315","23.125446"],
        "广州火车站-地铁站":["113.256603","23.148143"],
        "广州南站-地铁站":["113.269125","22.98898"],
        "广州塔-地铁站":["113.323618","23.106375"],
        "海珠广场-地铁站":["113.265344","23.114796"],
        "汉溪长隆-地铁站":["113.33017","22.992931"],
        "华师-地铁站":["113.345349","23.140306"],
        "黄沙-地铁站":["113.239856","23.110524"],
        "嘉禾望岗-地铁站":["113.289243","23.23746"],
        "客村-地铁站":["113.320331","23.096197"],
        "沥滘-地铁站":["113.319077","23.054898"],
        "区庄-地铁站":["113.296725","23.134483"],
        "厦滘-地铁站":["113.320837","23.038007"],
        "石牌桥-地铁站":["113.332124","23.133135"],
        "市桥-地铁站":["113.361726","22.949743"],
        "坦尾-地铁站":["113.218387","23.125234"],
        "体育西路-地铁站":["113.321503","23.131138"],
        "天河客运站-地铁站":["113.3436","23.171"],
        "万胜围-地铁站":["113.384796","23.097712"],
        "五山-地铁站":["113.351812","23.152833"],
        "西朗-地铁站":["113.231978","23.065437"],
        "燕塘-地铁站":["113.327132","23.15998"],
        "杨箕-地铁站":["113.307563","23.127543"],
        "珠江新城-地铁站":["113.321206","23.119293"]

    };

    var metroData = [
        [{name:'白云机场南-地铁站',value:415}, {name:'昌岗-地铁站',value:205}],
//        [{name:'昌岗-地铁站',value:95}, {name:'白云机场南-地铁站',value:95}],
//
//        [{name:'白云机场南-地铁站',value:95}, {name:'车陂南-地铁站',value:3000}],
//        [{name:'车陂南-地铁站',value:95}, {name:'白云机场南-地铁站',value:95}],
////
//        [{name:'广州南站-地铁站',value:95}, {name:'燕塘-地铁站',value:5000}],
//        [{name:'燕塘-地铁站',value:95}, {name:'广州南站-地铁站',value:90}],
//
//        [{name:'杨箕-地铁站',value:95}, {name:'海珠广场-地铁站',value:90}],


    ];

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                    value: dataItem[1].value//来源或流向修改
                }, {
                    coord: toCoord,
                }]);
            }
        }
        //console.log(res)
        return res;

    };

    var outInPercentstr=[{color:'aqua', gt:0, lte:2000},{color:'lime', gt:2000, lte:4000},{color:'yellow', gt:4000, lte:6000},{color:'orange', gt:6000, lte:8000},{color:'#ff3333', gt:8000}];
    var series = [];
    [["广州市", metroData]].forEach(function (item, i) {
        series.push(
                {
                    name: '广州市',
                    type: 'map',
                    geoIndex: 0,
                    tooltip: {
                        show: true,
                        formatter: function(params) {
//                            console.log(params)
//                            if(params.data.value!=null){
//                                return params.seriesName+"<br/>"+params.data.name+":"+params.data.value;
//                            }else{
//                                return params.data.name;
//                            }
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: dataItem[1].value
                        };
                    })
                },
                {//路径
                    name: item[2],
                    type: 'lines',
                    symbol: ['none', 'none'], //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'线两端的标记类型
                    symbolSize : 20, //箭头大小
                    lineStyle: {
                        normal: {
                            width: 0.1,
                            opacity: 0.4,
                            curveness: 0.3
                        },
                    },
                    zlevel: 2,
                    effect: {
                        show: true, //是否显示特效
                        period: 3,  //特效动画的时间，单位为 s
                        symbol:'pin', //特效图形的类型
                        constantSpeed: 60, //固定速度，大于0的值后会忽略 period 配置项
                        symbolSize: 5,
                        color: '#fff',
                        shadowBlur: 8
                    },
                    lineStyle: {
                        normal: {
                            width: 0.1,
                            curveness: 0.3
                        }
                    },
                    data: convertData(item[1])
                }


    );
        
        var arrItem=item[1]["0"];
        for(var k=0;k<arrItem.length;k++){
             series.push({
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: { //涟漪特效相关配置
                        period:'4', //动画的时间
                        scale:'4', //动画中波纹的最大缩放比例
                        brushType: 'stroke'
                    },
                    label: { //图形上的城市文本标签
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}',
                            textStyle:{
                                color:'#fff',
                                fontStyle: 'normal',
                                fontFamily: 'arial',
                                fontSize: 12,
                            }
                        }
                    },
                    tooltip:{
                        show:true,
                        formatter:function(params){
                            //console.log(params)
                            var name = params.name.split("-")[0];
                            if( params.value[2] != null && params.value[2] != undefined && params.value[2] != 'NaN'){

                                return name + "：" + params.value[2];
                            }else{
                                return name;
                            }
                        }
                    },
                    symbolSize: 8,//点大小
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[k].name,
                            value: geoCoordMap[dataItem[k].name].concat([dataItem[k].value])
                        };
                    })
                });
        }
       
    });

    option = {
        backgroundColor: '#2b3a65',
        tooltip : {  //提示组件
            show: false,
        },
        legend:{show:false},
        visualMap: {
            type: 'piecewise',
            splitNumber: 5,
            calculable: true,
            itemWidth: 20,
            itemHeight: 16,
            itemGap: 5,
            align: 'left',
            seriesIndex:['1','2','3'],
            pieces:outInPercentstr,
            right: 40,
            bottom: 170,
            textStyle: {
                color: '#4ac7f5',
                fontSize: 14,
            }
        },
        geo: [{
            map: 'china',
            // top: 110,
            // left:880,
            z:1,
            label: {
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                    },
                }
            },
            roam: true, //开启缩放或者平移
            zoom: 1.3,  //缩放比例
            itemStyle: {
                normal: {
//                    areaColor: '#267bee',
                    areaColor: 'rgba(61,97,166,0.5)',
                    borderWidth: 3,
                    borderColor: 'rgba(108,136,216,0.9)'
                },
                emphasis: {
                    areaColor: 'rgba(61,97,166,1)'
                }
            }
        },{
            //map: 'guangdong',
            backgroundColor: '#2b3a65',
            top: 339,
            left:693,
            z:0,
            label: {
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff',
                    },
                }
            },
            roam:false, //开启缩放或者平移
            zoom: 4.85,  //缩放比例
            itemStyle: {
                normal: {
                    areaColor: '#2b3a65',
                    borderWidth: 1,
                    borderColor: '#fff'
                },
                emphasis: {
                    areaColor: 'transparent'
                }
            }
        }],
        series: series
    };