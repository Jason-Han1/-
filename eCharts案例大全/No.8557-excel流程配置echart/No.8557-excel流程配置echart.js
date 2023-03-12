var data = [
    { name: "Mon_1", time: "Mon", tdCount: 820, ydCount: 810, cost: 0.2, count: 800 },
    { name: "Tue_1", time: "Tue", tdCount: 932, ydCount: 800, cost: 0.3, count: 850 },
    { name: "Wed_1", time: "Wed", tdCount: 901, ydCount: 880, cost: 0.4, count: 900 },
    { name: "Thu_1", time: "Thu", tdCount: 934, ydCount: 900, cost: 0.1, count: 950 },
    { name: "Fri_1", time: "Fri", tdCount: 1290, ydCount: 1200, cost: 0.2, count: 1000 },
    { name: "Sat_1", time: "Sat", tdCount: 1330, ydCount: 1400, cost: 0.6, count: 1050 },
    { name: "Sun_1", time: "Sun", tdCount: 1320, ydCount: 1410, cost: 0.7, count: 1100 },
];

//1-one 2-two 3-three 4-four 5-five 6-six 7-seven 8-eight 9-nine 10-ten
var conf = {
    type: "bar",//图表类型: line,bar/ybar,pie,radar,bar3D,Candlestick
    typeNum: "1",// 图类型编号:line:1~6,bar:1~3,pie:1~4,radar:1~4,bar3D:1~2;[更改数据展示:曲线_柱状图(数据堆叠,以百分比显示;曲线_平滑显示),饼图(圆环,玫瑰图等)]
    layoutNum: "1",//图表布局编号:line/bar:1~7,pie:1~4,radar:1~4,bar3D:1~4;[更改位置:标题位置,图例位置,表格,坐标轴名称]
    styleNum: "1",//图表样式编号:1~4;[更改颜色]
    xkey: "time",//x轴的数据key,[pie图,xkey值为ykey值名称,可无]
    ykey: ["tdCount", "ydCount"],//y轴数据key,[pie图,ykey只能有一个且为数值]
    textObj: {//更改:标题,系列名
        title: "", //标题名 
        seriesNm: { tdCount: "", ydCount: "" }//系列名[line:key根据ykey确定;pie系列名不可修改]
    }
}

