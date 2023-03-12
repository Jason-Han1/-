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

function generateNameData(min, max) {
    let data = [];
    names.map((n) => {
        let value = Math.round((Math.random() * (max - min) + min) );
        let cp = geoCoordMap[n]
        data.push({
            name: n,
            value: cp.slice().concat(value)
        });
    });
    return data;
}

function generateLinesData(min, max) {
    let data = [];
    names.map((o) => {
        names.map((d) => {
            let value = Math.round((Math.random() * (max - min) + min) );
            let oCp = geoCoordMap[o],
                dCp = geoCoordMap[d];
            data.push([oCp, dCp, value]);
        })
    })
    return data;

}

let barData = generateNameData(0, 3);
let linesData = generateLinesData(0, 0);
option = {
    
    title: {
        text: '湖北省地图点击切换',
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
    geo3D: {
        map: '湖北',
        roam: true,
        environment: '#000',
        itemStyle: {
            areaColor: '#00b8b6',
            opacity: 0.5,
            borderWidth: 0.4,
            borderColor: '#3c5b8a',
            emphasis: {
                areaColor: 'rgba(255,158,44,1)',
            },
        },
        label: {
            show: true,
            textStyle: {
                color: '#fff', //地图初始化区域字体颜色
                fontSize: 8,
                opacity: 1,
                backgroundColor: 'rgba(0,23,11,0)'
            },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            
            label: {
                show: true,
                textStyle: {
                    color: '#000',
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
        },
        viewControl: {
            alpha: 40,
            autoRotate: true,
            autoRotateAfterStill: 10
        }
    },
    series: [
        //柱状图
        {
            name: 'bar3D',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 0, //柱子粗细
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,
            label: {
                show: false,
                formatter: '{b}'
            },
            data: barData,
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

let myChart = echarts.getInstanceByDom(document.getElementById('chart-panel'));

myChart.on("click", (params) => {
    let geoName = params.name,
        flag = false;
    let option = myChart.getOption();
    if (geoName && '' !== geoName) {
        let coord = geoCoordMap[geoName];
        if (coord) {
            flag = true;
            option.geo3D[0].viewControl.alpha = 90;
            option.geo3D[0].viewControl.distance = 0;
            myChart.setOption(option)

        }
    }
    if (!flag) {
        option.geo3D[0].viewControl.alpha = 40;
        option.geo3D[0].viewControl.distance = 100;
        myChart.setOption(option)

    }
})