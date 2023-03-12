//作者国籍数据


//题材数据
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



var data = [{name: '爱',value: 324},{name: '博爱',value: 25},{name: '禅宗',value: 36},{name: '成长',value: 225},{name: '吃',value: 49},{name: '创业',value: 1},{name: '当下',value: 25},{name: '道德',value: 4},{name: '电影',value: 36},{name: '雕刻',value: 9},{name: '佛教',value: 1},{name: '孤独',value: 121},{name: '孩子',value: 144},{name: '灰暗',value: 1},{name: '绘画',value: 121},{name: '基督教',value: 16},{name: '建筑',value: 9},{name: '江湖',value: 4},{name: '教育',value: 144},{name: '科学',value: 4},{name: '历史',value: 196},{name: '伦理',value: 64},{name: '旅行',value: 64},{name: '美',value: 121},{name: '女人',value: 16},{name: '亲情',value: 144},{name: '趣味',value: 1},{name: '人性',value: 1},{name: '杀戮',value: 25},{name: '摄影',value: 1},{name: '生活品味',value: 256},{name: '时间',value: 16},{name: '死亡',value: 9},{name: '文化',value: 289},{name: '文学',value: 1},{name: '幸福',value: 36},{name: '性',value: 49},{name: '艺术',value: 196},{name: '音乐',value: 9},{name: '印度教',value: 1},{name: '园艺',value: 9},{name: '战争',value: 100},{name: '哲学',value: 1},{name: '篆刻',value: 1},{name: '自然',value: 9},{name: '自我',value: 121},{name: '自由',value: 36},{name: '宗教',value: 36},{name: '价值观',value: 4},{name: '思考',value: 1},{name: '植物',value: 1},{name: '梦想',value: 1},{name: '宠物',value: 1},{name: '服饰',value: 1},{name: '断舍离',value: 1},{name: '命运',value: 1},{name: '诗',value: 1},{name: '书法',value: 1},{name: '舞蹈',value: 1},{name: '戏曲',value: 1},{name: '飙车',value: 1},{name: '毒品',value: 1},{name: '宿命',value: 1},{name: '吴哥窟',value: 1}];

            var maskImage = new Image();
var op = {
                title:{
                    text:"题材标签分析",
                },
                backgroundColor:'#fff',
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
                             return '#ff5252';  
                         } else if (v.value > 50) {
                             return '#ff6e40';
                         } else if (v.value > 40) {
                             return '#f9a825';
                         }else if (v.value > 30) {
                             return '#69f0ae';
                         }else if (v.value > 20) {
                             return '#18ffff';
                         }else if (v.value > 10) {
                             return '#448aff';
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
                
            };

            maskImage.onload = function () {
                op.series[0].maskImage
                //setTimeout(function(){
                    //var myChart=echarts.getInstanceByDom($("#chart-panel")[0]);
                    myChart.setOption(op);
                //},1000);
            }

            maskImage.src = butterfly;

//topn数据
var yAxisdata = ['奇特的一生', '美的沉思', '水浒传'];
var data = [20, 20, 51];

var yAxisdata1 = ['蒋勋破解达芬奇之美', '局外人', '我决定活得有趣'];
var data1 = [2, 2, 1];

var yAxisdata2 = ['蔡澜', '刘继荣', '蒋勋'];
var data2 = [3, 4, 12];

var yAxisdata3 = ['生活品味', '文化', '爱'];
var data3 = [16, 17, 18];

var yAxisdata3 = ['生活品味', '文化', '爱'];
var data3 = [16, 17, 18];

var yAxisdata4 = ['生活十讲', '崭新的理所当然', '美的沉思'];
var data4 = [15, 15, 26];

app.title = ['最难读的书\n《' + yAxisdata[yAxisdata.length - 1] + '》读了' + data[data.length - 1] + '天',
    '最快读完的书\n《' + yAxisdata1[yAxisdata1.length - 1] + '》读了' + data1[data1.length - 1] + '天',
    '读得最多的作者\n' + yAxisdata2[yAxisdata2.length - 1] + '  读了' + data2[data2.length - 1] + '本',
    '读得最多的题材\n【' + yAxisdata3[yAxisdata3.length - 1] + '】有' + data3[data3.length - 1] + '本书涉及',
    '涉及题材最多的书\n《' + yAxisdata4[yAxisdata4.length - 1] + '》涉及' + data4[data4.length - 1] + '个题材',
];
app.subtitle = ['阅读时长最长的书', '最快读完的书'];
var gridheight = '100%';

var cl=45;//图表距离左侧的距离

var chartWidth = (100-cl)+'%';
var chartleft = cl+'%';
var titleright=(100-cl)+'%';
var toplist = ['0%', '21%', '41%', '61%', '81%'];
var gridlist = [yAxisdata, yAxisdata1, yAxisdata2, yAxisdata3, yAxisdata4];

//马卡龙配色
var colorList = ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
    '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
    '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
];

//生成grid
getGrids = function() {
    gs = [];
    for (i = 0; i < toplist.length; i++) {
        g = {
            left: chartleft,
            //right: '35%',
            top: 1,
            width: chartWidth,
            height: gridheight,
            containLabel: true,
            borderColor: '#ccc',
            borderWidth: 2,
        };
        gs.push(g);
    }
    return gs;
};
var gs = getGrids();

//生成x轴
getxs = function() {
    xs = [];
    for (i = 0; i < toplist.length; i++) {
        x = {
            type: 'value',
            // max: 55,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            //gridIndex: i,
        };
        xs.push(x);
    }
    return xs;
};
var xs = getxs();

