
window.dataList = [{
        name: "南海诸岛",
        value: 0
    },
    {
        name: '北京',
        value: 425000
    },
    {
        name: '天津',
        value: 68458
    },
    {
        name: '上海',
        value: 60000
    },
    {
        name: '重庆',
        value: 79248
    },
    {
        name: '河北',
        value: 147188
    },
    {
        name: '河南',
        value: 233600
    },
    {
        name: '云南',
        value: 49496
    },
    {
        name: '辽宁',
        value: 119081
    },
    {
        name: '黑龙江',
        value: 99126
    },
    {
        name: '湖南',
        value: 122847
    },
    {
        name: '安徽',
        value: 165000
    },
    {
        name: '山东',
        value: 313190
    },
    {
        name: '新疆',
        value: 42597
    },
    {
        name: '江苏',
        value: 249000
    },
    {
        name: '浙江',
        value: 110000
    },
    {
        name: '江西',
        value: 96505
    },
    {
        name: '湖北',
        value: 162800
    },
    {
        name: '广西',
        value: 53800
    },
    {
        name: '甘肃',
        value: 62300
    },
    {
        name: '山西',
        value: 140000
    },
    {
        name: '内蒙古',
        value: 75366
    },
    {
        name: '陕西',
        value: 93661
    },
    {
        name: '吉林',
        value: 80852
    },
    {
        name: '福建',
        value: 58000
    },
    {
        name: '贵州',
        value: 58589
    },
    {
        name: '广东',
        value: 174000
    },
    {
        name: '青海',
        value: 8829
    },
    {
        name: '西藏',
        value: 3641
    },
    {
        name: '四川',
        value: 174815
    },
    {
        name: '宁夏',
        value: 11011
    },
    {
        name: '海南',
        value: 14138
    },
    {
        name: '台湾',
        value: 0
    },
    {
        name: '香港',
        value: 0
    },
    {
        name: '澳门',
        value: 0
    }
];

option = {
 
    //标题
    title: {
        text: '2020全国考研报考人数',
        subtext: '数据来源:百度百科',
        itemGap: 30,
        left: 'center',
        textStyle: {
            color: '#000',

            fontStyle: 'normal',

            fontWeight: 'bold',

            fontSize: 30
        },

        subtextStyle: {
            color: '#646464',

            fontStyle: 'normal',

            fontWeight: 'bold',

            fontSize: 16
        }
    },
    tooltip: {//提示框组件
        triggerOn: "click",//提示框触发条件‘click’为鼠标点击触发
        formatter: function(e, t, n) {//提示框浮层内容格式器
            return .5 == e.value ? e.name + "：考研报考人数" : e.seriesName + "<br />" + e.name + "：" + e.value
        }
    },
    visualMap: {//设置图例的相关参数
        min: 0,
        max: 450000,
        left: 20,//图例距离左侧边框的距离
        bottom: 40,//图例距离底部边框的距离
        //calculable:true,
        showLabel: !0,
        text: ["高", "低"],//图例文本设置
        pieces: [{         //图例中文字颜色得设置,min与max的设置与图中显示相关联
            min: 240000,
            label: "> 24 万人",
            color: "#000079"
        }, {
            min: 80000,
            max: 240000,
            label: "8 - 24 万人",
            color: "#4A4AFF"
        }, {
            min: 5000,
            max: 80000,
            label: "0.5 - 8 万人",
            color: "#9393FF"
        }, {
            min: 500,
            max: 5000,
            label: "0.05 - 0.5 万人",
            color: "#B9B9FF"
        }, {
            max: 500,
            label: "< 0.05 万人",
            color: "#C7C7E2"
        }],
        show: !0
    },
    geo: {//地图组件配置
        map: "china",//选择地图
        roam: !1,    //可缩放和平移true（或！0），false（或！1）
        scaleLimit: {//缩放比例
            min: 1,
            max: 2
        },
        zoom: 1.2,//地图显示比例
        top: 115,//地图距离上边框距离
        label: {//绑定文字设置(图中省名字的设置
            normal: {//初始状态配置（是否显示文本、颜色）
                show: !0,
                fontSize: "10",
                formatter:'{a}',
                color: "rgba(0,0,0,0.7)"
            }
        },
        itemStyle: {//鼠标选中图斑设置模块
            normal: {
                //shadowBlur: 50,
                //shadowColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: "rgba(0, 0, 0, 0.2)"//边框样式
            },
            emphasis: {//选中后
                areaColor: "#f2d5ad",//鼠标移入颜色
                shadowOffsetX: 0,//阴影水平方向上偏移量
                shadowOffsetY: 0,//阴影垂直方向上偏移量
                borderWidth: 0//描边现况宽
            }
        }
    },
    series: [{
        name: "2020考研报考人数",
        type: "map",
        geoIndex: 0,
        data: window.dataList
    }]
};