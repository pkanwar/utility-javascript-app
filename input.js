const readline = require('readline-sync')
const utility = require('./utility')

const urlEncoderDecoder = ()=>{

  let option = parseInt(readline.question("choose 1 to encode URL , 2 to decode URL : "))

  switch(option){
    case 1 :
      let url = readline.question("\nenter url : ")
      console.log(`encoded url is : ${utility.urlEncoder(url)}`)
      break
    case 2 :
      let encodedURL = readline.question("\nenter encoded url : ")
      console.log(`decoded url is : ${utility.urlDecoder(encodedURL)}`)
      break
    default :
      console.log("Invalid Option !")
      break
  }

}

const base64EncoderDecoder = ()=>{

  let option = parseInt(readline.question("choose 1 to encode text , 2 to decode text : "))

  switch(option){
    case 1 :
      let text = readline.question("\nenter text to encode : ")
      console.log(`base64 encoded text is : ${utility.base64Encoder(text)}`)
      break
    case 2 :
      let encodedText = readline.question("\nenter encoded text : ")
      console.log(`decoded text is : ${utility.base64Decoder(encodedText)}`)
      break
    default :
      console.log("Invalid Option !")
      break
  }

}

const hashEncoder = ()=>{

   console.log("choose \n1 for md5 encryption \n2 for sha-1 encryption \n3 for sha-256 encryption \n4 for sha-512 encryption\n ")

   let option = parseInt(readline.question("choose your option : "))
   let text
  switch(option){
    case 1 :
      text = readline.question("\nenter text to encrypt : ")
      console.log(`md5 encrypted string is : ${utility.md5HashEncoder(text)}`)
      break
    case 2 :
      text = readline.question("\nenter text to encrypt : ")
      console.log(`sha-1 encrypted string is : ${utility.sha1HashEncoder(text)}`)
      break
    case 3 :
      text = readline.question("\nenter text to encrypt : ")
      console.log(`sha-256 encrypted string is : ${utility.sha256HashEncoder(text)}`)
      break
    case 4 :
      text = readline.question("\nenter text to encrypt : ")
      console.log(`sha-512 encrypted string is : ${utility.sha512HashEncoder(text)}`)
      break
    default :
      console.log("Invalid Option !")
      break
  }

}

const epochConverter = ()=>{

  let option = parseInt(readline.question("choose 1 to convert timeStamp to human date , 2 to convert human date to timeStamp : "))

  switch(option){
    case 1 :
      let timeStamp = readline.question("\nenter timeStamp to convert to Human Date : ")
      let humanDate = utility.convertTimestampToHumanDate(timeStamp)
      console.log(`the humanDate is : {year: ${humanDate.year}, month: ${humanDate.month}, day: ${humanDate.day}, hours : ${humanDate.hours}, minutes: ${humanDate.minutes}, seconds: ${humanDate.seconds}  }`)
      break
    case 2 :
      let year = readline.question("enter year : ")
      let month = readline.question("enter month : ")
      let day = readline.question("enter day : ")
      let hours = readline.question("enter hours : ")
      let minutes = readline.question("enter minutes : ")
      let sec = readline.question("enter sec : ")
      console.log('timeStamp is : '+ utility.convertHumanDateToTimestamp(year,month,day,hours,minutes,sec))
      break
    default :
      console.log("Invalid Option !")
      break
  }

}

const RgbToHexORHexToRgb = ()=>{

  let option = parseInt(readline.question("choose 1 to convert to RGB to Hex , 2 to convert Hex to RGB : "))

  switch(option){
    case 1 :
      let red = parseInt(readline.question("enter red value : "))
      let blue = parseInt(readline.question("enter blue value : "))
      let green = parseInt(readline.question("enter green value : "))
      console.log(`the Hex value is : ${utility.convertRgbToHex(red,blue,green)}`)
      break
    case 2 :
      let hex = readline.question("enter hex code : ")
      const rgb = utility.convertHexToRgb(hex)
      console.log(`the RGB value is : { red: ${rgb.red}, green: ${rgb.green}, blue: ${rgb.blue} }`)
      break
    default :
      console.log("Invalid Option !")
      break
  }

}

