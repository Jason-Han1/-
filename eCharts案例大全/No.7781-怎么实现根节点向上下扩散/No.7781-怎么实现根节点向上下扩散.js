var data = {
    "name": "flare",
    "children": [
        {
            "name": "data",
            "children": [
                {
                     "name": "converters",
                     "children": [
                      {"name": "Converters", "value": 721},
                      {"name": "DelimitedTextConverter", "value": 4294}
                     ]
                },
                {
                    "name": "DataUtil",
                    "value": 3322
                }
            ]
        },
        {
            "name": "display",
            "children": [
                {"name": "DirtySprite", "value": 8833},
                {"name": "LineSprite", "value": 1732},
                {"name": "RectSprite", "value": 3623}
           ]
        },
        {
            "name": "flex",
            "children": [
                {"name": "FlareVis", "value": 4116}
            ]
        },
        {
           "name": "query",
           "children": [
            {"name": "AggregateExpression", "value": 1616},
            {"name": "And", "value": 1027},
            {
             "name": "methods",
             "children": [
              {"name": "add", "value": 593},
              {"name": "and", "value": 330},
              {"name": "average", "value": 287}
             ]
            },
            {"name": "Minimum", "value": 843},
            {"name": "Not", "value": 1554},
           ]
          },
        {
           "name": "scale",
           "children": [
            {"name": "IScaleMap", "value": 2105},
            {"name": "LinearScale", "value": 1316},
            {"name": "LogScale", "value": 3151},
            {"name": "OrdinalScale", "value": 3770}
           ]
        }
    ]
};

var data2 = {
    "name": "flare",
    "children": [
        {
            "name": "flex",
            "children": [
                {"name": "FlareVis", "value": 4116}
            ]
        },
        {
            "name": "scale",
            "children": [
                {"name": "IScaleMap", "value": 2105},
                {"name": "LinearScale", "value": 1316},
                {"name": "LogScale", "value": 3151},
                {"name": "OrdinalScale", "value": 3770},
                {"name": "QuantileScale", "value": 2435},
                {"name": "QuantitativeScale", "value": 4839},
                {"name": "RootScale", "value": 1756},
                {"name": "Scale", "value": 4268},
                {"name": "ScaleType", "value": 1821},
                {"name": "TimeScale", "value": 5833}
           ]
        },
        {
            "name": "display",
            "children": [
                {"name": "DirtySprite", "value": 8833}
           ]
        }
    ]
};
option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [{
            name: 'tree1',
            icon: 'rectangle'
        },
        {
            name: 'tree2',
            icon: 'rectangle'
        }],
        borderColor: '#c23531'
    },
    series:[
        {
            type: 'tree',

            data: [data],

            top: '5%',
            left: 'center',
            bottom: '50%',
//          right: '60%',
	
            symbolSize: 7,
			orient: 'BT',
            label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right'
            },
	
            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750

        },
        {
            type: 'tree',
            data: [data2],

            top: '50%',
            left: 'center',
//          left: '60%',
            bottom: '5%',
//          right: '18%',

            symbolSize: 7,
			orient: 'TB',
            label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right'
            },

            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
};