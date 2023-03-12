/**
 * 使用5.0以下版本
 */
var uploadedDataURL = 'https://geo.datav.aliyun.com/areas_v3/bound/320117.json';
myChart.showLoading();
var colorList = ['rgba(34, 222, 81, 1)', 'rgba(255, 210, 0, 1)'];
$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('nanjing', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        明觉支行: [118.89945, 31.57325],
        群力支行: [119.02001, 31.74368],
        在城支行: [119.038417, 31.661258],
        柘塘支行: [118.928829, 31.761365],
        开发区支行: [119.037774, 31.681536],
        秦淮支行: [119.050675, 31.657801],
        乌山支行: [118.976787, 31.735993],
        宝塔路支行: [119.024971, 31.679448],
    };

    var data = [
        {
            name: '明觉支行',
            data1: '1',
            value: 149,
        },
        {
            name: '群力支行',
            data1: '2',
            value: 0,
        },
        {
            name: '在城支行',
            data1: '1',
            value: 0,
        },
        {
            name: '柘塘支行',
            data1: '1',
            value: 0,
        },
        {
            name: '开发区支行',
            data1: '1',
            value: 0,
        },
        {
            name: '秦淮支行',
            data1: '1',
            value: 0,
        },
        {
            name: '乌山支行',
            data1: '1',
            value: 0,
        },
        {
            name: '宝塔路支行',
            data1: '1',
            value: 0,
        },
    ];
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                    typeDataVlaue: data[i].data1,
                });
            }
        }
        return res;
    };

    option = {
        backgroundColor: 'rgba(90, 198, 245, 0.3);',
        tooltip: {
            trigger: 'item',
            backgroundColor: 'transparent', //背景颜色（此时为默认色）
            formatter: function (params) {
                if (params.name == '溧水区') {
                    return;
                }
                let html = '';
                if (params.data.typeDataVlaue == '1') {
                    html += `
              <div style="text-align: center;width: 132px;height: 26px;border: 2px solid #19F402;transform: skewX(-20deg);background: linear-gradient(-90deg, #19F402 0%, #138D07 100%);opacity: 0.7;border-radius: 2px;">
              <span style="font-size: 15px;font-family: Microsoft YaHei;font-weight: bold;color: #FFFFFF; line-height: 4px;display: inline-block;transform: skewX(20deg);">${params.name}(${params.value[2]})</span>
              </div>
              `;
                } else if (params.data.typeDataVlaue == '2') {
                    html += `
              <div style="text-align: center;width: 132px;height: 26px;border: 2px solid #feff00;transform: skewX(-20deg);background: linear-gradient(-90deg, #ffd200 0%, #fff600 100%);opacity: 0.8;border-radius: 2px;">
              <span style="font-size: 15px;font-family: Microsoft YaHei;font-weight: bold;color: #6C530B; line-height: 4px;display: inline-block;transform: skewX(20deg);">${params.name}(${params.value[2]})</span>
              </div>
              `;
                }

                return html;
            },
        },
        geo: {
            show: true,
            map: 'nanjing',
            geoIndex: -1,
            zoom: 1.25,
            selectedMode: true,
            aspectScale: 0.9,
            hoverAnimation: true,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            roam: false,
            itemStyle: {
                normal: {
                    label: { show: false },
                    // borderWidth: 0,
                    // borderColor: '#00a4e7',
                    // areaColor: '#00a4e7',
                },
                emphasis: {
                    label: { show: false },
                    // borderWidth: 0,
                    // borderColor: '#00a4e7',
                    // areaColor: '#00a4e7',
                },
            },
        },
        series: [
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                hoverAnimation: false,
                aspectScale: 0.9,
                symbolSize: [20, 20],
                label: {
                    normal: {
                        formatter(value) {
                            if (value.data.typeDataVlaue == '1') {
                                return '{a|' + value.data.name[0] + '}';
                            } else if (value.data.typeDataVlaue == '2') {
                                return '{b|' + value.data.name[0] + '}';
                            }
                        },
                        show: true,
                        rich: {
                            a: {
                                color: '#053319',
                                fontFamily: 'Microsoft YaHei',
                                fontWeight: 'bold',
                                fontSize: 15,
                            },
                            b: {
                                color: '#6C530B',
                                fontFamily: 'Microsoft YaHei',
                                fontWeight: 'bold',
                                fontSize: 15,
                            },
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: (params) => {
                            console.log(params);
                            if (params.data.typeDataVlaue == '1') {
                                return 'rgba(26, 244, 8, 1)';
                            } else if (params.data.typeDataVlaue == '2') {
                                return 'rgba(255, 246, 0, 1)';
                            }
                        },
                    },
                },
            },
            {
                type: 'map',
                mapType: 'nanjing',
                animation: false,
                hoverAnimation: true,
                zoom: 1.25,
                aspectScale: 0.9,
                selectedMode: false,
                /**
                 * 填充颜色 和边框颜色为透明 可以显示背景图 可以使用以下这个样式
                 */
                //     itemStyle: {
                //   normal: {
                //     label: { show: false },
                //     borderWidth: 0, //区域边框宽度
                //     borderColor: "rgba(128, 128, 128, 0)", //区域边框颜色
                //     areaColor: "rgba(128, 128, 128, 0)" //rgba设置透明度0
                //   },
                //   // 鼠标划入
                //   emphasis: {
                //     label: { show: false },
                //     borderWidth: 0, //区域边框宽度
                //     borderColor: "rgba(128, 128, 128, 0)", //区域边框颜色
                //     areaColor: "rgba(128, 128, 128, 0)" //rgba设置透明度0
                //   }
                // }
                itemStyle: {
                    normal: {
                        label: { show: false },
                        borderWidth: 2, //区域边框宽度
                        borderColor: '#01D6F8', //区域边框颜色
                        areaColor: 'rgba(1, 199, 243, .3)', //区域颜色
                    },
                    emphasis: {
                        label: { show: false, color: '#fff', fontSize: '18px' },
                        borderWidth: 2,
                        borderColor: '#01D6F8',
                        areaColor: 'rgba(1, 199, 243, .3)',
                    },
                },
            },
        ],
    };
    myChart.setOption(option);
});
