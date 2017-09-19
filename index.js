const soap = require('soap');

const testWSDL = 'http://ec.europa.eu/taxation_customs/vies/checkVatTestService.wsdl';
const liveWSDL = 'http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl';

module.exports = checkVAT;
function checkVAT(countryCode, vatNumber, isTest) {
  let url = isTest ? testWSDL : liveWSDL;
  return soap
    .createClientAsync(url)
    .then(client => {
      return client.checkVatAsync({ countryCode, vatNumber });
    })
    .then(result => {
      return result.valid ? 'Valid' : 'Invalid';
    })
    .catch(error => {
      if (error.root) {
        return error.root.Envelope.Body.Fault.faultstring;
      } else {
        return 'UNKNOWN_ERROR';
      }
    });
}
