option = {
    title: {
        x: 'center',
        text: '“简书交友”专题文章之24小时分布情况',
        //subtext: '20170811:14pm-20170813:15pm',//'Rainbow bar example',
        //link: 'http://echarts.baidu.com/doc/example.html'
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
            show: true,//false,
            //data: ["14pm","15pm","16pm","17pm","18pm","19pm","20pm","21pm","22pm","23pm",'0am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am','12pm', '13pm', '14pm', '15pm', '16pm', '17pm', '18pm', '19pm', '20pm', '21pm', '22pm', '23pm','0am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '13pm', '14pm', '15pm'],
          data:['0点', '1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点', '9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '17点', '18点', '19点', '20点', '21点', '22点', '23点'],
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: true//false
        }
    ],
    series: [
        {
            name: '热门文章之24小时分布情况',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#FCCE10','#E87C25','#60C0DD','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0','#C1232B','#FCCE10','#E87C25','#60C0DD','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0','#C1232B','#FCCE10','#E87C25','#60C0DD','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0','#C1232B','#FCCE10','#E87C25','#60C0DD','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0','#C1232B','#FCCE10','#E87C25','#60C0DD','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        //show: true,
                        position: 'top',
                        //formatter: '{c}'//'{b}\n{c}'
                    }
                }
            },
            //data: [2013, 9730,9300,6156,6906,5557,4833,5194,4661,3830,2264,938,467,358,290,288,471,769,1039,1155,986,864,788,711,555,331,283,268,220,223,218,193,245,230,179,171,136,127,97,106,114,125,143,169,158,159,155,164,200,154],
            data:[132, 53, 35, 13, 5, 6, 29, 42, 78,112,175,151,113, 133, 141, 164, 181, 162, 153, 150, 147, 162, 201, 180],
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
