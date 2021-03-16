
//richiesta dei pacchetti
const Iota = require('@iota/core');
const Extract = require('@iota/extract-json');

//connessione al nodo
const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    });

    //Definizione dell'hash
    const tailTransactionHash =
'GQJSPYBFHHPWIH9QJQB9EJLO9MQCKBVC9QYXBPYKOUWFYHHLZELTTZEKQFZGCKZYYRYBVOMQSTEWXL999';

//Recupero della transazione e decodifica del messaggio
iota.getBundle(tailTransactionHash)
.then(bundle => {
    console.log(JSON.parse(Extract.extractJson(bundle)));
})
.catch(err => {
    console.error(err);
});