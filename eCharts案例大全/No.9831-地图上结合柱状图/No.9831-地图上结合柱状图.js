var rawData = [{
        name: '江苏',
        value: 39
    },
    {
        name: '浙江',
        value: 52
    },
    {
        name: '安徽',
        value: 12
    },
    {
        name: '福建',
        value: 13
    },
    {
        name: '江西',
        value: 89
    },
    {
        name: '山东',
        value: 52
    },
    {
        name: '河南',
        value: 69
    },
    {
        name: '湖北',
        value: 52
    },
    {
        name: '湖南',
        value: 92
    },
    {
        name: '广东',
        value: 19
    },
    {
        name: '广西',
        value: 35
    }
];
var geoCoordMap = {
    '江苏': {
        id: '320000',
        cp: [118.767413, 32.041544]
    },
    '浙江': {
        id: '330000',
        cp: [120.153576, 30.287459]
    },
    '安徽': {
        id: '340000',
        cp: [117.283042, 31.86119]
    },
    '福建': {
        id: '350000',
        cp: [119.306239, 26.075302]
    },
    '江西': {
        id: '360000',
        cp: [115.892151, 28.676493]
    },
    '山东': {
        id: '370000',
        cp: [117.000923, 36.675807]
    },
    '河南': {
        id: '410000',
        cp: [113.665412, 34.757975]
    },
    '湖北': {
        id: '420000',
        cp: [114.298572, 30.584355]
    },
    '湖南': {
        id: '430000',
        cp: [112.982279, 28.19409]
    },
    '广东': {
        id: '440000',
        cp: [113.280637, 23.125178]
    },
    '广西': {
        id: '450000',
        cp: [108.320004, 22.82402]
    }
};

option = {　　
    geo: { //地理坐标系
        show: true,
        map: 'china',
        roam: false,
        zoom: 1.12,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#095c46',
                borderColor: '#848c88'
            },
            emphasis: {
                show: true,
                areaColor: '#00beaf',
                borderColor: '#ffffff'
            }
        }　　
    },
    　　series: []
}

function renderEachCity() {
    var options = {
        legend: [],
        xAxis: [],
        yAxis: [],
        grid: [],
        series: []
    };
    echarts.util.each(rawData, function(dataItem, idx) {　　
        var geoCoord = geoCoordMap[dataItem.name].cp; //获取地理位置
        　　　　　　　
        var coord = myChart.convertToPixel('geo', geoCoord); //将地理位置转换成像素位置
        　　
        idx += '';　　
        options.xAxis.push({
            id: idx,
            gridId: idx,
            type: 'category',
            name: dataItem.name,
            nameStyle: {　　
                color: '#ddd',
                　　fontSize: 12
            },
            nameLocation: 'middle',
            nameGap: 3,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false,
                　　lineStyle: {
                    color: '#bbb'　　
                }
            },
            data: [dataItem.name],
        });
        options.yAxis.push({　　　　
            id: idx,
            　　　　gridId: idx,
            　　　　show: false
        });
        options.grid.push({
            id: idx,
            width: 30,
            height: dataItem.value / 2, //柱子高度根据数值 
            left: coord[0] - 15,
            top: coord[1] - dataItem.value / 2
        });
        options.series.push({
            name: dataItem.name,
            　　　type: 'bar',
            　　　　　stack: 'bar' + idx,
            　　　　　xAxisId: idx,
            　　　　　yAxisId: idx,
            　　　　　barWidth: 12,
            　　　　　itemStyle: {　　　　　
                normal: {　　　　　　
                    color: '#FFAA00'　　　　　
                }　　　　　
            },
            　　　　data: [dataItem.value]　　　　
        });　　
    });　　
    myChart.setOption(options);
}
setTimeout(function() {
    renderEachCity();
}, 1);