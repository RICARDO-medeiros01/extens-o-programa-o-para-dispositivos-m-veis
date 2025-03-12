import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddProduct = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddProduct = () => {
    if (name && quantity) {
      onAddProduct({ name, quantity: parseFloat(quantity) });
      setName('');
      setQuantity('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade (KG)"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Adicionar Produto" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
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

export default AddProduct;
