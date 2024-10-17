import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CourseList from '../components/CourseList';
import Home from './Home';

const Courses = ({navigation}) => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch('https://dummyjson.com/quotes')
  //     .then(response => response.json())
  //     .then(data => setCourses(data.quotes))
  //     .catch(error => console.error('Error : ', error));
  // }, []);

  // const renderItem = ({item}) => (
  //   <View style={styles.cardContainer}>
  //     <TouchableOpacity style={styles.courseCard}>
  //       <Text style={styles.courseTitle}>{item.quote}</Text>
  //       <Text style={styles.courseInstructor}>{item.author}</Text>
  //     </TouchableOpacity>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={25} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Available Courses:</Text>
      </View>

      {/* <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
      /> */}
      <CourseList></CourseList>
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
    marginLeft: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  grid: {
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
    margin: 5,
  },
  courseCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  courseInstructor: {
    marginTop: 10,
    fontSize: 14,
    color: 'black',
  },
});

export default Courses;