var option = getEchartOpt(data, conf);
function getEchartOpt(data, conf) {
    var sType = conf.type;//图类型
    var typeNum = conf.typeNum;//类型编号
    var layoutNum = conf.layoutNum;//布局编号
    var styleNum = conf.styleNum;//样式编号
    var xkey = conf.xkey;//x轴key
    var ykey = conf.ykey;//y轴key
    var xType = conf.xType || 'category';//x轴数据类型:category,time,value;或者通过data判断得出(isNum,new Time()?)
    var textObj = conf.textObj;//标题名,系列名
    //数据渲染
    var series = getSeries(sType, data, xkey, ykey);
    console.log("series", series);
    var opt = getOptTpl(sType, data, xType);
    //类型编号:opt-series
    setTypeNum(sType, typeNum, opt, series);
    //布局编号:opt-series
    setLayoutNum(sType, layoutNum, opt, series);
    //样式编号:opt
    setStyleNum(sType, styleNum, opt);
    //标题名,系列名等修改
    setTextNm(sType, textObj, opt, series);
    //数据合并
    opt.series = series;
    console.log("opt", opt);
    return opt;
}
//获取option模版
function getOptTpl(sType, data, xType) {
    if (sType === "line" || sType === "bar") {
        var option = {
            title: {
                text: '图表标题',
            },
            legend: {
            },
            dataset: {
                source: data
            },
            series: [],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: {
                type: xType,
                axisLine: {
                    lineStyle: {
                        color: '#999',
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#999',
                    }
                },
                splitLine: {}
            }
        };
    } else if (sType === "ybar") {
        var option = {
            title: {
                text: '图表标题',
            },
            legend: {
            },
            dataset: {
                source: data
            },
            series: [],
            tooltip: {
                trigger: 'item'
            },
            yAxis: {
                type: xType,
                axisLine: {
                    lineStyle: {
                        color: '#999',
                    }
                }
            },
            xAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#999',
                    }
                },
                splitLine: {}
            }
        };
    } else if (sType === "pie") {
        var option = {
            title: {
                text: '图表标题',
            },
            legend: {
            },
            dataset: {
                source: data
            },
            series: [],
            tooltip: {
                trigger: 'item'
            }
        }
    } else if (sType === "radar") {
        var option = {
            title: {
                text: '图表标题'
            },
            tooltip: {},
            legend: {},
            radar: {
                // shape: 'circle',
                indicator: []
            },
            series: []
        }
    } else if (sType === "bar3D") {
        var option = {
            title: { text: "图表标题" },
            tooltip: {},
            legend: {},
            xAxis3D: {
                type: xType,
                axisLine: {
                    lineStyle: {
                        color: '#999',
                    }
                }
            },
            yAxis3D: {
                name: "",//默认Y,不显示
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: '#999',
                    }
                }
            },
            zAxis3D: {
                type: 'value',
            },
            grid3D: {
            },
            series: [{
                type: 'bar3D',
                // stack: "堆叠",
                data: [["a", "", 1], ["b", "", 2], ["c", "", 3]]
            }, {
                type: 'bar3D',
                // stack: "堆叠",//堆叠
                data: [["a", "", 2], ["b", "", 3], ["c", "", 4]]
            }]
        }
    }
    return option;
}
//获取series:添加nameKey
function getSeries(sType, data, xkey, ykey) {
    var allSeries = [];
    if (sType === "line" || sType === "bar") {
        //多个系列
        for (var i = 0; i < ykey.length; i++) {
            var yField = ykey[i];
            allSeries.push({
                name: yField,//'系列名'
                extraYkey: yField,//匹配需要修改的系列名
                type: sType,
                label: {},
                encode: { x: xkey, y: yField }//dataset,数据映射
            });
        }
    } else if (sType === "ybar") {
        //多个系列
        for (var i = 0; i < ykey.length; i++) {
            var yField = ykey[i];
            allSeries.push({
                name: yField,//'系列名'
                extraYkey: yField,//匹配需要修改的系列名
                type: "bar",
                label: {},
                //数据反过来映射
                encode: { x: yField, y: xkey }//dataset,数据映射
            });
        }
    } else if (sType === "pie") {
        var yField = ykey[0];//只取第一个
        var defSeries = {
            name: '',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            encode: { value: yField, itemName: xkey }
        }
        allSeries.push(defSeries);
    } else if (sType === "radar") {
        var defSeries = {
            type: "radar",
            data: []
        };
        // 获取雷达指示器名称
        var nameObj = {};
        for (var i = 0; i < ykey.length; i++) {
            var yField = ykey[i];
            var dataObj = ({
                name: yField,//'系列名'
                extraYkey: yField,//匹配需要修改的系列名
                value: []
            });
            for (var j = 0; j < data.length; j++) {
                var dataRow = data[j];
                var yval = dataRow[yField] || 0;//y轴,无数据,赋默认值0
                var name = dataRow[xkey];
                dataObj.value.push(yval);
                //指示器的最大值
                if (nameObj[name] == undefined) {
                    nameObj[name] = 0;
                }
                if (nameObj[name] < yval) {
                    nameObj[name] = yval;
                }
            }
            defSeries.data.push(dataObj);
        }
        //雷达图的指示器,max*1.1倍
        var indicator = [];
        for (var nm in nameObj) {
            indicator.push({ name: nm, max: Number(nameObj[nm] * 1.1) })
        }
        defSeries.indicator = indicator;
        allSeries.push(defSeries);
    } else if (sType === "bar3D") {
        // bar3D的series.data在setTypeNum时生成
        for (var i = 0; i < ykey.length; i++) {
            var yField = ykey[i];
            var defSeries = {
                name: yField,//'系列名'
                extraYkey: yField,//匹配需要修改的系列名
                extraXkey: xkey,
                type: 'bar3D',
                label: {},
                data: []
            }
            allSeries.push(defSeries);
        }
    }
    return allSeries;
}
//类型编号:series[sobj.stack,sobj.smooth];opt[tooltip.trigger]
function setTypeNum(sType, typeNum, opt, series) {
    if (sType === "line") {
        // 1:数据实际效果展示,2:堆叠,3:面积;
        // 456对应123的基础上,曲线变成_平滑显示
        if (typeNum === "2") {
            series.forEach(function (sobj) {
                sobj.stack = "堆叠";//多个系列,x轴相同,y数据值叠加后显示;只有一个系列,类型编号无意义
            });
        } else if (typeNum === "3") {
            series.forEach(function (sobj) {
                sobj.areaStyle = {};//面积:区域填充样式
            });
        } else if (typeNum === "4") {
            series.forEach(function (sobj) {
                sobj.smooth = true;
            });
        } else if (typeNum === "5") {
            series.forEach(function (sobj) {
                sobj.stack = "堆叠";//多个系列,数据值叠加后显示
                sobj.smooth = true;
            });
        } else if (typeNum === "6") {
            series.forEach(function (sobj) {
                sobj.areaStyle = {};//面积
                sobj.smooth = true;
            });
        }
        //百分比:一个系列:基准线100%,无意义;两个系列:系列1每个点/系列2每个点;只有一个系列,类型编号无意义
    } else if (sType === "bar"||sType==="ybar") {
        //柱状图修改tip类型
        opt.tooltip.trigger = "item";
        // 1:数据实际效果展示,2:堆叠,3:条形图_横向展示(xy互换);
        if (typeNum === "2") {
            series.forEach(function (sobj) {
                sobj.stack = "堆叠";//多个系列,x轴相同,y数据值叠加后显示;只有一个系列,类型编号无意义
            });
        } 
    } else if (sType === "pie") {
        // 1:扇形面积:展现数据的大小
        // 2:圆环展示_圆环面积展示数据大小
        // 3:扇区圆心角展现数据的百分比，半径展现数据的大小。roseType:'radius'
        // 4:所有扇区圆心角相同，仅通过半径展现数据大小。'area'
        if (typeNum === "2") {
            //https://gallery.echartsjs.com/editor.html?c=xG61SsUMJi
            series.forEach(function (sobj) {
                sobj.radius = ['25%', '70%'];
            });
        } else if (typeNum === "3") {
            series.forEach(function (sobj) {
                sobj.roseType = 'radius';
            });
        } else if (typeNum === "4") {
            series.forEach(function (sobj) {
                sobj.roseType = 'area';
            });
        }
    } else if (sType === "radar") {
        //指示器
        opt.radar.indicator = series[0].indicator;
        delete series[0].indicator;
        //1:默认:绘制类型_多角形
        //2:面积:区域填充样式
        //3:节点放大,正方形展示;
        //4:绘制类型:圆形,移除分割线
        if (typeNum === "2") {
            series.forEach(function (sobj) {
                sobj.areaStyle = {};
            });
        } else if (typeNum === "3") {
            series.forEach(function (sobj) {
                sobj.symbol = "rect";
                sobj.symbolSize = 10;
            });
        } else if (typeNum === "4") {
            opt.radar.splitLine = { show: false };
            opt.radar.shape = 'circle' //支持 'polygon' 和 'circle'
        }
    } else if (sType === "bar3D") {
        // 1:默认正常3D状态
        // 2:堆叠显示:tootip提示y:"",z是每一项数据,无总和
        if (typeNum === "1") {
            series.forEach(function (sobj) {
                var yField = sobj.extraYkey;
                var xkey = sobj.extraXkey;
                for (var j = 0; j < data.length; j++) {
                    var dataRow = data[j];
                    var yval = dataRow[yField] || 0;//无数据,赋默认值0
                    var name = dataRow[xkey];
                    sobj.data.push([name, yField, yval]);
                }
            })
        } else if (typeNum === "2") {
            series.forEach(function (sobj) {
                sobj.stack = "堆叠";
                var yField = sobj.extraYkey;
                var xkey = sobj.extraXkey;
                for (var j = 0; j < data.length; j++) {
                    var dataRow = data[j];
                    var yval = dataRow[yField]||0;
                    var name = dataRow[xkey];
                    sobj.data.push([name, "", yval]);//y轴相同
                }
            })
        } else if (typeNum === "3") { }
    }
}
//布局编号:opt[title.left/top/show,legend,yAxis];series[sobj.label]
function setLayoutNum(sType, layoutNum, opt, series) {
    if (sType === "line" || sType === "bar" || sType === "ybar") {
        //1默认:title:top-0,left-0;legend:top-0,left-center;顶左-顶中
        if (layoutNum === "2") {//顶中-右中_垂直 1
            // opt.title.top = "";
            opt.title.left = "center";
            opt.legend.right = "0";
            opt.legend.top = "center";
            opt.legend.orient = "vertical";//horizontal,vertical
        } else if (layoutNum === "3") {//顶中-顶(下)中-y无 2
            opt.title.left = "center";
            opt.legend.top = "6%";//title下
            opt.legend.left = "center";
            opt.yAxis.show = false;
        } else if (layoutNum === "4") {//顶中-底中-y_轴线无 3
            opt.title.left = "center";
            opt.legend.bottom = "0";
            opt.legend.left = "center";
            opt.yAxis.axisLine.show = false;
        } else if (layoutNum === "5") {//无-底中-y_分割线无 4
            opt.title.left = "center";
            opt.legend.bottom = "0";
            opt.legend.left = "center";
            opt.yAxis.splitLine.show = false;
            //跳过excel布局:表格5,6,7
        } else if (layoutNum === "6") {//无-底中-y无-折线_值标注 8
            opt.title.show = false;
            opt.legend.bottom = "0";
            opt.legend.left = "center";
            opt.yAxis.show = false;
            series.forEach(function (sobj) {
                sobj.label = {
                    show: true
                }
            });
        } else if (layoutNum === "7") {//无-无-xy无 11
            opt.title.show = false;
            opt.legend.show = false;
            opt.xAxis.show = false;
            opt.yAxis.show = false;
        }
    } else if (sType === "pie" || sType === "radar") {
        if (layoutNum === "2") {//顶中-右中_垂直
            opt.title.left = "center";
            opt.legend.right = "0";
            opt.legend.top = "center";
            opt.legend.orient = "vertical";//horizontal,vertical
        } else if (layoutNum === "3") {//顶中-顶(下)中
            opt.title.left = "center";
            opt.legend.top = "6%";//title下
            opt.legend.left = "center";
        } else if (layoutNum === "4") {//中中-中中
            opt.title.x = 'center';
            opt.title.y = 'center';
        }
    } else if (sType === "bar3D") {
        if (layoutNum === "2") {//顶中-右中_垂直
            opt.title.left = "center";
            opt.legend.right = "0";
            opt.legend.top = "center";
            opt.legend.orient = "vertical";//horizontal,vertical
        } else if (layoutNum === "3") {//顶中-顶(下)中
            opt.title.left = "center";
            opt.legend.top = "6%";//title下
            opt.legend.left = "center";
        } else if (layoutNum === "4"){
            series.forEach(function (sobj) {
                sobj.label = {
                    show: true
                }
            });
        }
    }
}
//样式编号:opt[color]
function setStyleNum(sType, styleNum, opt) {
    // if (sType === "line" || sType === "bar" || sType === "pie" || sType === "ybar" || sType === "radar") {
    var styleObj = {// 颜色模版
        //0,echart默认的
        "1": ["#f845f1", "#ad46f3", "#5045f6", "#4777f5", "#44aff0", "#45dbf7", "#f6d54a", "#f69846", "#ff4343"],
        "2": ['#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c', "red", "blue"],
        "3": ['#eb2100', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC', '#eb3600'],
        "4": ["#8d7fec", "#5085f2", "#e75fc3", "#f87be2", "#f2719a", "#fca4bb", "#f59a8f", "#fdb301", "#57e7ec", "#cf9ef1", "#57e7ec", "#cf9ef1"],
    }
    // } else if (sType === "radar") {

    // }
    var styleTpl = styleObj[styleNum];
    if (styleTpl != undefined) {
        opt.color = styleTpl;
    }
}
//文本名修改:opt[title.text];series[sobj.name]
function setTextNm(sType, textObj, opt, series) {
    //对象合并:assign_谷歌45+
    // var textObj=Object.assign({ title: "", seriesNm: {} }, textObj);
    if (isObject(textObj) == false) {
        return false;
    }
    //修改标题
    var title = textObj.title;
    if (isNonEmptyStr(title)) {
        opt.title.text = title;
    }
    //修改系列名
    if (sType === "line" || sType === "bar" || sType === "ybar" || sType === "bar3D") {//pie未处理
        var seriesNm = textObj.seriesNm || {};
        for (k in seriesNm) {
            var name = seriesNm[k];
            if (isNonEmptyStr(name)) {
                //break
                series.forEach(function (sobj) {
                    if (sobj.extraYkey === k) {
                        sobj.name = name;
                    }
                });
            }
        }
    }
}


function isNonEmptyStr(str) {
    return typeof str === "string" && str.length > 0;
}
//判断是否是对象
function isObject(pm) {
    return Object.prototype.toString.call(pm) === "[object Object]";
}

/*
//dataset方式:key值为null,"",但不能没有key
//tooltip写在series里>option里
//提取
var fnTpl = function (sobj) {
    sobj.stack = "堆叠";//多个系列,数据值叠加后显示
}
series.forEach(fnTpl)

//标注点/线:最大值/最小值,指定值?
                    markPoint: {
            data: [
                {type: 'max', name: '最大值'}
            ],
            animationDelay: 2000,
            animationDuration: 1000
        },
        // areaStyle: {},//区域填充样式
//颜色来源
    https://gallery.echartsjs.com/editor.html?c=xHkjKKrz_M
        "#f845f1","#ad46f3","#5045f6","#4777f5","#44aff0","#45dbf7","#f6d54a","#f69846","#ff4343"
    https://gallery.echartsjs.com/editor.html?c=xG61SsUMJi
        var  colorList=['#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c'];
    https://gallery.echartsjs.com/editor.html?c=xhmv-1o6XS
        var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
    https://gallery.echartsjs.com/editor.html?c=xbMIK6kQkR
        "#8d7fec","#5085f2","#e75fc3","#f87be2","#f2719a","#fca4bb","#f59a8f","#fdb301","#57e7ec","#cf9ef1","#57e7ec","#cf9ef1"
// 第1 first 1st，第2 second 2nd，第3 third 3rd，第4 fourth 4th，第5 fifth 5th，
// 第6 sixth 6th，第7 seventh 7th，第8 eighth 8th，第9 ninth 9th，第10 tenth 10th，

    */