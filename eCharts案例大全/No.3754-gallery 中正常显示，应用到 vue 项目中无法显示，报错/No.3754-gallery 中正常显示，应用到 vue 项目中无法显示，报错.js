//推进较快: 图标
var greenFlag = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABvUlEQVRIS7XVz0sUYRgH8O/3pZ3ZxLskncTCS+8cooMgQSDRRQLxEEWCBHvfea1DHeyiJ1//gOgQGXrp3slQgw6hsTNrSSCeUvxxNdgZcJ6YZQPJnS13d97zM8/neZ7hfV4i58Oc86PrgBOYidiz7/8UngkUQ1MCOCqQYQBXAewC2BZwKdbzS393XgzLAyLqKYihSNs75wCn6s8gARW5D6AkwM3M8Ykcg/wGwXeBHJMYBni3Eb/aHAjNOwKPuvBPmgOFLXNLJfiSG5AmdkLzmUjb7eg076AOBOUHpFruKD2QDaSJ3dAcAOjrAGkNOIF5TmI2N6Dn67P+00une7kB9TFV/dcQPmkTaT2iNGmxYkZE4VM7gBCL8Q07+c9V4VbNRwjqV57AJoBXQrUSqV+Hl5OiTkCNBIME+oW4IsCuElmreQtvzxaWvYuq5rEI0uCdSNtr7XTTKC7j041SwXV6dwBWIm3vdx+oXzx/huTLgrDvxJs/agdp+R64Ff86FH+I4EXs2bmuA4399IbA7UjbgVwANyjfA9UHiozWvIWViyL/9WS6ob9O8GdN24f5AMH0mFDGY22ncgEumvRs/G/ifZwZcDe7lwAAAABJRU5ErkJggg=="
//推进缓慢: 图标
var redFlag = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABr0lEQVRIS7XVPWsVQRQG4PecuWJrEdjZaHUzN7FKE1IERBCCpBEhWASDAQnkH9jEImnijwgWohIbe6tIPsBCFGzMh7s3lR+z5h9Idl7ZfEAw2Ruz9+7Uh/eZM7N7RlDzkprz0XMgseZBy+dvTzZeCqSxmRNynMAYgBsA9gBuC3VlIMtX/u38W4Smij4BeNN53jkDtK0uBEBE5CeIOYAjHY5vH+BXQrYA7IMcE5G7R/VcOxdIIn0tgunu76QEaFuMEvqxNqAITq35ALA48y5WSQeHQGSmIHzTRXr5HZyEplY9gKg60qGDIjSJdF4ES7UBO33obzT0R21AEdyO9TmJ2WrIBUdUhO7GuGWom9UAvHI+zFw8Kqy8B+T4l5fPECwzz1f/ENlVwbAYHSbhIOgHGROyJ5B15/OXpzdWOouS2DwSsihOnQ+tit2UT9NPwJVrVlOAX5zn/Z4Dh5+s1QUBFsEQuQy/qyAd34P2dQwy110ST1tZeNZz4Gg+6QsCt1s+NOsB4sYEGN7l1PGh7GD1ssh/PZmpNRsQfne/wsNagCQy90Q46Xx4XAtw2dDT9X8BN8qrGZD72PUAAAAASUVORK5CYII="
//已完成: 图标
var yellowFlag = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABwklEQVRIS7WVv2sUURDHP/OOa25PLO/eqs2hok0asQiIINyeNiKIhSgKIuQ/sNEiNvo/KBYSJTbpJdmN+AMsRMFGRQipzO3GNKK7QaJ5I3deIGj2Ytbbqed9P/OdYeYJJYeUrM/IAatR81ytncxsFJ4LyCI7AdLG6TjCXmAR5IPCdD3oTv/p/EvUaFWduSbCoVoQn/gLkIXNSecQU5EuMIFyJLd9yooI7xR575xbMUbGgU4vX+DploA0tA8FLv7vTHIBWdQ8isqr0gA94SxsvoS+3cKR66Cn+G3WP2+MPiqsPmwGG6JZaBOgURQy1EG/TXP2OsKtEgH7fOTnUmmAgYt7CFeLQLZtUU/0a2iPVeBFQcCDWhBf3vZUrEb+E1X9vfLCG+Duj7X1+bVUl+u7q2MqOiaG/U7xDVhFFxWe1YNkanNhubconbOXRJhCdcHrJAeKuBmcjq2fvr5D9XDLLoC+9YLkzMgBg82eBLnpnGvsOrn8uQhk6H/wPdpzcF3dR5QbXie+PXJA30Xk30f1uBfErVIAaWRPifJY1bTrnaX5nUL+6ctMQ/vcwKdaEF8oBZDN+qepcNZrd6+UAtip6Ob8XyoQpBnYBmoPAAAAAElFTkSuQmCC"

