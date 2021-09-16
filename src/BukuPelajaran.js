import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class BukuPelajaran extends React.Component {
    constructor(props) {
        super(props)
        this.handleChangeBukuPelajaran = this.handleChangeBukuPelajaran.bind(this)
        this.state = {
            bukuPelajaran: [
                ['Akuntansi Pengantar 1', 24000],
                ['Aplikasi Klinis Induk Ovulasi & Stimulasi Ovariu', 10000],
                ['Aplikasi Praktis Asuhan Keperawatan Keluarga', 14000],
                ['A-Z Psikologi : Berbagai kumpulan topik Psikologi', 12000],
                ['Bangsa gagal ; Mencari identitas kebangsaan', 24999],
                ['Cedera Kepala', 10000]
            ],

            menu: {
                buku: 0,
            },
            totalHargaBukuPelajaran: 0,
            jumlahHari: 0,
            jumlahHarga: 0,
        }
    }

    handleCalculation = () => {
        const {
            buku
        } = this.state.menu
        var a = buku
        this.setState({
            ...this.state.menu,
            totalHargaBukuPelajaran: a
        }, this.handleTotal
        )
    }

    handleChangeJumlahHari(event) {
        const value = event.target.value.replace(/\+|-/ig, '');
        const totalHargaBukuPelajaran = this.state.totalHargaBukuPelajaran
        this.setState({
            jumlahHari: value,
            jumlahHarga: value * totalHargaBukuPelajaran
        });
        this.props.totalHargaBukuPelajaran(value * totalHargaBukuPelajaran);
    }
    handleChangeBukuPelajaran(e) {
        e.preventDefault()
        const { menu } = this.state
        const { name } = e.target
        var index = e.nativeEvent.target.selectedIndex;
        const { value } = e.nativeEvent.target[index];
        this.setState({
            menu: {
                ...menu,
                [name]: Number(value)
            }
        }, this.handleCalculation);
    }
    render() {
        const {
            bukuPelajaran,
            totalHargaBukuPelajaran,
            jumlahHari
        } = this.state
        return (
            <div className='container'>
                <div className='tips-content'>
                    <h2>Buku Pelajaran</h2>
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label">Judul Buku<span>:</span></label>
                        <div class="col-sm-8">
                            <select onChange={this.handleChangeBukuPelajaran} name='buku' class="form-select">
                                <option value='0'>Pilih Buku Pelajaran</option>
                                <Fragment>
                                    {
                                        bukuPelajaran.map(bukuPelajaran => {
                                            return (
                                                <option value={bukuPelajaran[1]}>{bukuPelajaran[0]}</option>
                                            )
                                        })
                                    }
                                </Fragment>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label">Lama Hari<span>:</span></label>
                        <div class="col-sm-8">
                            <input type="text" pattern="[0-9]*" class="form-control"
                                onInput={this.handleChangeJumlahHari.bind(this)} value={this.state.jumlahHari} />
                        </div>
                    </div>
                    <h2>Total Harga Buku Pelajaran: Rp.{totalHargaBukuPelajaran * jumlahHari} </h2>
                </div>
            </div>
        )
    }
}
export default BukuPelajaran;