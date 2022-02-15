import * as React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './Styles/HomeStyle';

export default function HomeScreen() {
  const { users } = useSelector((state) => state.randomUser);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.userList}
        data={users}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.userDetailRow,
              index + 1 === users.length && styles.lastRow
            ]}
          >
            <Image
              style={styles.userImg}
              source={{ uri: item.picture.thumbnail }}
            />
            <View style={styles.userDetail}>
              <Text style={styles.userName}>
                {item.name.title} {item.name.first} {item.name.last}
              </Text>
              <Text style={styles.userAge}>
                {item.gender} / {item.dob.age}
              </Text>
              <Text style={styles.userEmail}>{item.email}</Text>
              <Text style={styles.userPhone}>{item.phone}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => `user_${item.name.first}_${index}`}
      />
    </View>
  );
}
