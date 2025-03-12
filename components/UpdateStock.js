import React, { useState } from 'react';
import { View, Picker, Button, StyleSheet, Alert } from 'react-native';

const UpdateStock = ({ products, onUpdateStock }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleUpdateStock = () => {
    if (selectedProduct && quantity) {
      onUpdateStock(selectedProduct, parseFloat(quantity));
      setQuantity('');
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedProduct}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedProduct(itemValue)}
      >
        <Picker.Item label="Selecione um produto" value="" />
        {products.map((product) => (
          <Picker.Item key={product.id} label={product.name} value={product.id} />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Quantidade (KG)"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Atualizar Estoque" onPress={handleUpdateStock} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default UpdateStock;
