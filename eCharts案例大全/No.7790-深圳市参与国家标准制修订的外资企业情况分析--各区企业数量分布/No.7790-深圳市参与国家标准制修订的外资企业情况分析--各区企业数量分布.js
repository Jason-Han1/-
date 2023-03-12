var uploadedDataURL = "/asset/get/s/data-1589284831081-RBq4RuXFw.json";

function shenzhenMapChartLoad() {

    var data = [
    {name: '南山区', value: 12},
    {name: '福田区', value: 7},
    {name: '宝安区', value: 6},
    {name: '龙岗区', value: 5},
    {name: '罗湖区', value: 2},
    {name: '龙华区', value: 1},
    {name: '光明区', value: 1},
    {name: '盐田区', value: 0},
    {name: '坪山区', value: 0},
    {name: '大鹏新区', value: 0}
];


    $.get(uploadedDataURL, function(geoJson) {
        echarts.registerMap('shenzhen', geoJson);
        myChart.setOption(  option = {
            title: [{
                show: true,
                text: '深圳市参与国家标准制修订的外资企业情况分析--各区企业数量分布',
                textStyle: {
             
                    fontSize: 30
                },
                x: 'center',
                top: 40
            }],
            grid: {
                right: 10,
                top: 10,
                bottom: 0,
            },
            tooltip: {
                show: true,
                formatter: function (params) {
                    return params.name + '：' + params.data['value'] + ''
                },
            },
            dataRange: {
                orient: 'horizontal',
                x: 'center',
                bottom: 50,
                min: 0,
                max: 20,
                text: ['高', '低'],
                textStyle: {
                    fontFamily: 'Verdana',
                    fontSize: 12,
              
                },
                realtime: false,
                calculable: true,
             
            },
            series: [{
                type: 'map',
                mapType: 'shenzhen',
                selectedMode: 'single',
                itemStyle: {
                    normal: {
                        label: {
                            formatter: '{b}: {@score}家',
                            show: true,
                            fontSize: 18,
                            fontWeight :'bold'
                          
                        }
                    },
                    emphasis: {
                        show: true,
                        position: 'right',
                        offset: [10, 0]
                    }
                },
                data: data,
                nameMap: {
                    'nanshan': '南山区',
                    'yantian': '盐田区',
                    'baoan': '宝安区',
                    'futian': '福田区',
                    'luohu': '罗湖区',
                    'dapeng': '大鹏新区',
                    'pingshan': '坪山区',
                    'guangming': '光明区',
                    'longhua': '龙华区',
                    'longgang': '龙岗区'
                },

            }

            ]
        });


    })
}
shenzhenMapChartLoad();