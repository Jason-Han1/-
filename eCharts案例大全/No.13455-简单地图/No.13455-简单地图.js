var uploadedDataURL = "/asset/get/s/data-1528168002531-SksSA_QeX.json";

$.get(uploadedDataURL, function(as) {
    echarts.registerMap('FuJian', as);
    option = {
        legend: { //地图上面的点
            orient: 'vertical',
            left: 'left',
            data: ['福建']
        },
        visualMap: {
        min: 0,
        max: 4000,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: false,
        orient: 'horizontal',
        inRange: {
            color: ['#e0ffff', '#006edd'],
            symbolSize: [100, 4000]
        }
    },

        backgroundColor:'#091c3d',
        series: [{
            type: 'map',
            map: 'FuJian',
            // zlevel: 0,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#f00',
                    color: "#fe0"

                }
            },
            data: [{
                name: '南平市',
                value: 1220,
                itemStyle: {
                    normal: {
                        areaColor: '#fdc'
                    }
                }
            }, {
                name: '宁德市',
                value: 1200
            }, {
                name: '三明市',
                value: 2102
            }, {
                name: '福州市',
                value: 3132
            }, {
                name: '莆田市',
                value: 602
            }, {
                name: '泉州市',
                value: 4192
            }, {
                name: '漳州市',
                value: 862
            }, {
                name: '龙岩市',
                value: 3662
            }, {
                name: '南山区',
                value: 220
            }]
        }]
    };
    myChart.setOption(option);

});