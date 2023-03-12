option = {
    series: {
        type: 'sankey',
        layout:'none',
        data: [{name:'finance'},
                {name:'human'},
                {name:'research1007'},
                {name:'research1059'},
                {name:'research1068'},
                {name:'lib02.hightech.com'},
                {name:'jira.hightech.com'},
                {name:'lib01.hightech.com'},
                {name:'git.hightech.com'},
                {name:'OA.hightech.com'}, 
                {name:'email.hightech.com'},
                {name:'直接访问IP地址'}],
        links: [{
            source: 'finance',
            target: 'OA.hightech.com',
            value: 1
        }, {
            source: 'finance',
            target: 'email.hightech.com',
            value: 1
        }, {
            source: 'human',
            target: 'OA.hightech.com',
            value: 1
        }, {
            source: 'human',
            target: 'email.hightech.com',
            value: 1
        }, 
        {
            source: 'research1007',
            target: 'lib02.hightech.com',
            value: 1
        },
        {
            source: 'research1007',
            target: 'jira.hightech.com',
            value: 1
        },
        {
            source: 'research1007',
            target: 'lib01.hightech.com',
            value: 1
        },{
            source: 'research1007',
            target: 'git.hightech.com',
            value: 1
        },{
            source: 'research1007',
            target: 'OA.hightech.com',
            value: 1
        },{
            source: 'research1007',
            target: 'email.hightech.com',
            value: 1
        },{
            source: 'research1007',
            target: '直接访问IP地址',
            value: 1
        },
        {
            source: 'research1059',
            target: 'lib02.hightech.com',
            value: 1
        },
        {
            source: 'research1059',
            target: 'jira.hightech.com',
            value: 1
        },
        {
            source: 'research1059',
            target: 'lib01.hightech.com',
            value: 1
        },{
            source: 'research1059',
            target: 'git.hightech.com',
            value: 1
        },{
            source: 'research1059',
            target: 'OA.hightech.com',
            value: 1
        },{
            source: 'research1059',
            target: 'email.hightech.com',
            value: 1
        },{
            source: 'research1059',
            target: '直接访问IP地址',
            value: 1
        },
        {
            source: 'research1068',
            target: 'lib02.hightech.com',
            value: 1
        },
        {
            source: 'research1068',
            target: 'jira.hightech.com',
            value: 1
        },
        {
            source: 'research1068',
            target: 'lib01.hightech.com',
            value: 1
        },{
            source: 'research1068',
            target: 'git.hightech.com',
            value: 1
        },{
            source: 'research1068',
            target: 'OA.hightech.com',
            value: 1
        },{
            source: 'research1068',
            target: 'email.hightech.com',
            value: 1
        },{
            source: 'research1068',
            target: '直接访问IP地址',
            value: 1
        },
        {
            source: 'b1',
            target: 'c',
            value: 2
        }]
    }
};