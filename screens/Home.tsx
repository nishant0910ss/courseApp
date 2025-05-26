import React, {} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CourseList from '../components/CourseList';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Welcome to Coursera
        <Icon name="star" size={20} color="black" />
        {/* <Text>Cart : {cartData.length}</Text> */}
      </Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for courses..."
        placeholderTextColor="black"
      />
      <Text style={styles.sectionTitle}>Featured Courses</Text>
      <CourseList />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Courses')}>
        <Text style={styles.buttonText}>See All Courses</Text>
        <Icon name="chevron-forward" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

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

export default Home;
