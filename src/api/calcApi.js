import axios from 'axios';

let secrets = require('./secrets.json');

var CalcApi = {
  getResults: function(input) {
    let request = {
      Ac: input.ac,
      Modifier: input.modifier,
      Stacks: input.stacks,
      CritMinimum: input.critLowerBound,
      CritMultiplier: input.critMultiplier,
      Attacks: input.attacks
    }

    axios.post(secrets.apiUrl, request, {
      headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
    .then(function(response) {
      return response;
    })
    .catch(function(err) {
      console.log("Axios error: " + err);
    });
  }
}

export default CalcApi;