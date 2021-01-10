import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, BackHandler, Linking } from 'react-native';
import { Button } from 'react-native-elements'
import styles from './../styles/login-styles'
import { Roles } from './../core/role.enum'
import { Colors } from '../core/color.enum'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather'
import mainStyles from '../core/main-styles';

interface State {
  currentRoles: string,
  tel: string,
  password: string,
  showPass: boolean,
  loginFail: boolean
}

interface Props {
  navigation: any
}

export default class Login extends React.Component<Props, State>{
  constructor(props) {
    super(props);
    this.state = {
      currentRoles: '',
      tel: '',
      password: '',
      showPass: true,
      loginFail: false
    }
    this.actionForButtonBack = this.actionForButtonBack.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.actionForButtonBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.actionForButtonBack);
  }

  actionForButtonBack() {
    const { currentRoles } = this.state
    currentRoles ? (
      this.changeRole(''),
      this.setState({ password: '', tel: '', showPass: true })
    ) : BackHandler.exitApp();
    return true;
  }

  roleContent = () => {
    const { currentRoles } = this.state
    return (
      Object.entries(Roles).map((item) => {
        return (
          <TouchableOpacity
            key={item[0]}
            disabled={currentRoles != ''}
            style={[currentRoles == '' && [styles.touchable, mainStyles.myShadow], { display: currentRoles != item[1] && currentRoles != '' ? 'none' : 'flex' }]}
            onPress={() => this.changeRole(item[1])}
          >
            <Image
              style={styles.imageRoles}
              source={item[1] === Roles.PARENTS
                ? require('./../../assets/parents.png')
                : require('./../../assets/teacher.png')}
            />
            <Text style={[styles.title2, { color: item[1] === Roles.PARENTS ? Colors.BLUE : Colors.ORANGE }]}>{item[1]}</Text>
          </TouchableOpacity>
        )
      })
    )
  }

  changeRole = (item) => {
    this.setState({ currentRoles: item, loginFail: false });
  }

  loginContent = () => {
    const { currentRoles, tel, password, showPass, loginFail } = this.state
    return (
      <View style={styles.loginComponent}>
        <View style={[styles.myRow, {borderColor: loginFail ? Colors.RED : 'silver'}]}>
          <View style={styles.myIcons}>
            <IconMaterialIcons name='phone-iphone' size={28} color='gray' style={{ fontWeight: 'bold', marginHorizontal: 20 }} />
          </View>
          <TextInput
            style={styles.myInput}
            placeholder='Số điện thoại'
            keyboardType={'phone-pad'}
            maxLength={11}
            value={tel}
            autoCapitalize='none'
            onChange={() => this.setState({ loginFail: false })}
            onChangeText={(val) => { this.setState({ tel: val }) }}
          />
        </View>
        <View style={[styles.myRow, {borderColor: loginFail ? Colors.RED : 'silver'}]}>
          <View style={styles.myIcons}>
            <IconAntDesign name='lock' size={28} color='gray' style={{ fontWeight: 'bold', marginHorizontal: 20 }} />
          </View>
          <TextInput
            style={styles.myInput}
            placeholder='Mật khẩu'
            value={password}
            secureTextEntry={showPass}
            onChange={() => this.setState({ loginFail: false })}
            onChangeText={(val) => { this.setState({ password: val }) }} />
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 12 }}
            onPress={() => this.setState({ showPass: !showPass })}
          >
            <IconFeather name={showPass ? 'eye' : 'eye-off'} size={26} color='gray' style={{ fontWeight: 'bold' }} />
          </TouchableOpacity>
        </View>
        {loginFail && (<Text style={[styles.hotline, { color: Colors.RED }]}>Tên đăng nhập hoặc mật khẩu không đúng</Text>)}
        <Button
          title='Đăng nhập'
          useForeground={true}
          // disabled={tel === '' || password === ''}
          buttonStyle={[styles.myButton, { backgroundColor: currentRoles === Roles.PARENTS ? Colors.BLUE : Colors.ORANGE }]}
          titleStyle={styles.titleButton}
          onPress={this.funcLogin}
        />
        <Text style={styles.description}>
          Bạn là {currentRoles === Roles.PARENTS ? Roles.TEACHER : Roles.PARENTS}?&nbsp;
          <Text
            style={{ color: currentRoles === Roles.PARENTS ? Colors.ORANGE : Colors.BLUE, textDecorationLine: 'underline' }}
            onPress={() => this.changeRole(currentRoles === Roles.PARENTS ? Roles.TEACHER : Roles.PARENTS)}
          >
            Đăng nhập
            </Text>
        </Text>
        <TouchableOpacity onPress={() => { Linking.openURL('tel:0792204642') }}>
          <Text style={styles.hotline}>Hotline:&nbsp;
            <Text style={[styles.hotline, { color: Colors.RED }]}>079 220 4642</Text>
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  funcLogin = () => {
    // const { tel, password } = this.state
    // tel != '1' && password != 'a'
    //   ? this.setState({ loginFail: true })
    //   : this.props.navigation.navigate('Drawer')
    this.props.navigation.navigate('Drawer')
  }

  render() {
    const { currentRoles } = this.state
    return (
      <View style={styles.container}>
        {currentRoles ? (
          <Image
            style={styles.imageLogo}
            source={require('./../../assets/logo.png')}
          />
        ) : (<Text style={styles.title}>Chọn vai trò của bạn</Text>)}
        {this.roleContent()}
        { currentRoles != '' && this.loginContent()}
      </View>
    );
  }
}