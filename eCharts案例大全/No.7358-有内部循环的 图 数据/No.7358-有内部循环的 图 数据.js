let json2 = [
	{"name":"【企业微信功能测试组】",value: 1},
	{"name":"业务团队",value: 1},
	{"name":"职能总部",value: 1},
	{"name":"产品中心",value: 1},
	{"name":"线上业务体系",value: 1},
	{"name":"AI出版中心",value: 1},
	{"name":"业务总部",value: 1},
	{"name":"研发中心",value: 1},
	{"name":"【服务保障联合小组】",value: 1},
	{"name":"东西北战区",value: 1},
	{"name":"西南战区",value: 1},
	{"name":"华北战区",value: 1},
	{"name":"慧学空间事业部",value: 1},
	{"name":"华南战区",value: 1},
	{"name":"华东战区",value: 1},
	{"name":"华中战区",value: 1},
	{"name":"服务保障中心",value: 1}
]
let json3 = [
	{
		"source":"【企业微信功能测试组】",
		"target":"产品中心",
		"value":74
	},
	{
		"source":"【企业微信功能测试组】",
		"target":"业务总部",
		"value":339
	},
	{
		"source":"【企业微信功能测试组】",
		"target":"华北战区",
		"value":171
	},
	{
		"source":"【企业微信功能测试组】",
		"target":"西南战区",
		"value":26
	},
	{
		"source":"业务团队",
		"target":"职能总部",
		"value":416
	},
	{
		"source":"业务团队",
		"target":"华南战区",
		"value":28
	},
	{
		"source":"业务团队",
		"target":"业务总部",
		"value":681
	},
	{
		"source":"职能总部",
		"target":"产品中心",
		"value":74
	},
	{
		"source":"职能总部",
		"target":"【企业微信功能测试组】",
		"value":268
	},
	{
		"source":"产品中心",
		"target":"研发中心",
		"value":272
	},
	{
		"source":"产品中心",
		"target":"【服务保障联合小组】",
		"value":25
	},
	{
		"source":"产品中心",
		"target":"AI出版中心",
		"value":142
	},
	{
		"source":"产品中心",
		"target":"业务团队",
		"value":114
	},
	{
		"source":"线上业务体系",
		"target":"【企业微信功能测试组】",
		"value":653
	},
	{
		"source":"线上业务体系",
		"target":"AI出版中心",
		"value":71
	},
	{
		"source":"线上业务体系",
		"target":"职能总部",
		"value":399
	},
	{
		"source":"线上业务体系",
		"target":"业务团队",
		"value":114
	},
	{
		"source":"AI出版中心",
		"target":"【企业微信功能测试组】",
		"value":205
	},
	{
		"source":"业务总部",
		"target":"产品中心",
		"value":74
	},
	{
		"source":"业务总部",
		"target":"职能总部",
		"value":207
	},
	{
		"source":"业务总部",
		"target":"华南战区",
		"value":28
	},
	{
		"source":"研发中心",
		"target":"职能总部",
		"value":94
	},
	{
		"source":"研发中心",
		"target":"服务保障中心",
		"value":13
	},
	{
		"source":"东西北战区",
		"target":"【企业微信功能测试组】",
		"value":134
	},
	{
		"source":"东西北战区",
		"target":"产品中心",
		"value":74
	},
	{
		"source":"西南战区",
		"target":"华北战区",
		"value":57
	},
	{
		"source":"华北战区",
		"target":"业务总部",
		"value":113
	},
	{
		"source":"华北战区",
		"target":"服务保障中心",
		"value":39
	},
	{
		"source":"华北战区",
		"target":"东西北战区",
		"value":200
	},
	{
		"source":"慧学空间事业部",
		"target":"职能总部",
		"value":105
	},
	{
		"source":"华南战区",
		"target":"【企业微信功能测试组】",
		"value":162
	},
	{
		"source":"华南战区",
		"target":"华北战区",
		"value":57
	},
	{
		"source":"华东战区",
		"target":"【企业微信功能测试组】",
		"value":268
	},
	{
		"source":"华东战区",
		"target":"业务总部",
		"value":113
	},
	{
		"source":"华东战区",
		"target":"东西北战区",
		"value":43
	},
	{
		"source":"华东战区",
		"target":"华北战区",
		"value":114
	},
	{
		"source":"华中战区",
		"target":"【企业微信功能测试组】",
		"value":268
	},
	{
		"source":"华中战区",
		"target":"业务总部",
		"value":226
	},
	{
		"source":"华中战区",
		"target":"东西北战区",
		"value":114
	},
	{
		"source":"华中战区",
		"target":"华北战区",
		"value":114
	},
	{
		"source":"华中战区",
		"target":"华东战区",
		"value":44
	},
	{
		"source":"华中战区",
		"target":"服务保障中心",
		"value":13
	}
]
option = {
    series: {
        type: 'graph',
        layout: 'circular',
        data: json2,
        links: json3,
        label: {
            show: true,
            offset: [0, 30]
        },
        focusNodeAdjacency: true
    }
}
