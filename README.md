checkVAT
===

This is a cli application that calls EU's VIES service and verifies if a given VAT Number is valid.

Check these links for more information about:
  * [VAT identification numbers](https://en.wikipedia.org/wiki/VAT_identification_number)
  * [VIES (VAT Information Exchange System)](http://ec.europa.eu/taxation_customs/vies/faq.html)

## Installation
```shell
npm install -g checkvat
```
## Usage
checkVAT doesn´t support batch requests

Simply call the executable with the VAT number as the first argument

#### Sending a request to the live service:
```shell
checkvat XX12345n
```
#### Sending a request to the test service:
```shell
checkvat XX100 --test-service
```
## Output

Valid request with Valid VAT Number:
```hs
Valid
```
Valid request with an Invalid VAT Number:
```rb
Invalid
```
Other kinds of error messages:
```rb
UNKNOWN_ERROR
```
```rb
INVALID_INPUT
```
(...)

## Error Messages

These VAT Numbers(along with any country code) will let you see each type of error when using the **test service** :

| VAT Number  | Response |
| ------------- | ------------- |
| 100 | Valid request with Valid VAT Number |
| 200 | Valid request with an Invalid VAT Number |
| 201 | Error : INVALID_INPUT |
| 202 | Error : INVALID_REQUESTER_INFO |
| 300 | Error : SERVICE_UNAVAILABLE |
| 301 | Error : MS_UNAVAILABLE |
| 302 | Error : TIMEOUT |
| 400 | Error : VAT_BLOCKED |
| 401 | Error : IP_BLOCKED |
| 500 | Error : GLOBAL_MAX_CONCURRENT_REQ |
| 501 | Error : GLOBAL_MAX_CONCURRENT_REQ_TIME |
| 600 | Error : MS_MAX_CONCURRENT_REQ |
| 601 | Error : MS_MAX_CONCURRENT_REQ_TIME |
| For all the other cases | Error : SERVICE_UNAVAILABLE |