dataPolygonStrToPolygon = (polygon) => {
  polygon = JSON.parse(polygon)
  let points = []
  polygon.forEach((item, index) => {
    // 如果是偶数索引（坐标成对的，所以这里肯定是偶数）
    if (!(index % 2)) {
      points.push([polygon[index + 1], item])
    }
  })
  return points
}

const townsPolygonPointInfo = {
  "多湖街道": "[29.100971814,119.671709453,29.107103113,119.679409983,29.111475594,119.677772354,29.106618469,119.692067971,29.11309221,119.708078972,29.113375016,119.718392753,29.105947529,119.726826478,29.101193757,119.723775682,29.094309164,119.733067313,29.093958679,119.730942868,29.086613041,119.732978287,29.087669856,119.737996234,29.08372704,119.734252365,29.087354996,119.726867333,29.081596214,119.718434938,29.081551343,119.715467199,29.082629835,119.717597321,29.08459532,119.715586214,29.083197127,119.711467673,29.074666927,119.709510542,29.068919303,119.71165493,29.067752943,119.698179263,29.061951532,119.701195512,29.058194575,119.698637433,29.055422878,119.701599179,29.048440227,119.699899138,29.049343512,119.704815579,29.04378439,119.703437216,29.046354926,119.701320472,29.045646159,119.695169674,29.039745487,119.685370623,29.04908019,119.671649355,29.066226645,119.666711278,29.073669442,119.669284759,29.075221432,119.674607149,29.078497796,119.675400805,29.094363438,119.660880334,29.096645114,119.667578691,29.102348235,119.666483034,29.100971814,119.671709453]",
}

var data = 
{
	"type": "FeatureCollection",
	"features": [
		{
			"type":"Feature", 
			"properties": {
				// "adcode": 340104,
				// "name": "多湖街道",
				"center": [119.686263,29.074407],
				// "centroid": [119.686263,29.074407],
				// "childrenNum": 0,
				// "level": "district",
				// "subFeatureIndex": 2,
				// "acroutes": [100000,340000,340100],
				// "parent": {"adcode":340100}
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [[dataPolygonStrToPolygon(townsPolygonPointInfo["多湖街道"])]]
			}
		},
	]
};
echarts.registerMap('jindong', data);
var geoCoordMap = {
    '多湖街道': [119.686263,29.074407],
};
var data1 = [
    {
        name: '多湖街道',
        value: 152
    },
];

// 推进较快
var jiaokuai = [
    {//蜀山区
        name: '多湖街道-推进较快',
        value: [119.683342, 29.093051],
        type: 'jiaokuai',
        area: '20000平米',
        lastDealTime: '2020-02-18 14:30'
    }
];

// 已完成
var wancheng = [
    {
        name: '多湖街道-已完成',
        value: [119.686672, 29.092917],
        type: 'wancheng',
        maintainOrg: '多湖街道',
        checker: '燃气检查员2',
        lastCheckTime: '2020-01-21 10:30'
    }
];

// 推进缓慢
var huanman = [
    {
        name: '多湖街道-推进缓慢',
        value: [119.676905, 29.090494],
        type: 'huanman',
        maintainOrg: '多湖街道',
        checker: '检查员2',
        lastCheckTime: '2020-01-21 10:30'
    }
];


