option = {
    timeline: {
        axisType: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        autoPlay:true,
        playInterval: 3000,
    },
options: [{
            /**gender */
            title: {
                text: 'Gender'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['female', 'male']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: 'Gender',
                type: 'bar',
                data: [246, 140]
            }]
        },
        {
            /**Nation*/
            title: {
                text: 'Nation'
            },
            xAxis: {
                data: ['KW', 'Lebanon', 'Egypt', 'SaudiArabia', 'Iran', 'Irap', 'Jordan', 'Lybia',
                    'Morocco', 'Palestine', 'Syria', 'Tunis', 'USA', 'venzuela'
                ]
            },
            series: [{
                name: 'Nation',
                data: [139, 15, 7, 10, 6, 16, 137, 4, 4, 26, 5, 11, 5, 1]
            }]
        },
        {
            /**StageID */
            title: {
                text: 'StageID'
            },
            xAxis: {
                data: ['High School', 'Middle Schoole', 'Low level']
            },
            series: [{
                name: 'StageID',
                data: [27, 169, 197]
            }]
        },
        {
            /**Topic */
            title: {
                text: 'Topic'
            },
            xAxis: {
                data: ['Arabic', 'Biology', 'Chemistry', 'English', 'French', 'Geology', 'History', 'IT', 'Math', 'Quran', 'Science', 'Spanish'],
            },
            series: [{
                name: 'Topic',
                data: [52, 22, 17, 36, 49, 18, 15, 77, 17, 22, 39, 22]
            }]
        },
        {
            /**Relation */
            title: {
                text: 'Relation'
            },
            xAxis: {
                data: ['Mum', 'Father']
            },
            series: [{
                name: 'Relation',
                data: [153, 233]
            }]
        },
        {
            /**Raised hands */
            title: {
                text: 'Raised hands'
            },
            xAxis: {
                data: ['0-19', '20-39', '40-59', '60-79', '80-99']
            },
            series: [{
                name: 'Raised hands',
                data: [115, 68, 34, 87, 82]
            }]
        },
        {
            /**Discussion */
            title: {
                text: 'Discussion'
            },
            xAxis: {
                data: ['0-29', '30-69', '70-100']
            },
            series: [{
                name: 'Discussion',
                data: [140, 150, 96]
            }]
        },
        {
            /**Parent school satisfaction */
            title: {
                text: 'satisfaction'
            },
            xAxis: {
                data: ['Good', 'Bad']
            },
            series: [{
                name: 'satisfaction',
                data: [237, 149]
            }]
        },
        {
            /**Student absence days */
            title: {
                text: 'Student absence days'
            },
            xAxis: {
                data: ['Above 7(days)', 'Under 7(days)']
            },
            series: [{
                name: 'absence',
                data: [148, 238]
            }]
        },
    ]
};