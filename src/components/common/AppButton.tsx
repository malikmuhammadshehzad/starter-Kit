import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {WIDTH, COLORS, GlobalStyles} from '../../assets';

interface appBtnType {
  title: string;
  onPress?: (title: string) => void;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  btnStyle?: ViewStyle;
  textStyle?: TextStyle;
  activeOpacity?: number;
  children?: JSX.Element | null;
}

export default function AppButton({
  title = '',
  onPress = () => {},
  disabled = false,
  loading = false,
  loadingColor = COLORS.white,
  btnStyle = {},
  textStyle = {},
  activeOpacity = 0.8,
  children = null,
}: appBtnType): JSX.Element {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={activeOpacity}
      onPress={() => onPress(title)}
      style={[styles(disabled).btn, btnStyle]}>
      {children && <View style={styles().childrenViewStyle}>{children}</View>}
      {title ? (
        <Text style={[styles().title, textStyle]} numberOfLines={1}>
          {title}
        </Text>
      ) : null}

      {loading && (
        <ActivityIndicator color={loadingColor} style={styles().loading} size={'small'} />
      )}
    </TouchableOpacity>
  );
}

const styles = (disabled?: boolean) =>
  StyleSheet.create({
    btn: {
      width: WIDTH - 40,
      borderRadius: 8,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      zIndex: 9,
      backgroundColor: disabled ? COLORS.primaryLight : COLORS.primary,
    },

    title: {
      ...GlobalStyles.l1,
      color: 'rgba(255, 255, 255, 1)',
    },

    loading: {marginLeft: 10},
    childrenViewStyle: {
      marginRight: 20,
    },
  });
