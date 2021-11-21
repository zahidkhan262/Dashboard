let allData = [
    { id: 1, status: "delivered", name: "zahid khan", address: "noida", salary: 15000, email: "zahiidkhan262@gmail.com" },
    { id: 2, status: "pending", name: "arkan khan", address: "delhi", salary: 12000, email: "arknakhan262@gmail.com" },
    { id: 3, status: "return", name: "aishwarya kurwade", address: "nagpur", salary: 20000, email: "aish8@gmail.com" },
    { id: 4, status: "delivered", name: "mohd abuzar", address: "batla house", salary: 15000, email: "abuzar123@gmail.com" },
    { id: 5, status: "pending", name: "tarun tomar", address: "gaziyabad", salary: 16000, email: "taruntomor@gmail.com" },
    { id: 6, status: "delivered", name: "kapil tomar", address: "gaziyabad", salary: 15000, email: "kapiltomor@gmail.com" },
    { id: 7, status: "return", name: "kapil chauhan", address: "gaziyabad", salary: 32000, email: "kpchauhan@gmail.com" },
    { id: 8, status: "pending", name: "jamshed khan", address: "banaras", salary: 70000, email: "jamshed@gmail.com" },
    { id: 9, status: "delivered", name: "juned ahmad", address: "pune", salary: 16000, email: "juned88@gmail.com" },
    { id: 10, status: "return", name: "zeeshan", address: "bhadohi", salary: 35000, email: "zk12345@gmail.com" },
    { id: 11, status: "pending", name: "amir khan", address: "mumbai", salary: 100000, email: "amirkhan2@gmail.com" },
    { id: 12, status: "delivered", name: "sharukh khan", address: "mumbai", salary: 15000, email: "shahrukhkhan2@gmail.com" },
    { id: 13, status: "return", name: "shakir hussain", address: "noida", salary: 55000, email: "shakir123@gmail.com" },
]


function showData() {
    tbl = ""

    allData.forEach((items) => {

        tbl += `
                <tr>
                        <td>${items.id}</td>
                        <td>${items.name}</td>
                        <td>${items.address}</td>
                        <td>${items.salary}</td>
                        <td>${items.email}</td>
                        <td><span class="delivered">${items.status}</span></td>
                </tr>
              `
    })
    document.getElementById('bind').innerHTML = tbl
}

showData();

document.getElementById('search').onkeyup = function () {

    searchValue = this.value;

    var filterData = allData.filter((ele) => {
        if (ele.name.startsWith(searchValue) || ele.address.startsWith(searchValue) || ele.email.startsWith(searchValue)) {
            return ele;
        }
        // console.log(ele)
    })
    // console.log(filterData)
    tbl = ""
    filterData.forEach((ele) => {
        tbl += `
        <tr>
                <td>${ele.id}</td>
                <td>${ele.name}</td>
                <td>${ele.address}</td>
                <td>${ele.salary}</td>
                <td>${ele.email}</td>
                <td><span class="delivered">${ele.status}</span></td>
        </tr>
      `
    })
    document.getElementById('bind').innerHTML = tbl
}

function nameSort() {

    allData.sort((a, b) => {
        // return b.id - a.id;

        if (a.name.toLowerCase() < b.name.toLowerCase())
            return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase())
            return 1;
        return 0;

    })
    // console.log(allData)
    tbl = ""

    allData.forEach((items) => {

        tbl += `
                <tr>
                        <td>${items.id}</td>
                        <td>${items.name}</td>
                        <td>${items.address}</td>
                        <td>${items.salary}</td>
                        <td>${items.email}</td>
                        <td><span class="delivered">${items.status}</span></td>
                </tr>
              `
    })
    document.getElementById('bind').innerHTML = tbl


}
function addressSort() {

    allData.sort((a, b) => {
        // return b.id - a.id;

        if (a.address.toLowerCase() < b.address.toLowerCase())
            return -1;
        if (a.address.toLowerCase() > b.address.toLowerCase())
            return 1;
        return 0;

    })
    // console.log(allData)
    tbl = ""

    allData.forEach((items) => {

        tbl += `
                <tr>
                        <td>${items.id}</td>
                        <td>${items.name}</td>
                        <td>${items.address}</td>
                        <td>${items.salary}</td>
                        <td>${items.email}</td>
                        <td><span class="delivered">${items.status}</span></td>
                </tr>
              `
    })
    document.getElementById('bind').innerHTML = tbl


}
function idSort() {

    allData.sort((a, b) => {
        return b.id - a.id;

    })
    // console.log(allData)
    tbl = ""

    allData.forEach((items) => {

        tbl += `
                <tr>
                        <td>${items.id}</td>
                        <td>${items.name}</td>
                        <td>${items.address}</td>
                        <td>${items.salary}</td>
                        <td>${items.email}</td>
                        <td><span class="delivered">${items.status}</span></td>
                </tr>
              `
    })
    document.getElementById('bind').innerHTML = tbl


}
function salSort() {

    allData.sort((a, b) => {
        return b.salary - a.salary;

    })
    // console.log(allData)
    tbl = ""

    allData.forEach((items) => {

        tbl += `
                <tr>
                        <td>${items.id}</td>
                        <td>${items.name}</td>
                        <td>${items.address}</td>
                        <td>${items.salary}</td>
                        <td>${items.email}</td>
                        <td><span class="delivered">${items.status}</span></td>
                </tr>
              `
    })
    document.getElementById('bind').innerHTML = tbl


}




















$(document).ready(function () {
    $('.navigation li').click(function () {
        $('.navigation li').removeClass('active');
        $(this).addClass('active');
    })
    $('#bars-btn').on('click', function () {
        $('header').toggleClass('header-full')
        $('.main-part').toggleClass('full-main');
        $('.navs').toggleClass('full-header');
        $('.navs').toggleClass('small-navs');
    })



    //---------------------- input bar ---------------------------
    $('.input').click(function () {
        $('.input').toggleClass('max-width')
    })
    $('.input').mouseout(function () {
        $('.input').removeClass('max-width')

    })
    $('.input2').click(function () {
        $('.input2').toggleClass('max-width')
    })
    $('.input2').mouseout(function () {
        $('.input2').removeClass('max-width')

    })

    // profile

    a = 0;
    $('#profile').on('click', function () {
        if (a == 0) {

            $('.pro-card').slideDown(300);
            a = 1
        } else if (a == 1) {

            $('.pro-card').slideUp(500);
            a = 0
        }
    })
})















// jquery plugins
$('.single-slick').slick();
// slick slider department

$('.cards-slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});










