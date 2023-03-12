var getsjjg=['普通文理生','体艺生','特长生','港澳台特招生','其他'];
var getsjjgrs=[35,30,25,12,8];
var syjgdata = [];
for(var i = 0;i<getsjjg.length;i++){
	syjgdata.push({name:getsjjg[i],value:getsjjgrs[i]})
}

var colorList=['#41EFFF','#2E74FF','#1DF1CC','#9FF668','#F04F8D'];
option = {
    backgroundColor:'#000',
    graphic: {
        elements: [{
            type: "image",
            z: 3,
            style: {
                image: 'data:image/png;base64,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',
                width:130,
                height: 130
            },
            left: 'center',
            top: 'center',
        }]
    },
    series: {
            itemStyle: {
                normal: {
                    color: function(params) {
                     return colorList[params.dataIndex]
                    }
                }
            },
            type: 'pie',
            //clockWise: false ,
			roseType: 'radius',
            radius: ['15%', '53%'],
			center: ["center", "center"], 
            labelLine: {
                normal: {
                    length: 15,
                    length2: 120,
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
                        },
                        percent: {
                            fontSize: 14,
                            color: '#06E9F3'
                        },
                    }
                }
            },
            data: syjgdata
        }
};