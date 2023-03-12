
option = {
    title: {
        x: 'center',
        text: '热门文章之年度月份分布情况',
        // 简书=鸡汤？爬取简书今日看点：1916篇热门文章可视化
        // https://zhuanlan.zhihu.com/p/29118954
        
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
  xAxis: {
    type: 'category',
        show: true,//false,
        //data: ["14pm","15pm","16pm","17pm","18pm","19pm","20pm","21pm","22pm","23pm",'0am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am','12pm', '13pm', '14pm', '15pm', '16pm', '17pm', '18pm', '19pm', '20pm', '21pm', '22pm', '23pm','0am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '13pm', '14pm', '15pm'],
        //data:[05, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 01, 02, 03, 04, 05, 06, 07, 08, 09],
        data:['2014-05', '2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09'],
        //type : 'value',
        //min:0,//'1501464901',
        //max:35,//'1504139470',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: [
        {
            type: 'value',
            show: true//false
        }
    ],
    series: [
      {
        name: '半径模式',
        type: 'pie',
        radius: [30, 60],
        center: ['31%', '41.5%'],
        color:['#C1232B','#FCCE10','#60C0DD','#FE8463'],
        roseType: 'radius',
        data: [{
                value: 1,
                name: '2014年 1篇'
            }, {
                value: 92,
                name: '2015年 92篇'
            }, {
                value: 1199,
                name: '2016年 1199篇'
            }, {
                value: 624,
                name: '2017年 624篇'
            }, 
        ]
    },
        {
            name: '微博转发数随时间变化情况',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        /*var colorList = [
                          '#C1232B','#FCCE10','#E87C25','#60C0DD','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0','#C1232B','#FCCE10','#E87C25','#60C0DD','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0','#C1232B','#FCCE10','#E87C25','#60C0DD','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0','#C1232B','#FCCE10','#E87C25','#60C0DD','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0','#C1232B','#FCCE10','#E87C25','#60C0DD','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];*/
                      var colorList = [
                        //'#E87C25',
                         '#9BCA63',
                         '#FE8463',  '#FE8463',  '#FE8463',  '#FE8463',
                          '#FE8463',  '#FE8463',  '#FE8463',  '#FE8463',
                          '#FE8463',  '#FE8463',  '#FE8463',  '#FE8463',
                        '#60C0DD','#60C0DD','#60C0DD','#60C0DD',
                        '#60C0DD','#60C0DD','#60C0DD','#60C0DD',
                        '#60C0DD','#60C0DD','#60C0DD','#60C0DD',
                         '#FCCE10','#FCCE10','#FCCE10','#FCCE10',
                         '#FCCE10','#FCCE10','#FCCE10','#FCCE10',
                         '#FCCE10','#FCCE10','#FCCE10','#FCCE10',
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
            data:[1, 2, 1, 1, 0, 3, 7, 0, 5, 13, 18, 20, 22, 36, 49, 74, 62, 67, 53, 156, 191, 126, 148, 118, 119, 131, 118, 114, 51, 37, 40, 38, 88, 7],
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