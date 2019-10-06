//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {View, Platform, ScrollView, Alert} from 'react-native';
//import all the basic component we have used
import {Header, Button, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {db} from '../config/Firebase';
import moment from 'moment';
//import list items
import {items} from '../assets/checklist';
import {styles} from '../assets/styles';
import {connect} from 'react-redux';

const list = [];

class ListCheck extends React.Component {
  static navigationOptions = {
    tabBarIcon: <Icon name="clipboard-check" size={22} />,
  };
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
    this.state = {list};
  }

  getCheckedList() {
    db.collection('checkList')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if ((doc.data().date = moment().format('YYYYMMDD'))) {
            var item = {
              job: doc.data().job,
              checkedBy: doc.data().checkedBy,
            };
            list.push(item);
            this.setState({list: list});
          }
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }
  componentDidMount() {
    this.getCheckedList();
  }

  saveCheckList = () => {
    this.state.selectedItems.map(value => {
      items.map(obj => {
        obj.children.map(item => {
          if (item.id === value) {
            //save job to database
            //get current date
            var date = moment().format('YYYYMMDDHHmm');
            //create object of job done
            const jobDone = {
              checkedBy: this.props.user.email,
              job: item.name,
              date: date,
            };
            db.collection('checkList')
              .doc()
              .set(jobDone);
            Alert.alert('You have successfully checked');
          }
        });
      });
    });
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({selectedItems});
  };

  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View style={styles.View}>
        <Header
          containerStyle={styles.header}
          centerComponent={{text: 'Check List', style: {color: '#fff'}}}
        />
        <SectionedMultiSelect
          //space for notch in iPhone
          {...Platform.select({
            ios: {modalWithSafeAreaView: true},
          })}
          hideSearch={true}
          items={items}
          uniqueKey="id"
          subKey="children"
          selectText="Choose some things..."
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          showRemoveAll={true}
        />
        <Button title="Submit" onPress={this.saveCheckList} />
        <ScrollView>
          {this.state.list.map((l, i) => (
            <ListItem
              key={i}
              title={l.job}
              subtitle={l.checkedBy}
              bottomDivider
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(ListCheck);
