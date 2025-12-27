# ===============================
# CONFIGURAÇÕES DA LOJA
# ===============================

nome_loja = "MD Store"

produtos = [
    {"nome": "Produto 1", "preco": 25},
    {"nome": "Produto 2", "preco": 40},
    {"nome": "Produto 3", "preco": 60}
]

# ===============================
# LISTAR PRODUTOS
# ===============================

def listar_produtos():
    print(f"\n🛒 Bem-vindo à {nome_loja}\n")
    for i, produto in enumerate(produtos, start=1):
        print(f"{i}. {produto['nome']} - R$ {produto['preco']}")

# ===============================
# COMPRAR PRODUTO
# ===============================

def comprar():
    listar_produtos()
    escolha = int(input("\nDigite o número do produto: ")) - 1

    if 0 <= escolha < len(produtos):
        produto = produtos[escolha]
        print(f"\n✅ Você escolheu {produto['nome']}")
        print(f"💰 Valor: R$ {produto['preco']}")
        print("📲 Entre em contato no WhatsApp para finalizar.")
    else:
        print("❌ Produto inválido")

# ===============================
# EXECUÇÃO
# ===============================

comprar()
