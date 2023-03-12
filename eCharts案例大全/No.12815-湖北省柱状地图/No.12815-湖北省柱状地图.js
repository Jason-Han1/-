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
let dataAxis = [];
function generateNameData(min, max) {
    let data = [];
    names.map((n,idx) => {
        let value = Math.round((Math.random() * (max - min) + min) * 100) / 100;
        let cp = geoCoordMap[n]
        data.push({
            name: (idx+1)+' '+ n,
            value:  cp.slice().concat(value)
        });
        dataAxis.push(n);
    });
    return data;
}

let barData = generateNameData(100, 300);
option = {
    title: {
        text: '湖北省柱状地图',
        x: 'left',
        top: "10",
        textStyle: {
            color: '#000',
            fontSize: 14
        }
    },
    geo: {
        map: '湖北',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    tooltip: {
        show: true,
        // formatter:(params)=>{
        //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
        //   return data;
        // },
    },
    series: [
        //柱状图
        {
            name: '柱状图',
            type: "scatter",
            coordinateSystem: 'geo',
            symbol:'rect',
            symbolSize:function(value){
                let val = value[2];
                let _height = val*100/300;
                return [10,_height];
            },
            label: {
                show: true,
                formatter: '{b}',
                position:'bottom'
            },
            data: barData
        }
    ]
};
