// 版本一第一种方法
// 此版本第二种方法
option = {
    xAxis: [{
        type: 'value',
        splitLine:{show:false},
        axisLine:{show:true,lineStyle:{color:'#DBE0E5',width:2}},
        axisLabel:{show:true,color:'#333',}
    },{
        type: 'value',
        min:0,max:0,gridIndex: 1,
        axisTick:{show:false},
        axisLabel : {show:false},
        splitLine:{show:false}
    },{
        type: 'value',
        min:0,max:0,gridIndex: 2,
        axisTick:{show:false},
        axisLabel : {show:false},
        splitLine:{show:false}
    },{
        type: 'value',
        min:0,max:0,gridIndex: 3,
        axisTick:{show:false},
        axisLabel : {show:false},
        splitLine:{show:false}
    }],
	"yAxis": [{
		"type": "category",gridIndex: 0,
		 axisTick:{length:310,lineStyle:{color:'#DBE0E5',width:2}},
         splitLine:{show:true,lineStyle:{color:'#DBE0E5',width:2}},
         axisLine:{show:true,lineStyle:{color:'#DBE0E5',width:2}},
         axisLabel:{
            show:true,color:'#333',
            formatter:function(name){
                var list = option.dataset.source;
                var rData = [];
                for(var i=1;i<list.length;i++){
                    if(list[i][0]==name){
                        rData = list[i];
                        return [
                            '{title|'+name+'}'+
                            '{title|'+rData[1]+'}'+
                            '{title|'+rData[2]+'}'
                            ].join('\n');
                    }
                }
            },
            rich: {
                title: {
                    color: '#000',
                    align: 'left',
                    width:100
                },
                //  hr: {
                //     borderColor: '#DBE0E5',
                //     width: 0,
                //     borderWidth: 1,
                //     height: 46
                // },
            }
        }
	},{
        type: 'category',gridIndex: 1,data: [],
        axisTick:{show:false},
        axisLabel : {show:false},
        axisLine:{show:true,lineStyle:{color:'#DBE0E5',width:2}},
    },{
        type: 'category',gridIndex: 2,data: [],
        axisTick:{show:false},
        axisLabel : {show:false},
        axisLine:{show:true,lineStyle:{color:'#DBE0E5',width:2}},
    },{
        type: 'category',gridIndex: 3,data: [],
        axisTick:{show:false},
        axisLabel : {show:false},
        axisLine:{show:true,lineStyle:{color:'#DBE0E5',width:2}},
    }],
	"dataset": {
		"source": [
			["医院等级", "大病支出金额", "总额增长率", "就诊次数影响度", "次均大病影响度"],
			["三级甲等", "262400067.13", "0.35", "1.42", "-0.42"],
			["三级丙等", "262400067.1", "10470.27", "1", "0"],
			["地市医疗机构", "262400067.13", "0.0", "0.0", "0.0"],
			["乡镇卫生院", "262400067.13", "160516.81", "0.99", "0.01"],
			["所有等级", "262400067.13", "0.0", "0.0", "0.0"],
			["一级丙等", "262400067.13", "113.13", "0.88", "0.12"],
			["省级医疗机构", "262400067.13", "0.0", "0.0", "0.0"],
			["二级乙等", "262400067.13", "3.56", "0.68", "0.32"],
			["无等级", "262400067.13", "11", "1.02", "-0.02"],
			["二级丙等", "262400067.13", "4640.5", "0.91", "0.09"],
			["一级甲等", "262400067.13", "5.79", "0.94", "0.06"],
			["三级乙等", "262400067.13", "0.96", "1.2", "-0.2"],
			["二级甲等", "262400067.13", "6.03", "0.39", "0.61"],
			["一级乙等", "262400067.13", "23.95", "0.94", "0.06"],
		],
		"sourceHeader": true
	},
	"series": [{
		"barWidth": 15,
		"animation": true,
		"animationEasing": "linear",
		"animationDuration": 300,
		"type": "bar"
	}],
	"grid": [{
		"top": 80,
		left:350,
		"right": 35,
		"bottom": 80,
		gridIndex: 0
	},{
        top: 80,
        width: '0%',
        left: 40,
        "bottom": 80,
        gridIndex: 1
    },{
        top: 80,
        width: '0%',
        left: 140,
        "bottom": 80,
        gridIndex: 2
    },{
        top: 80,
        width: '0%',
        left: 240,
        "bottom": 80,
        gridIndex: 3
    }],
	"color": ["#25B8F0", "#25D29D", "#7DBDCA", "#F6B989", "#F6B989", "#F6B989"],
	"calculable": true
}