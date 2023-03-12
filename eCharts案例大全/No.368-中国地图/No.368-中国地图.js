/*
喜欢作品的可以关注csdn https://blog.csdn.net/qq_47410017
*/

    //定义一个全局变量，用来统计每个省有几个市
    let num = 0;
    //1.中国地图
    var chinaMap = "/asset/get/s/data-1621947890604-aSx9ZxNx1.json";
    //2.台湾省地图
    var taiWanMap = "/asset/get/s/data-1621947975053-R-8DyOg0e.json";
    //3.海南省地图
    var haiNanMap = "/asset/get/s/data-1621948145271-68eCc32D3.json";
    //4.安徽省地图
    var anHuiMap = "/asset/get/s/data-1621948188732-TXl0sSFuy.json";
    //5.江西省地图
    var jiangXiMap = "/asset/get/s/data-1621948233209--fwwE8_l7.json";
    //6.湖南省地图
    var huNanMap = "/asset/get/s/data-1621948319356-HrpXRrJ6l.json";
    //7.云南省地图
    var yunNanMap = "/asset/get/s/data-1621948345350-4CVpSWQSK.json";
    //8.贵州省地图
    var guiZhouMap = "/asset/get/s/data-1621948396733-Udi6XAEgw.json";
    //9.广东省地图
    var guangDongMap = "/asset/get/s/data-1621948441031-pLiWmoZet.json";
    //10.福建省地图
    var fuJianMap = "/asset/get/s/data-1621948490541-XH7VxL7oj.json";
    //11.浙江省地图
    var zheJiangMap = "/asset/get/s/data-1621948532095-VbosDul6I.json";
    //12.江苏省地图
    var jiangSuMap = "/asset/get/s/data-1621948565021-s3yTJP3Zl.json";
    //13.四川省地图
    var siChuanMap = "/asset/get/s/data-1621948609883-izF8OEpk9.json";
    //14.重庆市市地图
    var chongQingMap = "/asset/get/s/data-1621948631044-2W6Sgh1H-.json";
    //15.湖北省地图
    var huBeiMap = "/asset/get/s/data-1621948649243-GxqNlvJU5.json";
    //16.河南省地图
    var heNanMap = "/asset/get/s/data-1621948703170-imaQv84Cd.json";
    //17.山东省地图
    var shanDongMap = "/asset/get/s/data-1621948716835-cOtdSmaJo.json";
    //18.吉林省地图
    var jiLinMap = "/asset/get/s/data-1621948723748-c4ZOa5KTk.json";
    //19.辽宁省地图
    var liaoNingMap = "/asset/get/s/data-1621948731460-_efUVEzY0.json";
    //20.天津市市地图
    var tianJinMap = "/asset/get/s/data-1621948739174-L2C2t_F5t.json";
    //21.北京市市地图
    var beiJingMap = "/asset/get/s/data-1621948858020-sL_9-nzvY.json";
    //22.河北省地图
    var heBeiMap = "/asset/get/s/data-1621948873563-JNgr5paiY.json";
    //23.山西省地图
    var shanXiMap = "/asset/get/s/data-1621948883641-gFXuKdbe9.json";
    //24.陕西省地图
    var shanXi2Map = "/asset/get/s/data-1621948892136-f9xS_1lzo.json";
    //25.宁夏回族自治区省地图
    var ningXiaMap = "/asset/get/s/data-1621948903314-2dSyFDeNM.json";
    //26.青海省地图
    var qingHaiMap = "/asset/get/s/data-1621948912616-JofrNyZIQ.json";
    //27.西藏自治区地图
    var xiZangMap = "/asset/get/s/data-1621948923877-Gr55e-l4V.json";
    //28.黑龙江省地图
    var heiLongJiangMap = "/asset/get/s/data-1621948931666-7RFUheW7w.json";
    //29.内蒙古自治区地图
    var neimengGuMap = "/asset/get/s/data-1621948941132-gcGpDlAy3.json";
    //30.甘肃省地图
    var ganSuMap = "/asset/get/s/data-1621948952287-fhag8An8k.json";
    //31.新疆维吾尔自治区省地图
    var xinJiangMap = "/asset/get/s/data-1621948963218-CwFnOzi4B.json";
    //32.广西壮族自治区地图
    var guangxiMap = "/asset/get/s/data-1621948972207-pHKfjk3Zs.json";
    //设置初始地图
    var mapname = chinaMap;
    //设置省份的json 这里注意名字要和中国地图上的名字一致
    var mapJson = [
        {
            name: "台湾省",
            json: taiWanMap,
        },
        {
            name: "海南省",
            json: haiNanMap,
        },
        {
            name: "安徽省",
            json: anHuiMap,
        },
        {
            name: "江西省",
            json: jiangXiMap,
        },
        {
            name: "湖南省",
            json: huNanMap,
        },
        {
            name: "云南省",
            json: yunNanMap,
        },
        {
            name: "贵州省",
            json: guiZhouMap,
        },
        {
            name: "广东省",
            json: guangDongMap,
        },
        {
            name: "福建省",
            json: fuJianMap,
        },
        {
            name: "浙江省",
            json: zheJiangMap,
        },
        {
            name: "江苏省",
            json: jiangSuMap,
        },
        {
            name: "四川省",
            json: siChuanMap,
        },
        {
            name: "重庆市",
            json: chongQingMap,
        },
        {
            name: "湖北省",
            json: huBeiMap,
        },
        {
            name: "河南省",
            json: heNanMap,
        },
        {
            name: "山东省",
            json: shanDongMap,
        },
        {
            name: "吉林省",
            json: jiLinMap,
        },
        {
            name: "辽宁省",
            json: liaoNingMap,
        },
        {
            name: "天津市",
            json: tianJinMap,
        },
        {
            name: "北京市",
            json: beiJingMap,
        },
        {
            name: "河北省",
            json: heBeiMap,
        },
        {
            name: "山西省",
            json: shanXiMap,
        },
        {
            name: "陕西省",
            json: shanXi2Map,
        },
        {
            name: "宁夏回族自治区",
            json: ningXiaMap,
        },
        {
            name: "青海省",
            json: qingHaiMap,
        },
        {
            name: "西藏自治区",
            json: xiZangMap,
        },
        {
            name: "黑龙江省",
            json: heiLongJiangMap,
        },
        {
            name: "内蒙古自治区",
            json: neimengGuMap,
        },
        {
            name: "甘肃省",
            json: ganSuMap,
        },
        {
            name: "新疆维吾尔自治区",
            json: xinJiangMap,
        },
        {
            name: "广西壮族自治区",
            json: guangxiMap,
        },
    ];
    //提取自动播放的代码
    function timing() {
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index,
        });
        // 高亮指定的数据图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index + 1,
        });
        index++;
        //判断长度是否和城市的长度一样，如果一样重新播放
        if (index > num) {
            index = -1;
        }
    }
    //加载时的文字提示
    myChart.showLoading({ text: '正在加载数据' });  //增加等待提示
    //设置开始位置（播放的位置）
    let index = -1;
    //定时播放
    var timer = setInterval(function () {
        //调用定时播放代码
        timing()
    }, 1500);
    //鼠标移入
    myChart.on('mousemove', function (e) {
        //取消定时
        clearInterval(timer);
        //取消高亮
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
        });
        //高亮鼠标移入的位置
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: e.dataIndex,
        });

    });
    //鼠标移出
    myChart.on('mouseout', function (e) {
        //取消定时
        clearInterval(timer);
        //取消高亮
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: e.dataIndex,
        });
        //重新开始定时播放
        timer = setInterval(function () {
            //调用定时播放代码
            timing()
        }, 1500);
    });
    //点击事件
    myChart.on('click', function (e) {
        //过滤 这里是es6语法 filter函数可以看成是一个过滤函数，返回符合条件的元素的数组
        var chooseName = mapJson.filter((item) => {
            //我们根据名字来判断是否选择一种
            return item.name == e.name;
        });
        //这里的chooseName是一个数组，我们需要获取到json 有兴趣可以打印
        //{name: "新疆维吾尔自治区", json: "json/新疆维吾尔自治区.json"}
        mapname = chooseName[0].json;

        //添加一个返回按键
        $('<div class="back">返回中国地图</div>').appendTo(
            $('#chart-panel')
        );
        //给返回按键设置样式
        $('.back').css({
            position: 'absolute',//绝对地位
            left: '20px',//设置位置
            top: '20px',//设置位置
            color: 'pink',//设置字体颜色
            'font-size': '20px',//设置字体大小
            cursor: 'pointer',//变小手
        });
        //设置返回按钮的点击事件
        $('.back').click(function () {
            //地图重新设置为中国地图
            mapname = chinaMap;
            //隐藏按钮
            $('.back').css({
                opacity:0,
            });
            //绘制地图
            mapInit();
            //重新开始定时播放
            timer = setInterval(function () {
                //调用定时播放代码
                timing()
            }, 1500);
        });
        //绘制地图
        mapInit();
        //定时播放
        timer = setInterval(function () {
            //调用定时播放代码
            timing()
        }, 1500);
    });
    //设置初始化时间
    setTimeout(function () {
        mapInit();
    }, 500);


    //创建地图
    var mapInit = () => {
        //调用中国地图（同步）
        $.getJSON(mapname, function (geoJson) {
            //获取到长度（每个省里有几个市）
            num = geoJson.features.length;
            //调用我们通过json对象注册的地图
            echarts.registerMap('China', geoJson);
            //文件加载的动画
            myChart.hideLoading();
            //判断是否为祖国地图
            if (mapname === chinaMap) {
                //设置小黄点
                var geoCoordMap = {
                    '台湾': [122,23],
                    '黑龙江': [129,51],
                    '内蒙古': [110.3467, 41.4899],
                    "吉林": [125.8154, 44.2584],
                    '北京市': [116.4551, 40.2539],
                    "辽宁": [123.1238, 42.1216],
                    "河北": [114.4995, 38.1006],
                    "天津": [117.4219, 39.4189],
                    "山西": [112.3352, 37.9413],
                    "陕西": [109.1162, 34.2004],
                    "甘肃": [103.5901, 36.3043],
                    "宁夏": [106.3586, 38.1775],
                    "青海": [101.4038, 36.8207],
                    "新疆": [87.9236, 43.5883],
                    "西藏": [88.388277,31.56375],
                    "四川": [103.9526, 30.7617],
                    "重庆": [108.384366, 30.439702],
                    "山东": [117.1582, 36.8701],
                    "河南": [113.4668, 34.6234],
                    "江苏": [118.8062, 31.9208],
                    "安徽": [117.29, 32.0581],
                    "湖北": [114.3896, 30.6628],
                    "浙江": [119.5313, 29.8773],
                    "福建": [119.4543, 25.9222],
                    "江西": [116.0046, 28.6633],
                    "湖南": [113.0823, 28.2568],
                    "贵州": [106.6992, 26.7682],
                    "云南": [102.9199, 25.4663],
                    "广东": [113.12244, 23.009505],
                    "广西": [108.479, 23.1152],
                    "海南": [110.3893, 19.8516],
                    '上海': [121.4648, 31.2891],
                };
                //设置每个区域的值
                var data = [
                    {name:"台湾",value:1},
                    {name:"北京",value:2},
                    {name:"天津",value:3},
                    {name:"河北",value:4},
                    {name:"山西",value:5},
                    {name:"内蒙古",value:6},
                    {name:"辽宁",value:7},
                    {name:"吉林",value:8},
                    {name:"黑龙江",value:9},
                    {name:"上海",value:10},
                    {name:"江苏",value:11},
                    {name:"浙江",value:12},
                    {name:"安徽",value:13},
                    {name:"福建",value:14},
                    {name:"江西",value:15},
                    {name:"山东",value:16},
                    {name:"河南",value:17},
                    {name:"湖北",value:18},
                    {name:"湖南",value:19},
                    {name:"重庆",value:20},
                    {name:"四川",value:21},
                    {name:"贵州",value:22},
                    {name:"云南",value:23},
                    {name:"西藏",value:24},
                    {name:"陕西",value:25},
                    {name:"甘肃",value:26},
                    {name:"青海",value:27},
                    {name:"宁夏",value:28},
                    {name:"新疆",value:29},
                    {name:"广东",value:30},
                    {name:"广西",value:31},
                    {name:"海南",value:32},
                ];
                //给每个地区赋值
                var convertData = function (data) {
                    //定义一个数组
                    var res = [];
                    //循环遍历每个区域值
                    for (var i = 0; i < data.length; i++) {
                        //获取坐标
                        var geoCoord = geoCoordMap[data[i].name];
                        //判断是否有坐标
                        if (geoCoord) {
                            //往数组里设置值
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            });
                        }
                    }
                    return res;
                };
            }else{
                //这里不为中国地图所以先不设置（后面需要对市区进行标记在设置）

                //设置小黄点
                var geoCoordMap = {

                };
                //设置每个区域的值
                var data = [

                ];
                //给每个地区赋值
                convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            });
                        }
                    }
                    return res;
                };
            }


            //地图开始
            option = {
                //设置背景颜色
                backgroundColor: '#020933',
                geo: {
                    map: 'China',//地图为刚刚设置的China
                    aspectScale:0.75, //长宽比
                    zoom:1.1,//当前视角的缩放比例
                    roam: false,//是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                    itemStyle: {//地图区域的多边形 图形样式
                        normal: {
                            areaColor: '#013C62',//地区颜色
                            shadowColor: '#182f68',//阴影颜色
                            shadowOffsetX: 0,//阴影偏移量
                            shadowOffsetY: 25,//阴影偏移量
                        },
                        emphasis: {
                            areaColor: '#2AB8FF',//地区颜色
                            label: {
                                show: false,//是否在高亮状态下显示标签
                            },
                        },
                    },
                },
                series: [//数据系列
                    {
                        type: 'map',//地图类型
                        //地图上文字
                        label: {
                            normal: {
                                show: true,//是否显示标签
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                        },
                        //地图区域的多边形 图形样式
                        itemStyle: {
                            normal: {
                                borderColor: '#2ab8ff',
                                borderWidth: 1.5,
                                areaColor: '#12235c',
                            },
                            emphasis: {
                                areaColor: '#2AB8FF',
                                borderWidth: 0,
                            },
                        },
                        zoom: 1.2,//当前视角的缩放比例
                        //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                        roam: false,
                        map: 'China', //使用中国地图

                    },
                    {

                        //设置为分散点
                        type: 'scatter',
                        //series坐标系类型
                        coordinateSystem: 'geo',
                        //设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                        symbol: 'pin',
                        // //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
                        symbolSize: [40,40],
                        //气泡字体设置
                        label: {
                            normal: {
                                show: true,//是否显示
                                textStyle: {
                                    color: '#fff',//字体颜色
                                    fontSize: 8,//字体大小
                                },
                                //返回气泡数据
                                formatter (value){
                                    return value.data.value[2]
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#1E90FF', //标志颜色
                            }
                        },
                        //给区域赋值
                        data: convertData(data),
                        showEffectOn: 'render',//配置何时显示特效。可选：'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效。
                        rippleEffect: {//涟漪特效相关配置。
                            brushType: 'stroke'//波纹的绘制方式，可选 'stroke' 和 'fill'
                        },
                        hoverAnimation: true,//是否开启鼠标 hover 的提示动画效果。
                        zlevel: 1//所属图形的 zlevel 值
                    },
                ],
            };
            myChart.setOption(option);
        });
    };