import React from 'react';
import {View, Text} from 'react-native';
import {Feather} from '@expo/vector-icons';

import {TouchableOpacity} from '../../common/TouchableOpacity';

import {getResponsiveWidth} from '../../../utils/dimensions';

import {darkBlue} from '../../../utils/colors';

import styles from './styles';

const WIDTH = getResponsiveWidth(20);

const NotificationCard = ({
  style = styles.containerError,
  icon = 'alert-octagon',
  textError = '网络请求出现未知错误，请确认是否联网',
  textButton = '刷新重试',
  onPress = null,
}) => (
  <View style={style}>
    <Feather name={icon} size={WIDTH} color={darkBlue} />
    <Text style={styles.errorInfo}>{textError}</Text>
    {onPress && (
      <TouchableOpacity style={styles.loadingButton} onPress={onPress}>
        <Text style={styles.loadingText}>{textButton}</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default NotificationCard;
