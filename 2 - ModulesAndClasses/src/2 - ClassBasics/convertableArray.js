export default class ConvertableArray extends Array {
    convert() {
        console.log('convert method')
        let returnArray = [];
        this.forEach(value => returnArray.push('Converted!' + value));
        return returnArray;
    }
}
