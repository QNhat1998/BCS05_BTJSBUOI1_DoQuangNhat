var tinhLuong = function () {
    const number = 100000;
    var day = document.getElementById("day").value;

    document.getElementById("salary").innerHTML = day*number;
}

var tinhTrungBinh = function () {
    var nums = document.querySelectorAll(".nums input");
    var sum = 0;
    console.log(nums);
    for(var i = 0; i < 5; i++){
        sum += Number(nums[i].value);
    }
    document.getElementById("average").innerHTML = sum/5;
}

var quyDoi = function () {
    const number = 23500;
    var money = document.getElementById("money").value;

    document.getElementById("exchange").innerHTML = money*number + " vnd";
}

var hinhChuNhat = function () {
    var width = Number(document.getElementById("width").value);
    var length = Number(document.getElementById("length").value);

    document.getElementById("area").innerHTML = width*length;
    document.getElementById("perimeter").innerHTML = (width+length)*2;
}

var numb = function () {
    var number = document.getElementById("number").value;

    document.getElementById("sum").innerHTML = Math.floor(number/10)+(number%10);
}

document.getElementById("btnSum").onclick = numb;

document.getElementById("btnCaculate").onclick = hinhChuNhat;

document.getElementById("btnExchange").onclick = quyDoi;

document.getElementById("btnSalary").onclick = tinhLuong;

document.getElementById("btnAverage").onclick = tinhTrungBinh;
