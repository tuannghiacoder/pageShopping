// modal btn chú thích sản phẫm
var modal1= document.getElementById('modal-info');
var iconBtn= document.getElementById('icon-btn1');
var span= document.getElementsByClassName('modal-info-close')[0];
// xữ lý nút btn
// mỡ modal chú thích
iconBtn.onclick = function(){
    modal1.style.display="block";
    
}
// đóng modal chú thích
span.onclick = function(){
    modal1.style.display="none";
}
// xữ lý khi ấn ngoài màn hình thì modal sẻ ẩn đi
window.onclick = function(event){
    if(event.target == modal1){
        modal1.style.display="none";
    }
}
// xữ lý reponsive
var clickIcon = document.querySelector('.icon-bar');
var menuList = document.querySelector('.menu-list-header');
  clickIcon.onclick = function(){
    menuList.style.display="block";
  }
//   xử lý cho đăng nhập 
