var mapName = 'china'
var data = [
    {name:"北京",value:0},
    {name:"天津",value:42},
    {name:"河北",value:102},
    {name:"山西",value:81},
    {name:"内蒙古",value:147},
    ];
    
var geoCoordMap = {"台湾":[121.509062,25.044332],"河北":[114.502461,38.045474],"山西":[112.549248,37.857014],"内蒙古":[111.670801,40.818311],"辽宁":[123.429096,41.796767],"吉林":[125.3245,43.886841],"黑龙江":[126.642464,45.756967],"江苏":[118.767413,32.041544],"浙江":[120.153576,30.287459],"安徽":[117.283042,31.86119],"福建":[119.306239,26.075302],"江西":[115.892151,28.676493],"山东":[117.000923,36.675807],"河南":[113.665412,34.757975],"湖北":[114.298572,30.584355],"湖南":[112.982279,28.19409],"广东":[113.280637,23.125178],"广西":[108.320004,22.82402],"海南":[110.33119,20.031971],"四川":[104.065735,30.659462],"贵州":[106.713478,26.578343],"云南":[102.712251,25.040609],"西藏":[91.132212,29.660361],"陕西":[108.948024,34.263161],"甘肃":[103.823557,36.058039],"青海":[101.778916,36.623178],"宁夏":[106.278179,38.46637],"新疆":[87.617733,43.792818],"北京":[116.405285,39.904989],"天津":[117.190182,39.125596],"上海":[121.472644,31.231706],"重庆":[106.504962,29.533155],"香港":[114.173355,22.320048],"澳门":[113.54909,22.198951]};
var toolTipData = [ 
    {name:"北京",value:[{name:"车辆数",value:95},{name:"司机数",value:82}]},
    {name:"天津",value:[{name:"车辆数",value:22},{name:"司机数",value:20}]},
    {name:"河北",value:[{name:"车辆数",value:60},{name:"司机数",value:42}]},
    {name:"山西",value:[{name:"车辆数",value:40},{name:"司机数",value:41}]},
    {name:"内蒙古",value:[{name:"车辆数",value:23},{name:"司机数",value:24}]},

];


var max = 480,
    min = 9; // todo 
var maxSize4Pin = 100,
    minSize4Pin = 20;

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};
var planePath = 'path://M683.436973 788.16173H317.495351c-28.86573 0-52.279351-23.164541-52.279351-51.753514V296.627892c0-28.575135 23.413622-51.739676 52.279351-51.739676h39.202595v12.938379c0 35.715459 29.267027 64.678054 65.356108 64.678054h156.824216c36.075243 0 65.34227-28.962595 65.342271-64.678054v-12.938379h39.216432c28.86573 0 52.265514 23.164541 52.265513 51.753514v439.794162c0 28.575135-23.399784 51.739676-52.265513 51.739676zM631.143784 425.970162H369.747027a26.015135 26.015135 0 0 0-26.125838 25.876757 26.015135 26.015135 0 0 0 26.139676 25.876757H631.143784a26.015135 26.015135 0 0 0 26.139675-25.876757 26.015135 26.015135 0 0 0-26.153513-25.876757z m0 90.554811H369.747027a26.015135 26.015135 0 0 0-26.125838 25.876757 26.015135 26.015135 0 0 0 26.139676 25.862919H631.143784a26.015135 26.015135 0 0 0 26.139675-25.876757 26.015135 26.015135 0 0 0-26.153513-25.876757z m0 90.540973H369.747027a26.015135 26.015135 0 0 0-26.125838 25.876757 26.015135 26.015135 0 0 0 26.139676 25.876756H631.143784a26.015135 26.015135 0 0 0 26.139675-25.876756 26.015135 26.015135 0 0 0-26.153513-25.876757z m-78.419027-310.451892H448.207568c-28.879568 0-52.279351-23.164541-52.279352-51.739676s23.399784-51.739676 52.279352-51.739675h104.544864c28.86573 0 52.279351 23.164541 52.279352 51.753513 0 28.561297-23.413622 51.725838-52.279352 51.725838z';

option = {
    backgroundColor: '#070827', 
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            const i = params.dataIndex
            if(toolTipData[i]?.value[0].name){
                const car = toolTipData[i].value[0]
                const driver = toolTipData[i].value[1]
                const htm = `
                <div class="tool-tip">
                   <div>${ car.name} : ${ car.value}</div>
                   <div>${ driver.name} : ${ driver.value}</div>
                </div>
                `
                return htm
            }else{
                return null
            }
         
        }
    },
    visualMap: {
        show: true,
        min: 0,
        max: 200,
        left: '10%',
        top: 'bottom',
        calculable: true,
        seriesIndex: [1],
        inRange: {
            color: ['rgba(0, 107, 255, 0.2)','rgba(0, 107, 255, 0.8)', ] // 蓝
        }
    },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: 'rgba(0, 107, 255, 0.3)',
                borderColor: '#006BFF',
                borderWidth:2,
            },
            emphasis: {
                areaColor: '#4499d0',
            }
        }
    },
    series: [{
            name: '中心白色图标',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbol: planePath,
            symbolSize: function(val) {
                return val[2] / 10;
            },
            symbolKeepAspect:true,
       
            itemStyle: {
                normal: {
                    color: '#FFFFFF'
                }
            },
            zlevel: 6
        },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#006BFF',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
       
        {
            name: '图标红色背景',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
             symbolSize: function(val) {
                return val[2] /6;
            },
            symbolKeepAspect:true,
            itemStyle: {
                normal: {
                    color: '#E26851'
                }
            },
        
            zlevel: 5
        },

    ]
};



