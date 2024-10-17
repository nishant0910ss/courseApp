import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import addToCart from '../redux/actions';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setCourses(data.products))
      .catch(error => console.error('Error: ', error));
  }, []);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const cartData = useSelector(state => state.reducer);
  const cartItems = cartData.length
  console.log(cartItems);

  const renderItem = ({item}) => (
    <View style={styles.courseCard}>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <View style={styles.authorButtonContainer}>
        <Text style={styles.courseInstructor}>{item.category}</Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => handleAddToCart(item)}>
          <Text style={styles.addCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
  );
}

export default CourseList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#cbf1f6',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  courseCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    marginHorizontal: 10,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  courseInstructor: {
    fontSize: 14,
    color: 'black',
    marginTop: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    marginRight: 8,
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: '#11d611',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  authorButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  addCartButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});
