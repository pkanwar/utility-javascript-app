const readline = require('readline-sync')
const utility = require('./utility')
const input = require('./input')

console.log("welcome to utility js app \nWhich utility function would you like to use?\n")

console.log("1. URL encoder/decoder \n\n2. Base64 Encoding/Decoding \n\n3. String hashing \n\n4. Epoch Converters \n\n5. Binary/Decimal/Hex/Octal Converters \n\n6. RGB to Hex / Hex to RGB Converter \n\n7. Unit Converters \n")

const selectedUtilityOption = parseInt(readline.question("choose your option : "))


switch(selectedUtilityOption){
  case 1:
      console.log(`You selected URL encoder/decoder\n`)
      input.urlEncoderDecoder()
      break
  case 2:
      console.log(`You selected Base64 Encoding/Decoding\n`)
      input.base64EncoderDecoder()
      break
  case 3:
      console.log(`You selected String hashing\n`)
      input.hashEncoder()
      break
  case 4:
      console.log(`You selected Epoch Converters\n`)
      input.epochConverter()
      break;
  case 5:
      console.log(`You selected Binary/Decimal/Hex/Octal Converters \n`)
      input.BinaryDecimalOctalHexConverters()
      break
  case 6:
    console.log(`You selected RGB to Hex / Hex to RGB Converter\n`)
    input.RgbToHexORHexToRgb()
    break;
  case 7:
    console.log(`You selected Unit Converters\n`)
    input.unitConverter()
    break;
  default:
    console.log("Invalid option !! \n")
    break


}