var uploadedDataURL = "/asset/get/s/data-1499226477412-HJrdb19VW.json";

function showProvince() {
    myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {
        myChart.hideLoading();
        echarts.registerMap('云南', geoJson);
        myChart.setOption(option = {
            title: {
                text: '云南省地图',
                x: 'center',
            },
            series: [{
                type: 'map',
                mapType: '云南',
                itemStyle: {
                    emphasis: {
                        label: {
                            show: true
                        }
                    },

                },
                data: [{
                    name: '昆明市',
                    itemStyle: {
                        normal: {
                            color: '#2edfa3'
                        }
                    }
                }, {
                    name: '普洱市',
                    itemStyle: {
                        normal: {
                            color: '#dc3023'
                        }
                    }
                }, {
                    name: '曲靖市',
                    itemStyle: {
                        normal: {
                            color: '#ff4e20'
                        }
                    }
                }, {
                    name: '昭通市',
                    itemStyle: {
                        normal: {
                            color: '#ffb3a7'
                        }
                    }
                }, {
                    name: '玉溪市',
                    itemStyle: {
                        normal: {
                            color: '#f9906f'
                        }
                    }
                }, {
                    name: '红河哈尼族彝族自治州',
                    itemStyle: {
                        normal: {
                            color: '#96ce54'
                        }
                    }
                }, {
                    name: '文山壮族苗族自治州',
                    itemStyle: {
                        normal: {
                            color: '#e4c6d0'
                        }
                    }
                }, {
                    name: '西双版纳傣族自治州',
                    itemStyle: {
                        normal: {
                            color: '#b35c44'
                        }
                    }
                }, {
                    name: '临沧市',
                    itemStyle: {
                        normal: {
                            color: '#7bcfa6'
                        }
                    }
                }, {
                    name: '楚雄彝族自治州',
                    itemStyle: {
                        normal: {
                            color: '#eaff56'
                        }
                    }
                }, {
                    name: '丽江市',
                    itemStyle: {
                        normal: {
                            color: '#a4e2c6'
                        }
                    }
                }, {
                    name: '大理白族自治州',
                    itemStyle: {
                        normal: {
                            color: '#b0a4e3'
                        }
                    }
                }, {
                    name: '保山市',
                    itemStyle: {
                        normal: {
                            color: '#389BB7'
                        }
                    }
                }, {
                    name: '德宏傣族景颇族自治州',
                    itemStyle: {
                        normal: {
                            color: '#c93756'
                        }
                    }
                }, {
                    name: '怒江傈僳族自治州',
                    itemStyle: {
                        normal: {
                            color: '#ffb61e'
                        }
                    }
                }, {
                    name: '迪庆藏族自治州',
                    itemStyle: {
                        normal: {
                            color: '#bce672'
                        }
                    }
                }]
            }]
        });
    });
}
showProvince();