function addCommas(number) {
        // Convert number to string
        let numberString = String(number);
    
        // Split the string into integer and decimal parts
        let [integerPart, decimalPart] = numberString.split('.');
        
        // Add commas to the integer part
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        // Reconstruct the number string with commas
        let formattedNumber = decimalPart !== undefined ? integerPart + '.' + decimalPart : integerPart;
        
        return formattedNumber;
}

module.exports = addCommas;