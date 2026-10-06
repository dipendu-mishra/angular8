class CustomDate {
    get Month() {
        if (this._month != null) {
            return this._month;
        }
    }
    set Month(month) {
        if (month > 0 && month < 13) {
            this._month = month;
        }
    }
}
var x = new CustomDate();
x.Month = 5;
console.log(x.Month);
