import { View, Text, Alert, TouchableHighlight } from "react-native";
import { List } from "react-native-paper";

export default function Produtos(props) {
    return (

        <View style={{ flex: 1, justifyContent: "center" }}>
            <Text>Produtos a venda</Text>
            {props.produtos.map((produto, index) => {
                return (
                    <TouchableHighlight  key={index} onPress={() => props.escolherProduto(produto)} >

                     <List.Item
                            title={produto.nome}
                            description=""
                            left={props => <List.Icon {...props} icon="brightness-percent" />}
                            
                                 />
                    </TouchableHighlight>
                    
                )
            })}
        </View>
    );
}