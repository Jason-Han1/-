option = {
    title: {
        x: 'center',
        text: '轮子哥发布知乎回答之年度情况',
    },
    tooltip: {
        trigger: 'item'
    },
    toolbox: {
        show: true,
        feature: {
            //dataView: {show: true, readOnly: false},
            //restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    grid: {
        borderWidth: 0,
        y: 70,
        y2: 60
    },
    xAxis: [
        {
            type: 'category',
            show: false,
           	data: ["2013年","2014年","2015年","2016年","2017年","2018年"],//['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false
        }
    ],
    series: [
        {
            name: '轮子哥发布知乎回答之年度情况',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#FCCE10','#E87C25','#60C0DD','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data: [533,4326,4983,3908,3929,3544],//[12,21,10,4,12,5,6,5,25,23,7],
            markPoint: {
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0)',
                    formatter: function(params){
                        return '<img src="' 
                                + params.data.symbol.replace('image://', '')
                                + '"/>';
                    }
                },
                data: [
                    {xAxis:0, y: 350, name:'Line', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},
                    {xAxis:1, y: 350, name:'Bar', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},
                    {xAxis:2, y: 350, name:'Scatter', symbolSize:20, symbol: 'image://../asset/ico/散点图.png'},
                    {xAxis:3, y: 350, name:'K', symbolSize:20, symbol: 'image://../asset/ico/K线图.png'},
                    {xAxis:4, y: 350, name:'Pie', symbolSize:20, symbol: 'image://../asset/ico/饼状图.png'},
                    {xAxis:5, y: 350, name:'Radar', symbolSize:20, symbol: 'image://../asset/ico/雷达图.png'},
                    {xAxis:6, y: 350, name:'Chord', symbolSize:20, symbol: 'image://../asset/ico/和弦图.png'},
                    {xAxis:7, y: 350, name:'Force', symbolSize:20, symbol: 'image://../asset/ico/力导向图.png'},
                    {xAxis:8, y: 350, name:'Map', symbolSize:20, symbol: 'image://../asset/ico/地图.png'},
                    {xAxis:9, y: 350, name:'Gauge', symbolSize:20, symbol: 'image://../asset/ico/仪表盘.png'},
                    {xAxis:10, y: 350, name:'Funnel', symbolSize:20, symbol: 'image://../asset/ico/漏斗图.png'},
                ]
            }
        }
    ]
};
