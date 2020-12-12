import React from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import {renderItem} from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Text from './Text'


const styles = StyleSheet.create({
  separator: {
  borderWidth: 10, 
  borderColor: `#f5f5f5`
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
   const { data, loading, error } = useRepositories();
   const repositoryNodes = data ? data.repositories.edges.map(edge => edge.node) : [];

 // const { data, loading } = useRepositories()
 // const repositoryNodes = data ?  data.repositories.edges.map(edge => edge.node) : [];
if(loading){
  return(
    <View>
    <Text fontWeight="bold"fontSize="subheading" color="secondary">Loading...</Text>
    </View>
  )
}
if(error){
  return(
    <View>
    <Text fontWeight="bold"fontSize="subheading" color="secondary">Error loading data...</Text>
    </View>
  )
} 
  return (
      <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    
  );
};

export default RepositoryList;