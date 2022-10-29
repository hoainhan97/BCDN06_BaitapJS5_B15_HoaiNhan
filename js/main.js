// QUẢN LÝ TUYỂN SINH 

function ketQua() {
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var khuVuc = Number(document.getElementById("khuvuc").value);
    var doiTuong = Number(document.getElementById("doituong").value);
    var diem1 = Number(document.getElementById("diem1").value);
    var diem2 = Number(document.getElementById("diem2").value);
    var diem3 = Number(document.getElementById("diem3").value);

    var tongDiem = khuVuc + doiTuong + diem1 + diem2 + diem3;
    var thongBao ="";
    // console.log(khuVuc,doiTuong,diemChuan);
    if (tongDiem >= diemChuan && 0 < diem1 <= 10 && 0 < diem2 <= 10 && 0 < diem3 <= 10) {
        thongBao = "Bạn đã đậu. " + "Tổng điểm: " + tongDiem;
    }else {
        thongBao = "Bạn đã rớt." + "Tổng điểm: " + tongDiem;
    }
    document.getElementById("txtTuyenSinh").innerHTML = thongBao;
}

document.getElementById("btnTuyenSinh").onclick = ketQua;


// TÍNH TIỀN ĐIỆN 

function tinhTienDien() {
    var ten = document.getElementById("hoTen").value; 
    var soKw = Number(document.getElementById("soKw").value); 

    var tongTien = 0;
    var thongBao2 = "";

    if (0 < soKw && soKw <= 50) {
        tongTien = soKw * 500;
        thongBao2 = "Họ tên: " + ten + "; Tiền điện: " + tongTien.toLocaleString();
        console.log(tongTien);
    }else if (50 < soKw && soKw <= 100) {
        tongTien = (500 * 50) + ((soKw - 50) * 650);
        thongBao2 = "Họ tên:" + ten + "; Tiền điện: " + tongTien.toLocaleString();
    }
    else if (100 < soKw && soKw <= 200) {
        tongTien =  (500 * 50) + (50 *650) + ((soKw - 100)*850);
        thongBao2 = "Họ tên: " + ten + "; Tiền điện: " + tongTien.toLocaleString();
    }
    else if (200 < soKw && soKw <= 350) {
        tongTien =  (500 * 50) + (50 *650) + (100 *850) + ((soKw - 200) *1100);
        thongBao2 = "Họ tên: " + ten + "; Tiền điện: " + tongTien.toLocaleString();
    } else{
        tongTien = (500 * 50) + (50 *650) + (100 *850) + (150  *1100) + ((soKw - 350) *1300);
        thongBao2 = "Họ tên: " + ten + "; Tiền điện: " + tongTien.toLocaleString();
    }
    
    document.getElementById("txtTinh").innerHTML = thongBao2;
}

document.getElementById("btnTinh").onclick = tinhTienDien;