//生成y轴
var ys = [];

getys = function() {

    for (i = 0; i < gridlist.length; i++) {
        y = {
            type: 'category',
            data: gridlist[i],
            //gridIndex: i,
            axisLabel: {
                show: true,
                interval: 'auto',
                inside: false,
                rotate: 0,
                margin: 8,
                //formatter: fo(value, index) ,
                fontStyle: 'normal',
                fontWeight: 'bold',
                //fontSize: 18,
            },
        };
        ys.push(y);
    }
    return ys;
};
ys = getys();
for (i = 0; i < ys.length; i++) {
    ys[i].axisLabel.formatter = function(value, index) {
        return 3 - index;
    };
}
///生成title

getts = function() {
    ts = [];
    for (i = 0; i < app.title.length; i++) {
        t = {
        //top: toplist[i],
        text: app.title[i],
        right: titleright,
        textStyle: {
            //align: 'left',
            color: colorList[i],
            fontSize:16
        }
    };
        ts.push(t);
    }
    return ts;
};
var ts = getts();
//关系图数据
var lineColor='#e53935';

var nodes = [
  {name: 'what if？', symbolSize: 2, category: 'what if？'},
  {name: '恰到好处的孤独', symbolSize: 3, category: '恰到好处的孤独'},
  {name: '奇特的一生', symbolSize: 4, category: '奇特的一生'},
  {name: '二孩时代', symbolSize: 4, category: '二孩时代'},
  {name: '妈妈是最初的老师', symbolSize: 5, category: '妈妈是最初的老师'},
  {name: '世界因你而温柔', symbolSize: 5, category: '世界因你而温柔'},
  {name: '因为孤独的缘故', symbolSize: 5, category: '因为孤独的缘故'},
  {name: '幸福从不缺席', symbolSize: 5, category: '幸福从不缺席'},
  {name: '冰岛迷梦', symbolSize: 6, category: '冰岛迷梦'},
  {name: '窗边的小豆豆', symbolSize: 6, category: '窗边的小豆豆'},
  {name: '我不', symbolSize: 6, category: '我不'},
  {name: '从容的底气', symbolSize: 6, category: '从容的底气'},
  {name: '无聊的人生，我死也不要', symbolSize: 6, category: '无聊的人生，我死也不要'},
  {name: '种满院植物，安守四季时光', symbolSize: 6, category: '种满院植物，安守四季时光'},
  {name: '和你一起，我不怕老去', symbolSize: 6, category: '和你一起，我不怕老去'},
  {name: '禅宗兴起', symbolSize: 6, category: '禅宗兴起'},
  {name: '局外人', symbolSize: 6, category: '局外人'},
  {name: '容忍与自由', symbolSize: 7, category: '容忍与自由'},
  {name: '我决定活得有趣', symbolSize: 7, category: '我决定活得有趣'},
  {name: '不如任性过生活', symbolSize: 7, category: '不如任性过生活'},
  {name: '品味四讲', symbolSize: 7, category: '品味四讲'},
  {name: '蒋勋破解梵高之美', symbolSize: 7, category: '蒋勋破解梵高之美'},
  {name: '爱，让我们彼此听见', symbolSize: 7, category: '爱，让我们彼此听见'},
  {name: '没有什么了不起', symbolSize: 7, category: '没有什么了不起'},
  {name: '坐在路边鼓掌的人', symbolSize: 7, category: '坐在路边鼓掌的人'},
  {name: '自由疯长', symbolSize: 7, category: '自由疯长'},
  {name: '小豆豆与我', symbolSize: 8, category: '小豆豆与我'},
  {name: '蒋勋破解莫奈之美', symbolSize: 9, category: '蒋勋破解莫奈之美'},
  {name: '我承诺给你的美丽新世界', symbolSize: 10, category: '我承诺给你的美丽新世界'},
  {name: '无关岁月', symbolSize: 11, category: '无关岁月'},
  {name: '以自己喜欢的方式过一生', symbolSize: 11, category: '以自己喜欢的方式过一生'},
  {name: '吴哥之美', symbolSize: 11, category: '吴哥之美'},
  {name: '蒋勋破解高更之美', symbolSize: 11, category: '蒋勋破解高更之美'},
  {name: '孤独六讲', symbolSize: 12, category: '孤独六讲'},
  {name: '水浒传', symbolSize: 13, category: '水浒传'},
  {name: '蒋勋破解米开朗基罗', symbolSize: 14, category: '蒋勋破解米开朗基罗'},
  {name: '蒋勋破解达芬奇之美', symbolSize: 14, category: '蒋勋破解达芬奇之美'},
  {name: '生活十讲', symbolSize: 15, category: '生活十讲'},
  {name: '崭新的理所当然', symbolSize: 15, category: '崭新的理所当然'},
  {name: '美的沉思', symbolSize: 26, category: '美的沉思'},
  {name: '文学', symbolSize: 1, category: '文学'},
  {name: '篆刻', symbolSize: 1, category: '篆刻'},
 {name: '梦想', symbolSize: 1, category: '梦想'},
  {name: '长篇', symbolSize: 1, category: '长篇'},
  {name: '宠物', symbolSize: 1, category: '宠物'},
  {name: '佛教', symbolSize: 1, category: '佛教'},
  {name: '服饰', symbolSize: 1, category: '服饰'},
  {name: '命运', symbolSize: 1, category: '命运'},
  {name: '宋朝', symbolSize: 1, category: '宋朝'},
  {name: '诗', symbolSize: 1, category: '诗'},
  {name: '人性', symbolSize: 1, category: '人性'},
  {name: '书法', symbolSize: 1, category: '书法'},
  {name: '印度教', symbolSize: 1, category: '印度教'},
  {name: '舞蹈', symbolSize: 1, category: '舞蹈'},
  {name: '思考', symbolSize: 1, category: '思考'},
  {name: '戏曲', symbolSize: 1, category: '戏曲'},
  {name: '灰暗', symbolSize: 1, category: '灰暗'},
  {name: '飙车', symbolSize: 1, category: '飙车'},
  {name: '趣味', symbolSize: 1, category: '趣味'},
  {name: '毒品', symbolSize: 1, category: '毒品'},
  {name: '创业', symbolSize: 1, category: '创业'},
  {name: '宿命', symbolSize: 1, category: '宿命'},
  {name: '断舍离', symbolSize: 1, category: '断舍离'},
  {name: '吴哥窟', symbolSize: 1, category: '吴哥窟'},
  {name: '植物', symbolSize: 1, category: '植物'},
  {name: '名著', symbolSize: 1, category: '名著'},
  {name: '摄影', symbolSize: 1, category: '摄影'},
  {name: '经典', symbolSize: 1, category: '经典'},
  {name: '江湖', symbolSize: 2, category: '江湖'},
  {name: '哲学', symbolSize: 2, category: '哲学'},
  {name: '科学', symbolSize: 2, category: '科学'},
  {name: '道德', symbolSize: 2, category: '道德'},
  {name: '价值观', symbolSize: 2, category: '价值观'},
  {name: '自然', symbolSize: 3, category: '自然'},
  {name: '音乐', symbolSize: 3, category: '音乐'},
  {name: '园艺', symbolSize: 3, category: '园艺'},
  {name: '雕刻', symbolSize: 3, category: '雕刻'},
  {name: '建筑', symbolSize: 3, category: '建筑'},
  {name: '死亡', symbolSize: 4, category: '死亡'},
  {name: '女人', symbolSize: 4, category: '女人'},
  {name: '时间', symbolSize: 4, category: '时间'},
  {name: '基督教', symbolSize: 4, category: '基督教'},
  {name: '杀戮', symbolSize: 5, category: '杀戮'},
  {name: '当下', symbolSize: 5, category: '当下'},
  {name: '博爱', symbolSize: 5, category: '博爱'},
  {name: '幸福', symbolSize: 6, category: '幸福'},
  {name: '禅宗', symbolSize: 6, category: '禅宗'},
  {name: '宗教', symbolSize: 6, category: '宗教'},
  {name: '电影', symbolSize: 6, category: '电影'},
  {name: '自由', symbolSize: 6, category: '自由'},
  {name: '吃', symbolSize: 7, category: '吃'},
  {name: '性', symbolSize: 8, category: '性'},
  {name: '伦理', symbolSize: 8, category: '伦理'},
  {name: '旅行', symbolSize: 8, category: '旅行'},
  {name: '战争', symbolSize: 10, category: '战争'},
  {name: '自我', symbolSize: 11, category: '自我'},
  {name: '美', symbolSize: 11, category: '美'},
  {name: '绘画', symbolSize: 11, category: '绘画'},
  {name: '孤独', symbolSize: 11, category: '孤独'},
  {name: '孩子', symbolSize: 12, category: '孩子'},
  {name: '教育', symbolSize: 12, category: '教育'},
  {name: '亲情', symbolSize: 12, category: '亲情'},
  {name: '历史', symbolSize: 14, category: '历史'},
  {name: '艺术', symbolSize: 14, category: '艺术'},
  {name: '成长', symbolSize: 15, category: '成长'},
  {name: '生活品味', symbolSize: 16, category: '生活品味'},
  {name: '文化', symbolSize: 17, category: '文化'},
  {name: '爱', symbolSize: 18, category: '爱'}
];

