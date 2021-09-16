import MainLoginUi from './MainLogin.presenter';

import React from 'react';
import {useForm} from 'react-hook-form';
// import auth from '@react-native-firebase/auth';
import {useContext} from 'react';
import {GlobalContext} from '../../../../../App';
import {useApolloClient, useMutation} from '@apollo/client';
import {FETCH_USER_LOGGED_IN, LOGIN_USER} from './MainLogin.queries';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainBottomTabNavigationPage from '../../../../../pages/navigation/MainBottomTabNavigation';

const MainLogin = (props: any) => {
  const {setUserInfo, userInfo, setAccessToken} = useContext(GlobalContext);
  const client = useApolloClient();
  const [loginUser] = useMutation(LOGIN_USER); // 일반 로그인

  const onAppLogin = async (data: any) => {
    try {
      const result = await loginUser({
        variables: {email: data.email, password: data.password},
      });
      const resultUser = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `Bearer ${result.data?.loginUser.accessToken}`,
          },
        },
      });
      AsyncStorage.setItem(
        'accessToken',
        result.data.loginUser.accessToken || '',
      );
      AsyncStorage.setItem('userInfo', resultUser.data.fetchUserLoggedIn || '');

      setAccessToken(result.data?.loginUser.accessToken);
      setUserInfo(resultUser.data.fetchUserLoggedIn);
      const test1 = async () => {
        const result11 = await AsyncStorage.getItem('userInfo');
        console.log(result11);
      };
      test1();
      Alert.alert('로그인 완료');
    } catch (error) {
      console.log(error.message);
    }
  };

  const {handleSubmit, control} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  if (!userInfo) {
    return (
      <MainLoginUi
        navigation={props.navigation}
        onAppLogin={onAppLogin}
        control={control}
        handleSubmit={handleSubmit}
      />
    );
  }
  return <MainBottomTabNavigationPage />;
};
export default MainLogin;

// const test2 = async () => {
//   const result = await AsyncStorage.getItem('accessToken');
//   console.log(result);
// };
// test2();
const test1 = async () => {
  const result = await AsyncStorage.getItem('userInfo');
  console.log(result);
};
test1();
