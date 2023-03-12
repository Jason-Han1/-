var dt = [{
        name: '芙蓉区',
        value: 40000.34,
        text: '贷款笔数：54412<br/>贷款金额：468452.35万',
        selected: true
    },
    {
        name: '岳麓区',
        value: 38000,
        text: '缴存人数：32412'
    },
    {
        name: '开福区',
        value: 18000,
        text: '缴存人数：22412'
    },
    {
        name: '天心区',
        value: 15092,
        text: '缴存人数：42412'
    },
    {
        name: '雨花区',
        value: 28000,
        text: '缴存人数：52412'
    },
    {
        name: '望城区',
        value: 12000,
        text: '缴存人数：72412'
    },
    {
        name: '长沙县',
        value: 32000,
        text: '缴存人数：82412'
    },
    {
        name: '宁乡市',
        value: 5100,
        text: '缴存人数：6412'
    },
    {
        name: '浏阳市',
        value: 2200,
        text: '缴存人数：3412'
    },
    {
        name: '分中心',
        value: 4918,
        text: '缴存人数：66412'
    }

];
var option = {


    title: {
        text: '长沙市',
        subtext: '各区县',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        type: 'cross',
        /*   backgroundColor:"#ff7f50",//提示标签背景颜色
         textStyle:{color:"#fff"}, //提示标签字体颜色
         formatter:function(param){
         return dt[param.dataIndex].name + "<br />" +dt[param.dataIndex].text;
         } */
        alwaysShowContent: false,
        bordeRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 0,
        // position: "top",
        textStyle: {
            fontSize: 12,
            color: '#333'
        },
        formatter: function(params) {
            var color = "#FFB84D";
            var a = "<div style='background-color:" + color + ";padding: 5px 10px;text-align:center;color:white;font-size: 16px;'>" + dt[params.dataIndex].name + "</div>";
            var num = Math.ceil(params.data.name[1].length / 10);
            a += "<div style='padding:3px;'>";
            for (var i = 0; i < num; i++) {
                a += dt[params.dataIndex].text + "<br>";
            }
            a += "</div>";

            return a;
        }


    },
    visualMap: {
        min: 800,
        max: 50000,
        text: ['High', 'Low'],
        x: 'left',
        y: 'center',
        realtime: false,
        calculable: true,
        inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        borderColor: '#FFF', // 工具箱边框颜色
        borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）
        padding: 5, // 工具箱内边距，单位px，默认各方向内边距为5，
        showTitle: false,
        feature: {
            saveAsImage: {
                show: true,
                title: '保存为图片',
                type: 'jpeg'
            },
            restore: {
                show: true
            },
        }
    },
    series: [{
        name: '长沙',
        type: 'map',
        map: 'cs',
        // symbol:'../images/shine.jpg',
        //  symbolSize: 41,
        roam: true,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },

        layoutCenter: ['50%', '50%'], //属性定义地图中心在屏幕中的位置，一般结合layoutSize 定义地图的大小
        //            layoutSize: 11200,
        itemStyle: {
            normal: {
                label: {
                    show: true
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: dt
    }]
};
$.get('https://geo.datav.aliyun.com/areas_v2/bound/430100_full.json', function(csJson) {
    echarts.registerMap('cs', csJson);
    var chart = echarts.init(document.getElementById('map'));
    chart.setOption(option);
});