var weatherIcons = {
    up: './data/asset/img/arrow-up.png',
    down: './data/asset/img/arrow-down.png'
};

function mapTooltipClick(name) {
    console.log(name)
}
option = {
    animation: true,
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',
    series: [{

        type: 'map',
        mapType: 'china',
        roam: true,
        symbol:'image://https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555990951533&di=9b6f2e190bc10d76d52d73d98a0be4d9&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130530%2F12174133_162640398000_2.jpg',
        symbolSize:100,
        label: {
            normal: {
                show: true,
                formatter: function(params) {
                    var res = '';
					var myseries = option.series;
					for (var j = 0; j < myseries[0].data.length; j++) {
						if (myseries[0].data[j].name == params.name) {                    
							res += ' ' + '   {img1|ddd}   '+ '   {img2|ccc}   ' + '   {img3|ddd}   '
							+ '\n  5个  ' + '    3个  ' + '      2个 '
							
						}
					}
					return res;
                    
                },
                position: 'inside',
                backgroundColor: {
                    image : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555954951870&di=11f835f33261dccc2f8db30529c05367&imgtype=0&src=http%3A%2F%2Fpic.qiushibaike.com%2Fsystem%2Favtnew%2F1006%2F10067419%2Fmedium%2Fdefault_avatar.jpg'
                },
                padding: [5, 5],
                borderRadius: 5,
                borderWidth: 2,
                borderColor: 'rgba(255,0,0,0.5)',
                color: '#777',
                fontSize:9,
                rich: {
                    img1 : {
						backgroundColor : {
							//image : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555954951870&di=11f835f33261dccc2f8db30529c05367&imgtype=0&src=http%3A%2F%2Fpic.qiushibaike.com%2Fsystem%2Favtnew%2F1006%2F10067419%2Fmedium%2Fdefault_avatar.jpg'
						},
						color:'red'
					},
					img2 : {
						backgroundColor : {
							//image : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555955691056&di=b26071328334ce72143a87cf7a78a586&imgtype=0&src=http%3A%2F%2Fpic1.cxtuku.com%2F00%2F08%2F96%2Fb358362ee64e.jpg'
						},
						color:'#fff'
					},
					img3 : {
						backgroundColor : {
						//	image : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555954951870&di=11f835f33261dccc2f8db30529c05367&imgtype=0&src=http%3A%2F%2Fpic.qiushibaike.com%2Fsystem%2Favtnew%2F1006%2F10067419%2Fmedium%2Fdefault_avatar.jpg'
						},
						color:'#ddd'
					},
                    valueUp: {
                        color: '#019D2D',
                        fontSize: 12
                    },
                    valueDown: {
                        color: '#019D2D',
                        fontSize: 12
                    },
                    up: {
                        height: 14,
                        align: 'center',
                        backgroundColor: {
                            image: weatherIcons.up
                        }
                    },
                    down: {
                        height: 14,
                        align: 'center',
                        backgroundColor: {
                            image: weatherIcons.down
                        }
                    }
                }
            },
            emphasis: {
                show: true
            }
        },
        data: [{
                name: '北京',
                value: 10
            },
            {
                name: '天津',
                value: 10
            },
            {
                name: '上海',
                value: 10
            },
            {
                name: '重庆',
                value: 10
            },
            {
                name: '河北',
                value: 10
            },
            {
                name: '河南',
                value: 10
            },
            {
                name: '云南',
                value: 10
            },
            {
                name: '辽宁',
                value: 10
            },
            {
                name: '黑龙江',
                value: 10
            },
            {
                name: '湖南',
                value: 10
            },
            {
                name: '安徽',
                value: 10
            },
            {
                name: '山东',
                value: 10
            },
            {
                name: '新疆',
                value: 10
            },
            {
                name: '江苏',
                value: 10
            },
            {
                name: '浙江',
                value: 10
            },
            {
                name: '江西',
                value: 10
            },
            {
                name: '湖北',
                value: 10
            },
            {
                name: '广西',
                value: 10
            },
            {
                name: '甘肃',
                value: 10
            },
            {
                name: '山西',
                value: 10
            },
            {
                name: '内蒙古',
                value: 10
            },
            {
                name: '陕西',
                value: 10
            },
            {
                name: '吉林',
                value: 10
            },
            {
                name: '福建',
                value: 10
            },
            {
                name: '贵州',
                value: 10
            },
            {
                name: '广东',
                value: 10
            },
            {
                name: '青海',
                value: 10
            },
            {
                name: '西藏',
                value: 10
            },
            {
                name: '四川',
                value: 10
            },
            {
                name: '宁夏',
                value: 10
            },
            {
                name: '海南',
                value: 10
            },
            {
                name: '台湾',
                value: 10
            },
            {
                name: '香港',
                value: 10
            },
            {
                name: '澳门',
                value: 10
            }
        ],
        itemStyle: {
            normal: {
                borderColor: '#fefefe',
                areaColor: '#179125',
                borderWidth: 1,
                show: true,
            },
            emphasis: {
                areaColor: '#179125',
                color: '#179125',
                borderWidth: 2,
                show: true,
            }
        },
    }]
};




function randomData() {
    return [Math.round(Math.random() * 1000), Math.random() > 0.6];
}