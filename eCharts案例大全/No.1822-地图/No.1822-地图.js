var guanwang = [
    {
        name: '北京市朝阳区酒仙桥北路7号电通时代广场2号楼B区创业黑马',
        value: [116.506356, 39.997661],
    },
    {
        name: '佛山市南海区万达广场A座2402室',
        value: [113.165143, 23.069913],
    },
    {
        name: '中山市长江路33号汉宏盈基大厦7楼703',
        value: [113.430002, 22.518705],
    },
    {
        name: '江门市蓬江区东华一路19号 1201 室自编 07、08  单元',
        value: [113.108502, 22.595898],
    },
    {
        name: '江苏省南京市雨花台区华为路楚翘城3号商务楼102室黑马企服',
        value: [118.771773, 31.976485],
    },
    {
        name: '江苏省扬州市星耀天地商务中心2幢1504室',
        value: [119.388376, 32.392914],
    },
    {
        name: '浙江省杭州市西湖区紫霞街176号2号楼1205',
        value: [120.066247, 30.295328],
    },
    {
        name: '江苏省无锡市滨湖区金融二街8号楼交通银行大厦1607室',
        value: [120.313082, 31.493457],
    },
    {
        name: '安徽省合肥市滨湖新区未来塔A座3111室',
        value: [117.308004, 31.704515],
    },
    {
        name: '苏州市苏站路1398号苏州港龙国际 A座 4楼 A4028 室',
        value: [120.619505, 31.339455],
    },
    {
        name: '宁波市江北区大庆北路545号5号楼1楼',
        value: [121.590734, 29.904062],
    },
    {
        name: '山东省青岛市崂山区科苑伟一路一号青岛国际创新园B座1404',
        value: [120.490999, 36.152778],
    },
    {
        name: '绵阳市涪陵区青义镇科大路405号科大广场创业黑马加速基地2楼',
        value: [104.702708, 31.53675],
    },
    {
        name: '陕西省西安市雁塔区高新路高新水晶城B座',
        value: [108.907324, 34.229512],
    },
    {
        name: '四川省成都市武侯区新世纪环球购物中心E1栋1-2-1605',
        value: [104.07163, 30.5733],
    },
    {
        name: '昆明市盘龙区金辰街道北京路延长线1079号欣都龙城1栋商务楼2601',
        value: [102.73937, 25.086383],
    },
    {
        name: '长沙市开福区万达广场A座26005',
        value: [112.977159, 28.205098],
    },
    {
        name: '贵州省贵阳市南明区龙洞堡双龙数据工场B座602',
        value: [106.775672, 26.560229],
    },
    {
        name: '重庆市渝北区冉家坝大成仓国际1栋1102',
        value: [106.496436, 29.603243],
    },
    {
        name: '湖北省武汉市武昌区和平大道750号绿地蓝海B座906室',
        value: [114.330113, 30.588589],
    },
    {
        name: '南昌市红谷滩新区红谷中大道1619号国际金融大厦A栋401',
        value: [115.873468, 28.696643],
    },
    {
        name: '福建省福州市台江区富力中心A座614',
        value: [119.286746, 26.069572],
    },
    {
        name: '厦门市湖里区高林中路469号712单元新景地大厦',
        value: [118.188987, 24.512615],
    },
    {
        name: '济南市高新区汉峪金谷A2-4-1606',
        value: [117.151801, 36.665568],
    },
    {
        name: '大连沙河口区环球金融中心I 16层',
        value: [121.593696, 38.896713],
    },
    {
        name: '山东省潍坊市奎文区民生街四平路恒易宝莲B座1106',
        value: [119.122215, 36.707463],
    },
];

