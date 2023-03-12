var uploadedDataURL = "/asset/get/s/data-1482909900836-H1BC_1WHg.json";

$.get(uploadedDataURL, (shJson) => {
    echarts.registerMap('shanghai', shJson)
    
    const north = ['宝山区', '嘉定区','青浦区', '松江区']
    const south = ['浦东新区', '奉贤区', '闵行区']
    
    var geoCoordMap = {
        '黄浦区': [121.490317, 31.222771],
        '徐汇区': [121.43752, 31.179973],
        '长宁区': [121.4222, 31.218123],
        '静安区': [121.448224, 31.229003],
        '普陀区': [121.392499, 31.241701],
        '闸北区': [121.465689, 31.25318],
        '虹口区': [121.491832, 31.26097],
        '杨浦区': [121.522797, 31.270755],
        '闵行区': [121.375972, 31.111658],
        '宝山区': [121.489934, 31.398896],
        '嘉定区': [121.250333, 31.383524],
        '浦东新区': [121.7795171, 31.13357039],
        '金山区': [121.330736, 30.724697],
        '松江区': [121.223543, 31.03047],
        '青浦区': [121.113021, 31.151209],
        '奉贤区': [121.458472, 30.912345],
        '崇明县': [121.397516, 31.626946],
    };
    
    function getGeo(areas){
        const set = areas.map(area => Object.entries(geoCoordMap).filter(([key, value]) => key === area)[0][1])
        return set.reduce((prev, curr, idx) => {
            let [x, y] = prev
            x = x || 0
            y = y || 0
            if(idx === areas.length - 1) return [(x+curr[0]) / (idx + 1), (y + curr[1]) / (idx + 1)]
            return [x+curr[0], y + curr[1]]
        }, [])
    }
    
    geoCoordMap['北区'] = getGeo(north)
    geoCoordMap['南区'] = getGeo(south)    
    function coverLine(areas) {
        const result = []
        const areaEntries = Object.entries(geoCoordMap)
        return areas.map((area,index) => {
            const nextArea = index === areas.length -1 ? areas[0] : areas[index + 1]
            const lineStyle =  north.includes(area) ? {
                normal: {
                    color: 'cyan'
                }
            } : {}
            return {
                coords: [getArea(area), getArea(nextArea)],
                lineStyle
            }
            
        })
    }

    function getArea (area) {
        return Object.entries(geoCoordMap).filter(([key, geo]) => key === area)[0][1]
    }
    
    const scatterData = Object.entries(geoCoordMap).map(([key, value])=>{
        const itemStyle = key === '南区' ||  key === '北区' ? {
            color: 'red'
        } : {}
        return ({name: key, itemStyle, value: value.concat([parseInt(Math.random() * 500)])})
    })
    
    option = {
        backgroundColor: '#173b84',
        textStyle: {
            color: '#fff'
        },
        geo: {
            map: 'shanghai',
            left: "center",
            top: "center",
            silent: false,
            roam: true,
            label: {
                show: false
            },
            emphasis: {
                show: false
            },
            itemStyle: {
                    areaColor: "#4487d5",
                    borderColor: "#3B5077",
                    borderWidth: 1,
                    color: "green"
                }
        },
        series: [{
            type: 'map',
            map: 'shanghai',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            roam: true,
            animation: false,
            emphasis: {
                show: false
            },
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
             //波纹效果
            rippleEffect: {
                period: 2,
                brushType: 'fill',
                scale: 5
            },
            label: {
                normal: {
                    show: true,
                    position: 'bottom',
                    formatter: '{b}'
                }
            },
            //终点形象
            symbol: 'circle',
            //圆点大小
            symbolSize: function(val) {
                return val[2] / 30;
                // return 5;
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: '#FD916A'
                }
            },
            data: scatterData
        },
        {
            type: 'lines',
            zlevel: 2,
            lineStyle: {
                normal: {
                    type: 'dotted',
                    width: 1,
                    opacity: 0.4,
                    color: 'yellow',
                    curveness: 0.3
                }
            },
            effect: {
                show: true,
                loop: true
            },
            data: [
                ...coverLine(['宝山区', '松江区','青浦区', '嘉定区']),
                ...coverLine(['浦东新区', '奉贤区', '闵行区'])
            ]
        }
        
        ]
    }
    console.log(coverLine(['宝山区', '嘉定区','青浦区', '松江区']))
    myChart.setOption(option);
    console.log(myChart.getOption())
})