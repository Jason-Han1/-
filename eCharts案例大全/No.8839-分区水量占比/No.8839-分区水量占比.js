option = {
    title: {
        text: '分区水量占比',
        textStyle: {
        	 align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '3%',
        left: 'center',
    },
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {

         left: 'center',
          top: '12%',
        data:['东城','西城','朝阳','丰台','海淀','顺义','昌平','石景山'],
        textStyle: {
            color: [],
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 10,
        }
        
    },
     color: ['#ff9f7e', '#5f71d2', '#00F7FF', '#5fd27b', '#6173d6', '#47dfae',
        '#4ac7f5', '#14A4ED'],
    series: [
        {
            name:'分区水量占比',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner',
                    fontSize:16,
                    fontWeight:'bold'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'工业户', selected:true},
                {value:379, name:'商业户'},
                {value:1548, name:'民用户'}
            ]
        }
    ]
};