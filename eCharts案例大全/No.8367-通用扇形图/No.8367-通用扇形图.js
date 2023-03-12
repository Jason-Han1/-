var jsonData = [{name:"养老看护",value:11},{name:"其他",value:22},{name:"小时工",value:33},{name:"母婴护理",value:44}]
var color = ["#27b5e5","#833eea","#0c65ff","#ec6001"]//颜色可自行添加
var data =[]
for(var i=0;i<jsonData.length;i++){
    data[i] = {
        name:jsonData[i].name,
        value:jsonData[i].value,
        itemStyle:{
            color:color[i]
        }
    } 
}
option = {
    backgroundColor: '#333333',
    series: [{
        type: 'pie',
        startAngle: 160,
        radius: [100, 140],
        center: [500, 390],
        labelLine: {
            length: 10,
            length2: 20,
            lineStyle: {
                color: '#a3a4a9'
            }
        },
        label: {
            color: '#a3a4a9',
            formatter: function(params) {
                return params.data.name + '\n' + params.percent.toFixed(1) + '%'
            }
        },
        data:data
    }]
}