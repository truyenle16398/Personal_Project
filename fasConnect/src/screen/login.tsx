import * as React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './../styles/login-styles'
import { Roles } from './../core/role.enum'


export default class Login extends React.Component<{}>{
  constructor(props) {
    super(props);
  }

  roleComponent = () => {
    return(
      Object.entries(Roles).map((item) => {
        return (
          <TouchableOpacity key={item[0]} style={styles.touchable}>
            <Image
              style={styles.imageStyles}
              source={item[1] === Roles.PARENTS
                ? require('./../../assets/parents.png')
                : require('./../../assets/teacher.png')}
            />
            <Text style={
              [{ color: item[1] === Roles.PARENTS ? '#039be5' : '#FF8F0C' },
              styles.title2]
              }>{item[1]}</Text>
          </TouchableOpacity>
        )
      })
    )

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Chọn vai trò của bạn</Text>
        {this.roleComponent()}
      </View>
    );
  }
}