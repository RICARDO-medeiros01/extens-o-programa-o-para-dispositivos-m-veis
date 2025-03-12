import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import UpdateStock from './components/UpdateStock';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Math.random().toString() }]);
  };

  const updateStock = (id, quantity) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity + quantity } : product
    );
    setProducts(updatedProducts);

    const product = updatedProducts.find((p) => p.id === id);
    if (product.quantity <= 0) {
      Alert.alert('Alerta', `${product.name} está em falta!`);
    }
  };

  return (
    <View style={styles.container}>
      <AddProduct onAddProduct={addProduct} />
      <UpdateStock products={products} onUpdateStock={updateStock} />
      <ProductList products={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
