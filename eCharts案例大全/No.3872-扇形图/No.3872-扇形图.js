var getsjjg=['专职教师','管理人员','教辅人员','工勤人员','外聘人员'];
var getsjjgrs=[30,24,22,14,10];
var syjgdata = [];
for(var i = 0;i<getsjjg.length;i++){
	syjgdata.push({name:getsjjg[i],value:getsjjgrs[i]})
}

var colorList=['#4BE77B','#0981FC','#DF208C','#41EFFF','#F7E35C'];
option = {
    backgroundColor:'#000',
    series: {
            itemStyle: {
                normal: {
                    color: function(params) {
                     return colorList[params.dataIndex]
                    },
                    borderWidth: 5,
                borderColor: '#082455',
                }
            },
            type: 'pie',
            //clockWise: false ,
			//roseType: 'radius',
            radius: ['30%', '53%'],
			center: ["center", "center"], 
		
            labelLine: {
                normal: {
                    length: 50,
                    length2: 100,
                }
            },
            label: {
                normal: {
                    formatter: params => {
                        return (
                            '{radius|●}\n{percent|'+ params.percent.toFixed(0) +'%}\n\n{name|' + params.name + '}'
                        );
                    },
                    padding: [0, -100, 0, -100],
                    rich: {
						radius: {
							//backgroundColor: 'radius',
							//borderRadius: 3,
							//width: 3,
							//height: 3,
							padding: [-37, 90, 0, 90]
						},
                        name: {
                            fontSize: 12,
                            color: '#7594BA',
                            padding: [0, 30, 0, 40],
                        },
                        percent: {
                            fontSize: 14,
                            color: '#31C2FF',
                            padding: [0, 30, 0, 40],
                        },
                    }
                }
            },
            data: syjgdata
        }
};