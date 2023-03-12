var getGunagdong = "/asset/get/s/data-1594284662649-U9sGdO2Bp.json";

var getChinaJson = "./asset/get/s/data-1594284556862-IpnXS2CV7.json";

let chinaJson = null
let gunagdong = null
$.getJSON(getChinaJson, function(geoJson) {
    chinaJson = geoJson
    $.getJSON(getGunagdong, function(fonJson) {
        gunagdong = fonJson
        // 定义跳出来的地区
        const mapList = [{
            name: '广东省',
            data: gunagdong,
            alone: ['深圳', '东莞', '佛山']
        }]
        const mapJson = JSON.parse(JSON.stringify(chinaJson))
        mapJson.features.forEach(e => {
            mapList.forEach(li => {
                if (e.properties.name == li.name) {
                    e.geometry.coordinates = []
                    li.data.features.forEach(e1 => {
                        if (!li.alone.includes(e1.properties.name)) {
                            e.geometry.coordinates = e.geometry.coordinates.concat(e1.geometry.coordinates)
                        } else {
                            mapJson.features.push(e1)
                        }
                    })
                }
            })
        })
        console.log(gunagdong, 99)
        // 写地图
        echarts.registerMap('china', mapJson);

        option = {
            tooltip: {
                triggerOn: "mousemove",
                // formatter: '{b0}：{c0}%完成率'
                formatter: function(data) {
                    //console.log(data);
                    if (isNaN(data.value)) {
                        data.value = 0
                    }
                    return data.name + "：" + data.value;
                }
                // function(e, t, n) {
                //     return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
                // }
            },
            roam: true,
            visualMap: {
                min: 0,
                max: 100,
                left: 'auto',
                right: 0,
                bottom: 40,
                showLabel: !0,
                text: ["完成率"],
                pieces: [{
                    gt: 90,
                    label: "90%以上",
                    color: "#5473E9"
                }, {
                    gte: 60,
                    lte: 89,
                    label: "60-90%",
                    color: "#80A5E8"
                }, {
                    gte: 30,
                    lt: 59,
                    label: "30-60%",
                    color: "#AEC7F5"
                }, {
                    gt: 0,
                    lt: 29,
                    label: "30%以下",
                    color: "#D5E2FA"
                }],
                show: !0
            },
            geo: {
                map: "china",
                //滚轮缩放的极限控制
                scaleLimit: {
                    min: 1,
                    max: 5
                },
                zoom: 1,
                left: 0,
                label: {
                    normal: {
                        show: true,
                        fontSize: "14",
                        color: "rgba(0,0,0,0.7)"
                    },
                },
                itemStyle: {
                    normal: {
                        areaColor: '#f00',
                        //shadowBlur: 50,
                        //shadowColor: 'rgba(0, 0, 0, 0.2)',
                        borderColor: "rgba(0, 0, 0, 0.2)"
                    },
                    emphasis: {
                        areaColor: "#f0f",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        borderWidth: 0
                    }
                }
            },
            series: [{
                name: "机构完成率",
                type: "map",
                geoIndex: 0,
                data: this.dataJson
            }]
        }
        myChart.setOption(option);
    })
})