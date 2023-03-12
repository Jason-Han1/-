var logobig = "/asset/get/s/data-1513425570601-HyoscFffz.png";

var flower = "/asset/get/s/data-1513385158705-Bk1C3JzGf.png";

var eye = "/asset/get/s/data-1513384868731-BkpooJzfM.png";

var cup = "/asset/get/s/data-1513384473173-HyZXqyGMz.png";

var logo = "/asset/get/s/data-1513362149897-By017cZfM.png";

var butterfly = "/asset/get/s/data-1513361750858-Bk1w-5-ff.png";

var ren = "/asset/get/s/data-1513360501160-rkaOnYWMG.png";

var w=500;
var h=w/500*400;
var minsize=w/500*16;
var maxsize=w/500*70;

//马卡龙配色
var colorList = ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
    '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
    '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
];

var data = [{name: '爱',value: 324},{name: '博爱',value: 25},{name: '禅宗',value: 36},{name: '成长',value: 225},{name: '吃',value: 49},{name: '创业',value: 1},{name: '当下',value: 25},{name: '道德',value: 4},{name: '电影',value: 36},{name: '雕刻',value: 9},{name: '佛教',value: 1},{name: '孤独',value: 121},{name: '孩子',value: 144},{name: '灰暗',value: 1},{name: '绘画',value: 121},{name: '基督教',value: 16},{name: '建筑',value: 9},{name: '江湖',value: 4},{name: '教育',value: 144},{name: '科学',value: 4},{name: '历史',value: 196},{name: '伦理',value: 64},{name: '旅行',value: 64},{name: '美',value: 121},{name: '女人',value: 16},{name: '亲情',value: 144},{name: '趣味',value: 1},{name: '人性',value: 1},{name: '杀戮',value: 25},{name: '摄影',value: 1},{name: '生活品味',value: 256},{name: '时间',value: 16},{name: '死亡',value: 9},{name: '文化',value: 289},{name: '文学',value: 1},{name: '幸福',value: 36},{name: '性',value: 49},{name: '艺术',value: 196},{name: '音乐',value: 9},{name: '印度教',value: 1},{name: '园艺',value: 9},{name: '战争',value: 100},{name: '哲学',value: 1},{name: '篆刻',value: 1},{name: '自然',value: 9},{name: '自我',value: 121},{name: '自由',value: 36},{name: '宗教',value: 36},{name: '价值观',value: 4},{name: '思考',value: 1},{name: '植物',value: 1},{name: '梦想',value: 1},{name: '宠物',value: 1},{name: '服饰',value: 1},{name: '断舍离',value: 1},{name: '命运',value: 1},{name: '诗',value: 1},{name: '书法',value: 1},{name: '舞蹈',value: 1},{name: '戏曲',value: 1},{name: '飙车',value: 1},{name: '毒品',value: 1},{name: '宿命',value: 1},{name: '吴哥窟',value: 1}];

            var maskImage = new Image();

            var option = {
                title:{
                    text:"阅读内容标签词云图",
                    textStyle:{
                        fontSize:25,
                    }
                },
                series: [ {
                    type: 'wordCloud',
                    width: w,
                    height: h,
                    sizeRange: [minsize,maxsize],
                    rotationRange: [0, 45, 90, -45],
                    rotationStep: 45,
                    gridSize: 10,
                    shape: 'pentagon',
                    maskImage: maskImage,
                    textStyle: {
                        normal: {
                            color: function(v) {
                         
                         if (v.value > 60) {
                             //alert(v.value)
                             return colorList[0];  
                         } else if (v.value > 50) {
                             return colorList[1];
                         } else if (v.value > 40) {
                             return colorList[2];
                         }else if (v.value > 30) {
                             return colorList[3];
                         }else if (v.value > 20) {
                             return colorList[4];
                         }else if (v.value > 10) {
                             return colorList[5];
                         } else {
                             return '#7c4dff';
                         }
                     },
                        },
                        emphasis : {  
                    shadowBlur : 10,  
                    shadowColor : '#333'  
                }  
                    },
                    data: data
                } ],
                graphic: {
             elements: [{
                 type: 'image',
                 style: {
                     image: logobig,
                     width: 120,
                     height: 120
                 },
                 left: 'right',
                 top: 'bottom'
             }]
         }
            };

            maskImage.onload = function () {
                option.series[0].maskImage
                //setTimeout(function(){
                    //var myChart=echarts.getInstanceByDom($("#chart-panel")[0]);
                    myChart.setOption(option);
                //},1000);
            }

            maskImage.src = butterfly;


