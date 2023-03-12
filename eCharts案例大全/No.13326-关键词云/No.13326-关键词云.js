var keywords = [
    {name: "大众", value: 3003},
    {name: "丰田", value: 452},
    {name: "本田", value: 224},
    {name: "奔驰", value: 5293},
    {name: "宝马", value: 349},
    {name: "奥迪", value: 734},
    {name: "福特", value: 4123},
    {name: "日产", value: 232},
    {name: "别克", value: 907},
    {name: "吉利", value: 386},
    {name: "现代", value: 2563},
    {name: "宝骏", value: 291},
    {name: "雪佛兰", value: 41},
    {name: "比亚迪", value: 1763},
    {name: "长安", value: 274},
    {name: "马自达", value: 830},
    {name: "起亚", value: 366},
    {name: "JEEP", value: 2480},
    {name: "哈弗", value: 1121},
    {name: "北汽绅宝", value: 404},
    {name: "雷克萨斯", value: 879},
    {name: "奇瑞", value: 232},
    {name: "保时捷", value: 164},
    {name: "沃尔沃", value: 270},
    {name: "凯迪拉克", value: 652},
    {name: "路虎", value: 862},
    {name: "铃木", value: 618},
    {name: "三菱", value: 141},
    {name: "特斯拉", value: 80},
    {name: "五菱", value: 210},
    {name: "北汽新能源", value: 832},
    {name: "斯柯达", value: 406},
    {name: "众泰", value: 877},
    {name: "荣威", value: 416},
    {name: "广汽传祺", value: 695},
    {name: "江淮", value: 701},
    {name: "标致", value: 556},
    {name: "捷豹", value: 328},
    {name: "玛莎拉蒂", value: 2457},
    {name: "红旗", value: 903},
    {name: "雪铁龙", value: 573},
    {name: "兰博基尼", value: 740},
    {name: "东风风神", value: 723},
    {name: "领克", value: 710},
    {name: "林肯", value: 456},
    {name: "法拉利", value: 330},
    {name: "北京汽车", value: 1569},
    {name: "劳斯莱斯", value: 682},
    {name: "英菲尼迪", value: 95},
    {name: "长城", value: 322},

    {name: "IPHONE", value: 1301},
    {name: "小米手机", value: 2484},
    {name: "VIVO", value: 2462},
    {name: "OPPO", value: 200},
    {name: "华为", value: 2594},
    {name: "荣耀", value: 2948},
    {name: "三星", value: 1724},
    {name: "努比亚", value: 2969},
    {name: "魅族", value: 1451},
    {name: "诺基亚", value: 3187},
    {name: "一加手机", value: 1072},
    {name: "摩托罗拉", value: 2793},
    {name: "锤子手机", value: 4326},
    {name: "中兴", value: 3321},
    {name: "金立", value: 636},
    {name: "HTC", value: 238},
    {name: "联想", value: 1043},
    {name: "美图手机", value: 116},
    {name: "黑莓", value: 1163},
    {name: "360", value: 1570},
    {name: "乐视手机", value: 2251},
    {name: "华硕", value: 455},
    {name: "LG", value: 2397},
    {name: "索尼", value: 1163},
    {name: "酷派", value: 272},
    {name: "E人E本", value: 683},
    {name: "黑鲨手机", value: 923},
    {name: "SUGAR", value: 2632},
    {name: "夏普", value: 223},
    {name: "索尼爱立信", value: 1428},
    {name: "威图", value: 137},
    {name: "飞利浦", value: 1145},
    {name: "中国移动", value: 252},
    {name: "谷歌", value: 2349},
    {name: "ZUK", value: 402},
    {name: "小辣椒手机", value: 835},
    {name: "大神", value: 1864},
    {name: "天语", value: 555},
    {name: "朵唯", value: 619},
    {name: "多普达", value: 3416},
    {name: "海信", value: 3298},
    {name: "奇酷", value: 1251},
    {name: "波导", value: 1472},
    {name: "微软", value: 2689},
    {name: "KOOBEE", value: 2084},
    {name: "传音", value: 996},
    {name: "IVVI", value: 212},
    {name: "中天", value: 221},
    {name: "NEC", value: 629},
    {name: "乐讯", value: 32}
];

var wordcloud_car_color =["#60ACFC", "#61D7D3", "#AEE498", "#32D3EB", "#999999"];

option = {

    title:{
      show: true,
      text: "关键词云",
      textStyle: {
          color: '#666666',
          fontSize: 14
      }
    },
    tooltip:{
          trigger: "item"
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true
            },
            restore: {
                show: true
            }
        }
    },
    series: [ {
        type: 'wordCloud',
        sizeRange: [10, 80],
        rotationRange: [-90, 90],
        rotationStep: 90,
        gridSize: 2,

        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // callback function, or a keyword present. Available presents are circle (default),
        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
        shape: 'square',

        //maskImage: maskImage,
        left: 'center',
        top: 'center',
        //width: '60%',
        //height: '80%',
        //right: null,
        //bottom: null,
        drawOutOfBound: false,
        textStyle: {
            normal: {
                //color: '#60ACFC',
                color: function () {
                  // 随机从颜色序列中取色
                  var index = Math.floor((Math.random()*wordcloud_car_color.length));
                  //console.log('index:'+index);
                  //console.log('colorOrder:'+colorOrder[index]);
                  return wordcloud_car_color[index];
                }
        },
            emphasis: {
                color: '#60ACFC',
                shadowBlur: 6,
                shadowColor: '#dddddd'
            }
        },
        data: keywords.sort(function (a, b) {
            return b.value  - a.value;
        })
    } ]
};