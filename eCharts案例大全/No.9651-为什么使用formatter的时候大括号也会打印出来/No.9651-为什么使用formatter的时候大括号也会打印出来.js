var dataList=[
    {value:335, name:'正常'},
    {value:310, name:'迟到'},
    {value:234, name:'早退'},
    {value:135, name:'请假'},
    {value:1548, name:'旷课'}
]
function array2obj(array,key) {
	var resObj = {};
	for(var i=0;i<array.length;i++){
		resObj[array[i][key]] = array[i];
	}
    return resObj;
}     
objData = array2obj(dataList, "name");
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        right:'150px',
        show:true,
        top:'70px',
        align:'left',
        icon:'circle',
        padding: [0,140,0,0],
        itemHeight:8,//改变圆圈大小
        data: ['正常','迟到','早退','请假','旷课'],
        formatter: function(name) {
            return '{a|'+name+'}' +objData[name].value
           
        },
        textStyle:{
            fontSize:15,
            lineHeight:20,
           
        }
    },
    series: [
        {
            name:'考勤信息统计',
            type:'pie',
            radius: ['50%', '70%'],
            center: ["25%", "50%"], 　　
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'正常'},
                {value:310, name:'迟到'},
                {value:234, name:'早退'},
                {value:135, name:'请假'},
                {value:1548, name:'旷课'}
            ]
        }
    ]
};