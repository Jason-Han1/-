var imgData1="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAQCAYAAABgIu2QAAAEKElEQVRIic2VyWudVRiHn3O+7w65ublpGjN0sFbjgFKjWNRuHFYqBVFQwZ0LNwqCIoL/gv4FohvFGcWFFhEVFUFstYOUBjvQxph5uMkdv/EMr4u0GmoLCtr2gd/yHJ7zvu/hVSICwDMzi7x29ShPTM3xY5TwaH+Vo0nGsrUsW8dj/TU9a8w188bcnovcmotcZ4TRXNjqxPc7qHooeCg6kTCAWCsVKWiG0A6UWi4pVS8oFktKTVeC4OQNxeLPn7Y73YEgoKwV88ZSVor+IKBuLUNhSNd7VnfdQMhF0BAK3AE8WNH6oY+arTEHBSA8m2BD1MazCvDQ50X6gFEDgojrgmM9FmPt8TRrFWEmVJwsK7X/2cFNH7651kou5PM3USeMlZV69p1G+5Fc5PqLPeRfojY8cCObDVxbt+7eOu6pN1abL/dpPTkShq9M3zL2wzW/nvF/XnCu9c/PLQ983u6+umDM4x6KrFevwHnV+h8RwJxNs0/ryb216pNv7diyAIgSEf3c7NLOj1ud99rO3cl6K68EXKjUwft7Ky/su277QQ1UvulG73ac2w3oy223AW1Fdh+Ik/eBSggMrVo3LuttvpJQQBh5fy0wrIH+m4KgcCWVciOldeF+DbQfVkp2FsJL9mv+KQrkAXEALQ2sHFlc/f7FYsk8vakmFaWQyywIUFLKvdRTTMtnfvsNWAmB6KeVxuFUJLhv9KqB14c2jx9yLvykHTFnzCWVVsBoGLonq5WlHe3W8FdHj00cm138DohCwK9l+QeHV1vNhvN7b46zb8cHaqXXhgfvbipKE5lR+5OEI0lKx/n/fDx6tWa8XOKucjHfFejf41Zr4MCpUz1fLywdmF9r7kuT5AvAhwACk7F1n01245mGlz3Txty0M82Ob+vtqY/1loN7+oa2DBaCsbb3xancMJXlLBhD3ToWjaXhHB3nycWTiBA7oaIVPVpRUJpaoKlpzUghYDAIGA5CthYCsy3U86G17cluVDm1sjz2dr2h55utw6vt9sk0Sg5Ibn7RMAN/rbQIOOFETnetOzGdZLc1ld4169k16bl+0Ek4UCqd2FQsNGo9Pent1arao+gpQaWg6AuhpqEXfI/yBALOiqS5+DjzvhN5n0TOJy1rfdPacDXLavtbncGVOCmvxXHQiBLTiaIvo2484ZN0IsjNUS1yTIM9V/nzd68FTgN1K3Ko49yQM/bGVh5s6dXBSG+gR3oDPVgSNocwANQQ+iyCESEXR+48qXdh7Hw1cbYaWzscW0dkTCe1tp0a00iybCFKs4k0yZZsmi6R5QtBnp/S3q8E0AKabJC8kChA52xmgBIwD+xwsD0TtjlhRAvDAldZGDDQn0I1EanEXkqx92HkHLF1NrYmS4yNU2u7uTEtZ20DY+sYu4zzS4jMAbPANDAFZBeb5T8AWfNUrlmC30AAAAAASUVORK5CYII=";

option = {
            backgroundColor:"#041c3e",
            textStyle:{
                color:"#fff"
            },
            grid:{
                x:120,x2:40,y:60,y2:60
            },

             xAxis: {
                data: ['2014', '2015', '2016','2017','2018'],
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {show: true}
            },
            yAxis: {
                max: 200,
                offset: 30,
                splitLine: {show: false}
            },
            series : [
                 {
                    name: '1',
                    label: {
                        show: false,
                        position: 'top',
                        fontSize: 14
                    },
                    barGap:'-50%',
                    symbolRepeat: 'true',
                    symbolBoundingData:100,

                    symbolClip: true,
                    type: 'pictorialBar',
                    symbol: imgData1,
                    symbolSize: [40, 8],
                    symbolMargin: -3.8,
                    z: 2,
                    zlevel:2,
                    data: [100,80,50,40,70]
                 },
                 {
                    name: '2',
                    label: {
                        show: false,
                        position: 'top',
                        fontSize: 14
                    },
                    barGap:'50%',
                    symbolRepeat: 'true',
                    symbolBoundingData:100,

                    symbolClip: true,
                    type: 'pictorialBar',
                    symbol: imgData1,
                    symbolSize: [40, 8],
                    symbolMargin: -3.8,
                    z: 2,
                    zlevel:2,
                    data: [120,80,130,60,70]
                 }
        ]
    };