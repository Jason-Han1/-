var data = [
    {value:240, name:'rose1'},
    {value:5, name:'rose2'},
    {value:15, name:'rose3'},
    {value:25, name:'rose4'},
    {value:20, name:'rose5'},
    {value:35, name:'rose6'},
    {value:30, name:'rose7'},
    {value:40, name:'rose8'}
            ];
            
function sum(data) {
    var s = 0;
    for (var i=data.length-1; i>=0; i--) {
        s += data[i].value;
    }
    return s;
}
var all = sum(data);
var newData = [];
for (i = 0; i < data.length; i++) {
	newData[i] = {
		value:data[i].value<=1?data[i].value:Math.log(data[i].value),
		name:data[i].name,
		originalValue : data[i].value,
		originalPercent : data[i].value / all * 100
	};
}

option = {
    title : {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
		formatter: function(param) {
        	var value = param.value;
        	var percent = param.percent;
        	for (var i = 0;i<newData.length;i++){
    		   if (newData[i].name==param.name){
    		        value = newData[i].originalValue;
    		        percent = newData[i].originalPercent;
    		    	break;
    		   }
    		}
			return param.name + ':' + '<br>' +value+ '<br>' +Math.round(percent) + '%';
		}
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
    },
    calculable : true,
    series : [
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            data:newData
        }
    ]
};