const BinaryDecimalOctalHexConverters = ()=>{
    
    console.log("choose the following converters : \n")
    console.log("1. Decimal to Binary\n")
    console.log("2. Binary to Decimal\n")
    console.log("3. Decimal to Hexadecimal\n")
    console.log("4. Hexadecimal to Decimal\n")
    console.log("5. Binary to Hexadecimal\n")
    console.log("6. Hexadecimal to Binary\n")
    console.log("7. Decimal to Octal\n")
    console.log("8. Octal to Decimal\n")
    console.log("9. Octal to Hexadecimal\n")
    console.log("10. Hexadecimal to Octal\n")
    console.log("11. Binary to Octal\n")
    console.log("12. Octal to Binary\n")

    let option = parseInt(readline.question("enter your option : "))
    //let val
    switch(option){
      
      case 1:
        console.log("You have chosen Decimal to Binary Converter\n")
        let val1 = readline.question("enter Decimal number : ")
        console.log("\nBinary number is : " + utility.convertDecToBin(val1))
        break
      case 2:
        console.log("You have chosen Binary to Decimal Converter\n")
        let val2 = readline.question("enter Binary number : ")
        console.log("\nDecimal number is : " + utility.convertBinToDec(val2))
        break
      case 3:
        console.log("You have chosen Decimal to Hexadecimal Converter\n")
        let val3 = readline.question("enter Decimal number : ")
        console.log("\nHexadecimal number is : " + utility.convertDecToHex(val3))
        break
      case 4:
        console.log("You have chosen Hexadecimal to Decimal Converter\n")
        let val4 = readline.question("enter Hexadecimal number : ")
        console.log("\nDecimal number is : " + utility.convertHexToDec(val4))
        break
      case 5:
        console.log("You have chosen Binary to Hexadecimal Converter\n")
        let val5 = readline.question("enter Binary number : ")
        console.log("\nHexadecimal number is : " + utility.convertBinToHex(val5))
        break
      case 6:
        console.log("You have chosen Hexadecimal to Binary Converter\n")
        let val6 = readline.question("enter Hexadecimal number : ")
        console.log("\nBinary number is : " + utility.convertHexToBin(val5))
        break
      case 7:
        console.log("You have chosen Decimal to Octal Converter\n")
        let val7 = readline.question("enter Decimal number : ")
        console.log("\nOctal number is : " + utility.convertDecToOct(val7))
        break
      case 8:
        console.log("You have chosen Octal to Decimal Converter\n")
        let val8 = readline.question("enter Octal number : ")
        console.log("\nDecimal number is : " + utility.convertOctToDec(val8))
      case 9:
        console.log("You have chosen Octal to Hexadecimal Converter\n")
        let val9 = readline.question("enter Octal number : ")
        console.log("\Hexadecimal number is : " + utility.convertOctToHex(val9))
        break
      case 10:
        console.log("You have chosen Hexadecimal to Octal Converter\n")
        let val10 = readline.question("enter Hexadecimal number : ")
        console.log("\nOctal number id : " + utility.convertHexToOct(val10))
        break
      case 11:
        console.log("You have chosen Binary to Octal Converter\n")
        let val11 = readline.question("enter Binary number : ")
        console.log("\nOctal number is : " + utility.convertBinToOct(val11))
        break
      case 12:
        console.log("You have chosen Octal to Binary Converter\n")
        let val12 = readline.question("enter Octal number : ")
        console.log("\nBinary number is : " + utility.convertOctToBin(val12))
        break
      default:
        console.log("Invalid Option!")
        break;

    }

}


const unitConverter = ()=>{
    
    console.log("choose the following converters : \n")
    console.log("1. meter to centimeter\n")
    console.log("2. centimeter to meter\n")
    console.log("3. meter to kilometer\n")
    console.log("4. kilometer to meter\n")
    console.log("5. centimeter to kilometer\n")
    console.log("6. kilometer to centimeter\n")

    let option = parseInt(readline.question("enter your option : "))
    //let val
    switch(option){
      
      case 1:
        console.log("You have chosen meter to centimeter\n")
        let val1 = readline.question("enter number in meters : ")
        console.log("\ncentimeter conversion is : " + utility.convertMeterToCentimeter(val1))
        break
      case 2:
        console.log("You have chosen centimeter to meter\n")
        let val2 = readline.question("enter number in centimeter : ")
        console.log("\nmeter conversion is : " + utility.convertCentimeterToMeter(val2))
        break
      case 3:
        console.log("You have chosen meter to kilometer Converter\n")
        let val3 = readline.question("enter number in meters : ")
        console.log("\nkilometer conversion is : " + utility.convertMeterToKiloMeter(val3))
        break
      case 4:
        console.log("You have chosen kilometer to meter Converter\n")
        let val4 = readline.question("enter number in kilometer : ")
        console.log("\nmeter converison is : " + utility.convertKiloMeterToMeter(val4))
        break
      case 5:
        console.log("You have chosen centimeter to kilometer Converter\n")
        let val5 = readline.question("enter number in centimeter : ")
        console.log("\nkilometer conversion is : " + utility.convertCentimeterToKilometer(val5))
        break
      case 6:
        console.log("You have chosen kilometer to centimeter Converter\n")
        let val6 = readline.question("enter number in kilometer : ")
        console.log("\ncentimeter converison is : " + utility.convertKilometerToCentimeter(val6))
        break
      default:
        console.log("Invalid Option!")
        break;

    }

}

module.exports.urlEncoderDecoder = urlEncoderDecoder
module.exports.base64EncoderDecoder = base64EncoderDecoder
module.exports.hashEncoder = hashEncoder
module.exports.epochConverter = epochConverter
module.exports.RgbToHexORHexToRgb = RgbToHexORHexToRgb
module.exports.BinaryDecimalOctalHexConverters = BinaryDecimalOctalHexConverters
module.exports.unitConverter = unitConverter