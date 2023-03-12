/**
 * [setCatData 设置category]
 * @param {[type]} arr [description]
 * @param {[type]} n   [description]
 */
function setCatData(arr,n){
    for (var i = 0; i < arr.length; i++) {
        listdata.push({
            "name": arr[i],
            "category": n,
            "label": {
                "normal": {
                    "show": true,
                    "textStyle": {
                        "color": colors[n]
                    }
                }
            }   
        })
    }
}
/**
 * [setLinkData 设置关键链]
 * @param {[type]} arr   [description]
 * @param {[type]} title [description]
 */
function setLinkData(arr,title) {
    for (var i = 0; i < arr.length; i++) {
        links.push({
             "source": arr[i],
             "target": title
        })
    }
}
var legendes=["基本数据","税收数据","欠税信息","行政处罚信息","重大违法信息","增值税申报信息","缴税情况","税务信用评级","所得税年度汇算清缴","企业画像"];
var colors=['#dc44c8','#6444dc','#dc4474','#dc4444','#68b6ef','#68efb8','#ef9b68','#4c6492','#4a561a','#fff'];
var texts=[];
for (var i = 0; i < legendes.length; i++) {
    texts.push({
        "name":legendes[i],
        "itemStyle": {
            "normal": {
                "color": colors[i]
            }
        }
    })
}
var listdata=[];
var cat1=["基本数据","企业名称","社会统一信用代码","生产经营地址","纳税人状态","登记日期","生产经营地址（共管户国税为准）","法定代表人","行业类型","纳税人类型","国地最早开业（设立）日期","登记注册类型（共管户国税为准）","纳税人登记状态（共管户国税为准）","增值税最早申报日期","营业税最早申报日期"];
var cat2=["税收数据","所属日期起","所属日期止","应税销售收入","入库税额","入库税额（消）","入库税额（营）","入库税额（企）","减免税额（增）","减免税额（消）","减免税额（营）","减免税额（企）"];
var cat3=["欠税信息","经营地点","增值税欠税金额","消费税欠税金额","所得税欠税金额"];
var cat4=["行政处罚信息","案件名称","行政处罚类别","行政处罚结果","行政处罚事由","行政处罚依据","处罚金额","行政处罚日期","处罚截止日期","处罚机关","当前状态"];
var cat5=["重大违法信息","中介机构","从业人员","案件性质","主要违法事实","处罚情况"];
var cat6=["增值税申报信息","增值税申报信息-年度","申报月份","按适用税率计税销售额","应补退税额","按简易办法计税销售额","免、抵、退办法出口销售额","免税销售额"];
var cat7=["缴税情况","缴税情况-年度","属期起止","税种代码","税款种类","实缴时间","实缴税额"];
var cat8=["税务信用评级","信用级别","信用评级年度","信用评分分数"]
var cat9=["所得税年度汇算清缴","所得税年度汇算清缴-年度","汇算清缴日期","营业收入","应纳税所得额","应纳所得税额"];
var cat10=["企业"];

// 拼装数据
setCatData(cat1,0)
setCatData(cat2,1)
setCatData(cat3,2)
setCatData(cat4,3)
setCatData(cat5,4)
setCatData(cat6,5)
setCatData(cat7,6)
setCatData(cat8,7)
setCatData(cat9,8)
setCatData(cat10,9)
var links=[];

setLinkData(cat1,"基本数据");
setLinkData(cat2,"税收数据");
setLinkData(cat3,"欠税信息");
setLinkData(cat4,"行政处罚信息");
setLinkData(cat5,"重大违法信息");
setLinkData(cat6,"增值税申报信息");
setLinkData(cat7,"缴税情况");
setLinkData(cat8,"税务信用评级");
setLinkData(cat9,"所得税年度汇算清缴");
setLinkData(legendes,"企业");

