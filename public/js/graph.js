let mapdata = {};

fetch("/mapdata")
  .then(res => res.json())
  .then(json => {
    mapdata = json;
    console.log(mapdata);
    var cy = cytoscape({

      container: document.getElementById('cy'), // container to render in
      elements: mapdata,

      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            height: 20,
            width: 20,
            avoidOverlap: true,
            'label': 'data(id)',
            "background-color": "blue"
          }
        },

        {
          selector: 'edge',
          style: {
            width: 1,
            height: 1,
            'line-color': '#ccc',
          }
        }
      ],

      layout: {
        name: 'grid',
        spacingFactor: 0.5,
        rows: 3
      }

    });
  })
  .catch(err => {
    console.log(err);
  });

function exportMapdata() {
  fetch("/exportdata", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cy.json().elements)
  }).then(res => console.log(res));
}
