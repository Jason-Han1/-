//时间轴数据
var timelineData = [2016, 2017];

var user_data = [{
    'user_cnt': 4.52,
    'age_range': [{
        value: 2,
        name: '65以上'
    }, {
        value: 5,
        name: '50-60岁'
    }, {
        value: 20,
        name: '35-50岁'
    }, {
        value: 35,
        name: '25-35岁'
    }, {
        value: 25,
        name: '19-25岁'
    }, {
        value: 12,
        name: '0-18岁'
    }],
    gender_range: [{
        value: 70,
        name: '女-70%'
    }, {
        value: 30,
        name: '男-30%'
    }]

},
{
    'user_cnt': 6.52,
    'age_range': [{
        value: 3,
        name: '65以上'
    }, {
        value: 15,
        name: '50-60岁'
    }, {
        value: 30,
        name: '35-50岁'
    }, {
        value: 25,
        name: '25-35岁'
    }, {
        value: 9,
        name: '19-25岁'
    }, {
        value: 11,
        name: '0-18岁'
    }],
    gender_range: [{
        value: 55,
        name: '女-55%'
    }, {
        value: 45,
        name: '男-45%'
    }]

}


];







option = {
    baseOption: {

        title: {
            subtext: '用户数',
            x: 'center',
            y: 'center',
            textStyle: { //主标题配置
                color: '#FFCC00',
                fontWeight: 'normal',
                fontSize: 16,

            },
            subtextStyle: { //子标题配置
            },
        },

        timeline: {
            show: false, //是否显示
            left:10,
            top:10,
            right:600,
            autoPlay: true, //自动播放
            playInterval: 5000, //播放间隔
            axisType: 'category',
            inverse: false, //是否反向放置 timeline，反向则首位颠倒过来。
            symbol: 'circle',
            symbolSize:0,
            itemStyle: {//轴的图形样式
                normal: {
                    color: '#04a5f1'
                },
                emphasis: {
                    color: '#04a5f1'
                }
            },
            label:{//轴的文本标签样式
            normal: {
                show:true,
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
            checkpointStyle: {//当前选择项的样式
                
                symbolSize:0,
                //color: '#04a5f1',
                //borderColor: 'rgba(4, 165, 261, .5)'
            },
            controlStyle:{//控制按钮样式
                show:false,
            },
            data: timelineData,

        },
        backgroundColor: '#333333',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}:({d}%)"
        },
        series: [{
            name: '性别',
            type: 'pie',
            radius: ['20%', '50%'],
            color: ['#FFCCFF', '#59abe1', '#f4cf42', '#3dc6a8'],
            label: {
                normal: {
                    position: 'inner'
                }
            }
        }, {
            name: '年龄结构',
            type: 'pie',
            radius: ['54%', '72%'],
            color: ['#a0dca0', '#60bbb6', '#f78db3', '#feadac', '#fae395', '#91d4e5', '#8eb3e8'],
            label: {
                normal: {
                    //position: 'inner',
                    formatter: '{b}\n{d}%'
                }
            }
        }]
    },
    
    
    options: [{
            title: {
                text: user_data[0].user_cnt + '亿',

            },

            series: [{ //性别结构
                    data: user_data[0].gender_range,
                },
                //年龄结构

                {
                    data: user_data[0].age_range,
                }
            ]

        },{
            title: {
                text: user_data[1].user_cnt + '亿',

            },

            series: [{ //性别结构
                    data: user_data[1].gender_range,
                },
                //年龄结构

                {
                    data: user_data[1].age_range,
                }
            ]

        }

    ]


};