// console.log(links)
// console.log(JSON.stringify(listdata))
// console.log(JSON.stringify(texts))
// var texts=[{"name":"基本数据","itemStyle":{"normal":{"color":"#dc44c8"}}},{"name":"税收数据","itemStyle":{"normal":{"color":"#6444dc"}}},{"name":"欠税信息","itemStyle":{"normal":{"color":"#dc4474"}}},{"name":"行政处罚信息","itemStyle":{"normal":{"color":"#dc4444"}}},{"name":"重大违法信息","itemStyle":{"normal":{"color":"#68b6ef"}}},{"name":"增值税申报信息","itemStyle":{"normal":{"color":"#68efb8"}}},{"name":"缴税情况","itemStyle":{"normal":{"color":"#ef9b68"}}},{"name":"税务信用评级","itemStyle":{"normal":{"color":"#4c6492"}}},{"name":"所得税年度汇算清缴","itemStyle":{"normal":{"color":"#4a561a"}}}];
// var listdata=[{"name":"企业名称","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"社会统一信用代码","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"生产经营地址","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"纳税人状态","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"登记日期","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"生产经营地址（共管户国税为准）","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"法定代表人","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"行业类型","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"纳税人类型","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"国地最早开业（设立）日期","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"登记注册类型（共管户国税为准）","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"纳税人登记状态（共管户国税为准）","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"增值税最早申报日期","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"营业税最早申报日期","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#dc44c8"}}}},{"name":"所属日期起","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#6444dc"}}}},{"name":"所属日期止","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#6444dc"}}}},{"name":"应税销售收入","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#6444dc"}}}},{"name":"入库税额","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#6444dc"}}}},{"name":"入库税额（消）","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#6444dc"}}}},{"name":"入库税额（营）","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#6444dc"}}}},{"name":"入库税额（企）","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#6444dc"}}}},{"name":"减免税额（增）","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#6444dc"}}}},{"name":"减免税额（消）","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#6444dc"}}}},{"name":"减免税额（营）","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#6444dc"}}}},{"name":"减免税额（企）","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#6444dc"}}}},{"name":"经营地点","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4474"}}}},{"name":"增值税欠税金额","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4474"}}}},{"name":"消费税欠税金额","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4474"}}}},{"name":"所得税欠税金额","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4474"}}}},{"name":"案件名称","category":3,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4444"}}}},{"name":"行政处罚类别","category":3,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4444"}}}},{"name":"行政处罚结果","category":3,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4444"}}}},{"name":"行政处罚事由","category":3,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4444"}}}},{"name":"行政处罚依据","category":3,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4444"}}}},{"name":"处罚金额","category":3,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4444"}}}},{"name":"行政处罚日期","category":3,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4444"}}}},{"name":"处罚截止日期","category":3,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4444"}}}},{"name":"处罚机关","category":3,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4444"}}}},{"name":"当前状态","category":3,"label":{"normal":{"show":true,"textStyle":{"color":"#dc4444"}}}},{"name":"中介机构","category":4,"label":{"normal":{"show":true,"textStyle":{"color":"#68b6ef"}}}},{"name":"从业人员","category":4,"label":{"normal":{"show":true,"textStyle":{"color":"#68b6ef"}}}},{"name":"案件性质","category":4,"label":{"normal":{"show":true,"textStyle":{"color":"#68b6ef"}}}},{"name":"主要违法事实","category":4,"label":{"normal":{"show":true,"textStyle":{"color":"#68b6ef"}}}},{"name":"处罚情况","category":4,"label":{"normal":{"show":true,"textStyle":{"color":"#68b6ef"}}}},{"name":"年度","category":5,"label":{"normal":{"show":true,"textStyle":{"color":"#68efb8"}}}},{"name":"申报月份","category":5,"label":{"normal":{"show":true,"textStyle":{"color":"#68efb8"}}}},{"name":"按适用税率计税销售额","category":5,"label":{"normal":{"show":true,"textStyle":{"color":"#68efb8"}}}},{"name":"应补退税额","category":5,"label":{"normal":{"show":true,"textStyle":{"color":"#68efb8"}}}},{"name":"按简易办法计税销售额","category":5,"label":{"normal":{"show":true,"textStyle":{"color":"#68efb8"}}}},{"name":"免、抵、退办法出口销售额","category":5,"label":{"normal":{"show":true,"textStyle":{"color":"#68efb8"}}}},{"name":"免税销售额","category":5,"label":{"normal":{"show":true,"textStyle":{"color":"#68efb8"}}}},{"name":"年度","category":6,"label":{"normal":{"show":true,"textStyle":{"color":"#ef9b68"}}}},{"name":"属期起止","category":6,"label":{"normal":{"show":true,"textStyle":{"color":"#ef9b68"}}}},{"name":"税种代码","category":6,"label":{"normal":{"show":true,"textStyle":{"color":"#ef9b68"}}}},{"name":"税款种类","category":6,"label":{"normal":{"show":true,"textStyle":{"color":"#ef9b68"}}}},{"name":"实缴时间","category":6,"label":{"normal":{"show":true,"textStyle":{"color":"#ef9b68"}}}},{"name":"实缴税额","category":6,"label":{"normal":{"show":true,"textStyle":{"color":"#ef9b68"}}}},{"name":"信用级别","category":7,"label":{"normal":{"show":true,"textStyle":{"color":"#4c6492"}}}},{"name":"信用评级年度","category":7,"label":{"normal":{"show":true,"textStyle":{"color":"#4c6492"}}}},{"name":"信用评分分数","category":7,"label":{"normal":{"show":true,"textStyle":{"color":"#4c6492"}}}},{"name":"年度","category":8,"label":{"normal":{"show":true,"textStyle":{"color":"#4a561a"}}}},{"name":"汇算清缴日期","category":8,"label":{"normal":{"show":true,"textStyle":{"color":"#4a561a"}}}},{"name":"营业收入","category":8,"label":{"normal":{"show":true,"textStyle":{"color":"#4a561a"}}}},{"name":"应纳税所得额","category":8,"label":{"normal":{"show":true,"textStyle":{"color":"#4a561a"}}}},{"name":"应纳所得税额","category":8,"label":{"normal":{"show":true,"textStyle":{"color":"#4a561a"}}}}];
// var links=[{"source":"Ruff成为企业生态合作伙伴","target":"企业"},{"source":"百度与银联商务正式达成战略合作协议","target":"企业"},{"source":"企业","target":"人脸识别"},{"source":"企业","target":"百度深度学习"},{"source":"企业北京沙龙","target":"企业"},{"source":"2017企业智峰会","target":"企业总经理尹世明云智峰会展示黑科技"},{"source":"企业总经理尹世明云智峰会展示黑科技","target":"企业"},{"source":"企业","target":"图像识别"},{"source":"2017企业智峰会","target":"企业与传媒行业战略合作签约视频时代"},{"source":"企业与传媒行业战略合作签约视频时代","target":"企业"},{"source":"企业","target":"视频封面选图VCS"},{"source":"企业","target":"视频内容分析"},{"source":"企业","target":"语音识别"},{"source":"企业","target":"视频内容审核"},{"source":"企业","target":"理解与交互技术UNIT"},{"source":"企业","target":"视频封面选图"},{"source":"企业","target":"视频内容分析VCA"},{"source":"企业","target":"视频内容审核 VCR"},{"source":"2017企业智峰会","target":"企业高级产品专家黄锋视频AI产品发布"},{"source":"企业高级产品专家黄锋视频AI产品发布","target":"企业"},{"source":"企业","target":"文字识别"},{"source":"2017企业智峰会","target":"华数传媒网络有限公司亮相2017企业智峰会"},{"source":"华数传媒网络有限公司亮相2017企业智峰会","target":"企业"},{"source":"企业","target":"智能推荐BRS"},{"source":"2017企业智峰会","target":"企业ABC技术标识——ABC Inspire发布，进入Cloud2.0时代"},{"source":"企业ABC技术标识——ABC Inspire发布，进入Cloud2.0时代","target":"企业"},{"source":"企业ABC技术标识——ABC Inspire发布，进入Cloud2.0时代","target":"张亚勤"},{"source":"2017企业智峰会","target":"百度公司总裁张亚勤企业智峰会聊云计算"},{"source":"百度公司总裁张亚勤企业智峰会聊云计算","target":"企业"},{"source":"企业","target":"云服务器BBC"},{"source":"百度公司总裁张亚勤企业智峰会聊云计算","target":"张亚勤"},{"source":"未来域，南京度房与企业合作","target":"企业"},{"source":"企业CDN流量包1折闪促","target":"企业"}];
var option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.4, 0.4, 0.7, [{
        offset: 0,
        color: '#162436'
    }, {
        offset: 1,
        color: '#000'
    }]),
    legend: {
        data: legendes,
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        formatter: function(parmes) {
            if (parmes.data.name) {
                return legendes[parmes.data.category] + ": " + parmes.name;
            }
        }
    },
    animationDurationUpdate: 300,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'force',
        symbol: 'circle',
        symbolSize: 15,
        roam: true,
        focusNodeAdjacency: false,
        legendHoverLink: true,
        draggable: true,
        force: {
            repulsion: 240,
            gravity: 0.03,
            edgeLength: 80,
            layoutAnimation: true
        },
        categories: texts,
        data: listdata,
        links: links
    }]
};