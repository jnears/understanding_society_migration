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
            map: topology
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

        mapView: {
            fitToGeometry: {
                type: 'MultiPoint',
                coordinates: [
                    // Alaska west
                    [-164, 54],
                    // Greenland north
                    [-35, 84],
                    // New Zealand east
                    [179, -38],
                    // Chile south
                    [-68, -55]
                ]
            }
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
                                [48.516388, 15.552727], // Yemen
                                [110.004444, -7.491667] // Java
                            ]
                        },
                        className: 'animated-line',
                        color: '#387d47'
                    },
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [48.516388, 15.552727], // Yemen
                                [55.5325, -21.114444] // La reunion
                            ]
                        },
                        className: 'animated-line',
                        color: '#387d47'
                    },
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [55.5325, -21.114444], // La reunion
                                [-43.2, -22.9] // Brazil
                            ]
                        },
                        className: 'animated-line',
                        color: '#387d47'
                    },
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [48.516388, 15.552727], // Yemen
                                [78, 21] // India
                            ]
                        },
                        className: 'animated-line',
                        color: '#387d47'
                    },
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [110.004444, -7.491667], // Java
                                [4.9, 52.366667] // Amsterdam
                            ]
                        },
                        className: 'animated-line',
                        color: '#387d47'
                    },
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [-3, 55], // UK
                                [-61.030556, 14.681944] // Antilles
                            ]
                        },
                        className: 'animated-line',
                        color: '#387d47'
                    },
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [2.352222, 48.856613], // Paris
                                [-53, 4] // Guyane
                            ]
                        },
                        className: 'animated-line',
                        color: '#387d47'
                    }
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
                        name: 'Yemen',
                        geometry: {
                            type: 'Point',
                            coordinates: [48.516388, 15.552727] // Yemen
                        },
                        custom: {
                            arrival: 1414
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },
                    {
                        name: 'Java',
                        geometry: {
                            type: 'Point',
                            coordinates: [110.004444, -7.491667] // Java
                        },
                        custom: {
                            arrival: 1696
                        }
                    },
                    {
                        name: 'La Reunion',
                        geometry: {
                            type: 'Point',
                            coordinates: [55.5325, -21.114444] // La reunion
                        },
                        custom: {
                            arrival: 1708
                        }
                    },
                    {
                        name: 'Brazil',
                        geometry: {
                            type: 'Point',
                            coordinates: [-43.2, -22.9] // Brazil
                        },
                        custom: {
                            arrival: 1770
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },
                    {
                        name: 'India',
                        geometry: {
                            type: 'Point',
                            coordinates: [78, 21] // India
                        },
                        custom: {
                            arrival: 1670
                        }
                    },
                    {
                        name: 'Amsterdam',
                        geometry: {
                            type: 'Point',
                            coordinates: [4.9, 52.366667] // Amsterdam
                        },
                        custom: {
                            arrival: 1696
                        }
                    },
                    {
                        name: 'Antilles',
                        geometry: {
                            type: 'Point',
                            coordinates: [-61.030556, 14.681944] // Antilles
                        },
                        custom: {
                            arrival: 1714
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },
                    {
                        name: 'Guyane',
                        geometry: {
                            type: 'Point',
                            coordinates: [-53, 4] // Guyane
                        },
                        custom: {
                            arrival: 1714
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    }
                ],
                enableMouseTracking: false
            }
        ]
    });
})();