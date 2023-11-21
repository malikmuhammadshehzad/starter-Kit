import React from 'react';
import Svg, {Path} from 'react-native-svg';
import COLORS from '../colors';

export interface IconType {
  color: string;
  width: string;
  height: string;
}

export default function HomeBottomIcon({
  color = COLORS.seconday,
  width = '22',
  height = '20',
}: IconType): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox={'0 0 22 20'}>
      <Path
        d={
          'M19 18.9999C19 19.2651 18.8946 19.5195 18.7071 19.707C18.5196 19.8946 18.2652 19.9999 18 19.9999H4C3.73478 19.9999 3.48043 19.8946 3.29289 19.707C3.10536 19.5195 3 19.2651 3 18.9999V9.99992H0L10.327 0.61192C10.5111 0.444398 10.7511 0.351562 11 0.351562C11.2489 0.351563 11.4889 0.444398 11.673 0.61192L22 9.99992H19V18.9999ZM17 17.9999V8.15692L11 2.70292L5 8.15692V17.9999H17ZM11 15.9999L7.641 12.6409C7.43207 12.432 7.26633 12.1839 7.15326 11.911C7.04018 11.638 6.98199 11.3454 6.98199 11.0499C6.98199 10.7544 7.04018 10.4619 7.15326 10.1889C7.26633 9.91589 7.43207 9.66785 7.641 9.45892C7.84993 9.24999 8.09797 9.08425 8.37096 8.97118C8.64394 8.8581 8.93652 8.79991 9.232 8.79991C9.52748 8.79991 9.82006 8.8581 10.093 8.97118C10.366 9.08425 10.6141 9.24999 10.823 9.45892L11 9.63592L11.177 9.45892C11.3859 9.24999 11.634 9.08425 11.907 8.97118C12.1799 8.8581 12.4725 8.79991 12.768 8.79991C13.0635 8.79991 13.3561 8.8581 13.629 8.97118C13.902 9.08425 14.1501 9.24999 14.359 9.45892C14.5679 9.66785 14.7337 9.91589 14.8467 10.1889C14.9598 10.4619 15.018 10.7544 15.018 11.0499C15.018 11.3454 14.9598 11.638 14.8467 11.911C14.7337 12.1839 14.5679 12.432 14.359 12.6409L11 15.9999Z'
        }
        fill={color}
      />
    </Svg>
  );
}