var legends = [
  {name: 'what if？'},
  {name: '恰到好处的孤独'},
  {name: '奇特的一生'},
  {name: '二孩时代'},
  {name: '妈妈是最初的老师'},
  {name: '世界因你而温柔'},
  {name: '因为孤独的缘故'},
  {name: '幸福从不缺席'},
  {name: '冰岛迷梦'},
  {name: '窗边的小豆豆'},
  {name: '我不'},
  {name: '从容的底气'},
  {name: '无聊的人生，我死也不要'},
  {name: '种满院植物，安守四季时光'},
  {name: '和你一起，我不怕老去'},
  {name: '禅宗兴起'},
  {name: '局外人'},
  {name: '容忍与自由'},
  {name: '我决定活得有趣'},
  {name: '不如任性过生活'},
  {name: '品味四讲'},
  {name: '蒋勋破解梵高之美'},
  {name: '爱，让我们彼此听见'},
  {name: '没有什么了不起'},
  {name: '坐在路边鼓掌的人'},
  {name: '自由疯长'},
  {name: '小豆豆与我'},
  {name: '蒋勋破解莫奈之美'},
  {name: '我承诺给你的美丽新世界'},
  {name: '无关岁月'},
  {name: '以自己喜欢的方式过一生'},
  {name: '吴哥之美'},
  {name: '蒋勋破解高更之美'},
  {name: '孤独六讲'},
  {name: '蒋勋破解米开朗基罗'},
  {name: '蒋勋破解达芬奇之美'},
  {name: '生活十讲'},
  {name: '崭新的理所当然'},
  {name: '美的沉思'},
  {name: '文学'},
  {name: '篆刻'},
  {name: '水浒传'},
  {name: '梦想'},
  {name: '长篇'},
  {name: '宠物'},
  {name: '佛教'},
  {name: '服饰'},
  {name: '命运'},
  {name: '宋朝'},
  {name: '诗'},
  {name: '人性'},
  {name: '书法'},
  {name: '印度教'},
  {name: '舞蹈'},
  {name: '思考'},
  {name: '戏曲'},
  {name: '灰暗'},
  {name: '飙车'},
  {name: '趣味'},
  {name: '毒品'},
  {name: '创业'},
  {name: '宿命'},
  {name: '断舍离'},
  {name: '吴哥窟'},
  {name: '植物'},
  {name: '名著'},
  {name: '摄影'},
  {name: '经典'},
  {name: '江湖'},
  {name: '哲学'},
  {name: '科学'},
  {name: '道德'},
  {name: '价值观'},
  {name: '自然'},
  {name: '音乐'},
  {name: '园艺'},
  {name: '雕刻'},
  {name: '建筑'},
  {name: '死亡'},
  {name: '女人'},
  {name: '时间'},
  {name: '基督教'},
  {name: '杀戮'},
  {name: '当下'},
  {name: '博爱'},
  {name: '幸福'},
  {name: '禅宗'},
  {name: '宗教'},
  {name: '电影'},
  {name: '自由'},
  {name: '吃'},
  {name: '性'},
  {name: '伦理'},
  {name: '旅行'},
  {name: '战争'},
  {name: '自我'},
  {name: '美'},
  {name: '绘画'},
  {name: '孤独'},
  {name: '孩子'},
  {name: '教育'},
  {name: '亲情'},
  {name: '历史'},
  {name: '艺术'},
  {name: '成长'},
  {name: '生活品味'},
  {name: '文化'},
  {name: '爱'}
];

