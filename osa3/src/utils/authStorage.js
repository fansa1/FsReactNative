import AsyncStorage from '@react-native-community/async-storage';


class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken()  {
    const data = await AsyncStorage.getItem(
      `${this.namespace}:token`,
    );
    return data ? JSON.parse(data) : [];
  }
  
  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(accessToken),
    );
  }
  
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}


export default AuthStorage;