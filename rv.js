class Siswa {
    #nama;
    #nilai;

    setNama(nama) {
        this.#nama = nama;
    }

    setNilai(nilai) {
        this.#nilai = nilai;
    }

    getNama() {
        return this.#nama;
    }

    getNilai() {
        return this.#nilai;
    }

    predikat() {
        if (this.#nilai >= 90) {
            return "A";
        } else if (this.#nilai >= 80) {
            return "B";
        } else if (this.#nilai >= 75) {
            return "C";
        } else {
            return "D";
        }
    }

    lulus() {
        if (this.#nilai >= 75) {
            return "Lulus";
        } else {
            return "Tidak Lulus";
        }
    }
}

let siswa = new Siswa();

siswa.setNama("Riva");
siswa.setNilai(95);

console.log("Nama       : " + siswa.getNama());
console.log("Nilai      : " + siswa.getNilai());
console.log("Predikat   : " + siswa.predikat());
console.log("Keterangan : " + siswa.lulus());