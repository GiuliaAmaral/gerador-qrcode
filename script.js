inicio();

async function inicio() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("texto")) {
        document.querySelector('#texto').value = urlParams.get("texto");
        gerarQRCode();
    }
}


function gerarQRCode() {
    window.document.querySelector('#carregando').classList.remove("d-none");
    window.document.querySelector('#gerouQR').classList.add("d-none");
    let textAreaUsuario = document.querySelector('#texto').value;
    let APIQRCode = `https://chart.googleapis.com/chart?cht=qr&chs=380x380&chl=${textAreaUsuario}`;
    window.document.querySelector('#imagemQRCode').src = APIQRCode;
    setTimeout(() => {
        window.document.querySelector('#gerouQR').classList.remove("d-none");
        window.document.querySelector('#carregando').classList.add("d-none");
    }, 1000);

}

async function compartilhar() {
    let urlAtual = window.location.href;
    const texto = window.document.querySelector('#texto').value;
    const urlImg = window.document.querySelector('#imagemQRCode').src;

    const fileName = 'qrcode.png'
    const response = await fetch(urlImg);
    const contentType = response.headers.get('content-type')
    const blob = await response.blob()
    const file = new File([blob], fileName, { type: contentType })
    const files = Array(file);

    urlAtual = urlAtual.split("?")[0];

    window.navigator.share({
        url: `${urlAtual}?texto=${texto}`,
        text: `Acesse o QRCode`,
        files
    });

}

// function imprimir() {

//     let conteudo = document.getElementById('gerouQR').innerHTML;
//     let tela_impressao = window.open();


//     tela_impressao.document.write(conteudo);
//     tela_impressao.print();
//     // tela_impressao.window.close();

// }


