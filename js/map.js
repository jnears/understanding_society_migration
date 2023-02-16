// Create a data value for each feature
// https://www.highcharts.com/docs/maps/map-collection
(async () => {
    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world-highres.topo.json'
    ).then(response => response.json());

    const data = [
        {
            'hc-key': 'au',
            color: '#c0ffd5',
            info: '107 (0.7%) migrants came from Australia.'
        },
        {
            'hc-key': 'bd',
            color: '#387d47',
            info: '1199 (8%) migrants came from Bangladesh.'
        },
        {
            'hc-key': 'ca',
            color: '#c0ffd5',
            info: '83 (0.6%) migrants came from Canada.'
        },
        {
            'hc-key': 'cn',
            color: '#c0ffd5',
            info: '316 (2.1%) migrants came from China/Hong kong.'
        },
        {
            'hc-key': 'cy',
            color: '#387d47',
            info: '99 (0.7%) migrants came from Cyprus.'
        },
        {
            'hc-key': 'fr',
            color: '#c0ffd5',
            info: '154 (1%) migrants came from France.'
        },
        {
            'hc-key': 'de',
            color: '#c0ffd5',
            info: '357 (2.4%) migrants came from Germany came from France.'
        },
        {
            'hc-key': 'gh', // not in list
            color: '#c0ffd5',
            info: '325 (2.2%) migrants came from Ghana.'
        },
        {
            'hc-key': 'in',
            color: '#387d47',
            info: '1801 (12.1%) migrants came from India.'
        }
        ,{
            'hc-key': 'it',
            color: '#c0ffd5',
            info: '159 (1.1%) migrants came from Italy.'
        },
        {
            'hc-key': 'jm',
            color: '#c0ffd5',
            info: '567 (3.8%) migrants came from Jamaica.'
        }
        ,{
            'hc-key': 'ke',
            color: '#c0ffd5',
            info: '323 (2.2%) migrants came from Kenya.'
        }
        ,{
            'hc-key': 'nz',
            color: '#c0ffd5',
            info: '67 (0.4%) migrants came from New Zealand.'
        },
        {
            'hc-key': 'ng',
            color: '#c0ffd5',
            info: '526 (3.5%) migrants came from Nigeria.'
        },
        {
            'hc-key': 'pk',
            color: '#387d47',
            info: '1638 (11%) migrants came from Pakistan.'
        },{
            'hc-key': 'pl',
            color: '#c0ffd5',
            info: '594 (4%) migrants came from Poland.'
        },{
            'hc-key': 'ie',
            color: '#c0ffd5',
            info: '462 (3.1%) migrants came from Republic of Ireland.'
        },{
            'hc-key': 'za',
            color: '#c0ffd5',
            info: '252 (1.7%) migrants came from South Africa.'
        },{
            'hc-key': 'es',
            color: '#c0ffd5',
            info: '102 (0.7%) migrants came from Spain.'
        },{
            'hc-key': 'lk',
            color: '#c0ffd5',
            info: '348 (2.3%) migrants came from Sri Lanka.'
        },{
            'hc-key': 'es',
            color: '#c0ffd5',
            info: '186 (1.2%) migrants came from Turkey.'
        },{
            'hc-key': 'us',
            color: '#c0ffd5',
            info: '208 (1.4%) migrants came from USA.'
        },{
            'hc-key': 'ug',
            color: '#c0ffd5',
            info: '164 (1.1%) migrants came from Uganda.'
        },
    ];

    // Initialize the chart
    Highcharts.mapChart('map', {
        chart: {
            map: topology,
            backgroundColor: '#fcf1d6'
        },
         mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'top'
        }
      },

        title: {
            text: 'Numbers of Migrants to the UK'
        },
        legend: {
            enabled: false
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<b>{point.key}</b>:<br/>',
            pointFormat: '{point.info}'
        },

        

        series: [
            {
                data,
                keys: ['hc-key', 'color', 'info'],
                name: 'Migrants',
                states: {
                    hover: {
                        color: '#a4edba'
                    }
                }
            },
            {
                type: 'mapline',
                data: [
                    
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [130, -20], // Australia
                                [-2,53] // UK
                                
                            ]
                        },
                        className: 'animated-line',
                        color: '#387d47'
                    },
                    // {
                    //     geometry: {
                    //         type: 'LineString',
                    //         coordinates: [
                    //             [2.352222, 48.856613], // Paris
                    //             [-53, 4] // Guyane
                    //         ]
                    //     },
                    //     className: 'animated-line',
                    //     color: '#387d47'
                    // }
                ],
                lineWidth: 2,
                enableMouseTracking: false
            },
            {
                type: 'mappoint',
                color: '#333',
                dataLabels: {
                    format: '<b>{point.name}</b><br><span style="font-weight: normal; opacity: 0.5">{point.custom.arrival}</span>',
                    align: 'left',
                    verticalAlign: 'middle'
                },
                data: [
                    {
                        name: 'UK',

                        geometry: {
                            type: 'Point',
                            coordinates: [-2,53] // UK
                        },
                        custom: {
                            arrival: 1414
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },
                    {
                        name: 'Australia',
                        geometry: {
                            type: 'Point',
                            coordinates: [130, -20] // Australia
                        },
                        custom: {
                            arrival: 1696
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },

                    {
                        name: 'Bangladesh',
                        geometry: {
                            type: 'Point',
                            coordinates: [90, 23] // Bangladesh
                        },
                        custom: {
                            arrival: 1696
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },

                    {
                        name: 'Canada',
                        geometry: {
                            type: 'Point',
                            coordinates: [-95, 55] // Canada
                        },
                        custom: {
                            arrival: 1696
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },

                    {
                        name: 'China',
                        geometry: {
                            type: 'Point',
                            coordinates: [110, 35] // China
                        },
                        custom: {
                            arrival: 1696
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },

                    {
                        name: 'Cyprus',
                        geometry: {
                            type: 'Point',
                            coordinates: [32, 35] // Cyprus
                        },
                        custom: {
                            arrival: 1696
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },
                    {
                        name: 'France',
                        geometry: {
                            type: 'Point',
                            coordinates: [2, 46] // France
                        },
                        custom: {
                            arrival: 1696
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },
                    {
                        name: 'Germany',
                        geometry: {
                            type: 'Point',
                            coordinates: [10, 56] // Germany
                        },
                        custom: {
                            arrival: 1696
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },
                    
                ],
                enableMouseTracking: false
            }
        ]
    });
})();