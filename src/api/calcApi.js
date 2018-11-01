import axios from 'axios';

let secrets = require('./secrets.json');

var CalcApi = {
  getResults: function(input) {
    let request = {
      Ac: input.ac,
      Modifier: input.modifier,
      DmgModifier: input.dmgmodifier,
      Stacks: input.stacks,
      CritMinimum: input.critLowerBound,
      CritMultiplier: input.critMultiplier,
      Attacks: input.attacks
    }

    let data = {
      AttackResult: [],
      FinalStacks: 0,
      TotalDamage: 0
    };

    return axios.post(secrets.apiUrl, request, {
      headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        //"Origin": secrets.origin
      }
    })
    .then(function(response) {
      //console.log(response.data);
      data.AttackResult = response.data.AttackResult;
      data.FinalStacks = response.data.FinalStacks;
      data.TotalDamage = response.data.TotalDamage;
      return data;
    })
    .catch(function(err) {
      data.AttackResult.push(err);
      //console.log("Axios error: " + err);
      return data;
    });
  }
}


export default CalcApi;