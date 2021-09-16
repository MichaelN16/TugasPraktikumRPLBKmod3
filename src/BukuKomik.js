import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class BukuKomik extends React.Component {
    constructor(props) {
        super(props)
        this.handleChangeBukuKomik = this.handleChangeBukuKomik.bind(this)
        this.state = {
            bukuKomik: [
                ['Dragonball', 20008],
                ['Doraemon', 24300],
                ['Conan', 20000],
                ['Sinchan', 15000],
                ['Samurai X', 38000]
            ],

            menu: {
                buku: 0,
            },
            totalHargaBukuKomik: 0,
            jumlahHarga: 0,
            jumlahHari: 0,
        }
    }

    handleCalculation = () => {
        const {
            buku
        } = this.state.menu
        var a = buku
        this.setState({
            ...this.state.menu,
            totalHargaBukuKomik: a
        }, this.handleTotal
        )
    }

    handleChangeJumlahHari(event) {
        const value = event.target.value.replace(/\+|-/ig, '');
        const totalHargaBukuKomik = this.state.totalHargaBukuKomik
        this.setState({
            jumlahHari: value,
            jumlahHarga: value * totalHargaBukuKomik
        });
        this.props.totalHargaBukuKomik(value * totalHargaBukuKomik);

    }
    handleChangeBukuKomik(e) {
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
    sendData = () => {
        this.props.parentCallback("Hey Popsie, How’s it going?");
    }
    render() {
        const {
            bukuKomik,
            totalHargaBukuKomik,
            jumlahHari
        } = this.state
        return (
            <>
                <div className='container'>
                    <div className='tips-content'>
                        <h2>Buku Komik</h2>
                        <div class="row mb-3">
                            <label class="col-sm-4 col-form-label">Judul Buku<span>:</span></label>
                            <div class="col-sm-8">
                                <select onChange={this.handleChangeBukuKomik} name='buku' class="form-select">
                                    <option value='0'>Pilih Buku Komik</option>
                                    <Fragment>
                                        {
                                            bukuKomik.map(bukuKomik => {
                                                return (
                                                    <option value={bukuKomik[1]}>{bukuKomik[0]}</option>
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
                        <h2>Total Harga Buku Komik: Rp.{totalHargaBukuKomik * jumlahHari} </h2>
                    </div>
                </div>
            </>
        )
    }
}
export default BukuKomik;