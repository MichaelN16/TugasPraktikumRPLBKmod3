import { Component } from "react"; import React from "react";
import BukuPelajaran from "./BukuPelajaran";
import BukuKomik from "./BukuKomik";
import 'bootstrap/dist/css/bootstrap.min.css';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datatotalHargaBukuPelajaran: null,
            datatotalHargaBukuKomik: null
        }
    }
    totalHargaBukuPelajaran = (childData) => {
        this.setState({ datatotalHargaBukuPelajaran: childData })
    }
    totalHargaBukuKomik = (childData) => {
        this.setState({ datatotalHargaBukuKomik: childData })
    }
    render() {
        const {
            datatotalHargaBukuPelajaran,
            datatotalHargaBukuKomik
        } = this.state
        return (
            <>
                <h1>Aplikasi Peminjaman Buku</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <BukuPelajaran totalHargaBukuPelajaran={this.totalHargaBukuPelajaran} />
                        </div>
                        <div class="col-6">
                            <BukuKomik totalHargaBukuKomik={this.totalHargaBukuKomik} />
                        </div>
                    </div>
                    <div class="row">
                        <h5>Total Harga:</h5>
                        <h6>Rp.{datatotalHargaBukuPelajaran + datatotalHargaBukuKomik}</h6>
                    </div>
                </div>
            </>
        );
    }
}
export default Parent;