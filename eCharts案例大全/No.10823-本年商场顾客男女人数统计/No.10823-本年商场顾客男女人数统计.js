var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + "月份");
    }
    return data;
}();

option = {
    backgroundColor: "#344b58",
    "title": {
        //主标题
        "text": "本年商场顾客男女人数统计",
        "subtext": "BY Wang Dingding",
        x: "4%",

        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            //子标题
            color: '#90979c',
            fontSize: '16'
        },
    },
    "tooltip": [{
        //提示框
        "trigger": "axis",//触发方式
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    }],
    "grid": {
        //直角坐标系内绘图网格
        "borderWidth": 0,
        "top": 310,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": [{
        x: '4%',
        top: '6%',
        left:'100',
        textStyle: {
            color: '#90979c',
        },
        "data": ['女', '男', '平均']
    },{
        orient: 'vertical',
        right: '10',
        textStyle: {
            color: '#90979c',
        },
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    }],
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
                //x轴颜色
            }
        },
        "splitLine": {
            "show": false
            //与y轴平行的标记线
        },
        "axisTick": {
            "show": false
            //刻度线
        },
        "splitArea": {
            "show": false
            //坐标轴分割区域
        },
        "axisLabel": {
            "interval": 0,
            //坐标轴刻度标签的显示间隔
        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,//控制下面的滚动轴
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#fff"},
           borderColor:"#90979c"
        
        
    }],
    "series": [{
            "name": "女",
            "type": "bar",
            "stack": "总量",//如果一样，图形会叠加
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,144,128,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1544,
                3285,
                5208,
                3372,
                2484,
                4078
            ],
        },

        {
            "name": "男",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {//样式
                "normal": {
                    "color": "rgba(0,191,183,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204,
                1390,
                1001,
                951,
                381,
                220
            ]
        }, {
            "name": "总数",
            "type": "line",
            "stack": "总量",
            symbolSize:10,
            symbol:'reat',
            "itemStyle": {
                "normal": {
                    "color": "rgba(252,230,48,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                1036,
                3693,
                2962,
                3810,
                2519,
                1915,
                1748,
                4675,
                6209,
                4323,
                2865,
                4298
            ]
        },{
            name: '访问来源',
            type: 'pie',
            radius : '30%',
            center: ['50%', '20%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}