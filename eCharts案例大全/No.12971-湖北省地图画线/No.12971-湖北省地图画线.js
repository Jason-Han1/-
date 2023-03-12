let mapData = ((echarts.getMap('湖北') || {}).geoJson || {}).features || [],
    names = [];
geoCoordMap = {};
mapData.map((f) => {
    let name = (f.properties || {}).name,
        cp = (f.properties || {}).cp;
    if (name && '' !== name && cp) {
        geoCoordMap[name] = cp;
        names.push(name);
    }
});
function generateNameData(min,max) {
    let data=[];
    names.map((n)=>{
         let value = Math.round((Math.random() * (max-min)+min) * 100) / 100;
         let cp = geoCoordMap[n]
            data.push({
                name: n,
                value: cp.slice().concat(value)
            });
    });
      return data;
}
function generateLinesData(min,max){
   let data=[];
   names.map((o)=>{
       names.map((d)=>{
            let value = Math.round((Math.random() * (max-min)+min) * 100) / 100;
             let oCp=geoCoordMap[o],dCp=geoCoordMap[d];
             data.push([oCp,dCp,value]);
       })
   })
    return data;
        
}

let barData = generateNameData(100,300);
let linesData = generateLinesData(100,500);
option = {
    title: {
        text: '湖北省地图画线',
        x: 'left',
        top: "10",
        textStyle: {
            color: '#000',
            fontSize: 14
        }
    },
    tooltip: {
        show: true,
        // formatter:(params)=>{
        //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
        //   return data;
        // },
    },
    visualMap: [{
        type: 'continuous',
        seriesIndex: 0,
        text: ['bar3D'],
        calculable: true,
        max: 300,
        inRange: {
            color: ['#87aa66', '#eba438', '#d94d4c']
        }
    }, {
        type: 'continuous',
        seriesIndex: 1,
        text: ['scatter3D'],
        left: 'right',
        max: 100,
        calculable: true,
        inRange: {
            color: ['#000', 'blue', 'purple']
        }
    }],
    geo3D: {
        map: '湖北',
        roam: true,
        itemStyle: {
            areaColor: '#1d5e98',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#000'
        },
        label: {
            show: true,
            textStyle: {
                color: '#000', //地图初始化区域字体颜色
                fontSize: 8,
                opacity: 1,
                backgroundColor: 'rgba(0,23,11,0)'
            },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 3,
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            }
        },
        //shading: 'lambert',
        light: { //光照阴影
            main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                alpha: 55,
                beta: 10

            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [
        //柱状图
        {
            name: 'bar3D',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 1, //柱子粗细
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,
            label: {
                show: false,
                formatter: '{b}'
            },
            data:barData,
        },


        //画线

        {
            type: 'lines3D',

            coordinateSystem: 'geo3D',

            effect: {
                show: true,
                trailWidth: 1,
                trailOpacity: 0.5,
                trailLength: 0.2,
                constantSpeed: 5
            },

            blendMode: 'lighter',

            lineStyle: {
                width: 0.2,
                opacity: 0.05
            },

            data: linesData
        }
    ]
};