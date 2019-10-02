//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {View, StyleSheet, Platform, ScrollView, Dimensions} from 'react-native';
//import all the basic component we have used
import {Header, Button, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {db} from '../config/Firebase';
import moment from 'moment';

const list = [];
const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

const items = [
  // this is the parent or 'item'
  {
    name: 'Upstairs',
    id: 1,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Cleaning A',
        id: 10,
      },
      {
        name: 'Washing A',
        id: 11,
      },
    ],
  },
  {
    name: 'Downstairs',
    id: 2,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Cleaning B',
        id: 20,
      },
      {
        name: 'Washing B',
        id: 21,
      },
    ],
  },
];

export default class ListCheck extends React.Component {
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

  componentDidMount() {
    db.collection('checkList')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if ((doc.data().date = moment().format())) {
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

  saveCheckList = () => {
    this.state.selectedItems.map(value => {
      items.map(obj => {
        obj.children.map(item => {
          if (item.id === value) {
            //save job to database
            //get current date
            var date = moment().format();
            //create object of job done
            const jobDone = {
              checkedBy: 'Glade',
              job: item.name,
              date: date,
            };
            db.collection('checkList')
              .doc()
              .set(jobDone);
          }
        });
      });
    });
  };

  // saveCheckList = () => {
  //   this.state.selectedItems.map(value => {
  //     console.log(value);
  //     items.map(item => {
  //       item.map(i => {
  //         if ((i.id = value)) {
  //           console.log(i);
  //         }
  //       });
  //       if (item.children.id === value) {
  //         console.log(item.name);

  //         item.children.find(child => {
  //           if ((child.id = value)) {
  //             console.log(child.name);
  //           }
  //         });
  //       }
  //     });
  //   });
  // };
  onSelectedItemsChange = selectedItems => {
    this.setState({selectedItems});
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: list,
  //   };
  // }

  // _onPressItem = index => {
  //   // loop over your state data and create newStateArray
  //   let newState = this.state.list.map((val, i) => {
  //     if (i === index) {
  //       // change selected value of pressed entry
  //       return {...val, selected: !val.selected};
  //     }
  //     //otherwise just return current value
  //   });

  //   this.setState({list: newState});
  //   console.log(list);
  // };

  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View style={{height: windowH, width: windowW}}>
        <Header
          containerStyle={styles.header}
          centerComponent={{text: 'Check List', style: {color: '#fff'}}}
        />
        <SectionedMultiSelect
          hideSearch={true}
          items={items}
          uniqueKey="id"
          subKey="children"
          selectText="Choose some things..."
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
        <Button title="Submit" onPress={this.saveCheckList} />
        <ScrollView>
          {this.state.list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{source: {uri: l.avatar_url}}}
              title={l.job}
              subtitle={l.checkedBy}
              bottomDivider
              onPress={() =>
                this.props.navigation.navigate('UserDetail', this.key)
              }
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {height: 56, paddingTop: 0},
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
