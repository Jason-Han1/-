var dataMap = {};
function dataFormatter(obj) {
    return obj;
}

dataMap.datafans = dataFormatter({
    //max : 60000,
    2011:[-648,7000,4000,4882,752,-829,10502,-711,13000,87063,1000,1000,],
    2010:[75,68,66,9,5,91,48,0,66,25,73,75,33,],
    2009:[26,4,10,86,11,94,8,40,39,1,64,10,95,],
    2008:[46,82,3,60,94,9,28,94,25,47,68,38,35,],
    2007:[82,56,61,33,78,82,15,91,92,4,89,40,33,],
    2006:[45,42,41,34,93,89,9,49,5,59,58,18,71,],
    2005:[99,34,3,52,72,14,51,44,37,86,7,47,11,],
    2004:[28,18,54,99,45,67,69,74,52,32,38,26,12,],
    2003:[87,9,90,83,49,13,41,16,29,49,36,77,4,],
    2002:[83,38,85,1,83,51,61,63,35,56,74,78,90,],
});


dataMap.datapub = dataFormatter({
    //max : 3600,
    2011:[0,1,3,1,0,2,2,0,0,1,1,1,],
    2010:[8,62,21,22,94,34,45,80,64,22,74,75,15,],
    2009:[91,88,17,84,99,87,45,40,59,77,63,69,98,],
    2008:[45,21,16,86,67,57,76,74,49,0,84,37,57,],
    2007:[34,62,66,85,89,8,75,84,65,82,0,77,67,],
    2006:[0,90,46,24,28,50,48,44,74,53,40,98,34,],
    2005:[18,65,81,78,4,22,88,23,53,17,70,90,71,],
    2004:[84,41,41,76,84,96,63,68,47,8,32,75,73,],
    2003:[73,33,29,86,78,7,96,50,6,84,51,42,74,],
    2002:[35,3,43,56,78,9,16,8,76,68,39,92,74,],
});

dataMap.dataread = dataFormatter({
    //max : 3200,
    2011:[3356489,0,0,1261423,3772235,630391,6053564,117738,0,108012545,0,0,],
    2010:[27,76,76,81,75,51,20,85,54,72,38,62,58,],
    2009:[75,62,65,83,78,10,52,95,58,41,64,23,21,],
    2008:[46,3,43,84,32,75,39,3,65,20,26,80,69,],
    2007:[86,73,84,8,13,97,88,77,67,14,1,86,49,],
    2006:[55,29,31,17,94,40,43,68,68,32,52,14,18,],
    2005:[50,29,66,52,36,8,4,24,72,83,74,13,75,],
    2004:[3,65,20,93,30,68,90,56,2,39,92,75,26,],
    2003:[5,51,89,34,42,73,51,40,89,36,65,24,79,],
    2002:[95,4,64,68,65,40,23,11,43,63,14,55,70,],
});



option = {
    baseOption: {
        toolbox : {
                'show':true,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                'feature':{
                    'mark':{'show':true},
                    'dataView':{'show':true,'readOnly':false},
                    'magicType':{'show':true,'type':['line']},
                    'restore':{'show':true},
                    'saveAsImage':{'show':true}
                }
            },
        timeline: {
            // y: 0,
            axisType: 'category',
            autoPlay: false,
            playInterval: 1000,
            data: [
                '2019-09-02','2019-09-03','2019-09-04','2019-09-05', '2019-09-06','2019-09-07','2019-09-08','2019-09-09','2019-09-10','2019-09-11'
            ],
            label: {
                formatter : function(s) {
                    return ((new Date(s)).getMonth()+1+"月"+(new Date(s)).getDate()+"日");
                }
            }
        },
        tooltip: {},
        legend: {
            x: 'right',
            data: ['增粉', '新增阅读量', '发布量'],
              selected: {
                '发布量': false,'新增阅读量':false
            }
        },
        calculable : true,
        grid: {
            top: 80,
            bottom: 100
        },
        xAxis: [
            {
                type:'category',
                axisLabel:{'interval':0},
                data:[
                   '江湖大妈','决不放弃的大碗','看点故事','科技猿人','克拉斯-狗蛋','外洋知事','我在现场','小猪猪的奶茶妹','叶大官人','支付宝','支付宝的朋友们','支付宝那些事'
                   ],
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '（万）',
            },
             {
                type: 'value',
                name: '发布量',
            }
        ],
        series: [
            {name: '增粉', type: 'bar',
                markLine:{
                        symbol : ['arrow','none'],
                        symbolSize : [4, 2],
                        itemStyle : {
                            normal: {
                                lineStyle: {color:'orange'},
                                barBorderColor:'orange',
                                label:{
                                    position:'left',
                                    formatter:function(params){
                                        return "平均增粉"+Math.round(params.value)+"万";
                                    },
                                    textStyle:{color:'orange'}
                                }
                            }
                        },
                        data:[{type:'average',name:'平均值'}]
                    },
                    //data: dataMap.datafans['2002']
            },
            {name: '新增阅读量', type: 'bar'},
            {name: '发布量', 'yAxisIndex':1,type: 'bar'},
            
        ]
    },
    options: [
        {
            title: {text: '矩阵数据看板'},
            series: [
                {data: dataMap.datafans['2002']},
                {data: dataMap.dataread['2002']},
                {data: dataMap.datapub['2002']},
                
            ]
        },
        {
            title : {text: '矩阵数据看板'},
            series : [
                {data: dataMap.datafans['2003']},
                {data: dataMap.dataread['2003']},
                {data: dataMap.datapub['2003']},
                
            ]
        },
        {
            title : {text: '矩阵数据看板'},
            series : [
                {data: dataMap.datafans['2004']},
                {data: dataMap.dataread['2004']},
                {data: dataMap.datapub['2004']},
                
            ]
        },
        {
            title : {text: '矩阵数据看板'},
            series : [
                {data: dataMap.datafans['2005']},
                {data: dataMap.dataread['2005']},
                {data: dataMap.datapub['2005']},
                
            ]
        },
        {
            title : {text: '矩阵数据看板'},
            series : [
                {data: dataMap.datafans['2006']},
                {data: dataMap.dataread['2006']},
                {data: dataMap.datapub['2006']},
                
            ]
        },
        {
            title : {text: '矩阵数据看板'},
            series : [
                {data: dataMap.datafans['2007']},
                {data: dataMap.dataread['2007']},
                {data: dataMap.datapub['2007']},
                
            ]
        },
        {
            title : {text: '矩阵数据看板'},
            series : [
                {data: dataMap.datafans['2008']},
                {data: dataMap.dataread['2008']},
                {data: dataMap.datapub['2008']},
                
            ]
        },
        {
            title : {text: '矩阵数据看板'},
            series : [
                {data: dataMap.datafans['2009']},
                {data: dataMap.dataread['2009']},
                {data: dataMap.datapub['2009']},
                
            ]
        },
        {
            title : {text: '矩阵数据看板'},
            series : [
                {data: dataMap.datafans['2010']},
                {data: dataMap.dataread['2010']},
                {data: dataMap.datapub['2010']},
                
            ]
        },
        {
            title : {text: '矩阵数据看板'},
            series : [
                {data: dataMap.datafans['2011']},
                {data: dataMap.dataread['2011']},
                {data: dataMap.datapub['2011']},
                
            ]
        }
    ]
};