option = {
    geo: {
        map: 'china',
        show: true,
        roam: false,
        label: {
            emphasis: {
                show: false,
            },
        },
        itemStyle: {
            normal: {
                show: false,
            },
        },
    },
    series: [
        {
            //  name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [{ name: '北京', value: [116.4551, 40.2539] }],
            symbolSize: 8,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false,
                },
            },
            itemStyle: {
                normal: {
                    color: '#E01F21',
                    shadowBlur: 10,
                    shadowColor: '#E01F21',
                },
            },
            zlevel: 1,
        },

        {
            type: 'map',
            map: 'china',
            aspectScale: 0.75,
            //zoom:1.1,

            itemStyle: {
                normal: {
                    areaColor: '#B3D8EF',
                    borderColor: '#fff',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: '#B3D8EF',
                },
            },
            emphasis: {
                label: {
                    show: false,
                    color: 'transparent',
                },
            },
            data: [],
        },
        {
            name: '分公司',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: guanwang,
            symbol:
                'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAZCAYAAABzVH1EAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMqADAAQAAAABAAAAGQAAAADgEpOEAAAC80lEQVRYCdVXS3LaQBDtFhTxznhhslVOEG4Q5QTJEfDGZXbIFzA+wZAVdjbgE0BOEHwCOyew2BlnYbwzVKFOt2QJKegzUjngTBVoPq97+k339MwglCwP31WzcWzfivjjQNUPjux5SVWlxB76qkUIAxFGgqNqUS1CwHVhRCu44jpwXS2f4Zr1dIvq0sHLfAi0H2CrK5zCHsx5ThMIzsGA28aJPcYAoPMVpeTCjWAJwGHhOlfrBNSpsEKX0OJJHURwBCNFJj5o247XKPgXXXVflH7V3qGV5H1tIhI+iwXcsIBZ0J4ALmHoAIIXjkFn2pfDhRcIOuvxdBKC0SLy2FfmEmHE+OZa8b+tSdw32vZQd5ZcIi/h9JMV1nWVvgJuzt7I9JxhgB0kG5kvk8iOSOSuQ5K3jCwpyU48vk1PZJnjjSWRkIFUIpIx2F2mJx3+0Q8iug6bW66kkRAzEolIhuLDRkXtlHQrRw8ifor2b6ueRUJsSDwQOc2O2BuxkHrxjrktw6Pz5JEQLNsXL7O+6nLvWbx3p62hYdAwasHh8elGeMdC63dfWW+MhNjfcl2cBD9a4YcoqaAeekT2xXIBdzwQC6kA+Ba+WSEWekT2xf9KQhbZIyL7gl1jSUfZwml5ypnONgg+8yXyG18rn8rq+lsuyxMBFmeX6itfZcUb+oXoivOEIwK8EhOqwDx6XZB+P1Rlk+IXaZctOiREN95fqDv2hpk/Ea8wwbgG2C1yLb+/VB02JnYm5c/lI3RJCLoKxAHBD4j0IgSwV9vDXtI7IF3OH2FjPuZhksaLkBD5KhrYSQstX9npMGkinb7ZhRowrqWDjWKKkhBZzxX+S4x63NxfK6Sn9yenpVNxWRI8/8YBKDblvTTDmPI25zN0OONYIljhvXDYtidSL1r0Sfhh6+lHaqYnhuzXociHRIoam4YvQoLD2pJsl/3uySfx6kR2RUKIJN5+01Y7q99b1RVMGXOehZMxrOA4OHdcAos3Nx+gm6VIpvwD4f1O+/INYMYAAAAASUVORK5CYII=',
            symbolSize: [16, 8],
            symbolKeepAspect: false,
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        // console.log(params);
                        return params.name;
                    },
                    position: 'right',
                    color: 'transparent',
                    fontSize: '8',
                },
            },
            emphasis: {
                // show: false,
                label: {
                    show: true,
                    color: '#E01F21',
                },
            },
            itemStyle: {
                normal: {
                    color: '#ea6347',
                    borderWidth: 2,
                    borderColor: '#f4b391',
                },
            },
        },
    ],
};