var max = 480,
    min = 9;
var maxSize4Pin = 100,
    minSize4Pin = 20;

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
    //backgroundColor: '#020933',
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return params.name;
            //alert(Object.getOwnPropertyNames(params));
            //return '名称: '+params.name+'<br/>'
        }
    },
    legend: {
        orient: 'vertical',
        id: 1,
        y: 'bottom',
        x: 'right',
        itemWidth: 15,
        data: [
            {
                name: '推进较快',
                icon: redFlag
            },
            {
                name: '已完成',
                icon: yellowFlag
            },
            {
                name: '推进缓慢',
                icon: greenFlag
            },
        ],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        show: true,
        map: 'jindong',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        zoom: 1.2,
        roam: true,
        itemStyle: {
            normal: {
                areaColor: 'transparent',
                borderColor: '#3fdaff',
                borderWidth: 2,
                shadowColor: 'rgba(63, 218, 255, 0.5)',
                shadowBlur: 30
            },
            emphasis: {
                areaColor: '#2B91B7',
            }
        }
    },
    series: [
        {
            type: 'map',
            map: 'jindong',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: false
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
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        // 区域图标的位置
        {
            name: 'Top 7',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data1.sort(function(a, b) {
                return b.value - a.value;
            })),
            symbolSize: 12,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#05C3F9',
                    shadowBlur: 10,
                    shadowColor: '#05C3F9'
                }
            },
            zlevel: 1
        },
		{
            name: '推进较快',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: jiaokuai,
            symbol: redFlag,
            symbolSize: 24,
            label: {
                normal: {
                    show: false,
                    formatter: function(params) {
                        // console.log(params);
                        //return params.name;
                        return '洒水车名称: '+params.name+'<br/>'
                                +'洒水车类型: '+params.intellectType+'<br/>'
                                +'洒水车容量: '+params.volumn+'<br/>'
                                +'作业时间范围: '+params.workTime+'<br/>'
                                +'上次维修时间: '+params.lastRepairTime+'<br/>'
                                +'上次作业时间: '+params.lastWorkTime;
                    },
                    position: 'right',
                    color: '#fff',
                    fontSize: '8'
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    //color: 'green',
                    borderWidth: 2,
                    borderColor: 'white'
                }
            }
        },
        {
            name: '已完成',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: wancheng,
            symbol: yellowFlag,
            symbolSize: 24,
            label: {
                normal: {
                    show: false,
                    formatter: function(params) {
                        // console.log(params);
                        //return params.name;
                        return '项目名称: '+params.name+'<br/>'
                                +'维护单位: '+params.maintainOrg+'<br/>'
                                +'检查员: '+params.checker+'<br/>'
                                +'上次检查时间: '+params.lastCheckTime;
                    },
                    position: 'right',
                    color: '#fff',
                    fontSize: '8'
                },
                emphasis: {
                    show: false
                }
            },
            // itemStyle: {
            //     normal: {
            //         color: '#FAFF1A',
            //         borderWidth: 2,
            //         borderColor: '#E3BC1F'
            //     }
            // }
        },
        {
            name: '推进缓慢',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: huanman,
            symbol: greenFlag,
            symbolSize: 24,
            label: {
                normal: {
                    show: false,
                    formatter: function(params) {
                        // console.log(params);
                        //return params.name;
                        return '项目名称: '+params.name+'<br/>'
                                +'管理单位: '+params.maintainOrg+'<br/>'
                                +'检查员: '+params.checker+'<br/>'
                                +'上次检查时间: '+params.lastCheckTime;
                    },
                    position: 'right',
                    color: '#fff',
                    fontSize: '8'
                },
                emphasis: {
                    show: false
                }
            },
            // itemStyle: {
            //     normal: {
            //         color: '#FF00FF',
            //         borderWidth: 2,
            //         borderColor: '#D33BD3'
            //     }
            // }
        },
    ]
};
myChart.setOption(option);
