import { useState } from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import CarrinhoCompras from './components/CarrinhoCompras';
import Produtos from './components/Produtos';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'black',
  },
};


export default function App() {

  const [produtosCarrinho, setProdutosCarrinho] = useState([{"nome":"Caderno", quantidade:2}, {"nome":"Lápis", quantidade:1}, {"nome":"Mochila", quantidade:1}, {"nome":"Caderneta", quantidade:1}]);

  const [produtos, setProdutos] = useState([{"nome":"Caderno", quantidade:7}, {"nome":"Lápis", quantidade:50}, {"nome":"Mochila", quantidade:38}, {"nome":"Caderneta", quantidade:38}]);

  const escolherProduto = (produto) =>{
      let produtoAtualizado = []
      produtosCarrinho.forEach(produtoCarrinho => {
        
        if(produtoCarrinho.nome === produto.nome)
          produtoCarrinho.quantidade = produtoCarrinho.quantidade + 1
      
          produtoAtualizado.push(produtoCarrinho)
      })

      setProdutosCarrinho(produtoAtualizado)
      console.log(produtosCarrinho)
  }


  return (
    <PaperProvider theme={theme}>
      <CarrinhoCompras produtos={produtosCarrinho} />
      <Produtos escolherProduto={escolherProduto} produtos={produtos} />
    </PaperProvider>

  );
}