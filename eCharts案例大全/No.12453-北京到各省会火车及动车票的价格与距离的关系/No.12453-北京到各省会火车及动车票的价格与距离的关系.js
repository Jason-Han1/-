var geoCoordMap = {

"上海":[121.48,31.22],
 "天津":[117.2,39],
 "重庆":[106.54,29],
 "哈尔滨":[126.63,45],
 "长春":[125.35,43],
 "沈阳":[123.38,41],
 "石家庄":[114.48,37.5],
"太原":[112.53,37],
 "济南":[117,36],
    "郑州":[113.65,34],
    "西安":[108.95,34],
    "兰州":[103.73,35.5],
"合肥":[117.27,31],
"南京":[118.78,31.5],
    "杭州":[120.19,29.5],
"长沙":[113,27.7],
    "南昌":[115.89,28],
    "武汉":[114.31,30],
"成都":[104.06,30],
  "贵阳":[106.71,26],
"福州":[119.3,25.7],
    "广州":[113.23,23],
   "南宁":[108.33,22.34],
"昆明":[102.73,24.5],
 "拉萨":[91.11,29.57],
   "呼和浩特":[111.65,40.32],
    "银川":[106.27,38],
    "西宁":[101.74,36],
  "乌鲁木齐":[87.68,43.27],
 "海口":[110.35,19.5],
 
   
};


var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push(geoCoord.concat(data[i].value));
        }
    }
    return res;
};

option = {
    backgroundColor: '#409',
    title: {
        text: '北京到各省会火车及动车票的价格与距离的关系',
       
     
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',  
        data:['RMB'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 0,
        max: 370,
        splitNumber: 5,
        color: ['#d94e5d','#eac736','#50a3ba'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [
        {
            name: 'RMB',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
 {name: "上海", value: 177.5},
 {name: "天津", value: 23.5},
{name: "重庆", value: 224},
  {name: "哈尔滨", value: 152.5},
 {name: "长春", value: 128.5},	
 {name: "沈阳", value: 98},
 {name: "石家庄", value: 43.5},
  {name: "太原", value: 75},
  {name: "济南", value: 72},
 {name: "郑州", value: 93},
  {name: "西安", value: 148.5},
 {name: "兰州", value: 189.5},
 {name: "合肥", value: 138.5},
 {name: "南京", value: 148.5},
 {name: "杭州", value: 189.5},
 {name: "长沙", value: 189.5},
  {name: "南昌", value: 173.5},
  {name: "武汉", value: 152.5},
  {name: "成都", value: 243},
    {name: "贵阳", value: 254.5},
   {name: "福州", value: 251},
  {name: "广州", value: 251},
   {name: "南宁", value: 268.5},
 {name: "昆明", value: 302.5},
      {name: "拉萨", value: 360},
  {name: "呼和浩特", value: 91},
 {name: "银川", value: 152.5},
  {name: "西宁", value: 206},
   {name: "乌鲁木齐", value: 317},
 {name: "海口", value: 368.5},


            ]),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
}
