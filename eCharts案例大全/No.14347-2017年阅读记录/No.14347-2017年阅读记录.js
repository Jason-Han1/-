var whatif='/asset/get/s/data-1513739027631-HyhGXUDff.jpg'; 
var 爱让我们彼此听见='/asset/get/s/data-1513739061331-HkaEXLwMM.jpg'; 
var 冰岛迷梦='/asset/get/s/data-1513739089992-B1cLmUvff.jpg'; 
var 不如任性过生活='/asset/get/s/data-1513739107193-HJjD78wGf.jpg'; 
var 禅宗兴起='/asset/get/s/data-1513739113446-rJZ_mLDMz.jpg'; 
var 窗边的小豆豆='/asset/get/s/data-1513739124501-S13OX8PzM.jpg'; 
var 从容的底气='/asset/get/s/data-1513739135481-r1PYQIPGf.jpg'; 
var 二孩时代='/asset/get/s/data-1513739147460-SJQ9XLPff.jpg'; 
var 孤独六讲='/asset/get/s/data-1513739159723-ryejmIwGM.jpg'; 
var 和你一起我不怕老去='/asset/get/s/data-1513739180905-H1r3Q8wGz.jpg'; 
var 蒋勋破解达芬奇之美='/asset/get/s/data-1513739190564-SJJp7Iwff.jpg'; 
var 蒋勋破解梵高之美='/asset/get/s/data-1513739199789-Bkd6QLPMG.jpg'; 
var 蒋勋破解高更之美='/asset/get/s/data-1513739206893-SkyAX8DMf.jpg'; 
var 蒋勋破解米开朗基罗='/asset/get/s/data-1513739220215-BJ2CQIPzM.jpg'; 
var 蒋勋破解莫奈之美='/asset/get/s/data-1513739230718-ByvkNUvMz.jpg'; 
var 局外人='/asset/get/s/data-1513739242860-r1mxEIvzf.jpg'; 
var 妈妈是最初的老师='/asset/get/s/data-1513739254410-rJClV8PzG.jpg'; 
var 没有什么了不起='/asset/get/s/data-1513739262277-SJUZNIwfM.jpg'; 
var 美的沉思='/asset/get/s/data-1513739272107-rkxz48Pzz.jpg'; 
var 品味四讲='/asset/get/s/data-1513739282050-Bkqf4Uwzz.jpg'; 
var 奇特的一生='/asset/get/s/data-1513739292999-S1BQELvff.jpg'; 
var 恰到好处的孤独='/asset/get/s/data-1513739301928-ry0mEIwff.jpg'; 
var 容忍与自由='/asset/get/s/data-1513739323850-SyVH4UPMz.jpg'; 
var 生活十讲='/asset/get/s/data-1513739343550-SkuI4UDMM.jpg'; 
var 世界因你而温柔='/asset/get/s/data-1513739374240-SkL_VLPMM.jpg'; 
var 水浒传='/asset/get/s/data-1513739382453-HkAOE8vzz.jpg'; 
var 我不='/asset/get/s/data-1513739390543-BJPKVIwzG.jpg'; 
var 我承诺给你的美丽新世界='/asset/get/s/data-1513739400355-Hyl9VIPMz.jpg'; 
var 我决定活得有趣='/asset/get/s/data-1513739428505-SJhjEUDMz.jpg'; 
var 无关岁月='/asset/get/s/data-1513739503153-SyweHIPzG.jpg'; 
var 无聊的人生我死也不要='/asset/get/s/data-1513739522532-B1sWS8PMM.jpg'; 
var 吴哥之美='/asset/get/s/data-1513739775883-SJOWI8vMf.jpg'; 
var 小豆豆与我='/asset/get/s/data-1513739784854-SJZMIUDfG.jpg'; 
var 幸福从不缺席='/asset/get/s/data-1513739793201-ByKGUUvfz.jpg'; 
var 以自己喜欢的方式过一生='/asset/get/s/data-1513739801434-rybX8LvzG.jpg'; 
var 因为孤独的缘故='/asset/get/s/data-1513739809001-rJFmIIvfz.jpg'; 
var 崭新的理所当然='/asset/get/s/data-1513739818355-SJG4LLwzf.jpg'; 
var 种满院植物安守四季时光='/asset/get/s/data-1513739854433-ByIL8IPzf.jpg'; 
var 自由疯长='/asset/get/s/data-1513739863106-SJyD8LPGM.jpg'; 
var 坐在路边鼓掌的人='/asset/get/s/data-1513739872593-BktwUIwzz.jpg';

var imgs=[崭新的理所当然,
以自己喜欢的方式过一生,
美的沉思,
从容的底气,
世界因你而温柔,
二孩时代,
禅宗兴起,
幸福从不缺席,
我承诺给你的美丽新世界,
种满院植物安守四季时光,
恰到好处的孤独,
自由疯长,
和你一起我不怕老去,
坐在路边鼓掌的人,
爱让我们彼此听见,
窗边的小豆豆,
小豆豆与我,
奇特的一生,
孤独六讲,
妈妈是最初的老师,
水浒传,
生活十讲,
无关岁月,
无聊的人生我死也不要,
局外人,
不如任性过生活,
我决定活得有趣,
没有什么了不起,
容忍与自由,
我不,
whatif,
品味四讲,
蒋勋破解梵高之美,
蒋勋破解达芬奇之美,
蒋勋破解莫奈之美,
蒋勋破解米开朗基罗,
蒋勋破解高更之美,
吴哥之美,
因为孤独的缘故,
冰岛迷梦,
];


app.title = '堆叠条形图';

var getData = function() {

    var pics = [];
    for (var i = 0; i < datalist.length; i++) { 
        pics.push({
            value: timecause[i],
            symbol: imagelist[i],
            //symbol: 美的沉思 ,
            symbolSize: ['30', '45'],
            name: booknames[i],
            
        });
    }
    return pics;
};

var pics=getData();
option = {
     title: {
        text: '2017年阅读记录',
        //left: '0%',
        //textAlign: 'center'
    },
    grid: {
        left: 50,
        right: 20,
        bottom: 100,
        top: 50
    },
    tooltip: {
        formatter: function(params) {
            var bookname = '';
            if (params.componentSubType == 'pictorialBar') {
                for (i = 0; i < datalist.length; i++) {
                    if (datalist[i] == params.name) {
                        bookname = booknames[i];
                    }
                }
                return '《' + bookname + '》</br> 阅读时长：' + params.value + '天</br>读完日期：' + params.name;
            }
        }
    },
    xAxis: {

        data: datalist,

    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    
    series: [
        {
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-130%',
            //symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    opacity: 0.5
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: timecause,
            z: 0
        },
         {//封面
            type: 'pictorialBar',
            symbolPosition: 'end',
            symbolRotate: 30,
            symbolOffset: ['3%', '-100%'],
            data: pics,
            animationDelay: function(idx) {
                return idx * 100 + 500;
            },
           hoverAnimation: true,
            itemStyle: {
                normal: {
                    shadowBlur: 5,
                    shadowColor: '#aaa',
                    shadowOffsetX: 5,
                    shadowOffsetY:5,
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333',
                    shadowOffsetX: 5,
                    shadowOffsetY:5,
                },
            },
            z:10
            
        },

    ]
};