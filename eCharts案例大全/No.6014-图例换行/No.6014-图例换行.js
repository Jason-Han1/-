var getname =['未出国进修/合作科研的学生','本科生','硕士',' 博士']
var getvalue = [55,20,15,10]


var data = [];
for (var i = 0; i < getname.length; i++) {
    data.push({
        name: getname[i],
        value: getvalue[i]
    })
}


var sumvalue = 0;
for (var i = 0; i < getname.length; i++) {
    sumvalue += getvalue[i];
} 

var rich = {
    name: {
        color: "#666666",
        fontSize: 14,
        padding: [6, 10],
        align: 'center'
    },
    percent: {
        color: "#666666",
        align: 'center',
        fontSize: 14,
        padding: [5, 10]
    },
    hr: {
        borderColor: '#DFDFDF',
        width: '100%',
        borderWidth: 0.5,
        height: 0,
    }
}
var colorList = [{
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#81BEFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#3295FF' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#48D69E' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#70F3C2' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FEAE5C' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FECC84' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#A1AEFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#9686F3' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FECAFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#D47FE6' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#7EEAE6' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#1ABBB5' // 100% 处的颜色
                }],
            }];
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}个<br/>占比: {d}%"
    },
        legend: {
        type: "scroll",
        pageIconColor: '#00DFFF', //翻页下一页的三角按钮颜色
		pageIconInactiveColor: '#aaa', //翻页（即翻页到头时）
		pageIconSize: 11, //翻页按钮大小
		pageFormatter: '',//隐藏翻页的数字
		pageButtonItemGap: -6,//翻页按钮的两个之间的间距
        orient: 'vertical',
		height:'80%',
        right: '20',
        top: 'center',
        itemWidth: 18,
        itemHeight: 18,
        data: getname,
        formatter: function(name) {
		       for (var i = 0; i<getname.length; i++) {
				if (name == data[i].name) {
				var ret = "";//拼接加\n返回的类目项  
				var maxLength = 7;//每项显示文字个数  
				var valLength = name.length;//X轴类目项的文字个数  
				var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
				if (rowN > 1)//如果类目项的文字大于7,
				{  
					var temp = "";//每次截取的字符串  
					var start = 0;//开始截取的位置  
					var end = maxLength;//结束截取的位置  
					temp = name.substring(start, end)+'\n'+name.substring(end, valLength)					
					ret += temp; //凭借最终的字符串 
					return '{ret|' + ret+ '}{rate|' + (100*getvalue[i]/sumvalue).toFixed(2) + '%}' 					
				}
				else{
					return '{name|' + name+ '}{rate|' + (100*getvalue[i]/sumvalue).toFixed(2) + '%}'  
				}
     
					 
				}
            }
        },
        textStyle: {
            rich: {
                name: {
                    fontSize: 15,
                    fontWeight: 400,
                    width: 150,
                    height: 35,
                    padding:[0,0,0,5],
					color:'#666'
                },
				ret: {
                    fontSize: 15,
                    fontWeight: 400,
                    width: 150,
                    height: 6,
                    padding:[-15,0,0,5],
					color:'#666'
                },
                rate: {
                    fontSize: 15,
                    fontWeight: 500,
                    height: 35,
                    width: 40,
                    align:'right',
					color:'#666'
                }
            }
        }        

    },
    series:[ {
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        radius: ['40%', '60%'],
        center: ["25%", "50%"],
        labelLine: {
            normal: {
                show:false,
            }
        },
        label: {
            normal: {
                show:false,
            }
        },
        data: data
    }]
            }
