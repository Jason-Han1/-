var data = [
{ name: "上海", value: 102.76},
{ name: "兰州", value: 14.29},
{ name: "贵阳", value: 6.12},
{ name: "海口", value: 3.4},
{ name: "合肥", value: 92.96},
{ name: "南京", value: 239.27},
{ name: "杭州", value: 214.79},
{ name: "乌鲁木齐", value: 37.38},
//{ name: "兰州", value: 0.05},
{ name: "西宁", value: 2.31},
{ name: "拉萨", value: 2.27},
{ name: "银川", value: 4.88},
{ name: "呼和浩特", value: 37.38},
//{ name: "海口", value: 0.02},
{ name: "广州", value: 77.64},
{ name: "福州", value: 62.54},
{ name: "南宁", value: 3.36},
{ name: "郑州", value: 202.06},
{ name: "武汉", value: 40.31},
{ name: "长沙", value: 11.19},
{ name: "南昌", value: 37.55},
{ name: "北京", value: 57.34},
{ name: "长春", value: 20.89},
{ name: "沈阳", value: 67.42},
{ name: "哈尔滨", value: 21.21},
{ name: "天津", value: 48.61},
{ name: "济南", value: 326.43},
{ name: "太原", value: 47.75},
{ name: "石家庄", value: 114.15},
{ name: "西安", value: 55.26},
{ name: "成都", value: 48.64},
{ name: "重庆", value: 16.1},
{ name: "昆明", value: 21.64},



];

var geoCoordMap = {
    
    '乌鲁木齐':[87.68,43.77],
    '兰州':[103.73,36.03],
    '西宁':[101.74,36.56],
    '拉萨':[91.11,29.97],
    '银川':[106.27,38.47],
    '呼和浩特':[111.65,40.82],
    '海口':[110.35,20.02],
    "上海": [121.48, 31.22],
    "合肥": [117.27, 31.86],
    "南京": [118.78, 32.04],
    "杭州": [120.19, 30.26],
    "广州": [113.23, 23.16],
    "福州": [119.3, 26.08],
    "南宁": [108.33, 22.84],
    "郑州": [113.65, 34.76],
    "武汉": [114.31, 30.52],
    "长沙": [113, 28.21],
    "南昌": [115.89, 28.68],
    "北京": [116.46, 39.92],
    "长春": [125.35, 43.88],
    "大连": [121.62, 38.92],
    "沈阳": [123.38, 41.8],
    "哈尔滨": [126.63, 45.75],
    "天津": [117.2, 39.13],
    "济南": [117, 36.65],
    "青岛": [120.33, 36.07],
    "太原": [112.53, 37.87],
    "石家庄": [114.48, 38.03],
    "西安": [108.95, 34.27],
    "成都": [104.06, 30.67],
    "重庆": [106.54, 29.59],
    "昆明": [102.73, 25.04],
};



var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                //name: data[i].name,
                //name:data[i].value,
                //value: geoCoord.concat(data[i].value)
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

var option = {
    backgroundColor: 'FFFFFF',
    title: {
		top:'5%',
        text: '中国各省城市建设用地扩张速度 ',
        //subtext: 'data from PM25.in',
        //sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            //color: '#fff'
        }
    },
    visualMap: {
        show: false,
		type: 'continuous',
        min: 2,
        max: 330,
        inRange: {
			//symbol:['circle', 'rect', 'diamond'],
            symbolSize: [1, 15]
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            return params.value[2]+' 平方千米/年';
        }
    },
    legend: {
        orient: 'vertical',
		bottom:'5%',
		left:'5%',
        //y: 'bottom',
        //x:'left',
        data:['扩张速度 (平方千米/年)'],
        textStyle: {
            //color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#F7EED6',//米黄色
                borderColor: '#D3D3D3'//浅灰色
            },
            emphasis: {
                areaColor: '#F5F5F5'
            }
        }
    },
    series : [
        {
            name: '扩张速度 (平方千米/年)',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            //symbolSize: function (val) {
            //    return val[2] / 50;
            //},
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        },
        
    ]
};