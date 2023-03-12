
var zykh = 100;
var zdgzkh = 200;
var dkh =300;
// 基于准备好的dom，初始化echarts实例

var total = zykh + zdgzkh + dkh;
var option = {
title:{
show:false,
    },
    tooltip: {  
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        icon: 'circle',
        orient: 'vertical',
        left: '78%',
        top:'middle',
        align: 'left',
        itemWidth: 10,
        //selectedMode: false ,
        formatter: function(name, ticket, callback) { 
        	var arr1 = ['{a|' + "重要      " + '}{b|'  +zykh] + '}';
        	var arr2 = ['{a|' + "重点关注" + '}{b|' + zdgzkh] + '}';
        	var arr3 = ['{a|' + "大客户   " + '}{b|' + dkh] + '}';
        	if(name=="重要"){
        	 return arr1;
        	}
        	if(name=="重点关注"){
        	 return arr2;
        	}
        	if(name=="大客户"){
        	 return arr3;
        	}
            },
            textStyle: {
                rich: {
                    a: {
                  verticalAlign: 'left',
                        fontSize: 12,
                        align: 'right',
                        width: 45
                    },
                    b: {
                        fontSize: 12,
                        align: 'right',
                        width:  45,  // 图例数值宽度

                    }
                }
            },
            data:['重要','重点关注','大客户']
    },
    graphic: [{ //环形图中间添加文字
            type: 'text', //通过不同top值可以设置上下显示
            left: '50%',
            top: '50%',
            style: {
                text: total +'\n' + '总数量',
                textAlign: 'center',
                fill: '#333333', //文字的颜色
                width: 30,
                height: 30,
                fontSize: 14,
                fontFamily: "Microsoft YaHei"
            }

    }],
    color: ['#0295ff','#60e660', '#f2ba49'],
    series: [{
        name:'客户分群',
        type: 'pie',
        radius: ['50%','70%'],
        center: ['50%','50%'],
        legendHoverLink: false,
        hoverAnimation: false,
        avoidLabelOverlap: false,
        animationDurationUpdate : 0,
        label: {
            normal: {
            	show:false
            },
        },
        data: [{
    	 "value": zykh,
    	 "name": "重要"
    	 }, {
    	 "value": zdgzkh,
    	 "name": "重点关注"
    	 }, {
    	 "value": dkh,
    	 "name": "大客户"
    	 }]
    }
   ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
//图例添加点击事件
myChart.on('legendselectchanged', function (params) {
    myChart.setOption({
        legend:{selected:{[params.name]: true}}
    })
    console.log('点击了', params);
    // do something
});