var links = [{source: '崭新的理所当然',target: '幸福'},{source: '崭新的理所当然',target: '生活品味'},{source: '崭新的理所当然',target: '自我'},{source: '崭新的理所当然',target: '文化'},{source: '崭新的理所当然',target: '价值观'},{source: '崭新的理所当然',target: '时间'},{source: '崭新的理所当然',target: '思考'},{source: '崭新的理所当然',target: '吃'},{source: '崭新的理所当然',target: '植物'},{source: '崭新的理所当然',target: '梦想'},{source: '崭新的理所当然',target: '宠物'},{source: '崭新的理所当然',target: '服饰'},{source: '崭新的理所当然',target: '当下'},{source: '崭新的理所当然',target: '断舍离'},{source: '崭新的理所当然',target: '亲情'},{source: '以自己喜欢的方式过一生',target: '幸福'},{source: '以自己喜欢的方式过一生',target: '成长'},{source: '以自己喜欢的方式过一生',target: '生活品味'},{source: '以自己喜欢的方式过一生',target: '吃'},{source: '以自己喜欢的方式过一生',target: '亲情'},{source: '以自己喜欢的方式过一生',target: '女人'},{source: '以自己喜欢的方式过一生',target: '价值观'},{source: '以自己喜欢的方式过一生',target: '音乐'},{source: '以自己喜欢的方式过一生',target: '孤独'},{source: '以自己喜欢的方式过一生',target: '成长'},{source: '以自己喜欢的方式过一生',target: '命运'},{source: '美的沉思',target: '美'},{source: '美的沉思',target: '艺术'},{source: '美的沉思',target: '历史'},{source: '美的沉思',target: '文化'},{source: '美的沉思',target: '宗教'},{source: '美的沉思',target: '生活品味'},{source: '美的沉思',target: '绘画'},{source: '美的沉思',target: '雕刻'},{source: '美的沉思',target: '篆刻'},{source: '美的沉思',target: '佛教'},{source: '美的沉思',target: '孤独'},{source: '美的沉思',target: '自我'},{source: '美的沉思',target: '音乐'},{source: '美的沉思',target: '性'},{source: '美的沉思',target: '诗'},{source: '美的沉思',target: '书法'},{source: '美的沉思',target: '电影'},{source: '美的沉思',target: '战争'},{source: '美的沉思',target: '杀戮'},{source: '美的沉思',target: '舞蹈'},{source: '美的沉思',target: '爱'},{source: '美的沉思',target: '戏曲'},{source: '美的沉思',target: '飙车'},{source: '美的沉思',target: '毒品'},{source: '美的沉思',target: '宿命'},{source: '美的沉思',target: '吴哥窟'},{source: '从容的底气',target: '爱'},{source: '从容的底气',target: '禅宗'},{source: '从容的底气',target: '当下'},{source: '从容的底气',target: '幸福'},{source: '从容的底气',target: '生活品味'},{source: '从容的底气',target: '博爱'},{source: '世界因你而温柔',target: '博爱'},{source: '世界因你而温柔',target: '禅宗'},{source: '世界因你而温柔',target: '当下'},{source: '世界因你而温柔',target: '幸福'},{source: '世界因你而温柔',target: '亲情'},{source: '二孩时代',target: '教育'},{source: '二孩时代',target: '亲情'},{source: '二孩时代',target: '爱'},{source: '二孩时代',target: '孩子'},{source: '禅宗兴起',target: '禅宗'},{source: '禅宗兴起',target: '文化'},{source: '禅宗兴起',target: '历史'},{source: '禅宗兴起',target: '基督教'},{source: '禅宗兴起',target: '宗教'},{source: '禅宗兴起',target: '战争'},{source: '幸福从不缺席',target: '幸福'},{source: '幸福从不缺席',target: '禅宗'},{source: '幸福从不缺席',target: '当下'},{source: '幸福从不缺席',target: '爱'},{source: '幸福从不缺席',target: '亲情'},{source: '我承诺给你的美丽新世界',target: '旅行'},{source: '我承诺给你的美丽新世界',target: '孩子'},{source: '我承诺给你的美丽新世界',target: '教育'},{source: '我承诺给你的美丽新世界',target: '园艺'},{source: '我承诺给你的美丽新世界',target: '文化'},{source: '我承诺给你的美丽新世界',target: '生活品味'},{source: '我承诺给你的美丽新世界',target: '艺术'},{source: '我承诺给你的美丽新世界',target: '美'},{source: '我承诺给你的美丽新世界',target: '爱'},{source: '我承诺给你的美丽新世界',target: '自然'},{source: '种满院植物，安守四季时光',target: '自然'},{source: '种满院植物，安守四季时光',target: '园艺'},{source: '种满院植物，安守四季时光',target: '自我'},{source: '种满院植物，安守四季时光',target: '成长'},{source: '种满院植物，安守四季时光',target: '创业'},{source: '种满院植物，安守四季时光',target: '生活品味'},{source: '恰到好处的孤独',target: '孤独'},{source: '恰到好处的孤独',target: '成长'},{source: '恰到好处的孤独',target: '自我'},{source: '自由疯长',target: '孩子'},{source: '自由疯长',target: '教育'},{source: '自由疯长',target: '旅行'},{source: '自由疯长',target: '文化'},{source: '自由疯长',target: '生活品味'},{source: '自由疯长',target: '自由'},{source: '自由疯长',target: '爱'},{source: '和你一起，我不怕老去',target: '爱'},{source: '和你一起，我不怕老去',target: '亲情'},{source: '和你一起，我不怕老去',target: '博爱'},{source: '和你一起，我不怕老去',target: '孩子'},{source: '和你一起，我不怕老去',target: '教育'},{source: '和你一起，我不怕老去',target: '自由'},{source: '坐在路边鼓掌的人',target: '爱'},{source: '坐在路边鼓掌的人',target: '亲情'},{source: '坐在路边鼓掌的人',target: '博爱'},{source: '坐在路边鼓掌的人',target: '孩子'},{source: '坐在路边鼓掌的人',target: '教育'},{source: '坐在路边鼓掌的人',target: '自由'},{source: '坐在路边鼓掌的人',target: '亲情'},{source: '爱，让我们彼此听见',target: '爱'},{source: '爱，让我们彼此听见',target: '亲情'},{source: '爱，让我们彼此听见',target: '博爱'},{source: '爱，让我们彼此听见',target: '孩子'},{source: '爱，让我们彼此听见',target: '教育'},{source: '爱，让我们彼此听见',target: '自由'},{source: '爱，让我们彼此听见',target: '亲情'},{source: '窗边的小豆豆',target: '爱'},{source: '窗边的小豆豆',target: '自由'},{source: '窗边的小豆豆',target: '教育'},{source: '窗边的小豆豆',target: '孩子'},{source: '窗边的小豆豆',target: '成长'},{source: '窗边的小豆豆',target: '战争'},{source: '小豆豆与我',target: '爱'},{source: '小豆豆与我',target: '孩子'},{source: '小豆豆与我',target: '教育'},{source: '小豆豆与我',target: '生活品味'},{source: '小豆豆与我',target: '文化'},{source: '小豆豆与我',target: '园艺'},{source: '小豆豆与我',target: '成长'},{source: '小豆豆与我',target: '战争'},{source: '奇特的一生',target: '时间'},{source: '奇特的一生',target: '科学'},{source: '奇特的一生',target: '生活品味'},{source: '奇特的一生',target: '自我'},{source: '孤独六讲',target: '孤独'},{source: '孤独六讲',target: '自我'},{source: '孤独六讲',target: '成长'},{source: '孤独六讲',target: '历史'},{source: '孤独六讲',target: '性'},{source: '孤独六讲',target: '爱'},{source: '孤独六讲',target: '文化'},{source: '孤独六讲',target: '生活品味'},{source: '孤独六讲',target: '艺术'},{source: '孤独六讲',target: '教育'},{source: '孤独六讲',target: '孩子'},{source: '孤独六讲',target: '伦理'},{source: '妈妈是最初的老师',target: '孩子'},{source: '妈妈是最初的老师',target: '教育'},{source: '妈妈是最初的老师',target: '爱'},{source: '妈妈是最初的老师',target: '文化'},{source: '妈妈是最初的老师',target: '成长'},{source: '水浒传',target: '历史'},{source: '水浒传',target: '杀戮'},{source: '水浒传',target: '战争'},{source: '水浒传',target: '江湖'},{source: '水浒传',target: '禅宗'},{source: '水浒传',target: '人性'},{source: '水浒传',target: '名著'},{source: '水浒传',target: '经典'},{source: '水浒传',target: '宋朝'},{source: '水浒传',target: '死亡'},{source: '水浒传',target: '长篇'},{source: '水浒传',target: '性'},{source: '水浒传',target: '哲学'},{source: '生活十讲',target: '生活品味'},{source: '生活十讲',target: '文化'},{source: '生活十讲',target: '孤独'},{source: '生活十讲',target: '历史'},{source: '生活十讲',target: '艺术'},{source: '生活十讲',target: '美'},{source: '生活十讲',target: '时间'},{source: '生活十讲',target: '当下'},{source: '生活十讲',target: '战争'},{source: '生活十讲',target: '教育'},{source: '生活十讲',target: '孩子'},{source: '生活十讲',target: '伦理'},{source: '生活十讲',target: '爱'},{source: '生活十讲',target: '哲学'},{source: '生活十讲',target: '水浒传'},{source: '无关岁月',target: '艺术'},{source: '无关岁月',target: '爱'},{source: '无关岁月',target: '禅宗'},{source: '无关岁月',target: '绘画'},{source: '无关岁月',target: '宗教'},{source: '无关岁月',target: '基督教'},{source: '无关岁月',target: '音乐'},{source: '无关岁月',target: '电影'},{source: '无关岁月',target: '伦理'},{source: '无关岁月',target: '历史'},{source: '无关岁月',target: '战争'},{source: '无聊的人生，我死也不要',target: '成长'},{source: '无聊的人生，我死也不要',target: '电影'},{source: '无聊的人生，我死也不要',target: '艺术'},{source: '无聊的人生，我死也不要',target: '历史'},{source: '无聊的人生，我死也不要',target: '绘画'},{source: '无聊的人生，我死也不要',target: '文化'},{source: '局外人',target: '亲情'},{source: '局外人',target: '伦理'},{source: '局外人',target: '文学'},{source: '局外人',target: '灰暗'},{source: '局外人',target: '杀戮'},{source: '局外人',target: '性'},{source: '不如任性过生活',target: '旅行'},{source: '不如任性过生活',target: '吃'},{source: '不如任性过生活',target: '女人'},{source: '不如任性过生活',target: '电影'},{source: '不如任性过生活',target: '文化'},{source: '不如任性过生活',target: '生活品味'},{source: '不如任性过生活',target: '绘画'},{source: '我决定活得有趣',target: '旅行'},{source: '我决定活得有趣',target: '吃'},{source: '我决定活得有趣',target: '女人'},{source: '我决定活得有趣',target: '电影'},{source: '我决定活得有趣',target: '文化'},{source: '我决定活得有趣',target: '生活品味'},{source: '我决定活得有趣',target: '绘画'},{source: '没有什么了不起',target: '旅行'},{source: '没有什么了不起',target: '吃'},{source: '没有什么了不起',target: '女人'},{source: '没有什么了不起',target: '电影'},{source: '没有什么了不起',target: '文化'},{source: '没有什么了不起',target: '生活品味'},{source: '没有什么了不起',target: '绘画'},{source: '容忍与自由',target: '历史'},{source: '容忍与自由',target: '教育'},{source: '容忍与自由',target: '文化'},{source: '容忍与自由',target: '生活品味'},{source: '容忍与自由',target: '孩子'},{source: '容忍与自由',target: '道德'},{source: '容忍与自由',target: '自由'},{source: '我不',target: '江湖'},{source: '我不',target: '亲情'},{source: '我不',target: '爱'},{source: '我不',target: '旅行'},{source: '我不',target: '成长'},{source: '我不',target: '吃'},{source: 'what if？',target: '趣味'},{source: 'what if？',target: '科学'},{source: '品味四讲',target: '生活品味'},{source: '品味四讲',target: '吃'},{source: '品味四讲',target: '文化'},{source: '品味四讲',target: '艺术'},{source: '品味四讲',target: '时间'},{source: '品味四讲',target: '幸福'},{source: '品味四讲',target: '美'},{source: '蒋勋破解梵高之美',target: '孤独'},{source: '蒋勋破解梵高之美',target: '美'},{source: '蒋勋破解梵高之美',target: '艺术'},{source: '蒋勋破解梵高之美',target: '绘画'},{source: '蒋勋破解梵高之美',target: '自我'},{source: '蒋勋破解梵高之美',target: '成长'},{source: '蒋勋破解梵高之美',target: '历史'},{source: '蒋勋破解达芬奇之美',target: '孤独'},{source: '蒋勋破解达芬奇之美',target: '美'},{source: '蒋勋破解达芬奇之美',target: '艺术'},{source: '蒋勋破解达芬奇之美',target: '绘画'},{source: '蒋勋破解达芬奇之美',target: '自我'},{source: '蒋勋破解达芬奇之美',target: '成长'},{source: '蒋勋破解达芬奇之美',target: '历史'},{source: '蒋勋破解达芬奇之美',target: '战争'},{source: '蒋勋破解达芬奇之美',target: '杀戮'},{source: '蒋勋破解达芬奇之美',target: '性'},{source: '蒋勋破解达芬奇之美',target: '伦理'},{source: '蒋勋破解达芬奇之美',target: '建筑'},{source: '蒋勋破解达芬奇之美',target: '宗教'},{source: '蒋勋破解达芬奇之美',target: '基督教'},{source: '蒋勋破解莫奈之美',target: '孤独'},{source: '蒋勋破解莫奈之美',target: '美'},{source: '蒋勋破解莫奈之美',target: '艺术'},{source: '蒋勋破解莫奈之美',target: '绘画'},{source: '蒋勋破解莫奈之美',target: '自我'},{source: '蒋勋破解莫奈之美',target: '成长'},{source: '蒋勋破解莫奈之美',target: '历史'},{source: '蒋勋破解莫奈之美',target: '死亡'},{source: '蒋勋破解莫奈之美',target: '爱'},{source: '蒋勋破解米开朗基罗',target: '孤独'},{source: '蒋勋破解米开朗基罗',target: '美'},{source: '蒋勋破解米开朗基罗',target: '艺术'},{source: '蒋勋破解米开朗基罗',target: '绘画'},{source: '蒋勋破解米开朗基罗',target: '自我'},{source: '蒋勋破解米开朗基罗',target: '成长'},{source: '蒋勋破解米开朗基罗',target: '历史'},{source: '蒋勋破解米开朗基罗',target: '战争'},{source: '蒋勋破解米开朗基罗',target: '死亡'},{source: '蒋勋破解米开朗基罗',target: '性'},{source: '蒋勋破解米开朗基罗',target: '伦理'},{source: '蒋勋破解米开朗基罗',target: '建筑'},{source: '蒋勋破解米开朗基罗',target: '宗教'},{source: '蒋勋破解米开朗基罗',target: '基督教'},{source: '蒋勋破解高更之美',target: '孤独'},{source: '蒋勋破解高更之美',target: '美'},{source: '蒋勋破解高更之美',target: '艺术'},{source: '蒋勋破解高更之美',target: '绘画'},{source: '蒋勋破解高更之美',target: '自我'},{source: '蒋勋破解高更之美',target: '成长'},{source: '蒋勋破解高更之美',target: '历史'},{source: '蒋勋破解高更之美',target: '死亡'},{source: '蒋勋破解高更之美',target: '性'},{source: '蒋勋破解高更之美',target: '伦理'},{source: '蒋勋破解高更之美',target: '雕刻'},{source: '吴哥之美',target: '美'},{source: '吴哥之美',target: '艺术'},{source: '吴哥之美',target: '雕刻'},{source: '吴哥之美',target: '建筑'},{source: '吴哥之美',target: '宗教'},{source: '吴哥之美',target: '印度教'},{source: '吴哥之美',target: '历史'},{source: '吴哥之美',target: '战争'},{source: '吴哥之美',target: '杀戮'},{source: '吴哥之美',target: '文化'},{source: '吴哥之美',target: '旅行'},{source: '因为孤独的缘故',target: '孤独'},{source: '因为孤独的缘故',target: '爱'},{source: '因为孤独的缘故',target: '性'},{source: '因为孤独的缘故',target: '伦理'},{source: '因为孤独的缘故',target: '道德'},{source: '冰岛迷梦',target: '美'},{source: '冰岛迷梦',target: '艺术'},{source: '冰岛迷梦',target: '摄影'},{source: '冰岛迷梦',target: '旅行'},{source: '冰岛迷梦',target: '文化'},{source: '冰岛迷梦',target: '自然'}];



