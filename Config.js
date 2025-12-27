<script>
/* ===============================
   CONFIGURAÇÕES GERAIS
   =============================== */

// NOME DA LOJA
const lojaNome = "MD Store";

// NÚMERO DO WHATSAPP (COM DDI E SEM ESPAÇOS)
// Ex: Brasil = 55
const whatsappNumero = "5500000000000";

// MENSAGEM PADRÃO
const mensagemPadrao = "Olá, quero comprar o produto:";


/* ===============================
   FUNÇÃO DE COMPRA
   =============================== */

function comprarProduto(nomeProduto, precoProduto) {

    // MONTA A MENSAGEM
    const mensagem = `${mensagemPadrao} ${nomeProduto} no valor de ${precoProduto}`;

    // CONVERTE PARA LINK
    const linkWhatsapp =
        `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagem)}`;

    // ALERTA DE CONFIRMAÇÃO
    const confirmar = confirm(
        `Você será redirecionado para o WhatsApp\n\nProduto: ${nomeProduto}\nPreço: ${precoProduto}`
    );

    // SE CONFIRMAR, ABRE O WHATS
    if (confirmar) {
        window.open(linkWhatsapp, "_blank");
    }
}


/* ===============================
   FEEDBACK NO CONSOLE (DEBUG)
   =============================== */

console.log(`${lojaNome} carregada com sucesso 🚀`);
</script>
