var num1=4
var num2=100-num1;
option = {
    color: ['#47DA24', '#1766FF'],
    series: [

        {
	        type: 'pie',
	        data: [
	            {
	                value:num1,
	                name:num1+'%'
	            }, {
	                value: num2,
	                name:num2+'%'
	            }
	        ],
            labelLine: {
                normal: {
                    length: 2, // 改变标示线的长度
                    lineStyle: {
                        // color: "#74ACFF" // 改变标示线的颜色
                    }
                },
            },
            label: {
                normal: {
                    textStyle: {
                        // color: '#74ACFF' // 改变标示文字的颜色
                    }
                }
            }
        }
    ]
};