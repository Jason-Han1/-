//这里无法显示,请到项目中尝试 项目中的代码请访问下面的链接 目前测试了苹果手机和部分安卓无问题
//https://www.yuque.com/wenfeng-xpta1/nt34sc/goaxny/edit

//特别感谢https://www.makeapie.com/editor.html?c=xtLpob3FID  这位大佬   这个环是通过该项目进行的二次开发


function remToPx(rem) {
    const fontSize = document.documentElement.style.fontSize;
    return Math.floor(rem * fontSize.replace('px', ''));
}
var  getvalue=[88];

option = {
    title: {
    text: getvalue+'分',
    textStyle: {
      color: '#28BCFE',
      fontSize: remToPx(2)
    },
    subtext: '综合得分',
        subtextStyle: {
            color: '#666666',
            fontSize: remToPx(30)
        },
	itemGap: remToPx(20),
    left: 'center',
    top: '43%'
	},
    tooltip: {
        formatter: function (params) {
            return '<span style="color: #fff;">综合得分：'+ getvalue + '分</span>';
        }
    },
  angleAxis: {
    max: 100,
    clockwise: true, // 逆时针
    // 隐藏刻度线
    show: false
  },
  radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
  },
  polar: {
    center: ['50%', '50%'],
    radius: '100%' //图形大小
  },
  series: [{
    type: 'bar',
    data: getvalue,
	showBackground: true,
	backgroundStyle: {
		color: '#BDEBFF',
	},
    coordinateSystem: 'polar',
    roundCap: true,
    barWidth: 30,
    itemStyle: {
        normal: {
        opacity: 1,
        color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#25BFFF'
          }, {
            offset: 1,
            color: '#5284DE'
          }]),
        shadowBlur: 5,
        shadowColor: '#2A95F9',
    }
    },
  }]
};