// kita buat sebuah fungsi yang akan memunculkan modal
const showModal = () => {

    //kita ambil elmen yg akan di SHOW / tampilkan
    let modal = document.querySelector('.modalMenu')
    // kita atur style jadi dari elment tersebut
    //jadikan dia terlihat
    modal.style.display = 'flex'

}

// fungsi untuk hide elment
const hideModal = () => {
    let modal = document.querySelector('.modalMenu')
    // kita atur style jadi dari elment tersebut
    //jadikan dia terlihat
    modal.style.display = 'none'


}

const hideaboutAlert = () => {
    let aboutAlert = document.querySelector('.aboutAlert')
    aboutAlert.style.display = 'none'
}

//kita akan buat elment HTML
//menggunakan javascrip

let gallery = document.getElementById('container-gallery')
let img = 100
//insert HTML sintak into gallery

for (let i = 0; i < 36; i++) {
    gallery.innerHTML += `
    <img src="https://picsum.photos/seed/${img++}/200"/>
    `
}