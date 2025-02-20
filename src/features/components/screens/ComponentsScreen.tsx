import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { useTheme } from '@shared/theme/ThemeProvider';
import { Button } from '@shared/components/Button';
import { Card } from '@shared/components/Card';
import { TextInput } from '@shared/components/TextInput';
import { Header } from '@shared/components/Header';

export const ComponentsScreen: React.FC = () => {
  const { theme } = useTheme();
  const [inputValue, setInputValue] = useState('');

  const renderSection = (title: string) => (
    <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
      {title}
    </Text>
  );

  const handlePress = () => Alert.alert('Button Pressed!');

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      {renderSection('Headers')}
      <Header
        title="Primary Header"
        variant="primary"
        leftIcon="arrow-back"
        rightIcon="notifications-outline"
      />
      <Header
        title="Transparent Header"
        variant="transparent"
        leftIcon="menu"
        rightIcon="search"
      />
      <Header
        title="Elevated Header"
        variant="elevated"
        leftIcon="arrow-back"
        rightIcon="ellipsis-vertical-sharp"
      />

      {renderSection('Buttons')}
      <View style={styles.row}>
        <Button title="Filled" onPress={handlePress} variant="filled" />
        <Button title="Outlined" onPress={handlePress} variant="outlined" />
        <Button title="Text" onPress={handlePress} variant="text" />
      </View>

      {renderSection('Cards')}
      <Card variant="elevated">
        <Text style={{color: theme.colors.text}}>Elevated Card</Text>
      </Card>
      <Card variant="outlined">
        <Text style={{color: theme.colors.text}}>Outlined Card</Text>
      </Card>
      <Card variant="filled">
        <Text style={{color: theme.colors.text}}>Filled Card</Text>
      </Card>

      {renderSection('Text Inputs')}
      <TextInput
        label="Outlined Input"
        placeholder="Type something..."
        variant="outlined"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TextInput
        label="Filled Input"
        placeholder="Type something..."
        variant="filled"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TextInput
        label="Underlined Input"
        placeholder="Type something..."
        variant="underlined"
        value={inputValue}
        onChangeText={setInputValue}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
}); 