////////////////////////////////////


options = [
    //logo
    {
        title:{
            text:'2017年个人阅读大数据分析',
            left:60,
            top:20,
            textStyle:{
                fontSize:25
            }
        },
        graphic: {
                 elements: [{
                     type: 'image',
                     style: {
                         image: logobig,
                         width: 60,
                         height: 60
                     },
                     left: 'left',
                     top: 'top'
                 }]
                }
        
    },
    //2
    
{
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: ts[0],
    grid:gs[0],
    xAxis: xs[0],
    yAxis: ys[0],
    series: [{
            name: '阅读时长',
            type: 'bar',
            stack: '总量',
            //barWidth: 5,
            data: data,

            itemStyle: {
                normal: {
                    barBorderRadius: [0, 5, 5, 0], //（顺时针左上，右上，右下，左下）,
                    shadowColor: '#aaa',
                    shadowBlur: 15,
                    shadowOffsetX: 5,
                    shadowOffsetY: 4,
                    color: function(params) {
                        // build a color map as your need.

                        return colorList[params.dataIndex];
                    },
                    label: {
                        show: true,
                        position: 'insideLeft',
                        formatter: '{b}：{c}天',
                        //fontSize: 18,
                        fontWeight: 'bold'
                    }
                }
            },
        }

    ]
},
//3
{
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: ts[1],
    grid:gs[0],
    xAxis: xs[1],
    yAxis: ys[1],
    series: [{
            name: '最快读完',
            type: 'bar',
            //barWidth: 30,
            data: data1,
            
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 5, 5, 0], //（顺时针左上，右上，右下，左下）,
                    shadowColor: '#aaa',
                    shadowBlur: 15,
                    shadowOffsetX: 5,
                    shadowOffsetY: 4,
                    color: function(params) {
                        // build a color map as your need.

                        return colorList[params.dataIndex + 3];
                    },
                    label: {
                        show: true,
                        position: 'insideLeft',
                        formatter: '{b}：{c}天',
                        //fontSize: 18,
                        fontWeight: 'bold'
                    }
                }
            },
        }]
},
//4
{
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: ts[2],
    grid:gs[0],
    xAxis: xs[2],
    yAxis: ys[2],
    series: [{
            name: '最爱作者',
            type: 'bar',
            //barWidth: 30,
            data: data2,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 5, 5, 0], //（顺时针左上，右上，右下，左下）,
                    shadowColor: '#aaa',
                    shadowBlur: 15,
                    shadowOffsetX: 5,
                    shadowOffsetY: 4,
                    color: function(params) {
                        // build a color map as your need.

                        return colorList[params.dataIndex + 6];
                    },
                    label: {
                        show: true,
                        position: 'insideLeft',
                        formatter: '{b}：{c}本',
                        //fontSize: 18,
                        fontWeight: 'bold'
                    }
                }
            },
        }]
},
{
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: ts[3],
    grid:gs[0],
    xAxis: xs[3],
    yAxis: ys[3],
    series: [ {
            name: '最爱题材',
            type: 'bar',
            //barWidth: 30,
            data: data3,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 5, 5, 0], //（顺时针左上，右上，右下，左下）,
                    shadowColor: '#aaa',
                    shadowBlur: 15,
                    shadowOffsetX: 5,
                    shadowOffsetY: 4,
                    color: function(params) {
                        // build a color map as your need.
                        return colorList[params.dataIndex + 9];
                    },
                    label: {
                        show: true,
                        position: 'insideLeft',
                        formatter: '{b}：{c}本',
                        //fontSize: 18,
                        fontWeight: 'bold'
                    }
                }
            },
        }]
}
,
{
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: ts[4],
    grid:gs[0],
    xAxis: xs[4],
    yAxis: ys[4],
    series: [ {
            name: '题材最多的书',
            type: 'bar',
            //barWidth: 30,
            data: data4,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 5, 5, 0], //（顺时针左上，右上，右下，左下）,
                    shadowColor: '#aaa',
                    shadowBlur: 15,
                    shadowOffsetX: 5,
                    shadowOffsetY: 4,
                    color: function(params) {
                        // build a color map as your need.
                        return colorList[params.dataIndex + 12];
                    },
                    label: {
                        show: true,
                        position: 'insideLeft',
                        formatter: '{b}：{c}本',
                        //fontSize: 18,
                        fontWeight: 'bold'
                    }
                }
            },
        }]
}
,
{
         title:{
            text:'作者国籍阅读数量分析',
            //left:0,
            //top:20,
            textStyle:{
               // fontSize:18
            }
        },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    
    series: [{
        name: '2017年',
        type: 'pie',
        selectedMode: 'single',
        avoidLabelOverlap: true,
        radius: ['0%', '0%'],

        label: {
            normal: {
                formatter: '{b}\n总计：{c}本  ',
                //fontSize: 18,
                fontStyle :'bolder',
                position: 'center',
                verticalAlign:'middle'
                
            }
        },
        data: [ {
                name: '2017年',
                value: 40,
                //selected: true
            }

        ]
    },{
        name: '国籍',
        type: 'pie',
        selectedMode: 'single',
        avoidLabelOverlap: true,
        radius: ['20%', '35%'],

        label: {
            normal: {
                formatter: '{b}：{c}  ',
                //fontSize:15,
                position: 'inside'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [ {
                name: '台湾',
                value: 22,
                //selected: true
            },{
                name: '大陆',
                value: 11
            }, {
                name: '俄',
                value: 1
            }, {
                name: '法国',
                value: 1
            }, {
                name: '美国',
                value: 1
            }, {
                name: '日本',
                value: 4
            },

        ]
    }, {
        name: '作者',
        type: 'pie',
        //roseType :'radius',
        radius: ['40%', '60%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                formatter: '{b}：{per|{c}}',
                //backgroundColor: '#333',
                //borderColor: '#aaa',
                //borderWidth: 1,
                //borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                //fontSize: 16,
                padding: [3, 3, 3, 3],
                rich: {

                    per: {
                        //color: '#eee',
                        //backgroundColor: '#333',
                        padding: [2, 2,2,2],
                        borderRadius: 10,
                        //borderColor: '#aaa',
                        borderWidth: 1,
                        fontSize: 16,
                        fontStyle:'bold'
                    }
                }
            }
        },
        labelLine: {
            normal: {
                show: true,
                //length: 50,
                //length2: 0,
                smooth: false,

            },
        },

        data: [ {
                name: '蔡澜',
                value: 3,
            }, {
                name: '蔡颖卿',
                value: 1,
            }, {
                name: '蒋勋',
                value: 12
            }, {
                name: '林清玄',
                value: 2
            }, {
                name: '刘继荣',
                value: 4
            },{
                name: '大冰',
                value: 1
            }, {
                name: '冯颖',
                value: 1
            }, {
                name: '胡适',
                value: 1
            }, {
                name: '林特特',
                value: 1
            }, {
                name: '罗晓韵',
                value: 1
            }, {
                name: '麦子奇',
                value: 1
            }, {
                name: '施耐庵',
                value: 1
            }, {
                name: '兔毛爹',
                value: 1
            }, {
                name: '瑶淼',
                value: 1
            }, {
                name: '易中天',
                value: 1
            }, {
                name: '植觉先生',
                value: 1
            }, {
                name: '格拉宁',
                value: 1
            }, {
                name: '加缪',
                value: 1
            }, {
                name: '兰道尔·门罗',
                value: 1
            }, {
                name: '北野武',
                value: 1
            }, {
                name: '黑柳朝',
                value: 1
            }, {
                name: '黑柳彻子',
                value: 1
            }, {
                name: '松浦弥太郎',
                value: 1
            },

        ]
    }]
},op,
{
    title: {
        text: '书与内容关系图'
    },
    animationDurationUpdate: 2000,
    animationEasingUpdate: 'quinticInOut',
    
    series: [{
        type: 'graph',
        //tooltip: {},
        width: '70%',
        height: '80%',
        ribbonType: true,
        layout: 'circular',
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [0, 10],
        circular: {
            rotateLabel: true
        },

        roam: true,
        focusNodeAdjacency: true,
        hoverAnimation: true,
        label: {
            normal: {
                position: 'center',
                //fontWeight: 'bold',
                //fontSize: 18,
                //formatter: '{b}',
                normal: {
                    textStyle: {

                        fontFamily: '宋体'
                    }
                }
            }
        },
        draggable: true,
        itemStyle: {
            normal: {
                label: {
                    rotate: true,
                    show: true,
                },
                //color: ["#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7"] /* 内的颜色#393f51，外的颜色#85d6f7 */
            },
            emphasis: {
                label: {
                    show: true
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            }
        },
        lineStyle: {
            normal: {
                color: lineColor,
                width: 2,
                type: 'solid',
                opacity: 0.2,
                curveness: 0.3,
            },
        },
        categories: legends,
        data: nodes,
        // links: [],
        links: links
    }]
},{},{},
{},];
for(i=0;i<options.length;i++){
    options[i].backgroundColor='#fff';
}
