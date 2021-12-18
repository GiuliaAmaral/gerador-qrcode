function gerarQRCode() {
    window.document.querySelector('#carregando').classList.remove("d-none");
    window.document.querySelector('#gerouQR').classList.add("d-none");
    let textAreaUsuario = document.querySelector('textarea').value;
    let APIQRCode = `https://chart.googleapis.com/chart?cht=qr&chs=380x380&chl=${textAreaUsuario}`;
    window.document.querySelector('#imagemQRCode').src = APIQRCode;
    setTimeout(() => {
        window.document.querySelector('#gerouQR').classList.remove("d-none");
        window.document.querySelector('#carregando').classList.add("d-none");
    }, 1000);

}

function imprimir() {

    let conteudo = document.getElementById('gerouQR').innerHTML;
    let tela_impressao = window.open();


    tela_impressao.document.write(conteudo);
    tela_impressao.print();
    // tela_impressao.window.close();

}


