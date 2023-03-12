let _this = this
let serversArr = []
let allNum = 0
var myChart = null
let color = ['rgba(129,195,123,0.1)', 'rgba(155,84,187,0.1)', 'rgba(23,73,220,0.1)', 'rgba(84,52,183,0.1)',
    'rgba(128,206,210,0.1)', 'rgba(222,73,33,0.1)', 'rgba(67,200,193,0.1)', 'rgba(124,94,89,0.1)',
    'rgba(247,217,75,0.1)', 'rgba(35,141,241,0.1)', 'rgba(44,165,87,0.1)', 'rgba(0,216,194,0.1)'
]
let color1 = ['rgba(129,195,123,1)', 'rgba(155,84,187,1)', 'rgba(23,73,220,1)', 'rgba(84,52,183,1)',
    'rgba(128,206,210,1)', 'rgba(222,73,33,1)', 'rgba(67,200,193,1)', 'rgba(124,94,89,1)',
    'rgba(247,217,75,1)', 'rgba(35,141,241,1)', 'rgba(44,165,87,1)', 'rgba(0,216,194,1)'
]
let allowList = [{
	"count": 685,
	"holes": [{
		"count": 46,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 5,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "1"
		}, {
			"count": 1,
			"deflection": "2"
		}],
		"hole": 1
	}, {
		"count": 46,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "4"
		}],
		"hole": 12
	}, {
		"count": 46,
		"deflections": [{
			"count": 46,
			"deflection": "good"
		}],
		"hole": 8
	}, {
		"count": 45,
		"deflections": [{
			"count": 45,
			"deflection": "good"
		}],
		"hole": 11
	}, {
		"count": 45,
		"deflections": [{
			"count": 45,
			"deflection": "good"
		}],
		"hole": 6
	}, {
		"count": 44,
		"deflections": [{
			"count": 44,
			"deflection": "good"
		}],
		"hole": 7
	}, {
		"count": 44,
		"deflections": [{
			"count": 44,
			"deflection": "good"
		}],
		"hole": 3
	}, {
		"count": 44,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 14
	}, {
		"count": 44,
		"deflections": [{
			"count": 43,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 16
	}, {
		"count": 43,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 5,
			"deflection": "error"
		}],
		"hole": 15
	}, {
		"count": 42,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}],
		"hole": 5
	}, {
		"count": 42,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}],
		"hole": 2
	}, {
		"count": 41,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 13
	}, {
		"count": 38,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 9
	}, {
		"count": 38,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 4
	}, {
		"count": 37,
		"deflections": [{
			"count": 34,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 10
	}],
	"plateCode": "-200014"
}, {
	"count": 680,
	"holes": [{
		"count": 46,
		"deflections": [{
			"count": 45,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 9
	}, {
		"count": 45,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "5"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 12
	}, {
		"count": 45,
		"deflections": [{
			"count": 44,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 13
	}, {
		"count": 44,
		"deflections": [{
			"count": 44,
			"deflection": "good"
		}],
		"hole": 5
	}, {
		"count": 44,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 4,
			"deflection": "error"
		}],
		"hole": 7
	}, {
		"count": 44,
		"deflections": [{
			"count": 43,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 6
	}, {
		"count": 44,
		"deflections": [{
			"count": 43,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 2
	}, {
		"count": 44,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "6"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 15
	}, {
		"count": 41,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "7"
		}],
		"hole": 1
	}, {
		"count": 41,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}],
		"hole": 11
	}, {
		"count": 41,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}],
		"hole": 8
	}, {
		"count": 41,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 16
	}, {
		"count": 40,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}],
		"hole": 3
	}, {
		"count": 40,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}],
		"hole": 10
	}, {
		"count": 40,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 14
	}, {
		"count": 40,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "9"
		}],
		"hole": 4
	}],
	"plateCode": "-200007"
}, {
	"count": 667,
	"holes": [{
		"count": 44,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "2"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 9
	}, {
		"count": 44,
		"deflections": [{
			"count": 44,
			"deflection": "good"
		}],
		"hole": 11
	}, {
		"count": 44,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "3"
		}],
		"hole": 6
	}, {
		"count": 44,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "4"
		}],
		"hole": 16
	}, {
		"count": 44,
		"deflections": [{
			"count": 44,
			"deflection": "good"
		}],
		"hole": 13
	}, {
		"count": 43,
		"deflections": [{
			"count": 43,
			"deflection": "good"
		}],
		"hole": 1
	}, {
		"count": 43,
		"deflections": [{
			"count": 43,
			"deflection": "good"
		}],
		"hole": 4
	}, {
		"count": 43,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 7
	}, {
		"count": 42,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}],
		"hole": 3
	}, {
		"count": 41,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 14
	}, {
		"count": 41,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 8
	}, {
		"count": 40,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}],
		"hole": 5
	}, {
		"count": 39,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "5"
		}, {
			"count": 1,
			"deflection": "7"
		}],
		"hole": 2
	}, {
		"count": 39,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 12
	}, {
		"count": 38,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 15
	}, {
		"count": 38,
		"deflections": [{
			"count": 34,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}, {
			"count": 2,
			"deflection": "8"
		}],
		"hole": 10
	}],
	"plateCode": "-200004"
}, {
	"count": 656,
	"holes": [{
		"count": 44,
		"deflections": [{
			"count": 44,
			"deflection": "good"
		}],
		"hole": 5
	}, {
		"count": 43,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "9"
		}, {
			"count": 1,
			"deflection": "90"
		}],
		"hole": 6
	}, {
		"count": 43,
		"deflections": [{
			"count": 43,
			"deflection": "good"
		}],
		"hole": 16
	}, {
		"count": 43,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 13
	}, {
		"count": 42,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 4,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "89"
		}],
		"hole": 7
	}, {
		"count": 42,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 10
	}, {
		"count": 42,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 8
	}, {
		"count": 41,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 9
	}, {
		"count": 41,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}],
		"hole": 15
	}, {
		"count": 41,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 3
	}, {
		"count": 41,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "78"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 12
	}, {
		"count": 40,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 11
	}, {
		"count": 39,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}],
		"hole": 4
	}, {
		"count": 39,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 2
	}, {
		"count": 38,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 1
	}, {
		"count": 37,
		"deflections": [{
			"count": 34,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 14
	}],
	"plateCode": "-200005"
}, {
	"count": 654,
	"holes": [{
		"count": 47,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 7,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "67"
		}],
		"hole": 10
	}, {
		"count": 43,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "98"
		}],
		"hole": 8
	}, {
		"count": 42,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}],
		"hole": 5
	}, {
		"count": 42,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "67"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 1
	}, {
		"count": 42,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}],
		"hole": 7
	}, {
		"count": 42,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 2
	}, {
		"count": 41,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}],
		"hole": 3
	}, {
		"count": 41,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "6765"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 6
	}, {
		"count": 41,
		"deflections": [{
			"count": 35,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}, {
			"count": 3,
			"deflection": "34"
		}],
		"hole": 12
	}, {
		"count": 40,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 9
	}, {
		"count": 40,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "都是"
		}, {
			"count": 1,
			"deflection": "23都是"
		}],
		"hole": 15
	}, {
		"count": 40,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "342"
		}],
		"hole": 16
	}, {
		"count": 40,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "胃复春"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 4
	}, {
		"count": 39,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}],
		"hole": 13
	}, {
		"count": 38,
		"deflections": [{
			"count": 34,
			"deflection": "good"
		}, {
			"count": 4,
			"deflection": "error"
		}],
		"hole": 14
	}, {
		"count": 36,
		"deflections": [{
			"count": 34,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "23"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 11
	}],
	"plateCode": "-200013"
}, {
	"count": 653,
	"holes": [{
		"count": 44,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 6,
			"deflection": "error"
		}],
		"hole": 7
	}, {
		"count": 44,
		"deflections": [{
			"count": 43,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "防呆"
		}],
		"hole": 2
	}, {
		"count": 43,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "同仁堂"
		}],
		"hole": 1
	}, {
		"count": 42,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 5
	}, {
		"count": 42,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}],
		"hole": 4
	}, {
		"count": 41,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 3
	}, {
		"count": 41,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 4,
			"deflection": "error"
		}],
		"hole": 14
	}, {
		"count": 41,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 16
	}, {
		"count": 41,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}],
		"hole": 13
	}, {
		"count": 40,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}, {
			"count": 4,
			"deflection": "error"
		}],
		"hole": 15
	}, {
		"count": 40,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 6
	}, {
		"count": 40,
		"deflections": [{
			"count": 35,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}, {
			"count": 2,
			"deflection": "345"
		}],
		"hole": 12
	}, {
		"count": 40,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "321"
		}],
		"hole": 9
	}, {
		"count": 39,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 10
	}, {
		"count": 39,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}],
		"hole": 11
	}, {
		"count": 36,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}],
		"hole": 8
	}],
	"plateCode": "-200011"
}, {
	"count": 652,
	"holes": [{
		"count": 46,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "图v"
		}],
		"hole": 2
	}, {
		"count": 44,
		"deflections": [{
			"count": 43,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 16
	}, {
		"count": 43,
		"deflections": [{
			"count": 43,
			"deflection": "good"
		}],
		"hole": 3
	}, {
		"count": 43,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 5,
			"deflection": "error"
		}],
		"hole": 13
	}, {
		"count": 42,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "儿童"
		}],
		"hole": 15
	}, {
		"count": 42,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}],
		"hole": 10
	}, {
		"count": 42,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "655"
		}, {
			"count": 1,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "87"
		}],
		"hole": 12
	}, {
		"count": 41,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}],
		"hole": 5
	}, {
		"count": 41,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "423"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 1
	}, {
		"count": 41,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}],
		"hole": 8
	}, {
		"count": 40,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}],
		"hole": 6
	}, {
		"count": 39,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 9
	}, {
		"count": 39,
		"deflections": [{
			"count": 33,
			"deflection": "good"
		}, {
			"count": 4,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "524"
		}, {
			"count": 1,
			"deflection": "654"
		}],
		"hole": 7
	}, {
		"count": 39,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 14
	}, {
		"count": 37,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "987"
		}],
		"hole": 11
	}, {
		"count": 33,
		"deflections": [{
			"count": 32,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "654"
		}],
		"hole": 4
	}],
	"plateCode": "-200006"
}, {
	"count": 651,
	"holes": [{
		"count": 45,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 10
	}, {
		"count": 42,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 5
	}, {
		"count": 42,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 11
	}, {
		"count": 42,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 14
	}, {
		"count": 42,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "odd"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 3
	}, {
		"count": 42,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "asx"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 2
	}, {
		"count": 41,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 7
	}, {
		"count": 41,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "casdsd"
		}],
		"hole": 8
	}, {
		"count": 40,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 9
	}, {
		"count": 40,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}],
		"hole": 15
	}, {
		"count": 40,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 6
	}, {
		"count": 40,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "err"
		}],
		"hole": 13
	}, {
		"count": 40,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "ood"
		}, {
			"count": 1,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "goo"
		}],
		"hole": 12
	}, {
		"count": 40,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}],
		"hole": 4
	}, {
		"count": 37,
		"deflections": [{
			"count": 34,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 1
	}, {
		"count": 37,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}],
		"hole": 16
	}],
	"plateCode": "D0872781GR090820L-200008"
}, {
	"count": 651,
	"holes": [{
		"count": 45,
		"deflections": [{
			"count": 45,
			"deflection": "good"
		}],
		"hole": 4
	}, {
		"count": 43,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "ppt"
		}],
		"hole": 11
	}, {
		"count": 42,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "bbv"
		}],
		"hole": 14
	}, {
		"count": 42,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "nnb"
		}],
		"hole": 12
	}, {
		"count": 42,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 8
	}, {
		"count": 41,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 5
	}, {
		"count": 41,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "qqg"
		}],
		"hole": 7
	}, {
		"count": 41,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 16
	}, {
		"count": 41,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 13
	}, {
		"count": 40,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "ccd"
		}],
		"hole": 1
	}, {
		"count": 40,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}],
		"hole": 3
	}, {
		"count": 40,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "avv"
		}],
		"hole": 2
	}, {
		"count": 39,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "cgg"
		}, {
			"count": 1,
			"deflection": "cmm"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 15
	}, {
		"count": 39,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}],
		"hole": 10
	}, {
		"count": 38,
		"deflections": [{
			"count": 34,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}, {
			"count": 2,
			"deflection": "cbb"
		}],
		"hole": 6
	}, {
		"count": 37,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}],
		"hole": 9
	}],
	"plateCode": "-200009"
}, {
	"count": 650,
	"holes": [{
		"count": 43,
		"deflections": [{
			"count": 43,
			"deflection": "good"
		}],
		"hole": 9
	}, {
		"count": 43,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 15
	}, {
		"count": 43,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 5,
			"deflection": "error"
		}],
		"hole": 7
	}, {
		"count": 42,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "rtet"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 6
	}, {
		"count": 42,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "ttf"
		}, {
			"count": 1,
			"deflection": "ffg"
		}],
		"hole": 2
	}, {
		"count": 42,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}],
		"hole": 12
	}, {
		"count": 42,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "uu"
		}, {
			"count": 1,
			"deflection": "bb"
		}],
		"hole": 1
	}, {
		"count": 42,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "mm"
		}],
		"hole": 3
	}, {
		"count": 41,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "hh"
		}],
		"hole": 4
	}, {
		"count": 41,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}],
		"hole": 11
	}, {
		"count": 40,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 8
	}, {
		"count": 39,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 13
	}, {
		"count": 39,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}],
		"hole": 5
	}, {
		"count": 38,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}],
		"hole": 10
	}, {
		"count": 37,
		"deflections": [{
			"count": 35,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 14
	}, {
		"count": 36,
		"deflections": [{
			"count": 35,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 16
	}],
	"plateCode": "-200010"
}, {
	"count": 649,
	"holes": [{
		"count": 43,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 14
	}, {
		"count": 43,
		"deflections": [{
			"count": 40,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 6
	}, {
		"count": 43,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "gh"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 2
	}, {
		"count": 42,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}],
		"hole": 5
	}, {
		"count": 42,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "hg"
		}, {
			"count": 1,
			"deflection": "gh"
		}],
		"hole": 15
	}, {
		"count": 42,
		"deflections": [{
			"count": 42,
			"deflection": "good"
		}],
		"hole": 3
	}, {
		"count": 42,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 9
	}, {
		"count": 41,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 7
	}, {
		"count": 40,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "gh"
		}, {
			"count": 1,
			"deflection": "h"
		}, {
			"count": 1,
			"deflection": "hj"
		}],
		"hole": 11
	}, {
		"count": 40,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 13
	}, {
		"count": 39,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "ty"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 10
	}, {
		"count": 39,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 16
	}, {
		"count": 39,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 8
	}, {
		"count": 38,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 1
	}, {
		"count": 38,
		"deflections": [{
			"count": 35,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "ty"
		}],
		"hole": 12
	}, {
		"count": 38,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}],
		"hole": 4
	}],
	"plateCode": "-200015"
}, {
	"count": 643,
	"holes": [{
		"count": 44,
		"deflections": [{
			"count": 43,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 5
	}, {
		"count": 43,
		"deflections": [{
			"count": 43,
			"deflection": "good"
		}],
		"hole": 16
	}, {
		"count": 42,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}],
		"hole": 14
	}, {
		"count": 42,
		"deflections": [{
			"count": 41,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 2
	}, {
		"count": 42,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 3,
			"deflection": "error"
		}, {
			"count": 1,
			"deflection": "gf"
		}, {
			"count": 1,
			"deflection": "gf"
		}],
		"hole": 12
	}, {
		"count": 41,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 4,
			"deflection": "error"
		}],
		"hole": 7
	}, {
		"count": 41,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 4
	}, {
		"count": 40,
		"deflections": [{
			"count": 34,
			"deflection": "good"
		}, {
			"count": 5,
			"deflection": "hg"
		}, {
			"count": 1,
			"deflection": "gh"
		}],
		"hole": 1
	}, {
		"count": 39,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}],
		"hole": 9
	}, {
		"count": 39,
		"deflections": [{
			"count": 37,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 3
	}, {
		"count": 39,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 8
	}, {
		"count": 39,
		"deflections": [{
			"count": 38,
			"deflection": "good"
		}, {
			"count": 1,
			"deflection": "error"
		}],
		"hole": 13
	}, {
		"count": 39,
		"deflections": [{
			"count": 39,
			"deflection": "good"
		}],
		"hole": 10
	}, {
		"count": 38,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 6
	}, {
		"count": 38,
		"deflections": [{
			"count": 36,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}],
		"hole": 11
	}, {
		"count": 37,
		"deflections": [{
			"count": 33,
			"deflection": "good"
		}, {
			"count": 2,
			"deflection": "error"
		}, {
			"count": 2,
			"deflection": "hgj"
		}],
		"hole": 15
	}],
	"plateCode": "-200003"
}]
allowList.forEach(item => {
    item.plateCode = item.plateCode.slice(item.plateCode.length - 3)
    allNum = allNum + item.count
    serversArr.push({
        type: 'bar',
        name: item.plateCode,
        stack: '2',
        label: {
            normal: {
                show: true,
                position: ['12%', '30%'],
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                },

                formatter: function(params) {
                    console.log(params);
                    let icon
                    if (params.seriesIndex === _this.colorCode) {
                        icon = ['{value1|' + params.data.valueOf + '}' + '{c1|' + '个' + '}' + '\n' + ' \n' + '{name|' + params.data.plateCode + '}']
                    } else {
                        icon = ['{value|' + params.data.valueOf + '}' + '{c|' + '个' + '}' + '\n' + ' \n' + '{name|' + params.data.plateCode + '}']
                    }
                    return icon
                },
                rich: {
                    value: {
                        color: '#18b8f4',
                        fontSize: 20,
                    },
                    c: {
                        color: '#18b8f4',
                        fontSize: 16,
                    },
                    value1: {
                        color: '#fff',
                        fontSize: 20,
                    },
                    c1: {
                        color: '#fff',
                        fontSize: 16,
                    },
                    name: {
                        color: 'rgba(255, 255, 255, .7)',
                        fontSize: 16
                    }
                }
            }
        },
        barWidth: 40,
        itemStyle: {
            normal: {
                color: function(params) {
                    if (params.seriesIndex === _this.colorCode) {
                        return color1[params.seriesIndex]
                    } else {
                        return color[params.seriesIndex]
                    }
                }
            },
        },
        data: [{
            value: 1,
            valueOf: item.count,
            holes: item.holes,
            plateCode: item.plateCode,
        }]
    })
})
 var option1 = {
    title: [{
            text: '问题总数:' + '  ' + allNum,
            top: '6%',
            left: '0',
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        {
            subtext: '产品编号:',
            top: '11%',
            left: '0',
            subtextStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
    ],
    grid: {
        top: -290,
        left: '15%'
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false,
        }

    },
    yAxis: {
        data: ['工装'],
        axisLabel: {
            show: false,
            fontSize: 16,
            color: '#fff',
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: serversArr
}

var colorList1 = ['#3A48FF', '#4B71FF', '#6082FF', '#2184FF', '#2998FF', '#28A1FE', '#59CAFF', '#2DDAFF']
var colorList = ['#0263FF', '#4B8DF7', '#AF6DFF', '#8548F0', '#B4ECBE', '#59CFB3', '#ED464A', '#4061D0', '#E080A0', '#51CE9B', '#FD9B44', '#D9CF38', '#CB8E90', '#DFC8FF', '#5CD291', '#E67C89']
let servesData1 = []
let servesData2 = []
let holeArr = [{
        "count": 45,
        "deflections": [{
                "count": 44,
                "deflection": "good"
            },
            {
                "count": 1,
                "deflection": "error"
            }
        ],
        "hole": 9
    }, {
        "count": 45,
        "deflections": [{
                "count": 41,
                "deflection": "good"
            },
            {
                "count": 3,
                "deflection": "前盖正向长轴"
            },
            {
                "count": 1,
                "deflection": "error"
            }
        ],
        "hole": 15
    },
    {
        "count": 45,
        "deflections": [{
                "count": 39,
                "deflection": "good"
            },
            {
                "count": 3,
                "deflection": "DOME反向长轴"
            },
            {
                "count": 3,
                "deflection": "error"
            }
        ],
        "hole": 12
    },
    {
        "count": 44,
        "deflections": [{
                "count": 40,
                "deflection": "good"
            },
            {
                "count": 4,
                "deflection": "error"
            }
        ],
        "hole": 7
    },
    {
        "count": 44,
        "deflections": [{
                "count": 42,
                "deflection": "good"
            },
            {
                "count": 2,
                "deflection": "error"
            }
        ],
        "hole": 13
    },
    {
        "count": 43,
        "deflections": [{
                "count": 42,
                "deflection": "good"
            },
            {
                "count": 1,
                "deflection": "error"
            }
        ],
        "hole": 2
    },
    {
        "count": 42,
        "deflections": [{
                "count": 41,
                "deflection": "good"
            },
            {
                "count": 1,
                "deflection": "error"
            }
        ],
        "hole": 6
    },
    {
        "count": 41,
        "deflections": [{
                "count": 38,
                "deflection": "good"
            },
            {
                "count": 3,
                "deflection": "前盖正向长轴"
            }
        ],
        "hole": 1
    },
    {
        "count": 41,
        "deflections": [{
            "count": 41,
            "deflection": "good"
        }],
        "hole": 11
    },
    {
        "count": 41,
        "deflections": [{
                "count": 40,
                "deflection": "good"
            },
            {
                "count": 1,
                "deflection": "error"
            }
        ],
        "hole": 14
    },
    {
        "count": 41,
        "deflections": [{
                "count": 40,
                "deflection": "good"
            },
            {
                "count": 1,
                "deflection": "error"
            }
        ],
        "hole": 16
    },
    {
        "count": 41,
        "deflections": [{
            "count": 41,
            "deflection": "good"
        }],
        "hole": 8
    },
    {
        "count": 40,
        "deflections": [{
            "count": 40,
            "deflection": "good"
        }],
        "hole": 3
    },
    {
        "count": 40,
        "deflections": [{
                "count": 39,
                "deflection": "good"
            },
            {
                "count": 1,
                "deflection": "DOME反向长轴"
            }
        ],
        "hole": 4
    },
    {
        "count": 39,
        deflections: [{
                "count": 38,
                "deflection": "good"
            },
            {
                "count": 1,
                "deflection": "error"
            }
        ],
        "hole": 10
    },
]
let deflections = [{
    "count": 44,
    "deflection": "good"
}]
holeArr.forEach(item => {
    servesData1.push({
        value: item.count,
        name: '穴位' + item.hole,
        type: '穴位' + item.hole,
        deflections: item.deflections
    })
})
deflections.forEach(item => {
    servesData2.push({
        value: item.count,
        name: item.deflection,
        type: item.deflection
    })
})
var option2 = {
    title: {
        text: '分' + '\n' + '析' + '\n' + '图',
        left: '5%',
        top: '2%',
        width: 21,
        textStyle: {
            fontSize: 39,
            color: '#fff'
        }
    },
    tooltip: {
        formatter: function(param) {
            if (param.data.type === null) {
                return param.data.name + ":" + param.value + '个';
            } else {

                return param.data.type + ":" + param.value + '个';
            }
        }
    },
    series: [{
            name: '偏斜类',
            type: 'pie',
            radius: ['10%', '30%'],
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList1[params.dataIndex]
                    }
                }
            },
            label: {
                normal: {
                    fontSize: 16,
                    color: '#fff',
                    textAlign: 'center',
                    formatter: function(params) {
                        let icon = ['{name|' + params.data.type + '}' + '\n ' + ' ' + '{value|' + params.value + '}' + '{c|' + '个' + '}']
                        return icon
                    },
                    show: true,
                    rich: {
                        name: {
                            color: 'rgba(255, 255, 255, .7)',
                            fontSize: 14,
                            margin: 10
                        },
                        value: {
                            color: '#18b8f4',
                            fontSize: 20,
                        },

                    }
                },
            },

            data: servesData2
        },
        {
            name: '关键问题',
            type: 'pie',
            radius: ['60%', '85%'],
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    },
                }
            },
            label: {
                normal: {
                    fontSize: 16,
                    color: '#fff',
                    textAlign: 'center',
                    formatter: function(params) {
                        let icon = ['{name|' +'关键问题' + '}' + ' ' + ' ' + '{value|' + params.value + '}' + '{c|' + '个' + '}']
                        return icon
                    },
                    show: true,
                    rich: {
                        name: {
                            color: 'rgba(255, 255, 255, .7)',
                            fontSize: 14
                        },
                        value: {
                            color: '#18b8f4',
                            fontSize: 20,
                        },

                    }
                },

            },
            data: servesData1
        }
    ]
};

options = [option1, option2]