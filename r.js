class produk {
    nama;
    harga;
    #stok;

    constructor(props = {}) {
        this.nama = props.nama ?? "";
        this.harga = props.harga ?? 0;
        this.#stok = Number.isInteger(props.stok) && props.stok >= 0 ? props.stok : 0;
    }

    get stok() {
        return this.#stok;
    }

    set stok(nilaiBaru) {
        if (Number.isInteger(nilaiBaru) && nilaiBaru >= 0) {
            this.#stok = nilaiBaru;
        }else {
            console.log("stok harus berupa bilangan bulat >= 0");
        }
    }

   render() {
    console.log(`produk: ${this.nama}, Harga: ${this.harga}, Stok: ${this.#stok}`);
   }

   tambahBarang(jumlah) {
   if (Number.isInteger(jumlah) && jumlah > 0) {
    this.#stok += jumlah;
   } else {
    console.log("jumlah tambah harus berupa bilangan bulat positif");
    return;
   }

   this.#stok += jumlah;
}

kurangiBarang(jumlah) {
    if (Number.isInteger(jumlah) && jumlah > 0) {
       console.log("jumlah kurang harus berupa bilangan bulat positif");
       return;
    }
    if (jumlah > this.#stok) {
        console.log("stok tidak cukup");
        return;
    }
    this.#stok -= jumlah;
}
}

const produkA = new produk({ nama: "Buku", harga: 10000, stok: 10 });
const produkB = new produk({ nama: "Pensil", harga: 5000, stok: 20 });

console.log("produk A:");
produkA.render();
produkA.tambahBarang(5);
produkA.render();
produkA.kurangiBarang(10);
produkA.render();

console.log("produk B:");
produkB.render();
produkB.tambahBarang(10);
produkB.render();
produkB.kurangiBarang(25);
produkB.render();