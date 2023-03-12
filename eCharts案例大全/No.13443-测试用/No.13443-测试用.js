function createTime() {
    var test = [
        '2012-01-01 06:9',
        '2012-01-01 09:00',
        '2012-01-01 11:00',
        '2012-01-01 19:00',
        '2012-01-01 12:00',
        '2012-01-01 1:00',
        '2012-01-01 12:00',
        '2012-01-01 13:00',
        '2012-01-01 8:00',
        '2012-01-01 15:00',
        '2012-01-01 16:00',
        '2012-01-01 8:00',
        '2012-01-01 18:00',
        '2012-01-01 8:00'
    ]
    var arr = []
    for (var i = 0; i < test.length; i++) {
        var temp = []
        temp.push(i)
        temp.push(new Date(test[i]))
        arr.push(temp)
    }
    return arr
}
function getYDataOf() {
    var datestr = [
        '2012-01-01 01:00',
        '2012-01-01 02:00',
        '2012-01-01 03:00',
        '2012-01-01 04:00',
        '2012-01-01 05:00',
        '2012-01-01 06:00',
        '2012-01-01 07:00',
        '2012-01-01 08:00',
        '2012-01-01 09:00',
        '2012-01-01 10:00',
        '2012-01-01 11:00',
        '2012-01-01 12:00',
        '2012-01-01 13:00',
        '2012-01-01 14:00',
        '2012-01-01 15:00',
        '2012-01-01 16:00',
        '2012-01-01 17:00',
        '2012-01-01 18:00',
        '2012-01-01 19:00',
        '2012-01-01 20:00',
        '2012-01-01 21:00',
        '2012-01-01 22:00',
        '2012-01-01 23:00',
        '2012-01-01 24:00'
    ]
    var datearr = []
    for (var i = 0; i < datestr.length; i++) {
        
        datearr.push(new Date(datestr[i]))
    }
    // console.log(datearr)
    return datearr;
}




option = {
    legend: {
        data: ['上班', '下班']
    },
  
    xAxis: {
        type:'category',
        axisLabel: {
            textStyle:{
                fontSize:12,
                color:'#000'
            },
        },
        data: ['6.1', '6.2', '6.3', '6.4', '6.5',  '6.6', '6.7','6.8','6.9','6.10',
        '6.11','6.12','6.13','6.14']
    },
    yAxis: {
        type: 'time',
        data: getYDataOf(),
        
        axisLabel:{
           
            formatter: function (value, index) {
                
                var date = new Date(value);
                console.log(date)
                var texts = [(date.getHours()), date.getMinutes()+'0'];
                
                return texts.join(':');
            }
        },
        splitNumber:26,
        maxInterval: 3600 *24* 1000,
        min: new Date("2012-01-01 01:00"),
        max: new Date("2012-01-01 24:00")
        // interval:{
            
        // }
        
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{a}:{c}点'
         
    },
    series: [{
            type: 'scatter',
            name: '上班',
            symbol: 'circle',
            data: createTime()
        }]
};