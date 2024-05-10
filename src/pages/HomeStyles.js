// styles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    height: '100%',
  },
  headerBox: {
    width: '100%',
    display: 'flex',    
    alignItems: 'center',
    border: '1px solid red',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    marginTop:48,
    backgroundColor: '#F8F8F8',
    width: '228px',
    textAlign: 'center',
  },
  mainCard: {
  width: '286px',
  height: '218px',
  borderRadius: '12px',
  padding: '16px',
  boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  justifyContent: 'space-between',
},
cardTitle : {
    fontSize: 16,
    fontWeight: '600',
    color: '#D6D7D8',
  
  },
  mainCardWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: '600',
    color:"white",
    lineHeight:34,
    letterSpacing: "%-1.9",
    marginTop:8
  },

  coinsSection: {
    margin:"18px",
    display: 'flex',
  },
  coinsSectionTitle: {
    fontWeight:"500",
    fontSize: 16,
  },
  coinCardWrapper: {
display: 'flex',
flexWrap: 'wrap',
flexDirection:"column"
  },
 
 
});
