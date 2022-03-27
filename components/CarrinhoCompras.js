import { View, Text } from "react-native";
import { List } from "react-native-paper";

export default function CarrinhoCompras(props) {
    return (

        <View style={{ flex: 1, justifyContent: "center" }}>
            <Text>Carrinho de compras</Text>
            {props.produtos.map((produto, index) => {
                return (
                            
                    <List.Item
                        key={index}
                        title={produto.quantidade}
                        description={produto.nome}
                        left={props => <List.Icon {...props} icon="cart" />}
                    />
                )
            })}
        </View>
    );
}