const bookInventory = [
    {
        bookCode: "B01",
        title: "Lap Trinh JavaScript",
        category: "Cong nghe thong tin",
        price: 120000,
        totalCopies: 10,
        availableCopies: 3,
        shelfLocation: "A01"
    },
    {
        bookCode: "B02",
        title: "Co So Du Lieu",
        category: "Cong nghe thong tin",
        price: 150000,
        totalCopies: 8,
        availableCopies: 0,
        shelfLocation: "A02"
    },
    {
        bookCode: "B03",
        title: "Lap Trinh C",
        category: "Lap trinh",
        price: 100000,
        totalCopies: 12,
        availableCopies: 5,
        shelfLocation: "B01"
    }
];

bookInventory.push({
    bookCode: "B04",
    title: "Lap Trinh Python",
    category: "Lap trinh",
    price: 180000,
    totalCopies: 6,
    availableCopies: 6,
    shelfLocation: "B02"
});

console.log("Da nhap sach moi!");

// Muon sach B01
const borrowBookCode = "B01";
let isBookFound = false;

for (let i = 0; i < bookInventory.length; i++) {
    if (bookInventory[i].bookCode === borrowBookCode) {
        isBookFound = true;

        if (bookInventory[i].availableCopies > 0) {
            bookInventory[i].availableCopies--;
            console.log("Muon sach thanh cong: " + bookInventory[i].title);
            console.log("So sach con lai: " + bookInventory[i].availableCopies);
        }

        if (bookInventory[i].availableCopies === 0) {
            console.log("HET SACH TREN KE");
        }

        break;
    }
}

if (isBookFound === false) {
    console.log("Khong tim thay sach!");
}

const updateBookCode = "B03";
let isUpdateFound = false;

for (let i = 0; i < bookInventory.length; i++) {
    if (bookInventory[i].bookCode === updateBookCode) {
        bookInventory[i].shelfLocation = "C01";
        isUpdateFound = true;
        console.log("Da chuyen sach den ke C01");
        break;
    }
}

if (isUpdateFound === false) {
    console.log("Khong tim thay sach can chuyen ke!");
}

// Thanh ly sach B02
const liquidateBookCode = "B02";
let isLiquidated = false;

for (let i = 0; i < bookInventory.length; i++) {
    if (bookInventory[i].bookCode === liquidateBookCode) {
        bookInventory.splice(i, 1);
        isLiquidated = true;
        console.log("Da thanh ly sach B02");
        break;
    }
}

if (isLiquidated === false) {
    console.log("Khong tim thay sach can thanh ly!");
}

// Kiem ke kho sach
let totalBookCopies = 0;
let totalAvailableCopies = 0;
let totalInventoryValue = 0;

console.log("");
console.log("==============================================================");
console.log("                 BANG KIEM KE KHO THU VIEN");
console.log("==============================================================");
console.log(
    "MA SACH".padEnd(10) +
    "TEN SACH".padEnd(25) +
    "TONG".padEnd(8) +
    "CON LAI".padEnd(10) +
    "DON GIA".padEnd(15) +
    "VI TRI KE"
);
console.log("--------------------------------------------------------------");

for (let i = 0; i < bookInventory.length; i++) {
    const book = bookInventory[i];

    totalBookCopies += book.totalCopies;
    totalAvailableCopies += book.availableCopies;
    totalInventoryValue += book.totalCopies * book.price;

    console.log(
        book.bookCode.padEnd(10) +
        book.title.padEnd(25) +
        String(book.totalCopies).padEnd(8) +
        String(book.availableCopies).padEnd(10) +
        book.price.toLocaleString("vi-VN").padEnd(15) +
        book.shelfLocation
    );

    if (book.availableCopies === 0) {
        console.log("Trang thai: HET SACH TREN KE");
    } else {
        console.log("Trang thai: CON SACH");
    }
}

console.log("--------------------------------------------------------------");
console.log("Tong so dau sach: " + bookInventory.length);
console.log("Tong so luong sach: " + totalBookCopies);
console.log("Tong so sach kha dung: " + totalAvailableCopies);
console.log("Tong gia tri tai san kho: " + totalInventoryValue.toLocaleString("vi-VN") + " VND");
console.log("==============================================================");