import {Image, Text, View} from 'react-native';
import styles from '../styles';

export default function OfferPill() {
  const s_offers = [
    {id: '0', path: require('../assets/flipkart.png')},
    {id: '1', path: require('../assets/shell.png')},
    {id: '2', path: require('../assets/apple.png')},
    {id: '3', path: require('../assets/cash.png')},
    {id: '4', path: require('../assets/apple.png')},
  ];
  const remainingOffers = () => {
    if (s_offers.length > 3) {
      return (
        <Text
          style={[
            {fontSize: 12, left: styles.device.width * 0.115, color: '#000'},
          ]}>
          +{s_offers.length - 3} offers
        </Text>
      );
    } else {
      return <View />;
    }
  };
  return (
    <View style={styles.offerpill}>
      {s_offers.map(offer => {
        if (Number(offer.id) > 2) {
          return;
        }
        return (
          <View
            key={offer.id}
            style={[
              {
                top: styles.device.width * 0.00001,
                left: styles.device.width * 0.01,
              },
            ]}>
            <View
              style={[
                {
                  position: 'absolute',
                  left: Number(offer.id) * styles.device.width * 0.03,
                  width: styles.device.width * 0.05,
                  height: styles.device.width * 0.05,
                  borderRadius: styles.device.width * 0.05,
                  backgroundColor: '#f8e9e5',
                  flexDirection: 'row',
                  zIndex: 5,
                  elevation: 5,
                },
              ]}>
              <Image
                style={[
                  styles.img,
                  {
                    width: styles.device.width * 0.042,
                    height: styles.device.width * 0.042,
                    left: -styles.device.width * 0.015,
                    top: -styles.device.width * 0.01,
                  },
                ]}
                source={offer.path}
              />
            </View>
          </View>
        );
      })}
      {remainingOffers()}
    </View>
  );
}
