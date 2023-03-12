



var lineColor = '#00EAFF';
var labelColor = '#F7CE52';
var fontSize = '38';
var lineWidth = 3;
var max="300";
option = {
        backgroundColor: '#031845',
     title: {
        text: '深圳月最低生活费组成（单位:元）',
              textStyle: {
            color:"#fff"
        },
         left: '4%',
        top: '5%'
       
     
    },
     grid: {
        top: "10%",
        containLabel: true
    },
    
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
         axisLine: {
            show: true,
            lineStyle: {
                color: '#D6E0EE'
            }
        },
        
         
    },
    yAxis: {
        type: 'value',
        max:max,
               axisLine: {
            show: true,
            lineStyle: {
                color: '#D6E0EE'
            }
        },
         splitLine: {
            lineStyle: {
                color: '#4784e8'
            }
        }
    },
    series: [{
        data: [{
            value: 250,
            itemStyle: {
                color: lineColor
            }
        },{
            value: 200,
            itemStyle: {
                color: labelColor
            }
        },{
            value: 250,
            itemStyle: {
                color: lineColor
            }
        },{
            value: 200,
            itemStyle: {
                color: labelColor
            }
        },{
            value: 250,
            itemStyle: {
                color: lineColor
            }
        },{
            value: 200,
            itemStyle: {
                color: labelColor
            }
        },{
            value: 250,
            itemStyle: {
                color: lineColor
            }
        },{
            value: 200,
            itemStyle: {
                color: labelColor
            }
        },{
            value: 250,
            itemStyle: {
                color: lineColor
            }
        },{
            value: 200,
            itemStyle: {
                color: labelColor
            }
        },{
            value: 250,
            itemStyle: {
                color: lineColor
            }
        },{
            value: 200,
            itemStyle: {
                color: labelColor
            }
        },],
        type: 'bar',
         itemStyle: {
                color: '#00EAFF'
            }
    }]
};