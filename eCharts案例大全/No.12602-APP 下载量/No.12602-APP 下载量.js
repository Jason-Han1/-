option = {
    title: {
        text: 'APP 下载量',
        textStyle:{
            color:'#fff', 
        },
    },
    backgroundColor:'#141845',
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    calculable : true,
    series : [
       
        {
            name: '',
            type:'pie',
            radius : [30, 70],
            roseType : 'area',
            data:[
                {value:250, name:'二维码'},
                 {value:200, name:'360'},
                 {value:300, name:'华为'},
                  {value:500, name:'应用宝'},
                {value:400, name:'APP Store'}
            ],
            itemStyle:{
			            	normal:{
			            		color: function(params) {
			                        var colorList = [
			                          '#F37800','#017DB5','#427AC7','#FFC939','#79DDDD'
			                        ];
			                        return colorList[params.dataIndex]
			                    }
			            	}
			            },
        }
    ]
};