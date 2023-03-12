var data_year_rang=[2015,2016,2017]
var data_dd = [
    {
        'dim_year': 2015,
        'radar_indicator': [{
                name: '外卖',
                max: 30000
            }, {
                name: '美食',
                max: 30000
            }, {
                name: '休闲娱乐',
                max: 30000
            }, {
                name: '丽人',
                max: 30000
            }, {
                name: '旅游',
                max: 30000
            }, {
                name: '出行',
                max: 30000
            }, {
                name: '酒店',
                max: 30000
            }],
        'trade_range': [20000, 20000, 12000, 15000, 5000, 20000]
    },
    {
        'dim_year': 2016,
        'radar_indicator': [{
                name: '外卖',
                max: 30000
            }, {
                name: '美食',
                max: 30000
            }, {
                name: '休闲娱乐',
                max: 30000
            }, {
                name: '丽人',
                max: 30000
            }, {
                name: '旅游',
                max: 30000
            }, {
                name: '出行',
                max: 30000
            }, {
                name: '酒店',
                max: 30000
            }],
        'trade_range': [28000, 20000, 28000, 15000, 5000, 20000]
    }, {
        'dim_year': 2017,
        'radar_indicator': [{
                name: '外卖',
                max: 30000
            }, {
                name: '美食',
                max: 30000
            },
            {
                name: '休闲娱乐',
                max: 30000
            }, {
                name: '丽人',
                max: 30000
            },
             {
                name: '亲子',
                max: 30000
            },{
                name: '旅游',
                max: 30000
            }, {
                name: '出行',
                max: 30000
            }, {
                name: '酒店',
                max: 30000
            }],
        'trade_range': [28000, 20000, 28000, 15000, 18000,20000, 20000]
    }

]





option = {
    baseOption: {

        title: {
            top: 'center',
            left: 'center',
        },
        timeline: {
            show: false, //是否显示
            left: 10,
            top: 10,
            right: 600,
            autoPlay: true, //自动播放
            playInterval: 2000, //播放间隔
            axisType: 'category',
            inverse: false, //是否反向放置 timeline，反向则首位颠倒过来。
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: { //轴的图形样式
                normal: {
                    color: '#04a5f1'
                },
                emphasis: {
                    color: '#04a5f1'
                }
            },
            label: { //轴的文本标签样式
                normal: {
                    show: true,
                    color: '#04a5f1'
                },
                emphasis: {
                    color: '#04a5f1'
                }

            },
            lineStyle: { //轴线控制
                show: false,
                color: '#ddd'
            },
            checkpointStyle: { //当前选择项的样式

                symbolSize: 0,
                //color: '#04a5f1',
                //borderColor: 'rgba(4, 165, 261, .5)'
            },
            controlStyle: { //控制按钮样式
                show: false,
            },
            data: data_year_rang,

        },

        //backgroundColor:'#333333',
        tooltip: {},
        legend: {
            //data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        
        series: [{
            name: '',
            type: 'radar',
            areaStyle: {
                normal: {
                    color: '#3399FF'

                }
            },
            itemStyle: {
                color: '#59abe1',
                borderColor: '#59abe1'
            },

        }]
    },

    options: [{
            title: {
                text: data_dd[0].dim_year,
            },
            radar: {
            // shape: 'circle',
            indicator:data_dd[0].radar_indicator
        },
            series: [{
                data: [{
                    value: data_dd[0].trade_range
                }]
            }]
        },

        {
            title: {
                text: data_dd[1].dim_year,
            },
            radar: {
            // shape: 'circle',
            indicator:data_dd[1].radar_indicator
        },
            series: [{
                data: [{
                    value: data_dd[1].trade_range
                }]
            }]
        },
        {
            title: {
                text: data_dd[2].dim_year,
            },
            radar: {
            // shape: 'circle',
            indicator:data_dd[2].radar_indicator
        },
            series: [{
                data: [{
                    value: data_dd[2].trade_range
                }]
            }]
        }


    ]
};