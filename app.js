let allData = [
    { id: 1, img_path: "Zahidkhan.jpg", status: "delivered", name: "zahid khan", address: "noida", salary: 15000, email: "zahiidkhan262@gmail.com" },
    { id: 2, img_path: "Zahidkhan.jpg", status: "pending", name: "arkan khan", address: "delhi", salary: 12000, email: "arknakhan262@gmail.com" },
    { id: 3, img_path: "Zahidkhan.jpg", status: "return", name: "aishwarya kurwade", address: "nagpur", salary: 20000, email: "aish8@gmail.com" },
    { id: 4, img_path: "Zahidkhan.jpg", status: "delivered", name: "mohd abuzar", address: "batla house", salary: 15000, email: "abuzar123@gmail.com" },
    { id: 5, img_path: "Zahidkhan.jpg", status: "pending", name: "tarun tomar", address: "gaziyabad", salary: 16000, email: "taruntomor@gmail.com" },
    { id: 6, img_path: "Zahidkhan.jpg", status: "delivered", name: "kapil tomar", address: "gaziyabad", salary: 15000, email: "kapiltomor@gmail.com" },
    { id: 7, img_path: "Zahidkhan.jpg", status: "return", name: "kapil chauhan", address: "gaziyabad", salary: 32000, email: "kpchauhan@gmail.com" },
    { id: 8, img_path: "Zahidkhan.jpg", status: "pending", name: "jamshed khan", address: "banaras", salary: 70000, email: "jamshed@gmail.com" },
    { id: 9, img_path: "Zahidkhan.jpg", status: "delivered", name: "juned ahmad", address: "pune", salary: 16000, email: "juned88@gmail.com" },
    { id: 10, img_path: "Zahidkhan.jpg", status: "return", name: "zeeshan", address: "bhadohi", salary: 35000, email: "zk12345@gmail.com" },
    { id: 11, img_path: "Zahidkhan.jpg", status: "pending", name: "amir khan", address: "mumbai", salary: 100000, email: "amirkhan2@gmail.com" },
    { id: 12, img_path: "Zahidkhan.jpg", status: "delivered", name: "sharukh khan", address: "mumbai", salary: 15000, email: "shahrukhkhan2@gmail.com" },
    { id: 13, img_path: "Zahidkhan.jpg", status: "return", name: "shakir hussain", address: "noida", salary: 55000, email: "shakir123@gmail.com" },
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

    // show Recent Data

    recentTable = ""
    allData.forEach((ele) => {

        recentTable += `
        <tr>
                <td class="d-flex-2">
                    <span class="customer-pro"><img src="${ele.img_path}" alt=""></span>
                    <span class="cutomer-details">
                        <h4>${ele.name}</h4>
                        <p>${ele.address}</p>
                    </span>
                </td>
        </tr>
        `
    })
    document.getElementById('recent-customer').innerHTML = recentTable
}

showData();

document.getElementById('search').onkeyup = function () {

    searchValue = this.value;

    var filterData = allData.filter((ele) => {
        if (ele.name.toLowerCase().match(searchValue.toLowerCase()) || ele.address.toLowerCase().match(searchValue.toLowerCase()) || ele.email.toLowerCase().match(searchValue.toLowerCase())) {
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
                <tr class="pad">
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

//  toggle



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

            $('.pro-card').slideDown(200);
            a = 1
        } else if (a == 1) {

            $('.pro-card').slideUp(300);
            a = 0
        }
    })
})










$(document).ready(function () {

    $(".item").click(function () {
        var x = $(this).html()
        $("#list-value").html(x)
    })
    // selectName
    $("#selectName").click(function () {
        $(".openName").slideToggle();
    })
    // selectValue
    $("#selectValue").click(function () {
        $(".openValue").slideToggle();
    })



    // dropdown

    $("#list-menu").click(function () {
        $(this).next(".sub-menu").slideToggle()
    })


})




// jquery plugins
$('.single-slick').slick();



// graph chart


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Zahid', 'Shakir', 'Tarun', 'Abuzar', 'Aishwarya', 'Juned'],
        datasets: [{
            label: 'more of Votes',
            data: [12, 19, 6, 5, 9, 3],
            backgroundColor: [
                'rgba(255, 9,  12,0.7)',
                'rgb(54, 162,  135)',
                'rgb(255, 206, 186)',
                'rgb(75, 192,  192)',
                'rgb(153, 102, 125)',
                'rgb(255, 159, 164)'
            ]
        }]
    }
})
const vgx = document.getElementById('pieChart').getContext('2d');
const chart = new Chart(vgx, {
    type: 'pie',
    data: {
        labels: ['Zahid', 'Shakir', 'Tarun'],
        datasets: [{
            label: 'more of Votes',
            data: [12, 19, 6,],
            backgroundColor: [
                'rgba(255, 9,  12,0.7)',
                'rgb(75, 192,  192)',
                'rgb(255, 159, 164)'
            ]
        }]
    }
})












