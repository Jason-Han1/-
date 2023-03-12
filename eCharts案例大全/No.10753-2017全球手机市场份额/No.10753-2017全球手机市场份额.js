var data1=[{
	"name": "Apple",
	"label": {
		"position": "inside",
		"rotate": "tangential"
	},
	"children": [{
		"name": "HTC",
		"value": 2,
		"label": {
			"position": "inside",
			"rotate": "tangential"
		}
	}, {
		"name": "金立",
		"value": 20,
		"label": {
			"position": "intside",
			"rotate": "tangential"
		}
	}]
}, {
	"name": "Huawei",
	"label": {
		"position": "inside",
		"rotate": "tangential"
	},
	"children": [{
		"name": "中兴",
		"value": 2,
		"label": {
			"position": "inside",
			"rotate": "tangential"
		}
	}, {
		"name": "摩托罗拉",
		"value": 2,
		"label": {
			"position": "intside",
			"rotate": "tangential"
		}
	}]
}, {
	"name": "Xiaomi",
	"label": {
		"position": "inside",
		"rotate": "tangential"
	},
	"children": [{
		"name": "联想",
		"value": 2,
		"label": {
			"position": "inside",
			"rotate": "tangential"
		}
	}, {
		"name": "诺基亚",
		"value": 2,
		"label": {
			"position": "intside",
			"rotate": "tangential"
		}
	}]
}, {
	"name": "Meizu",
	"label": {
		"position": "inside",
		"rotate": "tangential"
	},
	"children": [{
		"name": "锤子",
		"value": 2,
		"label": {
			"position": "inside",
			"rotate": "tangential"
		}
	}, {
		"name": "微软",
		"value": 2,
		"label": {
			"position": "intside",
			"rotate": "tangential"
		}
	}]
}, {
	"name": "Samsung",
	"label": {
		"position": "inside",
		"rotate": "tangential"
	},
	"children": [{
		"name": "谷歌",
		"value": 2,
		"label": {
			"position": "inside",
			"rotate": "tangential"
		}
	}, {
		"name": "LG",
		"value": 2,
		"label": {
			"position": "intside",
			"rotate": "tangential"
		}
	}]
}, {
	"name": "Oneplus",
	"label": {
		"position": "inside",
		"rotate": "tangential"
	},
	"children": [{
		"name": "索尼",
		"value": 2,
		"label": {
			"position": "inside",
			"rotate": "tangential"
		}
	}, {
		"name": "酷派",
		"value": 2,
		"label": {
			"position": "intside",
			"rotate": "tangential"
		}
	}]
}, {
	"name": "Oppo",
	"label": {
		"position": "inside",
		"rotate": "tangential"
	},
	"children": [{
		"name": "努比亚",
		"value": 2,
		"label": {
			"position": "inside",
			"rotate": "tangential"
		}
	}, {
		"name": "zuk",
		"value": 2,
		"label": {
			"position": "intside",
			"rotate": "tangential"
		}
	}]
}, {
	"name": "Vivo",
	"label": {
		"position": "inside",
		"rotate": "tangential"
	},
	"children": [{
		"name": "360",
		"value": 2,
		"label": {
			"position": "inside",
			"rotate": "tangential"
		}
	}, {
		"name": "...",
		"value": 2,
		"label": {
			"position": "intside",
			"rotate": "tangential"
		}
	}]
}];
option = {
    title: {
        text: '2017全球手机市场份额',
        subtext: 'data from IDC',
        link: ''
    },
    tooltip: {
        show: true
    },

    series: [{
        type: 'sunburst',
        nodeClick: false,
        levels: [{}, {
            r0: '10%',
            r: '40%',
            label: {},
            itemStyle: {
                //shadowBlur: 2,
                borderWidth: 2,
                borderColor: '#ffffff',
                opacity: 1
            }
        }, {
            r0: '40%',
            r: '70%',
            label: {},
            itemStyle: {
                borderWidth: 2,
                borderColor: '#ffffff',
                opacity: 0.8
            }
        }],
        data: data1,

    }]
};