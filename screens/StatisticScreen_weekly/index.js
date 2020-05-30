//index.js
import React, {Component, useEffect, useState} from 'react';
import { Image, Text, View, ScrollView, StyleSheet, TouchableHighlight, TextInput} from 'react-native';
import * as Progress from 'react-native-progress';
import styles from './styles';
import { KakaoRegularText, KakaoBoldText } from '../../components/StyledText';
import { BarChart, PieChart, XAxis, Grid } from 'react-native-svg-charts';
import * as scale from 'd3-scale'
import axios from '../../utils/axios';

export default HomeScreen = (props) => {

  const graphdata = [1000, 1800, 1500, 1200, 600, 900, 1100]

  const [pichartdata, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await axios.get('/login');
      const sampleData = {
        calorie: 2332,
        nutrients: {
          carbohydrate: 0.5,
          protein: 0.25,
          fat: 0.25,
        },
      };
      pichartdata.name = res.data.kor_name;
      setData({
        ...sampleData,
        ...pichartdata,
      });
      setLoading(false);
    })();
  }, []);

  return (
    <ScrollView style={styles.container} >
      <KakaoBoldText style={styles.Title}>�м�</KakaoBoldText>

        <View style={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
        </View>


      <View style={styles.productContainer}>

          <KakaoBoldText style={styles.weekText}>���� �� ��</KakaoBoldText>
      </View>
      <KakaoBoldText style={styles.calText}>Cal  <KakaoBoldText style={styles.circleText}> ��</KakaoBoldText></KakaoBoldText>
      <View style={{ height: 230, paddingLeft: 100, pdadingRight: 0, width: 310, paddingTop: 20, paddingBottom: 20}}>
          <BarChart
              style={{ flex: 1}}
              data={graphdata}
              gridMin={0}
              svg={{ fill: '#B5BACE' }}
          />

          <XAxis
              style={{ marginTop: 11}}
              data={graphdata}
              scale={scale.scaleBand}
              formatLabel={ (value, index) => index }
              labelStyle={ { color: 'black' } }
          />
      </View>
      
      <View style={styles.weekContainer}>
        <KakaoRegularText style={styles.weekText}>���� �� �� ��� �������</KakaoRegularText>
      </View>
        <View style={styles.secondContainer}>  
        <View style={{ justifyContent: 'center', flex: 1, marginBottom: 15 }}>
            <View style={styles.graphCalText}>
              <KakaoRegularText style={{ fontSize: 32, textAlign: 'center' }}>
                {pichartdata.calorie} 
              </KakaoRegularText>
              <KakaoRegularText style={{
                fontSize: 11, textAlign: 'center', color: '#352641', opacity: 53,
              }}
              >
                Kcal
              </KakaoRegularText>
            </View>
            <PieChart
              style={{ width: 200, height: 200 }}
              valueAccessor={({ item }) => item.percent}
              data={[
                {
                  key: 1,
                  percent: pichartdata.nutrients.carbohydrate,
                  svg: { fill: '#608BAC' },
                },
                {
                  key: 2,
                  percent: pichartdata.nutrients.protein,
                  svg: { fill: '#D47FA6' },
                },
                {
                  key: 3,
                  percent: pichartdata.nutrients.fat,
                  svg: { fill: '#B5BACE' },
                },
              ]}
              spacing={0}
              outerRadius="100%"
              innerRadius="75%"
              startAngle={Math.PI / 3}
              endAngle={Math.PI * (7 / 3)}
            />
          </View>
          <View>
            <View style={styles.nutpgContainer}>
              <KakaoRegularText style={styles.pgbarNutText}>
                ź��ȭ��
              </KakaoRegularText>
              <Progress.Bar style={{ alignSelf: 'center' }} progress={pichartdata.nutrients.carbohydrate} color="#87A9C3" unfilledColor="#EAE7F0" width={183} height={19} borderRadius={7} />
              <KakaoRegularText style={styles.pgbarPercentText}>
                {pichartdata.nutrients.carbohydrate * 100}
                %
              </KakaoRegularText>
            </View>
            <View style={styles.nutpgContainer}>
              <KakaoRegularText style={styles.pgbarNutText}>
                �ܹ���
              </KakaoRegularText> 
              <Progress.Bar progress={pichartdata.nutrients.protein} color="#D47FA6" unfilledColor="#EAE7F0" width={183} height={19} borderRadius={7} />
              <KakaoRegularText style={styles.pgbarPercentText}>
                {pichartdata.nutrients.protein * 100}
                %
              </KakaoRegularText>
            </View>
            <View style={styles.nutpgContainer}>
              <KakaoRegularText style={styles.pgbarNutText}>
                ����
              </KakaoRegularText>
              <Progress.Bar progress={pichartdata.nutrients.fat} color="#B5BACE" unfilledColor="#EAE7F0" width={183} height={19} borderRadius={7} />
              <KakaoRegularText style={styles.pgbarPercentText}>
                {pichartdata.nutrients.fat * 100}
                %
              </KakaoRegularText>
            </View>
          </View>

      </View>

      <View style={styles.weekContainer}>
        <KakaoRegularText style={styles.weekText}>���� �� �� �̾߱�</KakaoRegularText>
      </View>

        <View style={styles.filterContainer}>
          <Image
            style={styles.filterImage}
            source={require('../../assets/images/statistics/favorite.png')}
          />
            <KakaoRegularText style={styles.filterText}>�ǰ�</KakaoRegularText>
        </View>
        <KakaoRegularText style={styles.comment}>
        �̹��ִ� ��ǥ Į�θ��� ���� �����߽��ϴ�! 
        �Ļ� ������ �м��� ���, �Ϸ��Ϸ� ����Ұ� ������ ������ �ֽ��ϴ�. 
        ���ݸ� �� ����ϸ� �ǰ��� ����� �� ���Դϴ�. ������ �����ֿ� ���� �ܹ����� ���ټ��� �ϼ̽��ϴ�. 
        ��¼�� ��ǥ Į�θ��� �� ������ �ٰ����� ���� ���� �Ϸ� �ܹ��� �������� �ʰ��߱� ������ �� �ֽ��ϴ�.
        </KakaoRegularText>

        <View style={styles.filterContainer}>
          <Image
            style={styles.filterImage}
            source={require('../../assets/images/statistics/error.png')}
          />
            <KakaoRegularText style={styles.filterText}>����</KakaoRegularText>
        </View>
        <KakaoRegularText style={styles.comment}>
        ��� �ʿ� �̻��� �ܹ����� ������ ��쿡�� ��κ� Į�θ��� ������� ��ȯ�� �� �������� ���ϱ� ������ �����ؾ� �մϴ�. 
        ������ ü���� ������ �� ������ ü���� ���ٷ� ���̾�Ʈ�� ������ �� �ֽ��ϴ�. ���� ���ӿ� ���� ������ ������ ���忡 ��Ʈ���� �� �� ������, 
        ���� Ż������ ���� ��� ��ġ�� ���� ��ǳ, ����Ἦ, ��ٰ��� ���� �߻��� �� �ֽ��ϴ�. �ް��� ������ȭ�� �Ͼ�ϴ�.
        </KakaoRegularText>

        <View style={styles.filterContainer}>
          <Image
            style={styles.filterImage}
            source={require('../../assets/images/statistics/smile.png')}
          />
            <KakaoRegularText style={styles.filterText}>����</KakaoRegularText>
        </View>
        <KakaoRegularText style={styles.comment}>
        �ܹ����� ������ �ÿ��� ������ ���밡 �ƴ� ���緮�� �����Ͻô� ���� ������, 
        ���� �����ϴ� �ܹ��� �Ŀ�����ٴ� ��ǰ���� �����ϴ� ������ �ܹ����� �����ϴ� ���� �߿��մϴ�. 
        ������ �ܹ��� ���뿡 ������ �ִ� ������ �κ�, ��¡��, ���, �Ұ��, �׸��� �߰������� �ֽ��ϴ�.
        </KakaoRegularText>

    </ScrollView >
  );
}