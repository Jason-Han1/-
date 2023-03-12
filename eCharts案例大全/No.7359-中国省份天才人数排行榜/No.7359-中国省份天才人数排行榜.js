var option;

if (!Array.prototype.derangedArray) {
    Array.prototype.derangedArray = function() {
        for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
        return this;
    };
}
var provice = ["陕西省", "甘肃省", "青海省", "宁夏回族自治区", "新疆维吾尔自治区", "北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "海南省", "四川省", "贵州省", "云南省", "台湾省", "内蒙古自治区", "广西壮族自治区", "西藏自治区", "香港特别行政区", "澳门特别行政区"];


function haha() {
    provice = provice.derangedArray();
    var number = [];
    for (var i = 0; i < 35; i++) {
        number.push(Math.round(Math.random() * 1000));
    }

    option = {
        title: {
            text: '中国省份天才人数排行榜',
            subtext: '数据来自随机数'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2011年', '2012年']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: provice,
        },
        series: [{
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            "rgb(0,255,0)",
                            "rgb(255,0,255)",
                            "rgb(0,255,255)",
                            "rgb(0,0,128)",
                            "rgb(128,128,0)",
                            "rgb(255,165,0)",
                            "rgb(255,215,0)",
                            "rgb(0,128,0)",
                            "rgb(80,80,80)",
                            " rgb(255,0,0)",
                            "rgb(0,0,255)",
                            "rgb(255,192,203)",
                            "rgb(128,0,128)",
                            "rgb(255,255,0)",
                            "rgb(128,0,0)",
                            "rgb(0,0,0)",
                            "rgb(165,42,42)",
                            "rgb(0,255,255)",
                            "rgb(0,0,139)",
                            "rgb(0,139,139)",
                            "rgb(169,169,169)",
                            "rgb(0,100,0)",
                            "rgb(189,183,107)",
                            "rgb(139,0,139)",
                            "rgb(85,107,47)",
                            "rgb(255,140,0)",
                            "rgb(153,50,204)",
                            "rgb(139,0,0)",
                            "rgb(233,150,122)",
                            "rgb(148,0,211)",
                            "rgb(75,0,130)",
                            "rgb(240,230,140)",
                            "rgb(173,216,230)",
                            "rgb(224,255,255)",
                            "rgb(144,238,144)",
                            "rgb(211,211,211)",
                            "rgb(255,182,193)",
                            "rgb(255,255,224)",
                            "rgb(255,0,255)",
                            "rgb(128,0,128)",
                            "rgb(192,192,192)",
                            "rgb(255,255,255)",
                            "rgb(240,255,255)",
                            "rgb(245,245,220)"
                        ];
                        var index = Math.floor(Math.random() * (colorList.length - 1 + 1) + 1);
                        return colorList[params.dataIndex];
                    }
                }
            },
            name: '天才人数',
            type: 'bar',
            data: number
        }]
    };
    myChart.setOption(option);

}

setInterval(haha, 1000);