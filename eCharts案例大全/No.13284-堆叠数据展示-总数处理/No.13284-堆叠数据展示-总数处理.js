// 指定图表的配置项和数据
var a = '{"time":"2017年05月26日","lgName":["优酷","土豆","爱奇艺","搜狐","腾讯","乐视","芒果"],"caName":["俺爹是卧底","职场是个技术活","远征远征","卧底归来","龙珠传奇之无间道","人民的名义","思美人","白鹿原","择天记","欢乐颂2"],"data":[{"name":"优酷","type":"bar","stack":"总量","itemStyle":{"normal":{"label":{"show":false,"position":"insideRight"},"color":"#e4393c"}},"data":[473.66,656.62,383.94,"--",4101.46,2409.66,"--","--",5465.73,"--"]},{"name":"土豆","type":"bar","stack":"总量","itemStyle":{"normal":{"label":{"show":false,"position":"insideRight"},"color":"#ff8400"}},"data":["--","--","--","--","--","--","--","--","--","--"]},{"name":"爱奇艺","type":"bar","stack":"总量","itemStyle":{"normal":{"label":{"show":false,"position":"insideRight"},"color":"#ffd200"}},"data":[1110.17,1209.75,1742.01,5560.04,"--",1676.52,3563.15,"--",15330.82,26753.6]},{"name":"搜狐","type":"bar","stack":"总量","itemStyle":{"normal":{"label":{"show":false,"position":"insideRight"},"color":"#29c729"}},"data":[191.14,"--",261.51,"--","--",215.14,"--","--",1320.68,5324.97]},{"name":"腾讯","type":"bar","stack":"总量","itemStyle":{"normal":{"label":{"show":false,"position":"insideRight"},"color":"#00eaff"}},"data":[1108.97,1834.5,1180.16,"--",3659.56,1293.18,2330.42,"--",14812.36,28405.5]},{"name":"乐视","type":"bar","stack":"总量","itemStyle":{"normal":{"label":{"show":false,"position":"insideRight"},"color":"#1d9bff"}},"data":[449.26,"--",458.64,"--","--","--",9879.95,22748.74,14161.93,13779.83]},{"name":"芒果","type":"bar","stack":"总量","itemStyle":{"normal":{"label":{"show":false,"position":"insideRight"},"color":"#0866e5"}},"data":["--","--","--","--","--",4010.68,1140.1,"--",10740.1,"--"]},{"name":"总数","type":"bar","stack":"总量","itemStyle":{"normal":{"label":{"show":true,"position":"insideBottomLeft","textStyle":{"color":"#e4e4e4"}},"color":"#1D222A"}},"data":["3333.20","3700.87","4026.26","5560.04","7761.02","9605.18","16913.62","22748.74","61831.62","74263.90"]}],"max":74263}';
c = JSON.parse(a);
console.log(c)
option = {
    title: {
        text: c.time + "电视剧网络日播放量",
        x: "center",
        y: 20,
        textStyle: {
            color: "#d8d8d8",
            fontSize: 16,
            fontFamily: "Microsoft YaHei"
        }
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    toolbox: {
        show: !0,
        orient: "vertical",
        right: 5,
        itemSize: 22,
        feature: {}
    },
    grid: {
        right: "15%",
        left: "16%",
        borderWidth: 0
    },
    legend: {
        data: c.lgName,
        y: "bottom",
        x: 80,
        textStyle: {
            color: "#e4e4e4",
            fontFamily: "Microsoft YaHei"
        }
    },
    calculable: !1,
    backgroundColor: "#1D222A",
    xAxis: [{
        type: "value",
        axisLine: {
            lineStyle: {
                color: "#4a4a4a",
                width: 1
            }
        },
        axisTick: {
            show: !0
        },
        name: "单位：万次",
        nameTextStyle: {
            color: "#e4e4e4"
        },
        axisLabel: {
            textStyle: {
                color: "#e4e4e4",
                fontFamily: "Microsoft yahei"
            }
        },
        max: c.max,
        splitArea: {
            show: !1
        },
        splitLine: {
            show: !1
        }
    }],
    yAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: "#4a4a4a",
                width: 1
            }
        },
        axisLabel: {
            formatter: function(a) {
                for (i in a)
                    return a.length > 5 ? a.substring(0, 4) + ".." : a
            },
            textStyle: {
                color: "#e4e4e4",
                fontFamily: "Microsoft yahei"
            }
        },
        axisTick: {
            show: !1
        },
        splitArea: {
            show: !1
        },
        splitLine: {
            show: !1
        },
        data: c.caName
    }],
    series: c.data,
    noDataLoadingOption: {
        text: "暂无数据",
        effect: "whirling"
    }
}
