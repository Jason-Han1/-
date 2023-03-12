var uploadedDataURL = '/asset/get/s/data-1577151252404-_Thfvtop.json';
var planePath = $.get(uploadedDataURL, function (geoJson) {
    myChart.hideLoading();

    echarts.registerMap('山西', geoJson);

    var allData = {
        citys: [
            {
                name: '太原市',
                value: '1401',
            },
            {
                name: '大同市',
                value: '1402',
            },
            {
                name: '阳泉市',
                value: '1403',
            },
            {
                name: '长治市',
                value: '1404',
            },
            {
                name: '晋城市',
                value: '1405',
            },
            {
                name: '朔州市',
                value: '1406',
            },
            {
                name: '晋中市',
                value: '1407',
            },
            {
                name: '运城市',
                value: '1408',
            },
            {
                name: '忻州市',
                value: '1409',
            },
            {
                name: '临汾市',
                value: '1410',
            },
            {
                name: '吕梁市',
                value: '1411',
            },
        ],
    };
    option = {
        tooltip: {
            padding: 0,
            enterable: true,
            transitionDuration: 1,
            textStyle: {
                color: '#000',
                decoration: 'none',
            },
            // position: function (point, params, dom, rect, size) {
            //   return [point[0], point[1]];
            // },
            formatter: function (params) {
                // console.log(params)
                var tipHtml = '';
                tipHtml =
                    '<div style="width:280px;height:180px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">' +
                    '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);">' +
                    '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' +
                    '</i>' +
                    '<span style="margin-left:10px;color:#fff;font-size:16px;">' +
                    params.name +
                    '</span>' +
                    '</div>' +
                    '<p style="color:#fff;font-size:12px;">' +
                    '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
                    '</i>' +
                    '专利申请人数：' +
                    '<span style="color:#11ee7d;margin:0 6px;">' +
                    1 +
                    '</span>' +
                    '个' +
                    '</p>' +
                    '<p style="color:#fff;font-size:12px;">' +
                    '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
                    '</i>' +
                    '优先审查受理：' +
                    '<span style="color:#f48225;margin:0 6px;">' +
                    2 +
                    '</span>' +
                    '个' +
                    '</p>' +
                    '<p style="color:#fff;font-size:12px;">' +
                    '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
                    '</i>' +
                    '许可备案：' +
                    '<span style="color:#f4e925;margin:0 6px;">' +
                    3 +
                    '</span>' +
                    '个' +
                    '</p>' +
                    '<p style="color:#fff;font-size:12px;">' +
                    '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
                    '</i>' +
                    '专利质押金额：' +
                    '<span style="color:#25f4f2;margin:0 6px;">' +
                    4 +
                    '</span>' +
                    '个' +
                    '</p>' +
                    '</div>' +
                    '</div>';
                return tipHtml;
            },
        },
        visualMap: {
            show: true,
            min: 0,
            max: 200,
            right: '10%',
            top: 'bottom',
            calculable: true,
            seriesIndex: [1],
            inRange: {
                color: ['#04387b', '#467bc0'], // 蓝绿
            },
        },
        backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: '#0f378f', // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: '#00091a', // 100% 处的颜色
                },
            ],
            globalCoord: false, // 缺省为 false
        },

        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#fff',
            },
        },
        geo: {
            map: '山西',
            show: true,

            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                        fontFamily: 'Arial',
                    },
                },
            },
            aspectScale: 1.2,
            itemStyle: {
                emphasis: {
                    label: {
                        show: true,
                    },
                },
                normal: {
                    areaColor: '#1E90FF',
                    borderWidth: 2,
                    borderColor: '#fff',
                    shadowColor: 'rgba(30,144,255,1)',
                    shadowBlur: 10,
                },
            },
            zoom: 1.2,
            left: 140,
        },
        series: [
            {
                name: '地点',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: allData.citys,
            },
            {
                type: 'map',
                map: '山西',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: true,
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    },
                },
                animation: false,
                data: data,
            },
        ],
    };
    myChart.setOption(option);
});
