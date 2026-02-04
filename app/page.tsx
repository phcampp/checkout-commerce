"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingBag, CreditCard, Lock, ChevronRight, X, HelpCircle, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const products = [
  {
    id: 1,
    name: "Blazer Alfaiataria Premium",
    price: 459.90,
    quantity: 1,
    size: "M",
    image: "/images/blazer-feminino.jpg"
  },
  {
    id: 2,
    name: "Vestido Elegante Noite",
    price: 389.90,
    quantity: 1,
    size: "P",
    image: "/images/vestido-elegante.jpg"
  },
  {
    id: 3,
    name: "Calca Alfaiataria Clássica",
    price: 279.90,
    quantity: 1,
    size: "38",
    image: "/images/calca-alfaiataria.jpg"
  }
]

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit")
  const [cartItems, setCartItems] = useState(products)
  const [showHelp, setShowHelp] = useState(false)

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 29.90
  const total = subtotal + shipping

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const whatsappNumber = "5511953069845"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Header */}
      <header className="bg-[#1C1917] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-serif tracking-wide">P-Couture</h1>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href={`tel:+${whatsappNumber}`} className="hover:text-[#D4AF37] transition-colors hidden sm:block">
                (11) 95306-9845
              </a>
              <a href={`mailto:contato@pcouture.com.br`} className="hover:text-[#D4AF37] transition-colors hidden sm:block">
                contato@pcouture.com.br
              </a>
              <div className="flex items-center gap-1">
                <Lock className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-xs">Compra Segura</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E7E5E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-[#78716C]">
            <span>Carrinho</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#1C1917] font-medium">Checkout</span>
            <ChevronRight className="h-4 w-4" />
            <span>Confirmação</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Info */}
            <Card className="border-[#E7E5E4] shadow-sm">
              <CardHeader className="bg-[#1C1917] text-white rounded-t-lg">
                <CardTitle className="text-lg font-serif flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Informações de Entrega
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#44403C]">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#44403C]">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cpf" className="text-[#44403C]">CPF</Label>
                    <Input id="cpf" placeholder="000.000.000-00" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#44403C]">Telefone</Label>
                    <Input id="phone" placeholder="(11) 95306-9845" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cep" className="text-[#44403C]">CEP</Label>
                    <Input id="cep" placeholder="00000-000" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="address" className="text-[#44403C]">Endereço</Label>
                    <Input id="address" placeholder="Rua, número" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="complement" className="text-[#44403C]">Complemento</Label>
                    <Input id="complement" placeholder="Apto, bloco" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="neighborhood" className="text-[#44403C]">Bairro</Label>
                    <Input id="neighborhood" placeholder="Bairro" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-[#44403C]">Cidade/UF</Label>
                    <Input id="city" placeholder="São Paulo - SP" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Info */}
            <Card className="border-[#E7E5E4] shadow-sm">
              <CardHeader className="bg-[#1C1917] text-white rounded-t-lg">
                <CardTitle className="text-lg font-serif flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Forma de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${paymentMethod === "credit" ? "border-[#D4AF37] bg-[#FEF7E0]" : "border-[#E7E5E4] hover:border-[#D4AF37]/50"}`}>
                    <RadioGroupItem value="credit" id="credit" className="text-[#D4AF37]" />
                    <Label htmlFor="credit" className="flex-1 cursor-pointer">
                      <span className="font-medium text-[#1C1917]">Cartão de Crédito</span>
                      <p className="text-sm text-[#78716C]">Parcele em até 12x sem juros</p>
                    </Label>
                    <div className="flex gap-1">
                      <div className="w-8 h-5 bg-[#1A1F71] rounded text-white text-[8px] flex items-center justify-center font-bold">VISA</div>
                      <div className="w-8 h-5 bg-[#EB001B] rounded text-white text-[8px] flex items-center justify-center font-bold">MC</div>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${paymentMethod === "pix" ? "border-[#D4AF37] bg-[#FEF7E0]" : "border-[#E7E5E4] hover:border-[#D4AF37]/50"}`}>
                    <RadioGroupItem value="pix" id="pix" className="text-[#D4AF37]" />
                    <Label htmlFor="pix" className="flex-1 cursor-pointer">
                      <span className="font-medium text-[#1C1917]">PIX</span>
                      <p className="text-sm text-[#78716C]">Aprovação instantânea - 5% de desconto</p>
                    </Label>
                    <div className="w-8 h-8 bg-[#32BCAD] rounded flex items-center justify-center text-white text-xs font-bold">PIX</div>
                  </div>
                  <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${paymentMethod === "boleto" ? "border-[#D4AF37] bg-[#FEF7E0]" : "border-[#E7E5E4] hover:border-[#D4AF37]/50"}`}>
                    <RadioGroupItem value="boleto" id="boleto" className="text-[#D4AF37]" />
                    <Label htmlFor="boleto" className="flex-1 cursor-pointer">
                      <span className="font-medium text-[#1C1917]">Boleto Bancário</span>
                      <p className="text-sm text-[#78716C]">Vencimento em 3 dias úteis</p>
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "credit" && (
                  <div className="space-y-4 mt-6 pt-4 border-t border-[#E7E5E4]">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="text-[#44403C]">Número do Cartão</Label>
                      <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardName" className="text-[#44403C]">Nome no Cartão</Label>
                      <Input id="cardName" placeholder="Como está no cartão" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry" className="text-[#44403C]">Validade</Label>
                        <Input id="expiry" placeholder="MM/AA" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="text-[#44403C]">CVV</Label>
                        <Input id="cvv" placeholder="123" className="border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="installments" className="text-[#44403C]">Parcelas</Label>
                      <select id="installments" className="w-full p-2 rounded-md border border-[#D6D3D1] focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-white text-[#1C1917]">
                        <option value="1">1x de R$ {total.toFixed(2)} sem juros</option>
                        <option value="2">2x de R$ {(total / 2).toFixed(2)} sem juros</option>
                        <option value="3">3x de R$ {(total / 3).toFixed(2)} sem juros</option>
                        <option value="6">6x de R$ {(total / 6).toFixed(2)} sem juros</option>
                        <option value="12">12x de R$ {(total / 12).toFixed(2)} sem juros</option>
                      </select>
                    </div>
                  </div>
                )}

                {paymentMethod === "pix" && (
                  <div className="mt-6 pt-4 border-t border-[#E7E5E4] text-center">
                    <div className="bg-[#F5F5F4] p-6 rounded-lg">
                      <p className="text-[#78716C] mb-2">O QR Code PIX será gerado após confirmar o pedido</p>
                      <p className="text-2xl font-bold text-[#22C55E]">5% de desconto: R$ {(total * 0.95).toFixed(2)}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-[#E7E5E4] shadow-sm sticky top-24">
              <CardHeader className="bg-[#1C1917] text-white rounded-t-lg">
                <CardTitle className="text-lg font-serif">Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3 relative group">
                      <div className="relative w-20 h-24 rounded-md overflow-hidden bg-[#F5F5F4] flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm text-[#1C1917] truncate">{item.name}</h3>
                        <p className="text-xs text-[#78716C]">Tamanho: {item.size}</p>
                        <p className="text-xs text-[#78716C]">Qtd: {item.quantity}</p>
                        <p className="font-semibold text-[#1C1917] mt-1">R$ {item.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#78716C] hover:text-[#DC2626]"
                        aria-label="Remover item"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-[#78716C]">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#78716C]">
                    <span>Frete</span>
                    <span className={shipping === 0 ? "text-[#22C55E] font-medium" : ""}>
                      {shipping === 0 ? "Grátis" : `R$ ${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {paymentMethod === "pix" && (
                    <div className="flex justify-between text-[#22C55E]">
                      <span>Desconto PIX (5%)</span>
                      <span>- R$ {(total * 0.05).toFixed(2)}</span>
                    </div>
                  )}
                  <Separator className="my-2" />
                  <div className="flex justify-between text-lg font-bold text-[#1C1917]">
                    <span>Total</span>
                    <span>R$ {(paymentMethod === "pix" ? total * 0.95 : total).toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-[#D4AF37] hover:bg-[#B8962E] text-[#1C1917] font-semibold py-6 text-base">
                  <Lock className="h-4 w-4 mr-2" />
                  Finalizar Compra
                </Button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#78716C]">
                  <Lock className="h-3 w-3" />
                  <span>Pagamento 100% seguro</span>
                </div>

                {shipping > 0 && (
                  <p className="text-xs text-center text-[#78716C] mt-4">
                    Frete grátis para compras acima de R$ 500
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1C1917] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">P-Couture</h3>
              <p className="text-sm text-[#A8A29E]">
                Elegância e sofisticação em cada peça. Moda feminina de alta qualidade para mulheres que valorizam estilo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-[#A8A29E]">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (11) 95306-9845
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contato@pcouture.com.br
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  suporte@pcouture.com.br
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Institucional</h4>
              <ul className="space-y-2 text-sm text-[#A8A29E]">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Trocas e Devoluções</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2 text-sm text-[#A8A29E]">
                <li>Segunda a Sexta: 9h às 18h</li>
                <li>Sábado: 9h às 13h</li>
                <li className="pt-2">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20BD5A] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-[#44403C]" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#A8A29E]">
            <p>© 2026 P-Couture. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <Lock className="h-4 w-4" />
              <span>Site Seguro</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Help Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] shadow-lg"
          size="icon"
        >
          <HelpCircle className="h-6 w-6 text-white" />
          <span className="sr-only">Ajuda via WhatsApp</span>
        </Button>
      </a>

      {/* Help Modal/Tooltip */}
      <div className="fixed bottom-24 right-6 z-50 animate-bounce">
        <div className="bg-white rounded-lg shadow-lg p-3 text-sm text-[#1C1917] border border-[#E7E5E4]">
          <p className="font-medium">Precisa de ajuda?</p>
          <p className="text-[#78716C] text-xs">Clique para falar conosco!</p>
        </div>
      </div>
    </div>
  )
}
