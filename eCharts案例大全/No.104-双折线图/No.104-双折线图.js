//var  getname=<#=GRID6.A1$#>;
//var  getvalue=<#=GRID6.B1$#>;

var getname = ['5月24日','5月25日','5月26日','5月27日','5月28日','5月29日','5月30日','5月31日','6月1日','6月2日','6月3日','6月4日','6月5日','6月6日','6月7日'];
var  getvalue= [120,100,95,150,170,155,130,100,115,120,168,140,145,140,155];
var  getvalue1= [150,130,105,155,106,135,110,106,175,124,198,183,154,144,159];

option= {
    backgroundColor:'19, 31, 59',
    grid: {
        top: '20%',
        left: '3%',
		right: '5%',
        bottom: '5%',
        containLabel: true
    },
	legend: {

	   data: [
            {
                name: '进'
            },
            {
                name: '出'
            }
        ],
        right: "90%",
		top:"4%",
        textStyle: {
            color: "#A1D5FF",
			fontSize: 12
        }, 
		itemWidth: 10,  // 设置宽度
		itemHeight:15, // 设置高度
		itemGap: 10, // 设置间距

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#A1D5FF',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: '#102E74',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
	    type:'value',
	    axisLabel: {
            color: '#A1D5FF',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            show:false,
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#102E74',
            }
        }
    }],
    series: [
        {
			name:'进',
         //   symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACV0lEQVQ4T7WVPWtUQRSGnzN3bvYrm4/NhsQoUdsUgo0QhFSBNIIoFmn8E7YWpraxtLRNK4JokUaIvdWqTURUXLIbk93sV+6dOXLv7pqgMYiuA4dzGZiH98455x3h56UqQBLJOpl1sHecRYbfPyjDA3AMMkASwRwYD6I1RMqoAa2CBxz9nIRyAtwH9mEpBLAlsFGT0Js0ghxIB9R4nPFEYZFoD2L60YcPoENgArNzEHYaZGJLNgzIuYiszWCJMIT4uEcchHQjR8fGdHMT9KoQpWCRRC0yUJcoG5tokLUhhSNH0QQURSgYIYsjIMB5patKyzuaYwHNOKLVmKALHKVKRTQBpupKkO22GTeeqdBSUsMMEdNiyavHiiHWmDYh38RTj2L2vGE/m+dwjxSaqhwCM8UmeTPGlHrKJmBeYhYWlZUlYbVsKLWVegW2KsortXzxjq9iqPkj9ptF2kBvCEyqmT1sURRlJrDMiWPxomFtVVi/amDeQFfhvYenns03npca8NHFVFWojxdoVhOVIi5RGMxC7rDDZMZSFs954NKaY+OGZXbZwrz0/6ni4HlM7bHwAPighs+9mNp4joNd6AyBtlwj5wtMemVW4IIKl+8Kj25azHIAeUmaDXY8vIhx9x33RNlR+GSEXdPioFZOgfFvFd72bNwaKJwWcArvPDzz7D70bJyl8NQ7XDKs3TGsXwvgnIGOwlsPTxyb2+7sO0za5tQqXxFWrgurC4ZSQ6lve7Ze/0GVR96HyfiNcFL65jDCWf4vbnMMHdrYP/rhSdcemWP/8hb83cZ3pbKcJE9Q4QMAAAAASUVORK5CYII=',
            symbolSize: 8,
            type: "line",
            data: getvalue,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    color: '#25a3d5',
					shadowColor: 'rgba(93,241,255 ,0.7)',
					shadowBlur: 10,
					//shadowOffsetY: 0
                },

            }
        },
         {
			name:'出',
       //     symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACV0lEQVQ4T7WVPWtUQRSGnzN3bvYrm4/NhsQoUdsUgo0QhFSBNIIoFmn8E7YWpraxtLRNK4JokUaIvdWqTURUXLIbk93sV+6dOXLv7pqgMYiuA4dzGZiH98455x3h56UqQBLJOpl1sHecRYbfPyjDA3AMMkASwRwYD6I1RMqoAa2CBxz9nIRyAtwH9mEpBLAlsFGT0Js0ghxIB9R4nPFEYZFoD2L60YcPoENgArNzEHYaZGJLNgzIuYiszWCJMIT4uEcchHQjR8fGdHMT9KoQpWCRRC0yUJcoG5tokLUhhSNH0QQURSgYIYsjIMB5patKyzuaYwHNOKLVmKALHKVKRTQBpupKkO22GTeeqdBSUsMMEdNiyavHiiHWmDYh38RTj2L2vGE/m+dwjxSaqhwCM8UmeTPGlHrKJmBeYhYWlZUlYbVsKLWVegW2KsortXzxjq9iqPkj9ptF2kBvCEyqmT1sURRlJrDMiWPxomFtVVi/amDeQFfhvYenns03npca8NHFVFWojxdoVhOVIi5RGMxC7rDDZMZSFs954NKaY+OGZXbZwrz0/6ni4HlM7bHwAPighs+9mNp4joNd6AyBtlwj5wtMemVW4IIKl+8Kj25azHIAeUmaDXY8vIhx9x33RNlR+GSEXdPioFZOgfFvFd72bNwaKJwWcArvPDzz7D70bJyl8NQ7XDKs3TGsXwvgnIGOwlsPTxyb2+7sO0za5tQqXxFWrgurC4ZSQ6lve7Ze/0GVR96HyfiNcFL65jDCWf4vbnMMHdrYP/rhSdcemWP/8hb83cZ3pbKcJE9Q4QMAAAAASUVORK5CYII=',
            symbolSize: 8,
            type: "line",
            data: getvalue1,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    color: '#FEA940FF',
					shadowColor: '#FFEED9FF',
					shadowBlur: 10,
					//shadowOffsetY: 0
                },

            }
        }
    ]
}

return option;  