

const chapters = {
  gelephu: {
    paint: [
      {
        id: 'boundary',
        opacity: 1,
      },
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'landelevation',
        opacity: 0,
      },

    ],
    layout: [
      {
        id: 'labels',
        visibility: 'visible',
      },

    ],
    location: {
      center: [26.874490618227238, 90.49082737942794],
      zoom: 12.7,
      pitch: 60,
      bearing: 0.13,
      duration: 5000
    },
  },
  land: {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'landelevation3d',
        opacity: 0.5,
      },

      {
        id: 'landelevation',
        opacity: 1,
      },

    ],
    layout: [
      {
        id: 'labels',
        visibility: 'visible',
      },
    ],
    location: {
      center: [27, 91],
      zoom: 12.5,
      pitch: 0,
      bearing: 0.13,
      duration: 5000
    },
  },
};

const legendLabels = {
  // flood: 'Flood Hazard Levels',
  // landelevation3d: 'Land Elevation',
};

const filters = {
  // land: [
  //   {
  //     hasAll: true,
  //     value: 'buildingType',
  //     label: 'Building Type',
  //     onChange: 'updateBuildingType',
  //     options: [
  //       {
  //         label: 'Residential',
  //         value: 'residential',
  //       },
  //       {
  //         label: 'Private',
  //         value: 'private',
  //       },
  //       {
  //         label: 'Health',
  //         value: 'health',
  //       },
  //       {
  //         label: 'Education',
  //         value: 'education',
  //       },
  //     ],
  //   },
  // ],

};

const tooltipConfig = {
  gelephu: {
    layer: 'boundary',
  },
  land: {
    layer: 'landelevation3d',
    features: [
      {
        label: 'meters above sea level',
        value: 'value',
        type: 'inline',
      },
    ],
  },

};

const legendOptions = {
  boundary: {

  },
  landelevation: {
    name: 'Land Elevation (m)',
    colors: ['#ffffcc', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0'],
    min: 145,
    max: 250,
    range: true,
  },
  landelevation3d: {
    name: 'Land Elevation (m)',
    colors: ['#ffffcc', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0'],
    min: 145,
    max: 250,
    range: true,
  },
};

const chapterLayers = {
  gelephu: ['boundary'],
  land: ['landelevation3d'],
};


export {
  chapters, legendLabels, filters, legendOptions, chapterLayers
  , tooltipConfig,
};
