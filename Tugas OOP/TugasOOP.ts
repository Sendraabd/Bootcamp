interface IVehicle {
  nopolice: string;
  type: string;
  year: number;
  price: number;
  tax: number;
  seat: number;
  getInfoDetail(): string;
  getType(): string;
}

class Kendaraan implements IVehicle {
  public nopolice: string;
  public type: string;
  public year: number;
  public price: number;
  public tax: number;
  public seat: number;

  constructor(
    nopolice: string,
    type: string,
    year: number,
    price: number,
    tax: number,
    seat: number
  ) {
    this.nopolice = nopolice;
    this.type = type;
    this.year = year;
    this.price = price;
    this.tax = tax;
    this.seat = seat;
  }

  public getInfoDetail(): string {
    return `No Police: ${this.nopolice}, Type: ${this.type}, Year: ${this.year}, Price: ${this.price}, Tax: ${this.tax}, seat: ${this.seat}`;
  }
  public getType(): string {
    return this.type;
  }
}

class venicle extends Kendaraan {
  private transactionDate: string;
  private Rent: number;
  private Driver: number;
  private Order: number;
  private OrderperKM: number;
  private total: number;

  constructor(
    nopolice: string,
    type: string,
    year: number,
    price: number,
    tax: number,
    seat: number,
    transactionDate: string,
    Rent: number,
    Driver: number,
    Order: number,
    OrderperKM: number,
    total: number
  ) {
    super(nopolice, type, year, price, tax, seat);
    this.transactionDate = transactionDate;
    this.Rent = Rent;
    this.Driver = Driver;
    this.Order = Order;
    this.OrderperKM = OrderperKM;
    this.total = total;
  }

  public getInfoDetail(): string {
    return `${super.getInfoDetail()} ${this.getIncome()}`;
  }
  private getIncome(): string {
    return `Date: ${this.transactionDate}, Rent: ${this.Rent}, Driver: ${this.Driver}, Order: ${this.Order}, OrderPerKM: ${this.OrderperKM}, Total: ${this.total}`;
  }
  public getTotal(): number {
    return this.total;
  }
}

class JuraganRental {
  private kendaraan: Kendaraan[];

  constructor() {
    this.kendaraan = [];
  }

  public tambahKendaraan(kendaraan: Kendaraan): void {
    this.kendaraan.push(kendaraan);
  }

  public getInfoSummary(): void {
    console.log("Info Summary");
    this.kendaraan.forEach((kendaraan) => {
      console.log(kendaraan.getInfoDetail());
    });

    console.log("\nTotal Kendaraan: " + this.getTotalKendaraan());
    console.log("Total Kendaraan SUV: " + this.getTotalKendaraanByType("SUV"));
    console.log("Total Kendaraan SUV: " + this.getTotalIncomeByType("SUV"));
    console.log("Total Kendaraan Taxi: " + this.getTotalIncomeByType("Taxi"));
    console.log(
      "Total Kendaraan PrivatJet: " + this.getTotalIncomeByType("PrivatJet")
    );
    console.log("Total Income Kendaraan: " + this.getTotalIncome());
  }

  private getTotalKendaraan(): number {
    return this.kendaraan.length;
  }

  private getTotalKendaraanByType(type: string): number {
    let count = 0;
    this.kendaraan.forEach((kendaraan) => {
      if (kendaraan.getType() === type) {
        count++;
      }
    });
    return count;
  }
  private getTotalIncomeByType(type: string): number {
    let total = 0;
    this.kendaraan.forEach((kendaraan) => {
      if (kendaraan.getType() === type && kendaraan instanceof venicle) {
        total += kendaraan.getTotal();
      }
    });
    return total;
  }
  private getTotalIncome(): number {
    let total = 0;
    this.kendaraan.forEach((kendaraan) => {
      if (kendaraan instanceof venicle) {
        total += kendaraan.getTotal();
      }
    });
    return total;
  }
}

const rental = new JuraganRental();

const mobil1 = new venicle(
  "D 1001 UM",
  "SUV",
  2010,
  350000,
  35000,
  4,
  "10/01/2023",
  500000,
  150000,
  0,
  0,
  650000
);
const mobil2 = new venicle(
  "D 1002 UM",
  "SUV",
  2010,
  350000,
  35000,
  4,
  "10/01/2023",
  500000,
  150000,
  0,
  0,
  650000
);
const mobil3 = new venicle(
  "D 1003 UM",
  "SUV",
  2015,
  350000,
  35000,
  5,
  "12/01/2023",
  500000,
  150000,
  0,
  0,
  650000
);
const mobil4 = new venicle(
  "D 1004 UM",
  "SUV",
  2015,
  350000,
  35000,
  5,
  "13/01/2023",
  500000,
  150000,
  0,
  0,
  650000
);
const mobil5 = new venicle(
  "D 11 UK",
  "Taxi",
  2002,
  175000,
  175000,
  4,
  "12/01/2023",
  0,
  0,
  45,
  4500,
  202500
);
const mobil6 = new venicle(
  "D 12 UK",
  "Taxi",
  2015,
  225000,
  225000,
  4,
  "13/01/2023",
  0,
  0,
  75,
  4500,
  337500
);
const mobil7 = new venicle(
  "D 13 UK",
  "Taxi",
  2020,
  275000,
  27500,
  4,
  "13/01/2023",
  0,
  0,
  90,
  4500,
  405000
);
const Jet1 = new venicle(
  "ID8089",
  "PrivatJet",
  2015,
  150000000,
  1500000,
  12,
  "23/12/2022",
  35000000,
  15000000,
  0,
  0,
  50000000
);
const Jet2 = new venicle(
  "ID8099",
  "PrivatJet",
  2018,
  175000000,
  1750000,
  15,
  "23/12/2022",
  55000000,
  25000000,
  0,
  0,
  80000000
);
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
