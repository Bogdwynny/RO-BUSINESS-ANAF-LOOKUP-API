
A Node.js package for interacting with ANAF, the fiscal agency in Romania. It provides a simple and intuitive interface for retrieving and processing fiscal data.

<p align="center">
  <img src="https://github.com/Bogdwynny/RO-BUSINESS-ANAF-LOOKUP-API/blob/main/assets/logo-wh.png?raw=trueg#gh-light-mode-only" width="300" height="100">
  <img src="https://github.com/Bogdwynny/RO-BUSINESS-ANAF-LOOKUP-API/blob/main/assets/logo-dk.png?raw=true#gh-dark-mode-only" width="300" height="100">
</p>

---




## Installation

Install my-project with npm

```bash
  npm install anaf
```

## Usage/Examples

```javascript
const { lookup } = require('anaf')

lookup('COMPANY CUI')
    .then(data => {
        // Handle data
        console.log(data)
    })
    .catch(error => {
        // Handle error
        console.error(error)
    })
```

### Response
```json
{
    "date_generale": {
        "cui": 8082634,
        "data": "2023-04-08",
        "denumire": "BANCA TRANSILVANIA SA",
        "adresa": "JUD. TIMIŞ, MUN. TIMIŞOARA, STR. CORIOLAN BREDICEANU, NR.10, CITY BUSINESS EXCELLENCE CENTRE, CLĂDIREA 5 (E) ŞI 4 (D), PARTER, CAMERA P2",
        "nrRegCom": "J35/77/1996",
        "telefon": "0256293448",
        "fax": "0256293316",
        "codPostal": "300011",
        "act": "",
        "stare_inregistrare": "INREGISTRAT din data 02.02.1996",
        "data_inregistrare": "1996-02-02",
        "cod_CAEN": "6419",
        "iban": "",
        "statusRO_e_Factura": false,
        "organFiscalCompetent": "Administraţia Judeţeană a Finanţelor Publice Timiş"
    },
    "inregistrare_scop_Tva": {
        "scpTVA": false,
        "data_inceput_ScpTVA": "",
        "data_sfarsit_ScpTVA": "",
        "data_anul_imp_ScpTVA": "",
        "mesaj_ScpTVA": ""
    },
    "inregistrare_RTVAI": {
        "dataInceputTvaInc": "",
        "dataSfarsitTvaInc": "",
        "dataActualizareTvaInc": "",
        "dataPublicareTvaInc": "",
        "tipActTvaInc": "",
        "statusTvaIncasare": false
    },
    "stare_inactiv": {
        "dataInactivare": "",
        "dataReactivare": "",
        "dataPublicare": "",
        "dataRadiere": "",
        "statusInactivi": false
    },
    "inregistrare_SplitTVA": {
        "dataInceputSplitTVA": "",
        "dataAnulareSplitTVA": "",
        "statusSplitTVA": false
    },
    "adresa_sediu_social": {
        "sdenumire_Strada": "Str. Coriolan Brediceanu",
        "snumar_Strada": "10",
        "sdenumire_Localitate": "Mun. Timişoara",
        "scod_Localitate": "355",
        "sdenumire_Judet": "TIMIŞ",
        "scod_Judet": "35",
        "scod_JudetAuto": "TM",
        "stara": "",
        "sdetalii_Adresa": "CITY BUSINESS EXCELLENCE CENTRE, CLĂDIREA 5 (E) ŞI 4 (D), PARTER, CAMERA P2",
        "scod_Postal": "300011"
    },
    "adresa_domiciliu_fiscal": {
        "ddenumire_Strada": "Str. Coriolan Brediceanu",
        "dnumar_Strada": "10",
        "ddenumire_Localitate": "Mun. Timişoara",
        "dcod_Localitate": "355",
        "ddenumire_Judet": "TIMIŞ",
        "dcod_Judet": "35",
        "dcod_JudetAuto": "TM",
        "dtara": "",
        "ddetalii_Adresa": "CITY BUSINESS EXCELLENCE CENTRE, CLĂDIREA 5 (E) ŞI 4 (D), PARTER, CAMERA P2",
        "dcod_Postal": "300011"
    }
}
```
