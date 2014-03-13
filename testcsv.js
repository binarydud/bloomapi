//var csv = require('json-csv');
//var jsoncsv = require('jsoncsv');
//var json2csv = require('json2csv');
var flatten = require('flat').flatten;
var csv = require('to-csv');
var json = [
    {
      "npi": 1164535928,
      "type": "individual",
      "last_name": "BAKER",
      "first_name": "GENE",
      "name_prefix": "MR.",
      "credential": "DDS",
      "business_address": {
        "address_line": "4731 TROUSDALE DRIVE",
        "address_details_line": "SUITE #8",
        "city": "NASHVILLE",
        "state": "TN",
        "zip": "37220",
        "country_code": "US",
        "phone": "6153317100",
        "fax": "6153317100"
      },
      "practice_address": {
        "address_line": "4731 TROUSDALE DRIVE",
        "address_details_line": "SUITE #8",
        "city": "NASHVILLE",
        "state": "TN",
        "zip": "37220",
        "country_code": "US",
        "phone": "6153317100",
        "fax": "6153317100"
      },
      "enumeration_date": "2006-08-16T00:00:00.000Z",
      "last_update_date": "2007-07-08T00:00:00.000Z",
      "gender": "male",
      "provider_details": [
        {
          "healthcare_taxonomy_code": "122300000X",
          "license_number": "DS2851",
          "taxonomy_switch": "yes"
        }
      ],
      "sole_proprietor": "no"
    },
    {
      "npi": 1902908254,
      "type": "individual",
      "last_name": "WOODS",
      "first_name": "WALTER",
      "middle_name": "ROBERT",
      "name_prefix": "MR.",
      "credential": "DPH",
      "business_address": {
        "address_line": "1211 22ND AVE S",
        "address_details_line": "ROOM 1815 TVC",
        "city": "NASHVILLE",
        "state": "TN",
        "zip": "37220",
        "country_code": "US",
        "phone": "6153224775",
        "fax": "6159361893"
      },
      "practice_address": {
        "address_line": "1211 22ND AVE S",
        "address_details_line": "ROOM 1815 TVC",
        "city": "NASHVILLE",
        "state": "TN",
        "zip": "37220",
        "country_code": "US",
        "phone": "6153224775",
        "fax": "6159361893"
      },
      "enumeration_date": "2006-09-05T00:00:00.000Z",
      "last_update_date": "2007-07-08T00:00:00.000Z",
      "gender": "male",
      "provider_details": [
        {
          "healthcare_taxonomy_code": "183500000X",
          "license_number": "4754",
          "taxonomy_switch": "yes"
        }
      ],
      "other_identifiers": [
        {
          "identifier": "PHARMACIST LICENSE",
          "type": "other",
          "state": "TN",
          "issuer": "4754"
        }
      ],
      "sole_proprietor": "no"
    },
    {
      "npi": 1114026267,
      "type": "individual",
      "last_name": "ROMERSA",
      "first_name": "JOHN",
      "middle_name": "CHANDLER",
      "credential": "DDS",
      "business_address": {
        "address_line": "4105 HILLSBORO CIRCLE",
        "city": "NASHVILLE",
        "state": "TN",
        "zip": "37220",
        "country_code": "US",
        "phone": "6153838834",
        "fax": "6153838835"
      },
      "practice_address": {
        "address_line": "4105 HILLSBORO CIRCLE",
        "city": "NASHVILLE",
        "state": "TN",
        "zip": "37220",
        "country_code": "US",
        "phone": "6153838834",
        "fax": "6153838835"
      },
      "enumeration_date": "2006-09-22T00:00:00.000Z",
      "last_update_date": "2007-07-08T00:00:00.000Z",
      "gender": "male",
      "provider_details": [
        {
          "healthcare_taxonomy_code": "122300000X",
          "license_number": "DS4378",
          "taxonomy_switch": "yes"
        }
      ],
      "sole_proprietor": "no"
    },
    {
      "npi": 1881743094,
      "type": "individual",
      "last_name": "SIKORA",
      "first_name": "XAVIER",
      "middle_name": "A.",
      "name_prefix": "DR.",
      "credential": "D.C.",
      "business_address": {
        "address_line": "4811 TROUSDALE DRIVE",
        "address_details_line": "SUITE D",
        "city": "NASHVILLE",
        "state": "TN",
        "zip": "37220",
        "country_code": "US",
        "phone": "6153610484"
      },
      "practice_address": {
        "address_line": "4811 TROUSDALE DRIVE",
        "address_details_line": "SUITE D",
        "city": "NASHVILLE",
        "state": "TN",
        "zip": "37220",
        "country_code": "US",
        "phone": "6153610484"
      },
      "enumeration_date": "2007-01-09T00:00:00.000Z",
      "last_update_date": "2008-06-18T00:00:00.000Z",
      "gender": "male",
      "provider_details": [
        {
          "healthcare_taxonomy_code": "111N00000X",
          "license_number": "1748",
          "taxonomy_switch": "yes"
        }
      ],
      "other_identifiers": [
        {
          "identifier": "U80066",
          "type": "medicare upin",
          "state": "TN"
        }
      ],
      "sole_proprietor": "no"
    },
    {
      "npi": 1427346980,
      "type": "organization",
      "employer_identification_number": "<UNAVAIL>",
      "business_name": "DR. LISA DAVIS VISIONCARE",
      "business_address": {
        "address_line": "4811 TROUSDALE DRIVE",
        "address_details_line": "SUITE A",
        "city": "NASHVILLE",
        "state": "TN",
        "zip": "37220",
        "country_code": "US"
      },
      "practice_address": {
        "address_line": "4811 TROUSDALE DRIVE",
        "address_details_line": "SUITE A",
        "city": "NASHVILLE",
        "state": "TN",
        "zip": "37220",
        "country_code": "US",
        "phone": "6158232482"
      },
      "enumeration_date": "2011-07-19T00:00:00.000Z",
      "last_update_date": "2011-07-19T00:00:00.000Z",
      "organization_official": {
        "last_name": "DAVIS",
        "first_name": "MARGARET",
        "middle_name": "E",
        "title": "OPTOMETRIST   OWNER",
        "phone": "6158232482",
        "name_prefix": "DR."
      },
      "provider_details": [
        {
          "healthcare_taxonomy_code": "261QH0100X",
          "taxonomy_switch": "yes"
        }
      ],
      "organization_subpart": "no"
    },
    {
      "npi": 1982986550,
      "type": "individual",
      "last_name": "WILLIAMS",
      "first_name": "TANIA",
      "credential": "AU.D.",
      "other_last_name": "WILLIAMS",
      "other_first_name": "TANIA",
      "other_name_prefix": "DR.",
      "other_credential": "AU.D.",
      "provider_other_last_name_type_code": "professional name",
      "business_address": {
        "address_line": "5544 FRANKLIN PIKE",
        "address_details_line": "SUITE 100",
        "city": "NASHVILLE",
        "state": "TN",
        "zip": "37220",
        "country_code": "US",
        "phone": "6153770420",
        "fax": "6153778524"
      },
      "practice_address": {
        "address_line": "5544 FRANKLIN PIKE",
        "address_details_line": "SUITE 100",
        "city": "NASHVILLE",
        "state": "TN",
        "zip": "37220",
        "country_code": "US",
        "phone": "6153770420",
        "fax": "6153778524"
      },
      "enumeration_date": "2011-09-09T00:00:00.000Z",
      "last_update_date": "2011-09-09T00:00:00.000Z",
      "gender": "female",
      "provider_details": [
        {
          "healthcare_taxonomy_code": "231H00000X",
          "license_number": "1218",
          "taxonomy_switch": "yes"
        }
      ],
      "sole_proprietor": "no"
    }
  ];
console.log(csv(flatten(json), {headers: false}));
