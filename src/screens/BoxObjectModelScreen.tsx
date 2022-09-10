import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BoxObjectModelScreen() {
  return (
	<View>
	  <Text style={styles.title}>BoxObjectModel</Text>
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blue',
	},
	title: {
		fontSize: 20,
		width: 150,
		borderWidth: 2,
		color: 'white'
	}
})