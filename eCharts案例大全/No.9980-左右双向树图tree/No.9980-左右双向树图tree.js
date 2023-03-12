option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter:'{b0}'
        },
        series:[
            {
                type: 'tree',
                data: [
                        {
                        	"name": "flare",
                        	"children": [
                        	    {
                        			"name": "cluster"
                        		},
                        		{
                        			"name": "AgglomerativeCluster"
                        		},
                        		{
                        			"name": "CommunityStructure"
                        		},
                        		{
                        			"name": "HierarchicalCluster"
                        		},
                        		{
                        			"name": "MergeEdge"
                        		}
                        	]
                        }
                    ],
                height:'200px',
                width:'30%',
                top: '1%',
                left: '15%',
                bottom: '1%',
                right: '50%',
                symbolSize: 7,
                orient: 'RL',
                label: {
                        position: 'right',
                        verticalAlign: 'bottom',
                        align: 'right'
                },
                leaves: {
                    label: {
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right'
                    }
                },
                expandAndCollapse: false,
                animationDuration: 550,
                animationDurationUpdate: 750
            },
            {
                type: 'tree',
                data: [
                        {
                        	"name": "",
                        	"children": [
                        	    {
                        			"name": "cluster",
                        			"value": 3738
                        		},
                        		{
                        			"name": "AgglomerativeCluster",
                        			"value": 3938
                        		},
                        		{
                        			"name": "CommunityStructure",
                        			"value": 3812
                        		},
                        		{
                        			"name": "HierarchicalCluster",
                        			"value": 6714
                        		},
                        		{
                        			"name": "MergeEdge",
                        			"value": 743
                        		}
                        	]
                        }
                    ],
                height:'200px',
                width:'30%',
                top: '1%',
                left: '45%',
                bottom: '1%',
                right: '9%',
                symbolSize: 7,
                orient: 'LR',
                label: {
                        position: 'left',
                        verticalAlign: 'bottom',
                        align: 'center'
                },
                leaves: {
                    label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                    }
                },
                expandAndCollapse: false,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    }