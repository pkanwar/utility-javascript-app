const crypto = require('crypto')
const sha1 = require('js-sha1')
const rgbHex = require('rgb-hex')
const hexRgb = require('hex-rgb')
const baseconvert = require('baseconvert')
const { Convert } = require('any-to-any')

const DateMap = {
  "Jan":"1",
  "Feb":"2",
  "Mar":"3",
  "Apr":"4",
  "May":"5",
  "Jun":"6",
  "Jul":"7",
  "Aug":"8",
  "Sep":"9",
  "Oct":"10",
  "Nov":"11",
  "Dec":"12"
}

const checkValidUrl = (url)=>{

  let urlRegEx = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/

  return urlRegEx.test(url) ? true : false

}

const urlEncoder = (url)=>{

  if(!checkValidUrl(url)){
    return "invalid url"
  }

  if(url.startsWith("www.")){
      url = "https://" + url
  }

  return encodeURIComponent(url)
}

const urlDecoder = (encodedUrl)=>{
  return decodeURIComponent(encodedUrl)   
}

const base64Encoder = (text)=>{
    return Buffer.from(text).toString('base64')
}

const base64Decoder = (encodedString)=>{
  return Buffer.from(encodedString, 'base64').toString('ascii')
}

const md5HashEncoder = (text)=>{
  return crypto.createHash('md5').update(text).digest('hex')
}

const sha1HashEncoder = (text)=>{
  return crypto.createHmac('sha1','prateek').update(text).digest('hex')
}

const sha256HashEncoder = (text)=>{
  return crypto.createHmac('sha256','prateek').update(text).digest('hex')
}

const sha512HashEncoder = (text)=>{
  return crypto.createHmac('sha512','prateek').update(text).digest('hex')
}

const convertTimestampToHumanDate = (unixTimestamp)=>{
  unixTimestamp = unixTimestamp/1000;
  let date = new Date(unixTimestamp*1000);
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDay()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const humanDate = {year,month,day,hours,minutes,seconds}

  return humanDate
}

const convertHumanDateToTimestamp = (year,month,day,hours,min,sec) => {
    let date = new Date(year,month-1,day,hours,min,sec)
    return date.getTime()
}

const checkRGB = (val)=>{
  return (val >=0 && val <= 255)
}

const convertRgbToHex = (red,blue,green)=>{

      if(!checkRGB(red) || !checkRGB(green) || !checkRGB(blue)){
        return "Invalid Red Blue Green values, The values should be between 0 to 255"
      }      

      return rgbHex(red,blue,green)
}

const convertHexToRgb = (val) => {
    try{
        return hexRgb(val)
    }catch(e){
        return "invalid hex string"
    }
}

const convertHexToDec = (val)=>{
  return baseconvert.hex2dec(val)
}

const convertDecToHex = (val)=>{
  return baseconvert.dec2hex(val)
}

const convertBinToHex = (val)=>{
  return baseconvert.bin2hex(val)
}

const convertHexToBin = (val)=>{
  return baseconvert.hex2bin(val)
}

const convertDecToBin = (val)=>{
  console.log("val : " + val)
  return baseconvert.dec2bin(val)
}

const convertBinToDec = (val)=>{
  return baseconvert.bin2dec(val)
}

const convertDecToOct = (val)=>{
  return Convert(val,8,10)
}

const convertOctToDec = (val)=>{
  return Convert(val,10,8)
}

const convertOctToBin = (val) => {
  return Convert(val,8,2)
}

const convertBinToOct = (val) => {
  return Convert(val,2,8)
}

const convertHexToOct = (val) =>{

  let dec = convertHexToDec(val)
  return convertDecToOct(dec)
}

const convertOctToHex = (val)=>{

  let dec = convertOctToDec(val)
  return convertDecToHex(dec)
}

const convertMeterToCentimeter = (val)=>{
  return val*100
}
const convertCentimeterToMeter = (val)=>{
  return val/100
}

const convertMeterToKiloMeter = (val)=>{
  return val/1000
}

const convertKiloMeterToMeter = (val)=>{
  return val*1000
}

const convertCentimeterToKilometer = (val)=>{
  return val/100000
}

const convertKilometerToCentimeter = (val)=>{
  return val*100000
}


// const convertDecToHex(val)

module.exports.urlEncoder = urlEncoder
module.exports.urlDecoder = urlDecoder
module.exports.base64Encoder = base64Encoder
module.exports.base64Decoder = base64Decoder
module.exports.md5HashEncoder = md5HashEncoder
module.exports.sha1HashEncoder = sha1HashEncoder
module.exports.sha256HashEncoder = sha256HashEncoder
module.exports.sha512HashEncoder = sha512HashEncoder
module.exports.convertTimestampToHumanDate = convertTimestampToHumanDate
module.exports.convertHumanDateToTimestamp = convertHumanDateToTimestamp
module.exports.convertHexToRgb = convertHexToRgb
module.exports.convertRgbToHex = convertRgbToHex
module.exports.convertBinToOct = convertBinToOct
module.exports.convertOctToBin = convertOctToBin
module.exports.convertHexToOct = convertHexToOct
module.exports.convertOctToHex = convertOctToHex
module.exports.convertOctToDec = convertOctToDec
module.exports.convertDecToOct = convertDecToOct
module.exports.convertBinToDec = convertBinToDec
module.exports.convertDecToBin = convertDecToBin
module.exports.convertHexToBin = convertHexToBin
module.exports.convertBinToHex = convertBinToHex
module.exports.convertDecToHex = convertDecToHex
module.exports.convertHexToDec = convertHexToDec
module.exports.convertMeterToCentimeter = convertMeterToCentimeter
module.exports.convertCentimeterToMeter = convertCentimeterToMeter
module.exports.convertMeterToKiloMeter = convertMeterToKiloMeter
module.exports.convertKiloMeterToMeter = convertKiloMeterToMeter
module.exports.convertCentimeterToKilometer = convertCentimeterToKilometer
module.exports.convertKilometerToCentimeter = convertKilometerToCentimeter