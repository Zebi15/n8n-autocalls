module.exports = {
  nodes: [
    require('./dist/nodes/Autocalls/Autocalls.node.js'),
    require('./dist/nodes/Autocalls/AutocallsTrigger.node.js')
  ],
  credentials: [
    require('./dist/credentials/AutocallsApi.credentials.js')
  ],
};
