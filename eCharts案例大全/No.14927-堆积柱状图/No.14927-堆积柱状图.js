option = {
    		legend: {
    		    data:['one','two','three','four','five','six','seven'],
    		    // x: '500px',
                y: '30px'
    		},
    		grid: {
    		    left: '1%',
    		    right: '1%',
    		    bottom: '3%',
    		    containLabel: true,
    		    backgroundColor:'#999', //背景颜色
    		    show:true //背景颜色 显示
    		},
    		xAxis : [
    		    {
    		     	type : 'category',
    		        data : ['A区','B区','C区','D区','E区','F区','G区','H区','I区','J区']
    		    }
    		],
    		yAxis : [
    		    {
    		        type : 'value',
    		        'min': 0,
                	'max': 300
    		    }
    		],
    		series : [
    		    {
    		        name:'one',
    		        type:'bar',
    		        stack:'one',  
    		        //stack 是归类的意思。
    		        //例如：将stack:'one' 的归为一类。stack 后的参数，任意命名。
    		        color:['#ff9274'],
    		        data:[180,180,180,180,180,180,180,180,180,180]
    		    },
    		    {
    		        name:'two',
    		        type:'bar',
    		        stack: 'one',
    		        color:['#ffaa77'],
    		        data:[60,60,60,60,60,60,60,60,60,60]
    		        //y轴的值，通过 堆积得到。
    		        //例如：在一个垂直的柱子里显示2个堆积项，则由2个堆积项相加得到数值。
    		    },
    		    {
    		        name:'three',
    		        type:'bar',
    		        stack: 'two',
    		        color:['#ffc860'],
    		        data:[90,90,90,90,90,90,90,90,90,90]
    		    },
    		    {
    		        name:'four',
    		        type:'bar',
    		        stack: 'two',
    		        color:['#ffdf7c'],
    		        data:[70,70,70,70,70,70,70,70,70,70]
    		    },
    		    {
    		        name:'five',
    		        type:'bar',
    		        color:['#d2da61'],
    		        data:[50,50,50,50,50,50,50,50,50,50],
    		    },
    		    {
    		        name:'six',
    		        type:'bar',
    		        stack: 'three',
    		        color:['#bad861'],
    		        data:[130,130,130,130,130,130,130,130,130,130]
    		    },
    		    {
    		        name:'seven',
    		        type:'bar',
    		        stack: 'three',
    		        color:['#8dcff5'],
    		        data:[60,60,60,60,60,60,60,60,60,60]
    		    }
    		]
		};