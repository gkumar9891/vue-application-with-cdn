export default {
    methods: {
    formatIndianNumber(number) {
        debugger
        // Convert the number to string
        let numStr = number.toString();
        
        // Split the number into integer and fractional parts if any
        let [intPart, fracPart] = numStr.split('.');
        
        // Handle the integer part
        let lastThree = intPart.slice(-3);
        let otherNumbers = intPart.slice(0, -3);
        
        if (otherNumbers != '') {
            lastThree = ',' + lastThree;
        }
        
        let formattedIntPart = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    
        // Combine the integer part and fractional part
        let formattedNumber = fracPart ? formattedIntPart + '.' + fracPart : formattedIntPart;
        
        return formattedNumber;
    }
},
}