option = {
    title: {
        text: '体重监测统计',
        textStyle:{
            color:'#fff', 
        },
    },
    backgroundColor:'#141845',
    color:['#3398db'],
	tooltip:{
		formater:"{b}"
	},
	grid:{
		left:'1%',
		bottom:'2%',
		containLabel:true
	},
	xAxis: {
        type: 'category',
        data: ['周一', '周二','周三','周四','周五','周六','周日'],
        axisLine:{lineStyle:{color:"#fff"}}
    },
    yAxis: {
    	name:'单位：公斤',
        type: 'value',
        axisLine:{lineStyle:{color:"#fff"}}
    },
    series: [{
        data: [80, 80, 79, 80, 82, 83, 82],
        type: 'bar',
        barWidth:'30'
    }],
    label: {
      normal: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#fff'
          }
      }
   }
};