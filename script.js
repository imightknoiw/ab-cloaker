function run(){
var url = document.getElementById('url-input').value;
if (url.length > 7){
  
var w = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999,height=9999")
w.document.write('<script>document.title = "about:blank";</script>' +
'<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 9999;height: 100%;" src="https://sharkquiz.gq/"></iframe>');
}
}
