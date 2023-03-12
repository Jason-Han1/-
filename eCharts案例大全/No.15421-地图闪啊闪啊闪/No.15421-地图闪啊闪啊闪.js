 function getColor(Status) {
     var cls = "";
     switch (Status) {
         case 0:
             cls = "#f00";
             break;
         case 1:
             cls = "#fff100";
             break;
         case 2:
             cls = "#094";
             break;
     }
     return cls;
 }

 var geoCoordMap = {
     '北京': [116.39737, 39.939502],
     '天津': [117.133262, 39.256321],
     '上海': [121.29, 31.14],
     '重庆': [106.32485, 29.895013],
     '河北': [114.336873, 38.21885],
     '河南': [113.453802, 34.895028],
     '云南': [102.599397, 25.248948],
     '辽宁': [123.241164, 41.948112],
     '黑龙江': [126.479088, 45.985284],
     '湖南': [112.800698, 28.474291],
     '安徽': [117.170056, 31.99595],
     '山东': [116.912494, 36.812038],
     '新疆': [87.476819, 43.894927],
     '江苏': [118.715429, 32.246466],
     '浙江': [120.040035, 30.350837],
     '江西': [115.808656, 28.774611],
     '湖北': [114.116105, 30.764814],
     '广西': [108.265765, 23.020403],
     '甘肃': [103.66644, 36.218003],
     '山西': [112.349964, 38.044464],
     '内蒙古': [111.614073, 40.951504],
     '陕西': [108.780889, 34.408508],
     '吉林': [125.228072, 43.894927],
     '福建': [119.156964, 26.182279],
     '贵州': [106.499624, 26.844365],
     '广东': [113.233035, 23.224606],
     '青海': [101.605943, 36.752842],
     '西藏': [90.972306, 29.838888],
     '四川': [103.924003, 30.796585],
     '宁夏': [106.094884, 38.624116],
     '海南': [110.179083, 19.921006],
     '台湾': [121.36464, 25.248948],
     '香港': [114.1529, 22.542716],
     '澳门': [113.417008, 22.337477],
 };

 var pagesize=4;
 var t = 0;
 function getgeo(geo,i){
     console.log(i)
    if(i%2==0){
        return [geo[0] + (0.2 * i%2), geo[1]];
    }else{
        return [geo[0] , geo[1] - (0.3 * i%2)];
    }
 }
 
 function convertData(datas) {
     var specialCity=['上海','天津','','重庆','北京']
     var res = [];
     for (var g in geoCoordMap) {
        if(specialCity.indexOf(g)>-1)
            pagesize=2
        else 
            pagesize=4;
      
         var geo = geoCoordMap[g];
         if (geo) {
             var data = $.grep(datas, function(p) {
                 return p.name == g && p.value!=null;
             });
             if (data.length < pagesize) {
                 for (var i in data) {
                     if (data[i]) {
                         res.push({
                             name:data[i].name,
                             value: getgeo(geo,i),
                             state: data[i].value,
                             Region: data[i].Region,
                             ChannelName: data[i].ChannelName
                         });
                     }
                 }
             } else {
                 var page= parseInt(data.length/pagesize);
                 page=data.length % pagesize >0 ? (page+1):page;
                 var cutPage= t % page; 
                 for (var i = 0 ;i < pagesize; i++) {
                    var index=i+(cutPage*pagesize);
                    if(data[index]){
                        res.push({
                             name: data[index].name,
                             value:getgeo(geo,index),
                             state: data[index].value,
                             Region: data[index].Region,
                             ChannelName: data[index].ChannelName
                         });
                    }
                 }
             }
         }
     }
     return res;
 };

 var cut_page = 0;
 var data = [{
     "name": "北京",
     "ID": 9,
     "ChannelType": "RKA",
     "ChannelName": "物美华北",
     "Region": "华北",
     "value": 2
 }, {
     "name": "辽宁",
     "ID": 11,
     "ChannelType": "RKA",
     "ChannelName": "新玛特",
     "Region": "华北",
     "value": 2
 }, {
     "name": "上海",
     "ID": 12,
     "ChannelType": "RKA",
     "ChannelName": "世纪联华",
     "Region": "华东",
     "value": 2
 }, {
     "name": "山东",
     "ID": 13,
     "ChannelType": "RKA",
     "ChannelName": "家家悦",
     "Region": "华北",
     "value": 2
 }, {
     "name": "浙江",
     "ID": 14,
     "ChannelType": "RKA",
     "ChannelName": "联华华商",
     "Region": "华东",
     "value": 2
 }, {
     "name": "湖北",
     "ID": 16,
     "ChannelType": "RKA",
     "ChannelName": "中百仓储",
     "Region": "华南",
     "value": 2
 }, {
     "name": "重庆",
     "ID": 17,
     "ChannelType": "RKA",
     "ChannelName": "新世纪连锁",
     "Region": "华西",
     "value": 2
 }, {
     "name": "深圳",
     "ID": 18,
     "ChannelType": "RKA",
     "ChannelName": "人人乐",
     "Region": "华南",
     "value": 2
 }, {
     "name": "四川",
     "ID": 19,
     "ChannelType": "RKA",
     "ChannelName": "红旗",
     "Region": "华西",
     "value": 2
 }, {
     "name": "河南",
     "ID": 20,
     "ChannelType": "RKA",
     "ChannelName": "丹尼斯",
     "Region": "华东",
     "value": 0
 }, {
     "name": "湖南",
     "ID": 21,
     "ChannelType": "RKA",
     "ChannelName": "步步高",
     "Region": "华南",
     "value": 2
 }, {
     "name": "山东",
     "ID": 22,
     "ChannelType": "RKA",
     "ChannelName": "银座购物",
     "Region": "华北",
     "value": 2
 }, {
     "name": "河北",
     "ID": 23,
     "ChannelType": "RKA",
     "ChannelName": "北国",
     "Region": "华北",
     "value": 2
 }, {
     "name": "江苏",
     "ID": 24,
     "ChannelType": "RKA",
     "ChannelName": "时代",
     "Region": "华东",
     "value": 2
 }, {
     "name": "山西",
     "ID": 25,
     "ChannelType": "RKA",
     "ChannelName": "美特好",
     "Region": "华北",
     "value": 2
 }, {
     "name": "湖北",
     "ID": 26,
     "ChannelType": "RKA",
     "ChannelName": "武商",
     "Region": "华南",
     "value": 2
 }, {
     "name": "上海",
     "ID": 27,
     "ChannelType": "RKA",
     "ChannelName": "农工商",
     "Region": "华东",
     "value": 0
 }, {
     "name": "山东",
     "ID": 28,
     "ChannelType": "RKA",
     "ChannelName": "潍坊百货",
     "Region": "华北",
     "value": 2
 }, {
     "name": "辽宁",
     "ID": 29,
     "ChannelType": "RKA",
     "ChannelName": "兴隆超市",
     "Region": "华北",
     "value": 2
 }, {
     "name": "福建",
     "ID": 30,
     "ChannelType": "RKA",
     "ChannelName": "新华都连锁",
     "Region": "华南",
     "value": 2
 }, {
     "name": "上海",
     "ID": 31,
     "ChannelType": "RKA",
     "ChannelName": "联华华联",
     "Region": "华东",
     "value": 2
 }, {
     "name": "广东",
     "ID": 32,
     "ChannelType": "RKA",
     "ChannelName": "美宜佳",
     "Region": "华南",
     "value": 0
 }, {
     "name": "湖北",
     "ID": 33,
     "ChannelType": "RKA",
     "ChannelName": "中百便民",
     "Region": "华南",
     "value": 0
 }, {
     "name": "上海",
     "ID": 35,
     "ChannelType": "RKA",
     "ChannelName": "好德",
     "Region": "华东",
     "value": 0
 }, {
     "name": "浙江",
     "ID": 36,
     "ChannelType": "RKA",
     "ChannelName": "人本",
     "Region": "华东",
     "value": 0
 }, {
     "name": "上海",
     "ID": 37,
     "ChannelType": "RKA",
     "ChannelName": "可的",
     "Region": "华东",
     "value": 2
 }, {
     "name": "山东",
     "ID": 38,
     "ChannelType": "RKA",
     "ChannelName": "福兴祥",
     "Region": "华北",
     "value": 2
 }, {
     "name": "浙江",
     "ID": 39,
     "ChannelType": "RKA",
     "ChannelName": "三江",
     "Region": "华东",
     "value": 0
 }, {
     "name": "安徽",
     "ID": 40,
     "ChannelType": "RKA",
     "ChannelName": "合家福",
     "Region": "华东",
     "value": 2
 }, {
     "name": "深圳",
     "ID": 42,
     "ChannelType": "RKA",
     "ChannelName": "天虹华南",
     "Region": "华南",
     "value": 2
 }, {
     "name": "河北",
     "ID": 43,
     "ChannelType": "RKA",
     "ChannelName": "美食林",
     "Region": "华北",
     "value": 2
 }, {
     "name": "上海",
     "ID": 44,
     "ChannelType": "RKA",
     "ChannelName": "物美华东",
     "Region": "华东",
     "value": 2
 }, {
     "name": "河南",
     "ID": 46,
     "ChannelType": "RKA",
     "ChannelName": "大张量贩",
     "Region": "华东",
     "value": 2
 }, {
     "name": "广东",
     "ID": 47,
     "ChannelType": "RKA",
     "ChannelName": "嘉荣连锁",
     "Region": "华南",
     "value": 0
 }, {
     "name": "上海",
     "ID": 48,
     "ChannelType": "RKA",
     "ChannelName": "全家华东",
     "Region": "华东",
     "value": 2
 }, {
     "name": "河北",
     "ID": 50,
     "ChannelType": "RKA",
     "ChannelName": "惠友",
     "Region": "华北",
     "value": 2
 }, {
     "name": "广东",
     "ID": 51,
     "ChannelType": "RKA",
     "ChannelName": "吉之岛",
     "Region": "华南",
     "value": 0
 }, {
     "name": "辽宁",
     "ID": 53,
     "ChannelType": "RKA",
     "ChannelName": "新玛特",
     "Region": "华东",
     "value": 1
 }, {
     "name": "江苏",
     "ID": 54,
     "ChannelType": "RKA",
     "ChannelName": "大统华",
     "Region": "华东",
     "value": 2
 }, {
     "name": "宁夏",
     "ID": 55,
     "ChannelType": "RKA",
     "ChannelName": "新华百货",
     "Region": "华西",
     "value": 2
 }, {
     "name": "上海",
     "ID": 57,
     "ChannelType": "RKA",
     "ChannelName": "良友便利",
     "Region": "华东",
     "value": 2
 }, {
     "name": "广东",
     "ID": 61,
     "ChannelType": "RKA",
     "ChannelName": "7-11华南",
     "Region": "华南",
     "value": 0
 }, {
     "name": "河南",
     "ID": 62,
     "ChannelType": "RKA",
     "ChannelName": "信阳西亚",
     "Region": "华东",
     "value": 2
 }, {
     "name": "湖南",
     "ID": 70,
     "ChannelType": "RKA",
     "ChannelName": "家润多",
     "Region": "华南",
     "value": 2
 }, {
     "name": "湖北",
     "ID": 73,
     "ChannelType": "RKA",
     "ChannelName": "中商",
     "Region": "华南",
     "value": 2
 }, {
     "name": "上海",
     "ID": 74,
     "ChannelType": "RKA",
     "ChannelName": "易买得",
     "Region": "华东",
     "value": 2
 }, {
     "name": "河南",
     "ID": 78,
     "ChannelType": "RKA",
     "ChannelName": "万德隆",
     "Region": "华东",
     "value": 2
 }, {
     "name": "上海",
     "ID": 80,
     "ChannelType": "RKA",
     "ChannelName": "联华快客",
     "Region": "华东",
     "value": 0
 }, {
     "name": "安徽",
     "ID": 83,
     "ChannelType": "RKA",
     "ChannelName": "华运超市",
     "Region": "华东",
     "value": 2
 }, {
     "name": "浙江",
     "ID": 84,
     "ChannelType": "RKA",
     "ChannelName": "台客隆",
     "Region": "华东",
     "value": 2
 }, {
     "name": "上海",
     "ID": 85,
     "ChannelType": "RKA",
     "ChannelName": "喜士多华东",
     "Region": "华东",
     "value": 0
 }, {
     "name": "浙江",
     "ID": 87,
     "ChannelType": "RKA",
     "ChannelName": "北仑加贝",
     "Region": "华东",
     "value": 2
 }, {
     "name": "山西",
     "ID": 89,
     "ChannelType": "RKA",
     "ChannelName": "家家利",
     "Region": "华北",
     "value": 2
 }, {
     "name": "上海",
     "ID": 91,
     "ChannelType": "RKA",
     "ChannelName": "吉买盛",
     "Region": "华东",
     "value": 2
 }, {
     "name": "上海",
     "ID": 94,
     "ChannelType": "RKA",
     "ChannelName": "罗森",
     "Region": "华东",
     "value": 0
 }, {
     "name": "河南",
     "ID": 97,
     "ChannelType": "RKA",
     "ChannelName": "三毛",
     "Region": "华东",
     "value": 2
 }, {
     "name": "上海",
     "ID": 100,
     "ChannelType": "RKA",
     "ChannelName": "联华快客",
     "Region": "华北",
     "value": 2
 }, {
     "name": "黑龙江",
     "ID": 102,
     "ChannelType": "RKA",
     "ChannelName": "庆客隆",
     "Region": "华北",
     "value": 2
 }, {
     "name": "广东",
     "ID": 103,
     "ChannelType": "RKA",
     "ChannelName": "百佳华南",
     "Region": "华南",
     "value": 0
 }, {
     "name": "河南",
     "ID": 104,
     "ChannelType": "RKA",
     "ChannelName": "胖东来",
     "Region": "华东",
     "value": 2
 }, {
     "name": "深圳",
     "ID": 105,
     "ChannelType": "RKA",
     "ChannelName": "梅林",
     "Region": "华东",
     "value": 0
 }, {
     "name": "上海",
     "ID": 107,
     "ChannelType": "RKA",
     "ChannelName": "家得利",
     "Region": "华东",
     "value": 2
 }, {
     "name": "广东",
     "ID": 108,
     "ChannelType": "RKA",
     "ChannelName": "喜士多华南",
     "Region": "华南",
     "value": 0
 }, {
     "name": "广东",
     "ID": 113,
     "ChannelType": "RKA",
     "ChannelName": "全家华南",
     "Region": "华南",
     "value": 0
 }, {
     "name": "广东",
     "ID": 114,
     "ChannelType": "RKA",
     "ChannelName": "万宁",
     "Region": "华南",
     "value": 0
 }, {
     "name": "广东",
     "ID": 116,
     "ChannelType": "RKA",
     "ChannelName": "屈臣氏",
     "Region": "华南",
     "value": 0
 }, {
     "name": "上海",
     "ID": 120,
     "ChannelType": "RKA",
     "ChannelName": "7-11华东",
     "Region": "华东",
     "value": 0
 }, {
     "name": "安徽",
     "ID": 125,
     "ChannelType": "RKA",
     "ChannelName": "阜阳华联",
     "Region": "华东",
     "value": 2
 }, {
     "name": "重庆",
     "ID": 127,
     "ChannelType": "RKA",
     "ChannelName": "重百连锁",
     "Region": "华西",
     "value": 2
 }, {
     "name": "北京",
     "ID": 128,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华北",
     "value": null
 }, {
     "name": "天津",
     "ID": 129,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华北",
     "value": null
 }, {
     "name": "上海",
     "ID": 130,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华东",
     "value": null
 }, {
     "name": "重庆",
     "ID": 131,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华西",
     "value": null
 }, {
     "name": "河北",
     "ID": 132,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华北",
     "value": null
 }, {
     "name": "河南",
     "ID": 133,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华北",
     "value": null
 }, {
     "name": "云南",
     "ID": 134,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华西",
     "value": null
 }, {
     "name": "辽宁",
     "ID": 135,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华北",
     "value": null
 }, {
     "name": "黑龙江",
     "ID": 136,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华北",
     "value": null
 }, {
     "name": "湖南",
     "ID": 137,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华南",
     "value": null
 }, {
     "name": "安徽",
     "ID": 138,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华东",
     "value": null
 }, {
     "name": "山东",
     "ID": 139,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华北",
     "value": null
 }, {
     "name": "新疆",
     "ID": 140,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华西",
     "value": null
 }, {
     "name": "江苏",
     "ID": 141,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华东",
     "value": null
 }, {
     "name": "浙江",
     "ID": 142,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华东",
     "value": null
 }, {
     "name": "江西",
     "ID": 143,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华南",
     "value": null
 }, {
     "name": "湖北",
     "ID": 144,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华南",
     "value": null
 }, {
     "name": "广西",
     "ID": 145,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华西",
     "value": null
 }, {
     "name": "甘肃",
     "ID": 146,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华西",
     "value": null
 }, {
     "name": "山西",
     "ID": 147,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华北",
     "value": null
 }, {
     "name": "内蒙古",
     "ID": 148,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华北",
     "value": null
 }, {
     "name": "陕西",
     "ID": 149,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华西",
     "value": null
 }, {
     "name": "吉林",
     "ID": 150,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华北",
     "value": null
 }, {
     "name": "福建",
     "ID": 151,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华南",
     "value": null
 }, {
     "name": "贵州",
     "ID": 152,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华西",
     "value": null
 }, {
     "name": "广东",
     "ID": 153,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华南",
     "value": null
 }, {
     "name": "青海",
     "ID": 154,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华西",
     "value": null
 }, {
     "name": "西藏",
     "ID": 155,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华西",
     "value": null
 }, {
     "name": "四川",
     "ID": 156,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华西",
     "value": null
 }, {
     "name": "宁夏",
     "ID": 157,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华西",
     "value": null
 }, {
     "name": "海南",
     "ID": 158,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华南",
     "value": null
 }, {
     "name": "台湾",
     "ID": 159,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华南",
     "value": null
 }, {
     "name": "香港",
     "ID": 160,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华南",
     "value": null
 }, {
     "name": "澳门",
     "ID": 161,
     "ChannelType": "RKA",
     "ChannelName": "Map",
     "Region": "华南",
     "value": null
 }]
 option = {
     tooltip: {
         show: false
     },
     geo: {
         map: 'china',
         roam: true,
         itemStyle: {
             normal: {
                 borderColor: 'white'
             }
         }
     },
     series: [{
         type: 'scatter',
         coordinateSystem: 'geo', 
         symbolSize: 8,
         symbol: '',
         symbolRotate: 30,
         itemStyle: {
             normal: {
                 color: function(c) {
                     return getColor(c.data.state)
                 }
             }
         },
         label: {
             normal: {
                 show: true,
                 formatter: function(obj) { 
                     if(obj.data.ChannelName){
                         return obj.data.ChannelName;
                     }else
                     {
                         return '';
                     }
                 },
                 position: 'top',
                 textStyle: {
                     fontSize: 5,
                     color: '#fff',
                     textShadow:'10px 10px 10px rgba(255, 0, 0, .1)'
                 },
             },
             emphasis: {
                 show: true
             }
         },
     }, {
         type: 'map',
         geoIndex: 0,
         itemStyle: {
             normal: {
                 borderColor: 'white',
                 color: function(obj) {
                     var color = "";
                     switch (obj.data.Region) {
                         case "华北":
                             color = "#f3c937";
                             break;
                         case "华东":
                             color = "#083a8f";
                             break;
                         case "华南":
                             color = "#49296a";
                             break;
                         case "华西":
                             color = "#b3bb31";
                             break;
                     }
                     return color;
                 }
             }
         },
         data: data
     }]
 } 
 
 option.series[0].data=convertData(data);
 myChart.setOption(option, true);
 setInterval(function() {
     var conData=convertData(data); 
     option.series[0].data=conData;
     myChart.setOption(option, true);
     t++;
 }, 1000);