var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Kendaraan = /** @class */ (function () {
    function Kendaraan(nopolice, type, year, price, tax, seat) {
        this.nopolice = nopolice;
        this.type = type;
        this.year = year;
        this.price = price;
        this.tax = tax;
        this.seat = seat;
    }
    Kendaraan.prototype.getInfoDetail = function () {
        return "No Police: ".concat(this.nopolice, ", Type: ").concat(this.type, ", Year: ").concat(this.year, ", Price: ").concat(this.price, ", Tax: ").concat(this.tax, ", seat: ").concat(this.seat);
    };
    Kendaraan.prototype.getType = function () {
        return this.type;
    };
    return Kendaraan;
}());
var venicle = /** @class */ (function (_super) {
    __extends(venicle, _super);
    function venicle(nopolice, type, year, price, tax, seat, transactionDate, Rent, Driver, Order, OrderperKM, total) {
        var _this = _super.call(this, nopolice, type, year, price, tax, seat) || this;
        _this.transactionDate = transactionDate;
        _this.Rent = Rent;
        _this.Driver = Driver;
        _this.Order = Order;
        _this.OrderperKM = OrderperKM;
        _this.total = total;
        return _this;
    }
    venicle.prototype.getInfoDetail = function () {
        return "".concat(_super.prototype.getInfoDetail.call(this), " ").concat(this.getIncome());
    };
    venicle.prototype.getIncome = function () {
        return "Date: ".concat(this.transactionDate, ", Rent: ").concat(this.Rent, ", Driver: ").concat(this.Driver, ", Order: ").concat(this.Order, ", OrderPerKM: ").concat(this.OrderperKM, ", Total: ").concat(this.total);
    };
    venicle.prototype.getTotal = function () {
        return this.total;
    };
    return venicle;
}(Kendaraan));
var JuraganRental = /** @class */ (function () {
    function JuraganRental() {
        this.kendaraan = [];
    }
    JuraganRental.prototype.tambahKendaraan = function (kendaraan) {
        this.kendaraan.push(kendaraan);
    };
    JuraganRental.prototype.getInfoSummary = function () {
        console.log("Info Summary");
        this.kendaraan.forEach(function (kendaraan) {
            console.log(kendaraan.getInfoDetail());
        });
        console.log("\nTotal Kendaraan: " + this.getTotalKendaraan());
        console.log("Total Kendaraan SUV: " + this.getTotalKendaraanByType("SUV"));
        console.log("Total Kendaraan SUV: " + this.getTotalIncomeByType("SUV"));
        console.log("Total Kendaraan Taxi: " + this.getTotalIncomeByType("Taxi"));
        console.log("Total Kendaraan PrivatJet: " + this.getTotalIncomeByType("PrivatJet"));
        console.log("Total Income Kendaraan: " + this.getTotalIncome());
    };
    JuraganRental.prototype.getTotalKendaraan = function () {
        return this.kendaraan.length;
    };
    JuraganRental.prototype.getTotalKendaraanByType = function (type) {
        var count = 0;
        this.kendaraan.forEach(function (kendaraan) {
            if (kendaraan.getType() === type) {
                count++;
            }
        });
        return count;
    };
    JuraganRental.prototype.getTotalIncomeByType = function (type) {
        var total = 0;
        this.kendaraan.forEach(function (kendaraan) {
            if (kendaraan.getType() === type && kendaraan instanceof venicle) {
                total += kendaraan.getTotal();
            }
        });
        return total;
    };
    JuraganRental.prototype.getTotalIncome = function () {
        var total = 0;
        this.kendaraan.forEach(function (kendaraan) {
            if (kendaraan instanceof venicle) {
                total += kendaraan.getTotal();
            }
        });
        return total;
    };
    return JuraganRental;
}());
var rental = new JuraganRental();
var mobil1 = new venicle("D 1001 UM", "SUV", 2010, 350000, 35000, 4, "10/01/2023", 500000, 150000, 0, 0, 650000);
var mobil2 = new venicle("D 1002 UM", "SUV", 2010, 350000, 35000, 4, "10/01/2023", 500000, 150000, 0, 0, 650000);
var mobil3 = new venicle("D 1003 UM", "SUV", 2015, 350000, 35000, 5, "12/01/2023", 500000, 150000, 0, 0, 650000);
var mobil4 = new venicle("D 1004 UM", "SUV", 2015, 350000, 35000, 5, "13/01/2023", 500000, 150000, 0, 0, 650000);
var mobil5 = new venicle("D 11 UK", "Taxi", 2002, 175000, 175000, 4, "12/01/2023", 0, 0, 45, 4500, 202500);
var mobil6 = new venicle("D 12 UK", "Taxi", 2015, 225000, 225000, 4, "13/01/2023", 0, 0, 75, 4500, 337500);
var mobil7 = new venicle("D 13 UK", "Taxi", 2020, 275000, 27500, 4, "13/01/2023", 0, 0, 90, 4500, 405000);
var Jet1 = new venicle("ID8089", "PrivatJet", 2015, 150000000, 1500000, 12, "23/12/2022", 35000000, 15000000, 0, 0, 50000000);
var Jet2 = new venicle("ID8099", "PrivatJet", 2018, 175000000, 1750000, 15, "23/12/2022", 55000000, 25000000, 0, 0, 80000000);
rental.tambahKendaraan(mobil1);
rental.tambahKendaraan(mobil2);
rental.tambahKendaraan(mobil3);
rental.tambahKendaraan(mobil4);
rental.tambahKendaraan(mobil5);
rental.tambahKendaraan(mobil6);
rental.tambahKendaraan(mobil7);
rental.tambahKendaraan(Jet1);
rental.tambahKendaraan(Jet2);
rental.getInfoSummary();
