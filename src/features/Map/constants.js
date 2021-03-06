const dataLayer = {
    id: 'data',
    type: 'fill',
    paint: {
        'fill-color': {
            property: 'win_party',
            stops: [
                [0, '#dae0e5'],
                [2, '#1A5CC6'],
                [4, '#EE818F']
            ]
        },
        'fill-outline-color': 'white'
    }
};

const mapSettings = {
    dragPan: false,
    scrollZoom: false,
    doubleClickZoom: false
};

const mapViewport = {
    width: '100vw',
    height: '100vh',
    latitude: 39.0742073,
    longitude: 23.727539,
    zoom: 6
};

export { dataLayer, mapSettings, mapViewport };
