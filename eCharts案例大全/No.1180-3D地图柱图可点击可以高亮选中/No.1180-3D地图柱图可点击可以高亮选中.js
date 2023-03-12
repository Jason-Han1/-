var zjJsonUrl = '/asset/get/s/data-1635335079817-DwAy4Tzuv.json';

// 测试数据
var originalDatas = {
    dataMap: [
        { name: '目标数', field: 'mbs', unit: '万人' },
        { name: '完成数', field: 'wcs', unit: '万人' },
    ],
    datas: [
        {
            adcode: 330100,
            name: '杭州市',
            lng: '119.053576',
            lat: '29.887459',
            wcs: 10,
            mbs: 50,
            wcl: 100,
        },
        {
            adcode: 330200,
            name: '宁波市',
            lng: '121.549792',
            lat: '29.630000',
            wcs: 10,
            mbs: 20,
            wcl: 80,
        },
        {
            adcode: 330300,
            name: '温州市',
            lng: '120.672111',
            lat: '28.000575',
            wcs: 10,
            mbs: 30,
            wcl: 100,
        },
        {
            adcode: 330400,
            name: '嘉兴市',
            lng: '120.750865',
            lat: '30.662653',
            wcs: 10,
            mbs: 40,
            wcl: 100,
        },
        {
            adcode: 330500,
            name: '湖州市',
            lng: '120.000398',
            lat: '30.867198',
            wcs: 10,
            mbs: 20,
            wcl: 90,
        },
        {
            adcode: 330600,
            name: '绍兴市',
            lng: '120.582112',
            lat: '29.997117',
            wcs: 10,
            mbs: 20,
            wcl: 100,
        },
        {
            adcode: 330700,
            name: '金华市',
            lng: '119.649506',
            lat: '29.189524',
            wcs: 10,
            mbs: 20,
            wcl: 100,
        },
        {
            adcode: 330800,
            name: '衢州市',
            lng: '118.602630',
            lat: '28.941708',
            wcs: 10,
            mbs: 20,
            wcl: 100,
        },
        {
            adcode: 330900,
            name: '舟山市',
            lng: '122.106863',
            lat: '30.016028',
            wcs: 10,
            mbs: 20,
            wcl: 100,
        },
        {
            adcode: 331000,
            name: '台州市',
            lng: '121.128599',
            lat: '28.861378',
            wcs: 10,
            mbs: 20,
            wcl: 100,
        },
        {
            adcode: 331100,
            name: '丽水市',
            lng: '119.321786',
            lat: '28.051993',
            wcs: 10,
            mbs: 20,
            wcl: 100,
        },
    ],
};

$.get(zjJsonUrl, (res) => {
    echarts.registerMap('map', res);

    var series = [
        {
            type: 'map3D',
            map: 'map',
            // 设置为透明
            itemStyle: {
                color: [1, 1, 1, 0],
            },
            emphasis: {
                itemStyle: {
                    color: [1, 1, 1, 0],
                },
            },
            data: originalDatas.datas,

            viewControl: {
                beta: 45, //x轴旋转
                alpha: 45, //Y轴旋转
            }
        },
    ];

    $.each(originalDatas.dataMap, function (i, seriesItem) {
        series.push({
            name: seriesItem.name,
            type: 'bar3D',
            coordinateSystem: 'geo3D',
            shading: 'lambert',
            label: {
                show: true,
                position: 'top',
                formatter: (params) => {
                    return params.value[2];
                },
            },
            data: originalDatas.datas.map((item) => {
                item.value = [
                    i == 0 ? item.lng - 0 + 0.05 : item.lng - 0.05,
                    item.lat,
                    item[seriesItem.field],
                    seriesItem.unit,
                ];
                return JSON.parse(JSON.stringify(item));
            }),
            barSize: 2,
            minHeight: 1,
            itemStyle: {
                color: i == 0 ? '#FFB239' : '#5E5FFF',
            },
            emphasis: {
                label: { show: true },
            },
            // zlevel: i
        });
    });

    option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if (params.seriesType == 'bar3D') {
                    return [params.seriesName, params.name + '：' + params.value[2] + (params.value[3] || '')].join(
                        '<br />'
                    );
                }
            },
        },
        geo3D: {
            show: true,
            map: 'map',

            viewControl: {
                beta: 45, //x轴旋转
                alpha: 45, //Y轴旋转
                panMouseButton: 'right', //平移操作使用的鼠标按键
                rotateMouseButton: 'left', //旋转操作使用的鼠标按键
            },
            light: {
                main: {
                    color: '#ffffff',
                    intensity: 1,
                    shadow: false,
                },
            },
            itemStyle: {
                color: '#4D96FA',
                borderWidth: 1,
                borderColor: '#fff',
                opcity: 1,
            },

            shading: 'realistic',
            label: {
                show: true,
                color: '#fff',
                distance: 5,
            },
            emphasis: {
                label: { show: true },
                itemStyle: { color: '#36A8FF' },
            },
            groundPlane: false,
            data: originalDatas.datas,
            // 将geo3d放在最底层
            zlevel:-1
        },
        series: series,
    };

    myChart.setOption(option);
    myChart.off('click');
    myChart.on('click', function (params) {
        // 点击获取data中的数据
        console.log(params);
        // 设置选中高亮
        let regions = [
            {
                itemStyle: { color: '#36A8FF', opacity: 1 },
                label: { show: true },
            },
        ];
        regions[0].name = params.name;
        option.geo3D.regions = regions;
        myChart.setOption(option);
    });
});
