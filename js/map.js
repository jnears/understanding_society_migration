// Create a data value for each feature
// https://www.highcharts.com/docs/maps/map-collection
(async () => {
    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world-highres.topo.json'
    ).then(response => response.json());

    const data = [
        {
            'hc-key': 'gb',
             color: '#5797c8',
           
        },

        {
            'hc-key': 'au',
             //color: '#acd79f',
            info: '107 (0.7%) migrants came from Australia.'
        },
        {
            'hc-key': 'bd',
            
            info: '1199 (8%) migrants came from Bangladesh.'
        },
        {
            'hc-key': 'ca',
            // color: '#c0ffd5',
            info: '83 (0.6%) migrants came from Canada.'
        },
        {
            'hc-key': 'cn',
            // color: '#c0ffd5',
            info: '316 (2.1%) migrants came from China/Hong kong.'
        },
        {
            'hc-key': 'cy',
            // color: '#f5c54c',
            info: '99 (0.7%) migrants came from Cyprus.'
        },
        {
            'hc-key': 'fr',
            // color: '#c0ffd5',
            info: '154 (1%) migrants came from France.'
        },
        {
            'hc-key': 'de',
            // color: '#c0ffd5',
            info: '357 (2.4%) migrants came from Germany came from France.'
        },
        {
            'hc-key': 'gh', // not in list
            // color: '#c0ffd5',
            info: '325 (2.2%) migrants came from Ghana.'
        },
        {
            'hc-key': 'in',
            info: '1801 (12.1%) migrants came from India.'
        }
        ,{
            'hc-key': 'it',
            info: '159 (1.1%) migrants came from Italy.'
        },
        {
            'hc-key': 'jm',
            // color: '#c0ffd5',
            info: '567 (3.8%) migrants came from Jamaica.'
        }
        ,{
            'hc-key': 'ke',
            // color: '#c0ffd5',
            info: '323 (2.2%) migrants came from Kenya.'
        }
        ,{
            'hc-key': 'nz',
            // color: '#c0ffd5',
            info: '67 (0.4%) migrants came from New Zealand.'
        },
        {
            'hc-key': 'ng',
            // color: '#c0ffd5',
            info: '526 (3.5%) migrants came from Nigeria.'
        },
        {
            'hc-key': 'pk',
            // color: '#f5c54c',
            info: '1638 (11%) migrants came from Pakistan.'
        },{
            'hc-key': 'pl',
            // color: '#c0ffd5',
            info: '594 (4%) migrants came from Poland.'
        },{
            'hc-key': 'ie',
            // color: '#c0ffd5',
            info: '462 (3.1%) migrants came from Republic of Ireland.'
        },{
            'hc-key': 'za',
            // color: '#c0ffd5',
            info: '252 (1.7%) migrants came from South Africa.'
        },{
            'hc-key': 'es',
            // color: '#c0ffd5',
            info: '102 (0.7%) migrants came from Spain.'
        },{
            'hc-key': 'lk',
            // color: '#c0ffd5',
            info: '348 (2.3%) migrants came from Sri Lanka.'
        },{
            'hc-key': 'tr',
            // color: '#c0ffd5',
            info: '186 (1.2%) migrants came from Turkey.'
        },{
            'hc-key': 'us',
            // color: '#c0ffd5',
            info: '208 (1.4%) migrants came from USA.'
        },{
            'hc-key': 'ug',
            // color: '#c0ffd5',
            info: '164 (1.1%) migrants came from Uganda.'
        },
    ];

    // Initialize the chart
    Highcharts.mapChart('map', {
        chart: {
            map: topology,
            backgroundColor: 'transparent'

        },
         mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'top'
        }
      },

        title: {
           text: '',
           // text: 'Numbers of Migrants to the UK'
        },

        credits: {
                enabled: false
            },

        legend: {
            enabled: false
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<b>{point.key}</b>:<br/>',
            pointFormat: '{point.info}'
        },



        mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
       exporting: {
    enabled: false
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
                color: '#beecaf',
                states: {
                    hover: {
                        color: '#46993b'
                    }
                },

                borderColor: '#387d47',
                borderWidth: 0.2,
            },
             {
                type: 'mapline',
                color: '#f5c54c',
            //     data: [
                    
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [130, -20], // Australia
            //                     [-2,53] // UK
                                
            //                 ]
            //             },
            //             // className: 'animated-line',
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [90, 23], // Bangladesh
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [-95, 55], // Canada
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [110, 35], // China
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [32, 35], // Cyprus
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [2, 46], // France
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [10, 51], // Germany
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [-1, 8], // Ghana
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [80, 18], // India
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [12, 43], // Italy
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [-76, 18], // Jam
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [38, 0], // Kenya
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [170, -43], //  New Zealand
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [9, 10], //  Nigeria
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [68, 28], //  Pakistan
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [20, 53], //  Poland
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [-8, 53], //   Republic of Ireland
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [24, -30], //   South Africa
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [-3, 40], //   Spain
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [81, 8], //   Sri Lanka
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [34, 39], //   Turkey
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [-100, 40], //   USA
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },
            //         {
            //             geometry: {
            //                 type: 'LineString',
            //                 coordinates: [
            //                     [33, 2], //   Uganda
            //                     [-2,53] // UK
            //                 ]
            //             },
            //             //color: '#f5c54c',
            //         },

            //     ],
                lineWidth: 2,
                enableMouseTracking: false
            },
            {
                type: 'mappoint',
                color: '#387d47',
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
                         color: '#000000',
                        // custom: {
                        //     arrival: 1414
                        // },
                    },
                    {
                        name: 'Australia',
                        geometry: {
                            type: 'Point',
                            coordinates: [130, -20] // Australia
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },

                    {
                        name: 'Bangladesh',
                        geometry: {
                            type: 'Point',
                            coordinates: [90, 23] // Bangladesh
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },

                    {
                        name: 'Canada',
                        geometry: {
                            type: 'Point',
                            coordinates: [-95, 55] // Canada
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },

                    {
                        name: 'China',
                        geometry: {
                            type: 'Point',
                            coordinates: [110, 35] // China
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },

                    {
                        name: 'Cyprus',
                        geometry: {
                            type: 'Point',
                            coordinates: [32, 35] // Cyprus
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'France',
                        geometry: {
                            type: 'Point',
                            coordinates: [2, 46] // France
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'Germany',
                        geometry: {
                            type: 'Point',
                            coordinates: [10, 51] // Germany
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },

                    {
                        name: 'Ghana',
                        geometry: {
                            type: 'Point',
                            coordinates: [-1, 8] // Ghana
                        },
                        dataLabels: {
                            align: 'right',
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'India',
                        geometry: {
                            type: 'Point',
                            coordinates: [80, 18] // India
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'Italy',
                        geometry: {
                            type: 'Point',
                            coordinates: [12, 43] // Italy
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'Jamaica',
                        geometry: {
                            type: 'Point',
                            coordinates: [-76, 18] // Jamaica
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'Kenya',
                        geometry: {
                            type: 'Point',
                            coordinates: [38, 0] // Kenya
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'New Zealand',
                        geometry: {
                            type: 'Point',
                            coordinates: [170, -43] //  New Zealand
                        },
                        dataLabels: {
                            align: 'right',
                         },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'Nigeria',
                        geometry: {
                            type: 'Point',
                            coordinates: [9, 10] //  Nigeria
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'Pakistan',
                        geometry: {
                            type: 'Point',
                            coordinates: [68, 28] //  Pakistan
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'Poland',
                        geometry: {
                            type: 'Point',
                            coordinates: [20, 53] //  Poland
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'Republic of Ireland',
                        geometry: {
                            type: 'Point',
                            coordinates: [-8, 53] //   Republic of Ireland
                        },
                        dataLabels: {
                            align: 'right',
                         },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'South Africa',
                        geometry: {
                            type: 'Point',
                            coordinates: [24, -30] //   South Africa
                        },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'Spain',
                        geometry: {
                            type: 'Point',
                            coordinates: [-3, 40] //   Spain
                        },
                        dataLabels: {
                            align: 'right',
                         },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'Sri Lanka',
                        geometry: {
                            type: 'Point',
                            coordinates: [81, 8] //   Sri Lanka
                        },
                        dataLabels: {
                            align: 'right',
                         },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'Turkey',
                        geometry: {
                            type: 'Point',
                            coordinates: [34, 39] //   Turkey
                        },
                        dataLabels: {
                            align: 'right',
                         },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'USA',
                        geometry: {
                            type: 'Point',
                            coordinates: [-100, 40] //   USA
                        },
                        dataLabels: {
                            align: 'right',
                         },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    {
                        name: 'Uganda',
                        geometry: {
                            type: 'Point',
                            coordinates: [33, 2] //   Uganda
                        },
                        dataLabels: {
                            align: 'right',
                         },
                        marker: {
                            lineWidth: 0,
                            symbol: 'mapmarker',
                            radius: 6
                        },
                        custom: {
                            arrival: 1696
                        },
                    },
                    
                ],
                enableMouseTracking: false
            }
        ]
    });
})();