// 一线城市
// var title_n = '一线城市房价与工资（2018年第一季度）';
// var geoCoordMap = {
//     '深圳': [114.07, 22.62], 
//     '广州': [112.23, 23.16], 
//     '北京': [116.46, 39.92], 
//     '上海': [121.48, 31.22]
// };
// //城市最新房价数据，爬取自安居客网站
// var rawData = {
//     '深圳': [49592, 9030],
//     '广州': [28299, 8007],
//     '北京': [56465, 10310],
//     '上海': [51475, 9655]
// };

// 新一线城市
var title_n = '新一线城市房价与工资（2018年第一季度）';
var geoCoordMap = {
    '天津': [117.2, 39.13],
    '杭州': [120.19, 30.26],
    '成都': [104.06, 30.67],
    '东莞': [113.75, 23.04],
    '沈阳': [123.38, 41.8],
    '南京': [118.78, 32.04],
    '苏州': [120.62, 31.32],
    '无锡': [120.29, 31.59],
    '青岛': [120.33, 36.07],
    '郑州': [113.65, 34.76],
    '武汉': [114.31, 30.52],
    '宁波': [121.56, 29.86],
    '长沙': [113.0, 28.21],
    '重庆': [106.54, 29.59],
    '西安': [108.95, 34.27]
};
//城市最新房价数据，爬取自安居客网站
var rawData = {
    '天津': [21604, 6978],
    '杭州': [21420, 8434],
    '成都': [12580, 7185],
    '东莞': [14083, 8023],
    '沈阳': [8060, 6173],
    '南京': [25764, 7616],
    '苏州': [15588, 7450],
    '无锡': [9627, 7154],
    '青岛': [19226, 6787],
    '郑州': [12748, 6815],
    '武汉': [16306, 7266],
    '宁波': [17434, 8062],
    '长沙': [9968, 7048],
    '重庆': [7242, 7348],
    '西安': [9235, 6393]
};


function makeMapData(rawData) {
    var mapData = [];
    for (var i = 0; i < rawData.length; i++) {
        var geoCoord = geoCoordMap[rawData[i][0]];
        if (geoCoord) {
            mapData.push({
                name: rawData[i][0],
                value: geoCoord.concat(rawData[i].slice(1))
            });
        }
    }
    return mapData;
};

option = {
    animation: false,
    // 背景颜色
    backgroundColor: '#eee',
    title:{
    	        text: title_n,
    	        subtext: '红色为房价，黄色为平均工资',
    	        left: 'center',
    	        textStyle : {
    	            color: '#000'
    	        }
    },
    geo: {
        scaleLimit: {
            min: 1,
            max: 1
        },
        map: 'china',
        // silent: true,
        roam: true,
        zoom: 1.155, // 地图初始大小
        center: [102.925798, 35.296079], // 初始中心位置
        label: {

            emphasis: {
                show: true,
                areaColor: '#75a8f9'
            }
        },

        // 地区块儿颜色
        itemStyle: {
            normal: {

                borderColor: '#05dcd9',
                borderWidth: 1,
                // shadowColor: '#ffffff',
                // shadowBlur: 10,
                areaColor: '#929499',
            },
            emphasis: {
                show: true,
                areaColor: '#5e97f2'
            }
        }
    },

    series: []
};

function renderEachCity() {
    var option = {
        xAxis: [],
        yAxis: [],
        grid: [],

        series: []
    };

    echarts.util.each(rawData, function(dataItem, idx) {
        // console.log('dataItem, idx',dataItem, idx)
        //geoCoord 经纬度
        var geoCoord = geoCoordMap[idx];
        var coord = myChart.convertToPixel('geo', geoCoord);
        var bar_height = rawData[idx]

        idx += '';

        inflationData = dataItem;

        option.xAxis.push({
            id: idx,
            gridId: idx,
            type: 'category',
            name: idx,

            nameLocation: 'middle',
            nameGap: 3,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#000',
                    width: 1
                }
            },
            // data: xAxisCategory,
            data: ["数据A", '数据B'],
            z: 100

        });


        option.yAxis.push({
            id: idx,
            gridId: idx,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#1C70B6'
                }
            },
            z: 100
        });
        option.grid.push({
            id: idx,
            width: 30,
            height: bar_height[0] * 0.001,
            left: coord[0],
            top: coord[1] + 5 - bar_height[0] * 0.001,
            z: 100
        });
        option.series.push({
            id: idx,
            type: 'bar',
            xAxisId: idx,
            yAxisId: idx,
            barGap: 0,
            barCategoryGap: 0,
            // data: inflationData,
            data: inflationData,
            z: 100,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // 柱状图每根柱子颜色
                        var colorList = ['red', 'yellow', '#15e178'];
                        return colorList[params.dataIndex];
                    }
                }
            }
        });
    });
    // console.time('a');
    myChart.setOption(option);
    // console.timeEnd('a');
}






setTimeout(renderEachCity, 0);
// 缩放和拖拽
function throttle(fn, delay, debounce) {

    var currCall;
    var lastCall = 0;
    var lastExec = 0;
    var timer = null;
    var diff;
    var scope;
    var args;

    delay = delay || 0;

    function exec() {
        lastExec = (new Date()).getTime();
        timer = null;
        fn.apply(scope, args || []);
    }

    var cb = function() {
        currCall = (new Date()).getTime();
        scope = this;
        args = arguments;
        diff = currCall - (debounce ? lastCall : lastExec) - delay;

        clearTimeout(timer);

        if (debounce) {
            timer = setTimeout(exec, delay);
        } else {
            if (diff >= 0) {
                exec();
            } else {
                timer = setTimeout(exec, -diff);
            }
        }

        lastCall = currCall;
    };

    return cb;
}

var throttledRenderEachCity = throttle(renderEachCity, 0);

// // 点击显示柱状图
myChart.on('click', function(e) {
    console.log('点击显示柱状图', e)


    if (e.seriesId) {
        console.log('图表', e.seriesId)
    } else {
        console.log('地图', e.region.name)

    }

    // if(e.componentSubType == "bar"){
    //     // 先清除所有柱状图
    $('.tongJiTu').remove();




    // }
    return;
});