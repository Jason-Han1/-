const imgArr = [
	'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA+5JREFUSA21Vs1vG1UQn3nrXa8dx3EONBUSClRpEhRARW2J+OgByqGIFk5NTOgNxIUTN/gL4MaJC6K3kjrpCSiiBwqHglD4UKtC1CatClUl1JRDHMex17veN8zvJYsaSCsEzZOe9u3Mb37zPF9rprssEeGV6ccqoR/vSBMusaE84GKp4/nSjJLgVt/UxTozy51oeCsFiKNTjzzASTKcsi04jJjUMkc4G5GQ2Ho4e2La4vuL4dFfbmzl6B8Ofv9sb7G/1dhnU+kzbFpx17/eydPNHRPzTRBm69bsWCnfoZ1BLhm0YovG45XlYvnH+4/81MoweG5yUP/40f4cJU+wSXMJy+W+yWO/0qcne6KW7LFkh1mkAiNhrhsyi2GRL9BLr6ytzJx4yBceFet1u+R/X3n152XgsP5ygJuXG2sHIEx974fyrnC1fWX1sJA9qJS+/vxYQ1eHXs36IdNnwmTOFnb3nm5ci3q9JN0PbaPccy77Jc6Bi/ns8AFrqbfrBd+VS53uWp3e1Nw9qMQLnqEzAT2+wBOnUhDI7FEvpvMjqaVDajuiKfutp0IfNJr5XC6NnzSGVsOJxXPIiYEBEoqYIyy4uSMnGVSHtcLklfdV93Q7Pf9t6+TQKjbOkDmdYlixsIEtOMAFTnBrQWhEtVqQUMQcYcHNrdBMKQwut2tDX+r5Q8WN6y5t7HHIoAMGWNjAFhzgAqfjRmJ9bj/TTfOXyuXuUquVvstM13A7EIjQc6a4U/w9b7M3MI5LUbo0R8mF98S2bmoU6KtC9erz7Zndbyl2V7HovdNo5AZyXufhRArfGMOdARihFFEtSB5iHtWGXs/Iwxc+Z2/wMFF4n9s4QwbHwAALG9iCA1zgRIMabZQe0iZCnbtS1GpBQoX4NYBwcwr6cNy8VOZ0KgUWNqgqcLieUU50v4aL8lmHos71SvWNahkDYxaWzezrb7fpxtZtZDnrFXCC21XRVsb3SmYwuNxsUUZ0qGatgjrX13k4QULvtG7Tza/bcD84gAen49ZhtobBhdmC9tcQBWgire3jAKJaKF7BcfNSmdOpFFjYIMngABc4MXGNlfwSLDG43GzRRKFDw+rVj1CCKMXoixclvX5aO/IPt3GGLCtTYGGDJIMDXODEONecCHemRw5qT0tYnfq6XZt+WSg9hC52jRbHJ1CKMPj7cj0QBMeibjyq+CqTd6ZQnfokqk0/y5Y4P7Vw1mBeYJ5j5GIqYnBhthimyWYUj6KJ9PyG4uZ0Nzf2HGTQAWNTmoQNbMEBLnCC+94Puzh+yvjUyIbdfxrXejP0S/Cvx3UW22394GROtvWTmTlBZW3bRz9zgicc/d+/LX8COvPsjEZJFnwAAAAASUVORK5CYII=',
	'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABFFJREFUSA21VktsVGUUPue/d6bTzrS0JogmYltMH2hiKG01PlhUWBSjsrKtpbEkRBJ14caNWzcujQs1IZoIQi3FxAcmsBCaiMRHW4oalD5CQU1EjOlrXr33/v/xfLdORSgYo9zkzvxzHt859/+/891husElIrzz84HqVCpxq7VhxhpThnDPuSXPS2SLxfDywYd755hZrgfDqzkA3D92eD1J2KjL8jiGxZLjYrw2kiJhD2vFLhAnJve1PvnTaoWuKbBn9EjFksm3uciuMcR5G0UXq5bKLr3R0ZWNwf/8eG54KLNQtnSb5/u1jqTC+N58masY3dv2eP7KuL8VePbbgzXZAt1nPONrb+fqW7tnfpz4OB3k8pvYUSOxVMfJwnNiaDKZrjhzZ9MTuZmxQ/VE0uysizLl9PWb9+6cLRVZKYDOC3ZhCxxJmxjxkhsWczz1mHG0VTc4QYYDsTIHv2GqgU2TQ2foeFoaPrHB+crAC9vhL/eqTpaeRDvV2rrRu8aH2gwZ3w+8L4prM5GZn3yRHdcJ80TCmGPbW2iii7ss4odkyDs6Tk2hc53spLPAk81ubfXrqd+yI1HSPoAtVsyTOBODBBwo9hzbgs7N/NzzIlRr2A2+29r9aiT2oSNj9lTf2HuLuLGGDT7ExLGag1xgACsmiWIbdA+24ECx59gWNdUZlkMpSp17+vTgpxqzV0ju10fN4MYaNvgQg1jkIBcYwFpmoFJtaltjDXt8l1adzuYvBLIUPqPcm97f+tTg4UvffKhAj9QkK2R3bTv3r2+jR9dtpPr0LTSd+10KNtwQsWvR2Jc/+OVsgxFqzS6e/yzKFSIy5vb3Z767zLtGB5qto4bKnD+8UGVbyFFfwvNewxagS4C/cvd2TntJ7ObKlbMBvfT9UZkN8rrVvMdn71Ro7Qtk6EDVgje+mI46EuxPGokkrfSz4HlMRWULDpSEdgOt945N14DDjoLwYY1Y5IBVwIhnRjEx/SYe/9KEKs9BRbBFT+Ye5G7MrMPXqlfJh1jkOKHZlVlRTGDHLFo1+38yGgiXcikV4+mE6oFXg+cqX2dh+yH763VLlXyIRQ4GUDUqHkZgAtuwzzkIF7QF409OkhgiYnobyAM/nxEc6NUXbPDFdo1FDqYbGMACJhTXBAWJW4RwQVtwUJjQ/Zt73lJ2nABLwJYvZy/SfFiMb6yvYNAJxMZTrbnAABYKQ85Zqcj9owNbdailvr1neOr04A5lQicmFENU4OAAZuHqJ8BvNFAuyb4iRc1OXI92f6xhc89HMyODHaI6s6+t97jRIIGeQ3KhihAuNV1wwt1FKjZrd9vAcyb+ShGzuLGGDT7EOLHdyEEuMIAFTGDHPMZTqNhtIecq/xI76BHXKeANxU6loyluaE0sdn7oBQ9yIrHwTktXLHbLg6KP+2/kGkwDGXBe/yTXKwWwpzf1hYMCuG7qK3O5xPIL6Ka99EtF8I3D/69/W/4ApxT4B5M9Lp0AAAAASUVORK5CYII='
]
option={
    backgroundColor:'#fff',
    color:['#F5A623','#5CCCA6'],
	grid: {
		top: '15%',
		right: '7%',
		left: '10%',
		bottom: '12%'
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow',
			shadowStyle: {
				//color: 'rgba(93,203,166,0.05)'
				color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(93,203,166,0.1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(93,203,166,0.02)'
                    }
                ]),
			}
		},
		backgroundColor: '#fff',
		textStyle: {
			color: '#5c6c7c'
		},
		padding: [10, 10],
		extraCssText: 'box-shadow: 0 1px 11px 0 rgba(0,30,53,0.14);border-radius: 1.71px;',
		formatter: function(params) {
			//	 console.log(params)


		}
	},
	legend: {
		left:'center',
		bottom: 15,
		icon:"circle",
		textStyle: {
			fontSize: 12,
			color: '#666'
		},
		data: ['预测收入', '售电收入']
	},
	xAxis: [{
		type: 'category',
		color: '#59588D',
		data: ['2016', '2017', '2018', '2019', '2020'],
		axisLabel: {
			color: '#666',
			textStyle: {
				fontSize: 12
			},
		},
		axisLine: {
			lineStyle: {
				color: '#e6e6e6',
			}
		},
		axisTick: {
			show: false
		},
	}],
	yAxis: [{
		axisLabel: {
			color: '#666',
			textStyle: {
				fontSize: 12
			},
		},
		axisLine: {
			show: false,
			lineStyle: {
				color: 'rgba(107,107,107,0.37)',
			}
		},
		axisTick: {
			show: false
		},
		splitLine: {
			lineStyle: {
				color: '#e6e6e6',
				width: 1,
				type: 'dashed',
			}
		}
	}],
	series: [{
			name: "预测收入",
			type: "line",
			smooth: true,
			zlevel: 2,
			showSymbol: false,
			symbolSize: 22,
			symbol: imgArr[0],
			lineStyle: {
				normal: {
					color: '#F5A623',
					shadowBlur: 4,
					shadowColor: 'rgba(245,166,35,0.50)',
					shadowOffsetY: 6,
					borderWidth: 2,
				}
			},
			data: [{
					name: "2016",
					value: 10
				},
				{
					name: "2017",
					value: 38
				},
				{
					name: "2018",
					value: 35,
				},
				{
					name: "2019",
					value: 73
				},
				{
					name: "2020",
					value: 80
				}
			]
		},
		{
			name: "售电收入",
			type: "line",
			smooth: true,
			zlevel: 2,
			showSymbol: false,
			symbolSize: 22,
			symbol: imgArr[1],
			lineStyle: {
				normal: {
					color: '#5CCCA6',
					shadowBlur: 4,
					shadowColor: 'rgba(90,203,166,0.50)',
					shadowOffsetY: 6,
					borderWidth: 2,
				}
			},
			data: [{
					name: "2016",
					value: 55
				},
				{
					name: "2017",
					value: 18
				},
				{
					name: "2018",
					value: 45,
				},
				{
					name: "2019",
					value: 53
				},
				{
					name: "2020",
					value: 5
				}
			]
		}
	]
};
