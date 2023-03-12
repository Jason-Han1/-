var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
}

option = {
    backgroundColor:"#fff",
    color:["#c00000","#0070c0"],
    title: {
        text: ''
    },
    legend: [
       { 
           data: ['中国(湖北外)每日新增确诊病例预测', ],
            textStyle: { //图例文字的样式
                fontSize: 18
            }
       },
        {
            top:25,
            left:238,
            data:['卫健委公布中国(湖北外)每日新增确诊病例'],
            textStyle: { //图例文字的样式
                fontSize: 18
            }
        }
    ],
    toolbox: {},
    tooltip: {},
    xAxis: {
        data: ['1/22', '1/23', '1/24', '1/25', '1/26', '1/27', '1/28','1/29','1/30','1/31','2/01','2/02','2/03','2/04','2/05'],
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: '中国(湖北外)每日新增确诊病例预测',
        type: 'bar',
        data: [159,200,250,340,445,595 ,745 ,831 ,819  ,768  ,703  ,643  ,588  ,540 ,498 ],
        animationDelay: function (idx) {
            return idx * 120;
        }
    }, {
        name: '卫健委公布中国(湖北外)每日新增确诊病例',
        type: 'bar',
        data: [154,307,365,398,480,619,705,761,752,668,722,888,730,707,696],
        animationDelay: function (idx) {
            return idx * 100;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};